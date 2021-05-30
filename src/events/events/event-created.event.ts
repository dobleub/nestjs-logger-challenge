import { CreateOrderData, PaidOrderData, SubscribedCustomerData } from '../interfaces/event.interface';

export class EventCreatedEvent {
  readonly event: string;
  readonly room?: string;
  data: CreateOrderData | PaidOrderData | SubscribedCustomerData;

  constructor(
    event: string, 
    data: CreateOrderData | PaidOrderData | SubscribedCustomerData, 
    room: string = ''
   ) {
    this.event = event;
    this.data = data;
    if (room !== '') {
      this.room = room;
    }
  }
}
