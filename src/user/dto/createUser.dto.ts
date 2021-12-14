import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';

@InputType()
export class CreateUserInput extends PickType(User, [
  'id',
  'name',
  'password',
]) {}

@ObjectType()
export class CreateUserOutput extends CommonOutput {}
