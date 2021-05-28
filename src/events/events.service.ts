import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateEventsDto } from './dto/create-event.dto';
import { Event } from './interfaces/event.interface';
import { EVENT_MODEL } from '../constants';

@Injectable()
export class EventsService {
  constructor(@Inject(EVENT_MODEL) private readonly eventModel: Model<Event>) {}

  async create(createEventsDto: CreateEventsDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventsDto);
    return createdEvent.save();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }
}
