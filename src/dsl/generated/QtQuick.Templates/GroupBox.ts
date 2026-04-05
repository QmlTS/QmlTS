// AUTO-GENERATED — DO NOT EDIT
// Type: GroupBox
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
export interface GroupBoxBuilder {
  id(id: string): GroupBoxBuilder;
  child(obj: QmlObjectBuilder): GroupBoxBuilder;

  activeFocusOnTab(value: boolean): GroupBoxBuilder;
  activeFocusOnTabBind(expr: string): GroupBoxBuilder;
  antialiasing(value: boolean): GroupBoxBuilder;
  antialiasingBind(expr: string): GroupBoxBuilder;
  background(value: ItemBuilder): GroupBoxBuilder;
  backgroundBind(expr: string): GroupBoxBuilder;
  baselineOffset(value: number): GroupBoxBuilder;
  baselineOffsetBind(expr: string): GroupBoxBuilder;
  bottomInset(value: number): GroupBoxBuilder;
  bottomInsetBind(expr: string): GroupBoxBuilder;
  bottomPadding(value: number): GroupBoxBuilder;
  bottomPaddingBind(expr: string): GroupBoxBuilder;
  clip(value: boolean): GroupBoxBuilder;
  clipBind(expr: string): GroupBoxBuilder;
  containmentMask(value: QtObjectBuilder): GroupBoxBuilder;
  containmentMaskBind(expr: string): GroupBoxBuilder;
  contentHeight(value: number): GroupBoxBuilder;
  contentHeightBind(expr: string): GroupBoxBuilder;
  contentItem(value: ItemBuilder): GroupBoxBuilder;
  contentItemBind(expr: string): GroupBoxBuilder;
  contentWidth(value: number): GroupBoxBuilder;
  contentWidthBind(expr: string): GroupBoxBuilder;
  enabled(value: boolean): GroupBoxBuilder;
  enabledBind(expr: string): GroupBoxBuilder;
  focus(value: boolean): GroupBoxBuilder;
  focusBind(expr: string): GroupBoxBuilder;
  focusPolicy(value: QmlValue): GroupBoxBuilder;
  focusPolicyBind(expr: string): GroupBoxBuilder;
  focusReason(value: QmlValue): GroupBoxBuilder;
  focusReasonBind(expr: string): GroupBoxBuilder;
  font(value: QmlFont): GroupBoxBuilder;
  fontBind(expr: string): GroupBoxBuilder;
  height(value: number): GroupBoxBuilder;
  heightBind(expr: string): GroupBoxBuilder;
  horizontalPadding(value: number): GroupBoxBuilder;
  horizontalPaddingBind(expr: string): GroupBoxBuilder;
  hoverEnabled(value: boolean): GroupBoxBuilder;
  hoverEnabledBind(expr: string): GroupBoxBuilder;
  implicitHeight(value: number): GroupBoxBuilder;
  implicitHeightBind(expr: string): GroupBoxBuilder;
  implicitWidth(value: number): GroupBoxBuilder;
  implicitWidthBind(expr: string): GroupBoxBuilder;
  label(value: ItemBuilder): GroupBoxBuilder;
  labelBind(expr: string): GroupBoxBuilder;
  leftInset(value: number): GroupBoxBuilder;
  leftInsetBind(expr: string): GroupBoxBuilder;
  leftPadding(value: number): GroupBoxBuilder;
  leftPaddingBind(expr: string): GroupBoxBuilder;
  locale(value: QmlValue): GroupBoxBuilder;
  localeBind(expr: string): GroupBoxBuilder;
  objectName(value: string): GroupBoxBuilder;
  objectNameBind(expr: string): GroupBoxBuilder;
  opacity(value: number): GroupBoxBuilder;
  opacityBind(expr: string): GroupBoxBuilder;
  padding(value: number): GroupBoxBuilder;
  paddingBind(expr: string): GroupBoxBuilder;
  palette(value: PaletteBuilder): GroupBoxBuilder;
  paletteBind(expr: string): GroupBoxBuilder;
  parent(value: ItemBuilder): GroupBoxBuilder;
  parentBind(expr: string): GroupBoxBuilder;
  rightInset(value: number): GroupBoxBuilder;
  rightInsetBind(expr: string): GroupBoxBuilder;
  rightPadding(value: number): GroupBoxBuilder;
  rightPaddingBind(expr: string): GroupBoxBuilder;
  rotation(value: number): GroupBoxBuilder;
  rotationBind(expr: string): GroupBoxBuilder;
  scale(value: number): GroupBoxBuilder;
  scaleBind(expr: string): GroupBoxBuilder;
  smooth(value: boolean): GroupBoxBuilder;
  smoothBind(expr: string): GroupBoxBuilder;
  spacing(value: number): GroupBoxBuilder;
  spacingBind(expr: string): GroupBoxBuilder;
  state(value: string): GroupBoxBuilder;
  stateBind(expr: string): GroupBoxBuilder;
  title(value: string): GroupBoxBuilder;
  titleBind(expr: string): GroupBoxBuilder;
  topInset(value: number): GroupBoxBuilder;
  topInsetBind(expr: string): GroupBoxBuilder;
  topPadding(value: number): GroupBoxBuilder;
  topPaddingBind(expr: string): GroupBoxBuilder;
  transformOrigin(value: QmlValue): GroupBoxBuilder;
  transformOriginBind(expr: string): GroupBoxBuilder;
  verticalPadding(value: number): GroupBoxBuilder;
  verticalPaddingBind(expr: string): GroupBoxBuilder;
  visible(value: boolean): GroupBoxBuilder;
  visibleBind(expr: string): GroupBoxBuilder;
  wheelEnabled(value: boolean): GroupBoxBuilder;
  wheelEnabledBind(expr: string): GroupBoxBuilder;
  width(value: number): GroupBoxBuilder;
  widthBind(expr: string): GroupBoxBuilder;
  x(value: number): GroupBoxBuilder;
  xBind(expr: string): GroupBoxBuilder;
  y(value: number): GroupBoxBuilder;
  yBind(expr: string): GroupBoxBuilder;
  z(value: number): GroupBoxBuilder;
  zBind(expr: string): GroupBoxBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): GroupBoxBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): GroupBoxBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): GroupBoxBuilder;
  onAvailableHeightChanged(handler: () => void): GroupBoxBuilder;
  onAvailableWidthChanged(handler: () => void): GroupBoxBuilder;
  onBackgroundChanged(handler: () => void): GroupBoxBuilder;
  onBaselineOffsetChanged(handler: () => void): GroupBoxBuilder;
  onBottomInsetChanged(handler: () => void): GroupBoxBuilder;
  onBottomPaddingChanged(handler: () => void): GroupBoxBuilder;
  onChildrenChanged(handler: () => void): GroupBoxBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): GroupBoxBuilder;
  onClipChanged(handler: (arg0: boolean) => void): GroupBoxBuilder;
  onContainmentMaskChanged(handler: () => void): GroupBoxBuilder;
  onContentChildrenChanged(handler: () => void): GroupBoxBuilder;
  onContentHeightChanged(handler: () => void): GroupBoxBuilder;
  onContentItemChanged(handler: () => void): GroupBoxBuilder;
  onContentWidthChanged(handler: () => void): GroupBoxBuilder;
  onEnabledChanged(handler: () => void): GroupBoxBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): GroupBoxBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): GroupBoxBuilder;
  onFocusReasonChanged(handler: () => void): GroupBoxBuilder;
  onFontChanged(handler: () => void): GroupBoxBuilder;
  onHeightChanged(handler: () => void): GroupBoxBuilder;
  onHorizontalPaddingChanged(handler: () => void): GroupBoxBuilder;
  onHoverEnabledChanged(handler: () => void): GroupBoxBuilder;
  onHoveredChanged(handler: () => void): GroupBoxBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): GroupBoxBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): GroupBoxBuilder;
  onImplicitContentHeightChanged(handler: () => void): GroupBoxBuilder;
  onImplicitContentWidthChanged(handler: () => void): GroupBoxBuilder;
  onImplicitHeightChanged(handler: () => void): GroupBoxBuilder;
  onImplicitLabelHeightChanged(handler: () => void): GroupBoxBuilder;
  onImplicitLabelWidthChanged(handler: () => void): GroupBoxBuilder;
  onImplicitWidthChanged(handler: () => void): GroupBoxBuilder;
  onLabelChanged(handler: () => void): GroupBoxBuilder;
  onLeftInsetChanged(handler: () => void): GroupBoxBuilder;
  onLeftPaddingChanged(handler: () => void): GroupBoxBuilder;
  onLocaleChanged(handler: () => void): GroupBoxBuilder;
  onMirroredChanged(handler: () => void): GroupBoxBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): GroupBoxBuilder;
  onOpacityChanged(handler: () => void): GroupBoxBuilder;
  onPaddingChanged(handler: () => void): GroupBoxBuilder;
  onPaletteChanged(handler: () => void): GroupBoxBuilder;
  onPaletteCreated(handler: () => void): GroupBoxBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): GroupBoxBuilder;
  onRightInsetChanged(handler: () => void): GroupBoxBuilder;
  onRightPaddingChanged(handler: () => void): GroupBoxBuilder;
  onRotationChanged(handler: () => void): GroupBoxBuilder;
  onScaleChanged(handler: () => void): GroupBoxBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): GroupBoxBuilder;
  onSpacingChanged(handler: () => void): GroupBoxBuilder;
  onStateChanged(handler: (arg0: string) => void): GroupBoxBuilder;
  onTitleChanged(handler: () => void): GroupBoxBuilder;
  onTopInsetChanged(handler: () => void): GroupBoxBuilder;
  onTopPaddingChanged(handler: () => void): GroupBoxBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): GroupBoxBuilder;
  onVerticalPaddingChanged(handler: () => void): GroupBoxBuilder;
  onVisibleChanged(handler: () => void): GroupBoxBuilder;
  onVisibleChildrenChanged(handler: () => void): GroupBoxBuilder;
  onVisualFocusChanged(handler: () => void): GroupBoxBuilder;
  onWheelEnabledChanged(handler: () => void): GroupBoxBuilder;
  onWidthChanged(handler: () => void): GroupBoxBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): GroupBoxBuilder;
  onXChanged(handler: () => void): GroupBoxBuilder;
  onYChanged(handler: () => void): GroupBoxBuilder;
  onZChanged(handler: () => void): GroupBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): GroupBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): GroupBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): GroupBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): GroupBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): GroupBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): GroupBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): GroupBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): GroupBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): GroupBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): GroupBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): GroupBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): GroupBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): GroupBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): GroupBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): GroupBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): GroupBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): GroupBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): GroupBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): GroupBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): GroupBoxBuilder;
}

export function GroupBox(): GroupBoxBuilder {
  return new DslBuilderImpl('GroupBox') as unknown as GroupBoxBuilder;
}

export namespace GroupBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'GroupBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'GroupBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('GroupBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('GroupBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('GroupBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('GroupBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'GroupBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('GroupBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'GroupBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('GroupBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('GroupBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('GroupBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('GroupBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('GroupBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('GroupBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('GroupBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('GroupBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('GroupBox', 'TransformOrigin', 'BottomRight');
  }
}
