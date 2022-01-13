"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditMarketOutput = exports.EditMarketInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const output_dto_1 = require("../../common/dto/output.dto");
const flea_market_entity_1 = require("../entity/flea-market.entity");
let EditMarketInput = class EditMarketInput extends (0, graphql_1.PickType)(flea_market_entity_1.FleaMarket, [
    'FleaMakretNo',
    'content',
    'productImg',
]) {
};
EditMarketInput = __decorate([
    (0, graphql_1.InputType)()
], EditMarketInput);
exports.EditMarketInput = EditMarketInput;
let EditMarketOutput = class EditMarketOutput extends output_dto_1.CommonOutput {
};
EditMarketOutput = __decorate([
    (0, graphql_1.ObjectType)()
], EditMarketOutput);
exports.EditMarketOutput = EditMarketOutput;
//# sourceMappingURL=editMarket.dto.js.map