import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NodeController } from 'src/controller/node.controller';
import { EdgeSchema } from 'src/schema/edge.schema';
import { NodeSchema } from 'src/schema/node.schema';
import { NodeService } from 'src/service/node.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Node', schema: NodeSchema },
      { name: 'Edge', schema: EdgeSchema },
    ]),
  ],
  controllers: [NodeController],
  providers: [NodeService],
})
export class SkillsModule {}
