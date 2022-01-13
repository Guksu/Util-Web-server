import { CommonOutput } from 'src/common/dto/output.dto';
import { FleaMarket } from '../entity/flea-market.entity';
declare const CreateMarketInput_base: import("@nestjs/common").Type<Pick<FleaMarket, "content" | "date" | "title" | "productImg">>;
export declare class CreateMarketInput extends CreateMarketInput_base {
}
export declare class CreateMarketOutput extends CommonOutput {
}
export {};
