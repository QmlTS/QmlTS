import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Diagnostic } from '../compiler/diagnostics.js';
import type { RustBridgeOutput, SchemaFile, ViewModelSchemaJson } from './build-types.js';

// ─── Types ──────────────────────────────────────────────────

export interface RustBridgeGenerator {
  discoverSchemas(schemasDir: string): SchemaFile[];
  generate(schemas: readonly SchemaFile[], outputDir: string): RustBridgeOutput;
}

// ─── QML/TS type → Rust type mapping ───────────────────────

const QML_TO_RUST_TYPE: ReadonlyMap<string, string> = new Map([
  ['int', 'i32'],
  ['double', 'f64'],
  ['real', 'f64'],
  ['float', 'f64'],
  ['number', 'f64'],
  ['bool', 'bool'],
  ['boolean', 'bool'],
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

function toUpperSnakeCase(name: string): string {
  return toSnakeCase(name).toUpperCase();
}

function toModuleName(className: string): string {
  return toSnakeCase(className);
}

function toRuntimeName(className: string): string {
  return `${className.replace(/ViewModel$/, '')}Runtime`;
}

function schemaConstName(className: string): string {
  return `${toUpperSnakeCase(className)}_SCHEMA`;
}

function schemaJsonLiteral(schema: ViewModelSchemaJson): string {
  return `r#"${JSON.stringify(schema, null, 2)}"#`;
}

function rustIncludeHeader(typeName: string): string {
  return `cxx-qt-lib/${typeName.toLowerCase()}.h`;
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
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to load schema file "${filePath}": ${message}`);
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

  lines.push('#[cxx_qt::bridge]');
  lines.push('pub mod qobject {');

  if (cxxQtLibTypes.size > 0) {
    lines.push('    unsafe extern "C++" {');
    for (const typeName of [...cxxQtLibTypes].sort()) {
      lines.push(`        include!("${rustIncludeHeader(typeName)}");`);
      lines.push(`        type ${typeName} = cxx_qt_lib::${typeName};`);
    }
    lines.push('    }');
    lines.push('');
  }

  lines.push('    unsafe extern "RustQt" {');
  lines.push('        #[qobject]');
  for (const state of schema.states) {
    const rustType = mapQmlTypeToRust(state.qmlType);
    const fieldName = toSnakeCase(state.name);
    const qmlName = state.qmlName || state.name;
    if (fieldName !== qmlName) {
      lines.push(`        #[qproperty(${rustType}, ${fieldName}, cxx_name = "${qmlName}")]`);
    } else {
      lines.push(`        #[qproperty(${rustType}, ${fieldName})]`);
    }
  }
  lines.push(`        type ${className} = super::${rustStruct};`);
  lines.push('    }');
  lines.push('}');

  if (cxxQtLibTypes.size > 0) {
    lines.push('');
    lines.push(`use cxx_qt_lib::{${[...cxxQtLibTypes].sort().join(', ')}};`);
  }

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
  const runtimeName = toRuntimeName(className);
  const rustStruct = `${runtimeName}Rust`;
  const lines: string[] = [];
  const hasCommands = schema.commands.length > 0;
  const hasLifecycle = schema.lifecycle.onMounted || schema.lifecycle.onUnmounting;
  const hasMountedCount = schema.lifecycle.onMounted;
  const effectRustTypes = schema.effects.flatMap((effect) =>
    effect.parameters.map((param) => mapQmlTypeToRust(param.type)),
  );
  const cxxQtLibTypes = new Set(effectRustTypes.filter(needsCxxQtLib));

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
  if (schema.effects.length > 0) {
    lines.push(`//! Effects: ${schema.effects.map((effect) => effect.qmlName).join(', ')}`);
  }
  lines.push('');

  if (hasCommands || hasLifecycle) {
    lines.push('use core::pin::Pin;');
    lines.push('');
    lines.push('use crate::dispatch;');
    lines.push('');
  }

  lines.push('#[cxx_qt::bridge]');
  lines.push('pub mod qobject {');

  if (cxxQtLibTypes.size > 0) {
    lines.push('    unsafe extern "C++" {');
    for (const typeName of [...cxxQtLibTypes].sort()) {
      lines.push(`        include!("${rustIncludeHeader(typeName)}");`);
      lines.push(`        type ${typeName} = cxx_qt_lib::${typeName};`);
    }
    lines.push('    }');
    lines.push('');
  }

  lines.push('    #[auto_cxx_name]');
  lines.push('    unsafe extern "RustQt" {');
  lines.push('        #[qobject]');
  lines.push('        #[qproperty(i32, invoke_count, cxx_name = "invokeCount")]');
  if (hasMountedCount) {
    lines.push('        #[qproperty(i32, mounted_count, cxx_name = "mountedCount")]');
  }
  lines.push('        #[qproperty(i32, dispatch_owner_id, cxx_name = "dispatchOwnerId")]');
  lines.push(`        type ${runtimeName} = super::${rustStruct};`);

  if (hasCommands) {
    lines.push('');
    lines.push('        #[qinvokable]');
    lines.push(`        fn invoke(self: Pin<&mut ${runtimeName}>, command_id: i32);`);
  }

  if (schema.lifecycle.onMounted) {
    lines.push('');
    lines.push('        #[qinvokable]');
    lines.push(`        fn on_mounted(self: Pin<&mut ${runtimeName}>);`);
  }

  if (schema.lifecycle.onUnmounting) {
    lines.push('');
    lines.push('        #[qinvokable]');
    lines.push(`        fn on_unmounting(self: Pin<&mut ${runtimeName}>);`);
  }

  lines.push('    }');

  if (schema.effects.length > 0) {
    lines.push('');
    lines.push('    #[auto_cxx_name]');
    lines.push('    unsafe extern "RustQt" {');
    for (const effect of schema.effects) {
      const params = effect.parameters
        .map((param) => `${toSnakeCase(param.name)}: ${mapQmlTypeToRust(param.type)}`)
        .join(', ');
      lines.push('        #[qsignal]');
      lines.push(
        `        fn ${toSnakeCase(effect.qmlName)}(self: Pin<&mut ${runtimeName}>${params ? `, ${params}` : ''});`,
      );
    }
    lines.push('    }');
  }

  lines.push('}');
  lines.push('');
  lines.push('/// Rust backing struct.');
  lines.push('#[derive(Default)]');
  lines.push(`pub struct ${rustStruct} {`);
  lines.push('    invoke_count: i32,');
  if (hasMountedCount) {
    lines.push('    mounted_count: i32,');
  }
  lines.push('    dispatch_owner_id: i32,');
  lines.push('}');

  if (hasCommands || hasLifecycle) {
    lines.push('');
    lines.push(`impl qobject::${runtimeName} {`);

    if (hasCommands) {
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
      lines.push('');
    }

    if (schema.lifecycle.onMounted) {
      lines.push('    pub fn on_mounted(self: Pin<&mut Self>) {');
      lines.push('        let Ok(owner_id) = usize::try_from(*self.dispatch_owner_id()) else {');
      lines.push('            return;');
      lines.push('        };');
      lines.push('        let current = *self.mounted_count();');
      lines.push('        self.set_mounted_count(current + 1);');
      lines.push(`        dispatch::dispatch_lifecycle(owner_id, "${className}", "onMounted");`);
      lines.push('    }');
      lines.push('');
    }

    if (schema.lifecycle.onUnmounting) {
      lines.push('    pub fn on_unmounting(self: Pin<&mut Self>) {');
      lines.push('        let Ok(owner_id) = usize::try_from(*self.dispatch_owner_id()) else {');
      lines.push('            return;');
      lines.push('        };');
      lines.push(`        dispatch::dispatch_lifecycle(owner_id, "${className}", "onUnmounting");`);
      lines.push('    }');
      lines.push('');
    }

    lines.push('}');
  }

  lines.push('');
  return lines.join('\n');
}

// ─── Cargo.toml generation ─────────────────────────────────

function generateCargoToml(): string {
  return [
    '[package]',
    'name = "qmlts-host-generated"',
    'version.workspace = true',
    'edition.workspace = true',
    'license.workspace = true',
    'repository.workspace = true',
    'rust-version.workspace = true',
    'description = "Generated cxx-qt bridge types for QmlTS ViewModels"',
    '',
    '[lib]',
    'crate-type = ["rlib"]',
    '',
    '[dependencies]',
    'cxx = { workspace = true }',
    'cxx-qt = { workspace = true }',
    'cxx-qt-lib = { workspace = true }',
    'serde = { workspace = true }',
    'serde_json = { workspace = true }',
    '',
    '[build-dependencies]',
    'cxx-qt-build = { workspace = true }',
    '',
  ].join('\n');
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

  for (const schema of schemas) {
    const modName = toModuleName(schema.className);
    const runtimeModName = toModuleName(toRuntimeName(schema.className));
    lines.push(`pub mod ${modName};`);
    lines.push(`pub mod ${runtimeModName};`);
  }
  lines.push('pub mod dispatch;');
  lines.push('');
  lines.push('use serde::Deserialize;');
  lines.push('use std::any::Any;');
  lines.push('use std::ffi::c_void;');
  lines.push('');
  lines.push('#[derive(Debug, Clone, Deserialize)]');
  lines.push('#[serde(rename_all = "camelCase")]');
  lines.push('pub struct ViewModelSchema {');
  lines.push('    pub class_name: String,');
  lines.push('    pub version: u32,');
  lines.push('    pub states: Vec<SchemaState>,');
  lines.push('    #[serde(default)]');
  lines.push('    pub commands: Vec<SchemaCommand>,');
  lines.push('    #[serde(default)]');
  lines.push('    pub effects: Vec<SchemaEffect>,');
  lines.push('    #[serde(default)]');
  lines.push('    pub lifecycle: SchemaLifecycle,');
  lines.push('}');
  lines.push('');
  lines.push('#[derive(Debug, Clone, Deserialize)]');
  lines.push('#[serde(rename_all = "camelCase")]');
  lines.push('pub struct SchemaState {');
  lines.push('    pub name: String,');
  lines.push('    pub qml_name: String,');
  lines.push('    pub qml_type: String,');
  lines.push('    pub member_id: u32,');
  lines.push('    pub readonly: bool,');
  lines.push('    pub deferred: bool,');
  lines.push('    pub default_value: Option<String>,');
  lines.push('}');
  lines.push('');
  lines.push('#[derive(Debug, Clone, Deserialize)]');
  lines.push('#[serde(rename_all = "camelCase")]');
  lines.push('pub struct SchemaCommand {');
  lines.push('    pub name: String,');
  lines.push('    pub qml_name: String,');
  lines.push('    pub command_id: u32,');
  lines.push('    #[serde(default)]');
  lines.push('    pub parameters: Vec<serde_json::Value>,');
  lines.push('    pub r#async: bool,');
  lines.push('    #[serde(default)]');
  lines.push('    pub throttle: Option<String>,');
  lines.push('    #[serde(default)]');
  lines.push('    pub throttle_ms: Option<u32>,');
  lines.push('}');
  lines.push('');
  lines.push('#[derive(Debug, Clone, Deserialize)]');
  lines.push('#[serde(rename_all = "camelCase")]');
  lines.push('pub struct SchemaEffect {');
  lines.push('    pub name: String,');
  lines.push('    pub qml_name: String,');
  lines.push('    pub effect_id: u32,');
  lines.push('    #[serde(default)]');
  lines.push('    pub parameters: Vec<serde_json::Value>,');
  lines.push('}');
  lines.push('');
  lines.push('#[derive(Debug, Clone, Default, Deserialize)]');
  lines.push('#[serde(rename_all = "camelCase")]');
  lines.push('pub struct SchemaLifecycle {');
  lines.push('    #[serde(default)]');
  lines.push('    pub on_mounted: bool,');
  lines.push('    #[serde(default)]');
  lines.push('    pub on_unmounting: bool,');
  lines.push('    #[serde(default)]');
  lines.push('    pub hot_reload: bool,');
  lines.push('}');
  lines.push('');

  for (const schema of schemas) {
    lines.push(
      `pub const ${schemaConstName(schema.className)}: &str = ${schemaJsonLiteral(schema.content)};`,
    );
    lines.push('');
  }

  lines.push('unsafe extern "C" {');
  for (const schema of schemas) {
    const vmModule = toModuleName(schema.className);
    const runtimeModule = toModuleName(toRuntimeName(schema.className));
    lines.push(`    fn qmlts_create_${vmModule}() -> *mut c_void;`);
    lines.push(`    fn qmlts_create_${runtimeModule}() -> *mut c_void;`);
  }
  lines.push('    fn qmlts_destroy_qobject(ptr: *mut c_void);');
  lines.push('}');
  lines.push('');
  lines.push('struct QObjectPair {');
  lines.push('    vm_ptr: *mut c_void,');
  lines.push('    runtime_ptr: *mut c_void,');
  lines.push('}');
  lines.push('');
  lines.push('impl Drop for QObjectPair {');
  lines.push('    fn drop(&mut self) {');
  lines.push('        unsafe {');
  lines.push('            if !self.vm_ptr.is_null() {');
  lines.push('                qmlts_destroy_qobject(self.vm_ptr);');
  lines.push('            }');
  lines.push('            if !self.runtime_ptr.is_null() {');
  lines.push('                qmlts_destroy_qobject(self.runtime_ptr);');
  lines.push('            }');
  lines.push('        }');
  lines.push('    }');
  lines.push('}');
  lines.push('');
  lines.push('pub struct BridgeInstance {');
  lines.push('    _storage: Box<dyn Any>,');
  lines.push('    vm_ptr: *mut c_void,');
  lines.push('    runtime_ptr: *mut c_void,');
  lines.push('}');
  lines.push('');
  lines.push('impl BridgeInstance {');
  lines.push(
    '    pub(crate) fn new(storage: Box<dyn Any>, vm_ptr: *mut c_void, runtime_ptr: *mut c_void) -> Self {',
  );
  lines.push('        Self { _storage: storage, vm_ptr, runtime_ptr }');
  lines.push('    }');
  lines.push('');
  lines.push('    #[must_use]');
  lines.push('    pub fn vm_qobject_ptr(&self) -> *mut c_void {');
  lines.push('        self.vm_ptr');
  lines.push('    }');
  lines.push('');
  lines.push('    #[must_use]');
  lines.push('    pub fn runtime_qobject_ptr(&self) -> *mut c_void {');
  lines.push('        self.runtime_ptr');
  lines.push('    }');
  lines.push('}');
  lines.push('');
  lines.push('pub struct BridgeDescriptor {');
  lines.push('    pub class_name: &' + 'static str,');
  lines.push('    pub create: fn() -> BridgeInstance,');
  lines.push('    pub schema_json: &' + 'static str,');
  lines.push('}');
  lines.push('');

  for (const schema of schemas) {
    const vmModule = toModuleName(schema.className);
    const runtimeModule = toModuleName(toRuntimeName(schema.className));
    const createFn = `create_${toSnakeCase(schema.className.replace(/ViewModel$/, ''))}_instance`;
    lines.push(`fn ${createFn}() -> BridgeInstance {`);
    lines.push(`    let vm = unsafe { qmlts_create_${vmModule}() };`);
    lines.push(`    let rt = unsafe { qmlts_create_${runtimeModule}() };`);
    lines.push('    let pair = QObjectPair { vm_ptr: vm, runtime_ptr: rt };');
    lines.push('    BridgeInstance::new(Box::new(pair), vm, rt)');
    lines.push('}');
    lines.push('');
  }

  lines.push('#[must_use]');
  lines.push('pub fn descriptors() -> &' + 'static [BridgeDescriptor] {');
  lines.push('    &[');
  for (const schema of schemas) {
    const createFn = `create_${toSnakeCase(schema.className.replace(/ViewModel$/, ''))}_instance`;
    lines.push('        BridgeDescriptor {');
    lines.push(`            class_name: "${schema.className}",`);
    lines.push(`            create: ${createFn},`);
    lines.push(`            schema_json: ${schemaConstName(schema.className)},`);
    lines.push('        },');
  }
  lines.push('    ]');
  lines.push('}');
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
  lines.push('        .qt_module("Core")');

  for (const schema of schemas) {
    const modName = toModuleName(schema.className);
    const runtimeModName = toModuleName(toRuntimeName(schema.className));
    lines.push(`        .file("src/${modName}.rs")`);
    lines.push(`        .file("src/${runtimeModName}.rs")`);
  }

  lines.push('        .cc_builder(|cc| {');
  lines.push('            cc.file("cpp/factories.cpp");');
  lines.push('        })');
  lines.push('        .build();');
  lines.push('}');
  lines.push('');

  return lines.join('\n');
}

// ─── dispatch.rs generation ─────────────────────────────────

function generateDispatchRs(): string {
  return [
    '//! Global dispatcher storage for command and lifecycle routing.',
    '//!',
    '//! Runtime QObjects call `dispatch_command` / `dispatch_lifecycle` when',
    '//! QML invokes `__qmlts.invoke(id)` or lifecycle hooks.',
    '',
    'use std::collections::HashMap;',
    'use std::sync::{Arc, LazyLock, Mutex};',
    '',
    'type CommandDispatcher = Arc<dyn Fn(&str, u32) + Send + Sync>;',
    'type LifecycleDispatcher = Arc<dyn Fn(&str, &str) + Send + Sync>;',
    'type CommandDispatcherBox = Box<dyn Fn(&str, u32) + Send + Sync>;',
    'type LifecycleDispatcherBox = Box<dyn Fn(&str, &str) + Send + Sync>;',
    '',
    'static COMMAND_DISPATCHERS: LazyLock<Mutex<HashMap<usize, CommandDispatcher>>> =',
    '    LazyLock::new(|| Mutex::new(HashMap::new()));',
    'static LIFECYCLE_DISPATCHERS: LazyLock<Mutex<HashMap<usize, LifecycleDispatcher>>> =',
    '    LazyLock::new(|| Mutex::new(HashMap::new()));',
    '',
    'pub fn set_command_dispatcher(',
    '    owner_id: usize,',
    '    f: CommandDispatcherBox,',
    ") -> std::result::Result<(), &'static str> {",
    '    if owner_id == 0 {',
    '        return Err("command dispatcher owner id must be non-zero");',
    '    }',
    '    let mut guard = COMMAND_DISPATCHERS.lock().expect("COMMAND_DISPATCHERS lock poisoned");',
    '    guard.insert(owner_id, Arc::from(f));',
    '    Ok(())',
    '}',
    '',
    'pub fn set_lifecycle_dispatcher(',
    '    owner_id: usize,',
    '    f: LifecycleDispatcherBox,',
    ") -> std::result::Result<(), &'static str> {",
    '    if owner_id == 0 {',
    '        return Err("lifecycle dispatcher owner id must be non-zero");',
    '    }',
    '    let mut guard = LIFECYCLE_DISPATCHERS.lock().expect("LIFECYCLE_DISPATCHERS lock poisoned");',
    '    guard.insert(owner_id, Arc::from(f));',
    '    Ok(())',
    '}',
    '',
    'pub fn dispatch_command(owner_id: usize, class_name: &str, command_id: u32) {',
    '    let callback = COMMAND_DISPATCHERS',
    '        .lock()',
    '        .expect("COMMAND_DISPATCHERS lock poisoned")',
    '        .get(&owner_id)',
    '        .map(Arc::clone);',
    '    if let Some(callback) = callback {',
    '        callback(class_name, command_id);',
    '    }',
    '}',
    '',
    'pub fn dispatch_lifecycle(owner_id: usize, class_name: &str, event: &str) {',
    '    let callback = LIFECYCLE_DISPATCHERS',
    '        .lock()',
    '        .expect("LIFECYCLE_DISPATCHERS lock poisoned")',
    '        .get(&owner_id)',
    '        .map(Arc::clone);',
    '    if let Some(callback) = callback {',
    '        callback(class_name, event);',
    '    }',
    '}',
    '',
    'pub fn clear_dispatchers_for_owner(owner_id: usize) {',
    '    COMMAND_DISPATCHERS',
    '        .lock()',
    '        .expect("COMMAND_DISPATCHERS lock poisoned")',
    '        .remove(&owner_id);',
    '    LIFECYCLE_DISPATCHERS',
    '        .lock()',
    '        .expect("LIFECYCLE_DISPATCHERS lock poisoned")',
    '        .remove(&owner_id);',
    '}',
    '',
    'pub fn clear_dispatchers() {',
    '    COMMAND_DISPATCHERS',
    '        .lock()',
    '        .expect("COMMAND_DISPATCHERS lock poisoned")',
    '        .clear();',
    '    LIFECYCLE_DISPATCHERS',
    '        .lock()',
    '        .expect("LIFECYCLE_DISPATCHERS lock poisoned")',
    '        .clear();',
    '}',
    '',
    '#[must_use]',
    'pub fn has_command_dispatcher() -> bool {',
    '    !COMMAND_DISPATCHERS',
    '        .lock()',
    '        .expect("COMMAND_DISPATCHERS lock poisoned")',
    '        .is_empty()',
    '}',
    '',
    '#[must_use]',
    'pub fn has_lifecycle_dispatcher() -> bool {',
    '    !LIFECYCLE_DISPATCHERS',
    '        .lock()',
    '        .expect("LIFECYCLE_DISPATCHERS lock poisoned")',
    '        .is_empty()',
    '}',
    '',
  ].join('\n');
}

// ─── C++ factory generation ─────────────────────────────────

function generateFactoriesCpp(schemas: readonly SchemaFile[]): string {
  const lines: string[] = [];
  lines.push('// Auto-generated C++ factory functions for cxx-qt bridge QObjects.');
  lines.push('');

  for (const schema of schemas) {
    const vmModule = toModuleName(schema.className);
    const runtimeModule = toModuleName(toRuntimeName(schema.className));
    lines.push(`#include "qmlts-host-generated/src/${vmModule}.cxxqt.h"`);
    lines.push(`#include "qmlts-host-generated/src/${runtimeModule}.cxxqt.h"`);
  }

  lines.push('');
  lines.push('extern "C" {');
  lines.push('');

  for (const schema of schemas) {
    const vmModule = toModuleName(schema.className);
    const runtimeName = toRuntimeName(schema.className);
    lines.push(`void* qmlts_create_${vmModule}() {`);
    lines.push(`    return static_cast<QObject*>(new ${schema.className}());`);
    lines.push('}');
    lines.push('');
    lines.push(`void* qmlts_create_${toModuleName(runtimeName)}() {`);
    lines.push(`    return static_cast<QObject*>(new ${runtimeName}());`);
    lines.push('}');
    lines.push('');
  }

  lines.push('void qmlts_destroy_qobject(void* ptr) {');
  lines.push('    delete static_cast<QObject*>(ptr);');
  lines.push('}');
  lines.push('');
  lines.push('} // extern "C"');
  lines.push('');

  return lines.join('\n');
}

// ─── Full generation orchestrator ───────────────────────────

function generateBridgeFiles(schemas: readonly SchemaFile[], outputDir: string): RustBridgeOutput {
  const srcDir = join(outputDir, 'src');
  const cppDir = join(outputDir, 'cpp');
  mkdirSync(srcDir, { recursive: true });
  mkdirSync(cppDir, { recursive: true });

  const viewModelFiles: string[] = [];
  const runtimeFiles: string[] = [];

  for (const schema of schemas) {
    const modName = toModuleName(schema.className);
    const runtimeModName = toModuleName(toRuntimeName(schema.className));

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

  const cargoTomlPath = join(outputDir, 'Cargo.toml');
  writeFileSync(cargoTomlPath, generateCargoToml(), 'utf-8');

  const factoriesCppPath = join(cppDir, 'factories.cpp');
  writeFileSync(factoriesCppPath, generateFactoriesCpp(schemas), 'utf-8');

  return {
    generatedDir: outputDir,
    viewModelFiles,
    runtimeFiles,
    libRsPath,
    buildRsPath,
    cargoTomlPath,
    factoriesCppPath,
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

    if (
      schema.content.states.length === 0 &&
      schema.content.commands.length === 0 &&
      schema.content.effects.length === 0
    ) {
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
