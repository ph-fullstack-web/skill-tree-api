import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { SkillsModule } from './module';

mongoose.set('returnOriginal', false);

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_CONNECTION), SkillsModule],
})
export class AppModule {}
