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
import { EditAccountInput, EditAccountOutput } from './dto/editAccount.dto';
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

  @Mutation((type) => EditAccountOutput)
  @UseGuards(GqlAuthGuard)
  edtiAccount(
    @GetUser() user: User,
    @Args('input') editAccountInput: EditAccountInput,
  ): Promise<EditAccountOutput> {
    return this.accountService.editAccount(user, editAccountInput);
  }

  @Mutation((type) => DeleteAccountOutput)
  @UseGuards(GqlAuthGuard)
  deleteAccount(
    @GetUser() user: User,
    @Args('input') delteAccountInput: DeleteAccountInput,
  ): Promise<DeleteAccountOutput> {
    return this.accountService.deleteAccount(user, delteAccountInput);
  }

  @Query((type) => GetAccountListOutput)
  @UseGuards(GqlAuthGuard)
  getAccountListOutput(@GetUser() user: User): Promise<GetAccountListOutput> {
    return this.accountService.getAccountList(user);
  }
}
