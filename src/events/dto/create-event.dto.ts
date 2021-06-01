import { CreateOrderData, PaidOrderData, SubscribedCustomerData } from '../interfaces/event.interface';

export class CreateEventsDto {
  readonly event: string;
  readonly room?: string;
  data: CreateOrderData | PaidOrderData | SubscribedCustomerData;
}
