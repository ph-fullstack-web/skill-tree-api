import { Body, Controller, Post, Get } from '@nestjs/common';

import { NodeService } from 'src/service';
import { ApprovedAny } from 'src/types';

@Controller('nodes')
export class NodeController {
  constructor(private readonly nodeService: NodeService) {}

  @Post()
  async saveData(@Body() data: ApprovedAny) {
    return this.nodeService.saveData(data);
  }

  @Get()
  async getData() {
    return this.nodeService.getData();
  }
}
