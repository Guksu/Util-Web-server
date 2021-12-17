import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { CreateReviewInput, CreateReviewOutput } from './dto/createReview.dto';
import { DeleteReviewInput, DeleteReviewOutput } from './dto/deleteReview.dto';
import { EditReviewInput, EditReviewOutput } from './dto/editReview.dto';
import { GetFoodReviewListOutput } from './dto/getFoodReviewList.dto';
import { FoodBoard } from './entitiy/food-board.entity';
export declare class FoodBoardService {
    private readonly foodBoard;
    constructor(foodBoard: Repository<FoodBoard>);
    createReview(user: User, { category, content, date, imgUrl, title }: CreateReviewInput): Promise<CreateReviewOutput>;
    editReview({ FoodBoardNo, category, content, date, imgUrl, title, }: EditReviewInput): Promise<EditReviewOutput>;
    deleteReview(user: User, { FoodBoardNo }: DeleteReviewInput): Promise<DeleteReviewOutput>;
    getFoodReviewList(): Promise<GetFoodReviewListOutput>;
}
