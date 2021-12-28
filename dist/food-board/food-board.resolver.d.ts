import { User } from 'src/user/entitiy/user.entity';
import { CreateReviewInput, CreateReviewOutput } from './dto/createReview.dto';
import { DeleteReviewInput, DeleteReviewOutput } from './dto/deleteReview.dto';
import { EditReviewInput, EditReviewOutput } from './dto/editReview.dto';
import { GetFoodReviewListOutput } from './dto/getFoodReviewList.dto';
import { GetReviewInput, GetReviewOutput } from './dto/getReview.dto';
import { ViewUpadateInput, ViewUpdateOutput } from './dto/viewUpdate.dto';
import { FoodBoardService } from './food-board.service';
export declare class FoodBoardResolver {
    private readonly foodBoardService;
    constructor(foodBoardService: FoodBoardService);
    createReview(user: User, createReviewInput: CreateReviewInput): Promise<CreateReviewOutput>;
    editReview(editReviewInput: EditReviewInput): Promise<EditReviewOutput>;
    deleteReview(user: User, deleteReviewInput: DeleteReviewInput): Promise<DeleteReviewOutput>;
    getFoodReviewList(): Promise<GetFoodReviewListOutput>;
    viewUpdate(viewUpdateInput: ViewUpadateInput): Promise<ViewUpdateOutput>;
    getReview(getReviewInput: GetReviewInput): Promise<GetReviewOutput>;
}
