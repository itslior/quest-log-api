import { MongoClientService } from './mongo-client.service';
import { BaseMongoModel } from './base-mongo-model';
import { MongoCollectionMock } from '../../../test/mocks';
import { Collection } from 'mongodb';

describe('MongoClientService', () => {
  let service: MongoClientService<BaseMongoModel>;

  beforeEach(async () => {
    service = new MongoClientService<BaseMongoModel>(MongoCollectionMock as any);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne func', () => {
    it('should check the successful flow', async () => {
      const spy = jest.spyOn<Collection, any>(MongoCollectionMock as any, 'findOne').mockResolvedValueOnce({ _id: 'someId' });
      const res = await service.findOne({ _id: 'someId' });
      expect(res).toHaveProperty('_id');
      expect(res._id).toEqual('someId');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith({ _id: 'someId' }, undefined);
    });
  });

  describe('find func', () => {
    it('should check the successful flow', async () => {
      const spy = jest.spyOn<Collection, any>(MongoCollectionMock as any, 'find').mockReturnValue({ toArray: () => [{ _id: 'someId' }] });
      const res = await service.find({ _id: 'someId' });
      expect(res).toHaveLength(1);
      expect(res[0]._id).toEqual('someId');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith({ _id: 'someId' }, undefined);
    });
  });

  describe('upsert func', () => {
    it('should check the successful flow', async () => {
      const date = new Date();
      const spy = jest.spyOn<Collection, any>(MongoCollectionMock as any, 'findOneAndUpdate')
        .mockResolvedValueOnce({ ok: true, value: { _id: 'someId', _created_at: date, _updated_at: date } });
      const res = await service.upsert({ $set: { _created_at: new Date() } }, { _id: 'someId' });
      expect(res).toHaveProperty('_created_at');
      expect(res._created_at).toEqual(date);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
