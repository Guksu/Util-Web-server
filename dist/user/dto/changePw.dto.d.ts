import { CommonOutput } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';
declare const ChangePwInput_base: import("@nestjs/common").Type<Pick<User, "password">>;
export declare class ChangePwInput extends ChangePwInput_base {
}
export declare class ChangePwOutput extends CommonOutput {
}
export {};
