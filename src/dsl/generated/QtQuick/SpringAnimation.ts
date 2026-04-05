// AUTO-GENERATED — DO NOT EDIT
// Type: SpringAnimation
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
export interface SpringAnimationBuilder {
  id(id: string): SpringAnimationBuilder;
  child(obj: QmlObjectBuilder): SpringAnimationBuilder;

  alwaysRunToEnd(value: boolean): SpringAnimationBuilder;
  alwaysRunToEndBind(expr: string): SpringAnimationBuilder;
  damping(value: number): SpringAnimationBuilder;
  dampingBind(expr: string): SpringAnimationBuilder;
  duration(value: number): SpringAnimationBuilder;
  durationBind(expr: string): SpringAnimationBuilder;
  easing(value: QmlValue): SpringAnimationBuilder;
  easingBind(expr: string): SpringAnimationBuilder;
  epsilon(value: number): SpringAnimationBuilder;
  epsilonBind(expr: string): SpringAnimationBuilder;
  from(value: number): SpringAnimationBuilder;
  fromBind(expr: string): SpringAnimationBuilder;
  loops(value: number): SpringAnimationBuilder;
  loopsBind(expr: string): SpringAnimationBuilder;
  mass(value: number): SpringAnimationBuilder;
  massBind(expr: string): SpringAnimationBuilder;
  modulus(value: number): SpringAnimationBuilder;
  modulusBind(expr: string): SpringAnimationBuilder;
  objectName(value: string): SpringAnimationBuilder;
  objectNameBind(expr: string): SpringAnimationBuilder;
  paused(value: boolean): SpringAnimationBuilder;
  pausedBind(expr: string): SpringAnimationBuilder;
  properties(value: string): SpringAnimationBuilder;
  propertiesBind(expr: string): SpringAnimationBuilder;
  property(value: string): SpringAnimationBuilder;
  propertyBind(expr: string): SpringAnimationBuilder;
  running(value: boolean): SpringAnimationBuilder;
  runningBind(expr: string): SpringAnimationBuilder;
  spring(value: number): SpringAnimationBuilder;
  springBind(expr: string): SpringAnimationBuilder;
  target(value: QtObjectBuilder): SpringAnimationBuilder;
  targetBind(expr: string): SpringAnimationBuilder;
  to(value: number): SpringAnimationBuilder;
  toBind(expr: string): SpringAnimationBuilder;
  velocity(value: number): SpringAnimationBuilder;
  velocityBind(expr: string): SpringAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): SpringAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): SpringAnimationBuilder;
  onEasingChanged(handler: (arg0: QmlValue) => void): SpringAnimationBuilder;
  onFinished(handler: () => void): SpringAnimationBuilder;
  onFromChanged(handler: () => void): SpringAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): SpringAnimationBuilder;
  onMassChanged(handler: () => void): SpringAnimationBuilder;
  onModulusChanged(handler: () => void): SpringAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SpringAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): SpringAnimationBuilder;
  onPropertiesChanged(handler: (arg0: string) => void): SpringAnimationBuilder;
  onPropertyChanged(handler: () => void): SpringAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): SpringAnimationBuilder;
  onStarted(handler: () => void): SpringAnimationBuilder;
  onStopped(handler: () => void): SpringAnimationBuilder;
  onSyncChanged(handler: () => void): SpringAnimationBuilder;
  onTargetChanged(handler: () => void): SpringAnimationBuilder;
  onToChanged(handler: () => void): SpringAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): SpringAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): SpringAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): SpringAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): SpringAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): SpringAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): SpringAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): SpringAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): SpringAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): SpringAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): SpringAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): SpringAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): SpringAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): SpringAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): SpringAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): SpringAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): SpringAnimationBuilder;
}

export function SpringAnimation(): SpringAnimationBuilder {
  return new DslBuilderImpl('SpringAnimation') as unknown as SpringAnimationBuilder;
}

export namespace SpringAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('SpringAnimation', 'Loops', 'Infinite');
  }
}
