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
exports.FleacMarketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entitiy/user.entity");
const typeorm_2 = require("typeorm");
const flea_market_entity_1 = require("./entity/flea-market.entity");
let FleacMarketService = class FleacMarketService {
    constructor(fleaMarket) {
        this.fleaMarket = fleaMarket;
    }
    async createMarket(user, { content, date, title, productImg }) {
        try {
            const newMarket = await this.fleaMarket.create({
                content,
                date,
                title,
                productImg,
                user: user['user'],
                userName: user['user'].id,
                userImg: user['user'].userImgUrl,
            });
            await this.fleaMarket.save(newMarket);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async edtiMarket({ FleaMakretNo, content, productImg, }) {
        try {
            const checkMarket = await this.fleaMarket.findOne({ FleaMakretNo });
            if (content)
                checkMarket.content = content;
            if (productImg)
                checkMarket.productImg = productImg;
            await this.fleaMarket.save(checkMarket);
            return { ok: true };
        }
        catch ({ error }) {
            return { ok: false, error: error };
        }
    }
    async deleteMarket(user, { FleaMakretNo }) {
        try {
            const checkReview = await this.fleaMarket.findOne({
                user: user['user'],
                FleaMakretNo,
            });
            if (!checkReview)
                return { ok: false, error: '작성글이 없습니다.' };
            await this.fleaMarket.delete(checkReview);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async marketViewUpdate({ FleaMakretNo, }) {
        try {
            const checkList = await this.fleaMarket.findOne({ FleaMakretNo });
            checkList.view += 1;
            await this.fleaMarket.save(checkList);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async getMarketList() {
        try {
            const getReviwList = await this.fleaMarket.find();
            return { ok: true, market: getReviwList.reverse() };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async getMarket({ FleaMakretNo }) {
        try {
            const checkReview = await this.fleaMarket.findOne({ FleaMakretNo });
            return { ok: true, review: checkReview };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
};
FleacMarketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flea_market_entity_1.FleaMarket)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FleacMarketService);
exports.FleacMarketService = FleacMarketService;
//# sourceMappingURL=flea-market.service.js.map