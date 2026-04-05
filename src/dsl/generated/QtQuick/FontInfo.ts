// AUTO-GENERATED — DO NOT EDIT
// Type: FontInfo
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder } from '../../runtime/index.js';
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
export interface FontInfoBuilder {
  id(id: string): FontInfoBuilder;
  child(obj: QmlObjectBuilder): FontInfoBuilder;

  font(value: QmlFont): FontInfoBuilder;
  fontBind(expr: string): FontInfoBuilder;
  objectName(value: string): FontInfoBuilder;
  objectNameBind(expr: string): FontInfoBuilder;
  onFontChanged(handler: () => void): FontInfoBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FontInfoBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): FontInfoBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): FontInfoBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): FontInfoBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): FontInfoBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): FontInfoBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): FontInfoBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): FontInfoBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): FontInfoBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): FontInfoBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): FontInfoBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): FontInfoBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): FontInfoBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): FontInfoBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): FontInfoBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): FontInfoBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): FontInfoBuilder;
}

export function FontInfo(): FontInfoBuilder {
  return new DslBuilderImpl('FontInfo') as unknown as FontInfoBuilder;
}
