import { CommonOutput } from 'src/common/dto/output.dto';
import { Account } from '../entitiy/account.entity';
declare const CreateAccountInput_base: import("@nestjs/common").Type<Pick<Account, "category" | "type" | "amount" | "date">>;
export declare class CreateAccountInput extends CreateAccountInput_base {
}
export declare class CreateAccountOutput extends CommonOutput {
}
export {};
