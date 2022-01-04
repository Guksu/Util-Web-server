import { User } from 'src/user/entitiy/user.entity';
import { CreateFassionInput, CreateFassionOutput } from './dto/createFassion.dto';
import { DeleteFassionInput, DeleteFassionOutput } from './dto/deleteFassion.dto';
import { GetAllFassionListOutput } from './dto/getAllFassionList.dto';
import { GetMyFassionListOutput } from './dto/getMyFassionList.dto';
import { LikeCheckOutput } from './dto/likeCheck.dto';
import { LikeUpdateInput, LikeUpdateOutput } from './dto/likeUpdate.dto';
import { FassionService } from './fassion.service';
export declare class FassionResolver {
    private readonly fassionService;
    constructor(fassionService: FassionService);
    createFassion(user: User, createFassionInput: CreateFassionInput): Promise<CreateFassionOutput>;
    deleteFassion(deleteFassionInput: DeleteFassionInput): Promise<DeleteFassionOutput>;
    getMyFassionList(user: User): Promise<GetMyFassionListOutput>;
    getAllFassionList(): Promise<GetAllFassionListOutput>;
    likeUpdate(user: User, likeUpdateInput: LikeUpdateInput): Promise<LikeUpdateOutput>;
    removeLike(user: User, likeUpdateInput: LikeUpdateInput): Promise<LikeUpdateOutput>;
    likeCheck(user: User): Promise<LikeCheckOutput>;
}
