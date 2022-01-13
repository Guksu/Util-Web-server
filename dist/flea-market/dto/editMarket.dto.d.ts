import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';
declare const EditMarketInput_base: import("@nestjs/common").Type<Pick<FleaMarket, "FleaMakretNo" | "content" | "productImg">>;
export declare class EditMarketInput extends EditMarketInput_base {
}
export declare class EditMarketOutput extends CommonOutput {
}
export {};
