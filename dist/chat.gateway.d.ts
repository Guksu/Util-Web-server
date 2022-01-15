import { Server, Socket } from 'socket.io';
interface Payload {
    name: string;
    text: string;
    room: string;
}
export declare class ChatGateway {
    server: Server;
    private logger;
    handleMessage(client: Socket, payload: Payload): void;
    afterInit(server: Server): void;
    handleRoomJoin(client: Socket, room: string): void;
    handleRoomLeave(client: Socket, room: string): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
export {};
