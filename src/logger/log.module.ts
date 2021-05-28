import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { logProviders } from './log.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [LogService, ...logProviders],
})
export class LogModule {}
