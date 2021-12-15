import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { ProfileInfoOutput } from './dto/profileInfo.dto';
import { User } from './entitiy/user.entity';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    creataeUser(createUserInput: CreateUserInput): Promise<CreateUserOutput>;
    login(loginInput: LoginInput): Promise<LoginOutput>;
    profileInfo(user: User): Promise<ProfileInfoOutput>;
}
