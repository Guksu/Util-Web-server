import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';
export declare class GetFoodReviewListOutput extends CommonOutput {
    review?: FoodBoard[];
}
