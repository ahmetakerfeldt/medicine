import { WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway()
export class SocketGateway {
  @WebSocketServer()
  server: Server;

  emit(room: string, data: any) {
    this.server.emit(room, data);
  }
}
