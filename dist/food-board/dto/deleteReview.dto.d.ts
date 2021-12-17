import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';
declare const DeleteReviewInput_base: import("@nestjs/common").Type<Pick<FoodBoard, "FoodBoardNo">>;
export declare class DeleteReviewInput extends DeleteReviewInput_base {
}
export declare class DeleteReviewOutput extends CommonOutput {
}
export {};
