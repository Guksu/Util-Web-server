import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { CreateReviewInput, CreateReviewOutput } from './dto/createReview.dto';
import { DeleteReviewInput, DeleteReviewOutput } from './dto/deleteReview.dto';
import { EditReviewInput, EditReviewOutput } from './dto/editReview.dto';
import { GetFoodReviewListOutput } from './dto/getFoodReviewList.dto';
import { GetReviewInput, GetReviewOutput } from './dto/getReview.dto';
import { ViewUpadateInput, ViewUpdateOutput } from './dto/viewUpdate.dto';
import { FoodBoard } from './entitiy/food-board.entity';

@Injectable()
export class FoodBoardService {
  constructor(
    @InjectRepository(FoodBoard)
    private readonly foodBoard: Repository<FoodBoard>,
  ) {}

  async createReview(
    user: User,
    { category, content, date, title }: CreateReviewInput,
  ): Promise<CreateReviewOutput> {
    try {
      const newReview = await this.foodBoard.create({
        category,
        content,
        date,
        title,
        user: user['user'],
        userName: user['user'].id,
        userImg: user['user'].userImgUrl,
      });

      await this.foodBoard.save(newReview);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async editReview({
    FoodBoardNo,
    content,
    date,
  }: EditReviewInput): Promise<EditReviewOutput> {
    try {
      const checkReview = await this.foodBoard.findOne({ FoodBoardNo });
      if (content) checkReview.content = content;
      if (date) checkReview.date = date;

      await this.foodBoard.save(checkReview);
      return { ok: true };
    } catch ({ error }) {
      return { ok: false, error: error };
    }
  }

  async deleteReview(
    user: User,
    { FoodBoardNo }: DeleteReviewInput,
  ): Promise<DeleteReviewOutput> {
    try {
      const checkReview = await this.foodBoard.findOne({
        user: user['user'],
        FoodBoardNo,
      });
      if (!checkReview) return { ok: false, error: '작성글이 없습니다.' };
      await this.foodBoard.delete(checkReview);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async getFoodReviewList(): Promise<GetFoodReviewListOutput> {
    try {
      const getReviwList = await this.foodBoard.find();

      return { ok: true, review: getReviwList.reverse() };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async viewUpdate({
    FoodBoardNo,
  }: ViewUpadateInput): Promise<ViewUpdateOutput> {
    try {
      const checkList = await this.foodBoard.findOne({ FoodBoardNo });
      checkList.view += 1;
      await this.foodBoard.save(checkList);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async getReview({ FoodBoardNo }: GetReviewInput): Promise<GetReviewOutput> {
    try {
      const checkReview = await this.foodBoard.findOne({ FoodBoardNo });

      return { ok: true, review: checkReview };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
