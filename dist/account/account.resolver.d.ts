import { User } from 'src/user/entitiy/user.entity';
import { AccountService } from './account.service';
import { CreateAccountInput, CreateAccountOutput } from './dto/createAccount.dto';
import { DeleteAccountInput, DeleteAccountOutput } from './dto/deleteAccount.dto';
import { EditAccountInput, EditAccountOutput } from './dto/editAccount.dto';
import { GetAccountListOutput } from './dto/getAccountList.dto';
export declare class AccountResolver {
    private readonly accountService;
    constructor(accountService: AccountService);
    createAccount(user: User, createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    edtiAccount(editAccountInput: EditAccountInput): Promise<EditAccountOutput>;
    deleteAccount(delteAccountInput: DeleteAccountInput): Promise<DeleteAccountOutput>;
    getAccountListOutput(user: User): Promise<GetAccountListOutput>;
}
