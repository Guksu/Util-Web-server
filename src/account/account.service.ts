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
import { EditAccountInput, EditAccountOutput } from './dto/editAccount.dto';
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

  async editAccount(
    user: User,
    { accountNo, amount, category, date, type }: EditAccountInput,
  ): Promise<EditAccountOutput> {
    try {
      const checkAccount = await this.account.findOne({ accountNo });
      if (amount) checkAccount.amount = amount;
      if (category) checkAccount.category = category;
      if (date) checkAccount.date = date;
      if (type) checkAccount.type = type;

      await this.account.save(checkAccount);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async deleteAccount(
    user: User,
    { accountNo }: DeleteAccountInput,
  ): Promise<DeleteAccountOutput> {
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
