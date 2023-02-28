import * as mongoose from 'mongoose';

export const NodeSchema = new mongoose.Schema({
  width: Number,
  height: Number,
  id: String,
  data: {
    label: String,
  },
  position: {
    x: Number,
    y: Number,
  },
  selected: Boolean,
  positionAbsolute: {
    x: Number,
    y: Number,
  },
  dragging: Boolean,
});
