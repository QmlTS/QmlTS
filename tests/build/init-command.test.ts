import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { executeInit } from '../../src/build/init-command.js';

describe('executeInit', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-init-'));
  });

  afterEach(() => {
    if (existsSync(tempDir)) {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test('IN-01: minimal template generates basic project structure', async () => {
    const dir = join(tempDir, 'my-project');
    const result = await executeInit({
      dir,
      template: 'minimal',
      skipInstall: true,
    });

    expect(result.template).toBe('minimal');
    expect(result.dir).toBe(dir);
    expect(existsSync(join(dir, 'package.json'))).toBe(true);
    expect(existsSync(join(dir, 'tsconfig.json'))).toBe(true);
    expect(existsSync(join(dir, 'qmlts.config.ts'))).toBe(true);
    expect(existsSync(join(dir, 'src', 'main.ts'))).toBe(true);
  });

  test('IN-02: counter template includes counter example files', async () => {
    const dir = join(tempDir, 'counter-app');
    const result = await executeInit({
      dir,
      template: 'counter',
      skipInstall: true,
    });

    expect(result.template).toBe('counter');
    expect(existsSync(join(dir, 'src', 'CounterViewModel.ts'))).toBe(true);
    expect(existsSync(join(dir, 'src', 'CounterView.ts'))).toBe(true);
    expect(existsSync(join(dir, 'src', 'main.ts'))).toBe(true);
  });

  test('IN-03: mvvm template includes ViewModel with State/Command/Effect', async () => {
    const dir = join(tempDir, 'mvvm-app');
    const result = await executeInit({
      dir,
      template: 'mvvm',
      skipInstall: true,
    });

    expect(result.template).toBe('mvvm');
    expect(existsSync(join(dir, 'src', 'viewmodels', 'AppViewModel.ts'))).toBe(true);

    const vmContent = readFileSync(join(dir, 'src', 'viewmodels', 'AppViewModel.ts'), 'utf-8');
    expect(vmContent).toContain('@State()');
    expect(vmContent).toContain('@Command()');
    expect(vmContent).toContain('@Effect()');
  });

  test('IN-04: full template includes all features', async () => {
    const dir = join(tempDir, 'full-app');
    const result = await executeInit({
      dir,
      template: 'full',
      skipInstall: true,
    });

    expect(result.template).toBe('full');
    expect(existsSync(join(dir, 'src', 'CounterViewModel.ts'))).toBe(true);
    expect(existsSync(join(dir, 'src', 'CounterView.ts'))).toBe(true);
    expect(existsSync(join(dir, 'src', 'viewmodels', 'AppViewModel.ts'))).toBe(true);
    expect(existsSync(join(dir, 'README.md'))).toBe(true);
  });

  test('IN-05: dir option creates project in specified directory', async () => {
    const customDir = join(tempDir, 'sub', 'nested', 'project');
    const result = await executeInit({
      dir: customDir,
      template: 'minimal',
      skipInstall: true,
    });

    expect(result.dir).toBe(customDir);
    expect(existsSync(join(customDir, 'package.json'))).toBe(true);
  });

  test('IN-06: skipInstall prevents package installation', async () => {
    const dir = join(tempDir, 'skip-install');
    const result = await executeInit({
      dir,
      template: 'minimal',
      skipInstall: true,
    });

    expect(result.installed).toBe(false);
    expect(existsSync(join(dir, 'node_modules'))).toBe(false);
  });

  test('IN-07: packageManager option is recorded in result', async () => {
    const dir = join(tempDir, 'pm-test');
    const result = await executeInit({
      dir,
      template: 'minimal',
      packageManager: 'pnpm',
      skipInstall: true,
    });

    expect(result.packageManager).toBe('pnpm');
  });

  test('IN-08: generated qmlts.config.ts contains valid config structure', async () => {
    const dir = join(tempDir, 'config-check');
    await executeInit({
      dir,
      template: 'minimal',
      skipInstall: true,
    });

    const configContent = readFileSync(join(dir, 'qmlts.config.ts'), 'utf-8');
    expect(configContent).toContain('defineConfig');
    expect(configContent).toContain("entry: './src/main.ts'");
    expect(configContent).toContain("outDir: './dist'");
    expect(configContent).toContain('QtQuick');
    expect(configContent).toContain('6.11.0');
  });

  test('IN-08a: generated package.json includes @qmlts/build and current TypeScript range', async () => {
    const dir = join(tempDir, 'package-json-check');
    await executeInit({
      dir,
      template: 'minimal',
      skipInstall: true,
    });

    const packageJson = JSON.parse(readFileSync(join(dir, 'package.json'), 'utf-8')) as {
      dependencies: Record<string, string>;
      devDependencies: Record<string, string>;
    };

    expect(packageJson.dependencies['@qmlts/build']).toBe('*');
    expect(packageJson.devDependencies.typescript).toBe('^6.0.0');
  });

  test('IN-09: init in non-empty directory still creates files', async () => {
    const dir = join(tempDir, 'non-empty');
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'existing.txt'), 'hello', 'utf-8');

    const result = await executeInit({
      dir,
      template: 'minimal',
      skipInstall: true,
    });

    expect(result.filesCreated.length).toBeGreaterThan(0);
    expect(existsSync(join(dir, 'existing.txt'))).toBe(true);
    expect(existsSync(join(dir, 'package.json'))).toBe(true);
  });

  test('IN-10: filesCreated accurately lists all generated files', async () => {
    const dir = join(tempDir, 'file-list');
    const result = await executeInit({
      dir,
      template: 'minimal',
      skipInstall: true,
    });

    for (const filePath of result.filesCreated) {
      expect(existsSync(join(dir, filePath))).toBe(true);
    }
  });

  test('IN-11: default template is minimal when not specified', async () => {
    const dir = join(tempDir, 'default-template');
    const result = await executeInit({
      dir,
      skipInstall: true,
    });

    expect(result.template).toBe('minimal');
  });

  test('IN-12: default package manager is npm', async () => {
    const dir = join(tempDir, 'default-pm');
    const result = await executeInit({
      dir,
      skipInstall: true,
    });

    expect(result.packageManager).toBe('npm');
  });

  test('IN-13: invalid package manager is rejected at runtime', async () => {
    const dir = join(tempDir, 'invalid-pm');

    await expect(
      executeInit({
        dir,
        template: 'minimal',
        packageManager: 'evil-pm' as never,
        skipInstall: true,
      }),
    ).rejects.toThrow(/Invalid package manager/);
  });
});
