"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const fassion_entity_1 = require("../fassion/entitiy/fassion.entity");
const flea_market_entity_1 = require("../flea-market/entity/flea-market.entity");
const food_board_entity_1 = require("../food-board/entitiy/food-board.entity");
const user_entity_1 = require("./entitiy/user.entity");
const jwt_strategy_1 = require("./jwt.strategy");
const user_resolver_1 = require("./user.resolver");
const user_service_1 = require("./user.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_KEY,
                signOptions: {
                    expiresIn: 60 * 60,
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, fassion_entity_1.Fassion, food_board_entity_1.FoodBoard, flea_market_entity_1.FleaMarket]),
        ],
        providers: [user_resolver_1.UserResolver, user_service_1.UserService, jwt_strategy_1.JwtStrategy],
        exports: [user_service_1.UserService, jwt_strategy_1.JwtStrategy],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map