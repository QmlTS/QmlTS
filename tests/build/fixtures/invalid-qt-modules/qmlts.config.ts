import { defineConfig } from '../../../../src/build/define-config.js';

export default defineConfig({
  qt: { modules: ['QtQuick', '123bad'] },
});
