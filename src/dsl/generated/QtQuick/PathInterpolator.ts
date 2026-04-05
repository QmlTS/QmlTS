// AUTO-GENERATED — DO NOT EDIT
// Type: PathInterpolator
// Generated from Qt 6.11.0

import type { QmlObjectBuilder } from '../../runtime/index.js';
import { DslBuilderImpl } from '../../runtime/index.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { PathBuilder } from './Path.js';
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
export interface PathInterpolatorBuilder {
  id(id: string): PathInterpolatorBuilder;
  child(obj: QmlObjectBuilder): PathInterpolatorBuilder;

  objectName(value: string): PathInterpolatorBuilder;
  objectNameBind(expr: string): PathInterpolatorBuilder;
  path(value: PathBuilder): PathInterpolatorBuilder;
  pathBind(expr: string): PathInterpolatorBuilder;
  progress(value: number): PathInterpolatorBuilder;
  progressBind(expr: string): PathInterpolatorBuilder;
  onAngleChanged(handler: () => void): PathInterpolatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathInterpolatorBuilder;
  onPathChanged(handler: () => void): PathInterpolatorBuilder;
  onProgressChanged(handler: () => void): PathInterpolatorBuilder;
  onXChanged(handler: () => void): PathInterpolatorBuilder;
  onYChanged(handler: () => void): PathInterpolatorBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathInterpolatorBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathInterpolatorBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathInterpolatorBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathInterpolatorBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathInterpolatorBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathInterpolatorBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathInterpolatorBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathInterpolatorBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathInterpolatorBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathInterpolatorBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathInterpolatorBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathInterpolatorBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathInterpolatorBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathInterpolatorBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathInterpolatorBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathInterpolatorBuilder;
}

export function PathInterpolator(): PathInterpolatorBuilder {
  return new DslBuilderImpl('PathInterpolator') as unknown as PathInterpolatorBuilder;
}
