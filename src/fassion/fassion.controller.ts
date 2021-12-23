import { Controller, Get, Req } from '@nestjs/common';
import axios from 'axios';
import { Request } from 'express';
require('dotenv').config();

@Controller('fassionList')
export class FassionController {
  @Get('')
  async getFassionImg(@Req() req: Request) {
    const ID_KEY = process.env.NAVER_CLIENT_KEY;
    const SECRET_KEY = process.env.NAVER_CLIENT_SECRET;
    try {
      const { data: searchData } = await axios.get(
        'https://openapi.naver.com/v1/search/image',
        {
          params: { query: `${req.query.isTemp}도 ${req.query.gender} 옷차림` },
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
