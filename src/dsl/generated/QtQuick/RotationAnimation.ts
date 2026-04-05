// AUTO-GENERATED — DO NOT EDIT
// Type: RotationAnimation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
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
export interface RotationAnimationBuilder {
  id(id: string): RotationAnimationBuilder;
  child(obj: QmlObjectBuilder): RotationAnimationBuilder;

  alwaysRunToEnd(value: boolean): RotationAnimationBuilder;
  alwaysRunToEndBind(expr: string): RotationAnimationBuilder;
  direction(value: QmlValue): RotationAnimationBuilder;
  directionBind(expr: string): RotationAnimationBuilder;
  duration(value: number): RotationAnimationBuilder;
  durationBind(expr: string): RotationAnimationBuilder;
  easing(value: QmlValue): RotationAnimationBuilder;
  easingBind(expr: string): RotationAnimationBuilder;
  from(value: number): RotationAnimationBuilder;
  fromBind(expr: string): RotationAnimationBuilder;
  loops(value: number): RotationAnimationBuilder;
  loopsBind(expr: string): RotationAnimationBuilder;
  objectName(value: string): RotationAnimationBuilder;
  objectNameBind(expr: string): RotationAnimationBuilder;
  paused(value: boolean): RotationAnimationBuilder;
  pausedBind(expr: string): RotationAnimationBuilder;
  properties(value: string): RotationAnimationBuilder;
  propertiesBind(expr: string): RotationAnimationBuilder;
  property(value: string): RotationAnimationBuilder;
  propertyBind(expr: string): RotationAnimationBuilder;
  running(value: boolean): RotationAnimationBuilder;
  runningBind(expr: string): RotationAnimationBuilder;
  target(value: QtObjectBuilder): RotationAnimationBuilder;
  targetBind(expr: string): RotationAnimationBuilder;
  to(value: number): RotationAnimationBuilder;
  toBind(expr: string): RotationAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): RotationAnimationBuilder;
  onDirectionChanged(handler: () => void): RotationAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): RotationAnimationBuilder;
  onEasingChanged(handler: (arg0: QmlValue) => void): RotationAnimationBuilder;
  onFinished(handler: () => void): RotationAnimationBuilder;
  onFromChanged(handler: () => void): RotationAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): RotationAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): RotationAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): RotationAnimationBuilder;
  onPropertiesChanged(handler: (arg0: string) => void): RotationAnimationBuilder;
  onPropertyChanged(handler: () => void): RotationAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): RotationAnimationBuilder;
  onStarted(handler: () => void): RotationAnimationBuilder;
  onStopped(handler: () => void): RotationAnimationBuilder;
  onTargetChanged(handler: () => void): RotationAnimationBuilder;
  onToChanged(handler: () => void): RotationAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): RotationAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): RotationAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): RotationAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): RotationAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): RotationAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): RotationAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): RotationAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): RotationAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): RotationAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): RotationAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): RotationAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): RotationAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): RotationAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): RotationAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): RotationAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): RotationAnimationBuilder;
}

export function RotationAnimation(): RotationAnimationBuilder {
  return new DslBuilderImpl('RotationAnimation') as unknown as RotationAnimationBuilder;
}

export namespace RotationAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('RotationAnimation', 'Loops', 'Infinite');
  }
  export namespace RotationDirection {
    export const Numerical = createEnumToken('RotationAnimation', 'RotationDirection', 'Numerical');
    export const Shortest = createEnumToken('RotationAnimation', 'RotationDirection', 'Shortest');
    export const Clockwise = createEnumToken('RotationAnimation', 'RotationDirection', 'Clockwise');
    export const Counterclockwise = createEnumToken(
      'RotationAnimation',
      'RotationDirection',
      'Counterclockwise',
    );
  }
}
