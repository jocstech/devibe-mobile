import { createSSRApp } from "vue";
import App from "./App.vue";
// import { addTabBar } from "./components/dynamic/tabBar"
export function createApp() {
  const app = createSSRApp(App);
  // addTabBar();
  return {
    app,
  };
}
