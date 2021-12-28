import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { CreateReviewInput, CreateReviewOutput } from './dto/createReview.dto';
import { DeleteReviewInput, DeleteReviewOutput } from './dto/deleteReview.dto';
import { EditReviewInput, EditReviewOutput } from './dto/editReview.dto';
import { GetFoodReviewListOutput } from './dto/getFoodReviewList.dto';
import { GetReviewInput, GetReviewOutput } from './dto/getReview.dto';
import { ViewUpadateInput, ViewUpdateOutput } from './dto/viewUpdate.dto';
import { FoodBoard } from './entitiy/food-board.entity';
export declare class FoodBoardService {
    private readonly foodBoard;
    constructor(foodBoard: Repository<FoodBoard>);
    createReview(user: User, { category, content, date, title }: CreateReviewInput): Promise<CreateReviewOutput>;
    editReview({ FoodBoardNo, content, date, }: EditReviewInput): Promise<EditReviewOutput>;
    deleteReview(user: User, { FoodBoardNo }: DeleteReviewInput): Promise<DeleteReviewOutput>;
    getFoodReviewList(): Promise<GetFoodReviewListOutput>;
    viewUpdate({ FoodBoardNo, }: ViewUpadateInput): Promise<ViewUpdateOutput>;
    getReview({ FoodBoardNo }: GetReviewInput): Promise<GetReviewOutput>;
}
