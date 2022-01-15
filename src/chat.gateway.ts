import { Logger } from '@nestjs/common';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface Payload {
  name: string;
  text: string;
  room: string;
}

let saveRoom;

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: Payload): void {
    this.server.to(payload.room).emit('msgToClient', payload, client.id);
    saveRoom = payload.room;
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  @SubscribeMessage('joinRoom')
  handleRoomJoin(client: Socket, room: string) {
    client.join(room);
    client.emit('joinedRoom', room);
    this.logger.log(`${client.id} joined ${room}`);
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    client.leave(saveRoom);
    client.emit('leftRoom', saveRoom);
    this.logger.log(`Client disconnected: ${client.id} and left ${saveRoom}`);
  }
}
