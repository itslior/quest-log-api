import { QuestLogService } from './quest-log.service';

describe('QuestLogService', () => {
  let service: QuestLogService;

  beforeEach(async () => {
    service = new QuestLogService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
