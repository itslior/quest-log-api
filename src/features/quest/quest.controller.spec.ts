import { QuestController } from './quest.controller';
import { dbMock } from '../../../test/mocks';

describe('QuestController', () => {
  let controller: QuestController;

  beforeEach(async () => {
    controller = new QuestController(dbMock as any);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
