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

  dataIsCreateOrder(data: CreateOrderData | PaidOrderData | SubscribedCustomerData): data is CreateOrderData {
    return (<CreateOrderData>data).amount !== undefined;
  }
  dataIsPaidOrder(data: CreateOrderData | PaidOrderData | SubscribedCustomerData): data is PaidOrderData {
    return (<PaidOrderData>data).paymentId !== undefined;
  }
  dataIsSubscribedCustomer(data: CreateOrderData | PaidOrderData | SubscribedCustomerData): data is SubscribedCustomerData {
    return (<SubscribedCustomerData>data).suscriptionId !== undefined;
  }

}
