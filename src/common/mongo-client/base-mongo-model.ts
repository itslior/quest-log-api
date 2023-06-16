import { Document } from 'mongodb';

export interface BaseMongoModel extends Document {
  _id: string;
}
