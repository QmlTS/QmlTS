// AUTO-GENERATED — DO NOT EDIT
// Type: SequentialAnimation
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
export interface SequentialAnimationBuilder {
  id(id: string): SequentialAnimationBuilder;
  child(obj: QmlObjectBuilder): SequentialAnimationBuilder;

  alwaysRunToEnd(value: boolean): SequentialAnimationBuilder;
  alwaysRunToEndBind(expr: string): SequentialAnimationBuilder;
  loops(value: number): SequentialAnimationBuilder;
  loopsBind(expr: string): SequentialAnimationBuilder;
  objectName(value: string): SequentialAnimationBuilder;
  objectNameBind(expr: string): SequentialAnimationBuilder;
  paused(value: boolean): SequentialAnimationBuilder;
  pausedBind(expr: string): SequentialAnimationBuilder;
  running(value: boolean): SequentialAnimationBuilder;
  runningBind(expr: string): SequentialAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): SequentialAnimationBuilder;
  onFinished(handler: () => void): SequentialAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): SequentialAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SequentialAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): SequentialAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): SequentialAnimationBuilder;
  onStarted(handler: () => void): SequentialAnimationBuilder;
  onStopped(handler: () => void): SequentialAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): SequentialAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): SequentialAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): SequentialAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): SequentialAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): SequentialAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): SequentialAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): SequentialAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): SequentialAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): SequentialAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): SequentialAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): SequentialAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): SequentialAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): SequentialAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): SequentialAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): SequentialAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): SequentialAnimationBuilder;
}

export function SequentialAnimation(): SequentialAnimationBuilder {
  return new DslBuilderImpl('SequentialAnimation') as unknown as SequentialAnimationBuilder;
}

export namespace SequentialAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('SequentialAnimation', 'Loops', 'Infinite');
  }
}
