// AUTO-GENERATED — DO NOT EDIT
// Type: FontMetrics
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
export interface FontMetricsBuilder {
  id(id: string): FontMetricsBuilder;
  child(obj: QmlObjectBuilder): FontMetricsBuilder;

  font(value: QmlFont): FontMetricsBuilder;
  fontBind(expr: string): FontMetricsBuilder;
  objectName(value: string): FontMetricsBuilder;
  objectNameBind(expr: string): FontMetricsBuilder;
  onFontChanged(handler: (font: QmlFont) => void): FontMetricsBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FontMetricsBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): FontMetricsBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): FontMetricsBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): FontMetricsBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): FontMetricsBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): FontMetricsBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): FontMetricsBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): FontMetricsBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): FontMetricsBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): FontMetricsBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): FontMetricsBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): FontMetricsBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): FontMetricsBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): FontMetricsBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): FontMetricsBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): FontMetricsBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): FontMetricsBuilder;
}

export function FontMetrics(): FontMetricsBuilder {
  return new DslBuilderImpl('FontMetrics') as unknown as FontMetricsBuilder;
}
