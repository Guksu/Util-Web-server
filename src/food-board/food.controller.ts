import { Controller, Get, Req } from '@nestjs/common';
import axios from 'axios';
import { Request } from 'express';
require('dotenv').config();

@Controller('foodInfo')
export class FoodController {
  @Get('')
  async getFoodInfo(@Req() req: Request) {
    const ID_KEY = process.env.NAVER_CLIENT_KEY;
    const SECRET_KEY = process.env.NAVER_CLIENT_SECRET;
    const place: any = req.query.place;

    try {
      const { data: searchData } = await axios.get(
        'https://openapi.naver.com/v1/search/blog',
        {
          params: { query: `${place} 후기` },
          headers: {
            'X-Naver-Client-Id': `${ID_KEY}`,
            'X-Naver-Client-Secret': `${SECRET_KEY}`,
          },
        },
      );
      return searchData;
    } catch (error) {
      console.log(error);
    }
  }
}
