import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/auth.user-decorator';
import { User } from 'src/user/entitiy/user.entity';
import {
  CreateFassionInput,
  CreateFassionOutput,
} from './dto/createFassion.dto';
import {
  DeleteFassionInput,
  DeleteFassionOutput,
} from './dto/deleteFassion.dto';
import { GetAllFassionListOutput } from './dto/getAllFassionList.dto';
import { GetMyFassionListOutput } from './dto/getMyFassionList.dto';
import { FassionService } from './fassion.service';

@Resolver()
export class FassionResolver {
  constructor(private readonly fassionService: FassionService) {}

  @Mutation((type) => CreateFassionOutput)
  @UseGuards(GqlAuthGuard)
  createFaaion(
    @GetUser() user: User,
    @Args('input') createFassionInput: CreateFassionInput,
  ): Promise<CreateFassionOutput> {
    return this.fassionService.createFassion(user, createFassionInput);
  }

  @Mutation((type) => DeleteFassionOutput)
  @UseGuards(GqlAuthGuard)
  deleteFassion(
    @GetUser()
    @Args('input')
    deleteFassionInput: DeleteFassionInput,
  ): Promise<DeleteFassionOutput> {
    return this.fassionService.deleteFassion(deleteFassionInput);
  }

  @Query((type) => GetMyFassionListOutput)
  @UseGuards(GqlAuthGuard)
  getMyFassionList(@GetUser() user: User): Promise<GetMyFassionListOutput> {
    return this.fassionService.getMyFassionList(user);
  }

  @Query((type) => GetAllFassionListOutput)
  @UseGuards(GqlAuthGuard)
  getAllFassionList(): Promise<GetAllFassionListOutput> {
    return this.fassionService.getAllFassionList();
  }
}
