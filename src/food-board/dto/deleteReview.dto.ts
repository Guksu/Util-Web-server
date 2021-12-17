import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';

@InputType()
export class DeleteReviewInput extends PickType(FoodBoard, ['FoodBoardNo']) {}

@ObjectType()
export class DeleteReviewOutput extends CommonOutput {}
