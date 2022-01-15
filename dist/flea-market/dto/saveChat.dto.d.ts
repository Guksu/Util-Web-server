import { CommonOutput } from 'src/common/dto/output.dto';
import { ChatLog } from '../entity/chatLog.dto';
declare const SaveChatInput_base: import("@nestjs/common").Type<Pick<ChatLog, "room" | "chatLog">>;
export declare class SaveChatInput extends SaveChatInput_base {
}
export declare class SaveChatOutput extends CommonOutput {
}
export {};
