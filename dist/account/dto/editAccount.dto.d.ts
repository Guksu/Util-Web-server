import { CommonOutput } from 'src/common/dto/output.dto';
import { CreateAccountInput } from './createAccount.dto';
declare const EditAccountInput_base: import("@nestjs/common").Type<Partial<CreateAccountInput>>;
export declare class EditAccountInput extends EditAccountInput_base {
    accountNo: number;
}
export declare class EditAccountOutput extends CommonOutput {
}
export {};
