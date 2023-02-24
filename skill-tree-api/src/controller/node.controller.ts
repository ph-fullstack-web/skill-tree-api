import { Body, Controller, Post, Get } from '@nestjs/common';
import { NodeService } from 'src/service/node.service';

@Controller('nodes')
export class NodeController {
  constructor(private readonly nodeService: NodeService) {}

  @Post()
  async saveData(@Body() data: any) {
    console.log('data: ' + data);
    return this.nodeService.saveData(data);
  }

  @Get()
  async getData() {
    return this.nodeService.getData();
  }
}
