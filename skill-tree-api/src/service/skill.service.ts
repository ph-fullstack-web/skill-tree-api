import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Skill } from 'src/types';

@Injectable()
export class SkillService {
  constructor(@InjectModel('Skill') private skillModel: Model<Skill>) {}

  async delete(id: string) {
    try {
      const result = await this.skillModel.findByIdAndDelete(id);

      return result;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async get(id?: string) {
    try {
      const skills = await this.skillModel.find({ id });

      return skills;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async save(data: Skill) {
    try {
      const skill = await this.skillModel.create(data);

      return skill;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, data: Skill) {
    try {
      const result = await this.skillModel.findByIdAndUpdate(id, data);

      return result;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
