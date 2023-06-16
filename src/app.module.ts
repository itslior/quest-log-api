import { Module } from '@nestjs/common';
import { QuestModule } from './features/quest/quest.module';
import { MongoClientModule } from './common/mongo-client/mongo-client.module';

@Module({
  imports: [
    //common modules
    MongoClientModule,
    //features
    QuestModule,
  ],
})
export class AppModule {}
