/**
 * CLI smoke tests for scripts/generate-dsl.ts
 * Verifies the CLI script works end-to-end with various flag combinations.
 */
import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const SCRIPT = join(import.meta.dir, '..', '..', 'scripts', 'generate-dsl.ts');
const PROJECT_ROOT = join(import.meta.dir, '..', '..');

let tempBase: string;

beforeAll(() => {
  tempBase = mkdtempSync(join(tmpdir(), 'qmlts-cli-smoke-'));
});

afterAll(() => {
  if (tempBase && existsSync(tempBase)) {
    try {
      rmSync(tempBase, { recursive: true, force: true });
    } catch {
      // best-effort cleanup
    }
  }
});

async function runCli(
  args: string[],
): Promise<{ exitCode: number; stdout: string; stderr: string }> {
  const proc = Bun.spawn(['bun', 'run', SCRIPT, ...args], {
    cwd: PROJECT_ROOT,
    stdout: 'pipe',
    stderr: 'pipe',
  });
  const exitCode = await proc.exited;
  const stdout = await new Response(proc.stdout).text();
  const stderr = await new Response(proc.stderr).text();
  return { exitCode, stdout, stderr };
}

describe('CLI Smoke Tests', () => {
  test('CLI-01: default (all modules) runs successfully', async () => {
    const outDir = join(tempBase, 'cli-01');
    const { exitCode, stdout } = await runCli([`--output-dir=${outDir}`]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Generation complete');
    expect(stdout).toContain('Modules:');
    expect(stdout).toContain('Types:');
    expect(existsSync(join(outDir, 'index.ts'))).toBe(true);
    expect(existsSync(join(outDir, 'QtQuick', 'Rectangle.ts'))).toBe(true);
    // Default now generates all modules
    const dirs = readdirSync(outDir, { withFileTypes: true }).filter((d) => d.isDirectory());
    expect(dirs.length).toBeGreaterThan(20);
  }, 60_000);

  test('CLI-02: --modules=QtQuick.Layouts generates only that module', async () => {
    const outDir = join(tempBase, 'cli-02');
    const { exitCode, stdout } = await runCli([
      `--output-dir=${outDir}`,
      '--modules=QtQuick.Layouts',
    ]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Generation complete');
    expect(existsSync(join(outDir, 'QtQuick.Layouts', 'index.ts'))).toBe(true);
    // Should NOT have QtQuick since only Layouts was requested
    expect(existsSync(join(outDir, 'QtQuick', 'Rectangle.ts'))).toBe(false);
  }, 30_000);

  test('CLI-03: default generates all Qt modules', async () => {
    const outDir = join(tempBase, 'cli-03');
    const { exitCode, stdout } = await runCli([`--output-dir=${outDir}`]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Generation complete');
    // Should include non-core modules like Qt3D, QtCharts, etc.
    const dirs = readdirSync(outDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    expect(dirs).toContain('QtQuick');
    expect(dirs).toContain('QtCore');
    expect(dirs.length).toBeGreaterThan(50);
  }, 60_000);

  test('CLI-04: output contains expected stats', async () => {
    const outDir = join(tempBase, 'cli-04');
    const { exitCode, stdout } = await runCli([`--output-dir=${outDir}`, '--modules=QtQuick']);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Creatables:');
    expect(stdout).toContain('Singletons:');
    expect(stdout).toContain('Files:');
    expect(stdout).toContain('Lines:');
  }, 30_000);

  test('CLI-05: multiple --modules comma-separated', async () => {
    const outDir = join(tempBase, 'cli-05');
    const { exitCode } = await runCli([`--output-dir=${outDir}`, '--modules=QtQuick,QtQml']);

    expect(exitCode).toBe(0);
    expect(existsSync(join(outDir, 'QtQuick', 'index.ts'))).toBe(true);
    expect(existsSync(join(outDir, 'QtQml', 'index.ts'))).toBe(true);
  }, 30_000);

  test('CLI-06: --format runs Biome formatting', async () => {
    const outDir = join(tempBase, 'cli-06');
    const { exitCode, stdout } = await runCli([
      `--output-dir=${outDir}`,
      '--modules=QtQml',
      '--format',
    ]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Formatting');
  }, 30_000);

  test('CLI-07: --validate runs TypeScript validation', async () => {
    const outDir = join(tempBase, 'cli-07');
    const { exitCode, stdout } = await runCli([
      `--output-dir=${outDir}`,
      '--modules=QtQml',
      '--validate',
    ]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Validat');
  }, 60_000);

  test('CLI-08: --format --validate combined', async () => {
    const outDir = join(tempBase, 'cli-08');
    const { exitCode, stdout } = await runCli([
      `--output-dir=${outDir}`,
      '--modules=QtQml',
      '--format',
      '--validate',
    ]);

    expect(exitCode).toBe(0);
    expect(stdout).toContain('Formatting');
    expect(stdout).toContain('Validat');
  }, 60_000);
});
