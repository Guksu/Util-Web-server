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
exports.GetMarketOutput = exports.GetMarketInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dto/output.dto");
const flea_market_entity_1 = require("../entity/flea-market.entity");
let GetMarketInput = class GetMarketInput extends (0, graphql_1.PickType)(flea_market_entity_1.FleaMarket, ['FleaMakretNo']) {
};
GetMarketInput = __decorate([
    (0, graphql_1.InputType)()
], GetMarketInput);
exports.GetMarketInput = GetMarketInput;
let GetMarketOutput = class GetMarketOutput extends output_dto_1.CommonOutput {
};
__decorate([
    (0, graphql_1.Field)((type) => flea_market_entity_1.FleaMarket, { nullable: true }),
    __metadata("design:type", flea_market_entity_1.FleaMarket)
], GetMarketOutput.prototype, "review", void 0);
GetMarketOutput = __decorate([
    (0, graphql_1.ObjectType)()
], GetMarketOutput);
exports.GetMarketOutput = GetMarketOutput;
//# sourceMappingURL=getMarket.dto.js.map