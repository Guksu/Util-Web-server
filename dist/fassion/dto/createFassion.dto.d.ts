import { CommonOutput } from 'src/common/dto/output.dto';
import { Fassion } from '../entitiy/fassion.entity';
declare const CreateFassionInput_base: import("@nestjs/common").Type<Pick<Fassion, "date" | "imgUrl" | "secret">>;
export declare class CreateFassionInput extends CreateFassionInput_base {
}
export declare class CreateFassionOutput extends CommonOutput {
}
export {};
