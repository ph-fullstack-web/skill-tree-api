import { Injectable } from '@nestjs/common';
import { Edge } from '@nestjs/core/inspector/interfaces/edge.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Node } from '../interface/node.interface';

@Injectable()
export class NodeService {
  constructor(
    @InjectModel('Node') private nodeModel: Model<Node>,
    @InjectModel('Edge') private edgeModel: Model<Edge>,
  ) {}

  async saveData(data: any) {
    const nodes = data.nodes;
    const edges = data.edges;

    const savedNodes = await this.nodeModel.insertMany(nodes);
    const savedEdges = await this.edgeModel.insertMany(edges);

    return { nodes: savedNodes, edges: savedEdges };
  }

  async getData() {
    const nodes = await this.nodeModel.find().exec();
    const edges = await this.edgeModel.find().exec();

    return { nodes, edges };
  }
}
