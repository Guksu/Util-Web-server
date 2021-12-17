import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/auth.user-decorator';
import { User } from 'src/user/entitiy/user.entity';
import { CreateReviewInput, CreateReviewOutput } from './dto/createReview.dto';
import { DeleteReviewInput, DeleteReviewOutput } from './dto/deleteReview.dto';
import { EditReviewInput, EditReviewOutput } from './dto/editReview.dto';
import { GetFoodReviewListOutput } from './dto/getFoodReviewList.dto';
import { FoodBoardService } from './food-board.service';

@Resolver()
export class FoodBoardResolver {
  constructor(private readonly foodBoardService: FoodBoardService) {}

  @Mutation((type) => CreateReviewOutput)
  @UseGuards(GqlAuthGuard)
  createReview(
    @GetUser() user: User,
    @Args('input')
    createReviewInput: CreateReviewInput,
  ): Promise<CreateReviewOutput> {
    return this.foodBoardService.createReview(user, createReviewInput);
  }

  @Mutation((type) => EditReviewOutput)
  @UseGuards(GqlAuthGuard)
  editReview(
    @GetUser() @Args('input') editReviewInput: EditReviewInput,
  ): Promise<EditReviewOutput> {
    return this.foodBoardService.editReview(editReviewInput);
  }

  @Mutation((type) => DeleteReviewOutput)
  @UseGuards(GqlAuthGuard)
  deleteReview(
    @GetUser() user: User,
    @Args('input') deleteReviewInput: DeleteReviewInput,
  ): Promise<DeleteReviewOutput> {
    return this.foodBoardService.deleteReview(user, deleteReviewInput);
  }

  @Query((type) => GetFoodReviewListOutput)
  @UseGuards(GqlAuthGuard)
  getFoodReviewList(): Promise<GetFoodReviewListOutput> {
    return this.foodBoardService.getFoodReviewList();
  }
}
