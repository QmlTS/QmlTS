import type { Diagnostic } from '../compiler/diagnostics.js';
import type { BuildPhase } from './build-types.js';

export class BuildError extends Error {
  constructor(
    readonly phase: BuildPhase,
    readonly diagnostics: readonly Diagnostic[],
    message: string,
  ) {
    super(message);
    this.name = 'BuildError';
  }
}
