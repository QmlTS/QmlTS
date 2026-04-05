// AUTO-GENERATED — DO NOT EDIT
// Type: ScrollView
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
export interface ScrollViewBuilder {
  id(id: string): ScrollViewBuilder;
  child(obj: QmlObjectBuilder): ScrollViewBuilder;

  activeFocusOnTab(value: boolean): ScrollViewBuilder;
  activeFocusOnTabBind(expr: string): ScrollViewBuilder;
  antialiasing(value: boolean): ScrollViewBuilder;
  antialiasingBind(expr: string): ScrollViewBuilder;
  background(value: ItemBuilder): ScrollViewBuilder;
  backgroundBind(expr: string): ScrollViewBuilder;
  baselineOffset(value: number): ScrollViewBuilder;
  baselineOffsetBind(expr: string): ScrollViewBuilder;
  bottomInset(value: number): ScrollViewBuilder;
  bottomInsetBind(expr: string): ScrollViewBuilder;
  bottomPadding(value: number): ScrollViewBuilder;
  bottomPaddingBind(expr: string): ScrollViewBuilder;
  clip(value: boolean): ScrollViewBuilder;
  clipBind(expr: string): ScrollViewBuilder;
  containmentMask(value: QtObjectBuilder): ScrollViewBuilder;
  containmentMaskBind(expr: string): ScrollViewBuilder;
  contentHeight(value: number): ScrollViewBuilder;
  contentHeightBind(expr: string): ScrollViewBuilder;
  contentItem(value: ItemBuilder): ScrollViewBuilder;
  contentItemBind(expr: string): ScrollViewBuilder;
  contentWidth(value: number): ScrollViewBuilder;
  contentWidthBind(expr: string): ScrollViewBuilder;
  enabled(value: boolean): ScrollViewBuilder;
  enabledBind(expr: string): ScrollViewBuilder;
  focus(value: boolean): ScrollViewBuilder;
  focusBind(expr: string): ScrollViewBuilder;
  focusPolicy(value: QmlValue): ScrollViewBuilder;
  focusPolicyBind(expr: string): ScrollViewBuilder;
  focusReason(value: QmlValue): ScrollViewBuilder;
  focusReasonBind(expr: string): ScrollViewBuilder;
  font(value: QmlFont): ScrollViewBuilder;
  fontBind(expr: string): ScrollViewBuilder;
  height(value: number): ScrollViewBuilder;
  heightBind(expr: string): ScrollViewBuilder;
  horizontalPadding(value: number): ScrollViewBuilder;
  horizontalPaddingBind(expr: string): ScrollViewBuilder;
  hoverEnabled(value: boolean): ScrollViewBuilder;
  hoverEnabledBind(expr: string): ScrollViewBuilder;
  implicitHeight(value: number): ScrollViewBuilder;
  implicitHeightBind(expr: string): ScrollViewBuilder;
  implicitWidth(value: number): ScrollViewBuilder;
  implicitWidthBind(expr: string): ScrollViewBuilder;
  leftInset(value: number): ScrollViewBuilder;
  leftInsetBind(expr: string): ScrollViewBuilder;
  leftPadding(value: number): ScrollViewBuilder;
  leftPaddingBind(expr: string): ScrollViewBuilder;
  locale(value: QmlValue): ScrollViewBuilder;
  localeBind(expr: string): ScrollViewBuilder;
  objectName(value: string): ScrollViewBuilder;
  objectNameBind(expr: string): ScrollViewBuilder;
  opacity(value: number): ScrollViewBuilder;
  opacityBind(expr: string): ScrollViewBuilder;
  padding(value: number): ScrollViewBuilder;
  paddingBind(expr: string): ScrollViewBuilder;
  palette(value: PaletteBuilder): ScrollViewBuilder;
  paletteBind(expr: string): ScrollViewBuilder;
  parent(value: ItemBuilder): ScrollViewBuilder;
  parentBind(expr: string): ScrollViewBuilder;
  rightInset(value: number): ScrollViewBuilder;
  rightInsetBind(expr: string): ScrollViewBuilder;
  rightPadding(value: number): ScrollViewBuilder;
  rightPaddingBind(expr: string): ScrollViewBuilder;
  rotation(value: number): ScrollViewBuilder;
  rotationBind(expr: string): ScrollViewBuilder;
  scale(value: number): ScrollViewBuilder;
  scaleBind(expr: string): ScrollViewBuilder;
  smooth(value: boolean): ScrollViewBuilder;
  smoothBind(expr: string): ScrollViewBuilder;
  spacing(value: number): ScrollViewBuilder;
  spacingBind(expr: string): ScrollViewBuilder;
  state(value: string): ScrollViewBuilder;
  stateBind(expr: string): ScrollViewBuilder;
  topInset(value: number): ScrollViewBuilder;
  topInsetBind(expr: string): ScrollViewBuilder;
  topPadding(value: number): ScrollViewBuilder;
  topPaddingBind(expr: string): ScrollViewBuilder;
  transformOrigin(value: QmlValue): ScrollViewBuilder;
  transformOriginBind(expr: string): ScrollViewBuilder;
  verticalPadding(value: number): ScrollViewBuilder;
  verticalPaddingBind(expr: string): ScrollViewBuilder;
  visible(value: boolean): ScrollViewBuilder;
  visibleBind(expr: string): ScrollViewBuilder;
  wheelEnabled(value: boolean): ScrollViewBuilder;
  wheelEnabledBind(expr: string): ScrollViewBuilder;
  width(value: number): ScrollViewBuilder;
  widthBind(expr: string): ScrollViewBuilder;
  x(value: number): ScrollViewBuilder;
  xBind(expr: string): ScrollViewBuilder;
  y(value: number): ScrollViewBuilder;
  yBind(expr: string): ScrollViewBuilder;
  z(value: number): ScrollViewBuilder;
  zBind(expr: string): ScrollViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ScrollViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ScrollViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ScrollViewBuilder;
  onAvailableHeightChanged(handler: () => void): ScrollViewBuilder;
  onAvailableWidthChanged(handler: () => void): ScrollViewBuilder;
  onBackgroundChanged(handler: () => void): ScrollViewBuilder;
  onBaselineOffsetChanged(handler: () => void): ScrollViewBuilder;
  onBottomInsetChanged(handler: () => void): ScrollViewBuilder;
  onBottomPaddingChanged(handler: () => void): ScrollViewBuilder;
  onChildrenChanged(handler: () => void): ScrollViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ScrollViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ScrollViewBuilder;
  onContainmentMaskChanged(handler: () => void): ScrollViewBuilder;
  onContentChildrenChanged(handler: () => void): ScrollViewBuilder;
  onContentHeightChanged(handler: () => void): ScrollViewBuilder;
  onContentItemChanged(handler: () => void): ScrollViewBuilder;
  onContentWidthChanged(handler: () => void): ScrollViewBuilder;
  onEffectiveScrollBarHeightChanged(handler: () => void): ScrollViewBuilder;
  onEffectiveScrollBarWidthChanged(handler: () => void): ScrollViewBuilder;
  onEnabledChanged(handler: () => void): ScrollViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ScrollViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ScrollViewBuilder;
  onFocusReasonChanged(handler: () => void): ScrollViewBuilder;
  onFontChanged(handler: () => void): ScrollViewBuilder;
  onHeightChanged(handler: () => void): ScrollViewBuilder;
  onHorizontalPaddingChanged(handler: () => void): ScrollViewBuilder;
  onHoverEnabledChanged(handler: () => void): ScrollViewBuilder;
  onHoveredChanged(handler: () => void): ScrollViewBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ScrollViewBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ScrollViewBuilder;
  onImplicitContentHeightChanged(handler: () => void): ScrollViewBuilder;
  onImplicitContentWidthChanged(handler: () => void): ScrollViewBuilder;
  onImplicitHeightChanged(handler: () => void): ScrollViewBuilder;
  onImplicitWidthChanged(handler: () => void): ScrollViewBuilder;
  onLeftInsetChanged(handler: () => void): ScrollViewBuilder;
  onLeftPaddingChanged(handler: () => void): ScrollViewBuilder;
  onLocaleChanged(handler: () => void): ScrollViewBuilder;
  onMirroredChanged(handler: () => void): ScrollViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ScrollViewBuilder;
  onOpacityChanged(handler: () => void): ScrollViewBuilder;
  onPaddingChanged(handler: () => void): ScrollViewBuilder;
  onPaletteChanged(handler: () => void): ScrollViewBuilder;
  onPaletteCreated(handler: () => void): ScrollViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ScrollViewBuilder;
  onRightInsetChanged(handler: () => void): ScrollViewBuilder;
  onRightPaddingChanged(handler: () => void): ScrollViewBuilder;
  onRotationChanged(handler: () => void): ScrollViewBuilder;
  onScaleChanged(handler: () => void): ScrollViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ScrollViewBuilder;
  onSpacingChanged(handler: () => void): ScrollViewBuilder;
  onStateChanged(handler: (arg0: string) => void): ScrollViewBuilder;
  onTopInsetChanged(handler: () => void): ScrollViewBuilder;
  onTopPaddingChanged(handler: () => void): ScrollViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ScrollViewBuilder;
  onVerticalPaddingChanged(handler: () => void): ScrollViewBuilder;
  onVisibleChanged(handler: () => void): ScrollViewBuilder;
  onVisibleChildrenChanged(handler: () => void): ScrollViewBuilder;
  onVisualFocusChanged(handler: () => void): ScrollViewBuilder;
  onWheelEnabledChanged(handler: () => void): ScrollViewBuilder;
  onWidthChanged(handler: () => void): ScrollViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ScrollViewBuilder;
  onXChanged(handler: () => void): ScrollViewBuilder;
  onYChanged(handler: () => void): ScrollViewBuilder;
  onZChanged(handler: () => void): ScrollViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ScrollViewBuilder;
  layer(setup: (b: LayerBuilder) => void): ScrollViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ScrollViewBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ScrollViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ScrollViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ScrollViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ScrollViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ScrollViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ScrollViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ScrollViewBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ScrollViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ScrollViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ScrollViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ScrollViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ScrollViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ScrollViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ScrollViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ScrollViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ScrollViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ScrollViewBuilder;
}

export function ScrollView(): ScrollViewBuilder {
  return new DslBuilderImpl('ScrollView') as unknown as ScrollViewBuilder;
}

export namespace ScrollView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ScrollView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ScrollView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ScrollView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ScrollView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ScrollView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ScrollView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ScrollView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ScrollView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ScrollView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ScrollView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ScrollView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ScrollView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ScrollView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ScrollView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ScrollView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ScrollView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ScrollView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ScrollView', 'TransformOrigin', 'BottomRight');
  }
}
