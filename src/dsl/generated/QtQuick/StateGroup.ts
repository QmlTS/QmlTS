// AUTO-GENERATED — DO NOT EDIT
// Type: StateGroup
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
export interface StateGroupBuilder {
  id(id: string): StateGroupBuilder;
  child(obj: QmlObjectBuilder): StateGroupBuilder;

  objectName(value: string): StateGroupBuilder;
  objectNameBind(expr: string): StateGroupBuilder;
  state(value: string): StateGroupBuilder;
  stateBind(expr: string): StateGroupBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): StateGroupBuilder;
  onStateChanged(handler: (arg0: string) => void): StateGroupBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): StateGroupBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): StateGroupBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): StateGroupBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): StateGroupBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): StateGroupBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): StateGroupBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): StateGroupBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): StateGroupBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): StateGroupBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): StateGroupBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): StateGroupBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): StateGroupBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): StateGroupBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): StateGroupBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): StateGroupBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): StateGroupBuilder;
}

export function StateGroup(): StateGroupBuilder {
  return new DslBuilderImpl('StateGroup') as unknown as StateGroupBuilder;
}
