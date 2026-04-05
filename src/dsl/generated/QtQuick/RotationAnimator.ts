// AUTO-GENERATED — DO NOT EDIT
// Type: RotationAnimator
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
export interface RotationAnimatorBuilder {
  id(id: string): RotationAnimatorBuilder;
  child(obj: QmlObjectBuilder): RotationAnimatorBuilder;

  alwaysRunToEnd(value: boolean): RotationAnimatorBuilder;
  alwaysRunToEndBind(expr: string): RotationAnimatorBuilder;
  direction(value: QmlValue): RotationAnimatorBuilder;
  directionBind(expr: string): RotationAnimatorBuilder;
  duration(value: number): RotationAnimatorBuilder;
  durationBind(expr: string): RotationAnimatorBuilder;
  easing(value: QmlValue): RotationAnimatorBuilder;
  easingBind(expr: string): RotationAnimatorBuilder;
  from(value: number): RotationAnimatorBuilder;
  fromBind(expr: string): RotationAnimatorBuilder;
  loops(value: number): RotationAnimatorBuilder;
  loopsBind(expr: string): RotationAnimatorBuilder;
  objectName(value: string): RotationAnimatorBuilder;
  objectNameBind(expr: string): RotationAnimatorBuilder;
  paused(value: boolean): RotationAnimatorBuilder;
  pausedBind(expr: string): RotationAnimatorBuilder;
  running(value: boolean): RotationAnimatorBuilder;
  runningBind(expr: string): RotationAnimatorBuilder;
  target(value: ItemBuilder): RotationAnimatorBuilder;
  targetBind(expr: string): RotationAnimatorBuilder;
  to(value: number): RotationAnimatorBuilder;
  toBind(expr: string): RotationAnimatorBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): RotationAnimatorBuilder;
  onDirectionChanged(handler: (dir: QmlValue) => void): RotationAnimatorBuilder;
  onDurationChanged(handler: (duration: number) => void): RotationAnimatorBuilder;
  onEasingChanged(handler: (curve: QmlValue) => void): RotationAnimatorBuilder;
  onFinished(handler: () => void): RotationAnimatorBuilder;
  onFromChanged(handler: (from: number) => void): RotationAnimatorBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): RotationAnimatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RotationAnimatorBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): RotationAnimatorBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): RotationAnimatorBuilder;
  onStarted(handler: () => void): RotationAnimatorBuilder;
  onStopped(handler: () => void): RotationAnimatorBuilder;
  onTargetItemChanged(handler: (arg0: ItemBuilder) => void): RotationAnimatorBuilder;
  onToChanged(handler: (to: number) => void): RotationAnimatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): RotationAnimatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): RotationAnimatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): RotationAnimatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): RotationAnimatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): RotationAnimatorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): RotationAnimatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): RotationAnimatorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): RotationAnimatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): RotationAnimatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): RotationAnimatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): RotationAnimatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): RotationAnimatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): RotationAnimatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): RotationAnimatorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): RotationAnimatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): RotationAnimatorBuilder;
}

export function RotationAnimator(): RotationAnimatorBuilder {
  return new DslBuilderImpl('RotationAnimator') as unknown as RotationAnimatorBuilder;
}

export namespace RotationAnimator {
  export namespace Loops {
    export const Infinite = createEnumToken('RotationAnimator', 'Loops', 'Infinite');
  }
  export namespace RotationDirection {
    export const Numerical = createEnumToken('RotationAnimator', 'RotationDirection', 'Numerical');
    export const Shortest = createEnumToken('RotationAnimator', 'RotationDirection', 'Shortest');
    export const Clockwise = createEnumToken('RotationAnimator', 'RotationDirection', 'Clockwise');
    export const Counterclockwise = createEnumToken(
      'RotationAnimator',
      'RotationDirection',
      'Counterclockwise',
    );
  }
}
