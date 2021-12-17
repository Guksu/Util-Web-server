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
exports.FassionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entitiy/user.entity");
const typeorm_2 = require("typeorm");
const fassion_entity_1 = require("./entitiy/fassion.entity");
let FassionService = class FassionService {
    constructor(fassion) {
        this.fassion = fassion;
    }
    async createFassion(user, { date, imgUrl, secret }) {
        try {
            const newFassion = await this.fassion.create({
                date,
                imgUrl,
                secret,
                user: user['user'],
            });
            await this.fassion.save(newFassion);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async deleteFassion(user, { fassionNo }) {
        try {
            const checkFassion = await this.fassion.findOne({ fassionNo });
            await this.fassion.delete(checkFassion);
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async getMyFassionList(user) {
        try {
            const getFassion = await this.fassion.find({ user: user['user'] });
            return { ok: true, fassion: getFassion };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
    async getAllFassionList() {
        try {
            const getFassion = await this.fassion.find({ secret: 'yes' });
            return { ok: true, fassion: getFassion };
        }
        catch (error) {
            return { ok: false, error: error };
        }
    }
};
FassionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(fassion_entity_1.Fassion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FassionService);
exports.FassionService = FassionService;
//# sourceMappingURL=fassion.service.js.map