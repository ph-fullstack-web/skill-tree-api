/* eslint-disable @typescript-eslint/no-explicit-any */

export type ApprovedAny = any;

export interface Edge {
  id: string;
  source: string;
  target: string;
}

export interface Node {
  id: string;
  data: {
    label: string;
  };
  position: {
    x: number;
    y: number;
  };
}

export interface Skill {
  label: string;
}

export interface Template {
  name: string;
}

export interface TemplateWithNodes extends Template {
  nodes: Node[];
  edges: Edge[];
}

export type GetTemplateQuery = {
  withNodes?: boolean;
};
