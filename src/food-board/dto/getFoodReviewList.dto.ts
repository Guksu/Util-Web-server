import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';

@ObjectType()
export class GetFoodReviewListOutput extends CommonOutput {
  @Field((type) => [FoodBoard], { nullable: true })
  review?: FoodBoard[];
}
