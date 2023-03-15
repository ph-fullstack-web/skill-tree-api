import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GetTemplateQuery, TemplateWithNodes } from 'src/types';

@Injectable()
export class TemplateService {
  constructor(
    @InjectModel('Template')
    private templateModel: Model<TemplateWithNodes>,
  ) {}

  async delete(id: string) {
    try {
      const result = await this.templateModel.findByIdAndDelete(id);

      return result;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async get(query: GetTemplateQuery, id?: string) {
    try {
      const templates = this.templateModel.find({ id });

      if (!query.withNodes) {
        templates.select('-nodes -edges');
      }

      return await templates;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async save(data: TemplateWithNodes) {
    try {
      const template = await this.templateModel.create(data);

      return template;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, data: TemplateWithNodes) {
    try {
      const result = await this.templateModel.findByIdAndUpdate(id, data, {
        runValidators: true,
      });

      return result;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
