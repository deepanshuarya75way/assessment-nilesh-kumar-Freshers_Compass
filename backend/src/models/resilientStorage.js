import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../../.data');
const DATA_FILE = path.join(DATA_DIR, 'local_db.json');

// Ensure storage directory exists
if (!fs.existsSync(DATA_DIR)) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch (err) {
    console.warn('[ResilientStore] Could not create .data directory:', err.message);
  }
}

// In-memory collections table
const store = {
  Resume: [],
  Profile: [],
  Application: [],
  User: [],
};

// Load existing data from disk if present
try {
  if (fs.existsSync(DATA_FILE)) {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    for (const key of Object.keys(store)) {
      if (Array.isArray(parsed[key])) {
        store[key] = parsed[key];
      }
    }
    console.log('[ResilientStore] Loaded local offline cache from:', DATA_FILE);
  }
} catch (err) {
  console.warn('[ResilientStore] Error reading cache file:', err.message);
}

// Debounced flush to disk
let saveTimer = null;
function persistStore() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      fs.writeFileSync(DATA_FILE, JSON.stringify(store, null, 2), 'utf8');
    } catch (err) {
      console.warn('[ResilientStore] Error writing cache file:', err.message);
    }
  }, 200);
}

function matchDoc(doc, filter) {
  if (!filter || Object.keys(filter).length === 0) return true;
  for (const [key, val] of Object.entries(filter)) {
    if (key === '$or' && Array.isArray(val)) {
      if (!val.some((sub) => matchDoc(doc, sub))) return false;
      continue;
    }
    if (key === '_id') {
      const docId = String(doc._id || '');
      const targetId = String(val?._id || val || '');
      if (docId !== targetId) return false;
      continue;
    }
    if (val && typeof val === 'object' && '$ne' in val) {
      if (String(doc[key]) === String(val.$ne)) return false;
      continue;
    }
    if (doc[key] !== val && String(doc[key]) !== String(val)) {
      return false;
    }
  }
  return true;
}

function setNestedPath(obj, path, value) {
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]] || typeof current[parts[i]] !== 'object') {
      current[parts[i]] = {};
    }
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

function applyUpdate(doc, update) {
  const updated = { ...doc, updatedAt: new Date() };

  if (update.$set) {
    for (const [k, v] of Object.entries(update.$set)) {
      if (k.includes('.')) {
        setNestedPath(updated, k, v);
      } else {
        updated[k] = v;
      }
    }
  }

  if (update.$pull) {
    for (const [k, pullCond] of Object.entries(update.$pull)) {
      if (Array.isArray(updated[k])) {
        updated[k] = updated[k].filter((item) => {
          if (pullCond && typeof pullCond === 'object') {
            return !matchDoc(item, pullCond);
          }
          return item !== pullCond;
        });
      }
    }
  }

  if (update.$push) {
    for (const [k, pushSpec] of Object.entries(update.$push)) {
      if (!Array.isArray(updated[k])) {
        updated[k] = [];
      }
      if (pushSpec && typeof pushSpec === 'object' && Array.isArray(pushSpec.$each)) {
        if (pushSpec.$position === 0) {
          updated[k].unshift(...pushSpec.$each);
        } else {
          updated[k].push(...pushSpec.$each);
        }
      } else {
        updated[k].push(pushSpec);
      }
    }
  }

  for (const [k, v] of Object.entries(update)) {
    if (!k.startsWith('$')) {
      if (k.includes('.')) {
        setNestedPath(updated, k, v);
      } else {
        updated[k] = v;
      }
    }
  }

  return updated;
}

class QueryWrapper {
  constructor(results, isSingle = false) {
    this.results = Array.isArray(results) ? [...results] : [];
    this.isSingle = isSingle;
  }

  sort(sortObj) {
    if (!sortObj) return this;
    const [key, dir] = Object.entries(sortObj)[0] || [];
    if (!key) return this;
    const isDesc = dir === -1 || dir === 'desc';
    this.results.sort((a, b) => {
      const valA = a[key] ?? '';
      const valB = b[key] ?? '';
      if (valA < valB) return isDesc ? 1 : -1;
      if (valA > valB) return isDesc ? -1 : 1;
      return 0;
    });
    return this;
  }

  select(fields) {
    if (!fields) return this;
    const fieldList = typeof fields === 'string' ? fields.trim().split(/\s+/) : [];
    const isExclude = fieldList.some((f) => f.startsWith('-'));
    const cleanFields = fieldList.map((f) => f.replace(/^[-+]/, ''));

    const transform = (item) => {
      if (!item) return item;
      const copy = { ...item };
      if (isExclude) {
        for (const f of cleanFields) delete copy[f];
      } else if (cleanFields.length > 0) {
        const projected = {};
        for (const f of cleanFields) {
          if (f in copy) projected[f] = copy[f];
        }
        if (copy._id && !cleanFields.includes('_id')) projected._id = copy._id;
        return projected;
      }
      return copy;
    };

    this.results = this.results.map(transform);
    return this;
  }

  limit(n) {
    if (!this.isSingle && typeof n === 'number') {
      this.results = this.results.slice(0, n);
    }
    return this;
  }

  lean() {
    return this;
  }

  then(resolve, reject) {
    const val = this.isSingle ? (this.results[0] || null) : this.results;
    return Promise.resolve(val).then(resolve, reject);
  }

  catch(reject) {
    return this.then(null, reject);
  }
}

export function createResilientModel(collectionName, MongooseModel) {
  if (!store[collectionName]) {
    store[collectionName] = [];
  }

  const isConnected = () => mongoose.connection.readyState === 1;

  const fallbackOperations = {
    async countDocuments(filter = {}) {
      const count = store[collectionName].filter((doc) => matchDoc(doc, filter)).length;
      return count;
    },

    find(filter = {}) {
      const matched = store[collectionName].filter((doc) => matchDoc(doc, filter));
      return new QueryWrapper(matched, false);
    },

    findOne(filter = {}) {
      const matched = store[collectionName].filter((doc) => matchDoc(doc, filter));
      return new QueryWrapper(matched.slice(0, 1), true);
    },

    findById(id) {
      return fallbackOperations.findOne({ _id: id });
    },

    async create(docData) {
      const id = new mongoose.Types.ObjectId().toString();
      const now = new Date();
      const newDoc = {
        _id: id,
        ...docData,
        createdAt: now,
        updatedAt: now,
      };
      store[collectionName].push(newDoc);
      persistStore();
      return newDoc;
    },

    async insertMany(docs) {
      const results = [];
      for (const d of docs) {
        results.push(await fallbackOperations.create(d));
      }
      return results;
    },

    async findOneAndUpdate(filter, update, options = {}) {
      const idx = store[collectionName].findIndex((doc) => matchDoc(doc, filter));
      if (idx !== -1) {
        const updated = applyUpdate(store[collectionName][idx], update);
        store[collectionName][idx] = updated;
        persistStore();
        return updated;
      }
      if (options.upsert) {
        const payload = {
          ...filter,
          ...(update.$set || {}),
        };
        for (const [k, v] of Object.entries(update)) {
          if (!k.startsWith('$')) payload[k] = v;
        }
        return await fallbackOperations.create(payload);
      }
      return null;
    },

    async updateOne(filter, update, options = {}) {
      const updated = await fallbackOperations.findOneAndUpdate(filter, update, options);
      return { acknowledged: true, modifiedCount: updated ? 1 : 0 };
    },

    async findOneAndDelete(filter) {
      const idx = store[collectionName].findIndex((doc) => matchDoc(doc, filter));
      if (idx !== -1) {
        const [deleted] = store[collectionName].splice(idx, 1);
        persistStore();
        return deleted;
      }
      return null;
    },

    async deleteOne(filter) {
      const deleted = await fallbackOperations.findOneAndDelete(filter);
      return { acknowledged: true, deletedCount: deleted ? 1 : 0 };
    },

    async deleteMany(filter = {}) {
      const before = store[collectionName].length;
      store[collectionName] = store[collectionName].filter((doc) => !matchDoc(doc, filter));
      const deletedCount = before - store[collectionName].length;
      persistStore();
      return { acknowledged: true, deletedCount };
    },
  };

  // Return a proxy that directs to real MongooseModel when connected, or fallbackOperations when disconnected
  return new Proxy(MongooseModel, {
    get(target, prop, receiver) {
      if (prop in fallbackOperations) {
        return (...args) => {
          if (isConnected()) {
            return target[prop](...args);
          }
          return fallbackOperations[prop](...args);
        };
      }
      const val = Reflect.get(target, prop, receiver);
      if (typeof val === 'function') {
        return val.bind(target);
      }
      return val;
    },
  });
}

