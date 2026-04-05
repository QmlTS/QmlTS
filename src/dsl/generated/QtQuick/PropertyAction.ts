// AUTO-GENERATED — DO NOT EDIT
// Type: PropertyAction
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
export interface PropertyActionBuilder {
  id(id: string): PropertyActionBuilder;
  child(obj: QmlObjectBuilder): PropertyActionBuilder;

  alwaysRunToEnd(value: boolean): PropertyActionBuilder;
  alwaysRunToEndBind(expr: string): PropertyActionBuilder;
  loops(value: number): PropertyActionBuilder;
  loopsBind(expr: string): PropertyActionBuilder;
  objectName(value: string): PropertyActionBuilder;
  objectNameBind(expr: string): PropertyActionBuilder;
  paused(value: boolean): PropertyActionBuilder;
  pausedBind(expr: string): PropertyActionBuilder;
  properties(value: string): PropertyActionBuilder;
  propertiesBind(expr: string): PropertyActionBuilder;
  property(value: string): PropertyActionBuilder;
  propertyBind(expr: string): PropertyActionBuilder;
  running(value: boolean): PropertyActionBuilder;
  runningBind(expr: string): PropertyActionBuilder;
  target(value: QtObjectBuilder): PropertyActionBuilder;
  targetBind(expr: string): PropertyActionBuilder;
  value(value: QmlValue): PropertyActionBuilder;
  valueBind(expr: string): PropertyActionBuilder;
  onAlwaysRunToEndChanged(handler: (arg0: boolean) => void): PropertyActionBuilder;
  onFinished(handler: () => void): PropertyActionBuilder;
  onLoopCountChanged(handler: (arg0: number) => void): PropertyActionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PropertyActionBuilder;
  onPausedChanged(handler: (arg0: boolean) => void): PropertyActionBuilder;
  onPropertiesChanged(handler: (arg0: string) => void): PropertyActionBuilder;
  onPropertyChanged(handler: () => void): PropertyActionBuilder;
  onRunningChanged(handler: (arg0: boolean) => void): PropertyActionBuilder;
  onStarted(handler: () => void): PropertyActionBuilder;
  onStopped(handler: () => void): PropertyActionBuilder;
  onTargetChanged(handler: () => void): PropertyActionBuilder;
  onValueChanged(handler: (arg0: QmlValue) => void): PropertyActionBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PropertyActionBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PropertyActionBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PropertyActionBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PropertyActionBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PropertyActionBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PropertyActionBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PropertyActionBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PropertyActionBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PropertyActionBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PropertyActionBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PropertyActionBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PropertyActionBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PropertyActionBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PropertyActionBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PropertyActionBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PropertyActionBuilder;
}

export function PropertyAction(): PropertyActionBuilder {
  return new DslBuilderImpl('PropertyAction') as unknown as PropertyActionBuilder;
}

export namespace PropertyAction {
  export namespace Loops {
    export const Infinite = createEnumToken('PropertyAction', 'Loops', 'Infinite');
  }
}
