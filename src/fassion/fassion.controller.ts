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
    const temp: any = req.query.isTemp;
    let style: string;
    {
      parseInt(temp) <= 4 && style === `패딩`;
    }
    {
      parseInt(temp) <= 8 && parseInt(temp) > 4 && style === `코트, 니트`;
    }
    {
      parseInt(temp) <= 11 && parseInt(temp) > 8 && style === `니트, 자켓`;
    }
    {
      parseInt(temp) <= 16 && parseInt(temp) > 11 && style === `가디건, 야상`;
    }
    {
      parseInt(temp) <= 19 && parseInt(temp) > 16 && style === `맨투맨, 가디건`;
    }
    {
      parseInt(temp) <= 22 &&
        parseInt(temp) > 19 &&
        style === `긴팔 , 얇은 가디건`;
    }
    {
      parseInt(temp) <= 27 && parseInt(temp) > 22 && style === `반팔 , 반바지`;
    }
    try {
      const { data: searchData } = await axios.get(
        'https://openapi.naver.com/v1/search/image',
        {
          params: { query: ` ${req.query.gender} ${style} 코디` },
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
