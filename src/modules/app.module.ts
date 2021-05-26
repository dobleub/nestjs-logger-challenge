import { Module } from '@nestjs/common';
import { EventsModule } from '../events/events.module';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
