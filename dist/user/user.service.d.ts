import { Repository } from 'typeorm';
import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { User } from './entitiy/user.entity';
export declare class UserService {
    private readonly user;
    constructor(user: Repository<User>);
    me: () => string;
    createUser({ id, name, password, }: CreateUserInput): Promise<CreateUserOutput>;
}
