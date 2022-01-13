import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { CreateMarketInput, CreateMarketOutput } from './dto/createMakret.dto';
import { DeleteMarketInput, DeleteMarketOutput } from './dto/deleteMarket.dto';
import { EditMarketInput, EditMarketOutput } from './dto/editMarket.dto';
import { GetMarketInput, GetMarketOutput } from './dto/getMarket.dto';
import { GetMarketListOutput } from './dto/getMarketList.dto';
import { MarketViewUpdateInput, MarketViewUpdateOutput } from './dto/viewUpdate.dto';
import { FleaMarket } from './entity/flea-market.entity';
export declare class FleacMarketService {
    private readonly fleaMarket;
    constructor(fleaMarket: Repository<FleaMarket>);
    createMarket(user: User, { content, date, title, productImg, category }: CreateMarketInput): Promise<CreateMarketOutput>;
    edtiMarket({ FleaMarketNo, content, productImg, date, }: EditMarketInput): Promise<EditMarketOutput>;
    deleteMarket(user: User, { FleaMarketNo }: DeleteMarketInput): Promise<DeleteMarketOutput>;
    marketViewUpdate({ FleaMarketNo, }: MarketViewUpdateInput): Promise<MarketViewUpdateOutput>;
    getMarketList(): Promise<GetMarketListOutput>;
    getMarket({ FleaMarketNo }: GetMarketInput): Promise<GetMarketOutput>;
}
