// AUTO-GENERATED — DO NOT EDIT
// Type: PauseAnimation
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
export interface PauseAnimationBuilder {
  id(id: string): PauseAnimationBuilder;
  child(obj: QmlObjectBuilder): PauseAnimationBuilder;

  alwaysRunToEnd(value: boolean): PauseAnimationBuilder;
  alwaysRunToEndBind(expr: string): PauseAnimationBuilder;
  duration(value: number): PauseAnimationBuilder;
  durationBind(expr: string): PauseAnimationBuilder;
  loops(value: number): PauseAnimationBuilder;
  loopsBind(expr: string): PauseAnimationBuilder;
  objectName(value: string): PauseAnimationBuilder;
  objectNameBind(expr: string): PauseAnimationBuilder;
  paused(value: boolean): PauseAnimationBuilder;
  pausedBind(expr: string): PauseAnimationBuilder;
  running(value: boolean): PauseAnimationBuilder;
  runningBind(expr: string): PauseAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): PauseAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): PauseAnimationBuilder;
  onFinished(handler: () => void): PauseAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): PauseAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PauseAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): PauseAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): PauseAnimationBuilder;
  onStarted(handler: () => void): PauseAnimationBuilder;
  onStopped(handler: () => void): PauseAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PauseAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PauseAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PauseAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PauseAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PauseAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PauseAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PauseAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PauseAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PauseAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PauseAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PauseAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PauseAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PauseAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PauseAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PauseAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PauseAnimationBuilder;
}

export function PauseAnimation(): PauseAnimationBuilder {
  return new DslBuilderImpl('PauseAnimation') as unknown as PauseAnimationBuilder;
}

export namespace PauseAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('PauseAnimation', 'Loops', 'Infinite');
  }
}
