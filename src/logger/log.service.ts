import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { LogDto } from './dto/log.dto';
import { LogInterface } from './interfaces/log.interface';
import { LOG_MODEL } from '../constants';

@Injectable()
export class LogService {
  constructor(@Inject(LOG_MODEL) private readonly logModel: Model<LogInterface>) {}

  async create(logDto: LogDto): Promise<LogInterface> {
    const insertedLog = new this.logModel(logDto);
    return insertedLog.save();
  }

  async findAll(): Promise<LogInterface[]> {
    return this.logModel.find().exec();
  }
}
