import { Module } from '@nestjs/common';
import { QuestLogController } from './quest-log.controller';
import { QuestLogService } from './quest-log.service';

@Module({
  controllers: [QuestLogController],
  providers: [QuestLogService]
})
export class QuestLogModule {}
