import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';

@InputType()
export class GetReviewInput extends PickType(FoodBoard, ['FoodBoardNo']) {}

@ObjectType()
export class GetReviewOutput extends CommonOutput {
  @Field((type) => FoodBoard, { nullable: true })
  review?: FoodBoard;
}
