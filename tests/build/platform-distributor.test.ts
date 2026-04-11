import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { ProductLayout } from '../../src/build/build-types.js';
import type { ResolvedDistributeConfig } from '../../src/build/config-types.js';
import { createPlatformDistributor } from '../../src/build/platform-distributor.js';
import { currentPlatform } from '../../src/build/product-layout.js';

describe('PlatformDistributor', () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = mkdtempSync(join(tmpdir(), 'qmlts-dist-'));
  });

  afterEach(() => {
    if (existsSync(tempDir)) {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  function makeMockLayout(): ProductLayout {
    const rootDir = join(tempDir, 'build-output');
    const layout: ProductLayout = {
      rootDir,
      entryFile: join(rootDir, 'main.ts'),
      qmlDir: join(rootDir, 'qml'),
      schemasDir: join(rootDir, 'schemas'),
      assetsDir: join(rootDir, 'assets'),
      hostLib: join(rootDir, 'qmlts_host.node'),
      manifest: join(rootDir, 'manifest.json'),
      eventBindings: join(rootDir, 'event-bindings.json'),
    };

    mkdirSync(rootDir, { recursive: true });
    mkdirSync(layout.qmlDir, { recursive: true });
    mkdirSync(layout.schemasDir, { recursive: true });
    mkdirSync(layout.assetsDir, { recursive: true });
    writeFileSync(layout.entryFile, 'console.log("app");', 'utf-8');
    writeFileSync(join(layout.qmlDir, 'App.qml'), 'Item {}', 'utf-8');
    writeFileSync(
      join(layout.schemasDir, 'Counter.schema.json'),
      '{"className":"Counter"}',
      'utf-8',
    );
    writeFileSync(layout.manifest, '{"version":"0.1.0"}', 'utf-8');
    writeFileSync(layout.eventBindings, '{"commands":[],"effects":[]}', 'utf-8');

    return layout;
  }

  test('PD-01: package creates distribution output', async () => {
    const layout = makeMockLayout();
    const config: ResolvedDistributeConfig = {
      targets: [],
      bundleQt: false,
    };

    const distributor = createPlatformDistributor();
    const result = await distributor.package(layout, config);

    expect(existsSync(result.outputPath)).toBe(true);
    expect(result.target).toBe(currentPlatform());
    expect(result.includes.length).toBeGreaterThan(0);
  });

  test('PD-02: distribution contains build artifacts', async () => {
    const layout = makeMockLayout();
    const config: ResolvedDistributeConfig = {
      targets: [],
      bundleQt: false,
    };

    const distributor = createPlatformDistributor();
    const result = await distributor.package(layout, config);

    expect(existsSync(join(result.outputPath, 'manifest.json'))).toBe(true);
    expect(existsSync(join(result.outputPath, 'event-bindings.json'))).toBe(true);
    expect(existsSync(join(result.outputPath, 'main.ts'))).toBe(true);
  });

  test('PD-03: size reflects total distribution size', async () => {
    const layout = makeMockLayout();
    const config: ResolvedDistributeConfig = {
      targets: [],
      bundleQt: false,
    };

    const distributor = createPlatformDistributor();
    const result = await distributor.package(layout, config);

    expect(result.size).toBeGreaterThan(0);
    expect(typeof result.size).toBe('number');
  });

  test('PD-04: custom icon is copied to distribution', async () => {
    const layout = makeMockLayout();
    const iconPath = join(tempDir, 'app.ico');
    writeFileSync(iconPath, 'fake-icon-data', 'utf-8');

    const config: ResolvedDistributeConfig = {
      targets: [],
      bundleQt: false,
      icon: iconPath,
    };

    const distributor = createPlatformDistributor();
    const result = await distributor.package(layout, config);

    expect(existsSync(join(result.outputPath, 'app.ico'))).toBe(true);
    expect(result.includes.some((f) => f.includes('app.ico'))).toBe(true);
  });

  test('PD-05: target platform from config is used', async () => {
    const layout = makeMockLayout();
    const config: ResolvedDistributeConfig = {
      targets: ['linux-x64'],
      bundleQt: false,
    };

    const distributor = createPlatformDistributor();
    const result = await distributor.package(layout, config);

    expect(result.target).toBe('linux-x64');
  });

  test('PD-06: bundleQt with no Qt dir succeeds without Qt files', async () => {
    const layout = makeMockLayout();
    const config: ResolvedDistributeConfig = {
      targets: [],
      bundleQt: true,
    };

    const distributor = createPlatformDistributor(undefined);
    const result = await distributor.package(layout, config);

    expect(result.size).toBeGreaterThan(0);
  });

  test('PD-06a: bundleQt copies Qt runtime files for the active platform', async () => {
    const layout = makeMockLayout();
    const qtDir = join(tempDir, 'Qt');
    const runtimeDir = process.platform === 'win32' ? join(qtDir, 'bin') : join(qtDir, 'lib');
    mkdirSync(runtimeDir, { recursive: true });

    let runtimeSource: string;
    let expectedOutput: string;

    if (process.platform === 'win32') {
      runtimeSource = join(runtimeDir, 'Qt6Core.dll');
      expectedOutput = join('Qt6', 'Qt6Core.dll');
      writeFileSync(runtimeSource, 'fake-dll', 'utf-8');
    } else if (process.platform === 'darwin') {
      runtimeSource = join(runtimeDir, 'QtCore.framework');
      mkdirSync(runtimeSource, { recursive: true });
      writeFileSync(join(runtimeSource, 'QtCore'), 'fake-dylib', 'utf-8');
      expectedOutput = join('Qt6', 'QtCore.framework', 'QtCore');
    } else {
      runtimeSource = join(runtimeDir, 'libQt6Core.so.6');
      expectedOutput = join('Qt6', 'libQt6Core.so.6');
      writeFileSync(runtimeSource, 'fake-so', 'utf-8');
    }

    const config: ResolvedDistributeConfig = {
      targets: [currentPlatform()],
      bundleQt: true,
    };

    const distributor = createPlatformDistributor(qtDir);
    const result = await distributor.package(layout, config);

    expect(existsSync(join(result.outputPath, expectedOutput))).toBe(true);
    expect(result.includes.some((f) => f.endsWith(expectedOutput.replace(/\\/g, '/')))).toBe(true);
  });

  test('PD-07: includes paths use forward slashes', async () => {
    const layout = makeMockLayout();
    const config: ResolvedDistributeConfig = {
      targets: [],
      bundleQt: false,
    };

    const distributor = createPlatformDistributor();
    const result = await distributor.package(layout, config);

    for (const path of result.includes) {
      expect(path).not.toContain('\\');
    }
  });

  test('PD-08: packaging clears stale files from previous output', async () => {
    const layout = makeMockLayout();
    const config: ResolvedDistributeConfig = {
      targets: ['linux-x64'],
      bundleQt: false,
    };

    const staleDir = join(tempDir, 'dist-linux-x64');
    mkdirSync(staleDir, { recursive: true });
    writeFileSync(join(staleDir, 'stale.txt'), 'old', 'utf-8');

    const distributor = createPlatformDistributor();
    const result = await distributor.package(layout, config);

    expect(existsSync(join(result.outputPath, 'stale.txt'))).toBe(false);
  });
});
