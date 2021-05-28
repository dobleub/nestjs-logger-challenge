import { Module, Global } from '@nestjs/common';
import { LogService } from './log.service';
import { logProviders } from './log.providers';
import { DatabaseModule } from '../database/database.module';

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [LogService, ...logProviders],
})
export class LogModule {}
