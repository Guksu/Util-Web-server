import { Server, Socket } from 'socket.io';
export declare class ChatGateway {
    server: Server;
    private logger;
    handleMessage(client: Socket, payload: string): void;
    afterInit(server: Server): void;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
}
