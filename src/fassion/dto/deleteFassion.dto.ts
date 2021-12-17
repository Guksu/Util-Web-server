import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { Fassion } from '../entitiy/fassion.entity';

@InputType()
export class DeleteFassionInput extends PickType(Fassion, ['fassionNo']) {}

@ObjectType()
export class DeleteFassionOutput extends CommonOutput {}
