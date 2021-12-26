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
exports.FoodController = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
require('dotenv').config();
let FoodController = class FoodController {
    async getFoodInfo(req) {
        const ID_KEY = process.env.NAVER_CLIENT_KEY;
        const SECRET_KEY = process.env.NAVER_CLIENT_SECRET;
        const place = req.query.place;
        try {
            const { data: searchData } = await axios_1.default.get('https://openapi.naver.com/v1/search/blog', {
                params: { query: `${place} 후기` },
                headers: {
                    'X-Naver-Client-Id': `${ID_KEY}`,
                    'X-Naver-Client-Secret': `${SECRET_KEY}`,
                },
            });
            console.log(searchData);
            return searchData;
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FoodController.prototype, "getFoodInfo", null);
FoodController = __decorate([
    (0, common_1.Controller)('foodInfo')
], FoodController);
exports.FoodController = FoodController;
//# sourceMappingURL=food.controller.js.map