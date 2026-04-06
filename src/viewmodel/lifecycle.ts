export interface ViewModelLifecycle {
  onMounted?(): void | Promise<void>;
  onUnmounting?(): void;
  // biome-ignore lint/suspicious/noConfusingVoidType: core contract requires void return to allow implicit return
  onBeforeHotReload?(): Record<string, unknown> | void;
  onAfterHotReload?(snapshot: Record<string, unknown> | null): void;
  onVisibilityChanged?(visible: boolean): void;
}

export interface AnalyzedLifecycle {
  hasOnMounted: boolean;
  hasOnUnmounting: boolean;
  hasOnBeforeHotReload: boolean;
  hasOnAfterHotReload: boolean;
  hasOnVisibilityChanged: boolean;
}
