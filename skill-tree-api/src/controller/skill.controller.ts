import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';

import { SkillService } from 'src/service';
import { Skill } from 'src/types';

@Controller('skills')
export class SkillController {
  constructor(private readonly skillSrvc: SkillService) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.skillSrvc.delete(id);
  }

  @Get()
  async getAll() {
    return this.skillSrvc.get();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.skillSrvc.get(id);
  }

  @Post()
  async save(@Body() data: Skill) {
    return this.skillSrvc.save(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: Skill) {
    return this.skillSrvc.update(id, data);
  }
}
