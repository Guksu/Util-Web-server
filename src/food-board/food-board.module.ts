import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodBoard } from './entitiy/food-board.entity';
import { FoodBoardResolver } from './food-board.resolver';
import { FoodBoardService } from './food-board.service';
import { FoodController } from './food.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FoodBoard])],
  providers: [FoodBoardResolver, FoodBoardService],
  exports: [FoodBoardService],
  controllers: [FoodController],
})
export class FoodBoardModule {}
