import { Module } from '@nestjs/common';
import { QuestLogModule } from './features/quest-log/quest-log.module';

@Module({
  imports: [QuestLogModule],
})
export class AppModule {}
