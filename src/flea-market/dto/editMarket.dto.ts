import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';

@InputType()
export class EditMarketInput extends PickType(FleaMarket, [
  'FleaMarketNo',
  'content',
  'productImg',
  'date',
]) {}

@ObjectType()
export class EditMarketOutput extends CommonOutput {}
