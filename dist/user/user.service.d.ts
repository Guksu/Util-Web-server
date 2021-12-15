import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { User } from './entitiy/user.entity';
export declare class UserService {
    private readonly user;
    private readonly jwtService;
    constructor(user: Repository<User>, jwtService: JwtService);
    me: () => string;
    createUser({ id, name, password, }: CreateUserInput): Promise<CreateUserOutput>;
    login({ id, password }: LoginInput): Promise<LoginOutput>;
}
