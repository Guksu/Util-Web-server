import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/auth.user-decorator';
import { User } from 'src/user/entitiy/user.entity';
import { AccountService } from './account.service';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from './dto/createAccount.dto';
import {
  DeleteAccountInput,
  DeleteAccountOutput,
} from './dto/deleteAccount.dto';
import { GetAccountListOutput } from './dto/getAccountList.dto';

@Resolver()
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Mutation((type) => CreateAccountOutput)
  @UseGuards(GqlAuthGuard)
  createAccount(
    @GetUser() user: User,
    @Args('input') createAccountInput: CreateAccountInput,
  ): Promise<CreateAccountOutput> {
    return this.accountService.createAccount(user, createAccountInput);
  }

  @Mutation((type) => DeleteAccountOutput)
  @UseGuards(GqlAuthGuard)
  deleteAccount(
    @Args('input') delteAccountInput: DeleteAccountInput,
  ): Promise<DeleteAccountOutput> {
    return this.accountService.deleteAccount(delteAccountInput);
  }

  @Query((type) => GetAccountListOutput)
  @UseGuards(GqlAuthGuard)
  getAccountList(@GetUser() user: User): Promise<GetAccountListOutput> {
    return this.accountService.getAccountList(user);
  }
}
