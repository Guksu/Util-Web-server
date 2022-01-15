import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { ChatLog } from '../entity/chatLog.dto';

@InputType()
export class DeleteChatLogInput extends PickType(ChatLog, ['room']) {}

@ObjectType()
export class DeleteChatLogOutput extends CommonOutput {}
