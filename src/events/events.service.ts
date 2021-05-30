import { Inject, Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Model } from 'mongoose';
import { CreateEventsDto } from './dto/create-event.dto';
import { EventCreatedEvent } from './events/event-created.event';
import { Event } from './interfaces/event.interface';
import { EVENT_MODEL } from '../constants';
import { SocketGateway } from '../socket/socket.gateway';

@Injectable()
export class EventsService {
  constructor(
     @Inject(EVENT_MODEL) private readonly eventModel: Model<Event>, 
     private eventEmitter: EventEmitter2, 
     private socketGateway: SocketGateway
  ) {}

  async create(createEventsDto: CreateEventsDto): Promise<Event> {
    const createdEvent = new this.eventModel(createEventsDto);

    const eventCreatedEvent = new EventCreatedEvent(createdEvent.event, createdEvent.data);
    this.eventEmitter.emit(createdEvent.event, eventCreatedEvent);

    this.socketGateway.server.emit('events', { test: 'test' });

    return createdEvent.save();
  }

  async findAll(): Promise<Event[]> {
    return this.eventModel.find().exec();
  }
}
