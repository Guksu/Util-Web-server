import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { CreateAccountInput, CreateAccountOutput } from './dto/createAccount.dto';
import { DeleteAccountInput, DeleteAccountOutput } from './dto/deleteAccount.dto';
import { EditAccountInput, EditAccountOutput } from './dto/editAccount.dto';
import { Account } from './entitiy/account.entity';
export declare class AccountService {
    private readonly account;
    private readonly user;
    constructor(account: Repository<Account>, user: Repository<User>);
    createAccount(user: User, { amount, category, date, type }: CreateAccountInput): Promise<CreateAccountOutput>;
    editAccount(user: User, { accountNo, amount, category, date, type }: EditAccountInput): Promise<EditAccountOutput>;
    deleteAccount(user: User, { accountNo }: DeleteAccountInput): Promise<DeleteAccountOutput>;
}
