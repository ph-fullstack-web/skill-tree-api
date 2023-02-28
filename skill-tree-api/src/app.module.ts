import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';
import { SkillsModule } from './module/skills.module';

@Module({
  imports: [SkillsModule, MongooseModule.forRoot(MONGO_CONNECTION)],
})
export class AppModule {}
