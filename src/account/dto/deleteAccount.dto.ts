import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { Account } from '../entitiy/account.entity';

@InputType()
export class DeleteAccountInput extends PickType(Account, ['accountNo']) {}

@ObjectType()
export class DeleteAccountOutput extends CommonOutput {}
