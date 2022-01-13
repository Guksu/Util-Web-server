import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/auth.user-decorator';
import { User } from 'src/user/entitiy/user.entity';
import { CreateMarketInput, CreateMarketOutput } from './dto/createMakret.dto';
import { DeleteMarketInput, DeleteMarketOutput } from './dto/deleteMarket.dto';
import { EditMarketInput, EditMarketOutput } from './dto/editMarket.dto';
import { GetMarketInput, GetMarketOutput } from './dto/getMarket.dto';
import { GetMarketListOutput } from './dto/getMarketList.dto';
import {
  MarketViewUpadateInput,
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
  deleteReview(
    @GetUser() user: User,
    @Args('input') deleteMarketInput: DeleteMarketInput,
  ): Promise<DeleteMarketOutput> {
    return this.fleaMarketService.deleteMarket(user, deleteMarketInput);
  }

  @Mutation((type) => MarketViewUpdateOutput)
  @UseGuards(GqlAuthGuard)
  viewUpdate(
    @Args('input') marketViewUpdateInput: MarketViewUpadateInput,
  ): Promise<MarketViewUpdateOutput> {
    return this.fleaMarketService.marketViewUpdate(marketViewUpdateInput);
  }

  @Query((type) => GetMarketListOutput)
  @UseGuards(GqlAuthGuard)
  getMarketList(): Promise<GetMarketListOutput> {
    return this.getMarketList();
  }

  @Query((type) => GetMarketOutput)
  @UseGuards(GqlAuthGuard)
  getMarket(
    @Args('input') getMarketInput: GetMarketInput,
  ): Promise<GetMarketOutput> {
    return this.getMarket(getMarketInput);
  }
}
