import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventCreatedEvent } from '../events/event-created.event';

@Injectable()
export class EventCreatedListener {
  @OnEvent('**')
  handleEventCreatedEvent(event: EventCreatedEvent) {
    // handle and process "EventCreatedEvent" event
    const logger = new Logger(event.event);
    let log = '';

    if (event.dataIsCreateOrder(event.data)) {
      log = `orderId: ${event.data.orderId}`;
    }
    if (event.dataIsPaidOrder(event.data)) {
      log = `paymentId: ${event.data.paymentId}`;
    }
    if (event.dataIsSubscribedCustomer(event.data)) {
      log = `suscriptionId: ${event.data.suscriptionId}`;
    }

    logger.log(log);
  }
}
