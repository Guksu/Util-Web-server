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
exports.UserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const auth_user_decorator_1 = require("../auth/auth.user-decorator");
const changePw_dto_1 = require("./dto/changePw.dto");
const changeUserImg_dto_1 = require("./dto/changeUserImg.dto");
const createUser_dto_1 = require("./dto/createUser.dto");
const deleteUser_dto_1 = require("./dto/deleteUser.dto");
const login_dto_1 = require("./dto/login.dto");
const profileInfo_dto_1 = require("./dto/profileInfo.dto");
const user_entity_1 = require("./entitiy/user.entity");
const user_service_1 = require("./user.service");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(createUserInput) {
        return this.userService.createUser(createUserInput);
    }
    login(loginInput) {
        return this.userService.login(loginInput);
    }
    profileInfo(user) {
        return this.userService.profileInfo(user);
    }
    changePw(user, changePwInput) {
        return this.userService.changePw(user, changePwInput);
    }
    changeUserImg(user, changeUserImgInput) {
        return this.userService.changeUserImg(user, changeUserImgInput);
    }
    deleteUser(user, deleteUserInput) {
        return this.userService.deleteUser(user, deleteUserInput);
    }
};
__decorate([
    (0, graphql_1.Mutation)((type) => createUser_dto_1.CreateUserOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUser_dto_1.CreateUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Mutation)((type) => login_dto_1.LoginOutput),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Query)((type) => profileInfo_dto_1.ProfileInfoOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "profileInfo", null);
__decorate([
    (0, graphql_1.Mutation)((type) => changePw_dto_1.ChangePwOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        changePw_dto_1.ChangePwInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "changePw", null);
__decorate([
    (0, graphql_1.Mutation)((type) => changeUserImg_dto_1.ChangeUserImgOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        changeUserImg_dto_1.ChangeUserImgInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "changeUserImg", null);
__decorate([
    (0, graphql_1.Mutation)((type) => deleteUser_dto_1.DeleteUserOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        deleteUser_dto_1.DeleteUserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "deleteUser", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map