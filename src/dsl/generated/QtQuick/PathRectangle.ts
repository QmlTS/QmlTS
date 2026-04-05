// AUTO-GENERATED — DO NOT EDIT
// Type: PathRectangle
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
export interface PathRectangleBuilder {
  id(id: string): PathRectangleBuilder;
  child(obj: QmlObjectBuilder): PathRectangleBuilder;

  bevel(value: boolean): PathRectangleBuilder;
  bevelBind(expr: string): PathRectangleBuilder;
  bottomLeftBevel(value: boolean): PathRectangleBuilder;
  bottomLeftBevelBind(expr: string): PathRectangleBuilder;
  bottomLeftRadius(value: number): PathRectangleBuilder;
  bottomLeftRadiusBind(expr: string): PathRectangleBuilder;
  bottomRightBevel(value: boolean): PathRectangleBuilder;
  bottomRightBevelBind(expr: string): PathRectangleBuilder;
  bottomRightRadius(value: number): PathRectangleBuilder;
  bottomRightRadiusBind(expr: string): PathRectangleBuilder;
  height(value: number): PathRectangleBuilder;
  heightBind(expr: string): PathRectangleBuilder;
  objectName(value: string): PathRectangleBuilder;
  objectNameBind(expr: string): PathRectangleBuilder;
  radius(value: number): PathRectangleBuilder;
  radiusBind(expr: string): PathRectangleBuilder;
  relativeX(value: number): PathRectangleBuilder;
  relativeXBind(expr: string): PathRectangleBuilder;
  relativeY(value: number): PathRectangleBuilder;
  relativeYBind(expr: string): PathRectangleBuilder;
  strokeAdjustment(value: number): PathRectangleBuilder;
  strokeAdjustmentBind(expr: string): PathRectangleBuilder;
  topLeftBevel(value: boolean): PathRectangleBuilder;
  topLeftBevelBind(expr: string): PathRectangleBuilder;
  topLeftRadius(value: number): PathRectangleBuilder;
  topLeftRadiusBind(expr: string): PathRectangleBuilder;
  topRightBevel(value: boolean): PathRectangleBuilder;
  topRightBevelBind(expr: string): PathRectangleBuilder;
  topRightRadius(value: number): PathRectangleBuilder;
  topRightRadiusBind(expr: string): PathRectangleBuilder;
  width(value: number): PathRectangleBuilder;
  widthBind(expr: string): PathRectangleBuilder;
  x(value: number): PathRectangleBuilder;
  xBind(expr: string): PathRectangleBuilder;
  y(value: number): PathRectangleBuilder;
  yBind(expr: string): PathRectangleBuilder;
  onBevelChanged(handler: () => void): PathRectangleBuilder;
  onBottomLeftBevelChanged(handler: () => void): PathRectangleBuilder;
  onBottomLeftRadiusChanged(handler: () => void): PathRectangleBuilder;
  onBottomRightBevelChanged(handler: () => void): PathRectangleBuilder;
  onBottomRightRadiusChanged(handler: () => void): PathRectangleBuilder;
  onChanged(handler: () => void): PathRectangleBuilder;
  onHeightChanged(handler: () => void): PathRectangleBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PathRectangleBuilder;
  onRadiusChanged(handler: () => void): PathRectangleBuilder;
  onRelativeXChanged(handler: () => void): PathRectangleBuilder;
  onRelativeYChanged(handler: () => void): PathRectangleBuilder;
  onStrokeAdjustmentChanged(handler: () => void): PathRectangleBuilder;
  onTopLeftBevelChanged(handler: () => void): PathRectangleBuilder;
  onTopLeftRadiusChanged(handler: () => void): PathRectangleBuilder;
  onTopRightBevelChanged(handler: () => void): PathRectangleBuilder;
  onTopRightRadiusChanged(handler: () => void): PathRectangleBuilder;
  onWidthChanged(handler: () => void): PathRectangleBuilder;
  onXChanged(handler: () => void): PathRectangleBuilder;
  onYChanged(handler: () => void): PathRectangleBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): PathRectangleBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): PathRectangleBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): PathRectangleBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): PathRectangleBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): PathRectangleBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): PathRectangleBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): PathRectangleBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): PathRectangleBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): PathRectangleBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): PathRectangleBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): PathRectangleBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): PathRectangleBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): PathRectangleBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): PathRectangleBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): PathRectangleBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): PathRectangleBuilder;
}

export function PathRectangle(): PathRectangleBuilder {
  return new DslBuilderImpl('PathRectangle') as unknown as PathRectangleBuilder;
}
