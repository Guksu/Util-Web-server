import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { User } from './entitiy/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user: Repository<User>,
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
}
