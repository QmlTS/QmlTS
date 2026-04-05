import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import type { GeneratorResult } from './types.js';

/** Locate the project's runtime source directory (src/dsl/runtime). */
function findRuntimeDir(): string {
  // __dirname → src/dsl/generator, runtime is a sibling
  return resolve(import.meta.dir, '..', 'runtime');
}

/** Locate the project's AST source directory (src/ast). */
function findAstDir(): string {
  return resolve(import.meta.dir, '..', '..', 'ast');
}

export interface WriteResult {
  readonly filesWritten: number;
  readonly bytesWritten: number;
}

export interface FormatResult {
  readonly success: boolean;
  readonly errors: string[];
}

export interface ValidateResult {
  readonly success: boolean;
  readonly errors: string[];
}

/** Write generated files to disk. Cleans output directory first. */
export function writeGeneratedFiles(result: GeneratorResult, outputDir: string): WriteResult {
  try {
    rmSync(outputDir, { recursive: true, force: true });
  } catch {
    // ignore
  }

  let bytesWritten = 0;
  for (const file of result.files) {
    const filePath = join(outputDir, file.relativePath);
    const dir = dirname(filePath);
    mkdirSync(dir, { recursive: true });
    writeFileSync(filePath, file.content, 'utf-8');
    bytesWritten += Buffer.byteLength(file.content, 'utf-8');
  }

  return {
    filesWritten: result.files.length,
    bytesWritten,
  };
}

/** Format generated files using biome. */
export async function formatGeneratedFiles(outputDir: string): Promise<FormatResult> {
  try {
    const proc = Bun.spawn(['bunx', 'biome', 'check', '--write', '--unsafe', outputDir], {
      stdout: 'pipe',
      stderr: 'pipe',
    });
    const exitCode = await proc.exited;
    if (exitCode === 0) {
      return { success: true, errors: [] };
    }
    const stderr = await new Response(proc.stderr).text();
    return { success: false, errors: [stderr] };
  } catch (error) {
    return {
      success: false,
      errors: [error instanceof Error ? error.message : 'biome format failed'],
    };
  }
}

/** Validate generated files via TypeScript typecheck against outputDir. */
export async function validateGeneratedFiles(outputDir: string): Promise<ValidateResult> {
  try {
    const absOutputDir = resolve(outputDir);

    // Generated files import from ../../runtime/index.js relative to
    // <outputDir>/ModuleName/File.ts → the runtime must exist at
    // <parent(parent(outputDir))>/runtime/ for tsc to resolve it.
    // If the output dir is not the project default, copy runtime + ast there.
    const runtimeTarget = resolve(absOutputDir, '..', 'runtime');
    const astTarget = resolve(absOutputDir, '..', '..', 'ast');
    let copiedRuntime = false;

    if (!existsSync(runtimeTarget)) {
      const runtimeSrc = findRuntimeDir();
      if (existsSync(runtimeSrc)) {
        mkdirSync(dirname(runtimeTarget), { recursive: true });
        cpSync(runtimeSrc, runtimeTarget, { recursive: true });
        copiedRuntime = true;
      }
    }
    if (!existsSync(astTarget)) {
      const astSrc = findAstDir();
      if (existsSync(astSrc)) {
        mkdirSync(dirname(astTarget), { recursive: true });
        cpSync(astSrc, astTarget, { recursive: true });
        copiedRuntime = true;
      }
    }

    const parentDir = dirname(absOutputDir);
    const tsconfigPath = join(parentDir, 'tsconfig.validate.json');
    const includePattern = join(relative(parentDir, absOutputDir), '**', '*.ts').replace(
      /\\/g,
      '/',
    );

    const tsconfig = {
      compilerOptions: {
        target: 'ESNext',
        module: 'ESNext',
        moduleResolution: 'bundler',
        strict: true,
        noEmit: true,
        skipLibCheck: true,
        noUnusedLocals: false,
        noUnusedParameters: false,
      },
      include: [includePattern],
    };

    writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));

    try {
      const proc = Bun.spawn(['bunx', 'tsc', '--noEmit', '--project', tsconfigPath], {
        cwd: parentDir,
        stdout: 'pipe',
        stderr: 'pipe',
      });
      const exitCode = await proc.exited;
      if (exitCode === 0) {
        return { success: true, errors: [] };
      }
      const stdout = await new Response(proc.stdout).text();
      const stderr = await new Response(proc.stderr).text();
      return { success: false, errors: [stdout, stderr].filter(Boolean) };
    } finally {
      try {
        rmSync(tsconfigPath, { force: true });
      } catch {
        // cleanup is best-effort
      }
      if (copiedRuntime) {
        try {
          rmSync(runtimeTarget, { recursive: true, force: true });
          rmSync(astTarget, { recursive: true, force: true });
        } catch {
          // cleanup is best-effort
        }
      }
    }
  } catch (error) {
    return {
      success: false,
      errors: [error instanceof Error ? error.message : 'tsc validation failed'],
    };
  }
}
