import { UseGuards } from '@nestjs/common';
import { Args, Field, Mutation, Resolver } from '@nestjs/graphql';
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
    @GetUser() user: User,
    @Args('input') deleteFassionInput: DeleteFassionInput,
  ): Promise<DeleteFassionOutput> {
    return this.fassionService.deleteFassion(user, deleteFassionInput);
  }
}
