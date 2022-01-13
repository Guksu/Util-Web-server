import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { ChangePwInput, ChangePwOutput } from './dto/changePw.dto';
import { ChangeUserImgInput, ChangeUserImgOutput } from './dto/changeUserImg.dto';
import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { DeleteUserInput, DeleteUserOutput } from './dto/deleteUser.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { ProfileInfoOutput } from './dto/profileInfo.dto';
import { User } from './entitiy/user.entity';
import { Fassion } from 'src/fassion/entitiy/fassion.entity';
import { FoodBoard } from 'src/food-board/entitiy/food-board.entity';
import { FleaMarket } from 'src/flea-market/entity/flea-market.entity';
export declare class UserService {
    private readonly user;
    private readonly jwtService;
    private readonly fassion;
    private readonly foodBoard;
    private readonly fleaMarket;
    constructor(user: Repository<User>, jwtService: JwtService, fassion: Repository<Fassion>, foodBoard: Repository<FoodBoard>, fleaMarket: Repository<FleaMarket>);
    createUser({ id, name, password, }: CreateUserInput): Promise<CreateUserOutput>;
    login({ id, password }: LoginInput): Promise<LoginOutput>;
    profileInfo(user: User): Promise<ProfileInfoOutput>;
    changePw(user: User, { password }: ChangePwInput): Promise<ChangePwOutput>;
    changeUserImg(user: User, { userImgUrl }: ChangeUserImgInput): Promise<ChangeUserImgOutput>;
    deleteUser(user: User, { password }: DeleteUserInput): Promise<DeleteUserOutput>;
}
