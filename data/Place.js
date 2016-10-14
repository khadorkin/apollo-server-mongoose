import mongoose from 'mongoose';
import uuid from 'node-uuid';

const PlaceSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid.v4
  },
  name: String,
  address: String,
  city: String,
  votes: Number
});

export default mongoose.model('Place', PlaceSchema);