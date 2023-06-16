import { QuestController } from './quest.controller';
import { dbMock } from '../../../test/mocks';
import { MongoClientService } from '../../common/mongo-client/mongo-client.service';
import { QuestModel } from './quest';

describe('QuestController', () => {
  let controller: QuestController;

  beforeEach(async () => {
    controller = new QuestController(dbMock as any);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne func', () => {
    it('should test the successful flow', async () => {
      const spy = jest.spyOn<MongoClientService<QuestModel>, any>(controller.model as any, 'findOne')
        .mockResolvedValueOnce({ _id: 'someId', title: 'test', reward_points: 1 } as any);
      const res = await controller.findOne({ title: 'test' });

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith({ title: 'test' });
      expect(res).toHaveProperty('_id');
      expect(res._id).toEqual('someId');
    });
  });

});
