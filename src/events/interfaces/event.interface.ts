import { Document } from 'mongoose';

export interface Event extends Document {
  readonly event: string;
  readonly room?: string;
  readonly data: CreateOrderData | PaidOrderData | SubscribedCustomerData;
}

export interface ProductsList {
  readonly id: string;
  readonly price: number;
  readonly qty: number;
}

export interface CreateOrderData {
  readonly orderId: string;
  readonly amount: number;
  readonly products?: ProductsList[];
}

export interface PaidOrderData {
  readonly orderId: string;
  readonly paymentId: string;
  readonly authorizationNumber: string | number;
  readonly cardType: string | number;
  readonly last4: string | number;
}

export interface SubscribedCustomerData {
  readonly suscriptionId: string;
  readonly name: string;
  readonly emai: string;
}
