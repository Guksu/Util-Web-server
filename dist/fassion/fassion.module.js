"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FassionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fassion_entity_1 = require("./entitiy/fassion.entity");
const fassion_resolver_1 = require("./fassion.resolver");
const fassion_service_1 = require("./fassion.service");
let FassionModule = class FassionModule {
};
FassionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fassion_entity_1.Fassion])],
        providers: [fassion_resolver_1.FassionResolver, fassion_service_1.FassionService],
        exports: [fassion_service_1.FassionService],
    })
], FassionModule);
exports.FassionModule = FassionModule;
//# sourceMappingURL=fassion.module.js.map