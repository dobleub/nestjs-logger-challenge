import { Mongoose } from 'mongoose';
import { LogSchema } from './schemas/log.schema';
import { DB_CONNECTION, LOG_MODEL } from '../constants';

export const logProviders = [
  {
    provide: LOG_MODEL,
    useFactory: (mongoose: Mongoose) => mongoose.model('Log', LogSchema),
    inject: [DB_CONNECTION],
  },
];
