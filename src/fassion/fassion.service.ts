import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import {
  CreateFassionInput,
  CreateFassionOutput,
} from './dto/createFassion.dto';
import {
  DeleteFassionInput,
  DeleteFassionOutput,
} from './dto/deleteFassion.dto';
import { GetMyFassionListOutput } from './dto/getMyFassionList.dto';
import { Fassion } from './entitiy/fassion.entity';

@Injectable()
export class FassionService {
  constructor(
    @InjectRepository(Fassion) private readonly fassion: Repository<Fassion>,
  ) {}

  async createFassion(
    user: User,
    { date, imgUrl, secret }: CreateFassionInput,
  ): Promise<CreateFassionOutput> {
    try {
      const newFassion = await this.fassion.create({
        date,
        imgUrl,
        secret,
        user: user['user'],
      });

      await this.fassion.save(newFassion);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async deleteFassion(
    user: User,
    { fassionNo }: DeleteFassionInput,
  ): Promise<DeleteFassionOutput> {
    try {
      const checkFassion = await this.fassion.findOne({ fassionNo });

      await this.fassion.delete(checkFassion);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async getMyFassionList(user: User): Promise<GetMyFassionListOutput> {
    try {
      const getFassion = await this.fassion.find({ user: user['user'] });
      return { ok: true, fassion: getFassion };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
