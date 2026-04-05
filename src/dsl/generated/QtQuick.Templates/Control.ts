// AUTO-GENERATED — DO NOT EDIT
// Type: Control
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { WindowBuilder } from '../QtQuick/Window.js';
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
import type { ActionGroupAttachedBuilder } from './QQuickActionGroupAttached.js';
import type { ApplicationWindowAttachedBuilder } from './QQuickApplicationWindowAttached.js';
import type { ButtonGroupAttachedBuilder } from './QQuickButtonGroupAttached.js';
import type { DialogButtonBoxAttachedBuilder } from './QQuickDialogButtonBoxAttached.js';
import type { OverlayAttachedBuilder } from './QQuickOverlayAttached.js';
import type { ScrollBarAttachedBuilder } from './QQuickScrollBarAttached.js';
import type { ScrollIndicatorAttachedBuilder } from './QQuickScrollIndicatorAttached.js';
import type { SelectionRectangleAttachedBuilder } from './QQuickSelectionRectangleAttached.js';
import type { SplitViewAttachedBuilder } from './QQuickSplitViewAttached.js';
import type { StackViewAttachedBuilder } from './QQuickStackViewAttached.js';
import type { SwipeDelegateAttachedBuilder } from './QQuickSwipeDelegateAttached.js';
import type { SwipeViewAttachedBuilder } from './QQuickSwipeViewAttached.js';
import type { TabBarAttachedBuilder } from './QQuickTabBarAttached.js';
import type { TextAreaAttachedBuilder } from './QQuickTextAreaAttached.js';
import type { ToolTipAttachedBuilder } from './QQuickToolTipAttached.js';
import type { TumblerAttachedBuilder } from './QQuickTumblerAttached.js';
import type { SplitHandleAttachedBuilder } from './SplitHandle.js';
export interface ControlBuilder {
  id(id: string): ControlBuilder;
  child(obj: QmlObjectBuilder): ControlBuilder;

  activeFocusOnTab(value: boolean): ControlBuilder;
  activeFocusOnTabBind(expr: string): ControlBuilder;
  antialiasing(value: boolean): ControlBuilder;
  antialiasingBind(expr: string): ControlBuilder;
  background(value: ItemBuilder): ControlBuilder;
  backgroundBind(expr: string): ControlBuilder;
  baselineOffset(value: number): ControlBuilder;
  baselineOffsetBind(expr: string): ControlBuilder;
  bottomInset(value: number): ControlBuilder;
  bottomInsetBind(expr: string): ControlBuilder;
  bottomPadding(value: number): ControlBuilder;
  bottomPaddingBind(expr: string): ControlBuilder;
  clip(value: boolean): ControlBuilder;
  clipBind(expr: string): ControlBuilder;
  containmentMask(value: QtObjectBuilder): ControlBuilder;
  containmentMaskBind(expr: string): ControlBuilder;
  contentItem(value: ItemBuilder): ControlBuilder;
  contentItemBind(expr: string): ControlBuilder;
  enabled(value: boolean): ControlBuilder;
  enabledBind(expr: string): ControlBuilder;
  focus(value: boolean): ControlBuilder;
  focusBind(expr: string): ControlBuilder;
  focusPolicy(value: QmlValue): ControlBuilder;
  focusPolicyBind(expr: string): ControlBuilder;
  focusReason(value: QmlValue): ControlBuilder;
  focusReasonBind(expr: string): ControlBuilder;
  font(value: QmlFont): ControlBuilder;
  fontBind(expr: string): ControlBuilder;
  height(value: number): ControlBuilder;
  heightBind(expr: string): ControlBuilder;
  horizontalPadding(value: number): ControlBuilder;
  horizontalPaddingBind(expr: string): ControlBuilder;
  hoverEnabled(value: boolean): ControlBuilder;
  hoverEnabledBind(expr: string): ControlBuilder;
  implicitHeight(value: number): ControlBuilder;
  implicitHeightBind(expr: string): ControlBuilder;
  implicitWidth(value: number): ControlBuilder;
  implicitWidthBind(expr: string): ControlBuilder;
  leftInset(value: number): ControlBuilder;
  leftInsetBind(expr: string): ControlBuilder;
  leftPadding(value: number): ControlBuilder;
  leftPaddingBind(expr: string): ControlBuilder;
  locale(value: QmlValue): ControlBuilder;
  localeBind(expr: string): ControlBuilder;
  objectName(value: string): ControlBuilder;
  objectNameBind(expr: string): ControlBuilder;
  opacity(value: number): ControlBuilder;
  opacityBind(expr: string): ControlBuilder;
  padding(value: number): ControlBuilder;
  paddingBind(expr: string): ControlBuilder;
  palette(value: PaletteBuilder): ControlBuilder;
  paletteBind(expr: string): ControlBuilder;
  parent(value: ItemBuilder): ControlBuilder;
  parentBind(expr: string): ControlBuilder;
  rightInset(value: number): ControlBuilder;
  rightInsetBind(expr: string): ControlBuilder;
  rightPadding(value: number): ControlBuilder;
  rightPaddingBind(expr: string): ControlBuilder;
  rotation(value: number): ControlBuilder;
  rotationBind(expr: string): ControlBuilder;
  scale(value: number): ControlBuilder;
  scaleBind(expr: string): ControlBuilder;
  smooth(value: boolean): ControlBuilder;
  smoothBind(expr: string): ControlBuilder;
  spacing(value: number): ControlBuilder;
  spacingBind(expr: string): ControlBuilder;
  state(value: string): ControlBuilder;
  stateBind(expr: string): ControlBuilder;
  topInset(value: number): ControlBuilder;
  topInsetBind(expr: string): ControlBuilder;
  topPadding(value: number): ControlBuilder;
  topPaddingBind(expr: string): ControlBuilder;
  transformOrigin(value: QmlValue): ControlBuilder;
  transformOriginBind(expr: string): ControlBuilder;
  verticalPadding(value: number): ControlBuilder;
  verticalPaddingBind(expr: string): ControlBuilder;
  visible(value: boolean): ControlBuilder;
  visibleBind(expr: string): ControlBuilder;
  wheelEnabled(value: boolean): ControlBuilder;
  wheelEnabledBind(expr: string): ControlBuilder;
  width(value: number): ControlBuilder;
  widthBind(expr: string): ControlBuilder;
  x(value: number): ControlBuilder;
  xBind(expr: string): ControlBuilder;
  y(value: number): ControlBuilder;
  yBind(expr: string): ControlBuilder;
  z(value: number): ControlBuilder;
  zBind(expr: string): ControlBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ControlBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ControlBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ControlBuilder;
  onAvailableHeightChanged(handler: () => void): ControlBuilder;
  onAvailableWidthChanged(handler: () => void): ControlBuilder;
  onBackgroundChanged(handler: () => void): ControlBuilder;
  onBaselineOffsetChanged(handler: () => void): ControlBuilder;
  onBottomInsetChanged(handler: () => void): ControlBuilder;
  onBottomPaddingChanged(handler: () => void): ControlBuilder;
  onChildrenChanged(handler: () => void): ControlBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ControlBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ControlBuilder;
  onContainmentMaskChanged(handler: () => void): ControlBuilder;
  onContentItemChanged(handler: () => void): ControlBuilder;
  onEnabledChanged(handler: () => void): ControlBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ControlBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ControlBuilder;
  onFocusReasonChanged(handler: () => void): ControlBuilder;
  onFontChanged(handler: () => void): ControlBuilder;
  onHeightChanged(handler: () => void): ControlBuilder;
  onHorizontalPaddingChanged(handler: () => void): ControlBuilder;
  onHoverEnabledChanged(handler: () => void): ControlBuilder;
  onHoveredChanged(handler: () => void): ControlBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ControlBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ControlBuilder;
  onImplicitContentHeightChanged(handler: () => void): ControlBuilder;
  onImplicitContentWidthChanged(handler: () => void): ControlBuilder;
  onImplicitHeightChanged(handler: () => void): ControlBuilder;
  onImplicitWidthChanged(handler: () => void): ControlBuilder;
  onLeftInsetChanged(handler: () => void): ControlBuilder;
  onLeftPaddingChanged(handler: () => void): ControlBuilder;
  onLocaleChanged(handler: () => void): ControlBuilder;
  onMirroredChanged(handler: () => void): ControlBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ControlBuilder;
  onOpacityChanged(handler: () => void): ControlBuilder;
  onPaddingChanged(handler: () => void): ControlBuilder;
  onPaletteChanged(handler: () => void): ControlBuilder;
  onPaletteCreated(handler: () => void): ControlBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ControlBuilder;
  onRightInsetChanged(handler: () => void): ControlBuilder;
  onRightPaddingChanged(handler: () => void): ControlBuilder;
  onRotationChanged(handler: () => void): ControlBuilder;
  onScaleChanged(handler: () => void): ControlBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ControlBuilder;
  onSpacingChanged(handler: () => void): ControlBuilder;
  onStateChanged(handler: (arg0: string) => void): ControlBuilder;
  onTopInsetChanged(handler: () => void): ControlBuilder;
  onTopPaddingChanged(handler: () => void): ControlBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ControlBuilder;
  onVerticalPaddingChanged(handler: () => void): ControlBuilder;
  onVisibleChanged(handler: () => void): ControlBuilder;
  onVisibleChildrenChanged(handler: () => void): ControlBuilder;
  onVisualFocusChanged(handler: () => void): ControlBuilder;
  onWheelEnabledChanged(handler: () => void): ControlBuilder;
  onWidthChanged(handler: () => void): ControlBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ControlBuilder;
  onXChanged(handler: () => void): ControlBuilder;
  onYChanged(handler: () => void): ControlBuilder;
  onZChanged(handler: () => void): ControlBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ControlBuilder;
  layer(setup: (b: LayerBuilder) => void): ControlBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ControlBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ControlBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ControlBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ControlBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ControlBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ControlBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ControlBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ControlBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ControlBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ControlBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ControlBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ControlBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ControlBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ControlBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ControlBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ControlBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ControlBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ControlBuilder;
}

export function Control(): ControlBuilder {
  return new DslBuilderImpl('Control') as unknown as ControlBuilder;
}

export namespace Control {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Control',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Control',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Control', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Control', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Control', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Control', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Control', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Control',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Control',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Control', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Control',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Control', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Control', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Control', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Control', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Control', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Control', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Control', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Control', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Control', 'TransformOrigin', 'BottomRight');
  }
}
