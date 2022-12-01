import type { MomentsResult } from './model';
import request from '@/utils/request';

enum API {
  Moments = '/tags',
}

export default class MomentsApi {
  static getMoments() {
    return request.get<MomentsResult>(API.Moments);
  }
}
