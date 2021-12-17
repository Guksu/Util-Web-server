import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodBoard } from './entitiy/food-board.entity';
import { FoodBoardResolver } from './food-board.resolver';
import { FoodBoardService } from './food-board.service';

@Module({
  imports: [TypeOrmModule.forFeature([FoodBoard])],
  providers: [FoodBoardResolver, FoodBoardService],
  exports: [FoodBoardService],
})
export class FoodBoardModule {}
