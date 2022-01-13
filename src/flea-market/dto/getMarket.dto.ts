import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';

@InputType()
export class GetMarketInput extends PickType(FleaMarket, ['FleaMarketNo']) {}

@ObjectType()
export class GetMarketOutput extends CommonOutput {
  @Field((type) => FleaMarket, { nullable: true })
  market?: FleaMarket;
}
