import type {
  HotReloadResult as BuildHotReloadResult,
  HotReloadClient,
} from '../build/build-types.js';
import type { Diagnostic } from '../compiler/diagnostics.js';
import type { CompilationStats } from '../compiler/pipeline/pipeline-types.js';

/**
 * Slot metadata for a V2 instance. Structurally compatible with
 * `InstanceStateSnapshot` from the native host package. Defined locally
 * to avoid cross-rootDir imports.
 */
export interface InstanceSlotInfo {
  readonly instanceId: number;
  readonly className: string;
  readonly compilerSlotKey?: string;
  readonly properties: Record<string, unknown>;
}

// ─── FileWatcher ────────────────────────────────────────────

export interface FileWatcher {
  start(): void;
  stop(): void;
  readonly running: boolean;
  addPath(path: string): void;
  removePath(path: string): void;
  on(event: 'change', handler: (batch: FileChangeBatch) => void): void;
  on(event: 'error', handler: (error: Error) => void): void;
  on(event: 'ready', handler: () => void): void;
  off(event: 'change', handler: (batch: FileChangeBatch) => void): void;
  off(event: 'error', handler: (error: Error) => void): void;
  off(event: 'ready', handler: () => void): void;
}

export interface FileWatcherOptions {
  readonly paths: readonly string[];
  readonly debounceMs?: number;
  readonly include?: readonly string[];
  readonly exclude?: readonly string[];
  readonly ignorePatterns?: readonly string[];
}

export interface FileChangeBatch {
  readonly files: readonly FileChange[];
  readonly rawChangeCount: number;
  readonly timestamp: number;
}

export interface FileChange {
  readonly path: string;
  readonly type: 'add' | 'change' | 'unlink';
}

// ─── HotReloadOrchestrator ──────────────────────────────────

export interface HotReloadOrchestrator {
  reload(changedFiles: readonly string[], outputDir: string): Promise<HotReloadOrchestratorResult>;
  onBefore(hook: (ctx: HotReloadContext) => void | Promise<void>): void;
  onAfter(hook: (result: HotReloadOrchestratorResult) => void | Promise<void>): void;
  offBefore(hook: (ctx: HotReloadContext) => void | Promise<void>): void;
  offAfter(hook: (result: HotReloadOrchestratorResult) => void | Promise<void>): void;
  readonly lastResult: HotReloadOrchestratorResult | undefined;
  readonly reloadCount: number;
  dispose(): void;
}

export interface HotReloadContext {
  readonly sequence: number;
  readonly changedFiles: readonly string[];
}

export interface HotReloadOrchestratorResult {
  readonly success: boolean;
  readonly sequence: number;
  readonly durationMs: number;
  readonly filesReloaded: readonly string[];
  readonly error?: string;
  // V2 additions
  readonly instancesRestored?: number;
  readonly instancesUnmatched?: number;
  readonly degraded?: boolean;
  readonly diagnostics?: readonly HotReloadDiagnostic[];
}

export interface HotReloadOrchestratorOptions {
  readonly client: HotReloadClient;
  // V2 optional context for instance-scoped hot reload
  readonly getInstanceSlots?: () => InstanceSlotInfo[];
}

// ─── V2 Hot Reload Types ────────────────────────────────────

export interface HotReloadDiagnostic {
  readonly code: string;
  readonly message: string;
  readonly instanceId?: number;
  readonly className?: string;
  readonly compilerSlotKey?: string;
}

export interface NativeInstanceSnapshot {
  readonly instanceId: number;
  readonly className: string;
  readonly properties: Readonly<Record<string, unknown>>;
}

export interface InstanceRestorePair {
  readonly instanceId: number;
  readonly properties: Readonly<Record<string, unknown>>;
}

export interface RestoreDiagnostics {
  readonly diagnostics: readonly HotReloadDiagnostic[];
}

export interface InstanceContext {
  readonly instanceId: number;
  readonly className: string;
  readonly compilerSlotKey?: string;
}

// ─── DevServer ──────────────────────────────────────────────

export type DevServerStatus =
  | 'idle'
  | 'starting'
  | 'building'
  | 'running'
  | 'reloading'
  | 'error'
  | 'stopping'
  | 'stopped'
  | 'capturing-state'
  | 'restoring-state';

export type DevServerEvent =
  | 'status-change'
  | 'build-start'
  | 'build-success'
  | 'build-error'
  | 'rebuild-start'
  | 'rebuild-success'
  | 'rebuild-error'
  | 'file-change'
  | 'hot-reload'
  | 'hot-reload-error'
  | 'config-change'
  | 'exit';

export interface DevServerEventPayload {
  readonly type: DevServerEvent;
  readonly timestamp: number;
  readonly data?: unknown;
}

export interface StatusChangeData {
  readonly from: DevServerStatus;
  readonly to: DevServerStatus;
  readonly entry?: string;
  readonly watchPaths?: readonly string[];
  readonly hotReload?: boolean;
}

export interface DevServerBuildResultData {
  readonly success: boolean;
  readonly durationMs: number;
  readonly diagnostics: readonly Diagnostic[];
  readonly stats?: CompilationStats;
}

export interface DevServerFileChangeData {
  readonly files: readonly FileChange[];
  readonly rawChangeCount: number;
}

export interface DevServerHotReloadData {
  readonly durationMs: number;
  readonly filesReloaded: readonly string[];
  readonly sequence: number;
}

export interface DevServerHotReloadErrorData {
  readonly error: string;
  readonly durationMs: number;
  readonly sequence: number;
}

export interface DevServerStats {
  readonly buildCount: number;
  readonly rebuildCount: number;
  readonly hotReloadCount: number;
  readonly errorCount: number;
  readonly totalBuildMs: number;
  readonly lastBuildMs?: number;
  readonly uptime: number;
}

export interface DevServer {
  start(): Promise<DevServerStartResult>;
  stop(): Promise<void>;
  rebuild(): Promise<DevServerStartResult>;
  restart(): Promise<DevServerStartResult>;
  getStatus(): DevServerStatus;
  getStats(): DevServerStats;
  on(event: DevServerEvent, handler: (payload: DevServerEventPayload) => void): void;
  off(event: DevServerEvent, handler: (payload: DevServerEventPayload) => void): void;
}

export interface DevServerStartResult {
  readonly success: boolean;
  readonly durationMs: number;
  readonly diagnostics: readonly Diagnostic[];
  readonly stats?: CompilationStats;
}

export interface DevServerOptions {
  readonly entry?: string;
  readonly headless?: boolean;
  readonly verbose?: boolean;
  readonly debounceMs?: number;
  readonly watchPaths?: readonly string[];
  readonly ignorePatterns?: readonly string[];
  readonly preserveOnError?: boolean;
  readonly hotReloadClient?: HotReloadClient;
  readonly errorOverlay?: ErrorOverlay;
  readonly console?: DevConsole;
  readonly profiler?: PerfProfiler;
  /** V2: function to get current instance slot metadata for hot reload matching */
  readonly getInstanceSlots?: () => InstanceSlotInfo[];
}

// ─── ErrorOverlay ───────────────────────────────────────────

export interface ErrorOverlay {
  show(errors: readonly OverlayError[]): void;
  hide(): void;
  readonly visible: boolean;
  dispose(): void;
}

export interface OverlayError {
  readonly file: string;
  readonly line: number;
  readonly column: number;
  readonly message: string;
  readonly severity: 'error' | 'warning';
  readonly codeFrame?: string;
}

export interface ErrorOverlayOptions {
  readonly host: HostOverlayApi;
}

export interface HostOverlayApi {
  showErrorOverlay(text: string): void;
  hideErrorOverlay(): void;
  isErrorOverlayVisible(): boolean;
}

// Re-export for convenience
export type { BuildHotReloadResult, HotReloadClient };

// ─── REPL ───────────────────────────────────────────────────

export type ReplMode = 'qml' | 'ts';

export interface ReplResult {
  readonly success: boolean;
  readonly durationMs: number;
  readonly qmlOutput?: string;
  readonly error?: string;
}

export interface ReplHost {
  loadString(qmlSource: string, baseUrl?: string): void;
  reloadQml(newSource: string, baseUrl?: string): void;
  processEvents(timeoutMs?: number): void;
}

export interface ReplOptions {
  readonly host: ReplHost;
  readonly defaultMode?: ReplMode;
  readonly historyFile?: string;
  readonly maxHistory?: number;
}

export interface ReplEvalOptions {
  readonly selector?: string;
}

export interface QmltsRepl {
  start(): Promise<void>;
  stop(): Promise<void>;
  eval(input: string, options?: ReplEvalOptions): Promise<ReplResult>;
  setMode(mode: ReplMode): void;
  readonly mode: ReplMode;
  readonly history: readonly string[];
}

// ─── PerfProfiler ───────────────────────────────────────────

export type PerfCategory =
  | 'compile'
  | 'hot-reload'
  | 'capture'
  | 'restore'
  | 'file-watch'
  | 'qmllint'
  | 'qmlformat';

export interface PerfRecord {
  readonly name: string;
  readonly category: PerfCategory;
  readonly startMs: number;
  readonly durationMs: number;
  readonly metadata?: Readonly<Record<string, string | number | boolean>>;
  // V2 instance context
  readonly instanceId?: number;
  readonly className?: string;
  readonly compilerSlotKey?: string;
}

export interface PerfSpan {
  end(): void;
  addMetadata(key: string, value: string | number | boolean): void;
  setInstanceContext?(instanceId: number, className: string, compilerSlotKey?: string): void;
}

export interface PerfSummary {
  readonly averageByCategory: Readonly<Partial<Record<PerfCategory, number>>>;
  readonly totalByCategory: Readonly<Partial<Record<PerfCategory, number>>>;
  readonly countByCategory: Readonly<Partial<Record<PerfCategory, number>>>;
  readonly totalRecords: number;
}

export interface PerfProfiler {
  startSpan(name: string, category: PerfCategory): PerfSpan;
  getRecords(): readonly PerfRecord[];
  getSummary(): PerfSummary;
  clear(): void;
  exportChromeTrace(): string;
  // V2 instance filtering
  getRecordsByInstance?(instanceId: number): readonly PerfRecord[];
  getRecordsByClass?(className: string): readonly PerfRecord[];
  getRecordsBySlotKey?(slotKey: string): readonly PerfRecord[];
}

// ─── DevConsole ─────────────────────────────────────────────

export type DevConsoleLevel = 'debug' | 'info' | 'warn' | 'error';

export interface DevConsoleOptions {
  readonly level?: DevConsoleLevel;
  readonly color?: boolean;
  readonly timestamp?: boolean;
  readonly write?: (text: string) => void;
}

export interface BuildSuccessInfo {
  readonly durationMs: number;
  readonly filesCompiled: number;
  readonly qmlFilesGenerated: number;
}

export interface ServerStatusInfo {
  readonly status: 'starting' | 'running' | 'error' | 'stopping' | 'stopped';
  readonly entry?: string;
  readonly watchPaths?: readonly string[];
  readonly hotReload?: boolean;
}

export interface DevConsole {
  buildStart(files: readonly string[]): void;
  buildSuccess(info: BuildSuccessInfo): void;
  buildError(diagnostics: readonly Diagnostic[]): void;
  hotReload(result: HotReloadOrchestratorResult): void;
  fileChange(batch: FileChangeBatch): void;
  serverStatus(info: ServerStatusInfo): void;
  info(message: string, instanceContext?: InstanceContext): void;
  warn(message: string, instanceContext?: InstanceContext): void;
  error(message: string, instanceContext?: InstanceContext): void;
  debug(message: string, instanceContext?: InstanceContext): void;
  clear(): void;
  connectToDevServer(server: DevServer): () => void;
}
