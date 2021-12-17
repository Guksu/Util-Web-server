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
exports.AccountResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const auth_user_decorator_1 = require("../auth/auth.user-decorator");
const user_entity_1 = require("../user/entitiy/user.entity");
const account_service_1 = require("./account.service");
const createAccount_dto_1 = require("./dto/createAccount.dto");
const deleteAccount_dto_1 = require("./dto/deleteAccount.dto");
const editAccount_dto_1 = require("./dto/editAccount.dto");
const getAccountList_dto_1 = require("./dto/getAccountList.dto");
let AccountResolver = class AccountResolver {
    constructor(accountService) {
        this.accountService = accountService;
    }
    createAccount(user, createAccountInput) {
        return this.accountService.createAccount(user, createAccountInput);
    }
    edtiAccount(user, editAccountInput) {
        return this.accountService.editAccount(user, editAccountInput);
    }
    deleteAccount(user, delteAccountInput) {
        return this.accountService.deleteAccount(user, delteAccountInput);
    }
    getAccountListOutput(user) {
        return this.accountService.getAccountList(user);
    }
};
__decorate([
    (0, graphql_1.Mutation)((type) => createAccount_dto_1.CreateAccountOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        createAccount_dto_1.CreateAccountInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "createAccount", null);
__decorate([
    (0, graphql_1.Mutation)((type) => editAccount_dto_1.EditAccountOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        editAccount_dto_1.EditAccountInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "edtiAccount", null);
__decorate([
    (0, graphql_1.Mutation)((type) => deleteAccount_dto_1.DeleteAccountOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __param(1, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        deleteAccount_dto_1.DeleteAccountInput]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "deleteAccount", null);
__decorate([
    (0, graphql_1.Query)((type) => getAccountList_dto_1.GetAccountListOutput),
    (0, common_1.UseGuards)(auth_guard_1.GqlAuthGuard),
    __param(0, (0, auth_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AccountResolver.prototype, "getAccountListOutput", null);
AccountResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountResolver);
exports.AccountResolver = AccountResolver;
//# sourceMappingURL=account.resolver.js.map