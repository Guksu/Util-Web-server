import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { CreateFassionInput, CreateFassionOutput } from './dto/createFassion.dto';
import { DeleteFassionInput, DeleteFassionOutput } from './dto/deleteFassion.dto';
import { GetMyFassionListOutput } from './dto/getMyFassionList.dto';
import { LikeCheckOutput } from './dto/likeCheck.dto';
import { LikeUpdateInput, LikeUpdateOutput } from './dto/likeUpdate.dto';
import { Fassion } from './entitiy/fassion.entity';
import { Like } from './entitiy/like.entity';
export declare class FassionService {
    private readonly fassion;
    private readonly likeRP;
    constructor(fassion: Repository<Fassion>, likeRP: Repository<Like>);
    createFassion(user: User, { date, imgUrl, secret }: CreateFassionInput): Promise<CreateFassionOutput>;
    deleteFassion({ fassionNo, }: DeleteFassionInput): Promise<DeleteFassionOutput>;
    getMyFassionList(user: User): Promise<GetMyFassionListOutput>;
    getAllFassionList(): Promise<GetMyFassionListOutput>;
    likeUpdate(user: User, { fassionNo }: LikeUpdateInput): Promise<LikeUpdateOutput>;
    likeRemove(user: User, { fassionNo }: LikeUpdateInput): Promise<LikeUpdateOutput>;
    likeCheck(user: User): Promise<LikeCheckOutput>;
}
