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
const chatLog_dto_1 = require("./entity/chatLog.dto");
const flea_market_entity_1 = require("./entity/flea-market.entity");
let FleacMarketService = class FleacMarketService {
    constructor(fleaMarket, chatLog) {
        this.fleaMarket = fleaMarket;
        this.chatLog = chatLog;
    }
    async createMarket(user, { content, date, title, productImg, category }) {
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
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async edtiMarket({ FleaMarketNo, content, productImg, date, }) {
        try {
            const checkMarket = await this.fleaMarket.findOne({ FleaMarketNo });
            if (content)
                checkMarket.content = content;
            if (productImg)
                checkMarket.productImg = productImg;
            if (date)
                checkMarket.date = date;
            await this.fleaMarket.save(checkMarket);
            return { ok: true };
        }
        catch ({ error }) {
            return { ok: false, error: error };
        }
    }
    async deleteMarket(user, { FleaMarketNo }) {
        try {
            const checkReview = await this.fleaMarket.findOne({
                user: user['user'],
                FleaMarketNo,
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
    async marketViewUpdate({ FleaMarketNo, }) {
        try {
            const checkList = await this.fleaMarket.findOne({ FleaMarketNo });
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
    async getMarket({ FleaMarketNo }) {
        try {
            const checkReview = await this.fleaMarket.findOne({ FleaMarketNo });
            return { ok: true, market: checkReview };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async saveChat(user, { chatLog, room }) {
        try {
            const newChat = await this.chatLog.create({
                chatLog,
                room,
                name: user['user'].id,
            });
            await this.chatLog.save(newChat);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async getChat({ room }) {
        try {
            const checkChat = await this.chatLog.find({ room });
            return { ok: true, chatLog: checkChat };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
};
FleacMarketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(flea_market_entity_1.FleaMarket)),
    __param(1, (0, typeorm_1.InjectRepository)(chatLog_dto_1.ChatLog)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FleacMarketService);
exports.FleacMarketService = FleacMarketService;
//# sourceMappingURL=flea-market.service.js.map