import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { NodeController, SkillController } from 'src/controller';
import { EdgeSchema, NodeSchema, SkillSchema } from 'src/schema';
import { NodeService, SkillService } from 'src/service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Node', schema: NodeSchema },
      { name: 'Edge', schema: EdgeSchema },
      { name: 'Skill', schema: SkillSchema },
    ]),
  ],
  controllers: [NodeController, SkillController],
  providers: [NodeService, SkillService],
})
export class SkillsModule {}
