// AUTO-GENERATED — DO NOT EDIT
// Type: PropertyAnimation
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
export interface PropertyAnimationBuilder {
  id(id: string): PropertyAnimationBuilder;
  child(obj: QmlObjectBuilder): PropertyAnimationBuilder;

  alwaysRunToEnd(value: boolean): PropertyAnimationBuilder;
  alwaysRunToEndBind(expr: string): PropertyAnimationBuilder;
  duration(value: number): PropertyAnimationBuilder;
  durationBind(expr: string): PropertyAnimationBuilder;
  easing(value: QmlValue): PropertyAnimationBuilder;
  easingBind(expr: string): PropertyAnimationBuilder;
  from(value: QmlValue): PropertyAnimationBuilder;
  fromBind(expr: string): PropertyAnimationBuilder;
  loops(value: number): PropertyAnimationBuilder;
  loopsBind(expr: string): PropertyAnimationBuilder;
  objectName(value: string): PropertyAnimationBuilder;
  objectNameBind(expr: string): PropertyAnimationBuilder;
  paused(value: boolean): PropertyAnimationBuilder;
  pausedBind(expr: string): PropertyAnimationBuilder;
  properties(value: string): PropertyAnimationBuilder;
  propertiesBind(expr: string): PropertyAnimationBuilder;
  property(value: string): PropertyAnimationBuilder;
  propertyBind(expr: string): PropertyAnimationBuilder;
  running(value: boolean): PropertyAnimationBuilder;
  runningBind(expr: string): PropertyAnimationBuilder;
  target(value: QtObjectBuilder): PropertyAnimationBuilder;
  targetBind(expr: string): PropertyAnimationBuilder;
  to(value: QmlValue): PropertyAnimationBuilder;
  toBind(expr: string): PropertyAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): PropertyAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): PropertyAnimationBuilder;
  onEasingChanged(handler: (arg0: QmlValue) => void): PropertyAnimationBuilder;
  onFinished(handler: () => void): PropertyAnimationBuilder;
  onFromChanged(handler: () => void): PropertyAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): PropertyAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PropertyAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): PropertyAnimationBuilder;
  onPropertiesChanged(handler: (arg0: string) => void): PropertyAnimationBuilder;
  onPropertyChanged(handler: () => void): PropertyAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): PropertyAnimationBuilder;
  onStarted(handler: () => void): PropertyAnimationBuilder;
  onStopped(handler: () => void): PropertyAnimationBuilder;
  onTargetChanged(handler: () => void): PropertyAnimationBuilder;
  onToChanged(handler: () => void): PropertyAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PropertyAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PropertyAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PropertyAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PropertyAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PropertyAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PropertyAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PropertyAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PropertyAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PropertyAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PropertyAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PropertyAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PropertyAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PropertyAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PropertyAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PropertyAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PropertyAnimationBuilder;
}

export function PropertyAnimation(): PropertyAnimationBuilder {
  return new DslBuilderImpl('PropertyAnimation') as unknown as PropertyAnimationBuilder;
}

export namespace PropertyAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('PropertyAnimation', 'Loops', 'Infinite');
  }
}
