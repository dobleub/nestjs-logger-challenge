import { DynamicModule, Module, Global } from '@nestjs/common';
import { LogService } from './log.service';
import { DatabaseModule } from '../database/database.module';
import { ConfigOptions } from './interfaces/log.interface';
import { LOG_OPTIONS } from '../constants';

@Global()
@Module({})
export class LogModule {
  static register(options: ConfigOptions): DynamicModule {
    return {
      imports: [DatabaseModule],
      module: LogModule,
      providers: [
        {
          provide: LOG_OPTIONS,
          useValue: options,
        },
        LogService,
      ],
      exports: [LogService],
    };
  }
}
