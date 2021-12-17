import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';

@InputType()
export class CreateReviewInput extends PickType(FoodBoard, [
  'category',
  'content',
  'date',
  'imgUrl',
  'title',
]) {}

@ObjectType()
export class CreateReviewOutput extends CommonOutput {}
