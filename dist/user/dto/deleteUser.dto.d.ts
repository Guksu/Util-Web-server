import { CommonOutput } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';
declare const DeleteUserInput_base: import("@nestjs/common").Type<Pick<User, "password">>;
export declare class DeleteUserInput extends DeleteUserInput_base {
}
export declare class DeleteUserOutput extends CommonOutput {
}
export {};
