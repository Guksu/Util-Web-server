"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const AWS = require("aws-sdk");
require('dotenv').config();
const BUKET_NAME = 'guksuintengiblemarketuplaodsol6425';
let UploadsController = class UploadsController {
    async uploadFile(file) {
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
        }
        catch (error) {
            return null;
        }
    }
};
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "uploadFile", null);
UploadsController = __decorate([
    (0, common_1.Controller)('uploads')
], UploadsController);
exports.UploadsController = UploadsController;
//# sourceMappingURL=uploads.controller.js.map