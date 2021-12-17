import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { Fassion } from '../entitiy/fassion.entity';

@ObjectType()
export class GetAllFassionListOutput extends CommonOutput {
  @Field((type) => [Fassion], { nullable: true })
  fassion?: Fassion[];
}
