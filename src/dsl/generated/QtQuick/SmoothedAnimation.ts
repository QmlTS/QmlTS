// AUTO-GENERATED — DO NOT EDIT
// Type: SmoothedAnimation
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
export interface SmoothedAnimationBuilder {
  id(id: string): SmoothedAnimationBuilder;
  child(obj: QmlObjectBuilder): SmoothedAnimationBuilder;

  alwaysRunToEnd(value: boolean): SmoothedAnimationBuilder;
  alwaysRunToEndBind(expr: string): SmoothedAnimationBuilder;
  duration(value: number): SmoothedAnimationBuilder;
  durationBind(expr: string): SmoothedAnimationBuilder;
  easing(value: QmlValue): SmoothedAnimationBuilder;
  easingBind(expr: string): SmoothedAnimationBuilder;
  from(value: number): SmoothedAnimationBuilder;
  fromBind(expr: string): SmoothedAnimationBuilder;
  loops(value: number): SmoothedAnimationBuilder;
  loopsBind(expr: string): SmoothedAnimationBuilder;
  maximumEasingTime(value: number): SmoothedAnimationBuilder;
  maximumEasingTimeBind(expr: string): SmoothedAnimationBuilder;
  objectName(value: string): SmoothedAnimationBuilder;
  objectNameBind(expr: string): SmoothedAnimationBuilder;
  paused(value: boolean): SmoothedAnimationBuilder;
  pausedBind(expr: string): SmoothedAnimationBuilder;
  properties(value: string): SmoothedAnimationBuilder;
  propertiesBind(expr: string): SmoothedAnimationBuilder;
  property(value: string): SmoothedAnimationBuilder;
  propertyBind(expr: string): SmoothedAnimationBuilder;
  reversingMode(value: QmlValue): SmoothedAnimationBuilder;
  reversingModeBind(expr: string): SmoothedAnimationBuilder;
  running(value: boolean): SmoothedAnimationBuilder;
  runningBind(expr: string): SmoothedAnimationBuilder;
  target(value: QtObjectBuilder): SmoothedAnimationBuilder;
  targetBind(expr: string): SmoothedAnimationBuilder;
  to(value: number): SmoothedAnimationBuilder;
  toBind(expr: string): SmoothedAnimationBuilder;
  velocity(value: number): SmoothedAnimationBuilder;
  velocityBind(expr: string): SmoothedAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): SmoothedAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): SmoothedAnimationBuilder;
  onEasingChanged(handler: (arg0: QmlValue) => void): SmoothedAnimationBuilder;
  onFinished(handler: () => void): SmoothedAnimationBuilder;
  onFromChanged(handler: () => void): SmoothedAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): SmoothedAnimationBuilder;
  onMaximumEasingTimeChanged(handler: () => void): SmoothedAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SmoothedAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): SmoothedAnimationBuilder;
  onPropertiesChanged(handler: (arg0: string) => void): SmoothedAnimationBuilder;
  onPropertyChanged(handler: () => void): SmoothedAnimationBuilder;
  onReversingModeChanged(handler: () => void): SmoothedAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): SmoothedAnimationBuilder;
  onStarted(handler: () => void): SmoothedAnimationBuilder;
  onStopped(handler: () => void): SmoothedAnimationBuilder;
  onTargetChanged(handler: () => void): SmoothedAnimationBuilder;
  onToChanged(handler: () => void): SmoothedAnimationBuilder;
  onVelocityChanged(handler: () => void): SmoothedAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): SmoothedAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): SmoothedAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): SmoothedAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): SmoothedAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): SmoothedAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): SmoothedAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): SmoothedAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): SmoothedAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): SmoothedAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): SmoothedAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): SmoothedAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): SmoothedAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): SmoothedAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): SmoothedAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): SmoothedAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): SmoothedAnimationBuilder;
}

export function SmoothedAnimation(): SmoothedAnimationBuilder {
  return new DslBuilderImpl('SmoothedAnimation') as unknown as SmoothedAnimationBuilder;
}

export namespace SmoothedAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('SmoothedAnimation', 'Loops', 'Infinite');
  }
  export namespace ReversingMode {
    export const Eased = createEnumToken('SmoothedAnimation', 'ReversingMode', 'Eased');
    export const Immediate = createEnumToken('SmoothedAnimation', 'ReversingMode', 'Immediate');
    export const Sync = createEnumToken('SmoothedAnimation', 'ReversingMode', 'Sync');
  }
}
