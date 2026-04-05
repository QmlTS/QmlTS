// AUTO-GENERATED — DO NOT EDIT
// Type: NumberAnimation
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
export interface NumberAnimationBuilder {
  id(id: string): NumberAnimationBuilder;
  child(obj: QmlObjectBuilder): NumberAnimationBuilder;

  alwaysRunToEnd(value: boolean): NumberAnimationBuilder;
  alwaysRunToEndBind(expr: string): NumberAnimationBuilder;
  duration(value: number): NumberAnimationBuilder;
  durationBind(expr: string): NumberAnimationBuilder;
  easing(value: QmlValue): NumberAnimationBuilder;
  easingBind(expr: string): NumberAnimationBuilder;
  from(value: number): NumberAnimationBuilder;
  fromBind(expr: string): NumberAnimationBuilder;
  loops(value: number): NumberAnimationBuilder;
  loopsBind(expr: string): NumberAnimationBuilder;
  objectName(value: string): NumberAnimationBuilder;
  objectNameBind(expr: string): NumberAnimationBuilder;
  paused(value: boolean): NumberAnimationBuilder;
  pausedBind(expr: string): NumberAnimationBuilder;
  properties(value: string): NumberAnimationBuilder;
  propertiesBind(expr: string): NumberAnimationBuilder;
  property(value: string): NumberAnimationBuilder;
  propertyBind(expr: string): NumberAnimationBuilder;
  running(value: boolean): NumberAnimationBuilder;
  runningBind(expr: string): NumberAnimationBuilder;
  target(value: QtObjectBuilder): NumberAnimationBuilder;
  targetBind(expr: string): NumberAnimationBuilder;
  to(value: number): NumberAnimationBuilder;
  toBind(expr: string): NumberAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): NumberAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): NumberAnimationBuilder;
  onEasingChanged(handler: (arg0: QmlValue) => void): NumberAnimationBuilder;
  onFinished(handler: () => void): NumberAnimationBuilder;
  onFromChanged(handler: () => void): NumberAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): NumberAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): NumberAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): NumberAnimationBuilder;
  onPropertiesChanged(handler: (arg0: string) => void): NumberAnimationBuilder;
  onPropertyChanged(handler: () => void): NumberAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): NumberAnimationBuilder;
  onStarted(handler: () => void): NumberAnimationBuilder;
  onStopped(handler: () => void): NumberAnimationBuilder;
  onTargetChanged(handler: () => void): NumberAnimationBuilder;
  onToChanged(handler: () => void): NumberAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): NumberAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): NumberAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): NumberAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): NumberAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): NumberAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): NumberAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): NumberAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): NumberAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): NumberAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): NumberAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): NumberAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): NumberAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): NumberAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): NumberAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): NumberAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): NumberAnimationBuilder;
}

export function NumberAnimation(): NumberAnimationBuilder {
  return new DslBuilderImpl('NumberAnimation') as unknown as NumberAnimationBuilder;
}

export namespace NumberAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('NumberAnimation', 'Loops', 'Infinite');
  }
}
