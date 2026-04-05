// AUTO-GENERATED — DO NOT EDIT
// Type: AnimatedSprite
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlRect, QmlUrl, QmlValue } from '../../runtime/index.js';
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
export interface AnimatedSpriteBuilder {
  id(id: string): AnimatedSpriteBuilder;
  child(obj: QmlObjectBuilder): AnimatedSpriteBuilder;

  activeFocusOnTab(value: boolean): AnimatedSpriteBuilder;
  activeFocusOnTabBind(expr: string): AnimatedSpriteBuilder;
  antialiasing(value: boolean): AnimatedSpriteBuilder;
  antialiasingBind(expr: string): AnimatedSpriteBuilder;
  baselineOffset(value: number): AnimatedSpriteBuilder;
  baselineOffsetBind(expr: string): AnimatedSpriteBuilder;
  clip(value: boolean): AnimatedSpriteBuilder;
  clipBind(expr: string): AnimatedSpriteBuilder;
  containmentMask(value: QtObjectBuilder): AnimatedSpriteBuilder;
  containmentMaskBind(expr: string): AnimatedSpriteBuilder;
  currentFrame(value: number): AnimatedSpriteBuilder;
  currentFrameBind(expr: string): AnimatedSpriteBuilder;
  enabled(value: boolean): AnimatedSpriteBuilder;
  enabledBind(expr: string): AnimatedSpriteBuilder;
  finishBehavior(value: QmlValue): AnimatedSpriteBuilder;
  finishBehaviorBind(expr: string): AnimatedSpriteBuilder;
  focus(value: boolean): AnimatedSpriteBuilder;
  focusBind(expr: string): AnimatedSpriteBuilder;
  focusPolicy(value: QmlValue): AnimatedSpriteBuilder;
  focusPolicyBind(expr: string): AnimatedSpriteBuilder;
  frameCount(value: number): AnimatedSpriteBuilder;
  frameCountBind(expr: string): AnimatedSpriteBuilder;
  frameDuration(value: number): AnimatedSpriteBuilder;
  frameDurationBind(expr: string): AnimatedSpriteBuilder;
  frameHeight(value: number): AnimatedSpriteBuilder;
  frameHeightBind(expr: string): AnimatedSpriteBuilder;
  frameRate(value: number): AnimatedSpriteBuilder;
  frameRateBind(expr: string): AnimatedSpriteBuilder;
  frameSync(value: boolean): AnimatedSpriteBuilder;
  frameSyncBind(expr: string): AnimatedSpriteBuilder;
  frameWidth(value: number): AnimatedSpriteBuilder;
  frameWidthBind(expr: string): AnimatedSpriteBuilder;
  frameX(value: number): AnimatedSpriteBuilder;
  frameXBind(expr: string): AnimatedSpriteBuilder;
  frameY(value: number): AnimatedSpriteBuilder;
  frameYBind(expr: string): AnimatedSpriteBuilder;
  height(value: number): AnimatedSpriteBuilder;
  heightBind(expr: string): AnimatedSpriteBuilder;
  implicitHeight(value: number): AnimatedSpriteBuilder;
  implicitHeightBind(expr: string): AnimatedSpriteBuilder;
  implicitWidth(value: number): AnimatedSpriteBuilder;
  implicitWidthBind(expr: string): AnimatedSpriteBuilder;
  interpolate(value: boolean): AnimatedSpriteBuilder;
  interpolateBind(expr: string): AnimatedSpriteBuilder;
  loops(value: number): AnimatedSpriteBuilder;
  loopsBind(expr: string): AnimatedSpriteBuilder;
  objectName(value: string): AnimatedSpriteBuilder;
  objectNameBind(expr: string): AnimatedSpriteBuilder;
  opacity(value: number): AnimatedSpriteBuilder;
  opacityBind(expr: string): AnimatedSpriteBuilder;
  palette(value: PaletteBuilder): AnimatedSpriteBuilder;
  paletteBind(expr: string): AnimatedSpriteBuilder;
  parent(value: ItemBuilder): AnimatedSpriteBuilder;
  parentBind(expr: string): AnimatedSpriteBuilder;
  paused(value: boolean): AnimatedSpriteBuilder;
  pausedBind(expr: string): AnimatedSpriteBuilder;
  reverse(value: boolean): AnimatedSpriteBuilder;
  reverseBind(expr: string): AnimatedSpriteBuilder;
  rotation(value: number): AnimatedSpriteBuilder;
  rotationBind(expr: string): AnimatedSpriteBuilder;
  running(value: boolean): AnimatedSpriteBuilder;
  runningBind(expr: string): AnimatedSpriteBuilder;
  scale(value: number): AnimatedSpriteBuilder;
  scaleBind(expr: string): AnimatedSpriteBuilder;
  smooth(value: boolean): AnimatedSpriteBuilder;
  smoothBind(expr: string): AnimatedSpriteBuilder;
  source(value: QmlUrl): AnimatedSpriteBuilder;
  sourceBind(expr: string): AnimatedSpriteBuilder;
  state(value: string): AnimatedSpriteBuilder;
  stateBind(expr: string): AnimatedSpriteBuilder;
  transformOrigin(value: QmlValue): AnimatedSpriteBuilder;
  transformOriginBind(expr: string): AnimatedSpriteBuilder;
  visible(value: boolean): AnimatedSpriteBuilder;
  visibleBind(expr: string): AnimatedSpriteBuilder;
  width(value: number): AnimatedSpriteBuilder;
  widthBind(expr: string): AnimatedSpriteBuilder;
  x(value: number): AnimatedSpriteBuilder;
  xBind(expr: string): AnimatedSpriteBuilder;
  y(value: number): AnimatedSpriteBuilder;
  yBind(expr: string): AnimatedSpriteBuilder;
  z(value: number): AnimatedSpriteBuilder;
  zBind(expr: string): AnimatedSpriteBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): AnimatedSpriteBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): AnimatedSpriteBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): AnimatedSpriteBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): AnimatedSpriteBuilder;
  onChildrenChanged(handler: () => void): AnimatedSpriteBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): AnimatedSpriteBuilder;
  onClipChanged(handler: (arg0: boolean) => void): AnimatedSpriteBuilder;
  onContainmentMaskChanged(handler: () => void): AnimatedSpriteBuilder;
  onCurrentFrameChanged(handler: (arg: number) => void): AnimatedSpriteBuilder;
  onEnabledChanged(handler: () => void): AnimatedSpriteBuilder;
  onFinishBehaviorChanged(handler: (arg: QmlValue) => void): AnimatedSpriteBuilder;
  onFinished(handler: () => void): AnimatedSpriteBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): AnimatedSpriteBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): AnimatedSpriteBuilder;
  onFrameCountChanged(handler: (arg: number) => void): AnimatedSpriteBuilder;
  onFrameDurationChanged(handler: (arg: number) => void): AnimatedSpriteBuilder;
  onFrameHeightChanged(handler: (arg: number) => void): AnimatedSpriteBuilder;
  onFrameRateChanged(handler: (arg: number) => void): AnimatedSpriteBuilder;
  onFrameSyncChanged(handler: (arg: boolean) => void): AnimatedSpriteBuilder;
  onFrameWidthChanged(handler: (arg: number) => void): AnimatedSpriteBuilder;
  onFrameXChanged(handler: (arg: number) => void): AnimatedSpriteBuilder;
  onFrameYChanged(handler: (arg: number) => void): AnimatedSpriteBuilder;
  onHeightChanged(handler: () => void): AnimatedSpriteBuilder;
  onImplicitHeightChanged(handler: () => void): AnimatedSpriteBuilder;
  onImplicitWidthChanged(handler: () => void): AnimatedSpriteBuilder;
  onInterpolateChanged(handler: (arg: boolean) => void): AnimatedSpriteBuilder;
  onLoopsChanged(handler: (arg: number) => void): AnimatedSpriteBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): AnimatedSpriteBuilder;
  onOpacityChanged(handler: () => void): AnimatedSpriteBuilder;
  onPaletteChanged(handler: () => void): AnimatedSpriteBuilder;
  onPaletteCreated(handler: () => void): AnimatedSpriteBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): AnimatedSpriteBuilder;
  onPausedChanged(handler: (arg: boolean) => void): AnimatedSpriteBuilder;
  onReverseChanged(handler: (arg: boolean) => void): AnimatedSpriteBuilder;
  onRotationChanged(handler: () => void): AnimatedSpriteBuilder;
  onRunningChanged(handler: (arg: boolean) => void): AnimatedSpriteBuilder;
  onScaleChanged(handler: () => void): AnimatedSpriteBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): AnimatedSpriteBuilder;
  onSourceChanged(handler: (arg: QmlUrl) => void): AnimatedSpriteBuilder;
  onStateChanged(handler: (arg0: string) => void): AnimatedSpriteBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): AnimatedSpriteBuilder;
  onVisibleChanged(handler: () => void): AnimatedSpriteBuilder;
  onVisibleChildrenChanged(handler: () => void): AnimatedSpriteBuilder;
  onWidthChanged(handler: () => void): AnimatedSpriteBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): AnimatedSpriteBuilder;
  onXChanged(handler: () => void): AnimatedSpriteBuilder;
  onYChanged(handler: () => void): AnimatedSpriteBuilder;
  onZChanged(handler: () => void): AnimatedSpriteBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AnimatedSpriteBuilder;
  layer(setup: (b: LayerBuilder) => void): AnimatedSpriteBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): AnimatedSpriteBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): AnimatedSpriteBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): AnimatedSpriteBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): AnimatedSpriteBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): AnimatedSpriteBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): AnimatedSpriteBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): AnimatedSpriteBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): AnimatedSpriteBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): AnimatedSpriteBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): AnimatedSpriteBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): AnimatedSpriteBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): AnimatedSpriteBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): AnimatedSpriteBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): AnimatedSpriteBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): AnimatedSpriteBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): AnimatedSpriteBuilder;
}

export function AnimatedSprite(): AnimatedSpriteBuilder {
  return new DslBuilderImpl('AnimatedSprite') as unknown as AnimatedSpriteBuilder;
}

export namespace AnimatedSprite {
  export namespace FinishBehavior {
    export const FinishAtInitialFrame = createEnumToken(
      'AnimatedSprite',
      'FinishBehavior',
      'FinishAtInitialFrame',
    );
    export const FinishAtFinalFrame = createEnumToken(
      'AnimatedSprite',
      'FinishBehavior',
      'FinishAtFinalFrame',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'AnimatedSprite',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'AnimatedSprite',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('AnimatedSprite', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('AnimatedSprite', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('AnimatedSprite', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('AnimatedSprite', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'AnimatedSprite',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'AnimatedSprite',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoopParameters {
    export const Infinite = createEnumToken('AnimatedSprite', 'LoopParameters', 'Infinite');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AnimatedSprite', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AnimatedSprite', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('AnimatedSprite', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('AnimatedSprite', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('AnimatedSprite', 'TransformOrigin', 'BottomRight');
  }
}
