import { User } from 'src/user/entitiy/user.entity';
import { AccountService } from './account.service';
import { CreateAccountInput, CreateAccountOutput } from './dto/createAccount.dto';
import { DeleteAccountInput, DeleteAccountOutput } from './dto/deleteAccount.dto';
import { GetAccountListOutput } from './dto/getAccountList.dto';
export declare class AccountResolver {
    private readonly accountService;
    constructor(accountService: AccountService);
    createAccount(user: User, createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    deleteAccount(delteAccountInput: DeleteAccountInput): Promise<DeleteAccountOutput>;
    getAccountList(user: User): Promise<GetAccountListOutput>;
}
