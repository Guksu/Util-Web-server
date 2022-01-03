import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as AWS from 'aws-sdk';
require('dotenv').config();

const BUKET_NAME = 'guksuintengiblemarketuplaodsol6425';

@Controller('uploads')
export class UploadsController {
  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    AWS.config.update({
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY,
        secretAccessKey: process.env.S3_SECREAT_KEY,
      },
    });
    try {
      const objectName = `${decodeURI(Date.now() + file.originalname)}`;
      await new AWS.S3()
        .putObject({
          Body: file.buffer,
          Bucket: BUKET_NAME,
          Key: objectName,
        })
        .promise();
      const url = `https://${BUKET_NAME}.s3.ap-northeast-2.amazonaws.com/${objectName}`;
      return { url };
    } catch (error) {
      return null;
    }
  }
}
