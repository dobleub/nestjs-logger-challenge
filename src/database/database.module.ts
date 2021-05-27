import { Module, DynamicModule } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { DatabaseService } from './database.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule.register({ folder: './' })],
  providers: [DatabaseService, ...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
