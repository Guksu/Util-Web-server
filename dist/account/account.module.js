"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entitiy/user.entity");
const account_resolver_1 = require("./account.resolver");
const account_service_1 = require("./account.service");
const account_entity_1 = require("./entitiy/account.entity");
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([account_entity_1.Account, user_entity_1.User])],
        providers: [account_resolver_1.AccountResolver, account_service_1.AccountService],
        exports: [account_service_1.AccountService],
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map