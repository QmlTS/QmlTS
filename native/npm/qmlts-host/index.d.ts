/**
 * Published TypeScript declarations for @qmlts/host.
 *
 * These declarations are checked in during the bootstrap phase so the package
 * can be consumed without a separate TS declaration build step.
 */

export interface EngineConfig {
  pluginPaths?: string[];
  importPaths?: string[];
  enableLogging?: boolean;
}

export interface QmltsEngine {
  readonly __brand: 'QmltsEngine';
}

export declare function createEngine(config?: EngineConfig): QmltsEngine;
export declare function destroyEngine(engine: QmltsEngine): void;
export declare function version(): string;
export declare function qtVersion(): string;
export declare function loadFile(engine: QmltsEngine, path: string): void;
export declare function loadString(
  engine: QmltsEngine,
  qmlSource: string,
  baseUrl?: string,
): void;
export declare function addImportPath(engine: QmltsEngine, path: string): void;
export declare function addPluginPath(engine: QmltsEngine, path: string): void;
export declare function exec(engine: QmltsEngine): number;
export declare function quit(engine: QmltsEngine, exitCode?: number): void;
export declare function processEvents(engine: QmltsEngine): void;
export declare function processEventsFor(engine: QmltsEngine, timeoutMs: number): void;
export declare function registerViewModel(engine: QmltsEngine, className: string): void;
export declare function getRegisteredTypes(engine: QmltsEngine): string[];
export declare function hasBridgeType(engine: QmltsEngine, className: string): boolean;
export declare function activeRuntimeI32Property(
  engine: QmltsEngine,
  name: string,
): number | null;

export declare function syncState(
  engine: QmltsEngine,
  className: string,
  propertyName: string,
  jsonValue: string,
): void;
export declare function syncStateBatch(
  engine: QmltsEngine,
  className: string,
  jsonStateMap: string,
): void;
export declare function getProperty(
  engine: QmltsEngine,
  className: string,
  propertyName: string,
): string;

export { QmltsHost } from './src/qmlts-host';
export { ViewModelManager } from './src/viewmodel-manager';
export type {
  ViewModelManagerSchema,
  ViewModelInstance,
} from './src/viewmodel-manager';
