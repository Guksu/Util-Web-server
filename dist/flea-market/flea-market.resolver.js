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
exports.FleaMarketResover = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const auth_user_decorator_1 = require("../auth/auth.user-decorator");
const user_entity_1 = require("../user/entitiy/user.entity");
const createMakret_dto_1 = require("./dto/createMakret.dto");
const deleteMarket_dto_1 = require("./dto/deleteMarket.dto");
const editMarket_dto_1 = require("./dto/editMarket.dto");
const getMarket_dto_1 = require("./dto/getMarket.dto");
const getMarketList_dto_1 = require("./dto/getMarketList.dto");
const viewUpdate_dto_1 = require("./dto/viewUpdate.dto");
const flea_market_service_1 = require("./flea-market.service");
let FleaMarketResover = class FleaMarketResover {
    constructor(fleaMarketService) {
        this.fleaMarketService = fleaMarketService;
    }
    createMarket(user, createMarketInput) {
        return this.fleaMarketService.createMarket(user, createMarketInput);
    }
    editMarket(editMarketInput) {
        return this.fleaMarketService.edtiMarket(editMarketInput);
    }
    deleteMarket(user, deleteMarketInput) {
        return this.fleaMarketService.deleteMarket(user, deleteMarketInput);
    }
    marketViewUpdate(marketViewUpdateInput) {
        return this.fleaMarketService.marketViewUpdate(marketViewUpdateInput);
    }
    getMarketList() {
        return this.fleaMarketService.getMarketList();
    }
    getMarket(getMarketInput) {
        return this.fleaMarketService.getMarket(getMarketInput);
    }
};
__decorate([
    (0, graphql_1.Mutation)((type) => createMakret_dto_1.CreateMarketOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        createMakret_dto_1.CreateMarketInput]),
    __metadata("design:returntype", Promise)
], FleaMarketResover.prototype, "createMarket", null);
__decorate([
    (0, graphql_1.Mutation)((type) => editMarket_dto_1.EditMarketOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [editMarket_dto_1.EditMarketInput]),
    __metadata("design:returntype", Promise)
], FleaMarketResover.prototype, "editMarket", null);
__decorate([
    (0, graphql_1.Mutation)((type) => deleteMarket_dto_1.DeleteMarketOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        deleteMarket_dto_1.DeleteMarketInput]),
    __metadata("design:returntype", Promise)
], FleaMarketResover.prototype, "deleteMarket", null);
__decorate([
    (0, graphql_1.Mutation)((type) => viewUpdate_dto_1.MarketViewUpdateOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [viewUpdate_dto_1.MarketViewUpdateInput]),
    __metadata("design:returntype", Promise)
], FleaMarketResover.prototype, "marketViewUpdate", null);
__decorate([
    (0, graphql_1.Query)((type) => getMarketList_dto_1.GetMarketListOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FleaMarketResover.prototype, "getMarketList", null);
__decorate([
    (0, graphql_1.Query)((type) => getMarket_dto_1.GetMarketOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getMarket_dto_1.GetMarketInput]),
    __metadata("design:returntype", Promise)
], FleaMarketResover.prototype, "getMarket", null);
FleaMarketResover = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [flea_market_service_1.FleacMarketService])
], FleaMarketResover);
exports.FleaMarketResover = FleaMarketResover;
//# sourceMappingURL=flea-market.resolver.js.map