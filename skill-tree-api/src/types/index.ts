/* eslint-disable @typescript-eslint/no-explicit-any */

export type ApprovedAny = any;

export interface Edge {
  source: string;
  sourceHandle: string;
  target: string;
  targetHandle: string;
  id: string;
}

export interface Node {
  width: number;
  height: number;
  id: string;
  data: {
    label: string;
  };
  position: {
    x: number;
    y: number;
  };
  selected: boolean;
  positionAbsolute: {
    x: number;
    y: number;
  };
  dragging: boolean;
}

export interface Skill {
  id: string;
  label: string;
}
