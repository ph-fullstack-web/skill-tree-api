import { ObjectType, Field } from '@nestjs/graphql';
import { EdgeDto } from './edge.dto';
import { NodeDto } from './node.dto';

@ObjectType()
export class SkillDto {
  @Field(() => [NodeDto])
  readonly nodes: NodeDto[];

  @Field(() => [EdgeDto])
  readonly edges: EdgeDto[];
}
