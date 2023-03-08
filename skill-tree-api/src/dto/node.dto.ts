import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class NodeDto {
  @Field()
  readonly width: number;

  @Field()
  readonly height: number;

  @Field()
  readonly id: string;

  @Field()
  readonly label: string;

  @Field()
  readonly positionX: number;

  @Field()
  readonly positionY: number;

  @Field()
  readonly selected: boolean;

  @Field()
  readonly positionAbsoluteX: number;

  @Field()
  readonly positionAbsoluteY: number;

  @Field()
  readonly dragging: boolean;

  @Field()
  readonly _id: string;

  @Field()
  readonly __v: number;
}
