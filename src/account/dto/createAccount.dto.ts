import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { Account } from '../entitiy/account.entity';

@InputType()
export class CreateAccountInput extends PickType(Account, [
  'amount',
  'category',
  'date',
  'type',
]) {}

@ObjectType()
export class CreateAccountOutput extends CommonOutput {}
