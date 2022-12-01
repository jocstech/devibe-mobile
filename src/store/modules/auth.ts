import { defineStore } from 'pinia';
import { getToken, getUserFromToken, setAuthCache } from '@/utils/auth';
import { TOKEN_KEY } from '~/enums/cacheEnum';

interface AuthState {
  authToken: Nullable<string>;
  authUser: Nullable<User>;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    authToken: getToken(),
    authUser: getUserFromToken(),
  }),
  getters: {
    getAuthToken(): Nullable<string> {
      return this.authToken;
    },
    getUser(): Nullable<User> {
      return this.authUser;
    },
  },
  actions: {
    setToken(token?: Nullable<string>) {
      if (!token) return;
      this.authToken = token;
    },
    setUser(user?: Nullable<User>) {
      if (!user) return;
      this.authUser = user;
    },
    onLoginSuccess(token?: string) {
      if (!token) return;
      setAuthCache(TOKEN_KEY, token);
      this.setToken(token);
      this.setUser(getUserFromToken(token));
    },
  },
});
