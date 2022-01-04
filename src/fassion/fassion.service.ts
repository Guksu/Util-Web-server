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
import { LikeCheckOutput } from './dto/likeCheck.dto';
import { LikeUpdateInput, LikeUpdateOutput } from './dto/likeUpdate.dto';
import { Fassion } from './entitiy/fassion.entity';
import { Like } from './entitiy/like.entity';

@Injectable()
export class FassionService {
  constructor(
    @InjectRepository(Fassion) private readonly fassion: Repository<Fassion>,
    @InjectRepository(Like) private readonly likeRP: Repository<Like>,
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
        userImg: user['user'].userImgUrl,
      });

      await this.fassion.save(newFassion);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async deleteFassion({
    fassionNo,
  }: DeleteFassionInput): Promise<DeleteFassionOutput> {
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

      return { ok: true, fassion: getFassion.reverse() };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async getAllFassionList(): Promise<GetMyFassionListOutput> {
    try {
      const getFassion = await this.fassion.find({ secret: 'yes' });

      return { ok: true, fassion: getFassion.reverse() };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async likeUpdate(
    user: User,
    { fassionNo }: LikeUpdateInput,
  ): Promise<LikeUpdateOutput> {
    try {
      const getFassion = await this.fassion.findOne({ fassionNo });
      getFassion.like += 1;
      const like = await this.likeRP.create({
        fassionNo,
        userNo: user['user'].userNo,
      });
      await this.likeRP.save(like);
      await this.fassion.save(getFassion);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async removeLike(
    user: User,
    { fassionNo }: LikeUpdateInput,
  ): Promise<LikeUpdateOutput> {
    try {
      const getFassion = await this.fassion.findOne({ fassionNo });
      const getLike = await this.likeRP.findOne({
        fassionNo,
        userNo: user['user'].userNo,
      });

      getFassion.like -= 1;
      await this.fassion.save(getFassion);
      await this.likeRP.delete(getLike);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async likeCheck(user: User): Promise<LikeCheckOutput> {
    try {
      const likeList = await this.likeRP.find({ userNo: user['user'].userNo });
      let listArray: number[] = [];
      for (let i = 0; i < likeList.length; i++) {
        listArray.push(likeList[i].fassionNo);
      }
      return { ok: true, like: listArray };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
