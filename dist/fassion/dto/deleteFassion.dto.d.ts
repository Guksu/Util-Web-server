import { CommonOutput } from 'src/common/dto/output.dto';
import { Fassion } from '../entitiy/fassion.entity';
declare const DeleteFassionInput_base: import("@nestjs/common").Type<Pick<Fassion, "fassionNo">>;
export declare class DeleteFassionInput extends DeleteFassionInput_base {
}
export declare class DeleteFassionOutput extends CommonOutput {
}
export {};
