import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateEventsDto } from './dto/create-event.dto';
import { EventsService } from './events.service';
import { Event } from './interfaces/event.interface';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() createEventsDto: CreateEventsDto) {
    this.eventsService.create(createEventsDto);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return this.eventsService.findAll();
  }
}
