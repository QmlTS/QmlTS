// AUTO-GENERATED — DO NOT EDIT
// Type: SplitView
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlFont,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
} from '../../runtime/index.js';
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
export interface SplitViewBuilder {
  id(id: string): SplitViewBuilder;
  child(obj: QmlObjectBuilder): SplitViewBuilder;

  activeFocusOnTab(value: boolean): SplitViewBuilder;
  activeFocusOnTabBind(expr: string): SplitViewBuilder;
  antialiasing(value: boolean): SplitViewBuilder;
  antialiasingBind(expr: string): SplitViewBuilder;
  background(value: ItemBuilder): SplitViewBuilder;
  backgroundBind(expr: string): SplitViewBuilder;
  baselineOffset(value: number): SplitViewBuilder;
  baselineOffsetBind(expr: string): SplitViewBuilder;
  bottomInset(value: number): SplitViewBuilder;
  bottomInsetBind(expr: string): SplitViewBuilder;
  bottomPadding(value: number): SplitViewBuilder;
  bottomPaddingBind(expr: string): SplitViewBuilder;
  clip(value: boolean): SplitViewBuilder;
  clipBind(expr: string): SplitViewBuilder;
  containmentMask(value: QtObjectBuilder): SplitViewBuilder;
  containmentMaskBind(expr: string): SplitViewBuilder;
  contentHeight(value: number): SplitViewBuilder;
  contentHeightBind(expr: string): SplitViewBuilder;
  contentItem(value: ItemBuilder): SplitViewBuilder;
  contentItemBind(expr: string): SplitViewBuilder;
  contentWidth(value: number): SplitViewBuilder;
  contentWidthBind(expr: string): SplitViewBuilder;
  currentIndex(value: number): SplitViewBuilder;
  currentIndexBind(expr: string): SplitViewBuilder;
  enabled(value: boolean): SplitViewBuilder;
  enabledBind(expr: string): SplitViewBuilder;
  focus(value: boolean): SplitViewBuilder;
  focusBind(expr: string): SplitViewBuilder;
  focusPolicy(value: QmlValue): SplitViewBuilder;
  focusPolicyBind(expr: string): SplitViewBuilder;
  focusReason(value: QmlValue): SplitViewBuilder;
  focusReasonBind(expr: string): SplitViewBuilder;
  font(value: QmlFont): SplitViewBuilder;
  fontBind(expr: string): SplitViewBuilder;
  handle(value: QmlComponent): SplitViewBuilder;
  handleBind(expr: string): SplitViewBuilder;
  height(value: number): SplitViewBuilder;
  heightBind(expr: string): SplitViewBuilder;
  horizontalPadding(value: number): SplitViewBuilder;
  horizontalPaddingBind(expr: string): SplitViewBuilder;
  hoverEnabled(value: boolean): SplitViewBuilder;
  hoverEnabledBind(expr: string): SplitViewBuilder;
  implicitHeight(value: number): SplitViewBuilder;
  implicitHeightBind(expr: string): SplitViewBuilder;
  implicitWidth(value: number): SplitViewBuilder;
  implicitWidthBind(expr: string): SplitViewBuilder;
  leftInset(value: number): SplitViewBuilder;
  leftInsetBind(expr: string): SplitViewBuilder;
  leftPadding(value: number): SplitViewBuilder;
  leftPaddingBind(expr: string): SplitViewBuilder;
  locale(value: QmlValue): SplitViewBuilder;
  localeBind(expr: string): SplitViewBuilder;
  objectName(value: string): SplitViewBuilder;
  objectNameBind(expr: string): SplitViewBuilder;
  opacity(value: number): SplitViewBuilder;
  opacityBind(expr: string): SplitViewBuilder;
  orientation(value: QmlValue): SplitViewBuilder;
  orientationBind(expr: string): SplitViewBuilder;
  padding(value: number): SplitViewBuilder;
  paddingBind(expr: string): SplitViewBuilder;
  palette(value: PaletteBuilder): SplitViewBuilder;
  paletteBind(expr: string): SplitViewBuilder;
  parent(value: ItemBuilder): SplitViewBuilder;
  parentBind(expr: string): SplitViewBuilder;
  rightInset(value: number): SplitViewBuilder;
  rightInsetBind(expr: string): SplitViewBuilder;
  rightPadding(value: number): SplitViewBuilder;
  rightPaddingBind(expr: string): SplitViewBuilder;
  rotation(value: number): SplitViewBuilder;
  rotationBind(expr: string): SplitViewBuilder;
  scale(value: number): SplitViewBuilder;
  scaleBind(expr: string): SplitViewBuilder;
  smooth(value: boolean): SplitViewBuilder;
  smoothBind(expr: string): SplitViewBuilder;
  spacing(value: number): SplitViewBuilder;
  spacingBind(expr: string): SplitViewBuilder;
  state(value: string): SplitViewBuilder;
  stateBind(expr: string): SplitViewBuilder;
  topInset(value: number): SplitViewBuilder;
  topInsetBind(expr: string): SplitViewBuilder;
  topPadding(value: number): SplitViewBuilder;
  topPaddingBind(expr: string): SplitViewBuilder;
  transformOrigin(value: QmlValue): SplitViewBuilder;
  transformOriginBind(expr: string): SplitViewBuilder;
  verticalPadding(value: number): SplitViewBuilder;
  verticalPaddingBind(expr: string): SplitViewBuilder;
  visible(value: boolean): SplitViewBuilder;
  visibleBind(expr: string): SplitViewBuilder;
  wheelEnabled(value: boolean): SplitViewBuilder;
  wheelEnabledBind(expr: string): SplitViewBuilder;
  width(value: number): SplitViewBuilder;
  widthBind(expr: string): SplitViewBuilder;
  x(value: number): SplitViewBuilder;
  xBind(expr: string): SplitViewBuilder;
  y(value: number): SplitViewBuilder;
  yBind(expr: string): SplitViewBuilder;
  z(value: number): SplitViewBuilder;
  zBind(expr: string): SplitViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SplitViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SplitViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SplitViewBuilder;
  onAvailableHeightChanged(handler: () => void): SplitViewBuilder;
  onAvailableWidthChanged(handler: () => void): SplitViewBuilder;
  onBackgroundChanged(handler: () => void): SplitViewBuilder;
  onBaselineOffsetChanged(handler: () => void): SplitViewBuilder;
  onBottomInsetChanged(handler: () => void): SplitViewBuilder;
  onBottomPaddingChanged(handler: () => void): SplitViewBuilder;
  onChildrenChanged(handler: () => void): SplitViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SplitViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SplitViewBuilder;
  onContainmentMaskChanged(handler: () => void): SplitViewBuilder;
  onContentChildrenChanged(handler: () => void): SplitViewBuilder;
  onContentHeightChanged(handler: () => void): SplitViewBuilder;
  onContentItemChanged(handler: () => void): SplitViewBuilder;
  onContentWidthChanged(handler: () => void): SplitViewBuilder;
  onCountChanged(handler: () => void): SplitViewBuilder;
  onCurrentIndexChanged(handler: () => void): SplitViewBuilder;
  onCurrentItemChanged(handler: () => void): SplitViewBuilder;
  onEnabledChanged(handler: () => void): SplitViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SplitViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SplitViewBuilder;
  onFocusReasonChanged(handler: () => void): SplitViewBuilder;
  onFontChanged(handler: () => void): SplitViewBuilder;
  onHandleChanged(handler: () => void): SplitViewBuilder;
  onHeightChanged(handler: () => void): SplitViewBuilder;
  onHorizontalPaddingChanged(handler: () => void): SplitViewBuilder;
  onHoverEnabledChanged(handler: () => void): SplitViewBuilder;
  onHoveredChanged(handler: () => void): SplitViewBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): SplitViewBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): SplitViewBuilder;
  onImplicitContentHeightChanged(handler: () => void): SplitViewBuilder;
  onImplicitContentWidthChanged(handler: () => void): SplitViewBuilder;
  onImplicitHeightChanged(handler: () => void): SplitViewBuilder;
  onImplicitWidthChanged(handler: () => void): SplitViewBuilder;
  onLeftInsetChanged(handler: () => void): SplitViewBuilder;
  onLeftPaddingChanged(handler: () => void): SplitViewBuilder;
  onLocaleChanged(handler: () => void): SplitViewBuilder;
  onMirroredChanged(handler: () => void): SplitViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SplitViewBuilder;
  onOpacityChanged(handler: () => void): SplitViewBuilder;
  onOrientationChanged(handler: () => void): SplitViewBuilder;
  onPaddingChanged(handler: () => void): SplitViewBuilder;
  onPaletteChanged(handler: () => void): SplitViewBuilder;
  onPaletteCreated(handler: () => void): SplitViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SplitViewBuilder;
  onResizingChanged(handler: () => void): SplitViewBuilder;
  onRightInsetChanged(handler: () => void): SplitViewBuilder;
  onRightPaddingChanged(handler: () => void): SplitViewBuilder;
  onRotationChanged(handler: () => void): SplitViewBuilder;
  onScaleChanged(handler: () => void): SplitViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SplitViewBuilder;
  onSpacingChanged(handler: () => void): SplitViewBuilder;
  onStateChanged(handler: (arg0: string) => void): SplitViewBuilder;
  onTopInsetChanged(handler: () => void): SplitViewBuilder;
  onTopPaddingChanged(handler: () => void): SplitViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SplitViewBuilder;
  onVerticalPaddingChanged(handler: () => void): SplitViewBuilder;
  onVisibleChanged(handler: () => void): SplitViewBuilder;
  onVisibleChildrenChanged(handler: () => void): SplitViewBuilder;
  onVisualFocusChanged(handler: () => void): SplitViewBuilder;
  onWheelEnabledChanged(handler: () => void): SplitViewBuilder;
  onWidthChanged(handler: () => void): SplitViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SplitViewBuilder;
  onXChanged(handler: () => void): SplitViewBuilder;
  onYChanged(handler: () => void): SplitViewBuilder;
  onZChanged(handler: () => void): SplitViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SplitViewBuilder;
  layer(setup: (b: LayerBuilder) => void): SplitViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SplitViewBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SplitViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SplitViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SplitViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SplitViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SplitViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SplitViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SplitViewBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SplitViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SplitViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SplitViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SplitViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SplitViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SplitViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SplitViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SplitViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SplitViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SplitViewBuilder;
}

export function SplitView(): SplitViewBuilder {
  return new DslBuilderImpl('SplitView') as unknown as SplitViewBuilder;
}

export namespace SplitView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SplitView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SplitView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SplitView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SplitView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SplitView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SplitView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SplitView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SplitView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SplitView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SplitView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SplitView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SplitView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SplitView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SplitView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SplitView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SplitView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SplitView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SplitView', 'TransformOrigin', 'BottomRight');
  }
}
