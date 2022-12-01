import jwtDecode from 'jwt-decode';
import { TOKEN_KEY } from '~/enums/cacheEnum';

export function getAuthCache<T>(key: string) {
  return uni.getStorageSync(key) as T;
}

export function setAuthCache(key: string, value: any) {
  return uni.setStorageSync(key, value);
}

export function getToken(): Nullable<string> {
  return getAuthCache(TOKEN_KEY);
}

export function getUserFromToken(token?: string): Nullable<User> {
  const _token = token || getToken();
  if (!_token) return null;
  return jwtDecode(_token);
}
