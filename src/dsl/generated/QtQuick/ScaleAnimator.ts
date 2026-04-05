// AUTO-GENERATED — DO NOT EDIT
// Type: ScaleAnimator
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
export interface ScaleAnimatorBuilder {
  id(id: string): ScaleAnimatorBuilder;
  child(obj: QmlObjectBuilder): ScaleAnimatorBuilder;

  alwaysRunToEnd(value: boolean): ScaleAnimatorBuilder;
  alwaysRunToEndBind(expr: string): ScaleAnimatorBuilder;
  duration(value: number): ScaleAnimatorBuilder;
  durationBind(expr: string): ScaleAnimatorBuilder;
  easing(value: QmlValue): ScaleAnimatorBuilder;
  easingBind(expr: string): ScaleAnimatorBuilder;
  from(value: number): ScaleAnimatorBuilder;
  fromBind(expr: string): ScaleAnimatorBuilder;
  loops(value: number): ScaleAnimatorBuilder;
  loopsBind(expr: string): ScaleAnimatorBuilder;
  objectName(value: string): ScaleAnimatorBuilder;
  objectNameBind(expr: string): ScaleAnimatorBuilder;
  paused(value: boolean): ScaleAnimatorBuilder;
  pausedBind(expr: string): ScaleAnimatorBuilder;
  running(value: boolean): ScaleAnimatorBuilder;
  runningBind(expr: string): ScaleAnimatorBuilder;
  target(value: ItemBuilder): ScaleAnimatorBuilder;
  targetBind(expr: string): ScaleAnimatorBuilder;
  to(value: number): ScaleAnimatorBuilder;
  toBind(expr: string): ScaleAnimatorBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): ScaleAnimatorBuilder;
  onDurationChanged(handler: (duration: number) => void): ScaleAnimatorBuilder;
  onEasingChanged(handler: (curve: QmlValue) => void): ScaleAnimatorBuilder;
  onFinished(handler: () => void): ScaleAnimatorBuilder;
  onFromChanged(handler: (from: number) => void): ScaleAnimatorBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): ScaleAnimatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ScaleAnimatorBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): ScaleAnimatorBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): ScaleAnimatorBuilder;
  onStarted(handler: () => void): ScaleAnimatorBuilder;
  onStopped(handler: () => void): ScaleAnimatorBuilder;
  onTargetItemChanged(handler: (arg0: ItemBuilder) => void): ScaleAnimatorBuilder;
  onToChanged(handler: (to: number) => void): ScaleAnimatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ScaleAnimatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ScaleAnimatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ScaleAnimatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ScaleAnimatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ScaleAnimatorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ScaleAnimatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ScaleAnimatorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ScaleAnimatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ScaleAnimatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ScaleAnimatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ScaleAnimatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ScaleAnimatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ScaleAnimatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ScaleAnimatorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ScaleAnimatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ScaleAnimatorBuilder;
}

export function ScaleAnimator(): ScaleAnimatorBuilder {
  return new DslBuilderImpl('ScaleAnimator') as unknown as ScaleAnimatorBuilder;
}

export namespace ScaleAnimator {
  export namespace Loops {
    export const Infinite = createEnumToken('ScaleAnimator', 'Loops', 'Infinite');
  }
}
