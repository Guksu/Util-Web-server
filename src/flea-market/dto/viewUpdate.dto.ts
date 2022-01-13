import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';

@InputType()
export class MarketViewUpdateInput extends PickType(FleaMarket, [
  'FleaMarketNo',
]) {}

@ObjectType()
export class MarketViewUpdateOutput extends CommonOutput {}
