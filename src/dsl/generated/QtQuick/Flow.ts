// AUTO-GENERATED — DO NOT EDIT
// Type: Flow
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
import type { TransitionBuilder } from './Transition.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
import type { WindowBuilder } from './Window.js';
export interface FlowBuilder {
  id(id: string): FlowBuilder;
  child(obj: QmlObjectBuilder): FlowBuilder;

  activeFocusOnTab(value: boolean): FlowBuilder;
  activeFocusOnTabBind(expr: string): FlowBuilder;
  add(value: TransitionBuilder): FlowBuilder;
  addBind(expr: string): FlowBuilder;
  antialiasing(value: boolean): FlowBuilder;
  antialiasingBind(expr: string): FlowBuilder;
  baselineOffset(value: number): FlowBuilder;
  baselineOffsetBind(expr: string): FlowBuilder;
  bottomPadding(value: number): FlowBuilder;
  bottomPaddingBind(expr: string): FlowBuilder;
  clip(value: boolean): FlowBuilder;
  clipBind(expr: string): FlowBuilder;
  containmentMask(value: QtObjectBuilder): FlowBuilder;
  containmentMaskBind(expr: string): FlowBuilder;
  enabled(value: boolean): FlowBuilder;
  enabledBind(expr: string): FlowBuilder;
  flow(value: QmlValue): FlowBuilder;
  flowBind(expr: string): FlowBuilder;
  focus(value: boolean): FlowBuilder;
  focusBind(expr: string): FlowBuilder;
  focusPolicy(value: QmlValue): FlowBuilder;
  focusPolicyBind(expr: string): FlowBuilder;
  height(value: number): FlowBuilder;
  heightBind(expr: string): FlowBuilder;
  layoutDirection(value: QmlValue): FlowBuilder;
  layoutDirectionBind(expr: string): FlowBuilder;
  leftPadding(value: number): FlowBuilder;
  leftPaddingBind(expr: string): FlowBuilder;
  move(value: TransitionBuilder): FlowBuilder;
  moveBind(expr: string): FlowBuilder;
  objectName(value: string): FlowBuilder;
  objectNameBind(expr: string): FlowBuilder;
  opacity(value: number): FlowBuilder;
  opacityBind(expr: string): FlowBuilder;
  padding(value: number): FlowBuilder;
  paddingBind(expr: string): FlowBuilder;
  palette(value: PaletteBuilder): FlowBuilder;
  paletteBind(expr: string): FlowBuilder;
  parent(value: ItemBuilder): FlowBuilder;
  parentBind(expr: string): FlowBuilder;
  populate(value: TransitionBuilder): FlowBuilder;
  populateBind(expr: string): FlowBuilder;
  rightPadding(value: number): FlowBuilder;
  rightPaddingBind(expr: string): FlowBuilder;
  rotation(value: number): FlowBuilder;
  rotationBind(expr: string): FlowBuilder;
  scale(value: number): FlowBuilder;
  scaleBind(expr: string): FlowBuilder;
  smooth(value: boolean): FlowBuilder;
  smoothBind(expr: string): FlowBuilder;
  spacing(value: number): FlowBuilder;
  spacingBind(expr: string): FlowBuilder;
  state(value: string): FlowBuilder;
  stateBind(expr: string): FlowBuilder;
  topPadding(value: number): FlowBuilder;
  topPaddingBind(expr: string): FlowBuilder;
  transformOrigin(value: QmlValue): FlowBuilder;
  transformOriginBind(expr: string): FlowBuilder;
  visible(value: boolean): FlowBuilder;
  visibleBind(expr: string): FlowBuilder;
  width(value: number): FlowBuilder;
  widthBind(expr: string): FlowBuilder;
  x(value: number): FlowBuilder;
  xBind(expr: string): FlowBuilder;
  y(value: number): FlowBuilder;
  yBind(expr: string): FlowBuilder;
  z(value: number): FlowBuilder;
  zBind(expr: string): FlowBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): FlowBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): FlowBuilder;
  onAddChanged(handler: () => void): FlowBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): FlowBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): FlowBuilder;
  onBottomPaddingChanged(handler: () => void): FlowBuilder;
  onChildrenChanged(handler: () => void): FlowBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): FlowBuilder;
  onClipChanged(handler: (arg0: boolean) => void): FlowBuilder;
  onContainmentMaskChanged(handler: () => void): FlowBuilder;
  onEffectiveLayoutDirectionChanged(handler: () => void): FlowBuilder;
  onEnabledChanged(handler: () => void): FlowBuilder;
  onFlowChanged(handler: () => void): FlowBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): FlowBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): FlowBuilder;
  onHeightChanged(handler: () => void): FlowBuilder;
  onImplicitHeightChanged(handler: () => void): FlowBuilder;
  onImplicitWidthChanged(handler: () => void): FlowBuilder;
  onLayoutDirectionChanged(handler: () => void): FlowBuilder;
  onLeftPaddingChanged(handler: () => void): FlowBuilder;
  onMoveChanged(handler: () => void): FlowBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): FlowBuilder;
  onOpacityChanged(handler: () => void): FlowBuilder;
  onPaddingChanged(handler: () => void): FlowBuilder;
  onPaletteChanged(handler: () => void): FlowBuilder;
  onPaletteCreated(handler: () => void): FlowBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): FlowBuilder;
  onPopulateChanged(handler: () => void): FlowBuilder;
  onPositioningComplete(handler: () => void): FlowBuilder;
  onRightPaddingChanged(handler: () => void): FlowBuilder;
  onRotationChanged(handler: () => void): FlowBuilder;
  onScaleChanged(handler: () => void): FlowBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): FlowBuilder;
  onSpacingChanged(handler: () => void): FlowBuilder;
  onStateChanged(handler: (arg0: string) => void): FlowBuilder;
  onTopPaddingChanged(handler: () => void): FlowBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): FlowBuilder;
  onVisibleChanged(handler: () => void): FlowBuilder;
  onVisibleChildrenChanged(handler: () => void): FlowBuilder;
  onWidthChanged(handler: () => void): FlowBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): FlowBuilder;
  onXChanged(handler: () => void): FlowBuilder;
  onYChanged(handler: () => void): FlowBuilder;
  onZChanged(handler: () => void): FlowBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): FlowBuilder;
  layer(setup: (b: LayerBuilder) => void): FlowBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): FlowBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): FlowBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): FlowBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): FlowBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): FlowBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): FlowBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): FlowBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): FlowBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): FlowBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): FlowBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): FlowBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): FlowBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): FlowBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): FlowBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): FlowBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): FlowBuilder;
}

export function Flow(): FlowBuilder {
  return new DslBuilderImpl('Flow') as unknown as FlowBuilder;
}

export namespace Flow {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Flow',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Flow',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Flow', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Flow', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Flow', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Flow', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Flow', 'Flags', 'ItemObservesViewport');
  }
  export namespace Flow {
    export const LeftToRight = createEnumToken('Flow', 'Flow', 'LeftToRight');
    export const TopToBottom = createEnumToken('Flow', 'Flow', 'TopToBottom');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Flow', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Flow', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Flow',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Flow', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Flow', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Flow', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Flow', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Flow', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Flow', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Flow', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Flow', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Flow', 'TransformOrigin', 'BottomRight');
  }
}
