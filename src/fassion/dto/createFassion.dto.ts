import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { Fassion } from '../entitiy/fassion.entity';

@InputType()
export class CreateFassionInput extends PickType(Fassion, [
  'date',
  'imgUrl',
  'secret',
]) {}

@ObjectType()
export class CreateFassionOutput extends CommonOutput {}
