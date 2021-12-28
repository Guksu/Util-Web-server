import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';
declare const ViewUpadateInput_base: import("@nestjs/common").Type<Pick<FoodBoard, "FoodBoardNo">>;
export declare class ViewUpadateInput extends ViewUpadateInput_base {
}
export declare class ViewUpdateOutput extends CommonOutput {
}
export {};
