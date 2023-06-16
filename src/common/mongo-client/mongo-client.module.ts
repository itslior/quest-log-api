import { Module, Provider } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';

export const DBProvider: Provider<Db> = {
  provide: 'DB_CONNECTION',
  useFactory: (): Db => {
    const mongoUri = process.env.MONGO_URI;
    const client = new MongoClient(mongoUri);
    return client.db('combined-platform');
  },
};

@Module({
  providers: [DBProvider],
  exports: [DBProvider],
})
export class MongoClientModule {}
