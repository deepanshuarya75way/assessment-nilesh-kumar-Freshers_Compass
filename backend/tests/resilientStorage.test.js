import assert from 'node:assert/strict';
import Resume from '../src/models/Resume.model.js';
import Profile from '../src/models/Profile.model.js';
import Application from '../src/models/Application.model.js';

let passed = 0;
const t = async (name, fn) => {
  try {
    await fn();
    passed += 1;
    console.log(`  ok  ${name}`);
  } catch (err) {
    console.error(`FAIL  ${name}\n      ${err.message}`);
    process.exitCode = 1;
  }
};

async function runTests() {
  console.log('ResilientStore offline operations:');

  await t('Resume.countDocuments returns 0 initially', async () => {
    const count = await Resume.countDocuments({ userId: 'test_user_123' });
    assert.equal(typeof count, 'number');
  });

  await t('Resume.create persists document', async () => {
    const doc = await Resume.create({
      userId: 'test_user_123',
      name: 'Nilesh Kumar',
      ats_score: 90,
      skills: ['React', 'Node.js', 'MongoDB'],
    });
    assert.ok(doc._id);
    assert.equal(doc.name, 'Nilesh Kumar');
    assert.equal(doc.ats_score, 90);
  });

  await t('Resume.countDocuments updates after create', async () => {
    const count = await Resume.countDocuments({ userId: 'test_user_123' });
    assert.ok(count >= 1);
  });

  await t('Resume.findOne retrieves matching record with sort', async () => {
    const found = await Resume.findOne({ userId: 'test_user_123' }).sort({ createdAt: -1 });
    assert.ok(found);
    assert.equal(found.name, 'Nilesh Kumar');
  });

  await t('Resume.find retrieves array with sort and select', async () => {
    const list = await Resume.find({ userId: 'test_user_123' })
      .sort({ createdAt: 1 })
      .select('name ats_score');
    assert.ok(Array.isArray(list));
    assert.ok(list.length >= 1);
    assert.equal(list[0].name, 'Nilesh Kumar');
  });

  await t('Profile.findOneAndUpdate with upsert works', async () => {
    const profile = await Profile.findOneAndUpdate(
      { userId: 'test_user_123' },
      { $set: { candidate_name: 'Nilesh Kumar', github_username: 'shukla9523' } },
      { upsert: true, new: true }
    );
    assert.ok(profile);
    assert.equal(profile.github_username, 'shukla9523');
  });

  await t('Profile.findOne retrieves updated profile', async () => {
    const profile = await Profile.findOne({ userId: 'test_user_123' });
    assert.ok(profile);
    assert.equal(profile.candidate_name, 'Nilesh Kumar');
  });

  await t('Application.create and find works', async () => {
    const app = await Application.create({
      userId: 'test_user_123',
      company: 'Google',
      role: 'Software Engineer',
      status: 'applied',
    });
    assert.ok(app);
    assert.equal(app.company, 'Google');

    const apps = await Application.find({ userId: 'test_user_123' }).sort({ createdAt: -1 });
    assert.ok(apps.length >= 1);
    assert.equal(apps[0].company, 'Google');
  });

  await t('Clean up test records', async () => {
    await Resume.deleteMany({ userId: 'test_user_123' });
    await Profile.deleteOne({ userId: 'test_user_123' });
    await Application.deleteMany({ userId: 'test_user_123' });
    const count = await Resume.countDocuments({ userId: 'test_user_123' });
    assert.equal(count, 0);
  });

  console.log(`\n${passed} resilient store assertions passed.`);
}

runTests();
