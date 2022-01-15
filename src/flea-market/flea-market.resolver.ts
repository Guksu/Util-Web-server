import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/auth.user-decorator';
import { User } from 'src/user/entitiy/user.entity';
import { CreateMarketInput, CreateMarketOutput } from './dto/createMakret.dto';
import { DeleteMarketInput, DeleteMarketOutput } from './dto/deleteMarket.dto';
import { EditMarketInput, EditMarketOutput } from './dto/editMarket.dto';
import { GetChatLogInput, GetChatLogOutput } from './dto/getChat.dto';
import { GetMarketInput, GetMarketOutput } from './dto/getMarket.dto';
import { GetMarketListOutput } from './dto/getMarketList.dto';
import { SaveChatInput, SaveChatOutput } from './dto/saveChat.dto';
import {
  MarketViewUpdateInput,
  MarketViewUpdateOutput,
} from './dto/viewUpdate.dto';
import { FleacMarketService } from './flea-market.service';

@Resolver()
export class FleaMarketResover {
  constructor(private readonly fleaMarketService: FleacMarketService) {}

  @Mutation((type) => CreateMarketOutput)
  @UseGuards(GqlAuthGuard)
  createMarket(
    @GetUser() user: User,
    @Args('input')
    createMarketInput: CreateMarketInput,
  ): Promise<CreateMarketOutput> {
    return this.fleaMarketService.createMarket(user, createMarketInput);
  }

  @Mutation((type) => EditMarketOutput)
  @UseGuards(GqlAuthGuard)
  editMarket(
    @Args('input') editMarketInput: EditMarketInput,
  ): Promise<EditMarketOutput> {
    return this.fleaMarketService.edtiMarket(editMarketInput);
  }

  @Mutation((type) => DeleteMarketOutput)
  @UseGuards(GqlAuthGuard)
  deleteMarket(
    @GetUser() user: User,
    @Args('input') deleteMarketInput: DeleteMarketInput,
  ): Promise<DeleteMarketOutput> {
    return this.fleaMarketService.deleteMarket(user, deleteMarketInput);
  }

  @Mutation((type) => MarketViewUpdateOutput)
  @UseGuards(GqlAuthGuard)
  marketViewUpdate(
    @Args('input') marketViewUpdateInput: MarketViewUpdateInput,
  ): Promise<MarketViewUpdateOutput> {
    return this.fleaMarketService.marketViewUpdate(marketViewUpdateInput);
  }

  @Query((type) => GetMarketListOutput)
  @UseGuards(GqlAuthGuard)
  getMarketList(): Promise<GetMarketListOutput> {
    return this.fleaMarketService.getMarketList();
  }

  @Query((type) => GetMarketOutput)
  @UseGuards(GqlAuthGuard)
  getMarket(
    @Args('input') getMarketInput: GetMarketInput,
  ): Promise<GetMarketOutput> {
    return this.fleaMarketService.getMarket(getMarketInput);
  }

  @Mutation((type) => SaveChatOutput)
  @UseGuards(GqlAuthGuard)
  saveChat(
    @GetUser() user: User,
    @Args('input') saveChatInput: SaveChatInput,
  ): Promise<SaveChatOutput> {
    return this.fleaMarketService.saveChat(user, saveChatInput);
  }

  @Query((type) => GetChatLogOutput)
  @UseGuards(GqlAuthGuard)
  getChat(
    @Args('input') getChatLogInput: GetChatLogInput,
  ): Promise<GetChatLogOutput> {
    return this.fleaMarketService.getChat(getChatLogInput);
  }
}
