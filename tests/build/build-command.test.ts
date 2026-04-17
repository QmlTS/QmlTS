import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { executeBuild } from '../../src/build/build-command.js';

// ─── Paths ──────────────────────────────────────────────────

const FIXTURES_DIR = resolve(__dirname, 'fixtures', 'sample-project');
const TMP_DIR = resolve(__dirname, '.tmp-build-command');

// ─── Lifecycle ──────────────────────────────────────────────

beforeEach(() => {
  if (existsSync(TMP_DIR)) {
    rmSync(TMP_DIR, { recursive: true, force: true });
  }
  mkdirSync(TMP_DIR, { recursive: true });
});

afterEach(() => {
  if (existsSync(TMP_DIR)) {
    rmSync(TMP_DIR, { recursive: true, force: true });
  }
});

// ─── Helpers ────────────────────────────────────────────────

let configCounter = 0;

function writeConfig(outDir: string, extraFields = ''): string {
  configCounter++;
  const configPath = join(TMP_DIR, `qmlts.config.${configCounter}.ts`);
  const defineConfigPath = resolve(__dirname, '../../src/build/define-config.ts').replace(
    /\\/g,
    '/',
  );
  const content = `
import { defineConfig } from '${defineConfigPath}';
export default defineConfig({
  entry: '${join(FIXTURES_DIR, 'src', 'CounterView.ts').replace(/\\/g, '/')}',
  outDir: '${outDir.replace(/\\/g, '/')}',
${extraFields}
  qt: {
    targetVersion: '6.11.0',
    modules: ['QtQuick'],
  },
  build: {
    compilerOptions: {
      diagnostics: { suppress: ['QMLTS-A011'] },
    },
  },
});
`;
  writeFileSync(configPath, content, 'utf-8');
  return configPath;
}

// ─── Tests ──────────────────────────────────────────────────

describe('executeBuild', () => {
  test('BP-34: executeBuild returns success with valid config', async () => {
    const outDir = join(TMP_DIR, 'dist');
    const configPath = writeConfig(outDir);

    const result = await executeBuild({ config: configPath });

    expect(result.success).toBe(true);
    expect(result.durationMs).toBeGreaterThan(0);
    expect(result.outputDir).toBe(resolve(outDir));
  });

  test('BP-35: executeBuild produces diagnostics array', async () => {
    const outDir = join(TMP_DIR, 'dist');
    const configPath = writeConfig(outDir);

    const result = await executeBuild({ config: configPath });

    expect(Array.isArray(result.diagnostics)).toBe(true);
  });

  test('BP-36: dryRun option prevents disk writes', async () => {
    const outDir = join(TMP_DIR, 'dist-dry');
    const configPath = writeConfig(outDir);

    const result = await executeBuild({ config: configPath, dryRun: true });

    expect(result.success).toBe(true);
    expect(existsSync(resolve(outDir))).toBe(false);
  });

  test('BP-37: force option is forwarded to pipeline', async () => {
    const outDir = join(TMP_DIR, 'dist-force');
    const configPath = writeConfig(outDir);

    // Create a cache dir to prove force clears it
    const configDir = join(TMP_DIR);
    const cacheDir = join(configDir, '.qmlts');
    mkdirSync(cacheDir, { recursive: true });
    writeFileSync(join(cacheDir, 'test.json'), '{}', 'utf-8');

    const result = await executeBuild({ config: configPath, force: true });

    expect(result.success).toBe(true);
    expect(existsSync(cacheDir)).toBe(false);
  });

  test('BP-38: stats are available from build result', async () => {
    const outDir = join(TMP_DIR, 'dist-stats');
    const configPath = writeConfig(outDir);

    const result = await executeBuild({ config: configPath });

    expect(result.success).toBe(true);
    expect(result.stats).toBeDefined();
    if (result.stats) {
      expect(typeof result.stats.durationMs).toBe('number');
    }
  });

  test('BP-39: invalid config path throws', async () => {
    const badPath = join(TMP_DIR, 'nonexistent.config.ts');

    try {
      await executeBuild({ config: badPath });
      expect(true).toBe(false); // should not reach
    } catch (err) {
      expect(err).toBeDefined();
      expect((err as Error).name).toBe('ConfigError');
    }
  });

  test('BP-40: json option does not affect result structure', async () => {
    const outDir = join(TMP_DIR, 'dist-json');
    const configPath = writeConfig(outDir);

    const result = await executeBuild({ config: configPath, json: true });

    expect(result.success).toBe(true);
    // Result should be JSON-serializable
    const serialized = JSON.stringify(result);
    const parsed = JSON.parse(serialized);
    expect(parsed.success).toBe(true);
    expect(parsed.outputDir).toBe(resolve(outDir));
  });

  test('BP-41: V2 rollout config reaches build and produces V2 entry shape', async () => {
    const outDir = join(TMP_DIR, 'dist-v2-config');
    const configPath = writeConfig(
      outDir,
      [
        "  runtime: 'v2',",
        '  v1Compat: true,',
        "  module: { prefix: 'MyApp', version: { major: 1, minor: 0 } },",
      ].join('\n'),
    );

    const result = await executeBuild({ config: configPath });

    expect(result.success).toBe(true);
    expect(result.outputDir).toBe(resolve(outDir));

    const entryContent = readFileSync(join(outDir, 'CounterView.ts'), 'utf-8');
    expect(entryContent).toContain('host.registerModule');
    expect(entryContent).not.toContain('host.registerViewModel');
  });
});
