// AUTO-GENERATED — DO NOT EDIT
// Type: YAnimator
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
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
export interface YAnimatorBuilder {
  id(id: string): YAnimatorBuilder;
  child(obj: QmlObjectBuilder): YAnimatorBuilder;

  alwaysRunToEnd(value: boolean): YAnimatorBuilder;
  alwaysRunToEndBind(expr: string): YAnimatorBuilder;
  duration(value: number): YAnimatorBuilder;
  durationBind(expr: string): YAnimatorBuilder;
  easing(value: QmlValue): YAnimatorBuilder;
  easingBind(expr: string): YAnimatorBuilder;
  from(value: number): YAnimatorBuilder;
  fromBind(expr: string): YAnimatorBuilder;
  loops(value: number): YAnimatorBuilder;
  loopsBind(expr: string): YAnimatorBuilder;
  objectName(value: string): YAnimatorBuilder;
  objectNameBind(expr: string): YAnimatorBuilder;
  paused(value: boolean): YAnimatorBuilder;
  pausedBind(expr: string): YAnimatorBuilder;
  running(value: boolean): YAnimatorBuilder;
  runningBind(expr: string): YAnimatorBuilder;
  target(value: ItemBuilder): YAnimatorBuilder;
  targetBind(expr: string): YAnimatorBuilder;
  to(value: number): YAnimatorBuilder;
  toBind(expr: string): YAnimatorBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): YAnimatorBuilder;
  onDurationChanged(handler: (duration: number) => void): YAnimatorBuilder;
  onEasingChanged(handler: (curve: QmlValue) => void): YAnimatorBuilder;
  onFinished(handler: () => void): YAnimatorBuilder;
  onFromChanged(handler: (from: number) => void): YAnimatorBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): YAnimatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): YAnimatorBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): YAnimatorBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): YAnimatorBuilder;
  onStarted(handler: () => void): YAnimatorBuilder;
  onStopped(handler: () => void): YAnimatorBuilder;
  onTargetItemChanged(handler: (arg0: ItemBuilder) => void): YAnimatorBuilder;
  onToChanged(handler: (to: number) => void): YAnimatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): YAnimatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): YAnimatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): YAnimatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): YAnimatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): YAnimatorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): YAnimatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): YAnimatorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): YAnimatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): YAnimatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): YAnimatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): YAnimatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): YAnimatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): YAnimatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): YAnimatorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): YAnimatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): YAnimatorBuilder;
}

export function YAnimator(): YAnimatorBuilder {
  return new DslBuilderImpl('YAnimator') as unknown as YAnimatorBuilder;
}

export namespace YAnimator {
  export namespace Loops {
    export const Infinite = createEnumToken('YAnimator', 'Loops', 'Infinite');
  }
}
