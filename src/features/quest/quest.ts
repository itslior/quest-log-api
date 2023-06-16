import { BaseMongoModel } from '../../common/mongo-client/base-mongo-model';

export interface QuestModel extends BaseMongoModel {
  title: string;
  description: string;
  reward_points: number;
}
