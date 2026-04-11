import type { DoctorCommandOptions, DoctorResult } from './build-types.js';
import { runDoctorChecks } from './doctor.js';

export async function executeDoctor(options: DoctorCommandOptions = {}): Promise<DoctorResult> {
  const result = await runDoctorChecks(options);

  if (options.verbose) {
    for (const check of result.checks) {
      const icon = check.status === 'pass' ? '✓' : check.status === 'warn' ? '⚠' : '✗';
      console.info(`[qmlts doctor] ${icon} ${check.name}: ${check.message}`);
    }
    console.info(`[qmlts doctor] ${result.allPassed ? 'All checks passed' : 'Some checks failed'}`);
  }

  return result;
}
