// AUTO-GENERATED — DO NOT EDIT
// Type: OpacityAnimator
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
export interface OpacityAnimatorBuilder {
  id(id: string): OpacityAnimatorBuilder;
  child(obj: QmlObjectBuilder): OpacityAnimatorBuilder;

  alwaysRunToEnd(value: boolean): OpacityAnimatorBuilder;
  alwaysRunToEndBind(expr: string): OpacityAnimatorBuilder;
  duration(value: number): OpacityAnimatorBuilder;
  durationBind(expr: string): OpacityAnimatorBuilder;
  easing(value: QmlValue): OpacityAnimatorBuilder;
  easingBind(expr: string): OpacityAnimatorBuilder;
  from(value: number): OpacityAnimatorBuilder;
  fromBind(expr: string): OpacityAnimatorBuilder;
  loops(value: number): OpacityAnimatorBuilder;
  loopsBind(expr: string): OpacityAnimatorBuilder;
  objectName(value: string): OpacityAnimatorBuilder;
  objectNameBind(expr: string): OpacityAnimatorBuilder;
  paused(value: boolean): OpacityAnimatorBuilder;
  pausedBind(expr: string): OpacityAnimatorBuilder;
  running(value: boolean): OpacityAnimatorBuilder;
  runningBind(expr: string): OpacityAnimatorBuilder;
  target(value: ItemBuilder): OpacityAnimatorBuilder;
  targetBind(expr: string): OpacityAnimatorBuilder;
  to(value: number): OpacityAnimatorBuilder;
  toBind(expr: string): OpacityAnimatorBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): OpacityAnimatorBuilder;
  onDurationChanged(handler: (duration: number) => void): OpacityAnimatorBuilder;
  onEasingChanged(handler: (curve: QmlValue) => void): OpacityAnimatorBuilder;
  onFinished(handler: () => void): OpacityAnimatorBuilder;
  onFromChanged(handler: (from: number) => void): OpacityAnimatorBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): OpacityAnimatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): OpacityAnimatorBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): OpacityAnimatorBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): OpacityAnimatorBuilder;
  onStarted(handler: () => void): OpacityAnimatorBuilder;
  onStopped(handler: () => void): OpacityAnimatorBuilder;
  onTargetItemChanged(handler: (arg0: ItemBuilder) => void): OpacityAnimatorBuilder;
  onToChanged(handler: (to: number) => void): OpacityAnimatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): OpacityAnimatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): OpacityAnimatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): OpacityAnimatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): OpacityAnimatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): OpacityAnimatorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): OpacityAnimatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): OpacityAnimatorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): OpacityAnimatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): OpacityAnimatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): OpacityAnimatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): OpacityAnimatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): OpacityAnimatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): OpacityAnimatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): OpacityAnimatorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): OpacityAnimatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): OpacityAnimatorBuilder;
}

export function OpacityAnimator(): OpacityAnimatorBuilder {
  return new DslBuilderImpl('OpacityAnimator') as unknown as OpacityAnimatorBuilder;
}

export namespace OpacityAnimator {
  export namespace Loops {
    export const Infinite = createEnumToken('OpacityAnimator', 'Loops', 'Infinite');
  }
}
