import { User } from 'src/user/entitiy/user.entity';
import { Repository } from 'typeorm';
import { CreateFassionInput, CreateFassionOutput } from './dto/createFassion.dto';
import { DeleteFassionInput, DeleteFassionOutput } from './dto/deleteFassion.dto';
import { GetMyFassionListOutput } from './dto/getMyFassionList.dto';
import { Fassion } from './entitiy/fassion.entity';
export declare class FassionService {
    private readonly fassion;
    constructor(fassion: Repository<Fassion>);
    createFassion(user: User, { date, imgUrl, secret }: CreateFassionInput): Promise<CreateFassionOutput>;
    deleteFassion(user: User, { fassionNo }: DeleteFassionInput): Promise<DeleteFassionOutput>;
    getMyFassionList(user: User): Promise<GetMyFassionListOutput>;
}
