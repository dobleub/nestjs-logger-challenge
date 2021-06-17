import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server, Socket } from 'socket.io';
import { Event } from '../events/interfaces/event.interface';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    private logger = new Logger('ApiSocketGateway');
    private room = 'LoggerApiRoom';

    @SubscribeMessage('joinRoom')
    handleJoinRoom(client: Socket): string {
        client.join(this.room);
        client.emit('joinedRoom', this.room);

        this.logger.log(`Client ${client.id} joined to ${this.room}`);
        return `Joined to ${this.room}`;
    }
    
    @SubscribeMessage('leaveRoom')
    handleLeaveRoom(client: Socket): string {
        client.leave(this.room);
        client.emit('leftRoom', this.room);
        
        this.logger.log(`Client ${client.id} left ${this.room}`);
        return `Joined to ${this.room}`;
    }
    
    @SubscribeMessage('events')
    hangleMessage(@MessageBody() data: any): Promise<Event> {
        return data;
    }

    sendMessage(@MessageBody() data: Event): void {
        let clients = Object.keys(this.server.engine.clients);
        clients.forEach((c) => {
            this.logger.log(`Event ${data.event} send to ${c}`);
        });
        this.server.to(this.room).emit('events', data);
    }

    afterInit(server: Server) {
        this.logger.log('Socket successfully started');
    }

    handleConnection(client: Socket) {
        this.logger.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
}