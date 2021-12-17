import { CommonOutput } from 'src/common/dto/output.dto';
import { Account } from '../entitiy/account.entity';
export declare class GetAccountListOutput extends CommonOutput {
    account?: Account[];
}
