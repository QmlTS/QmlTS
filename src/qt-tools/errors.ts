import type { QtToolName } from './types.js';

export class QtToolError extends Error {
  constructor(
    readonly tool: QtToolName,
    readonly exitCode: number,
    readonly stderr: string,
    readonly command: string,
  ) {
    super(`${tool} failed (exit ${exitCode}): ${stderr.slice(0, 200)}`);
    this.name = 'QtToolError';
  }
}

export class QtToolNotFoundError extends Error {
  constructor(
    readonly tool: QtToolName,
    readonly searchedPaths: readonly string[],
  ) {
    super(`Qt tool '${tool}' not found. Searched: ${searchedPaths.join(', ')}`);
    this.name = 'QtToolNotFoundError';
  }
}

export class QtInstallationNotFoundError extends Error {
  constructor(readonly searchedPaths: readonly string[]) {
    super(`Qt installation not found. Searched: ${searchedPaths.join(', ')}`);
    this.name = 'QtInstallationNotFoundError';
  }
}

export class QtToolTimeoutError extends Error {
  constructor(
    readonly tool: QtToolName,
    readonly timeoutMs: number,
    readonly command: string,
  ) {
    super(`${tool} timed out after ${timeoutMs}ms: ${command}`);
    this.name = 'QtToolTimeoutError';
  }
}
