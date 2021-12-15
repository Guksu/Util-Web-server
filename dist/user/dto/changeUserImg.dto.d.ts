import { CommonOutput } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';
declare const ChangeUserImgInput_base: import("@nestjs/common").Type<Pick<User, "userImgUrl">>;
export declare class ChangeUserImgInput extends ChangeUserImgInput_base {
}
export declare class ChangeUserImgOutput extends CommonOutput {
}
export {};
