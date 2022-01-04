import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';

@ObjectType()
export class LikeCheckOutput extends CommonOutput {
  @Field((type) => [Number], { nullable: true })
  like?: number[];
}
