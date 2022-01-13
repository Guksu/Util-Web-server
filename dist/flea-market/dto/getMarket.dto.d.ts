import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';
declare const GetMarketInput_base: import("@nestjs/common").Type<Pick<FleaMarket, "FleaMarketNo">>;
export declare class GetMarketInput extends GetMarketInput_base {
}
export declare class GetMarketOutput extends CommonOutput {
    market?: FleaMarket;
}
export {};
