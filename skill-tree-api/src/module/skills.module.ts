import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SkillController, TemplateController } from 'src/controller';
import { SkillSchema, TemplateSchema } from 'src/schema';
import { SkillService, TemplateService } from 'src/service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Skill', schema: SkillSchema },
      { name: 'Template', schema: TemplateSchema },
    ]),
  ],
  controllers: [SkillController, TemplateController],
  providers: [SkillService, TemplateService],
})
export class SkillsModule {}
