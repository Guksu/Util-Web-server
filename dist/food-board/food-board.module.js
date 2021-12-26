"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodBoardModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const food_board_entity_1 = require("./entitiy/food-board.entity");
const food_board_resolver_1 = require("./food-board.resolver");
const food_board_service_1 = require("./food-board.service");
const food_controller_1 = require("./food.controller");
let FoodBoardModule = class FoodBoardModule {
};
FoodBoardModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([food_board_entity_1.FoodBoard])],
        providers: [food_board_resolver_1.FoodBoardResolver, food_board_service_1.FoodBoardService],
        exports: [food_board_service_1.FoodBoardService],
        controllers: [food_controller_1.FoodController],
    })
], FoodBoardModule);
exports.FoodBoardModule = FoodBoardModule;
//# sourceMappingURL=food-board.module.js.map