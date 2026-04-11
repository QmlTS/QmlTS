import { afterEach, beforeEach, describe, expect, test } from 'bun:test';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import type { ResolvedHostConfig } from '../../src/build/config-types.js';
import type { HostPrepOptions } from '../../src/build/host-preparer.js';
import { createHostPreparer } from '../../src/build/host-preparer.js';

// ─── Paths ──────────────────────────────────────────────────

const TMP_DIR = resolve(__dirname, '.tmp-host-preparer');

// ─── Helpers ────────────────────────────────────────────────

function makeHostConfig(overrides: Partial<ResolvedHostConfig> = {}): ResolvedHostConfig {
  return {
    prebuilt: true,
    cargo: { args: [], profile: 'dev' },
    ...overrides,
  };
}

function makeOptions(overrides: Partial<HostPrepOptions> = {}): HostPrepOptions {
  return {
    hostConfig: makeHostConfig(),
    schemasDir: join(TMP_DIR, 'schemas'),
    hostLibTarget: join(TMP_DIR, 'dist', 'qmlts_host.win32-x64.node'),
    platform: 'win32-x64',
    configDir: TMP_DIR,
    outDir: join(TMP_DIR, 'dist'),
    ...overrides,
  };
}

function writeFakeNodeBinary(path: string, content = 'FAKE_NODE_BINARY'): void {
  mkdirSync(join(path, '..').replace(/\\/g, '/').split('/').slice(0, -1).join('/'), {
    recursive: true,
  });
  const dir = path.substring(
    0,
    path.lastIndexOf('\\') !== -1 ? path.lastIndexOf('\\') : path.lastIndexOf('/'),
  );
  mkdirSync(dir, { recursive: true });
  writeFileSync(path, content);
}

function setupPrebuiltPackage(configDir: string): string {
  const packageDir = join(configDir, 'node_modules', '@qmlts', 'host');
  mkdirSync(packageDir, { recursive: true });
  const bindingPath = join(packageDir, 'qmlts-host.win32-x64-msvc.node');
  writeFileSync(bindingPath, 'PREBUILT_BINARY');
  return packageDir;
}

function writeSchemaFile(schemasDir: string, className: string, content?: object): void {
  mkdirSync(schemasDir, { recursive: true });
  const schema = content ?? {
    className,
    version: 1,
    states: [
      {
        name: 'count',
        qmlName: 'count',
        qmlType: 'int',
        memberId: 0,
        readonly: false,
        deferred: false,
        defaultValue: '0',
      },
    ],
    commands: [],
    effects: [],
    lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
  };
  writeFileSync(join(schemasDir, `${className}.schema.json`), JSON.stringify(schema, null, 2));
}

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

// ─── Mode Resolution ───────────────────────────────────────

describe('BP-77 host preparation mode resolution', () => {
  test('customPath takes priority over prebuilt', () => {
    const customPath = join(TMP_DIR, 'custom.node');
    writeFakeNodeBinary(customPath);

    const preparer = createHostPreparer();
    const output = preparer.prepare(
      makeOptions({
        hostConfig: makeHostConfig({ prebuilt: true, customPath }),
      }),
    );

    expect(output.result.mode).toBe('custom-path');
  });

  test('prebuilt mode when prebuilt=true and no customPath', () => {
    setupPrebuiltPackage(TMP_DIR);
    const preparer = createHostPreparer();
    const output = preparer.prepare(makeOptions());
    expect(output.result.mode).toBe('prebuilt');
  });

  test('cargo-build mode when prebuilt=false', () => {
    const preparer = createHostPreparer();
    const output = preparer.prepare(
      makeOptions({
        hostConfig: makeHostConfig({ prebuilt: false }),
        dryRun: true,
      }),
    );
    expect(output.result.mode).toBe('cargo-build');
  });
});

// ─── Custom Path Flow ───────────────────────────────────────

describe('BP-78 custom-path host preparation', () => {
  test('copies custom .node file to host lib target', () => {
    const customPath = join(TMP_DIR, 'my-host.node');
    writeFakeNodeBinary(customPath, 'CUSTOM_BINARY');

    const preparer = createHostPreparer();
    const output = preparer.prepare(
      makeOptions({
        hostConfig: makeHostConfig({ customPath }),
      }),
    );

    expect(output.result.mode).toBe('custom-path');
    expect(output.diagnostics.length).toBe(0);
    expect(existsSync(output.result.hostLibPath)).toBe(true);
    expect(readFileSync(output.result.hostLibPath, 'utf-8')).toBe('CUSTOM_BINARY');
  });

  test('reports error when custom path does not exist', () => {
    const customPath = join(TMP_DIR, 'nonexistent.node');

    const preparer = createHostPreparer();
    const output = preparer.prepare(
      makeOptions({
        hostConfig: makeHostConfig({ customPath }),
      }),
    );

    expect(output.result.mode).toBe('custom-path');
    expect(output.diagnostics.length).toBe(1);
    expect(output.diagnostics[0]!.severity).toBe('error');
    expect(output.diagnostics[0]!.message).toContain('Custom host library not found');
  });

  test('dry run does not copy file', () => {
    const customPath = join(TMP_DIR, 'my-host.node');
    writeFakeNodeBinary(customPath, 'CUSTOM_BINARY');

    const preparer = createHostPreparer();
    const output = preparer.prepare(
      makeOptions({
        hostConfig: makeHostConfig({ customPath }),
        dryRun: true,
      }),
    );

    expect(output.result.mode).toBe('custom-path');
    expect(output.diagnostics.length).toBe(0);
    expect(existsSync(output.result.hostLibPath)).toBe(false);
  });
});

// ─── Prebuilt Flow ──────────────────────────────────────────

describe('BP-79 prebuilt host preparation', () => {
  test('copies prebuilt .node from @qmlts/host package', () => {
    setupPrebuiltPackage(TMP_DIR);

    const preparer = createHostPreparer();
    const output = preparer.prepare(makeOptions());

    expect(output.result.mode).toBe('prebuilt');
    expect(output.diagnostics.filter((d) => d.severity === 'error').length).toBe(0);
    expect(existsSync(output.result.hostLibPath)).toBe(true);
    expect(readFileSync(output.result.hostLibPath, 'utf-8')).toBe('PREBUILT_BINARY');
  });

  test('reports warning when @qmlts/host package is not installed', () => {
    // No package installed in node_modules
    const preparer = createHostPreparer();
    const output = preparer.prepare(makeOptions());

    expect(output.result.mode).toBe('prebuilt');
    expect(output.diagnostics.some((d) => d.severity === 'warning')).toBe(true);
    expect(output.diagnostics[0]!.message).toContain('@qmlts/host not found');
  });

  test('reports warning when platform binary is not available', () => {
    const packageDir = join(TMP_DIR, 'node_modules', '@qmlts', 'host');
    mkdirSync(packageDir, { recursive: true });
    // Package exists but no .node file for this platform

    const preparer = createHostPreparer();
    const output = preparer.prepare(makeOptions());

    expect(output.result.mode).toBe('prebuilt');
    expect(output.diagnostics.some((d) => d.severity === 'warning')).toBe(true);
    expect(output.diagnostics[0]!.message).toContain('Prebuilt host binary not found');
  });

  test('uses fallback build directory when platform binary missing', () => {
    const packageDir = join(TMP_DIR, 'node_modules', '@qmlts', 'host');
    const buildDir = join(packageDir, 'build', 'Release');
    mkdirSync(buildDir, { recursive: true });
    writeFileSync(join(buildDir, 'qmlts-host.node'), 'FALLBACK_BINARY');

    const preparer = createHostPreparer();
    const output = preparer.prepare(makeOptions());

    expect(output.result.mode).toBe('prebuilt');
    expect(output.diagnostics.some((d) => d.severity === 'info')).toBe(true);
    expect(existsSync(output.result.hostLibPath)).toBe(true);
    expect(readFileSync(output.result.hostLibPath, 'utf-8')).toBe('FALLBACK_BINARY');
  });

  test('dry run does not copy prebuilt file', () => {
    setupPrebuiltPackage(TMP_DIR);

    const preparer = createHostPreparer();
    const output = preparer.prepare(makeOptions({ dryRun: true }));

    expect(output.result.mode).toBe('prebuilt');
    expect(existsSync(output.result.hostLibPath)).toBe(false);
  });

  test('supports linux platform binding name', () => {
    const packageDir = join(TMP_DIR, 'node_modules', '@qmlts', 'host');
    mkdirSync(packageDir, { recursive: true });
    writeFileSync(join(packageDir, 'qmlts-host.linux-x64-gnu.node'), 'LINUX_BINARY');

    const preparer = createHostPreparer();
    const hostLibTarget = join(TMP_DIR, 'dist', 'qmlts_host.linux-x64.node');
    const output = preparer.prepare(makeOptions({ platform: 'linux-x64', hostLibTarget }));

    expect(output.result.mode).toBe('prebuilt');
    expect(existsSync(hostLibTarget)).toBe(true);
    expect(readFileSync(hostLibTarget, 'utf-8')).toBe('LINUX_BINARY');
  });

  test('finds @qmlts/host by walking up parent directories', () => {
    setupPrebuiltPackage(TMP_DIR);
    const nestedConfigDir = join(TMP_DIR, 'apps', 'demo');
    mkdirSync(nestedConfigDir, { recursive: true });

    const preparer = createHostPreparer();
    const output = preparer.prepare(makeOptions({ configDir: nestedConfigDir }));

    expect(output.result.mode).toBe('prebuilt');
    expect(output.diagnostics.filter((d) => d.severity === 'error')).toHaveLength(0);
    expect(existsSync(output.result.hostLibPath)).toBe(true);
  });
});

// ─── Cargo Build Flow ───────────────────────────────────────

describe('BP-80 cargo-build host preparation', () => {
  test('warns when no schemas are found for bridge generation', () => {
    const preparer = createHostPreparer();
    const output = preparer.prepare(
      makeOptions({
        hostConfig: makeHostConfig({ prebuilt: false }),
        dryRun: true,
      }),
    );

    expect(output.result.mode).toBe('cargo-build');
    // Should have warning about no schemas
    expect(
      output.diagnostics.some(
        (d) => d.severity === 'warning' && d.message.includes('No ViewModel schemas'),
      ),
    ).toBe(true);
  });

  test('discovers schemas and generates bridge code', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');
    writeSchemaFile(schemasDir, 'LoginViewModel', {
      className: 'LoginViewModel',
      version: 1,
      states: [
        {
          name: 'username',
          qmlName: 'username',
          qmlType: 'string',
          memberId: 0,
          readonly: false,
          deferred: false,
          defaultValue: "''",
        },
        {
          name: 'isLoading',
          qmlName: 'isLoading',
          qmlType: 'bool',
          memberId: 1,
          readonly: true,
          deferred: false,
          defaultValue: 'false',
        },
      ],
      commands: [
        { name: 'login', qmlName: 'login', commandId: 12345, parameters: [], async: true },
      ],
      effects: [],
      lifecycle: { onMounted: true, onUnmounting: false, hotReload: false },
    });

    const preparer = createHostPreparer();
    const output = preparer.prepare(
      makeOptions({
        hostConfig: makeHostConfig({
          prebuilt: false,
          cargo: { args: ['--dry-run'], profile: 'dev' },
        }),
        schemasDir,
      }),
    );

    expect(output.result.mode).toBe('cargo-build');
    expect(output.result.bridgeGenerated).toBe(true);

    // Bridge files should be generated in a temporary native workspace
    const workspaceDir = join(TMP_DIR, 'dist', '.host-generated');
    const genDir = join(workspaceDir, 'crates', 'qmlts-host-generated', 'src');
    expect(existsSync(join(genDir, 'counter_view_model.rs'))).toBe(true);
    expect(existsSync(join(genDir, 'counter_runtime.rs'))).toBe(true);
    expect(existsSync(join(genDir, 'login_view_model.rs'))).toBe(true);
    expect(existsSync(join(genDir, 'login_runtime.rs'))).toBe(true);
    expect(existsSync(join(genDir, 'dispatch.rs'))).toBe(true);
    expect(existsSync(join(genDir, 'lib.rs'))).toBe(true);
    expect(existsSync(join(workspaceDir, 'Cargo.toml'))).toBe(true);
    expect(existsSync(join(workspaceDir, 'crates', 'qmlts-host', 'Cargo.toml'))).toBe(true);
    expect(existsSync(join(workspaceDir, 'crates', 'qmlts-host-generated', 'build.rs'))).toBe(true);
    expect(existsSync(join(workspaceDir, 'crates', 'qmlts-host-generated', 'Cargo.toml'))).toBe(
      true,
    );
    expect(
      existsSync(join(workspaceDir, 'crates', 'qmlts-host-generated', 'cpp', 'factories.cpp')),
    ).toBe(true);
  });

  test('dry run reports bridge generation would happen', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');

    const preparer = createHostPreparer();
    const output = preparer.prepare(
      makeOptions({
        hostConfig: makeHostConfig({ prebuilt: false }),
        schemasDir,
        dryRun: true,
      }),
    );

    expect(output.result.mode).toBe('cargo-build');
    expect(output.result.bridgeGenerated).toBe(true);
    expect(output.diagnostics.some((d) => d.message.includes('dry-run'))).toBe(true);
    expect(existsSync(join(TMP_DIR, 'dist', '.host-generated'))).toBe(false);
  });

  test('reports error on duplicate schema class names', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');
    // Write a second file with the same className
    writeFileSync(
      join(schemasDir, 'CounterViewModel2.schema.json'),
      JSON.stringify({
        className: 'CounterViewModel',
        version: 1,
        states: [],
        commands: [],
        effects: [],
        lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
      }),
    );

    const preparer = createHostPreparer();
    const output = preparer.prepare(
      makeOptions({
        hostConfig: makeHostConfig({ prebuilt: false }),
        schemasDir,
      }),
    );

    expect(
      output.diagnostics.some((d) => d.severity === 'error' && d.message.includes('Duplicate')),
    ).toBe(true);
  });
});

// ─── Rust Bridge Generator ──────────────────────────────────

describe('BP-81 rust bridge generator', () => {
  const { createRustBridgeGenerator } = require('../../src/build/rust-bridge-generator.js');

  test('discovers zero schemas from empty directory', () => {
    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(join(TMP_DIR, 'empty'));
    expect(schemas.length).toBe(0);
  });

  test('discovers schemas from directory', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');
    writeSchemaFile(schemasDir, 'LoginViewModel', {
      className: 'LoginViewModel',
      version: 1,
      states: [
        {
          name: 'username',
          qmlName: 'username',
          qmlType: 'string',
          memberId: 0,
          readonly: false,
          deferred: false,
        },
      ],
      commands: [],
      effects: [],
      lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
    });

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);

    expect(schemas.length).toBe(2);
    expect(schemas.map((s: any) => s.className).sort()).toEqual([
      'CounterViewModel',
      'LoginViewModel',
    ]);
  });

  test('throws on invalid JSON schema files', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    mkdirSync(schemasDir, { recursive: true });
    writeFileSync(join(schemasDir, 'bad.schema.json'), 'NOT JSON');
    writeSchemaFile(schemasDir, 'ValidViewModel');

    const gen = createRustBridgeGenerator();
    expect(() => gen.discoverSchemas(schemasDir)).toThrow(/Failed to load schema file/);
  });

  test('generates ViewModel bridge with qproperties', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const output = gen.generate(schemas, genDir);

    const vmContent = readFileSync(output.viewModelFiles[0], 'utf-8');
    expect(vmContent).toContain('#[cxx_qt::bridge]');
    expect(vmContent).toContain('#[qproperty(i32, count)]');
    expect(vmContent).toContain('type CounterViewModel = super::CounterViewModelRust');
    expect(vmContent).toContain('pub struct CounterViewModelRust');
  });

  test('generates runtime bridge with invoke dispatch', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'LoginViewModel', {
      className: 'LoginViewModel',
      version: 1,
      states: [],
      commands: [
        { name: 'login', qmlName: 'login', commandId: 12345, parameters: [], async: true },
      ],
      effects: [
        {
          name: 'onLoginCompleted',
          qmlName: 'onLoginCompleted',
          effectId: 11,
          parameters: [{ name: 'success', type: 'boolean' }],
        },
      ],
      lifecycle: { onMounted: true, onUnmounting: true, hotReload: false },
    });

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const output = gen.generate(schemas, genDir);

    const rtContent = readFileSync(output.runtimeFiles[0], 'utf-8');
    expect(rtContent).toContain('#[cxx_qt::bridge]');
    expect(rtContent).toContain('type LoginRuntime');
    expect(rtContent).toContain('#[qinvokable]');
    expect(rtContent).toContain('fn invoke');
    expect(rtContent).toContain('dispatch::dispatch_command');
    expect(rtContent).toContain('"LoginViewModel"');
    expect(rtContent).toContain('fn on_mounted');
    expect(rtContent).toContain('fn on_unmounting');
    expect(rtContent).toContain('dispatch::dispatch_lifecycle');
    expect(rtContent).toContain('#[qsignal]');
    expect(rtContent).toContain('fn on_login_completed');
  });

  test('generates lib.rs with module declarations', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const output = gen.generate(schemas, genDir);

    const libContent = readFileSync(output.libRsPath, 'utf-8');
    expect(libContent).toContain('pub mod counter_view_model;');
    expect(libContent).toContain('pub mod counter_runtime;');
    expect(libContent).toContain('pub mod dispatch;');
  });

  test('generates build.rs with cxx-qt-build setup', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const output = gen.generate(schemas, genDir);

    const buildContent = readFileSync(output.buildRsPath, 'utf-8');
    expect(buildContent).toContain('CxxQtBuilder::new()');
    expect(buildContent).toContain('.qt_module("Core")');
    expect(buildContent).toContain('.file("src/counter_view_model.rs")');
    expect(buildContent).toContain('.file("src/counter_runtime.rs")');
    expect(buildContent).toContain('cc.file("cpp/factories.cpp")');
    expect(buildContent).toContain('.build()');
  });

  test('generates Cargo.toml and C++ factory source', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const output = gen.generate(schemas, genDir);

    const cargoToml = readFileSync(output.cargoTomlPath, 'utf-8');
    expect(cargoToml).toContain('name = "qmlts-host-generated"');
    expect(cargoToml).toContain('cxx-qt-build = { workspace = true }');

    const factoriesCpp = readFileSync(output.factoriesCppPath, 'utf-8');
    expect(factoriesCpp).toContain(
      '#include "qmlts-host-generated/src/counter_view_model.cxxqt.h"',
    );
    expect(factoriesCpp).toContain('void* qmlts_create_counter_view_model()');
    expect(factoriesCpp).toContain('void* qmlts_create_counter_runtime()');
    expect(factoriesCpp).toContain('void qmlts_destroy_qobject(void* ptr)');
  });

  test('generates dispatch.rs', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const _output = gen.generate(schemas, genDir);

    const dispatchPath = join(genDir, 'src', 'dispatch.rs');
    expect(existsSync(dispatchPath)).toBe(true);
    const content = readFileSync(dispatchPath, 'utf-8');
    expect(content).toContain('dispatch_command');
    expect(content).toContain('set_command_dispatcher');
    expect(content).toContain('set_lifecycle_dispatcher');
    expect(content).toContain('clear_dispatchers_for_owner');
  });

  test('generates lib.rs descriptors and embedded schema JSON', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const output = gen.generate(schemas, genDir);

    const libContent = readFileSync(output.libRsPath, 'utf-8');
    expect(libContent).toContain('pub struct BridgeDescriptor');
    expect(libContent).toContain('pub fn descriptors() ->');
    expect(libContent).toContain('COUNTER_VIEW_MODEL_SCHEMA');
    expect(libContent).toContain('schema_json: COUNTER_VIEW_MODEL_SCHEMA');
    expect(libContent).toContain('fn qmlts_create_counter_view_model() -> *mut c_void;');
  });

  test('handles string qmlType with cxx-qt-lib import', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'FormViewModel', {
      className: 'FormViewModel',
      version: 1,
      states: [
        {
          name: 'name',
          qmlName: 'name',
          qmlType: 'string',
          memberId: 0,
          readonly: false,
          deferred: false,
        },
      ],
      commands: [],
      effects: [],
      lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
    });

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const output = gen.generate(schemas, genDir);

    const vmContent = readFileSync(output.viewModelFiles[0], 'utf-8');
    expect(vmContent).toContain('use cxx_qt_lib');
    expect(vmContent).toContain('QString');
    expect(vmContent).toContain('#[qproperty(QString, name)]');
  });

  test('uses snake_case Rust field names for camelCase states', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'LoginViewModel', {
      className: 'LoginViewModel',
      version: 1,
      states: [
        {
          name: 'isLoading',
          qmlName: 'isLoading',
          qmlType: 'bool',
          memberId: 0,
          readonly: false,
          deferred: false,
        },
      ],
      commands: [],
      effects: [],
      lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
    });

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const output = gen.generate(schemas, genDir);

    const vmContent = readFileSync(output.viewModelFiles[0], 'utf-8');
    expect(vmContent).toContain('#[qproperty(bool, is_loading, cxx_name = "isLoading")]');
    expect(vmContent).toContain('is_loading: bool,');
  });

  test('generates multiple ViewModels correctly', () => {
    const schemasDir = join(TMP_DIR, 'schemas');
    writeSchemaFile(schemasDir, 'CounterViewModel');
    writeSchemaFile(schemasDir, 'LoginViewModel', {
      className: 'LoginViewModel',
      version: 1,
      states: [
        {
          name: 'username',
          qmlName: 'username',
          qmlType: 'string',
          memberId: 0,
          readonly: false,
          deferred: false,
        },
      ],
      commands: [],
      effects: [],
      lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
    });

    const gen = createRustBridgeGenerator();
    const schemas = gen.discoverSchemas(schemasDir);
    const genDir = join(TMP_DIR, 'generated');
    const output = gen.generate(schemas, genDir);

    expect(output.viewModelFiles.length).toBe(2);
    expect(output.runtimeFiles.length).toBe(2);

    const libContent = readFileSync(output.libRsPath, 'utf-8');
    expect(libContent).toContain('pub mod counter_view_model;');
    expect(libContent).toContain('pub mod login_view_model;');
    expect(libContent).toContain('pub mod counter_runtime;');
    expect(libContent).toContain('pub mod login_runtime;');
  });
});

// ─── Schema Validation ─────────────────────────────────────

describe('BP-82 schema validation', () => {
  const { validateSchemas } = require('../../src/build/rust-bridge-generator.js');

  test('detects duplicate class names', () => {
    const diagnostics = validateSchemas([
      {
        className: 'MyVM',
        filePath: '/a.schema.json',
        content: {
          className: 'MyVM',
          version: 1,
          states: [],
          commands: [],
          effects: [],
          lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
        },
      },
      {
        className: 'MyVM',
        filePath: '/b.schema.json',
        content: {
          className: 'MyVM',
          version: 1,
          states: [],
          commands: [],
          effects: [],
          lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
        },
      },
    ]);

    expect(diagnostics.some((d) => d.severity === 'error' && d.message.includes('Duplicate'))).toBe(
      true,
    );
  });

  test('returns empty for unique schemas', () => {
    const diagnostics = validateSchemas([
      {
        className: 'VM1',
        filePath: '/a.schema.json',
        content: {
          className: 'VM1',
          version: 1,
          states: [
            {
              name: 'x',
              qmlName: 'x',
              qmlType: 'int',
              memberId: 0,
              readonly: false,
              deferred: false,
            },
          ],
          commands: [],
          effects: [],
          lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
        },
      },
      {
        className: 'VM2',
        filePath: '/b.schema.json',
        content: {
          className: 'VM2',
          version: 1,
          states: [
            {
              name: 'ready',
              qmlName: 'ready',
              qmlType: 'bool',
              memberId: 0,
              readonly: false,
              deferred: false,
            },
          ],
          commands: [],
          effects: [],
          lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
        },
      },
    ]);

    expect(diagnostics.filter((d) => d.severity === 'error')).toHaveLength(0);
    expect(diagnostics.filter((d) => d.severity === 'warning')).toHaveLength(0);
  });

  test('warns when schema has no states, commands, or effects', () => {
    const diagnostics = validateSchemas([
      {
        className: 'EmptyVM',
        filePath: '/empty.schema.json',
        content: {
          className: 'EmptyVM',
          version: 1,
          states: [],
          commands: [],
          effects: [],
          lifecycle: { onMounted: false, onUnmounting: false, hotReload: false },
        },
      },
    ]);

    expect(diagnostics.some((d) => d.severity === 'warning')).toBe(true);
    expect(diagnostics[0]?.message).toContain('has no states, commands, or effects');
  });
});

// ─── Pipeline Integration ───────────────────────────────────

describe('BP-83 pipeline host preparation phase', () => {
  const FIXTURES_DIR = resolve(__dirname, 'fixtures', 'sample-project');

  function makeFullConfig(
    overrides: Partial<import('../../src/build/config-types.js').ResolvedQmltsConfig> = {},
  ): import('../../src/build/config-types.js').ResolvedQmltsConfig {
    return {
      entry: join(FIXTURES_DIR, 'src', 'CounterView.ts'),
      outDir: join(TMP_DIR, 'dist'),
      qt: {
        modules: ['QtQuick'],
        targetVersion: '6.11.0',
      },
      build: {
        aot: false,
        lint: false,
        format: false,
        sourceMaps: false,
        incremental: false,
        concurrency: 1,
        qualityGate: 'none',
        mode: 'development',
        minify: false,
        compilerOptions: {
          diagnostics: { suppress: ['QMLTS-A011'] },
        },
      },
      host: {
        prebuilt: true,
        cargo: { args: [], profile: 'dev' },
      },
      dev: {
        hotReload: false,
        watchPaths: ['.'],
        debounceMs: 300,
        ignorePatterns: [],
        port: 5173,
        notify: true,
        preserveOnError: false,
      },
      assets: {
        dir: join(FIXTURES_DIR, 'assets'),
        include: ['**/*'],
        exclude: [],
        useQrc: false,
        optimize: false,
      },
      distribute: {
        targets: [],
        bundleQt: false,
      },
      qmlModulePaths: [],
      configDir: FIXTURES_DIR,
      ...overrides,
    };
  }

  test('prebuilt mode in pipeline produces host prep phase result', async () => {
    // Set up prebuilt package for the fixture's configDir
    const fixturePackageDir = join(FIXTURES_DIR, 'node_modules', '@qmlts', 'host');
    mkdirSync(fixturePackageDir, { recursive: true });
    writeFileSync(join(fixturePackageDir, 'qmlts-host.win32-x64-msvc.node'), 'PIPELINE_BINARY');

    try {
      const { createBuildPipeline } = require('../../src/build/build-pipeline.js');
      const pipeline = createBuildPipeline(makeFullConfig());
      const result = await pipeline.run();

      const hostPhase = result.phases.get('preparing-host');
      expect(hostPhase).toBeDefined();
      expect(hostPhase!.durationMs).toBeGreaterThanOrEqual(0);
    } finally {
      // Clean up fixture node_modules
      rmSync(join(FIXTURES_DIR, 'node_modules'), { recursive: true, force: true });
    }
  });

  test('custom path in pipeline produces correct phase diagnostics', async () => {
    const customPath = join(TMP_DIR, 'pipeline-custom.node');
    writeFakeNodeBinary(customPath, 'CUSTOM_BIN');

    const { createBuildPipeline } = require('../../src/build/build-pipeline.js');
    const pipeline = createBuildPipeline(
      makeFullConfig({
        host: { prebuilt: true, cargo: { args: [], profile: 'dev' }, customPath },
      }),
    );
    const result = await pipeline.run();

    const hostPhase = result.phases.get('preparing-host');
    expect(hostPhase).toBeDefined();
    // No errors expected since custom path exists
    expect(hostPhase!.diagnostics.filter((d) => d.severity === 'error').length).toBe(0);
  });

  test('missing custom path produces error diagnostic in host phase', async () => {
    const { createBuildPipeline } = require('../../src/build/build-pipeline.js');
    const pipeline = createBuildPipeline(
      makeFullConfig({
        host: {
          prebuilt: true,
          cargo: { args: [], profile: 'dev' },
          customPath: join(TMP_DIR, 'nonexistent.node'),
        },
      }),
    );
    const result = await pipeline.run();

    const hostPhase = result.phases.get('preparing-host');
    expect(hostPhase).toBeDefined();
    expect(hostPhase!.diagnostics.some((d) => d.severity === 'error')).toBe(true);
  });

  test('cargo-build dry run uses in-memory schemas from compilation output', async () => {
    const { createBuildPipeline } = require('../../src/build/build-pipeline.js');
    const pipeline = createBuildPipeline(
      makeFullConfig({
        host: { prebuilt: false, cargo: { args: [], profile: 'dev' } },
      }),
    );
    const result = await pipeline.run({ dryRun: true });

    const hostPhase = result.phases.get('preparing-host');
    expect(hostPhase).toBeDefined();
    expect(hostPhase!.diagnostics.some((d) => d.message.includes('dry-run'))).toBe(true);
    expect(
      hostPhase!.diagnostics.some((d) => d.message.includes('No ViewModel schemas found')),
    ).toBe(false);
  });
});
