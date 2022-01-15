import { CommonOutput } from 'src/common/dto/output.dto';
import { ChatLog } from '../entity/chatLog.dto';
declare const DeleteChatLogInput_base: import("@nestjs/common").Type<Pick<ChatLog, "room">>;
export declare class DeleteChatLogInput extends DeleteChatLogInput_base {
}
export declare class DeleteChatLogOutput extends CommonOutput {
}
export {};
