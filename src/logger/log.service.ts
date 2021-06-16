import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { Model } from 'mongoose';
import * as winston from 'winston';
import * as winstondb from 'winston-mongodb';
import { DatabaseService } from '../database/database.service';
import { ConfigOptions, LogInterface, LoggerOptions } from './interfaces/log.interface';
import { LOG_OPTIONS } from '../constants';

@Injectable()
export class LogService implements LoggerService {
  private winston;
  private context = 'Logger';

  constructor(
    @Inject(LOG_OPTIONS) options: ConfigOptions,
    @Inject(DatabaseService) private readonly databaseService: DatabaseService
  ) {
    this.winston = winston.createLogger({
      transports: [
        new winston.transports.Console({
          level: 'info',
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp({
              format: 'MMM-DD-YYYY, HH:mm:ss'
            }),
            winston.format.printf(info => `[NEST] ${info.level} \t - ${[info.timestamp]} [${info.label}] ${info.message}`),
          )
        }),
        new winston.transports.File({
          filename: 'combined.log',
          level: 'info',
          format: winston.format.printf(info => `[NEST] ${info.level} \t - ${[info.timestamp]} [${info.label}] ${info.message}`),
        }),
        new winstondb.MongoDB({
          level: 'info',
          //mongo database connection link
          db: databaseService.getUrl(),
          options: {
            useNewUrlParser: true, 
            useUnifiedTopology: true
          },
          // A collection to save json formatted logs
          collection: 'logs'
        })
      ]
    })
  }

  error(message: string, label: string = null, trace: string = null) {
    this.winston.log({
      level: 'error',
      label: label || this.context,
      message,
      metadata: {
        context: label || this.context
      },
    })
  }

  log(options: string | LoggerOptions, label: string = null) {
    if (typeof options == 'string') {
      this.winston.log({
        level: 'info',
        label: label || this.context,
        message: options || '',
        metadata: {
          context: label || this.context
        },
      })
    } else {
      this.winston.log({
        level: options.level || 'info',
        label: options.label || this.context,
        message: options.message || '',
        metadata: {
          context: label || this.context
        },
      })
    }
  }

  warn(message: string, label: string = null) {
    this.winston.log({
      level: 'warn',
      label: label || this.context,
      message,
      metadata: {
        context: label || this.context
      },
    })
  }

  info(message: string, label: string = null) {
    this.winston.log({
      level: 'info',
      label: label || this.context,
      message,
      metadata: {
        context: label || this.context
      },
    })
  }

  setContext(context: string) {
    this.context = context || 'Logger';
  }
}