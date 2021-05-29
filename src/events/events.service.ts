import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Model } from 'mongoose';
import { CreateEventsDto } from './dto/create-event.dto';
import { EventCreatedEvent } from './events/event-created.event';
import { Event } from './interfaces/event.interface';
import { EVENT_MODEL } from '../constants';

@Injectable()
export class EventsService {
  constructor(@Inject(EVENT_MODEL) private readonly eventModel: Model<Event>, private eventEmitter: EventEmitter2) {}

  async create(createEventsDto: CreateEventsDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventsDto);

    const eventCreatedEvent = new EventCreatedEvent(createdEvent.event, createdEvent.data);
    this.eventEmitter.emit(createdEvent.event, eventCreatedEvent);

    return createdEvent.save();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }
}
