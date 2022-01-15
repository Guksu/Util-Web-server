import { CommonOutput } from 'src/common/dto/output.dto';
import { ChatLog } from '../entity/chatLog.dto';
declare const GetChatLogInput_base: import("@nestjs/common").Type<Pick<ChatLog, "room">>;
export declare class GetChatLogInput extends GetChatLogInput_base {
}
export declare class GetChatLogOutput extends CommonOutput {
    chatLog?: ChatLog[];
}
export {};
