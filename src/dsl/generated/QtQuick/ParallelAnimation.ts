// AUTO-GENERATED — DO NOT EDIT
// Type: ParallelAnimation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
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
export interface ParallelAnimationBuilder {
  id(id: string): ParallelAnimationBuilder;
  child(obj: QmlObjectBuilder): ParallelAnimationBuilder;

  alwaysRunToEnd(value: boolean): ParallelAnimationBuilder;
  alwaysRunToEndBind(expr: string): ParallelAnimationBuilder;
  loops(value: number): ParallelAnimationBuilder;
  loopsBind(expr: string): ParallelAnimationBuilder;
  objectName(value: string): ParallelAnimationBuilder;
  objectNameBind(expr: string): ParallelAnimationBuilder;
  paused(value: boolean): ParallelAnimationBuilder;
  pausedBind(expr: string): ParallelAnimationBuilder;
  running(value: boolean): ParallelAnimationBuilder;
  runningBind(expr: string): ParallelAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): ParallelAnimationBuilder;
  onFinished(handler: () => void): ParallelAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): ParallelAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ParallelAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): ParallelAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): ParallelAnimationBuilder;
  onStarted(handler: () => void): ParallelAnimationBuilder;
  onStopped(handler: () => void): ParallelAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ParallelAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ParallelAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ParallelAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ParallelAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ParallelAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ParallelAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ParallelAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ParallelAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ParallelAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ParallelAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ParallelAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ParallelAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ParallelAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ParallelAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ParallelAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ParallelAnimationBuilder;
}

export function ParallelAnimation(): ParallelAnimationBuilder {
  return new DslBuilderImpl('ParallelAnimation') as unknown as ParallelAnimationBuilder;
}

export namespace ParallelAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('ParallelAnimation', 'Loops', 'Infinite');
  }
}
