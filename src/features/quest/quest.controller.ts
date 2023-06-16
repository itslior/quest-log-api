import { Body, Controller, Get, HttpException, Inject, Post, Query } from '@nestjs/common';
import { Db } from 'mongodb';
import { MongoClientService } from '../../common/mongo-client/mongo-client.service';
import { QuestModel } from './quest';
import { FindOneDto } from './dto';
import { UpsertDto } from './dto/upsert-dto';

@Controller('quest')
export class QuestController {
  model: MongoClientService<QuestModel>;
  constructor(
    @Inject('DB_CONNECTION') mongoDb: Db,
  ) {
    const collection = mongoDb.collection<QuestModel>('Quest');
    this.model = new MongoClientService<QuestModel>(collection);
  }

  @Get()
  async findOne(@Query() filter: FindOneDto) {
    try {
      return await this.model.findOne(filter);
    } catch (err) {
      console.error({ message: `quest.controller.ts | Error in findOne | filter: ${JSON.stringify(filter)} | error: ${JSON.stringify(err)}`,
        status: 'error' });
      throw new HttpException(err, err.status || 500);
    }
  }

  @Post()
  async upsert(@Query('id') id, @Body() upsertDto: UpsertDto) {
    if (!id && !upsertDto.title) {
      throw new HttpException('Bad Request - Please make sure you provide id or title', 400);
    }

    const filter = id ? { _id : id } : { title: upsertDto.title };
    try {
      return await this.model.upsert(upsertDto, filter);
    } catch (err) {
      console.error(`quest.controller.ts | Error in upsertOne | filter: ${JSON.stringify(filter)} `
        + `| updateSet: ${JSON.stringify(upsertDto)} | error: ${JSON.stringify(err)}`);
      throw new HttpException(err, err.status || 500);
    }
  }
}
