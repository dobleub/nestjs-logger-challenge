import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventCreatedEvent } from '../events/event-created.event';
import { LogService } from '../../logger/log.service';
import { Logger } from '@nestjs/common';

@Injectable()
export class EventCreatedListener {
  @OnEvent('**')
  handleEventCreatedEvent(event: EventCreatedEvent) {
    // handle and process "EventCreatedEvent" event
    const logger = new Logger(event.event);
    let log: string = '';

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
