import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { User } from '../entitiy/user.entity';

@InputType()
export class ChangeUserImgInput extends PickType(User, ['userImgUrl']) {}

@ObjectType()
export class ChangeUserImgOutput extends CommonOutput {}
