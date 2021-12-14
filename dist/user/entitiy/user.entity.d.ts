export declare class User {
    userNo: number;
    name: string;
    id: string;
    password: string;
    userImgUrl?: string;
    hashPassword(): Promise<void>;
    checkPassword(checkPassword: string): Promise<boolean>;
}
