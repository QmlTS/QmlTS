// AUTO-GENERATED — DO NOT EDIT
// Type: ColorAnimation
// Generated from Qt 6.11.0

import type { QmlColor, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
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
export interface ColorAnimationBuilder {
  id(id: string): ColorAnimationBuilder;
  child(obj: QmlObjectBuilder): ColorAnimationBuilder;

  alwaysRunToEnd(value: boolean): ColorAnimationBuilder;
  alwaysRunToEndBind(expr: string): ColorAnimationBuilder;
  duration(value: number): ColorAnimationBuilder;
  durationBind(expr: string): ColorAnimationBuilder;
  easing(value: QmlValue): ColorAnimationBuilder;
  easingBind(expr: string): ColorAnimationBuilder;
  from(value: QmlColor): ColorAnimationBuilder;
  fromBind(expr: string): ColorAnimationBuilder;
  loops(value: number): ColorAnimationBuilder;
  loopsBind(expr: string): ColorAnimationBuilder;
  objectName(value: string): ColorAnimationBuilder;
  objectNameBind(expr: string): ColorAnimationBuilder;
  paused(value: boolean): ColorAnimationBuilder;
  pausedBind(expr: string): ColorAnimationBuilder;
  properties(value: string): ColorAnimationBuilder;
  propertiesBind(expr: string): ColorAnimationBuilder;
  property(value: string): ColorAnimationBuilder;
  propertyBind(expr: string): ColorAnimationBuilder;
  running(value: boolean): ColorAnimationBuilder;
  runningBind(expr: string): ColorAnimationBuilder;
  target(value: QtObjectBuilder): ColorAnimationBuilder;
  targetBind(expr: string): ColorAnimationBuilder;
  to(value: QmlColor): ColorAnimationBuilder;
  toBind(expr: string): ColorAnimationBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): ColorAnimationBuilder;
  onDurationChanged(handler: (arg0: number) => void): ColorAnimationBuilder;
  onEasingChanged(handler: (arg0: QmlValue) => void): ColorAnimationBuilder;
  onFinished(handler: () => void): ColorAnimationBuilder;
  onFromChanged(handler: () => void): ColorAnimationBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): ColorAnimationBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ColorAnimationBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): ColorAnimationBuilder;
  onPropertiesChanged(handler: (arg0: string) => void): ColorAnimationBuilder;
  onPropertyChanged(handler: () => void): ColorAnimationBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): ColorAnimationBuilder;
  onStarted(handler: () => void): ColorAnimationBuilder;
  onStopped(handler: () => void): ColorAnimationBuilder;
  onTargetChanged(handler: () => void): ColorAnimationBuilder;
  onToChanged(handler: () => void): ColorAnimationBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): ColorAnimationBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): ColorAnimationBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): ColorAnimationBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): ColorAnimationBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): ColorAnimationBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): ColorAnimationBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): ColorAnimationBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): ColorAnimationBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): ColorAnimationBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): ColorAnimationBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): ColorAnimationBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): ColorAnimationBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): ColorAnimationBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): ColorAnimationBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): ColorAnimationBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): ColorAnimationBuilder;
}

export function ColorAnimation(): ColorAnimationBuilder {
  return new DslBuilderImpl('ColorAnimation') as unknown as ColorAnimationBuilder;
}

export namespace ColorAnimation {
  export namespace Loops {
    export const Infinite = createEnumToken('ColorAnimation', 'Loops', 'Infinite');
  }
}
