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
exports.GetReviewOutput = exports.GetReviewInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dto/output.dto");
const food_board_entity_1 = require("../entitiy/food-board.entity");
let GetReviewInput = class GetReviewInput extends (0, graphql_1.PickType)(food_board_entity_1.FoodBoard, ['FoodBoardNo']) {
};
GetReviewInput = __decorate([
    (0, graphql_1.InputType)()
], GetReviewInput);
exports.GetReviewInput = GetReviewInput;
let GetReviewOutput = class GetReviewOutput extends output_dto_1.CommonOutput {
};
__decorate([
    (0, graphql_1.Field)((type) => food_board_entity_1.FoodBoard, { nullable: true }),
    __metadata("design:type", food_board_entity_1.FoodBoard)
], GetReviewOutput.prototype, "review", void 0);
GetReviewOutput = __decorate([
    (0, graphql_1.ObjectType)()
], GetReviewOutput);
exports.GetReviewOutput = GetReviewOutput;
//# sourceMappingURL=getReview.dto.js.map