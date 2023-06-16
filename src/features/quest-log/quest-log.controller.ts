import { Controller, Get } from '@nestjs/common';
import { QuestLogService } from './quest-log.service';

@Controller('quest-log')
export class QuestLogController {
  constructor(private readonly qlService: QuestLogService) {
  }

  @Get()
  async getQuest() {
    return 'Hello World';
  }
}
