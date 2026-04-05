// AUTO-GENERATED — DO NOT EDIT
// Type: SpriteSequence
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { PaletteBuilder } from './Palette.js';
import type { AnchorsBuilder } from './QQuickAnchors.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { LayerBuilder } from './QQuickItemLayer.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface SpriteSequenceBuilder {
  id(id: string): SpriteSequenceBuilder;
  child(obj: QmlObjectBuilder): SpriteSequenceBuilder;

  activeFocusOnTab(value: boolean): SpriteSequenceBuilder;
  activeFocusOnTabBind(expr: string): SpriteSequenceBuilder;
  antialiasing(value: boolean): SpriteSequenceBuilder;
  antialiasingBind(expr: string): SpriteSequenceBuilder;
  baselineOffset(value: number): SpriteSequenceBuilder;
  baselineOffsetBind(expr: string): SpriteSequenceBuilder;
  clip(value: boolean): SpriteSequenceBuilder;
  clipBind(expr: string): SpriteSequenceBuilder;
  containmentMask(value: QtObjectBuilder): SpriteSequenceBuilder;
  containmentMaskBind(expr: string): SpriteSequenceBuilder;
  enabled(value: boolean): SpriteSequenceBuilder;
  enabledBind(expr: string): SpriteSequenceBuilder;
  focus(value: boolean): SpriteSequenceBuilder;
  focusBind(expr: string): SpriteSequenceBuilder;
  focusPolicy(value: QmlValue): SpriteSequenceBuilder;
  focusPolicyBind(expr: string): SpriteSequenceBuilder;
  goalSprite(value: string): SpriteSequenceBuilder;
  goalSpriteBind(expr: string): SpriteSequenceBuilder;
  height(value: number): SpriteSequenceBuilder;
  heightBind(expr: string): SpriteSequenceBuilder;
  implicitHeight(value: number): SpriteSequenceBuilder;
  implicitHeightBind(expr: string): SpriteSequenceBuilder;
  implicitWidth(value: number): SpriteSequenceBuilder;
  implicitWidthBind(expr: string): SpriteSequenceBuilder;
  interpolate(value: boolean): SpriteSequenceBuilder;
  interpolateBind(expr: string): SpriteSequenceBuilder;
  objectName(value: string): SpriteSequenceBuilder;
  objectNameBind(expr: string): SpriteSequenceBuilder;
  opacity(value: number): SpriteSequenceBuilder;
  opacityBind(expr: string): SpriteSequenceBuilder;
  palette(value: PaletteBuilder): SpriteSequenceBuilder;
  paletteBind(expr: string): SpriteSequenceBuilder;
  parent(value: ItemBuilder): SpriteSequenceBuilder;
  parentBind(expr: string): SpriteSequenceBuilder;
  rotation(value: number): SpriteSequenceBuilder;
  rotationBind(expr: string): SpriteSequenceBuilder;
  running(value: boolean): SpriteSequenceBuilder;
  runningBind(expr: string): SpriteSequenceBuilder;
  scale(value: number): SpriteSequenceBuilder;
  scaleBind(expr: string): SpriteSequenceBuilder;
  smooth(value: boolean): SpriteSequenceBuilder;
  smoothBind(expr: string): SpriteSequenceBuilder;
  state(value: string): SpriteSequenceBuilder;
  stateBind(expr: string): SpriteSequenceBuilder;
  transformOrigin(value: QmlValue): SpriteSequenceBuilder;
  transformOriginBind(expr: string): SpriteSequenceBuilder;
  visible(value: boolean): SpriteSequenceBuilder;
  visibleBind(expr: string): SpriteSequenceBuilder;
  width(value: number): SpriteSequenceBuilder;
  widthBind(expr: string): SpriteSequenceBuilder;
  x(value: number): SpriteSequenceBuilder;
  xBind(expr: string): SpriteSequenceBuilder;
  y(value: number): SpriteSequenceBuilder;
  yBind(expr: string): SpriteSequenceBuilder;
  z(value: number): SpriteSequenceBuilder;
  zBind(expr: string): SpriteSequenceBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SpriteSequenceBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SpriteSequenceBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SpriteSequenceBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): SpriteSequenceBuilder;
  onChildrenChanged(handler: () => void): SpriteSequenceBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SpriteSequenceBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SpriteSequenceBuilder;
  onContainmentMaskChanged(handler: () => void): SpriteSequenceBuilder;
  onCurrentSpriteChanged(handler: (arg: string) => void): SpriteSequenceBuilder;
  onEnabledChanged(handler: () => void): SpriteSequenceBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SpriteSequenceBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SpriteSequenceBuilder;
  onGoalSpriteChanged(handler: (arg: string) => void): SpriteSequenceBuilder;
  onHeightChanged(handler: () => void): SpriteSequenceBuilder;
  onImplicitHeightChanged(handler: () => void): SpriteSequenceBuilder;
  onImplicitWidthChanged(handler: () => void): SpriteSequenceBuilder;
  onInterpolateChanged(handler: (arg: boolean) => void): SpriteSequenceBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SpriteSequenceBuilder;
  onOpacityChanged(handler: () => void): SpriteSequenceBuilder;
  onPaletteChanged(handler: () => void): SpriteSequenceBuilder;
  onPaletteCreated(handler: () => void): SpriteSequenceBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SpriteSequenceBuilder;
  onRotationChanged(handler: () => void): SpriteSequenceBuilder;
  onRunningChanged(handler: (arg: boolean) => void): SpriteSequenceBuilder;
  onScaleChanged(handler: () => void): SpriteSequenceBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SpriteSequenceBuilder;
  onStateChanged(handler: (arg0: string) => void): SpriteSequenceBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SpriteSequenceBuilder;
  onVisibleChanged(handler: () => void): SpriteSequenceBuilder;
  onVisibleChildrenChanged(handler: () => void): SpriteSequenceBuilder;
  onWidthChanged(handler: () => void): SpriteSequenceBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SpriteSequenceBuilder;
  onXChanged(handler: () => void): SpriteSequenceBuilder;
  onYChanged(handler: () => void): SpriteSequenceBuilder;
  onZChanged(handler: () => void): SpriteSequenceBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SpriteSequenceBuilder;
  layer(setup: (b: LayerBuilder) => void): SpriteSequenceBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): SpriteSequenceBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): SpriteSequenceBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): SpriteSequenceBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): SpriteSequenceBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): SpriteSequenceBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): SpriteSequenceBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): SpriteSequenceBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): SpriteSequenceBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): SpriteSequenceBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): SpriteSequenceBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): SpriteSequenceBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): SpriteSequenceBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): SpriteSequenceBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): SpriteSequenceBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): SpriteSequenceBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): SpriteSequenceBuilder;
}

export function SpriteSequence(): SpriteSequenceBuilder {
  return new DslBuilderImpl('SpriteSequence') as unknown as SpriteSequenceBuilder;
}

export namespace SpriteSequence {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SpriteSequence',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SpriteSequence',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SpriteSequence', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SpriteSequence', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SpriteSequence', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SpriteSequence', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SpriteSequence',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SpriteSequence',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SpriteSequence', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SpriteSequence', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SpriteSequence', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SpriteSequence', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SpriteSequence', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SpriteSequence', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SpriteSequence', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SpriteSequence', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SpriteSequence', 'TransformOrigin', 'BottomRight');
  }
}
