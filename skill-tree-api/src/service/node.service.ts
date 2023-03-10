import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ApprovedAny, Edge, Node } from 'src/types';

@Injectable()
export class NodeService {
  constructor(
    @InjectModel('Node') private nodeModel: Model<Node>,
    @InjectModel('Edge') private edgeModel: Model<Edge>,
  ) {}

  async saveData(data: ApprovedAny) {
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
