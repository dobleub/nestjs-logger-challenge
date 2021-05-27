import * as mongoose from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ConfigService } from '../config/config.service';
import { DB_CONNECTION } from '../constants';

@Injectable()
export class DatabaseProviders {
  private url: string;
  private env: string;
  private host: string;

  constructor(@Inject(DB_CONNECTION) databaseService: DatabaseService, configService: ConfigService) {
    this.url = databaseService.getUrl();
    this.env = configService.get('NODE_ENV');
  }

  async useFactory(): Promise<typeof mongoose> {
  	if (this.env == 'development') {
		mongoose.set('debug', true);
	}
  	return await mongoose.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true});
  }
}
