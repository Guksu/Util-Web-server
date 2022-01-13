import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';
declare const DeleteMarketInput_base: import("@nestjs/common").Type<Pick<FleaMarket, "FleaMakretNo">>;
export declare class DeleteMarketInput extends DeleteMarketInput_base {
}
export declare class DeleteMarketOutput extends CommonOutput {
}
export {};
