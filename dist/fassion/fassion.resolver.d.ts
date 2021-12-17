import { User } from 'src/user/entitiy/user.entity';
import { CreateFassionInput, CreateFassionOutput } from './dto/createFassion.dto';
import { DeleteFassionInput, DeleteFassionOutput } from './dto/deleteFassion.dto';
import { GetMyFassionListOutput } from './dto/getMyFassionList.dto';
import { FassionService } from './fassion.service';
export declare class FassionResolver {
    private readonly fassionService;
    constructor(fassionService: FassionService);
    createFaaion(user: User, createFassionInput: CreateFassionInput): Promise<CreateFassionOutput>;
    deleteFassion(user: User, deleteFassionInput: DeleteFassionInput): Promise<DeleteFassionOutput>;
    getMyFassionList(user: User): Promise<GetMyFassionListOutput>;
}
