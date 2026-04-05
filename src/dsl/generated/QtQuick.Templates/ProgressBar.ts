// AUTO-GENERATED — DO NOT EDIT
// Type: ProgressBar
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
export interface ProgressBarBuilder {
  id(id: string): ProgressBarBuilder;
  child(obj: QmlObjectBuilder): ProgressBarBuilder;

  activeFocusOnTab(value: boolean): ProgressBarBuilder;
  activeFocusOnTabBind(expr: string): ProgressBarBuilder;
  antialiasing(value: boolean): ProgressBarBuilder;
  antialiasingBind(expr: string): ProgressBarBuilder;
  background(value: ItemBuilder): ProgressBarBuilder;
  backgroundBind(expr: string): ProgressBarBuilder;
  baselineOffset(value: number): ProgressBarBuilder;
  baselineOffsetBind(expr: string): ProgressBarBuilder;
  bottomInset(value: number): ProgressBarBuilder;
  bottomInsetBind(expr: string): ProgressBarBuilder;
  bottomPadding(value: number): ProgressBarBuilder;
  bottomPaddingBind(expr: string): ProgressBarBuilder;
  clip(value: boolean): ProgressBarBuilder;
  clipBind(expr: string): ProgressBarBuilder;
  containmentMask(value: QtObjectBuilder): ProgressBarBuilder;
  containmentMaskBind(expr: string): ProgressBarBuilder;
  contentItem(value: ItemBuilder): ProgressBarBuilder;
  contentItemBind(expr: string): ProgressBarBuilder;
  enabled(value: boolean): ProgressBarBuilder;
  enabledBind(expr: string): ProgressBarBuilder;
  focus(value: boolean): ProgressBarBuilder;
  focusBind(expr: string): ProgressBarBuilder;
  focusPolicy(value: QmlValue): ProgressBarBuilder;
  focusPolicyBind(expr: string): ProgressBarBuilder;
  focusReason(value: QmlValue): ProgressBarBuilder;
  focusReasonBind(expr: string): ProgressBarBuilder;
  font(value: QmlFont): ProgressBarBuilder;
  fontBind(expr: string): ProgressBarBuilder;
  from(value: number): ProgressBarBuilder;
  fromBind(expr: string): ProgressBarBuilder;
  height(value: number): ProgressBarBuilder;
  heightBind(expr: string): ProgressBarBuilder;
  horizontalPadding(value: number): ProgressBarBuilder;
  horizontalPaddingBind(expr: string): ProgressBarBuilder;
  hoverEnabled(value: boolean): ProgressBarBuilder;
  hoverEnabledBind(expr: string): ProgressBarBuilder;
  implicitHeight(value: number): ProgressBarBuilder;
  implicitHeightBind(expr: string): ProgressBarBuilder;
  implicitWidth(value: number): ProgressBarBuilder;
  implicitWidthBind(expr: string): ProgressBarBuilder;
  indeterminate(value: boolean): ProgressBarBuilder;
  indeterminateBind(expr: string): ProgressBarBuilder;
  leftInset(value: number): ProgressBarBuilder;
  leftInsetBind(expr: string): ProgressBarBuilder;
  leftPadding(value: number): ProgressBarBuilder;
  leftPaddingBind(expr: string): ProgressBarBuilder;
  locale(value: QmlValue): ProgressBarBuilder;
  localeBind(expr: string): ProgressBarBuilder;
  objectName(value: string): ProgressBarBuilder;
  objectNameBind(expr: string): ProgressBarBuilder;
  opacity(value: number): ProgressBarBuilder;
  opacityBind(expr: string): ProgressBarBuilder;
  padding(value: number): ProgressBarBuilder;
  paddingBind(expr: string): ProgressBarBuilder;
  palette(value: PaletteBuilder): ProgressBarBuilder;
  paletteBind(expr: string): ProgressBarBuilder;
  parent(value: ItemBuilder): ProgressBarBuilder;
  parentBind(expr: string): ProgressBarBuilder;
  rightInset(value: number): ProgressBarBuilder;
  rightInsetBind(expr: string): ProgressBarBuilder;
  rightPadding(value: number): ProgressBarBuilder;
  rightPaddingBind(expr: string): ProgressBarBuilder;
  rotation(value: number): ProgressBarBuilder;
  rotationBind(expr: string): ProgressBarBuilder;
  scale(value: number): ProgressBarBuilder;
  scaleBind(expr: string): ProgressBarBuilder;
  smooth(value: boolean): ProgressBarBuilder;
  smoothBind(expr: string): ProgressBarBuilder;
  spacing(value: number): ProgressBarBuilder;
  spacingBind(expr: string): ProgressBarBuilder;
  state(value: string): ProgressBarBuilder;
  stateBind(expr: string): ProgressBarBuilder;
  to(value: number): ProgressBarBuilder;
  toBind(expr: string): ProgressBarBuilder;
  topInset(value: number): ProgressBarBuilder;
  topInsetBind(expr: string): ProgressBarBuilder;
  topPadding(value: number): ProgressBarBuilder;
  topPaddingBind(expr: string): ProgressBarBuilder;
  transformOrigin(value: QmlValue): ProgressBarBuilder;
  transformOriginBind(expr: string): ProgressBarBuilder;
  value(value: number): ProgressBarBuilder;
  valueBind(expr: string): ProgressBarBuilder;
  verticalPadding(value: number): ProgressBarBuilder;
  verticalPaddingBind(expr: string): ProgressBarBuilder;
  visible(value: boolean): ProgressBarBuilder;
  visibleBind(expr: string): ProgressBarBuilder;
  wheelEnabled(value: boolean): ProgressBarBuilder;
  wheelEnabledBind(expr: string): ProgressBarBuilder;
  width(value: number): ProgressBarBuilder;
  widthBind(expr: string): ProgressBarBuilder;
  x(value: number): ProgressBarBuilder;
  xBind(expr: string): ProgressBarBuilder;
  y(value: number): ProgressBarBuilder;
  yBind(expr: string): ProgressBarBuilder;
  z(value: number): ProgressBarBuilder;
  zBind(expr: string): ProgressBarBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): ProgressBarBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): ProgressBarBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): ProgressBarBuilder;
  onAvailableHeightChanged(handler: () => void): ProgressBarBuilder;
  onAvailableWidthChanged(handler: () => void): ProgressBarBuilder;
  onBackgroundChanged(handler: () => void): ProgressBarBuilder;
  onBaselineOffsetChanged(handler: () => void): ProgressBarBuilder;
  onBottomInsetChanged(handler: () => void): ProgressBarBuilder;
  onBottomPaddingChanged(handler: () => void): ProgressBarBuilder;
  onChildrenChanged(handler: () => void): ProgressBarBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): ProgressBarBuilder;
  onClipChanged(handler: (arg0: boolean) => void): ProgressBarBuilder;
  onContainmentMaskChanged(handler: () => void): ProgressBarBuilder;
  onContentItemChanged(handler: () => void): ProgressBarBuilder;
  onEnabledChanged(handler: () => void): ProgressBarBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): ProgressBarBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): ProgressBarBuilder;
  onFocusReasonChanged(handler: () => void): ProgressBarBuilder;
  onFontChanged(handler: () => void): ProgressBarBuilder;
  onFromChanged(handler: () => void): ProgressBarBuilder;
  onHeightChanged(handler: () => void): ProgressBarBuilder;
  onHorizontalPaddingChanged(handler: () => void): ProgressBarBuilder;
  onHoverEnabledChanged(handler: () => void): ProgressBarBuilder;
  onHoveredChanged(handler: () => void): ProgressBarBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): ProgressBarBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): ProgressBarBuilder;
  onImplicitContentHeightChanged(handler: () => void): ProgressBarBuilder;
  onImplicitContentWidthChanged(handler: () => void): ProgressBarBuilder;
  onImplicitHeightChanged(handler: () => void): ProgressBarBuilder;
  onImplicitWidthChanged(handler: () => void): ProgressBarBuilder;
  onIndeterminateChanged(handler: () => void): ProgressBarBuilder;
  onLeftInsetChanged(handler: () => void): ProgressBarBuilder;
  onLeftPaddingChanged(handler: () => void): ProgressBarBuilder;
  onLocaleChanged(handler: () => void): ProgressBarBuilder;
  onMirroredChanged(handler: () => void): ProgressBarBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ProgressBarBuilder;
  onOpacityChanged(handler: () => void): ProgressBarBuilder;
  onPaddingChanged(handler: () => void): ProgressBarBuilder;
  onPaletteChanged(handler: () => void): ProgressBarBuilder;
  onPaletteCreated(handler: () => void): ProgressBarBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): ProgressBarBuilder;
  onPositionChanged(handler: () => void): ProgressBarBuilder;
  onRightInsetChanged(handler: () => void): ProgressBarBuilder;
  onRightPaddingChanged(handler: () => void): ProgressBarBuilder;
  onRotationChanged(handler: () => void): ProgressBarBuilder;
  onScaleChanged(handler: () => void): ProgressBarBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): ProgressBarBuilder;
  onSpacingChanged(handler: () => void): ProgressBarBuilder;
  onStateChanged(handler: (arg0: string) => void): ProgressBarBuilder;
  onToChanged(handler: () => void): ProgressBarBuilder;
  onTopInsetChanged(handler: () => void): ProgressBarBuilder;
  onTopPaddingChanged(handler: () => void): ProgressBarBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): ProgressBarBuilder;
  onValueChanged(handler: () => void): ProgressBarBuilder;
  onVerticalPaddingChanged(handler: () => void): ProgressBarBuilder;
  onVisibleChanged(handler: () => void): ProgressBarBuilder;
  onVisibleChildrenChanged(handler: () => void): ProgressBarBuilder;
  onVisualFocusChanged(handler: () => void): ProgressBarBuilder;
  onVisualPositionChanged(handler: () => void): ProgressBarBuilder;
  onWheelEnabledChanged(handler: () => void): ProgressBarBuilder;
  onWidthChanged(handler: () => void): ProgressBarBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): ProgressBarBuilder;
  onXChanged(handler: () => void): ProgressBarBuilder;
  onYChanged(handler: () => void): ProgressBarBuilder;
  onZChanged(handler: () => void): ProgressBarBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ProgressBarBuilder;
  layer(setup: (b: LayerBuilder) => void): ProgressBarBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ProgressBarBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ProgressBarBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ProgressBarBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ProgressBarBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ProgressBarBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ProgressBarBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ProgressBarBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ProgressBarBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ProgressBarBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ProgressBarBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ProgressBarBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ProgressBarBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ProgressBarBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ProgressBarBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ProgressBarBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ProgressBarBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ProgressBarBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ProgressBarBuilder;
}

export function ProgressBar(): ProgressBarBuilder {
  return new DslBuilderImpl('ProgressBar') as unknown as ProgressBarBuilder;
}

export namespace ProgressBar {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'ProgressBar',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'ProgressBar',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('ProgressBar', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ProgressBar', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ProgressBar', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ProgressBar', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'ProgressBar',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('ProgressBar', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'ProgressBar',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ProgressBar', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ProgressBar', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ProgressBar', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ProgressBar', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ProgressBar', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ProgressBar', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ProgressBar', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ProgressBar', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ProgressBar', 'TransformOrigin', 'BottomRight');
  }
}
