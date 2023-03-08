import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class EdgeDto {
  @Field()
  readonly source: string;

  @Field()
  readonly sourceHandle: null;

  @Field()
  readonly target: string;

  @Field()
  readonly targetHandle: null;

  @Field()
  readonly id: string;

  @Field()
  readonly _id: string;

  @Field()
  readonly __v: number;
}
