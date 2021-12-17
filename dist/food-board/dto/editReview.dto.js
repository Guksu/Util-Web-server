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
exports.EditReviewOutput = exports.EditReviewInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dto/output.dto");
const createReview_dto_1 = require("./createReview.dto");
let EditReviewInput = class EditReviewInput extends (0, graphql_1.PartialType)(createReview_dto_1.CreateReviewInput) {
};
__decorate([
    (0, graphql_1.Field)((type) => Number),
    __metadata("design:type", Number)
], EditReviewInput.prototype, "FoodBoardNo", void 0);
EditReviewInput = __decorate([
    (0, graphql_1.InputType)()
], EditReviewInput);
exports.EditReviewInput = EditReviewInput;
let EditReviewOutput = class EditReviewOutput extends output_dto_1.CommonOutput {
};
EditReviewOutput = __decorate([
    (0, graphql_1.ObjectType)()
], EditReviewOutput);
exports.EditReviewOutput = EditReviewOutput;
//# sourceMappingURL=editReview.dto.js.map