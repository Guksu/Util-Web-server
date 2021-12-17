import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { CreateAccountInput } from './createAccount.dto';

@InputType()
export class EditAccountInput extends PartialType(CreateAccountInput) {
  @Field((type) => Number)
  accountNo: number;
}

@ObjectType()
export class EditAccountOutput extends CommonOutput {}
