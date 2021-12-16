import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entitiy/user.entity';
import { AccountResolver } from './account.resolver';
import { AccountService } from './account.service';
import { Account } from './entitiy/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account, User])],
  providers: [AccountResolver, AccountService],
  exports: [AccountService],
})
export class AccountModule {}
