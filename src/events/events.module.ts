import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { eventsProviders } from './events.providers';
import { DatabaseModule } from '../database/database.module';
import { EventCreatedListener } from './listeners/event-created.listeners';

@Module({
  imports: [DatabaseModule],
  controllers: [EventsController],
  providers: [...eventsProviders, EventsService, EventCreatedListener],
})
export class EventsModule {}
