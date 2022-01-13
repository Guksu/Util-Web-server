import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';
declare const MarketViewUpdateInput_base: import("@nestjs/common").Type<Pick<FleaMarket, "FleaMarketNo">>;
export declare class MarketViewUpdateInput extends MarketViewUpdateInput_base {
}
export declare class MarketViewUpdateOutput extends CommonOutput {
}
export {};
