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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entitiy/user.entity");
const bcrypt = require("bcrypt");
const fassion_entity_1 = require("../fassion/entitiy/fassion.entity");
const food_board_entity_1 = require("../food-board/entitiy/food-board.entity");
const flea_market_entity_1 = require("../flea-market/entity/flea-market.entity");
let UserService = class UserService {
    constructor(user, jwtService, fassion, foodBoard, fleaMarket) {
        this.user = user;
        this.jwtService = jwtService;
        this.fassion = fassion;
        this.foodBoard = foodBoard;
        this.fleaMarket = fleaMarket;
    }
    async createUser({ id, name, password, }) {
        try {
            const checkUser = await this.user.findOne({ id });
            if (checkUser) {
                return { ok: false, error: '이미 존재하는 아이디입니다.' };
            }
            await this.user.save(this.user.create({ id, name, password }));
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async login({ id, password }) {
        try {
            const findeUser = await this.user.findOne({ id });
            if (!findeUser)
                return { ok: false, error: '아이디를 다시 입력하세요' };
            const checkPw = await findeUser.checkPassword(password);
            if (!checkPw)
                return { ok: false, error: '비밀번호를 다시 입력하세요' };
            const payload = { id };
            const accessToken = await this.jwtService.sign(payload);
            return { ok: true, token: accessToken };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async profileInfo(user) {
        try {
            const findUser = await this.user.find(user['user']);
            if (!findUser)
                return {
                    ok: false,
                    error: '로그인 오류 혹은 계정이 없습니다',
                };
            return {
                ok: true,
                id: findUser[0].id,
                name: findUser[0].name,
                userImgUrl: findUser[0].userImgUrl,
            };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async changePw(user, { password }) {
        try {
            const findUser = await this.user.find(user['user']);
            if (!findUser)
                return {
                    ok: false,
                    error: '로그인 오류 혹은 계정이 없습니다',
                };
            password = await bcrypt.hash(password, 10);
            findUser[0].password = password;
            await this.user.save(findUser[0]);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async changeUserImg(user, { userImgUrl }) {
        try {
            const findUser = await this.user.find(user['user']);
            const fassionImg = await this.fassion.find({ user: user['user'] });
            const foodImg = await this.foodBoard.find({ user: user['user'] });
            const maketImg = await this.fleaMarket.find({ user: user['user'] });
            if (!findUser)
                return {
                    ok: false,
                    error: '로그인 오류 혹은 계정이 없습니다',
                };
            findUser[0].userImgUrl = userImgUrl;
            for (let i = 0; i < fassionImg.length; i++) {
                fassionImg[i].userImg = userImgUrl;
                await this.fassion.save(fassionImg[i]);
            }
            for (let i = 0; i < foodImg.length; i++) {
                foodImg[i].userImg = userImgUrl;
                await this.foodBoard.save(foodImg[i]);
            }
            for (let i = 0; i < maketImg.length; i++) {
                maketImg[i].userImg = userImgUrl;
                await this.fleaMarket.save(maketImg[i]);
            }
            await this.user.save(findUser[0]);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async deleteUser(user, { password }) {
        try {
            const findUser = await this.user.find(user['user']);
            if (!findUser)
                return {
                    ok: false,
                    error: '로그인 오류 혹은 계정이 없습니다',
                };
            const checkPw = await findUser[0].checkPassword(password);
            if (!checkPw)
                return { ok: false, error: '비밀번호를 다시 입력하세요' };
            await this.user.delete(findUser[0]);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(fassion_entity_1.Fassion)),
    __param(3, (0, typeorm_1.InjectRepository)(food_board_entity_1.FoodBoard)),
    __param(4, (0, typeorm_1.InjectRepository)(flea_market_entity_1.FleaMarket)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map