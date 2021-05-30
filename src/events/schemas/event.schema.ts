import * as mongoose from 'mongoose';
import { isEmail } from 'validator';

const ProductSchema = new mongoose.Schema({
  id: String,
  price: Number,
  qty: Number
});

const MetaDataSchema = new mongoose.Schema({
  orderId: String,
  amount: Number,
  products: [ProductSchema],
  
  paymentId: String,
  authorizationNumber: String,
  cardType: String,
  last4: String,

  suscriptionId: String,
  name: String,
  email: {
    type: String,
    lowercase: true,
    validate: [ isEmail, 'Invalid email' ]
  },
});

export const EventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
  room: String,
  data: MetaDataSchema,
});
