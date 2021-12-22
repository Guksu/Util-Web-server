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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entitiy/user.entity");
const typeorm_2 = require("typeorm");
const account_entity_1 = require("./entitiy/account.entity");
let AccountService = class AccountService {
    constructor(account) {
        this.account = account;
    }
    async createAccount(user, { amount, category, date, type }) {
        try {
            const newAccount = await this.account.create({
                amount,
                category,
                date,
                type,
                user: user['user'],
            });
            await this.account.save(newAccount);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async deleteAccount({ accountNo, }) {
        try {
            const checkAccount = await this.account.findOne({ accountNo });
            await this.account.delete(checkAccount);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async getAccountList(user) {
        try {
            const checkAccount = await this.account.find({ user: user['user'] });
            return { ok: true, account: checkAccount };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_entity_1.Account)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map