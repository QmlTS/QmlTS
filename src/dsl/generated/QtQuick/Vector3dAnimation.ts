// AUTO-GENERATED — DO NOT EDIT
// Type: Vector3dAnimation
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, QmlVector3d } from '../../runtime/index.js';
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
export interface Vector3dAnimationBuilder {
  id(id: string): Vector3dAnimationBuilder;
  child(obj: QmlObjectBuilder): Vector3dAnimationBuilder;

  alwaysRunToEnd(value: boolean): Vector3dAnimationBuilder;
  alwaysRunToEndBind(expr: string): Vector3dAnimationBuilder;
  duration(value: number): Vector3dAnimationBuilder;
  durationBind(expr: string): Vector3dAnimationBuilder;
  easing(value: QmlValue): Vector3dAnimationBuilder;
  easingBind(expr: string): Vector3dAnimationBuilder;
  from(value: QmlVector3d): Vector3dAnimationBuilder;
  fromBind(expr: string): Vector3dAnimationBuilder;
  loops(value: number): Vector3dAnimationBuilder;
  loopsBind(expr: string): Vector3dAnimationBuilder;
  objectName(value: string): Vector3dAnimationBuilder;
  objectNameBind(expr: string): Vector3dAnimationBuilder;
  paused(value: boolean): Vector3dAnimationBuilder;
  pausedBind(expr: string): Vector3dAnimationBuilder;
  properties(value: string): Vector3dAnimationBuilder;
  propertiesBind(expr: string): Vector3dAnimationBuilder;
  property(value: string): Vector3dAnimationBuilder;
  propertyBind(expr: string): Vector3dAnimationBuilder;
  running(value: boolean): Vector3dAnimationBuilder;
  runningBind(expr: string): Vector3dAnimationBuilder;
  target(value: QtObjectBuilder): Vector3dAnimationBuilder;
  targetBind(expr: string): Vector3dAnimationBuilder;
  to(value: QmlVector3d): Vector3dAnimationBuilder;
  toBind(expr: string): Vector3dAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): Vector3dAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): Vector3dAnimationBuilder;
  onEasingChanged(handler: (arg0: QmlValue) => void): Vector3dAnimationBuilder;
  onFinished(handler: () => void): Vector3dAnimationBuilder;
  onFromChanged(handler: () => void): Vector3dAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): Vector3dAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): Vector3dAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): Vector3dAnimationBuilder;
  onPropertiesChanged(handler: (arg0: string) => void): Vector3dAnimationBuilder;
  onPropertyChanged(handler: () => void): Vector3dAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): Vector3dAnimationBuilder;
  onStarted(handler: () => void): Vector3dAnimationBuilder;
  onStopped(handler: () => void): Vector3dAnimationBuilder;
  onTargetChanged(handler: () => void): Vector3dAnimationBuilder;
  onToChanged(handler: () => void): Vector3dAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): Vector3dAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): Vector3dAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): Vector3dAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): Vector3dAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): Vector3dAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): Vector3dAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): Vector3dAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): Vector3dAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): Vector3dAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): Vector3dAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): Vector3dAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): Vector3dAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): Vector3dAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): Vector3dAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): Vector3dAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): Vector3dAnimationBuilder;
}

export function Vector3dAnimation(): Vector3dAnimationBuilder {
  return new DslBuilderImpl('Vector3dAnimation') as unknown as Vector3dAnimationBuilder;
}

export namespace Vector3dAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('Vector3dAnimation', 'Loops', 'Infinite');
  }
}
