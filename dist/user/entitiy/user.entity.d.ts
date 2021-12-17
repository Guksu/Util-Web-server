import { Account } from 'src/account/entitiy/account.entity';
import { Fassion } from 'src/fassion/entitiy/fassion.entity';
export declare class User {
    userNo: number;
    name: string;
    id: string;
    password: string;
    userImgUrl?: string;
    account: [Account];
    fassion: [Fassion];
    hashPassword(): Promise<void>;
    checkPassword(checkPassword: string): Promise<boolean>;
}
