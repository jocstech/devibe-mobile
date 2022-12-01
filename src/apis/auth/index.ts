import type { LoginParams, LoginResult } from './model';
import request from '@/utils/request';

enum API {
  Login = '/auth/login',
  Logout = '/auth/logout',
}

export default class AuthApi {
  // 登录
  static login(form: LoginParams) {
    return request.post<LoginResult>(API.Login, form);
  }

  // 退出登录
  static logout() {
    return request.get(API.Logout);
  }
}
