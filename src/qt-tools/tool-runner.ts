import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { QtToolNotFoundError, QtToolTimeoutError } from './errors.js';
import type { QtInstallation, QtToolName, ToolResult, ToolRunnerOptions } from './types.js';

const IS_WINDOWS = process.platform === 'win32';

export function getToolBinaryPath(installation: QtInstallation, tool: QtToolName): string {
  const ext = IS_WINDOWS ? '.exe' : '';
  return join(installation.binDir, `${tool}${ext}`);
}

export async function runTool(
  installation: QtInstallation,
  tool: QtToolName,
  args: readonly string[],
  options?: ToolRunnerOptions,
): Promise<ToolResult> {
  const binPath = getToolBinaryPath(installation, tool);
  if (!existsSync(binPath)) {
    throw new QtToolNotFoundError(tool, [binPath]);
  }

  const command = [binPath, ...args].join(' ');
  const timeout = options?.timeout ?? 30_000;
  const start = performance.now();

  const proc = Bun.spawn([binPath, ...args], {
    cwd: options?.cwd,
    env: options?.env ? { ...process.env, ...options.env } : undefined,
    stdin: options?.stdin ? 'pipe' : 'ignore',
    stdout: 'pipe',
    stderr: 'pipe',
  });

  if (options?.stdin && proc.stdin) {
    proc.stdin.write(options.stdin);
    proc.stdin.end();
  }

  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    proc.kill();
  }, timeout);

  const exitCode = await proc.exited;
  clearTimeout(timer);

  if (timedOut) {
    throw new QtToolTimeoutError(tool, timeout, command);
  }

  const stdout = await new Response(proc.stdout).text();
  const stderr = await new Response(proc.stderr).text();
  const durationMs = Math.round(performance.now() - start);

  return { exitCode, stdout, stderr, durationMs, command };
}
