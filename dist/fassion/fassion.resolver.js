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
exports.FassionResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const auth_user_decorator_1 = require("../auth/auth.user-decorator");
const user_entity_1 = require("../user/entitiy/user.entity");
const createFassion_dto_1 = require("./dto/createFassion.dto");
const deleteFassion_dto_1 = require("./dto/deleteFassion.dto");
const getAllFassionList_dto_1 = require("./dto/getAllFassionList.dto");
const getMyFassionList_dto_1 = require("./dto/getMyFassionList.dto");
const fassion_service_1 = require("./fassion.service");
let FassionResolver = class FassionResolver {
    constructor(fassionService) {
        this.fassionService = fassionService;
    }
    createFassion(user, createFassionInput) {
        return this.fassionService.createFassion(user, createFassionInput);
    }
    deleteFassion(deleteFassionInput) {
        return this.fassionService.deleteFassion(deleteFassionInput);
    }
    getMyFassionList(user) {
        return this.fassionService.getMyFassionList(user);
    }
    getAllFassionList() {
        return this.fassionService.getAllFassionList();
    }
};
__decorate([
    (0, graphql_1.Mutation)((type) => createFassion_dto_1.CreateFassionOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        createFassion_dto_1.CreateFassionInput]),
    __metadata("design:returntype", Promise)
], FassionResolver.prototype, "createFassion", null);
__decorate([
    (0, graphql_1.Mutation)((type) => deleteFassion_dto_1.DeleteFassionOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteFassion_dto_1.DeleteFassionInput]),
    __metadata("design:returntype", Promise)
], FassionResolver.prototype, "deleteFassion", null);
__decorate([
    (0, graphql_1.Query)((type) => getMyFassionList_dto_1.GetMyFassionListOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], FassionResolver.prototype, "getMyFassionList", null);
__decorate([
    (0, graphql_1.Query)((type) => getAllFassionList_dto_1.GetAllFassionListOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FassionResolver.prototype, "getAllFassionList", null);
FassionResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [fassion_service_1.FassionService])
], FassionResolver);
exports.FassionResolver = FassionResolver;
//# sourceMappingURL=fassion.resolver.js.map