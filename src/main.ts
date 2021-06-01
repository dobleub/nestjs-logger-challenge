import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';
import { LogService } from './logger/log.service';
import { DatabaseService } from './database/database.service';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const logger = new Logger('NestLoggerApi');
  const app = await NestFactory.create(AppModule, {
    logger: new LogService({type: 'simple'}, new DatabaseService(new ConfigService({ folder: './' }) ))
  });
  
  await app.listen(3000);
  
  logger.log(`🚀 Api is running on: ${await app.getUrl()}`);
}
bootstrap();
