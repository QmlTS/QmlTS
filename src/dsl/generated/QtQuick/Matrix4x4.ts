// AUTO-GENERATED — DO NOT EDIT
// Type: Matrix4x4
// Generated from Qt 6.11.0

import type { QmlMatrix4x4, QmlObjectBuilder } from '../../runtime/index.js';
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
export interface Matrix4x4Builder {
  id(id: string): Matrix4x4Builder;
  child(obj: QmlObjectBuilder): Matrix4x4Builder;

  matrix(value: QmlMatrix4x4): Matrix4x4Builder;
  matrixBind(expr: string): Matrix4x4Builder;
  objectName(value: string): Matrix4x4Builder;
  objectNameBind(expr: string): Matrix4x4Builder;
  onMatrixChanged(handler: () => void): Matrix4x4Builder;
  onObjectNameChanged(handler: (objectName: string) => void): Matrix4x4Builder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): Matrix4x4Builder;
  drag(setup: (b: DragAttachedBuilder) => void): Matrix4x4Builder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): Matrix4x4Builder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): Matrix4x4Builder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): Matrix4x4Builder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): Matrix4x4Builder;
  keys(setup: (b: KeysAttachedBuilder) => void): Matrix4x4Builder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): Matrix4x4Builder;
  listView(setup: (b: ListViewAttachedBuilder) => void): Matrix4x4Builder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): Matrix4x4Builder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): Matrix4x4Builder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): Matrix4x4Builder;
  screen(setup: (b: ScreenAttachedBuilder) => void): Matrix4x4Builder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): Matrix4x4Builder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): Matrix4x4Builder;
  window(setup: (b: WindowAttachedBuilder) => void): Matrix4x4Builder;
}

export function Matrix4x4(): Matrix4x4Builder {
  return new DslBuilderImpl('Matrix4x4') as unknown as Matrix4x4Builder;
}
