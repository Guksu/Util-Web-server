import { CommonOutput } from 'src/common/dto/output.dto';
import { CreateReviewInput } from './createReview.dto';
declare const EditReviewInput_base: import("@nestjs/common").Type<Partial<CreateReviewInput>>;
export declare class EditReviewInput extends EditReviewInput_base {
    FoodBoardNo: number;
}
export declare class EditReviewOutput extends CommonOutput {
}
export {};
