import mongoose from 'mongoose';
import config from '../config';

export default {
  open () {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.database.uri);
  },
  close () {
    mongoose.connection.close();
  }
};
