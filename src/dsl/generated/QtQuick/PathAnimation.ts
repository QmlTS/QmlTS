// AUTO-GENERATED — DO NOT EDIT
// Type: PathAnimation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlPoint, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { PathBuilder } from './Path.js';
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
export interface PathAnimationBuilder {
  id(id: string): PathAnimationBuilder;
  child(obj: QmlObjectBuilder): PathAnimationBuilder;

  alwaysRunToEnd(value: boolean): PathAnimationBuilder;
  alwaysRunToEndBind(expr: string): PathAnimationBuilder;
  anchorPoint(value: QmlPoint): PathAnimationBuilder;
  anchorPointBind(expr: string): PathAnimationBuilder;
  duration(value: number): PathAnimationBuilder;
  durationBind(expr: string): PathAnimationBuilder;
  easing(value: QmlValue): PathAnimationBuilder;
  easingBind(expr: string): PathAnimationBuilder;
  endRotation(value: number): PathAnimationBuilder;
  endRotationBind(expr: string): PathAnimationBuilder;
  loops(value: number): PathAnimationBuilder;
  loopsBind(expr: string): PathAnimationBuilder;
  objectName(value: string): PathAnimationBuilder;
  objectNameBind(expr: string): PathAnimationBuilder;
  orientation(value: QmlValue): PathAnimationBuilder;
  orientationBind(expr: string): PathAnimationBuilder;
  orientationEntryDuration(value: number): PathAnimationBuilder;
  orientationEntryDurationBind(expr: string): PathAnimationBuilder;
  orientationExitDuration(value: number): PathAnimationBuilder;
  orientationExitDurationBind(expr: string): PathAnimationBuilder;
  path(value: PathBuilder): PathAnimationBuilder;
  pathBind(expr: string): PathAnimationBuilder;
  paused(value: boolean): PathAnimationBuilder;
  pausedBind(expr: string): PathAnimationBuilder;
  running(value: boolean): PathAnimationBuilder;
  runningBind(expr: string): PathAnimationBuilder;
  target(value: ItemBuilder): PathAnimationBuilder;
  targetBind(expr: string): PathAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): PathAnimationBuilder;
  onAnchorPointChanged(handler: (arg0: QmlPoint) => void): PathAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): PathAnimationBuilder;
  onEasingChanged(handler: (arg0: QmlValue) => void): PathAnimationBuilder;
  onEndRotationChanged(handler: (arg0: number) => void): PathAnimationBuilder;
  onFinished(handler: () => void): PathAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): PathAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathAnimationBuilder;
  onOrientationChanged(handler: (arg0: QmlValue) => void): PathAnimationBuilder;
  onOrientationEntryDurationChanged(handler: (arg0: number) => void): PathAnimationBuilder;
  onOrientationExitDurationChanged(handler: (arg0: number) => void): PathAnimationBuilder;
  onPathChanged(handler: () => void): PathAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): PathAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): PathAnimationBuilder;
  onStarted(handler: () => void): PathAnimationBuilder;
  onStopped(handler: () => void): PathAnimationBuilder;
  onTargetChanged(handler: () => void): PathAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathAnimationBuilder;
}

export function PathAnimation(): PathAnimationBuilder {
  return new DslBuilderImpl('PathAnimation') as unknown as PathAnimationBuilder;
}

export namespace PathAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('PathAnimation', 'Loops', 'Infinite');
  }
  export namespace Orientation {
    export const Fixed = createEnumToken('PathAnimation', 'Orientation', 'Fixed');
    export const RightFirst = createEnumToken('PathAnimation', 'Orientation', 'RightFirst');
    export const LeftFirst = createEnumToken('PathAnimation', 'Orientation', 'LeftFirst');
    export const BottomFirst = createEnumToken('PathAnimation', 'Orientation', 'BottomFirst');
    export const TopFirst = createEnumToken('PathAnimation', 'Orientation', 'TopFirst');
  }
}
