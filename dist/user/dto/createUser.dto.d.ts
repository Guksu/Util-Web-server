import { CommonOutput } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';
declare const CreateUserInput_base: import("@nestjs/common").Type<Pick<User, "name" | "password" | "id">>;
export declare class CreateUserInput extends CreateUserInput_base {
}
export declare class CreateUserOutput extends CommonOutput {
}
export {};
