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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../user/entitiy/user.entity");
const typeorm_1 = require("typeorm");
let Account = class Account {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], Account.prototype, "accountNo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Account.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Account.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)((type) => Number),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], Account.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    (0, graphql_1.Field)((type) => String),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Account.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.User, (User) => User.account, { cascade: true }),
    (0, graphql_1.Field)((type) => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Account.prototype, "user", void 0);
Account = __decorate([
    (0, graphql_1.InputType)('AccountInputType', { isAbstract: true }),
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Account);
exports.Account = Account;
//# sourceMappingURL=account.entity.js.map