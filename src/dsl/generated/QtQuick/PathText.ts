// AUTO-GENERATED — DO NOT EDIT
// Type: PathText
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
export interface PathTextBuilder {
  id(id: string): PathTextBuilder;
  child(obj: QmlObjectBuilder): PathTextBuilder;

  font(value: QmlFont): PathTextBuilder;
  fontBind(expr: string): PathTextBuilder;
  objectName(value: string): PathTextBuilder;
  objectNameBind(expr: string): PathTextBuilder;
  text(value: string): PathTextBuilder;
  textBind(expr: string): PathTextBuilder;
  x(value: number): PathTextBuilder;
  xBind(expr: string): PathTextBuilder;
  y(value: number): PathTextBuilder;
  yBind(expr: string): PathTextBuilder;
  onChanged(handler: () => void): PathTextBuilder;
  onFontChanged(handler: () => void): PathTextBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathTextBuilder;
  onTextChanged(handler: () => void): PathTextBuilder;
  onXChanged(handler: () => void): PathTextBuilder;
  onYChanged(handler: () => void): PathTextBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathTextBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathTextBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathTextBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathTextBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathTextBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathTextBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathTextBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathTextBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathTextBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathTextBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathTextBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathTextBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathTextBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathTextBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathTextBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathTextBuilder;
}

export function PathText(): PathTextBuilder {
  return new DslBuilderImpl('PathText') as unknown as PathTextBuilder;
}
