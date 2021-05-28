import { Document } from 'mongoose';

export interface LogInterface extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
