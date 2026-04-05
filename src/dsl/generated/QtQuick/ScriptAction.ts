// AUTO-GENERATED — DO NOT EDIT
// Type: ScriptAction
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface ScriptActionBuilder {
  id(id: string): ScriptActionBuilder;
  child(obj: QmlObjectBuilder): ScriptActionBuilder;

  alwaysRunToEnd(value: boolean): ScriptActionBuilder;
  alwaysRunToEndBind(expr: string): ScriptActionBuilder;
  loops(value: number): ScriptActionBuilder;
  loopsBind(expr: string): ScriptActionBuilder;
  objectName(value: string): ScriptActionBuilder;
  objectNameBind(expr: string): ScriptActionBuilder;
  paused(value: boolean): ScriptActionBuilder;
  pausedBind(expr: string): ScriptActionBuilder;
  running(value: boolean): ScriptActionBuilder;
  runningBind(expr: string): ScriptActionBuilder;
  script(value: QmlValue): ScriptActionBuilder;
  scriptBind(expr: string): ScriptActionBuilder;
  scriptName(value: string): ScriptActionBuilder;
  scriptNameBind(expr: string): ScriptActionBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): ScriptActionBuilder;
  onFinished(handler: () => void): ScriptActionBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): ScriptActionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ScriptActionBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): ScriptActionBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): ScriptActionBuilder;
  onStarted(handler: () => void): ScriptActionBuilder;
  onStopped(handler: () => void): ScriptActionBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ScriptActionBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ScriptActionBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ScriptActionBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ScriptActionBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ScriptActionBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ScriptActionBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ScriptActionBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ScriptActionBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ScriptActionBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ScriptActionBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ScriptActionBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ScriptActionBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ScriptActionBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ScriptActionBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ScriptActionBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ScriptActionBuilder;
}

export function ScriptAction(): ScriptActionBuilder {
  return new DslBuilderImpl('ScriptAction') as unknown as ScriptActionBuilder;
}

export namespace ScriptAction {
  export namespace Loops {
    export const Infinite = createEnumToken('ScriptAction', 'Loops', 'Infinite');
  }
}
