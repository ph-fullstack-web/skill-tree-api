import { Schema } from 'mongoose';

export const SkillSchema = new Schema({
  id: String,
  label: {
    type: String,
    required: true,
  },
});
