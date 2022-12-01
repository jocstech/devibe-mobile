import path from 'node:path';
import type { ConfigEnv, UserConfig } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import WindiCSS from 'vite-plugin-windicss';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_PORT, VITE_PUBLIC_PATH } = env;
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      AutoImport({
        imports: ['vue', '@vueuse/core', 'pinia', 'uni-app'],
        dirs: ['src/composables', 'src/stores', 'src/apis'],
        dts: 'src/auto-imports.d.ts',
        vueTemplate: true,
      }),
      WindiCSS(),
      uni(),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(root, './src'),
        },
        {
          find: '~',
          replacement: path.resolve(root, './src'),
        },
      ],
    },
    server: {
      host: true,
      port: Number(VITE_PORT),
    },
  };
});
