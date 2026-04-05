// AUTO-GENERATED — DO NOT EDIT
// Type: GridMesh
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlSize } from '../../runtime/index.js';
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
export interface GridMeshBuilder {
  id(id: string): GridMeshBuilder;
  child(obj: QmlObjectBuilder): GridMeshBuilder;

  objectName(value: string): GridMeshBuilder;
  objectNameBind(expr: string): GridMeshBuilder;
  resolution(value: QmlSize): GridMeshBuilder;
  resolutionBind(expr: string): GridMeshBuilder;
  onGeometryChanged(handler: () => void): GridMeshBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): GridMeshBuilder;
  onResolutionChanged(handler: () => void): GridMeshBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): GridMeshBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): GridMeshBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): GridMeshBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): GridMeshBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): GridMeshBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): GridMeshBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): GridMeshBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): GridMeshBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): GridMeshBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): GridMeshBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): GridMeshBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): GridMeshBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): GridMeshBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): GridMeshBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): GridMeshBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): GridMeshBuilder;
}

export function GridMesh(): GridMeshBuilder {
  return new DslBuilderImpl('GridMesh') as unknown as GridMeshBuilder;
}
