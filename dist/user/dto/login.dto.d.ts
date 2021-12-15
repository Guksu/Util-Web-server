import { CommonOutput } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';
declare const LoginInput_base: import("@nestjs/common").Type<Pick<User, "id" | "password">>;
export declare class LoginInput extends LoginInput_base {
}
export declare class LoginOutput extends CommonOutput {
    token?: string;
}
export {};
