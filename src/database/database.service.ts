import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { DB_OPTIONS } from '../constants';

@Injectable()
export class DatabaseService {
  private url: string;

  constructor(configService: ConfigService) {
    const host = configService.get('DB_HOST') || 'localhost';
  	const port = configService.get('DB_PORT') || '27017';
  	const db = configService.get('DB_DATA') || 'test';
  	const dbAuth = configService.get('DB_AUTH') || 'admin';
  	const user = configService.get('DB_USER') || '';
  	const password = configService.get('DB_PASS') || '';
  	const mechanism = configService.get('DB_AUTH_MECHANISM') || '';

    this.url = `mongodb://${user}:${password}@${host}:${port}/${db}?authSource=${dbAuth}&authMechanism=${mechanism}`;
  }

  getUrl(): string {
    return this.url;
  }
}
