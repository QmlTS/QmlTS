// AUTO-GENERATED — DO NOT EDIT
// Type: BorderImageMesh
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlSize, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
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
import type { BorderBuilder } from './QQuickScaleGrid.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface BorderImageMeshBuilder {
  id(id: string): BorderImageMeshBuilder;
  child(obj: QmlObjectBuilder): BorderImageMeshBuilder;

  horizontalTileMode(value: QmlValue): BorderImageMeshBuilder;
  horizontalTileModeBind(expr: string): BorderImageMeshBuilder;
  objectName(value: string): BorderImageMeshBuilder;
  objectNameBind(expr: string): BorderImageMeshBuilder;
  size(value: QmlSize): BorderImageMeshBuilder;
  sizeBind(expr: string): BorderImageMeshBuilder;
  verticalTileMode(value: QmlValue): BorderImageMeshBuilder;
  verticalTileModeBind(expr: string): BorderImageMeshBuilder;
  onGeometryChanged(handler: () => void): BorderImageMeshBuilder;
  onHorizontalTileModeChanged(handler: () => void): BorderImageMeshBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): BorderImageMeshBuilder;
  onSizeChanged(handler: () => void): BorderImageMeshBuilder;
  onVerticalTileModeChanged(handler: () => void): BorderImageMeshBuilder;
  border(setup: (b: BorderBuilder) => void): BorderImageMeshBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): BorderImageMeshBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): BorderImageMeshBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): BorderImageMeshBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): BorderImageMeshBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): BorderImageMeshBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): BorderImageMeshBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): BorderImageMeshBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): BorderImageMeshBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): BorderImageMeshBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): BorderImageMeshBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): BorderImageMeshBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): BorderImageMeshBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): BorderImageMeshBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): BorderImageMeshBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): BorderImageMeshBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): BorderImageMeshBuilder;
}

export function BorderImageMesh(): BorderImageMeshBuilder {
  return new DslBuilderImpl('BorderImageMesh') as unknown as BorderImageMeshBuilder;
}

export namespace BorderImageMesh {
  export namespace TileMode {
    export const Stretch = createEnumToken('BorderImageMesh', 'TileMode', 'Stretch');
    export const Repeat = createEnumToken('BorderImageMesh', 'TileMode', 'Repeat');
    export const Round = createEnumToken('BorderImageMesh', 'TileMode', 'Round');
  }
}
