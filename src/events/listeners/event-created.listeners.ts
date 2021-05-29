import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventCreatedEvent } from '../events/event-created.event';

@Injectable()
export class EventCreatedListener {
  @OnEvent('**')
  handleEventCreatedEvent(event: EventCreatedEvent) {
    // handle and process "EventCreatedEvent" event
    console.log(event);
  }
}
