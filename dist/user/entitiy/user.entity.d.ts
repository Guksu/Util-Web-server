import { Account } from 'src/account/entitiy/account.entity';
export declare class User {
    userNo: number;
    name: string;
    id: string;
    password: string;
    userImgUrl?: string;
    account: [Account];
    hashPassword(): Promise<void>;
    checkPassword(checkPassword: string): Promise<boolean>;
}
