import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Node {
  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  id: string;

  @Prop()
  data: { label: string };

  @Prop()
  position: { x: number; y: number };

  @Prop()
  selected: boolean;

  @Prop()
  positionAbsolute: { x: number; y: number };

  @Prop()
  dragging: boolean;

  @Prop()
  _id: string;

  @Prop()
  __v: number;
}

export class Edge {
  @Prop({ required: true })
  source: string;

  @Prop()
  sourceHandle: null;

  @Prop({ required: true })
  target: string;

  @Prop()
  targetHandle: null;

  @Prop({ required: true })
  id: string;

  @Prop()
  _id: string;

  @Prop()
  __v: number;
}

@Schema()
export class SkillSchema extends Document {
  @Prop({ type: [Node], required: true })
  nodes: Node[];

  @Prop({ type: [Edge], required: true })
  edges: Edge[];
}

export const SkillSchemaData = SchemaFactory.createForClass(SkillSchema);
