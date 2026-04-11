import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Diagnostic } from '../compiler/diagnostics.js';
import type { RustBridgeOutput, SchemaFile, ViewModelSchemaJson } from './build-types.js';

// ─── Types ──────────────────────────────────────────────────

export interface RustBridgeGenerator {
  discoverSchemas(schemasDir: string): SchemaFile[];
  generate(schemas: readonly SchemaFile[], outputDir: string): RustBridgeOutput;
}

// ─── QML type → Rust type mapping ───────────────────────────

const QML_TO_RUST_TYPE: ReadonlyMap<string, string> = new Map([
  ['int', 'i32'],
  ['double', 'f64'],
  ['real', 'f64'],
  ['bool', 'bool'],
  ['string', 'QString'],
  ['url', 'QUrl'],
  ['color', 'QColor'],
  ['date', 'QDate'],
  ['var', 'QVariant'],
  ['variant', 'QVariant'],
  ['list', 'QVariantList'],
  ['point', 'QPointF'],
  ['rect', 'QRectF'],
  ['size', 'QSizeF'],
]);

function mapQmlTypeToRust(qmlType: string): string {
  return QML_TO_RUST_TYPE.get(qmlType) ?? 'QVariant';
}

function needsCxxQtLib(rustType: string): boolean {
  return !['i32', 'f64', 'bool'].includes(rustType);
}

// ─── Name helpers ───────────────────────────────────────────

function toSnakeCase(name: string): string {
  return name
    .replace(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');
}

function toModuleName(className: string): string {
  return toSnakeCase(className);
}

// ─── Schema discovery ───────────────────────────────────────

function discoverSchemas(schemasDir: string): SchemaFile[] {
  if (!existsSync(schemasDir)) {
    return [];
  }

  const files = readdirSync(schemasDir).filter((f) => f.endsWith('.schema.json'));
  const schemas: SchemaFile[] = [];

  for (const file of files) {
    const filePath = join(schemasDir, file);
    try {
      const raw = readFileSync(filePath, 'utf-8');
      const content = JSON.parse(raw) as ViewModelSchemaJson;
      if (content.className && typeof content.version === 'number') {
        schemas.push({ className: content.className, filePath, content });
      }
    } catch {
      // Skip invalid schema files — they will be caught by diagnostics
    }
  }

  return schemas;
}

// ─── ViewModel bridge file generation ───────────────────────

function generateViewModelBridge(schema: ViewModelSchemaJson): string {
  const className = schema.className;
  const rustStruct = `${className}Rust`;
  const lines: string[] = [];

  const rustTypes = schema.states.map((s) => mapQmlTypeToRust(s.qmlType));
  const cxxQtLibTypes = new Set(rustTypes.filter(needsCxxQtLib));

  lines.push(`//! \`${className}\` bridge QObject — set as \`vm\` context property.`);
  lines.push('//!');
  if (schema.states.length > 0) {
    const stateList = schema.states
      .map((s) => `${s.name}: ${s.qmlType} (\`${mapQmlTypeToRust(s.qmlType)}\`)`)
      .join(', ');
    lines.push(`//! Properties: ${stateList}`);
  }
  lines.push('');

  if (cxxQtLibTypes.size > 0) {
    lines.push('use cxx_qt_lib::{');
    lines.push(`    ${[...cxxQtLibTypes].sort().join(', ')},`);
    lines.push('};');
    lines.push('');
  }

  lines.push('#[cxx_qt::bridge]');
  lines.push('pub mod qobject {');

  if (cxxQtLibTypes.size > 0) {
    lines.push('    unsafe extern "C++Qt" {');
    for (const t of [...cxxQtLibTypes].sort()) {
      lines.push(`        include!("cxx-qt-lib/${t.toLowerCase()}.h");`);
      lines.push(`        type ${t} = cxx_qt_lib::${t};`);
    }
    lines.push('    }');
    lines.push('');
  }

  lines.push('    unsafe extern "RustQt" {');
  lines.push('        #[qobject]');
  for (const state of schema.states) {
    const rustType = mapQmlTypeToRust(state.qmlType);
    if (state.name !== state.qmlName) {
      lines.push(`        #[qproperty(${rustType}, ${state.name}, cxx_name = "${state.qmlName}")]`);
    } else {
      lines.push(`        #[qproperty(${rustType}, ${state.name})]`);
    }
  }
  lines.push(`        type ${className} = super::${rustStruct};`);
  lines.push('    }');
  lines.push('}');
  lines.push('');
  lines.push('/// Rust backing struct.');
  lines.push('#[derive(Default)]');
  lines.push(`pub struct ${rustStruct} {`);
  for (const state of schema.states) {
    const rustType = mapQmlTypeToRust(state.qmlType);
    lines.push(`    ${toSnakeCase(state.name)}: ${rustType},`);
  }
  lines.push('}');
  lines.push('');

  return lines.join('\n');
}

// ─── Runtime bridge file generation ─────────────────────────

function generateRuntimeBridge(schema: ViewModelSchemaJson): string {
  const className = schema.className;
  const runtimeName = `${className.replace(/ViewModel$/, '')}Runtime`;
  const rustStruct = `${runtimeName}Rust`;
  const lines: string[] = [];
  const hasCommands = schema.commands.length > 0;
  const hasLifecycle = schema.lifecycle.onMounted || schema.lifecycle.onUnmounting;

  lines.push(`//! \`${runtimeName}\` bridge QObject — set as \`__qmlts\` context property.`);
  lines.push('//!');
  if (hasCommands) {
    lines.push(`//! Commands: ${schema.commands.map((c) => c.name).join(', ')}`);
  }
  if (hasLifecycle) {
    const hooks: string[] = [];
    if (schema.lifecycle.onMounted) hooks.push('onMounted');
    if (schema.lifecycle.onUnmounting) hooks.push('onUnmounting');
    lines.push(`//! Lifecycle: ${hooks.join(', ')}`);
  }
  lines.push('');

  if (hasCommands) {
    lines.push('use core::pin::Pin;');
    lines.push('');
    lines.push('use crate::dispatch;');
    lines.push('');
  }

  lines.push('#[cxx_qt::bridge]');
  lines.push('pub mod qobject {');
  lines.push('    #[auto_cxx_name]');
  lines.push('    unsafe extern "RustQt" {');
  lines.push('        #[qobject]');
  lines.push(`        #[qproperty(i32, invoke_count, cxx_name = "invokeCount")]`);
  lines.push(`        #[qproperty(i32, dispatch_owner_id, cxx_name = "dispatchOwnerId")]`);
  lines.push(`        type ${runtimeName} = super::${rustStruct};`);

  if (hasCommands) {
    lines.push('');
    lines.push('        #[qinvokable]');
    lines.push(`        fn invoke(self: Pin<&mut ${runtimeName}>, command_id: i32);`);
  }

  lines.push('    }');
  lines.push('}');
  lines.push('');
  lines.push('/// Rust backing struct.');
  lines.push('#[derive(Default)]');
  lines.push(`pub struct ${rustStruct} {`);
  lines.push('    invoke_count: i32,');
  lines.push('    dispatch_owner_id: i32,');
  lines.push('}');

  if (hasCommands) {
    lines.push('');
    lines.push(`impl qobject::${runtimeName} {`);
    lines.push(`    pub fn invoke(self: Pin<&mut Self>, command_id: i32) {`);
    lines.push('        let Ok(command_id) = u32::try_from(command_id) else {');
    lines.push('            return;');
    lines.push('        };');
    lines.push('        let Ok(owner_id) = usize::try_from(*self.dispatch_owner_id()) else {');
    lines.push('            return;');
    lines.push('        };');
    lines.push('        let current = *self.invoke_count();');
    lines.push('        self.set_invoke_count(current + 1);');
    lines.push(`        dispatch::dispatch_command(owner_id, "${className}", command_id);`);
    lines.push('    }');
    lines.push('}');
  }

  lines.push('');

  return lines.join('\n');
}

// ─── lib.rs generation ──────────────────────────────────────

function generateLibRs(schemas: readonly SchemaFile[]): string {
  const lines: string[] = [];

  lines.push('//! Generated cxx-qt bridge types for QmlTS ViewModels.');
  lines.push('//!');
  lines.push('//! Auto-generated by the QmlTS build system.');
  lines.push('//! Do not edit manually.');
  lines.push('');
  lines.push('#![deny(unsafe_op_in_unsafe_fn)]');
  lines.push('#![warn(clippy::pedantic)]');
  lines.push('#![allow(clippy::module_name_repetitions)]');
  lines.push('#![allow(clippy::unnecessary_box_returns)]');
  lines.push('');

  lines.push('pub mod dispatch;');
  for (const schema of schemas) {
    const modName = toModuleName(schema.className);
    lines.push(`pub mod ${modName};`);
    const runtimeModName = `${modName.replace(/_view_model$/, '')}_runtime`;
    lines.push(`pub mod ${runtimeModName};`);
  }

  lines.push('');

  return lines.join('\n');
}

// ─── build.rs generation ────────────────────────────────────

function generateBuildRs(schemas: readonly SchemaFile[]): string {
  const lines: string[] = [];

  lines.push('//! Auto-generated by the QmlTS build system.');
  lines.push('');
  lines.push('use cxx_qt_build::CxxQtBuilder;');
  lines.push('');
  lines.push('fn main() {');
  lines.push('    CxxQtBuilder::new()');

  for (const schema of schemas) {
    const modName = toModuleName(schema.className);
    lines.push(`        .file("src/${modName}.rs")`);
    const runtimeModName = `${modName.replace(/_view_model$/, '')}_runtime`;
    lines.push(`        .file("src/${runtimeModName}.rs")`);
  }

  lines.push('        .build();');
  lines.push('}');
  lines.push('');

  return lines.join('\n');
}

// ─── dispatch.rs generation (static copy) ───────────────────

function generateDispatchRs(): string {
  return [
    '//! Global command dispatch — routes invoke calls to the JS runtime.',
    '//!',
    '//! Auto-generated by the QmlTS build system.',
    '',
    'use std::sync::Mutex;',
    '',
    'static DISPATCH_HANDLER: Mutex<Option<Box<dyn Fn(usize, &str, u32) + Send>>> =',
    '    Mutex::new(None);',
    '',
    '/// Register a global command dispatch handler.',
    "pub fn register_dispatch_handler(handler: impl Fn(usize, &str, u32) + Send + 'static) {",
    '    let mut guard = DISPATCH_HANDLER.lock().unwrap();',
    '    *guard = Some(Box::new(handler));',
    '}',
    '',
    '/// Dispatch a command to the registered handler.',
    'pub fn dispatch_command(owner_id: usize, class_name: &str, command_id: u32) {',
    '    let guard = DISPATCH_HANDLER.lock().unwrap();',
    '    if let Some(handler) = guard.as_ref() {',
    '        handler(owner_id, class_name, command_id);',
    '    }',
    '}',
    '',
  ].join('\n');
}

// ─── Full generation orchestrator ───────────────────────────

function generateBridgeFiles(schemas: readonly SchemaFile[], outputDir: string): RustBridgeOutput {
  const srcDir = join(outputDir, 'src');
  mkdirSync(srcDir, { recursive: true });

  const viewModelFiles: string[] = [];
  const runtimeFiles: string[] = [];

  for (const schema of schemas) {
    const modName = toModuleName(schema.className);
    const runtimeModName = `${modName.replace(/_view_model$/, '')}_runtime`;

    const vmPath = join(srcDir, `${modName}.rs`);
    writeFileSync(vmPath, generateViewModelBridge(schema.content), 'utf-8');
    viewModelFiles.push(vmPath);

    const rtPath = join(srcDir, `${runtimeModName}.rs`);
    writeFileSync(rtPath, generateRuntimeBridge(schema.content), 'utf-8');
    runtimeFiles.push(rtPath);
  }

  const dispatchPath = join(srcDir, 'dispatch.rs');
  writeFileSync(dispatchPath, generateDispatchRs(), 'utf-8');

  const libRsPath = join(srcDir, 'lib.rs');
  writeFileSync(libRsPath, generateLibRs(schemas), 'utf-8');

  const buildRsPath = join(outputDir, 'build.rs');
  writeFileSync(buildRsPath, generateBuildRs(schemas), 'utf-8');

  return {
    generatedDir: outputDir,
    viewModelFiles,
    runtimeFiles,
    libRsPath,
    buildRsPath,
  };
}

// ─── Factory ────────────────────────────────────────────────

export function createRustBridgeGenerator(): RustBridgeGenerator {
  return {
    discoverSchemas,
    generate: generateBridgeFiles,
  };
}

// ─── Diagnostics helper ─────────────────────────────────────

export function validateSchemas(schemas: readonly SchemaFile[]): Diagnostic[] {
  const diagnostics: Diagnostic[] = [];
  const seenClassNames = new Set<string>();

  for (const schema of schemas) {
    if (seenClassNames.has(schema.className)) {
      diagnostics.push({
        severity: 'error',
        code: 'QMLTS-G001',
        message: `Duplicate ViewModel class name in schemas: ${schema.className}`,
        file: schema.filePath,
      });
    }
    seenClassNames.add(schema.className);

    if (!schema.content.states && !schema.content.commands && !schema.content.effects) {
      diagnostics.push({
        severity: 'warning',
        code: 'QMLTS-G002',
        message: `Schema for ${schema.className} has no states, commands, or effects`,
        file: schema.filePath,
      });
    }
  }

  return diagnostics;
}
