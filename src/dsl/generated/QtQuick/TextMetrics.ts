// AUTO-GENERATED — DO NOT EDIT
// Type: TextMetrics
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlValue } from '../../runtime/index.js';
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
export interface TextMetricsBuilder {
  id(id: string): TextMetricsBuilder;
  child(obj: QmlObjectBuilder): TextMetricsBuilder;

  elide(value: QmlValue): TextMetricsBuilder;
  elideBind(expr: string): TextMetricsBuilder;
  elideWidth(value: number): TextMetricsBuilder;
  elideWidthBind(expr: string): TextMetricsBuilder;
  font(value: QmlFont): TextMetricsBuilder;
  fontBind(expr: string): TextMetricsBuilder;
  objectName(value: string): TextMetricsBuilder;
  objectNameBind(expr: string): TextMetricsBuilder;
  renderType(value: QmlValue): TextMetricsBuilder;
  renderTypeBind(expr: string): TextMetricsBuilder;
  text(value: string): TextMetricsBuilder;
  textBind(expr: string): TextMetricsBuilder;
  onElideChanged(handler: () => void): TextMetricsBuilder;
  onElideWidthChanged(handler: () => void): TextMetricsBuilder;
  onFontChanged(handler: () => void): TextMetricsBuilder;
  onMetricsChanged(handler: () => void): TextMetricsBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TextMetricsBuilder;
  onRenderTypeChanged(handler: () => void): TextMetricsBuilder;
  onTextChanged(handler: () => void): TextMetricsBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TextMetricsBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TextMetricsBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TextMetricsBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TextMetricsBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TextMetricsBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TextMetricsBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TextMetricsBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TextMetricsBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TextMetricsBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TextMetricsBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TextMetricsBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TextMetricsBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TextMetricsBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TextMetricsBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TextMetricsBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TextMetricsBuilder;
}

export function TextMetrics(): TextMetricsBuilder {
  return new DslBuilderImpl('TextMetrics') as unknown as TextMetricsBuilder;
}
