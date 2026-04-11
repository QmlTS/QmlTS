import { execFileSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import type { Diagnostic } from '../compiler/diagnostics.js';
import type { HostPrepMode, HostPrepResult, SchemaFile } from './build-types.js';
import type { PlatformTarget, ResolvedHostConfig } from './config-types.js';
import { createRustBridgeGenerator, validateSchemas } from './rust-bridge-generator.js';

// ─── Types ──────────────────────────────────────────────────

export interface HostPreparer {
  prepare(options: HostPrepOptions): HostPrepOutput;
}

export interface HostPrepOptions {
  readonly hostConfig: ResolvedHostConfig;
  readonly schemasDir: string;
  readonly schemas?: readonly SchemaFile[];
  readonly hostLibTarget: string;
  readonly platform: PlatformTarget;
  readonly configDir: string;
  readonly outDir: string;
  readonly dryRun?: boolean;
}

export interface HostPrepOutput {
  readonly result: HostPrepResult;
  readonly diagnostics: readonly Diagnostic[];
}

// ─── Platform → prebuilt binding name mapping ───────────────

const PLATFORM_BINDING_NAMES: ReadonlyMap<PlatformTarget, string> = new Map([
  ['win32-x64', 'qmlts-host.win32-x64-msvc.node'],
  ['linux-x64', 'qmlts-host.linux-x64-gnu.node'],
  ['darwin-x64', 'qmlts-host.darwin-x64.node'],
  ['darwin-arm64', 'qmlts-host.darwin-arm64.node'],
]);

function prebuiltBindingName(platform: PlatformTarget): string {
  return PLATFORM_BINDING_NAMES.get(platform) ?? `qmlts-host.${platform}.node`;
}

// ─── Resolve host preparation mode ──────────────────────────

function resolveMode(config: ResolvedHostConfig): HostPrepMode {
  if (config.customPath) {
    return 'custom-path';
  }
  if (config.prebuilt) {
    return 'prebuilt';
  }
  return 'cargo-build';
}

// ─── Custom-path flow ───────────────────────────────────────

function prepareCustomPath(
  customPath: string,
  hostLibTarget: string,
  dryRun: boolean,
): HostPrepOutput {
  const diagnostics: Diagnostic[] = [];
  const resolvedPath = resolve(customPath);

  if (!existsSync(resolvedPath)) {
    diagnostics.push({
      severity: 'error',
      code: 'QMLTS-G001',
      message: `Custom host library not found: ${resolvedPath}`,
    });
    return {
      result: { mode: 'custom-path', hostLibPath: hostLibTarget, bridgeGenerated: false },
      diagnostics,
    };
  }

  if (!dryRun) {
    mkdirSync(dirname(hostLibTarget), { recursive: true });
    copyFileSync(resolvedPath, hostLibTarget);
  }

  return {
    result: { mode: 'custom-path', hostLibPath: hostLibTarget, bridgeGenerated: false },
    diagnostics,
  };
}

// ─── Prebuilt flow ──────────────────────────────────────────

function findPrebuiltHostPackage(configDir: string): string | undefined {
  // Search for @qmlts/host in node_modules, walking up from configDir
  let searchDir = configDir;

  // Walk up at most 10 levels to avoid infinite loop
  for (let i = 0; i < 10; i++) {
    const candidate = join(searchDir, 'node_modules', '@qmlts', 'host');
    if (existsSync(candidate)) {
      return candidate;
    }
    const parent = dirname(searchDir);
    if (parent === searchDir) {
      break;
    }
    searchDir = parent;
  }

  return undefined;
}

function preparePrebuilt(
  platform: PlatformTarget,
  hostLibTarget: string,
  configDir: string,
  dryRun: boolean,
): HostPrepOutput {
  const diagnostics: Diagnostic[] = [];
  const packageDir = findPrebuiltHostPackage(configDir);

  if (!packageDir) {
    diagnostics.push({
      severity: 'warning',
      code: 'QMLTS-G002',
      message:
        'Prebuilt host package @qmlts/host not found in node_modules. ' +
        'Install it with: npm install @qmlts/host',
    });
    return {
      result: { mode: 'prebuilt', hostLibPath: hostLibTarget, bridgeGenerated: false },
      diagnostics,
    };
  }

  const bindingName = prebuiltBindingName(platform);
  const bindingPath = join(packageDir, bindingName);

  if (!existsSync(bindingPath)) {
    // Also try the build directories
    const fallbacks = [
      join(packageDir, 'build', 'Release', 'qmlts-host.node'),
      join(packageDir, 'build', 'Debug', 'qmlts-host.node'),
    ];

    for (const fallback of fallbacks) {
      if (existsSync(fallback)) {
        if (!dryRun) {
          mkdirSync(dirname(hostLibTarget), { recursive: true });
          copyFileSync(fallback, hostLibTarget);
        }
        diagnostics.push({
          severity: 'info',
          code: 'QMLTS-G002',
          message: `Using fallback host binary from ${fallback}`,
        });
        return {
          result: { mode: 'prebuilt', hostLibPath: hostLibTarget, bridgeGenerated: false },
          diagnostics,
        };
      }
    }

    diagnostics.push({
      severity: 'warning',
      code: 'QMLTS-G002',
      message:
        `Prebuilt host binary not found for platform ${platform}: ${bindingPath}. ` +
        'Ensure the correct platform-specific package is installed.',
    });
    return {
      result: { mode: 'prebuilt', hostLibPath: hostLibTarget, bridgeGenerated: false },
      diagnostics,
    };
  }

  if (!dryRun) {
    mkdirSync(dirname(hostLibTarget), { recursive: true });
    copyFileSync(bindingPath, hostLibTarget);
  }

  return {
    result: { mode: 'prebuilt', hostLibPath: hostLibTarget, bridgeGenerated: false },
    diagnostics,
  };
}

// ─── Cargo build flow ───────────────────────────────────────

function prepareCargoBuild(options: HostPrepOptions): HostPrepOutput {
  const diagnostics: Diagnostic[] = [];
  const { schemasDir, hostLibTarget, hostConfig, outDir, dryRun } = options;

  // 1. Discover and validate schemas
  const generator = createRustBridgeGenerator();
  const schemas = options.schemas ? [...options.schemas] : generator.discoverSchemas(schemasDir);

  if (schemas.length === 0) {
    diagnostics.push({
      severity: 'warning',
      code: 'QMLTS-G002',
      message:
        'No ViewModel schemas found for bridge generation. The host will have no ViewModel bridges.',
    });
  }

  const schemaDiagnostics = validateSchemas(schemas);
  diagnostics.push(...schemaDiagnostics);

  if (schemaDiagnostics.some((d) => d.severity === 'error')) {
    return {
      result: { mode: 'cargo-build', hostLibPath: hostLibTarget, bridgeGenerated: false },
      diagnostics,
    };
  }

  // 2. Generate bridge files
  const generatedDir = join(outDir, '.host-generated');
  if (dryRun) {
    diagnostics.push({
      severity: 'info',
      code: 'QMLTS-G002',
      message: `[dry-run] Would generate ${schemas.length} bridge files and invoke cargo build`,
    });
    return {
      result: { mode: 'cargo-build', hostLibPath: hostLibTarget, bridgeGenerated: true },
      diagnostics,
    };
  }

  generator.generate(schemas, generatedDir);

  // 3. Invoke cargo build
  const cargoResult = invokeCargoBuild(hostConfig, generatedDir, hostLibTarget);
  diagnostics.push(...cargoResult.diagnostics);

  return {
    result: {
      mode: 'cargo-build',
      hostLibPath: hostLibTarget,
      bridgeGenerated: true,
      cargoBuildMs: cargoResult.durationMs,
    },
    diagnostics,
  };
}

interface CargoResult {
  readonly diagnostics: readonly Diagnostic[];
  readonly durationMs: number;
}

function invokeCargoBuild(
  hostConfig: ResolvedHostConfig,
  generatedDir: string,
  hostLibTarget: string,
): CargoResult {
  const diagnostics: Diagnostic[] = [];
  const start = performance.now();

  const args = ['build'];

  if (hostConfig.cargo.profile === 'release') {
    args.push('--release');
  }

  if (hostConfig.cargo.target) {
    args.push('--target', hostConfig.cargo.target);
  }

  args.push(...hostConfig.cargo.args);
  const cargoTargetDir = join(generatedDir, 'target');

  try {
    execFileSync('cargo', args, {
      cwd: generatedDir,
      env: {
        ...process.env,
        CARGO_TARGET_DIR: cargoTargetDir,
      },
      stdio: 'pipe',
      timeout: 600_000, // 10 minutes max
      encoding: 'utf-8',
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    diagnostics.push({
      severity: 'error',
      code: 'QMLTS-G001',
      message: `Cargo build failed: ${msg.slice(0, 500)}`,
    });
    return { diagnostics, durationMs: performance.now() - start };
  }

  const builtHostLib = resolveCargoArtifactPath(generatedDir, hostConfig);
  if (!existsSync(builtHostLib)) {
    diagnostics.push({
      severity: 'error',
      code: 'QMLTS-G001',
      message: `Cargo build completed but generated addon was not found: ${builtHostLib}`,
    });
    return { diagnostics, durationMs: performance.now() - start };
  }

  mkdirSync(dirname(hostLibTarget), { recursive: true });
  copyFileSync(builtHostLib, hostLibTarget);

  // Check if the output binary exists
  if (!existsSync(hostLibTarget)) {
    diagnostics.push({
      severity: 'error',
      code: 'QMLTS-G001',
      message: `Cargo build completed but host library not found at expected location: ${hostLibTarget}`,
    });
  }

  return { diagnostics, durationMs: performance.now() - start };
}

function resolveCargoArtifactPath(
  generatedDir: string,
  hostConfig: ResolvedHostConfig,
): string {
  const targetDir = join(generatedDir, 'target');
  const targetRoot = hostConfig.cargo.target ? join(targetDir, hostConfig.cargo.target) : targetDir;
  const profileDir = hostConfig.cargo.profile === 'release' ? 'release' : 'debug';
  return join(targetRoot, profileDir, 'qmlts-host.node');
}

// ─── Factory ────────────────────────────────────────────────

export function createHostPreparer(): HostPreparer {
  return {
    prepare(options: HostPrepOptions): HostPrepOutput {
      const mode = resolveMode(options.hostConfig);

      switch (mode) {
        case 'custom-path':
          return prepareCustomPath(
            options.hostConfig.customPath!,
            options.hostLibTarget,
            options.dryRun ?? false,
          );
        case 'prebuilt':
          return preparePrebuilt(
            options.platform,
            options.hostLibTarget,
            options.configDir,
            options.dryRun ?? false,
          );
        case 'cargo-build':
          return prepareCargoBuild(options);
        default: {
          const _exhaustive: never = mode;
          throw new Error(`Unknown host prep mode: ${_exhaustive}`);
        }
      }
    },
  };
}
