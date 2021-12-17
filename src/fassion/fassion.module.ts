import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fassion } from './entitiy/fassion.entity';
import { FassionResolver } from './fassion.resolver';
import { FassionService } from './fassion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fassion])],
  providers: [FassionResolver, FassionService],
  exports: [FassionService],
})
export class FassionModule {}
