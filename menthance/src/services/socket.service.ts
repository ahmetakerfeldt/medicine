// socket.service.ts
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000', {
      transports: ['websocket'],
    });
  }

  on<T = any>(eventName: string, callback: (data: T) => void) {
    this.socket.on(eventName, callback);
  }

  disconnect() {
    this.socket.disconnect();
  }
}
