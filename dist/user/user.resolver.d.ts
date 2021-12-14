import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    creataeUser(createUserInput: CreateUserInput): Promise<CreateUserOutput>;
    me(): string;
}
