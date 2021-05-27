import { Module } from '@nestjs/common';
import { EventsModule } from '../events/events.module';
import { CatsModule } from '../cats/cats.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EventsModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
