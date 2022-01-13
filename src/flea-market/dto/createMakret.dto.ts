import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';

@InputType()
export class CreateMarketInput extends PickType(FleaMarket, [
  'content',
  'date',
  'title',
  'productImg',
  'category',
]) {}

@ObjectType()
export class CreateMarketOutput extends CommonOutput {}
