import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { CreateReviewInput, CreateReviewOutput } from './dto/createReview.dto';
import { DeleteReviewInput, DeleteReviewOutput } from './dto/deleteReview.dto';
import { EditReviewInput, EditReviewOutput } from './dto/editReview.dto';
import { GetFoodReviewListOutput } from './dto/getFoodReviewList.dto';
import { FoodBoard } from './entitiy/food-board.entity';

@Injectable()
export class FoodBoardService {
  constructor(
    @InjectRepository(FoodBoard)
    private readonly foodBoard: Repository<FoodBoard>,
  ) {}

  async createReview(
    user: User,
    { category, content, date, imgUrl, title }: CreateReviewInput,
  ): Promise<CreateReviewOutput> {
    try {
      const newReview = await this.foodBoard.create({
        category,
        content,
        date,
        imgUrl,
        title,
        user: user['user'],
        userName: user['user'].name,
      });

      await this.foodBoard.save(newReview);

      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async editReview({
    FoodBoardNo,
    category,
    content,
    date,
    imgUrl,
    title,
  }: EditReviewInput): Promise<EditReviewOutput> {
    try {
      const checkReview = await this.foodBoard.findOne({ FoodBoardNo });
      if (category) checkReview.category = category;
      if (content) checkReview.content = content;
      if (date) checkReview.date = date;
      if (imgUrl) checkReview.imgUrl = imgUrl;
      if (title) checkReview.title = title;

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

      return { ok: true, review: getReviwList };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
