import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChangePwInput, ChangePwOutput } from './dto/changePw.dto';
import {
  ChangeUserImgInput,
  ChangeUserImgOutput,
} from './dto/changeUserImg.dto';
import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { DeleteUserInput, DeleteUserOutput } from './dto/deleteUser.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { ProfileInfoOutput } from './dto/profileInfo.dto';
import { User } from './entitiy/user.entity';
import * as bcrypt from 'bcrypt';
import { Fassion } from 'src/fassion/entitiy/fassion.entity';
import { FoodBoard } from 'src/food-board/entitiy/food-board.entity';
import { FleaMarket } from 'src/flea-market/entity/flea-market.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    private readonly jwtService: JwtService,
    @InjectRepository(Fassion) private readonly fassion: Repository<Fassion>,
    @InjectRepository(FoodBoard)
    private readonly foodBoard: Repository<FoodBoard>,
    @InjectRepository(FleaMarket)
    private readonly fleaMarket: Repository<FleaMarket>,
  ) {}

  async createUser({
    id,
    name,
    password,
  }: CreateUserInput): Promise<CreateUserOutput> {
    try {
      const checkUser = await this.user.findOne({ id });
      if (checkUser) {
        return { ok: false, error: '이미 존재하는 아이디입니다.' };
      }

      await this.user.save(this.user.create({ id, name, password }));
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async login({ id, password }: LoginInput): Promise<LoginOutput> {
    try {
      const findeUser = await this.user.findOne({ id });
      if (!findeUser) return { ok: false, error: '아이디를 다시 입력하세요' };

      const checkPw = await findeUser.checkPassword(password);
      if (!checkPw) return { ok: false, error: '비밀번호를 다시 입력하세요' };

      const payload = { id };
      const accessToken = await this.jwtService.sign(payload);

      return { ok: true, token: accessToken };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async profileInfo(user: User): Promise<ProfileInfoOutput> {
    try {
      const findUser = await this.user.find(user['user']);
      if (!findUser)
        return {
          ok: false,
          error: '로그인 오류 혹은 계정이 없습니다',
        };

      return {
        ok: true,
        id: findUser[0].id,
        name: findUser[0].name,
        userImgUrl: findUser[0].userImgUrl,
      };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async changePw(
    user: User,
    { password }: ChangePwInput,
  ): Promise<ChangePwOutput> {
    try {
      const findUser = await this.user.find(user['user']);
      if (!findUser)
        return {
          ok: false,
          error: '로그인 오류 혹은 계정이 없습니다',
        };
      password = await bcrypt.hash(password, 10);
      findUser[0].password = password;
      await this.user.save(findUser[0]);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async changeUserImg(
    user: User,
    { userImgUrl }: ChangeUserImgInput,
  ): Promise<ChangeUserImgOutput> {
    try {
      const findUser = await this.user.find(user['user']);
      const fassionImg = await this.fassion.find({ user: user['user'] });
      const foodImg = await this.foodBoard.find({ user: user['user'] });
      const maketImg = await this.fleaMarket.find({ user: user['user'] });
      if (!findUser)
        return {
          ok: false,
          error: '로그인 오류 혹은 계정이 없습니다',
        };
      findUser[0].userImgUrl = userImgUrl;
      for (let i = 0; i < fassionImg.length; i++) {
        fassionImg[i].userImg = userImgUrl;
        await this.fassion.save(fassionImg[i]);
      }
      for (let i = 0; i < foodImg.length; i++) {
        foodImg[i].userImg = userImgUrl;
        await this.foodBoard.save(foodImg[i]);
      }
      for (let i = 0; i < maketImg.length; i++) {
        maketImg[i].userImg = userImgUrl;
        await this.fleaMarket.save(maketImg[i]);
      }
      await this.user.save(findUser[0]);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async deleteUser(
    user: User,
    { password }: DeleteUserInput,
  ): Promise<DeleteUserOutput> {
    try {
      const findUser = await this.user.find(user['user']);
      if (!findUser)
        return {
          ok: false,
          error: '로그인 오류 혹은 계정이 없습니다',
        };

      const checkPw = await findUser[0].checkPassword(password);
      if (!checkPw) return { ok: false, error: '비밀번호를 다시 입력하세요' };

      await this.user.delete(findUser[0]);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
