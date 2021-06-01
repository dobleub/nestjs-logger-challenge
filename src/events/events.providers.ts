import { Mongoose } from 'mongoose';
import { EventSchema } from './schemas/event.schema';
import { DB_CONNECTION, EVENT_MODEL } from '../constants';

export const eventsProviders = [
  {
    provide: EVENT_MODEL,
    useFactory: (mongoose: Mongoose) => mongoose.model('Event', EventSchema),
    inject: [DB_CONNECTION],
  },
];
