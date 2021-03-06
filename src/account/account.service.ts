import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dto/createAccount.dto';
import {
  DeleteAccountInput,
  DeleteAccountOutput,
} from './dto/deleteAccount.dto';
import { GetAccountListOutput } from './dto/getAccountList.dto';
import { Account } from './entitiy/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private readonly account: Repository<Account>,
  ) {}

  async createAccount(
    user: User,
    { amount, category, date, type }: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    try {
      const newAccount = await this.account.create({
        amount,
        category,
        date,
        type,
        user: user['user'],
      });

      await this.account.save(newAccount);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async deleteAccount({
    accountNo,
  }: DeleteAccountInput): Promise<DeleteAccountOutput> {
    try {
      const checkAccount = await this.account.findOne({ accountNo });

      await this.account.delete(checkAccount);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async getAccountList(user: User): Promise<GetAccountListOutput> {
    try {
      const checkAccount = await this.account.find({ user: user['user'] });

      return { ok: true, account: checkAccount };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
