import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { ChatLog } from '../entity/chatLog.dto';

@InputType()
export class SaveChatInput extends PickType(ChatLog, ['room', 'chatLog']) {}

@ObjectType()
export class SaveChatOutput extends CommonOutput {}
