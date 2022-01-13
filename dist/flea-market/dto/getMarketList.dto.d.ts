import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';
export declare class GetMarketListOutput extends CommonOutput {
    market?: FleaMarket[];
}
