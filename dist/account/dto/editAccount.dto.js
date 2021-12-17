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
exports.EditAccountOutput = exports.EditAccountInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dto/output.dto");
const createAccount_dto_1 = require("./createAccount.dto");
let EditAccountInput = class EditAccountInput extends (0, graphql_1.PartialType)(createAccount_dto_1.CreateAccountInput) {
};
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], EditAccountInput.prototype, "accountNo", void 0);
EditAccountInput = __decorate([
    (0, graphql_1.InputType)()
], EditAccountInput);
exports.EditAccountInput = EditAccountInput;
let EditAccountOutput = class EditAccountOutput extends output_dto_1.CommonOutput {
};
EditAccountOutput = __decorate([
    (0, graphql_1.ObjectType)()
], EditAccountOutput);
exports.EditAccountOutput = EditAccountOutput;
//# sourceMappingURL=editAccount.dto.js.map