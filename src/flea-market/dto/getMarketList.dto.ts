import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';

@ObjectType()
export class GetMarketListOutput extends CommonOutput {
  @Field((type) => [FleaMarket], { nullable: true })
  market?: FleaMarket[];
}
