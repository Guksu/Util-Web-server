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
exports.FoodBoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entitiy/user.entity");
const typeorm_2 = require("typeorm");
const food_board_entity_1 = require("./entitiy/food-board.entity");
let FoodBoardService = class FoodBoardService {
    constructor(foodBoard) {
        this.foodBoard = foodBoard;
    }
    async createReview(user, { category, content, date, title }) {
        try {
            const newReview = await this.foodBoard.create({
                category,
                content,
                date,
                title,
                user: user['user'],
                userName: user['user'].id,
                userImg: user['user'].userImgUrl,
            });
            await this.foodBoard.save(newReview);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async editReview({ FoodBoardNo, content, date, }) {
        try {
            const checkReview = await this.foodBoard.findOne({ FoodBoardNo });
            if (content)
                checkReview.content = content;
            if (date)
                checkReview.date = date;
            await this.foodBoard.save(checkReview);
            return { ok: true };
        }
        catch ({ error }) {
            return { ok: false, error: error };
        }
    }
    async deleteReview(user, { FoodBoardNo }) {
        try {
            const checkReview = await this.foodBoard.findOne({
                user: user['user'],
                FoodBoardNo,
            });
            if (!checkReview)
                return { ok: false, error: '작성글이 없습니다.' };
            await this.foodBoard.delete(checkReview);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async getFoodReviewList() {
        try {
            const getReviwList = await this.foodBoard.find();
            return { ok: true, review: getReviwList.reverse() };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async viewUpdate({ FoodBoardNo, }) {
        try {
            const checkList = await this.foodBoard.findOne({ FoodBoardNo });
            checkList.view += 1;
            await this.foodBoard.save(checkList);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async getReview({ FoodBoardNo }) {
        try {
            const checkReview = await this.foodBoard.findOne({ FoodBoardNo });
            return { ok: true, review: checkReview };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
};
FoodBoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(food_board_entity_1.FoodBoard)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FoodBoardService);
exports.FoodBoardService = FoodBoardService;
//# sourceMappingURL=food-board.service.js.map