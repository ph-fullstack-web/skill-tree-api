import * as mongoose from 'mongoose';
import { EdgeSchema } from './edge.schema';
import { NodeSchema } from './node.schema';

export const SkillSchema = new mongoose.Schema({
  node: NodeSchema,
  edge: EdgeSchema,
});
