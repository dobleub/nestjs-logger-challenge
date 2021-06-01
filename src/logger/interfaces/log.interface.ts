import { Document } from 'mongoose';

export interface LogInterface extends Document {
  readonly line: string;
  readonly context: string;
}

export interface ConfigOptions {
  readonly type: string;
}

export interface LoggerOptions {
  readonly level: string;
  readonly label: string;
  readonly context: string;
  readonly message: string;
}