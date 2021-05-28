import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  room: String,
  data: String,
});
