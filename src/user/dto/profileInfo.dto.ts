import { Field, ObjectType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';

@ObjectType()
export class ProfileInfoOutput extends CommonOutput {
  @Field((type) => String)
  name?: string;
  @Field((type) => String)
  id?: string;
  @Field((type) => String, { nullable: true })
  userImgUrl?: string;
}
