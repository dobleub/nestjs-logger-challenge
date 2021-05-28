import { Document } from 'mongoose';

export interface Event extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
