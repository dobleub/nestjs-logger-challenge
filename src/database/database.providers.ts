import * as mongoose from 'mongoose';
import { DatabaseService } from './database.service';
import { ConfigService } from '../config/config.service';
import { DB_CONNECTION } from '../constants';

export const databaseProviders = [
  {
    provide: DB_CONNECTION,
    useFactory: async (databaseService: DatabaseService, configService: ConfigService): Promise<typeof mongoose> => { 
      if (configService.get('NODE_ENV') == 'development') {
        mongoose.set('debug', true);
      }
      return await mongoose.connect(databaseService.getUrl(), {useNewUrlParser: true, useUnifiedTopology: true}) 
    },
    inject: [DatabaseService, ConfigService],
  },
];

