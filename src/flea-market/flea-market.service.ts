import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
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
import { ChatLog } from './entity/chatLog.dto';
import { FleaMarket } from './entity/flea-market.entity';

@Injectable()
export class FleacMarketService {
  constructor(
    @InjectRepository(FleaMarket)
    private readonly fleaMarket: Repository<FleaMarket>,
    @InjectRepository(ChatLog)
    private readonly chatLog: Repository<ChatLog>,
  ) {}

  async createMarket(
    user: User,
    { content, date, title, productImg, category }: CreateMarketInput,
  ): Promise<CreateMarketOutput> {
    try {
      const newMarket = await this.fleaMarket.create({
        content,
        date,
        title,
        productImg,
        category,
        user: user['user'],
        userName: user['user'].id,
        userImg: user['user'].userImgUrl,
      });

      await this.fleaMarket.save(newMarket);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async edtiMarket({
    FleaMarketNo,
    content,
    productImg,
    date,
  }: EditMarketInput): Promise<EditMarketOutput> {
    try {
      const checkMarket = await this.fleaMarket.findOne({ FleaMarketNo });
      if (content) checkMarket.content = content;
      if (productImg) checkMarket.productImg = productImg;
      if (date) checkMarket.date = date;

      await this.fleaMarket.save(checkMarket);
      return { ok: true };
    } catch ({ error }) {
      return { ok: false, error: error };
    }
  }

  async deleteMarket(
    user: User,
    { FleaMarketNo }: DeleteMarketInput,
  ): Promise<DeleteMarketOutput> {
    try {
      const checkReview = await this.fleaMarket.findOne({
        user: user['user'],
        FleaMarketNo,
      });
      if (!checkReview) return { ok: false, error: '작성글이 없습니다.' };
      await this.fleaMarket.delete(checkReview);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async marketViewUpdate({
    FleaMarketNo,
  }: MarketViewUpdateInput): Promise<MarketViewUpdateOutput> {
    try {
      const checkList = await this.fleaMarket.findOne({ FleaMarketNo });
      checkList.view += 1;
      await this.fleaMarket.save(checkList);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async getMarketList(): Promise<GetMarketListOutput> {
    try {
      const getReviwList = await this.fleaMarket.find();

      return { ok: true, market: getReviwList.reverse() };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async getMarket({ FleaMarketNo }: GetMarketInput): Promise<GetMarketOutput> {
    try {
      const checkReview = await this.fleaMarket.findOne({ FleaMarketNo });

      return { ok: true, market: checkReview };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async saveChat(
    user: User,
    { chatLog, room }: SaveChatInput,
  ): Promise<SaveChatOutput> {
    try {
      const newChat = await this.chatLog.create({
        chatLog,
        room,
        name: user['user'].id,
      });

      await this.chatLog.save(newChat);
      return { ok: true };
    } catch (error) {
      return { ok: false, error: error };
    }
  }

  async getChat({ room }: GetChatLogInput): Promise<GetChatLogOutput> {
    try {
      const checkChat = await this.chatLog.find({ room });

      return { ok: true, chatLog: checkChat };
    } catch (error) {
      return { ok: false, error: error };
    }
  }
}
