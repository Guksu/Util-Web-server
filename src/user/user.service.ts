import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { User } from './entitiy/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  me = () => {
    return 'me';
  };

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
}
