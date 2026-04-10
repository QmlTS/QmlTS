import { defineConfig } from '../../../../src/build/define-config.js';

export default defineConfig({
  entry: './src/app.ts',
  outDir: './build',
  qt: {
    dir: 'C:\\Qt\\6.11.0\\msvc2022_64',
    modules: ['QtQuick', 'QtQuick.Controls', 'QtQuick.Layouts'],
    targetVersion: '6.11',
  },
  build: {
    aot: false,
    lint: true,
    format: true,
    sourceMaps: true,
    incremental: true,
    concurrency: 2,
    qualityGate: 'lint',
    mode: 'production',
    minify: true,
  },
  host: {
    prebuilt: false,
    cargo: { profile: 'release', args: ['--features', 'debug-log'] },
  },
  dev: {
    hotReload: true,
    watchPaths: ['./src', './lib'],
    debounceMs: 300,
    ignorePatterns: ['*.test.ts'],
    port: 9000,
    notify: false,
    preserveOnError: false,
  },
  assets: {
    dir: './res',
    include: ['**/*.png', '**/*.svg'],
    exclude: ['**/thumbs.db'],
    useQrc: true,
    optimize: true,
  },
  distribute: {
    targets: ['win32-x64', 'linux-x64'],
    bundleQt: true,
    icon: './res/icon.png',
    appName: 'MyQmlApp',
    appVersion: '1.0.0',
  },
  qmlModulePaths: ['./qml-modules'],
});
