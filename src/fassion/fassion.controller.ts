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
    if (parseInt(temp) <= 4) {
      style = '패딩';
    } else if (parseInt(temp) <= 8) {
      style = `코트, 니트`;
    } else if (parseInt(temp) <= 11) {
      style = `니트, 자켓`;
    } else if (parseInt(temp) <= 16) {
      style = `가디건, 야상`;
    } else if (parseInt(temp) <= 19) {
      style = `맨투맨, 가디건`;
    } else if (parseInt(temp) <= 22) {
      style = `긴팔 , 얇은 가디건`;
    } else if (parseInt(temp) <= 27) {
      style = `반팔 , 반바지`;
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
