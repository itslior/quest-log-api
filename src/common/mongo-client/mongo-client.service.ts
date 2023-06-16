import { BaseMongoModel } from './base-mongo-model';
import {
  Collection, Filter, FindOneAndUpdateOptions, FindOptions, ReturnDocument, UpdateFilter, WithId,
} from 'mongodb';
import { InternalServerErrorException } from '@nestjs/common';


export class MongoClientService<TModel extends BaseMongoModel> {
  constructor(
    private readonly collection: Collection<TModel>,
  ) {
  }


  async findOne(filter: Filter<TModel>, options?: FindOptions): Promise<WithId<TModel> | Record<string, never>> {
    return await this.collection.findOne(filter, options);
  }

  async upsert(
    update: Object,
    filter: Filter<TModel>,
    options?: FindOneAndUpdateOptions,
  ): Promise<WithId<TModel>> {
    const updateSet: UpdateFilter<TModel> = {
      $set: { ...update } as Partial<TModel>,
    };
    const additionalOpts = {
      ...options,
      upsert: true,
      returnDocument: ReturnDocument.AFTER,
    };

    const response = await this.collection.findOneAndUpdate(filter, updateSet, additionalOpts);
    if (!response.ok) {
      throw new InternalServerErrorException('Error in upsert');
    }
    return response?.value;
  }

  async find(filter: Filter<TModel>, options?: FindOptions): Promise<WithId<TModel>[]> {
    return this.collection.find(filter, options).toArray();
  }
}
