import { User } from 'src/user/entitiy/user.entity';
import { CreateMarketInput, CreateMarketOutput } from './dto/createMakret.dto';
import { DeleteMarketInput, DeleteMarketOutput } from './dto/deleteMarket.dto';
import { EditMarketInput, EditMarketOutput } from './dto/editMarket.dto';
import { GetMarketInput, GetMarketOutput } from './dto/getMarket.dto';
import { GetMarketListOutput } from './dto/getMarketList.dto';
import { MarketViewUpadateInput, MarketViewUpdateOutput } from './dto/viewUpdate.dto';
import { FleacMarketService } from './flea-market.service';
export declare class FleaMarketResover {
    private readonly fleaMarketService;
    constructor(fleaMarketService: FleacMarketService);
    createMarket(user: User, createMarketInput: CreateMarketInput): Promise<CreateMarketOutput>;
    editMarket(editMarketInput: EditMarketInput): Promise<EditMarketOutput>;
    deleteReview(user: User, deleteMarketInput: DeleteMarketInput): Promise<DeleteMarketOutput>;
    viewUpdate(marketViewUpdateInput: MarketViewUpadateInput): Promise<MarketViewUpdateOutput>;
    getMarketList(): Promise<GetMarketListOutput>;
    getMarket(getMarketInput: GetMarketInput): Promise<GetMarketOutput>;
}
