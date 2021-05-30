import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventCreatedEvent } from '../events/event-created.event';
import { CreateOrderData, PaidOrderData, SubscribedCustomerData } from '../interfaces/event.interface';

@Injectable()
export class EventCreatedListener {
  @OnEvent('**')
  handleEventCreatedEvent(event: EventCreatedEvent) {
    // handle and process "EventCreatedEvent" event
    const logger = new Logger(event.event);
    const log = '';

    /*if (event.data is CreateOrderData) {
      
    }*/

    logger.log(log);

    console.log(event);
  }
}
