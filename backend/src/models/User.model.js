import mongoose from 'mongoose';
import { createResilientModel } from './resilientStorage.js';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // For local auth if needed
    githubId: { type: String, unique: true, sparse: true },
    linkedinId: { type: String, unique: true, sparse: true },
    profilePic: { type: String },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  { timestamps: true }
);

const RealModel = mongoose.models.User || mongoose.model('User', userSchema);
export default createResilientModel('User', RealModel);
