import { Mongoose } from 'mongoose';
import { CatSchema } from './schemas/cat.schema';
import { DB_CONNECTION } from '../constants';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Cat', CatSchema),
    inject: [DB_CONNECTION],
  },
];
