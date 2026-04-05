// AUTO-GENERATED — DO NOT EDIT
// Type: PropertyChanges
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
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
export interface PropertyChangesBuilder {
  id(id: string): PropertyChangesBuilder;
  child(obj: QmlObjectBuilder): PropertyChangesBuilder;

  explicit(value: boolean): PropertyChangesBuilder;
  explicitBind(expr: string): PropertyChangesBuilder;
  objectName(value: string): PropertyChangesBuilder;
  objectNameBind(expr: string): PropertyChangesBuilder;
  restoreEntryValues(value: boolean): PropertyChangesBuilder;
  restoreEntryValuesBind(expr: string): PropertyChangesBuilder;
  target(value: QtObjectBuilder): PropertyChangesBuilder;
  targetBind(expr: string): PropertyChangesBuilder;
  onIsExplicitChanged(handler: () => void): PropertyChangesBuilder;
  onObjectChanged(handler: () => void): PropertyChangesBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PropertyChangesBuilder;
  onRestoreEntryValuesChanged(handler: () => void): PropertyChangesBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PropertyChangesBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PropertyChangesBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PropertyChangesBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PropertyChangesBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PropertyChangesBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PropertyChangesBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PropertyChangesBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PropertyChangesBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PropertyChangesBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PropertyChangesBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PropertyChangesBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PropertyChangesBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PropertyChangesBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PropertyChangesBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PropertyChangesBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PropertyChangesBuilder;
}

export function PropertyChanges(): PropertyChangesBuilder {
  return new DslBuilderImpl('PropertyChanges') as unknown as PropertyChangesBuilder;
}
