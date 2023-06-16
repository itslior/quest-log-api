import { Controller, Get, Inject } from '@nestjs/common';
import { Db } from 'mongodb';
import { MongoClientService } from '../../common/mongo-client/mongo-client.service';
import { QuestModel } from './quest';

@Controller('quest')
export class QuestController {
  qlModel: MongoClientService<QuestModel>;
  constructor(
    @Inject('DB_CONNECTION') mongoDb: Db,
  ) {
    const collection = mongoDb.collection<QuestModel>('Quest');
    this.qlModel = new MongoClientService<QuestModel>(collection);
  }

  @Get()
  async getQuest() {
    return 'Hello World';
  }
}
