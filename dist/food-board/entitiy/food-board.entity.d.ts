import { User } from 'src/user/entitiy/user.entity';
export declare class FoodBoard {
    FoodBoardNo: number;
    category: string;
    title: string;
    content: string;
    imgUrl?: string;
    date: string;
    viwe: number;
    user: User;
}
