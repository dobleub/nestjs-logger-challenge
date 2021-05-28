import { Document } from 'mongoose';

export interface Event extends Document {
  readonly event: string;
  readonly room?: string;
  readonly data: string;
}
