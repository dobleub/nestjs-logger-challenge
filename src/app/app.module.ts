import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SocketModule } from '../socket/socket.module';
import { LogModule } from '../logger/log.module';
import { EventsModule } from '../events/events.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SocketModule, EventsModule, LogModule, EventEmitterModule.forRoot({ wildcard: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
