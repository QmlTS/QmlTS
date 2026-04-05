// AUTO-GENERATED — DO NOT EDIT
// Type: Transition
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
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
export interface TransitionBuilder {
  id(id: string): TransitionBuilder;
  child(obj: QmlObjectBuilder): TransitionBuilder;

  enabled(value: boolean): TransitionBuilder;
  enabledBind(expr: string): TransitionBuilder;
  from(value: string): TransitionBuilder;
  fromBind(expr: string): TransitionBuilder;
  objectName(value: string): TransitionBuilder;
  objectNameBind(expr: string): TransitionBuilder;
  reversible(value: boolean): TransitionBuilder;
  reversibleBind(expr: string): TransitionBuilder;
  to(value: string): TransitionBuilder;
  toBind(expr: string): TransitionBuilder;
  onEnabledChanged(handler: () => void): TransitionBuilder;
  onFromChanged(handler: () => void): TransitionBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TransitionBuilder;
  onReversibleChanged(handler: () => void): TransitionBuilder;
  onRunningChanged(handler: () => void): TransitionBuilder;
  onToChanged(handler: () => void): TransitionBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TransitionBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TransitionBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TransitionBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TransitionBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TransitionBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TransitionBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TransitionBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TransitionBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TransitionBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TransitionBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TransitionBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TransitionBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TransitionBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TransitionBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TransitionBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TransitionBuilder;
}

export function Transition(): TransitionBuilder {
  return new DslBuilderImpl('Transition') as unknown as TransitionBuilder;
}
