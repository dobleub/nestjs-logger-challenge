import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  console.log(`🚀 Application and Socket is running on: ${await app.getUrl()}`);
}
bootstrap();
