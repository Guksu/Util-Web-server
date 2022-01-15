import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { CreateMarketInput, CreateMarketOutput } from './dto/createMakret.dto';
import { DeleteChatLogInput, DeleteChatLogOutput } from './dto/deleteChatLog.dto';
import { DeleteMarketInput, DeleteMarketOutput } from './dto/deleteMarket.dto';
import { EditMarketInput, EditMarketOutput } from './dto/editMarket.dto';
import { GetChatLogInput, GetChatLogOutput } from './dto/getChat.dto';
import { GetMarketInput, GetMarketOutput } from './dto/getMarket.dto';
import { GetMarketListOutput } from './dto/getMarketList.dto';
import { SaveChatInput, SaveChatOutput } from './dto/saveChat.dto';
import { MarketViewUpdateInput, MarketViewUpdateOutput } from './dto/viewUpdate.dto';
import { ChatLog } from './entity/chatLog.dto';
import { FleaMarket } from './entity/flea-market.entity';
export declare class FleacMarketService {
    private readonly fleaMarket;
    private readonly chatLog;
    constructor(fleaMarket: Repository<FleaMarket>, chatLog: Repository<ChatLog>);
    createMarket(user: User, { content, date, title, productImg, category }: CreateMarketInput): Promise<CreateMarketOutput>;
    edtiMarket({ FleaMarketNo, content, productImg, date, }: EditMarketInput): Promise<EditMarketOutput>;
    deleteMarket(user: User, { FleaMarketNo }: DeleteMarketInput): Promise<DeleteMarketOutput>;
    marketViewUpdate({ FleaMarketNo, }: MarketViewUpdateInput): Promise<MarketViewUpdateOutput>;
    getMarketList(): Promise<GetMarketListOutput>;
    getMarket({ FleaMarketNo }: GetMarketInput): Promise<GetMarketOutput>;
    saveChat(user: User, { chatLog, room }: SaveChatInput): Promise<SaveChatOutput>;
    getChat({ room }: GetChatLogInput): Promise<GetChatLogOutput>;
    deleteChat({ room }: DeleteChatLogInput): Promise<DeleteChatLogOutput>;
}
