import { beforeAll, describe, expect, test } from 'bun:test';
import { chmodSync, existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { DoctorCheckName } from '../../src/build/build-types.js';
import { getDoctorCheckNames, runDoctorChecks } from '../../src/build/doctor.js';
import { executeDoctor } from '../../src/build/doctor-command.js';

function createFakeCommand(binDir: string, name: string, body: string): void {
  if (process.platform === 'win32') {
    writeFileSync(join(binDir, `${name}.cmd`), body, 'utf-8');
    return;
  }

  const filePath = join(binDir, name);
  writeFileSync(filePath, body, 'utf-8');
  chmodSync(filePath, 0o755);
}

describe('Doctor', () => {
  let baselineResult: Awaited<ReturnType<typeof runDoctorChecks>>;

  beforeAll(async () => {
    baselineResult = await runDoctorChecks();
  });

  test('DR-01: getDoctorCheckNames returns all 16 check names', () => {
    const names = getDoctorCheckNames();
    expect(names).toHaveLength(16);

    const expected: DoctorCheckName[] = [
      'qt-installed',
      'qt-version',
      'qmlformat-available',
      'qmllint-available',
      'qmlcachegen-available',
      'node-version',
      'bun-available',
      'cargo-available',
      'rustc-available',
      'cmake-available',
      'cmake-version',
      'msvc-available',
      'ninja-available',
      'host-lib-exists',
      'config-valid',
      'dependencies-resolved',
    ];
    for (const name of expected) {
      expect(names).toContain(name);
    }
  });

  test('DR-02: runDoctorChecks returns result with 16 checks', async () => {
    const result = baselineResult;

    expect(result.checks).toHaveLength(16);
    expect(typeof result.allPassed).toBe('boolean');

    for (const check of result.checks) {
      expect(check.name).toBeDefined();
      expect(check.description).toBeDefined();
      expect(['pass', 'warn', 'fail']).toContain(check.status);
      expect(check.message).toBeDefined();
    }
  });

  test('DR-03: node-version check passes in current environment', async () => {
    const result = baselineResult;
    const nodeCheck = result.checks.find((c) => c.name === 'node-version');

    expect(nodeCheck).toBeDefined();
    expect(nodeCheck!.status).toBe('pass');
  });

  test('DR-04: bun-available passes in Bun environment', async () => {
    const result = baselineResult;
    const bunCheck = result.checks.find((c) => c.name === 'bun-available');

    expect(bunCheck).toBeDefined();
    expect(bunCheck!.status).not.toBe('fail');
  });

  test('DR-05: all check names are unique', async () => {
    const result = baselineResult;
    const names = result.checks.map((c) => c.name);
    const uniqueNames = new Set(names);

    expect(uniqueNames.size).toBe(names.length);
  });

  test('DR-06: allPassed is true only when no checks fail', async () => {
    const result = baselineResult;
    const hasFail = result.checks.some((c) => c.status === 'fail');

    expect(result.allPassed).toBe(!hasFail);
  });

  test('DR-07: config-valid fails with nonexistent config', async () => {
    const result = await runDoctorChecks({
      config: '/nonexistent/qmlts.config.ts',
    });
    const configCheck = result.checks.find((c) => c.name === 'config-valid');

    expect(configCheck).toBeDefined();
    expect(configCheck!.status).toBe('fail');
    expect(configCheck!.message).toContain('Config');
  });

  test('DR-08: executeDoctor returns DoctorResult', async () => {
    const result = await executeDoctor();

    expect(result.checks).toHaveLength(16);
    expect(typeof result.allPassed).toBe('boolean');
  });

  test('DR-09: failed fixable checks include fixCommand', async () => {
    const result = baselineResult;
    const fixableChecks = result.checks.filter((c) => c.fixable);

    for (const check of fixableChecks) {
      expect(check.fixCommand).toBeDefined();
      expect(typeof check.fixCommand).toBe('string');
      expect(check.fixCommand!.length).toBeGreaterThan(0);
    }
  });

  test('DR-10: dependencies-resolved check passes when node_modules exists', async () => {
    const result = baselineResult;
    const depsCheck = result.checks.find((c) => c.name === 'dependencies-resolved');

    expect(depsCheck).toBeDefined();
    expect(depsCheck!.status).toBe('pass');
  });

  test('DR-11: msvc-available returns pass on non-Windows or detects MSVC on Windows', async () => {
    const result = baselineResult;
    const msvcCheck = result.checks.find((c) => c.name === 'msvc-available');

    expect(msvcCheck).toBeDefined();
    if (process.platform !== 'win32') {
      expect(msvcCheck!.status).toBe('pass');
      expect(msvcCheck!.message).toContain('Not required');
    }
    // On Windows, status depends on whether MSVC is installed — just verify it exists
  });

  test('DR-12: dependencies-resolved uses config directory as project root', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'qmlts-doctor-'));

    try {
      const projectDir = join(tempDir, 'app');
      mkdirSync(join(projectDir, 'node_modules'), { recursive: true });
      writeFileSync(join(projectDir, 'qmlts.config.ts'), 'export default {};', 'utf-8');

      const result = await runDoctorChecks({
        config: join(projectDir, 'qmlts.config.ts'),
      });
      const depsCheck = result.checks.find((c) => c.name === 'dependencies-resolved');

      expect(depsCheck).toBeDefined();
      expect(depsCheck!.status).toBe('pass');
    } finally {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test('DR-13: doctor uses qt.dir and qt.targetVersion from project config', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'qmlts-doctor-qt-'));
    const originalPath = process.env.PATH ?? '';

    try {
      const projectDir = join(tempDir, 'app');
      const qtBinDir = join(projectDir, 'fake-qt', 'bin');
      mkdirSync(join(projectDir, 'src'), { recursive: true });
      mkdirSync(join(projectDir, 'node_modules'), { recursive: true });
      mkdirSync(qtBinDir, { recursive: true });
      writeFileSync(join(projectDir, 'src', 'main.ts'), 'export default 1;\n', 'utf-8');

      if (process.platform === 'win32') {
        createFakeCommand(
          qtBinDir,
          'qmake6',
          '@echo off\r\necho QMake version 3.1\r\necho Using Qt version 6.11.0 in C:\\fake-qt\r\n',
        );
      } else {
        createFakeCommand(
          qtBinDir,
          'qmake6',
          '#!/bin/sh\necho "QMake version 3.1"\necho "Using Qt version 6.11.0 in /fake-qt"\n',
        );
      }

      process.env.PATH = `${qtBinDir}${process.platform === 'win32' ? ';' : ':'}${originalPath}`;

      writeFileSync(
        join(projectDir, 'qmlts.config.ts'),
        `export default {
  entry: './src/main.ts',
  outDir: './dist',
  qt: {
    dir: './fake-qt',
    modules: ['QtQuick'],
    targetVersion: '6.11.0',
  },
};
`,
        'utf-8',
      );

      const result = await runDoctorChecks({
        config: join(projectDir, 'qmlts.config.ts'),
      });
      const qtInstalled = result.checks.find((c) => c.name === 'qt-installed');
      const qtVersion = result.checks.find((c) => c.name === 'qt-version');

      expect(qtInstalled).toBeDefined();
      expect(qtInstalled!.status).toBe('pass');
      expect(qtVersion).toBeDefined();
      expect(qtVersion!.status).toBe('pass');
      expect(qtVersion!.message).toContain('6.11.0');
    } finally {
      process.env.PATH = originalPath;
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test('DR-13a: doctor warns when Qt version is below the configured requirement', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'qmlts-doctor-qt-low-'));
    const originalPath = process.env.PATH ?? '';

    try {
      const projectDir = join(tempDir, 'app');
      const qtBinDir = join(projectDir, 'fake-qt', 'bin');
      mkdirSync(join(projectDir, 'src'), { recursive: true });
      mkdirSync(join(projectDir, 'node_modules'), { recursive: true });
      mkdirSync(qtBinDir, { recursive: true });
      writeFileSync(join(projectDir, 'src', 'main.ts'), 'export default 1;\n', 'utf-8');

      if (process.platform === 'win32') {
        createFakeCommand(
          qtBinDir,
          'qmake6',
          '@echo off\r\necho QMake version 3.1\r\necho Using Qt version 6.10.0 in C:\\fake-qt\r\n',
        );
      } else {
        createFakeCommand(
          qtBinDir,
          'qmake6',
          '#!/bin/sh\necho "QMake version 3.1"\necho "Using Qt version 6.10.0 in /fake-qt"\n',
        );
      }

      process.env.PATH = `${qtBinDir}${process.platform === 'win32' ? ';' : ':'}${originalPath}`;

      writeFileSync(
        join(projectDir, 'qmlts.config.ts'),
        `export default {
  entry: './src/main.ts',
  outDir: './dist',
  qt: {
    dir: './fake-qt',
    modules: ['QtQuick'],
    targetVersion: '6.11.0',
  },
};
`,
        'utf-8',
      );

      const result = await runDoctorChecks({
        config: join(projectDir, 'qmlts.config.ts'),
      });
      const qtVersion = result.checks.find((c) => c.name === 'qt-version');

      expect(qtVersion).toBeDefined();
      expect(qtVersion!.status).toBe('warn');
      expect(qtVersion!.message).toContain('6.10.0');
      expect(qtVersion!.message).toContain('6.11.0');
    } finally {
      process.env.PATH = originalPath;
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  test('DR-14: executeDoctor --fix installs dependencies for the config project', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'qmlts-doctor-fix-'));
    const originalPath = process.env.PATH ?? '';

    try {
      const projectDir = join(tempDir, 'app');
      const binDir = join(tempDir, 'bin');
      mkdirSync(join(projectDir, 'src'), { recursive: true });
      mkdirSync(binDir, { recursive: true });
      writeFileSync(join(projectDir, 'src', 'main.ts'), 'export default 1;\n', 'utf-8');
      writeFileSync(
        join(projectDir, 'qmlts.config.ts'),
        `export default {
  entry: './src/main.ts',
  outDir: './dist',
  qt: {
    modules: ['QtQuick'],
  },
};
`,
        'utf-8',
      );

      if (process.platform === 'win32') {
        createFakeCommand(
          binDir,
          'npm',
          '@echo off\r\nif not exist "%CD%\\node_modules" mkdir "%CD%\\node_modules"\r\nexit /b 0\r\n',
        );
      } else {
        createFakeCommand(binDir, 'npm', '#!/bin/sh\nmkdir -p "$PWD/node_modules"\nexit 0\n');
      }

      process.env.PATH = `${binDir}${process.platform === 'win32' ? ';' : ':'}${originalPath}`;

      const result = await executeDoctor({
        config: join(projectDir, 'qmlts.config.ts'),
        fix: true,
      });
      const depsCheck = result.checks.find((c) => c.name === 'dependencies-resolved');

      expect(depsCheck).toBeDefined();
      expect(existsSync(join(projectDir, 'node_modules'))).toBe(true);
      expect(depsCheck!.status).toBe('pass');
    } finally {
      process.env.PATH = originalPath;
      rmSync(tempDir, { recursive: true, force: true });
    }
  }, 20_000);
});
