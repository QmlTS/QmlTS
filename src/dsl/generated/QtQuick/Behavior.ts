// AUTO-GENERATED — DO NOT EDIT
// Type: Behavior
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
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
export interface BehaviorBuilder {
  id(id: string): BehaviorBuilder;
  child(obj: QmlObjectBuilder): BehaviorBuilder;

  animation(value: QmlValue): BehaviorBuilder;
  animationBind(expr: string): BehaviorBuilder;
  enabled(value: boolean): BehaviorBuilder;
  enabledBind(expr: string): BehaviorBuilder;
  objectName(value: string): BehaviorBuilder;
  objectNameBind(expr: string): BehaviorBuilder;
  onEnabledChanged(handler: () => void): BehaviorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): BehaviorBuilder;
  onTargetPropertyChanged(handler: () => void): BehaviorBuilder;
  onTargetValueChanged(handler: () => void): BehaviorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): BehaviorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): BehaviorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): BehaviorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): BehaviorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): BehaviorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): BehaviorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): BehaviorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): BehaviorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): BehaviorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): BehaviorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): BehaviorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): BehaviorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): BehaviorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): BehaviorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): BehaviorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): BehaviorBuilder;
}

export function Behavior(): BehaviorBuilder {
  return new DslBuilderImpl('Behavior') as unknown as BehaviorBuilder;
}
