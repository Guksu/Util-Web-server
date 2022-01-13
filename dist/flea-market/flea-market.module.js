"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleaMarketModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const flea_market_entity_1 = require("./entity/flea-market.entity");
const flea_market_resolver_1 = require("./flea-market.resolver");
const flea_market_service_1 = require("./flea-market.service");
let FleaMarketModule = class FleaMarketModule {
};
FleaMarketModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([flea_market_entity_1.FleaMarket])],
        providers: [flea_market_resolver_1.FleaMarketResover, flea_market_service_1.FleacMarketService],
        exports: [flea_market_service_1.FleacMarketService],
    })
], FleaMarketModule);
exports.FleaMarketModule = FleaMarketModule;
//# sourceMappingURL=flea-market.module.js.map