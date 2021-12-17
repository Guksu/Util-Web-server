import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { CreateReviewInput } from './createReview.dto';

@InputType()
export class EditReviewInput extends PartialType(CreateReviewInput) {
  @Field((type) => Number)
  FoodBoardNo: number;
}

@ObjectType()
export class EditReviewOutput extends CommonOutput {}
