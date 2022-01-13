import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';

@InputType()
export class DeleteMarketInput extends PickType(FleaMarket, ['FleaMakretNo']) {}

@ObjectType()
export class DeleteMarketOutput extends CommonOutput {}
