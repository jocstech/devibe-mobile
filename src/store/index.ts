import type { App } from 'vue';
import { createPinia } from 'pinia';
import { useAppStore } from './modules/app';
import { usePageStore } from './modules/page';
import { useAuthStore } from './modules/auth';

const store = createPinia();

export const setupStore = (app: App<Element>) => {
  app.use(store);
};

export { useAppStore, usePageStore, useAuthStore };
export default store;
