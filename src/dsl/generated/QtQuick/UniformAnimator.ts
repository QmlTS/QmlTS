// AUTO-GENERATED — DO NOT EDIT
// Type: UniformAnimator
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
export interface UniformAnimatorBuilder {
  id(id: string): UniformAnimatorBuilder;
  child(obj: QmlObjectBuilder): UniformAnimatorBuilder;

  alwaysRunToEnd(value: boolean): UniformAnimatorBuilder;
  alwaysRunToEndBind(expr: string): UniformAnimatorBuilder;
  duration(value: number): UniformAnimatorBuilder;
  durationBind(expr: string): UniformAnimatorBuilder;
  easing(value: QmlValue): UniformAnimatorBuilder;
  easingBind(expr: string): UniformAnimatorBuilder;
  from(value: number): UniformAnimatorBuilder;
  fromBind(expr: string): UniformAnimatorBuilder;
  loops(value: number): UniformAnimatorBuilder;
  loopsBind(expr: string): UniformAnimatorBuilder;
  objectName(value: string): UniformAnimatorBuilder;
  objectNameBind(expr: string): UniformAnimatorBuilder;
  paused(value: boolean): UniformAnimatorBuilder;
  pausedBind(expr: string): UniformAnimatorBuilder;
  running(value: boolean): UniformAnimatorBuilder;
  runningBind(expr: string): UniformAnimatorBuilder;
  target(value: ItemBuilder): UniformAnimatorBuilder;
  targetBind(expr: string): UniformAnimatorBuilder;
  to(value: number): UniformAnimatorBuilder;
  toBind(expr: string): UniformAnimatorBuilder;
  uniform(value: string): UniformAnimatorBuilder;
  uniformBind(expr: string): UniformAnimatorBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): UniformAnimatorBuilder;
  onDurationChanged(handler: (duration: number) => void): UniformAnimatorBuilder;
  onEasingChanged(handler: (curve: QmlValue) => void): UniformAnimatorBuilder;
  onFinished(handler: () => void): UniformAnimatorBuilder;
  onFromChanged(handler: (from: number) => void): UniformAnimatorBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): UniformAnimatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): UniformAnimatorBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): UniformAnimatorBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): UniformAnimatorBuilder;
  onStarted(handler: () => void): UniformAnimatorBuilder;
  onStopped(handler: () => void): UniformAnimatorBuilder;
  onTargetItemChanged(handler: (arg0: ItemBuilder) => void): UniformAnimatorBuilder;
  onToChanged(handler: (to: number) => void): UniformAnimatorBuilder;
  onUniformChanged(handler: (arg0: string) => void): UniformAnimatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): UniformAnimatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): UniformAnimatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): UniformAnimatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): UniformAnimatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): UniformAnimatorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): UniformAnimatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): UniformAnimatorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): UniformAnimatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): UniformAnimatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): UniformAnimatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): UniformAnimatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): UniformAnimatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): UniformAnimatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): UniformAnimatorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): UniformAnimatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): UniformAnimatorBuilder;
}

export function UniformAnimator(): UniformAnimatorBuilder {
  return new DslBuilderImpl('UniformAnimator') as unknown as UniformAnimatorBuilder;
}

export namespace UniformAnimator {
  export namespace Loops {
    export const Infinite = createEnumToken('UniformAnimator', 'Loops', 'Infinite');
  }
}
