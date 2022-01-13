import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';
declare const MarketViewUpadateInput_base: import("@nestjs/common").Type<Pick<FleaMarket, "FleaMakretNo">>;
export declare class MarketViewUpadateInput extends MarketViewUpadateInput_base {
}
export declare class MarketViewUpdateOutput extends CommonOutput {
}
export {};
