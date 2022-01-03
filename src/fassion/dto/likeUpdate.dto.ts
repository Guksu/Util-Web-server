import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { Fassion } from '../entitiy/fassion.entity';

@InputType()
export class LikeUpdateInput extends PickType(Fassion, ['fassionNo']) {}

@ObjectType()
export class LikeUpdateOutput extends CommonOutput {}
