import { createPinia } from "pinia";
import { useAppStore } from "./modules/app";
import { usePageStore } from "./modules/page";

const pinia = createPinia();

export { useAppStore, usePageStore };
export default pinia;
