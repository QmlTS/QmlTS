import type {
  HotReloadResult as BuildHotReloadResult,
  HotReloadClient,
} from '../build/build-types.js';
import type { Diagnostic } from '../compiler/diagnostics.js';
import type { CompilationStats } from '../compiler/pipeline/pipeline-types.js';

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
}

export interface HotReloadOrchestratorOptions {
  readonly client: HotReloadClient;
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
  | 'stopped';

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

export interface QmlTsRepl {
  start(): Promise<void>;
  stop(): Promise<void>;
  eval(input: string): Promise<ReplResult>;
  setMode(mode: ReplMode): void;
  readonly mode: ReplMode;
  readonly history: readonly string[];
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
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
  clear(): void;
  connectToDevServer(server: DevServer): () => void;
}
