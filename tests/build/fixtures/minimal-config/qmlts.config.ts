import { defineConfig } from '../../../../src/build/define-config.js';

export default defineConfig({
  entry: './src/main.ts',
  outDir: './dist',
  qt: {
    dir: './qt',
  },
});
