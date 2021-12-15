import { Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { User } from '../user/entitiy/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly user;
    constructor(user: Repository<User>);
    validate(payload: any): Promise<User>;
}
export {};
