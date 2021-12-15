import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';

@InputType()
export class DeleteUserInput extends PickType(User, ['password']) {}

@ObjectType()
export class DeleteUserOutput extends CommonOutput {}
