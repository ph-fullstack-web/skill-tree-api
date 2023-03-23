import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Patch,
  Query,
} from '@nestjs/common';

import { TemplateService } from 'src/service';
import { GetTemplateQuery, TemplateWithNodes } from 'src/types';

@Controller('skill-templates')
export class TemplateController {
  constructor(private readonly templateSrvc: TemplateService) {}

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.templateSrvc.delete(id);
  }

  @Get()
  async getAll(@Query() query: GetTemplateQuery) {
    return this.templateSrvc.get(query);
  }

  @Get(':id')
  async getOne(@Param('id') id: string, @Query() query: GetTemplateQuery) {
    return this.templateSrvc.get(query, id);
  }

  @Post()
  async save(@Body() data: TemplateWithNodes) {
    return this.templateSrvc.save(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: TemplateWithNodes) {
    return this.templateSrvc.update(id, data);
  }
}
