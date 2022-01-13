import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FleaMarket } from './entity/flea-market.entity';
import { FleaMarketResover } from './flea-market.resolver';
import { FleacMarketService } from './flea-market.service';

@Module({
  imports: [TypeOrmModule.forFeature([FleaMarket])],
  providers: [FleaMarketResover, FleacMarketService],
  exports: [FleacMarketService],
})
export class FleaMarketModule {}
