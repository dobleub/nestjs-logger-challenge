import { Module } from '@nestjs/common';
import { SocketModule } from '../socket/socket.module';
import { LogModule } from '../logger/log.module';
import { EventsModule } from '../events/events.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SocketModule, EventsModule, LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
