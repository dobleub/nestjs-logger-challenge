import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('NestLoggerApi');
  const app = await NestFactory.create(AppModule);
  
  await app.listen(3000);

  logger.log(`🚀 Api is running on: ${await app.getUrl()}`);
}
bootstrap();
