import { User } from 'src/user/entitiy/user.entity';
import { CreateMarketInput, CreateMarketOutput } from './dto/createMakret.dto';
import { DeleteMarketInput, DeleteMarketOutput } from './dto/deleteMarket.dto';
import { EditMarketInput, EditMarketOutput } from './dto/editMarket.dto';
import { GetChatLogInput, GetChatLogOutput } from './dto/getChat.dto';
import { GetMarketInput, GetMarketOutput } from './dto/getMarket.dto';
import { GetMarketListOutput } from './dto/getMarketList.dto';
import { SaveChatInput, SaveChatOutput } from './dto/saveChat.dto';
import { MarketViewUpdateInput, MarketViewUpdateOutput } from './dto/viewUpdate.dto';
import { FleacMarketService } from './flea-market.service';
export declare class FleaMarketResover {
    private readonly fleaMarketService;
    constructor(fleaMarketService: FleacMarketService);
    createMarket(user: User, createMarketInput: CreateMarketInput): Promise<CreateMarketOutput>;
    editMarket(editMarketInput: EditMarketInput): Promise<EditMarketOutput>;
    deleteMarket(user: User, deleteMarketInput: DeleteMarketInput): Promise<DeleteMarketOutput>;
    marketViewUpdate(marketViewUpdateInput: MarketViewUpdateInput): Promise<MarketViewUpdateOutput>;
    getMarketList(): Promise<GetMarketListOutput>;
    getMarket(getMarketInput: GetMarketInput): Promise<GetMarketOutput>;
    saveChat(user: User, saveChatInput: SaveChatInput): Promise<SaveChatOutput>;
    getChat(getChatLogInput: GetChatLogInput): Promise<GetChatLogOutput>;
}
