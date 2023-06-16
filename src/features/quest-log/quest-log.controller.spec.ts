import { QuestLogController } from './quest-log.controller';
import { QuestLogService } from './quest-log.service';

describe('QuestLogController', () => {
  let controller: QuestLogController;

  beforeEach(async () => {
    controller = new QuestLogController({} as QuestLogService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
