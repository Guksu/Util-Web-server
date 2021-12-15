import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';

@InputType()
export class LoginInput extends PickType(User, ['id', 'password']) {}

@ObjectType()
export class LoginOutput extends CommonOutput {
  @Field((type) => String, { nullable: true })
  token?: string;
}
