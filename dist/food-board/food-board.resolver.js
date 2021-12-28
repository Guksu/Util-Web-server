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
exports.FoodBoardResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const auth_user_decorator_1 = require("../auth/auth.user-decorator");
const user_entity_1 = require("../user/entitiy/user.entity");
const createReview_dto_1 = require("./dto/createReview.dto");
const deleteReview_dto_1 = require("./dto/deleteReview.dto");
const editReview_dto_1 = require("./dto/editReview.dto");
const getFoodReviewList_dto_1 = require("./dto/getFoodReviewList.dto");
const getReview_dto_1 = require("./dto/getReview.dto");
const viewUpdate_dto_1 = require("./dto/viewUpdate.dto");
const food_board_service_1 = require("./food-board.service");
let FoodBoardResolver = class FoodBoardResolver {
    constructor(foodBoardService) {
        this.foodBoardService = foodBoardService;
    }
    createReview(user, createReviewInput) {
        return this.foodBoardService.createReview(user, createReviewInput);
    }
    editReview(editReviewInput) {
        return this.foodBoardService.editReview(editReviewInput);
    }
    deleteReview(user, deleteReviewInput) {
        return this.foodBoardService.deleteReview(user, deleteReviewInput);
    }
    getFoodReviewList() {
        return this.foodBoardService.getFoodReviewList();
    }
    viewUpdate(viewUpdateInput) {
        return this.foodBoardService.viewUpdate(viewUpdateInput);
    }
    getReview(getReviewInput) {
        return this.foodBoardService.getReview(getReviewInput);
    }
};
__decorate([
    (0, graphql_1.Mutation)((type) => createReview_dto_1.CreateReviewOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        createReview_dto_1.CreateReviewInput]),
    __metadata("design:returntype", Promise)
], FoodBoardResolver.prototype, "createReview", null);
__decorate([
    (0, graphql_1.Mutation)((type) => editReview_dto_1.EditReviewOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [editReview_dto_1.EditReviewInput]),
    __metadata("design:returntype", Promise)
], FoodBoardResolver.prototype, "editReview", null);
__decorate([
    (0, graphql_1.Mutation)((type) => deleteReview_dto_1.DeleteReviewOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        deleteReview_dto_1.DeleteReviewInput]),
    __metadata("design:returntype", Promise)
], FoodBoardResolver.prototype, "deleteReview", null);
__decorate([
    (0, graphql_1.Query)((type) => getFoodReviewList_dto_1.GetFoodReviewListOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FoodBoardResolver.prototype, "getFoodReviewList", null);
__decorate([
    (0, graphql_1.Mutation)((type) => viewUpdate_dto_1.ViewUpdateOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [viewUpdate_dto_1.ViewUpadateInput]),
    __metadata("design:returntype", Promise)
], FoodBoardResolver.prototype, "viewUpdate", null);
__decorate([
    (0, graphql_1.Query)((type) => getReview_dto_1.GetReviewOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getReview_dto_1.GetReviewInput]),
    __metadata("design:returntype", Promise)
], FoodBoardResolver.prototype, "getReview", null);
FoodBoardResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [food_board_service_1.FoodBoardService])
], FoodBoardResolver);
exports.FoodBoardResolver = FoodBoardResolver;
//# sourceMappingURL=food-board.resolver.js.map