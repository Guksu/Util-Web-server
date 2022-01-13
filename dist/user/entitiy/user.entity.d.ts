import { Account } from 'src/account/entitiy/account.entity';
import { Fassion } from 'src/fassion/entitiy/fassion.entity';
import { FoodBoard } from 'src/food-board/entitiy/food-board.entity';
import { FleaMarket } from 'src/flea-market/entity/flea-market.entity';
export declare class User {
    userNo: number;
    name: string;
    id: string;
    password: string;
    userImgUrl?: string;
    account: [Account];
    fassion: [Fassion];
    foodBoard: [FoodBoard];
    fleaMarket: [FleaMarket];
    hashPassword(): Promise<void>;
    checkPassword(checkPassword: string): Promise<boolean>;
}
