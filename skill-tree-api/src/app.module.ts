import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.properties';
import { SkillsModule } from './module/skills.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    SkillsModule,
    MongooseModule.forRoot(MONGO_CONNECTION),
  ],
})
export class AppModule {}
