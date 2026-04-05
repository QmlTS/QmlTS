// AUTO-GENERATED — DO NOT EDIT
// Type: XAnimator
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
export interface XAnimatorBuilder {
  id(id: string): XAnimatorBuilder;
  child(obj: QmlObjectBuilder): XAnimatorBuilder;

  alwaysRunToEnd(value: boolean): XAnimatorBuilder;
  alwaysRunToEndBind(expr: string): XAnimatorBuilder;
  duration(value: number): XAnimatorBuilder;
  durationBind(expr: string): XAnimatorBuilder;
  easing(value: QmlValue): XAnimatorBuilder;
  easingBind(expr: string): XAnimatorBuilder;
  from(value: number): XAnimatorBuilder;
  fromBind(expr: string): XAnimatorBuilder;
  loops(value: number): XAnimatorBuilder;
  loopsBind(expr: string): XAnimatorBuilder;
  objectName(value: string): XAnimatorBuilder;
  objectNameBind(expr: string): XAnimatorBuilder;
  paused(value: boolean): XAnimatorBuilder;
  pausedBind(expr: string): XAnimatorBuilder;
  running(value: boolean): XAnimatorBuilder;
  runningBind(expr: string): XAnimatorBuilder;
  target(value: ItemBuilder): XAnimatorBuilder;
  targetBind(expr: string): XAnimatorBuilder;
  to(value: number): XAnimatorBuilder;
  toBind(expr: string): XAnimatorBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): XAnimatorBuilder;
  onDurationChanged(handler: (duration: number) => void): XAnimatorBuilder;
  onEasingChanged(handler: (curve: QmlValue) => void): XAnimatorBuilder;
  onFinished(handler: () => void): XAnimatorBuilder;
  onFromChanged(handler: (from: number) => void): XAnimatorBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): XAnimatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): XAnimatorBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): XAnimatorBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): XAnimatorBuilder;
  onStarted(handler: () => void): XAnimatorBuilder;
  onStopped(handler: () => void): XAnimatorBuilder;
  onTargetItemChanged(handler: (arg0: ItemBuilder) => void): XAnimatorBuilder;
  onToChanged(handler: (to: number) => void): XAnimatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): XAnimatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): XAnimatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): XAnimatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): XAnimatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): XAnimatorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): XAnimatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): XAnimatorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): XAnimatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): XAnimatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): XAnimatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): XAnimatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): XAnimatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): XAnimatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): XAnimatorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): XAnimatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): XAnimatorBuilder;
}

export function XAnimator(): XAnimatorBuilder {
  return new DslBuilderImpl('XAnimator') as unknown as XAnimatorBuilder;
}

export namespace XAnimator {
  export namespace Loops {
    export const Infinite = createEnumToken('XAnimator', 'Loops', 'Infinite');
  }
}
