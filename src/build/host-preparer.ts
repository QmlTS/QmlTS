import { execFileSync } from 'node:child_process';
import { copyFileSync, cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
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

const MODULE_DIR = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(MODULE_DIR, '..', '..');
const NATIVE_TEMPLATE_DIR = join(REPO_ROOT, 'native');

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

function cargoSharedLibraryName(platform: PlatformTarget): string {
  switch (platform) {
    case 'win32-x64':
      return 'qmlts_host.dll';
    case 'linux-x64':
      return 'libqmlts_host.so';
    case 'darwin-x64':
    case 'darwin-arm64':
      return 'libqmlts_host.dylib';
  }
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
  let searchDir = configDir;

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
  const { schemasDir, hostLibTarget, hostConfig, outDir, dryRun, platform } = options;

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

  const generatedWorkspaceDir = join(outDir, '.host-generated');
  const generatedCrateDir = join(generatedWorkspaceDir, 'crates', 'qmlts-host-generated');

  if (dryRun) {
    diagnostics.push({
      severity: 'info',
      code: 'QMLTS-G002',
      message:
        `[dry-run] Would scaffold a temporary native workspace, generate ${schemas.length} ` +
        'bridge crates, and build qmlts-host with cargo',
    });
    return {
      result: { mode: 'cargo-build', hostLibPath: hostLibTarget, bridgeGenerated: true },
      diagnostics,
    };
  }

  scaffoldHostWorkspace(generatedWorkspaceDir);
  generator.generate(schemas, generatedCrateDir);

  if (hostConfig.cargo.args.includes('--dry-run')) {
    diagnostics.push({
      severity: 'info',
      code: 'QMLTS-G002',
      message: '[cargo dry-run] Generated native workspace without invoking cargo',
    });
    return {
      result: { mode: 'cargo-build', hostLibPath: hostLibTarget, bridgeGenerated: true },
      diagnostics,
    };
  }

  const cargoResult = invokeCargoBuild(hostConfig, generatedWorkspaceDir, hostLibTarget, platform);
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

function scaffoldHostWorkspace(workspaceDir: string): void {
  const workspaceManifest = join(NATIVE_TEMPLATE_DIR, 'Cargo.toml');
  const hostCrateDir = join(NATIVE_TEMPLATE_DIR, 'crates', 'qmlts-host');

  if (!existsSync(workspaceManifest) || !existsSync(hostCrateDir)) {
    throw new Error(`Native host template not found under ${NATIVE_TEMPLATE_DIR}`);
  }

  mkdirSync(join(workspaceDir, 'crates'), { recursive: true });
  copyFileSync(workspaceManifest, join(workspaceDir, 'Cargo.toml'));
  cpSync(hostCrateDir, join(workspaceDir, 'crates', 'qmlts-host'), {
    recursive: true,
  });
}

function invokeCargoBuild(
  hostConfig: ResolvedHostConfig,
  workspaceDir: string,
  hostLibTarget: string,
  platform: PlatformTarget,
): CargoResult {
  const diagnostics: Diagnostic[] = [];
  const start = performance.now();

  const args = ['build', '-p', 'qmlts-host', '--features', 'napi'];

  if (hostConfig.cargo.profile === 'release') {
    args.push('--release');
  }

  if (hostConfig.cargo.target) {
    args.push('--target', hostConfig.cargo.target);
  }

  args.push(...hostConfig.cargo.args);
  const cargoTargetDir = join(workspaceDir, 'target');

  try {
    execFileSync('cargo', args, {
      cwd: workspaceDir,
      env: {
        ...process.env,
        CARGO_TARGET_DIR: cargoTargetDir,
      },
      stdio: 'pipe',
      timeout: 600_000,
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

  const builtHostLib = resolveCargoArtifactPath(workspaceDir, hostConfig, platform);
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
  workspaceDir: string,
  hostConfig: ResolvedHostConfig,
  platform: PlatformTarget,
): string {
  const targetDir = join(workspaceDir, 'target');
  const targetRoot = hostConfig.cargo.target ? join(targetDir, hostConfig.cargo.target) : targetDir;
  const profileDir = hostConfig.cargo.profile === 'release' ? 'release' : 'debug';
  return join(targetRoot, profileDir, cargoSharedLibraryName(platform));
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
