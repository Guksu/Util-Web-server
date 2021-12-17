import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { Account } from '../entitiy/account.entity';

@ObjectType()
export class GetAccountListOutput extends CommonOutput {
  @Field((type) => [Account], { nullable: true })
  account?: Account[];
}
