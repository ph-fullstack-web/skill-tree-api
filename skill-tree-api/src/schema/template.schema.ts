import { Schema } from 'mongoose';

export const TemplateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nodes: [
    {
      id: {
        type: String,
        required: true,
      },
      data: {
        label: {
          type: String,
          required: true,
        },
      },
      position: {
        x: {
          type: Number,
          required: true,
        },
        y: {
          type: Number,
          required: true,
        },
      },
    },
  ],
  edges: [
    {
      id: {
        type: String,
        required: true,
      },
      source: {
        type: String,
        required: true,
      },
      target: {
        type: String,
        required: true,
      },
    },
  ],
});
