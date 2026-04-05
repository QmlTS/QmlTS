// AUTO-GENERATED — DO NOT EDIT
// Type: Translate
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
export interface TranslateBuilder {
  id(id: string): TranslateBuilder;
  child(obj: QmlObjectBuilder): TranslateBuilder;

  objectName(value: string): TranslateBuilder;
  objectNameBind(expr: string): TranslateBuilder;
  x(value: number): TranslateBuilder;
  xBind(expr: string): TranslateBuilder;
  y(value: number): TranslateBuilder;
  yBind(expr: string): TranslateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TranslateBuilder;
  onXChanged(handler: () => void): TranslateBuilder;
  onYChanged(handler: () => void): TranslateBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TranslateBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TranslateBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TranslateBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TranslateBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TranslateBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TranslateBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TranslateBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TranslateBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TranslateBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TranslateBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TranslateBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TranslateBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TranslateBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TranslateBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TranslateBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TranslateBuilder;
}

export function Translate(): TranslateBuilder {
  return new DslBuilderImpl('Translate') as unknown as TranslateBuilder;
}
