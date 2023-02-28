import mongoose from 'mongoose';

export const EdgeSchema = new mongoose.Schema({
  source: String,
  sourceHandle: String,
  target: String,
  targetHandle: String,
  id: String,
});
