import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';
declare const CreateReviewInput_base: import("@nestjs/common").Type<Pick<FoodBoard, "category" | "title" | "content" | "imgUrl" | "date">>;
export declare class CreateReviewInput extends CreateReviewInput_base {
}
export declare class CreateReviewOutput extends CommonOutput {
}
export {};
