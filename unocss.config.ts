import { defineConfig } from 'unocss'
import {
  transformerAttributify,
  transformerClass,
} from 'unocss-preset-weapp/transformer'
import presetWeapp from 'unocss-preset-weapp'


export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
  ],
  shortcuts: [],
  transformers: [
    // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify({
      nonValuedAttribute: true,
    }),

    // options https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ],
})