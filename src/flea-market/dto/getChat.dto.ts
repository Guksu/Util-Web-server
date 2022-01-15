import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { ChatLog } from '../entity/chatLog.dto';

@InputType()
export class GetChatLogInput extends PickType(ChatLog, ['room']) {}

@ObjectType()
export class GetChatLogOutput extends CommonOutput {
  @Field((type) => [ChatLog], { nullable: true })
  chatLog?: ChatLog[];
}
