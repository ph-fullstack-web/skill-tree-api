import { Query, Resolver } from '@nestjs/graphql';
import { SkillDto } from 'src/dto/skill.dto';
import { NodeService } from 'src/service/node.service';

@Resolver()
export class SkillResolver {
  constructor(private readonly nodeService: NodeService) {}

  @Query(() => [SkillDto])
  async categories() {
    return this.nodeService.getData();
  }
}
