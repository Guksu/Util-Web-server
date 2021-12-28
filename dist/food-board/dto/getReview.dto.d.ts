import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';
declare const GetReviewInput_base: import("@nestjs/common").Type<Pick<FoodBoard, "FoodBoardNo">>;
export declare class GetReviewInput extends GetReviewInput_base {
}
export declare class GetReviewOutput extends CommonOutput {
    review?: FoodBoard;
}
export {};
