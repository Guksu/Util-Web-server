import { CommonOutput } from 'src/common/dto/output.dto';
import { Account } from '../entitiy/account.entity';
declare const DeleteAccountInput_base: import("@nestjs/common").Type<Pick<Account, "accountNo">>;
export declare class DeleteAccountInput extends DeleteAccountInput_base {
}
export declare class DeleteAccountOutput extends CommonOutput {
}
export {};
