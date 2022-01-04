import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fassion } from './entitiy/fassion.entity';
import { Like } from './entitiy/like.entity';
import { FassionController } from './fassion.controller';
import { FassionResolver } from './fassion.resolver';
import { FassionService } from './fassion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fassion, Like])],
  providers: [FassionResolver, FassionService],
  exports: [FassionService],
  controllers: [FassionController],
})
export class FassionModule {}
