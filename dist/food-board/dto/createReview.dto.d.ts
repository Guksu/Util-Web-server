import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';
declare const CreateReviewInput_base: import("@nestjs/common").Type<Pick<FoodBoard, "title" | "content" | "date" | "category">>;
export declare class CreateReviewInput extends CreateReviewInput_base {
}
export declare class CreateReviewOutput extends CommonOutput {
}
export {};
