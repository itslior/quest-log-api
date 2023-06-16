import { Module } from '@nestjs/common';
import { QuestController } from './quest.controller';
import { MongoClientModule } from '../../common/mongo-client/mongo-client.module';

@Module({
  imports: [MongoClientModule],
  controllers: [QuestController],
})
export class QuestModule {}
