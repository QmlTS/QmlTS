// AUTO-GENERATED — DO NOT EDIT
// Type: Sprite
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlUrl, QmlValue } from '../../runtime/index.js';
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
export interface SpriteBuilder {
  id(id: string): SpriteBuilder;
  child(obj: QmlObjectBuilder): SpriteBuilder;

  duration(value: number): SpriteBuilder;
  durationBind(expr: string): SpriteBuilder;
  durationVariation(value: number): SpriteBuilder;
  durationVariationBind(expr: string): SpriteBuilder;
  frameCount(value: number): SpriteBuilder;
  frameCountBind(expr: string): SpriteBuilder;
  frameDuration(value: number): SpriteBuilder;
  frameDurationBind(expr: string): SpriteBuilder;
  frameDurationVariation(value: number): SpriteBuilder;
  frameDurationVariationBind(expr: string): SpriteBuilder;
  frameHeight(value: number): SpriteBuilder;
  frameHeightBind(expr: string): SpriteBuilder;
  frameRate(value: number): SpriteBuilder;
  frameRateBind(expr: string): SpriteBuilder;
  frameRateVariation(value: number): SpriteBuilder;
  frameRateVariationBind(expr: string): SpriteBuilder;
  frameSync(value: boolean): SpriteBuilder;
  frameSyncBind(expr: string): SpriteBuilder;
  frameWidth(value: number): SpriteBuilder;
  frameWidthBind(expr: string): SpriteBuilder;
  frameX(value: number): SpriteBuilder;
  frameXBind(expr: string): SpriteBuilder;
  frameY(value: number): SpriteBuilder;
  frameYBind(expr: string): SpriteBuilder;
  frames(value: number): SpriteBuilder;
  framesBind(expr: string): SpriteBuilder;
  name(value: string): SpriteBuilder;
  nameBind(expr: string): SpriteBuilder;
  objectName(value: string): SpriteBuilder;
  objectNameBind(expr: string): SpriteBuilder;
  randomStart(value: boolean): SpriteBuilder;
  randomStartBind(expr: string): SpriteBuilder;
  reverse(value: boolean): SpriteBuilder;
  reverseBind(expr: string): SpriteBuilder;
  source(value: QmlUrl): SpriteBuilder;
  sourceBind(expr: string): SpriteBuilder;
  to(value: QmlValue): SpriteBuilder;
  toBind(expr: string): SpriteBuilder;
  onDurationChanged(handler: (arg: number) => void): SpriteBuilder;
  onDurationVariationChanged(handler: (arg: number) => void): SpriteBuilder;
  onEntered(handler: () => void): SpriteBuilder;
  onFrameCountChanged(handler: (arg: number) => void): SpriteBuilder;
  onFrameDurationChanged(handler: (arg: number) => void): SpriteBuilder;
  onFrameDurationVariationChanged(handler: (arg: number) => void): SpriteBuilder;
  onFrameHeightChanged(handler: (arg: number) => void): SpriteBuilder;
  onFrameRateChanged(handler: (arg: number) => void): SpriteBuilder;
  onFrameRateVariationChanged(handler: (arg: number) => void): SpriteBuilder;
  onFrameSyncChanged(handler: (arg: boolean) => void): SpriteBuilder;
  onFrameWidthChanged(handler: (arg: number) => void): SpriteBuilder;
  onFrameXChanged(handler: (arg: number) => void): SpriteBuilder;
  onFrameYChanged(handler: (arg: number) => void): SpriteBuilder;
  onNameChanged(handler: (arg: string) => void): SpriteBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SpriteBuilder;
  onRandomStartChanged(handler: (arg: boolean) => void): SpriteBuilder;
  onReverseChanged(handler: (arg: boolean) => void): SpriteBuilder;
  onSourceChanged(handler: (arg: QmlUrl) => void): SpriteBuilder;
  onToChanged(handler: (arg: QmlValue) => void): SpriteBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): SpriteBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): SpriteBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): SpriteBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): SpriteBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): SpriteBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): SpriteBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): SpriteBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): SpriteBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): SpriteBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): SpriteBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): SpriteBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): SpriteBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): SpriteBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): SpriteBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): SpriteBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): SpriteBuilder;
}

export function Sprite(): SpriteBuilder {
  return new DslBuilderImpl('Sprite') as unknown as SpriteBuilder;
}
