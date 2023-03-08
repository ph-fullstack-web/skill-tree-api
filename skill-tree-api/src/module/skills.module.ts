import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NodeController } from 'src/controller/node.controller';
import { SkillResolver } from 'src/query/skill.resolver';
import { EdgeSchema } from 'src/schema/edge.schema';
import { NodeSchema } from 'src/schema/node.schema';
import { SkillSchema } from 'src/schema/skill.schema';
import { NodeService } from 'src/service/node.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Node', schema: NodeSchema },
      { name: 'Edge', schema: EdgeSchema },
      { name: 'Skill', schema: SkillSchema },
    ]),
  ],
  controllers: [NodeController],
  providers: [NodeService, SkillResolver],
})
export class SkillsModule {}
