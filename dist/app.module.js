"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/entitiy/user.entity");
const user_module_1 = require("./user/user.module");
const common_module_1 = require("./common/common.module");
const auth_module_1 = require("./auth/auth.module");
const account_module_1 = require("./account/account.module");
const account_entity_1 = require("./account/entitiy/account.entity");
const fassion_module_1 = require("./fassion/fassion.module");
const fassion_entity_1 = require("./fassion/entitiy/fassion.entity");
const food_board_module_1 = require("./food-board/food-board.module");
const food_board_entity_1 = require("./food-board/entitiy/food-board.entity");
const uploads_module_1 = require("./uploads/uploads.module");
require('dotenv').config();
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: process.env.PASSWORD,
                database: 'util-web',
                entities: [user_entity_1.User, account_entity_1.Account, fassion_entity_1.Fassion, food_board_entity_1.FoodBoard],
                synchronize: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: true,
                context: ({ req, connection }) => {
                    if (req) {
                        const user = req.headers.authorization;
                        return Object.assign(Object.assign({}, req), { user });
                    }
                    else {
                        return connection;
                    }
                },
            }),
            user_module_1.UserModule,
            common_module_1.CommonModule,
            auth_module_1.AuthModule,
            account_module_1.AccountModule,
            fassion_module_1.FassionModule,
            food_board_module_1.FoodBoardModule,
            uploads_module_1.UploadsModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map