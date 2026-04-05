// AUTO-GENERATED — DO NOT EDIT
// Type: PageIndicator
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
export interface PageIndicatorBuilder {
  id(id: string): PageIndicatorBuilder;
  child(obj: QmlObjectBuilder): PageIndicatorBuilder;

  activeFocusOnTab(value: boolean): PageIndicatorBuilder;
  activeFocusOnTabBind(expr: string): PageIndicatorBuilder;
  antialiasing(value: boolean): PageIndicatorBuilder;
  antialiasingBind(expr: string): PageIndicatorBuilder;
  background(value: ItemBuilder): PageIndicatorBuilder;
  backgroundBind(expr: string): PageIndicatorBuilder;
  baselineOffset(value: number): PageIndicatorBuilder;
  baselineOffsetBind(expr: string): PageIndicatorBuilder;
  bottomInset(value: number): PageIndicatorBuilder;
  bottomInsetBind(expr: string): PageIndicatorBuilder;
  bottomPadding(value: number): PageIndicatorBuilder;
  bottomPaddingBind(expr: string): PageIndicatorBuilder;
  clip(value: boolean): PageIndicatorBuilder;
  clipBind(expr: string): PageIndicatorBuilder;
  containmentMask(value: QtObjectBuilder): PageIndicatorBuilder;
  containmentMaskBind(expr: string): PageIndicatorBuilder;
  contentItem(value: ItemBuilder): PageIndicatorBuilder;
  contentItemBind(expr: string): PageIndicatorBuilder;
  count(value: number): PageIndicatorBuilder;
  countBind(expr: string): PageIndicatorBuilder;
  currentIndex(value: number): PageIndicatorBuilder;
  currentIndexBind(expr: string): PageIndicatorBuilder;
  delegate(value: QmlComponent): PageIndicatorBuilder;
  delegateBind(expr: string): PageIndicatorBuilder;
  enabled(value: boolean): PageIndicatorBuilder;
  enabledBind(expr: string): PageIndicatorBuilder;
  focus(value: boolean): PageIndicatorBuilder;
  focusBind(expr: string): PageIndicatorBuilder;
  focusPolicy(value: QmlValue): PageIndicatorBuilder;
  focusPolicyBind(expr: string): PageIndicatorBuilder;
  focusReason(value: QmlValue): PageIndicatorBuilder;
  focusReasonBind(expr: string): PageIndicatorBuilder;
  font(value: QmlFont): PageIndicatorBuilder;
  fontBind(expr: string): PageIndicatorBuilder;
  height(value: number): PageIndicatorBuilder;
  heightBind(expr: string): PageIndicatorBuilder;
  horizontalPadding(value: number): PageIndicatorBuilder;
  horizontalPaddingBind(expr: string): PageIndicatorBuilder;
  hoverEnabled(value: boolean): PageIndicatorBuilder;
  hoverEnabledBind(expr: string): PageIndicatorBuilder;
  implicitHeight(value: number): PageIndicatorBuilder;
  implicitHeightBind(expr: string): PageIndicatorBuilder;
  implicitWidth(value: number): PageIndicatorBuilder;
  implicitWidthBind(expr: string): PageIndicatorBuilder;
  interactive(value: boolean): PageIndicatorBuilder;
  interactiveBind(expr: string): PageIndicatorBuilder;
  leftInset(value: number): PageIndicatorBuilder;
  leftInsetBind(expr: string): PageIndicatorBuilder;
  leftPadding(value: number): PageIndicatorBuilder;
  leftPaddingBind(expr: string): PageIndicatorBuilder;
  locale(value: QmlValue): PageIndicatorBuilder;
  localeBind(expr: string): PageIndicatorBuilder;
  objectName(value: string): PageIndicatorBuilder;
  objectNameBind(expr: string): PageIndicatorBuilder;
  opacity(value: number): PageIndicatorBuilder;
  opacityBind(expr: string): PageIndicatorBuilder;
  padding(value: number): PageIndicatorBuilder;
  paddingBind(expr: string): PageIndicatorBuilder;
  palette(value: PaletteBuilder): PageIndicatorBuilder;
  paletteBind(expr: string): PageIndicatorBuilder;
  parent(value: ItemBuilder): PageIndicatorBuilder;
  parentBind(expr: string): PageIndicatorBuilder;
  rightInset(value: number): PageIndicatorBuilder;
  rightInsetBind(expr: string): PageIndicatorBuilder;
  rightPadding(value: number): PageIndicatorBuilder;
  rightPaddingBind(expr: string): PageIndicatorBuilder;
  rotation(value: number): PageIndicatorBuilder;
  rotationBind(expr: string): PageIndicatorBuilder;
  scale(value: number): PageIndicatorBuilder;
  scaleBind(expr: string): PageIndicatorBuilder;
  smooth(value: boolean): PageIndicatorBuilder;
  smoothBind(expr: string): PageIndicatorBuilder;
  spacing(value: number): PageIndicatorBuilder;
  spacingBind(expr: string): PageIndicatorBuilder;
  state(value: string): PageIndicatorBuilder;
  stateBind(expr: string): PageIndicatorBuilder;
  topInset(value: number): PageIndicatorBuilder;
  topInsetBind(expr: string): PageIndicatorBuilder;
  topPadding(value: number): PageIndicatorBuilder;
  topPaddingBind(expr: string): PageIndicatorBuilder;
  transformOrigin(value: QmlValue): PageIndicatorBuilder;
  transformOriginBind(expr: string): PageIndicatorBuilder;
  verticalPadding(value: number): PageIndicatorBuilder;
  verticalPaddingBind(expr: string): PageIndicatorBuilder;
  visible(value: boolean): PageIndicatorBuilder;
  visibleBind(expr: string): PageIndicatorBuilder;
  wheelEnabled(value: boolean): PageIndicatorBuilder;
  wheelEnabledBind(expr: string): PageIndicatorBuilder;
  width(value: number): PageIndicatorBuilder;
  widthBind(expr: string): PageIndicatorBuilder;
  x(value: number): PageIndicatorBuilder;
  xBind(expr: string): PageIndicatorBuilder;
  y(value: number): PageIndicatorBuilder;
  yBind(expr: string): PageIndicatorBuilder;
  z(value: number): PageIndicatorBuilder;
  zBind(expr: string): PageIndicatorBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): PageIndicatorBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): PageIndicatorBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): PageIndicatorBuilder;
  onAvailableHeightChanged(handler: () => void): PageIndicatorBuilder;
  onAvailableWidthChanged(handler: () => void): PageIndicatorBuilder;
  onBackgroundChanged(handler: () => void): PageIndicatorBuilder;
  onBaselineOffsetChanged(handler: () => void): PageIndicatorBuilder;
  onBottomInsetChanged(handler: () => void): PageIndicatorBuilder;
  onBottomPaddingChanged(handler: () => void): PageIndicatorBuilder;
  onChildrenChanged(handler: () => void): PageIndicatorBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): PageIndicatorBuilder;
  onClipChanged(handler: (arg0: boolean) => void): PageIndicatorBuilder;
  onContainmentMaskChanged(handler: () => void): PageIndicatorBuilder;
  onContentItemChanged(handler: () => void): PageIndicatorBuilder;
  onCountChanged(handler: () => void): PageIndicatorBuilder;
  onCurrentIndexChanged(handler: () => void): PageIndicatorBuilder;
  onDelegateChanged(handler: () => void): PageIndicatorBuilder;
  onEnabledChanged(handler: () => void): PageIndicatorBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): PageIndicatorBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): PageIndicatorBuilder;
  onFocusReasonChanged(handler: () => void): PageIndicatorBuilder;
  onFontChanged(handler: () => void): PageIndicatorBuilder;
  onHeightChanged(handler: () => void): PageIndicatorBuilder;
  onHorizontalPaddingChanged(handler: () => void): PageIndicatorBuilder;
  onHoverEnabledChanged(handler: () => void): PageIndicatorBuilder;
  onHoveredChanged(handler: () => void): PageIndicatorBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): PageIndicatorBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): PageIndicatorBuilder;
  onImplicitContentHeightChanged(handler: () => void): PageIndicatorBuilder;
  onImplicitContentWidthChanged(handler: () => void): PageIndicatorBuilder;
  onImplicitHeightChanged(handler: () => void): PageIndicatorBuilder;
  onImplicitWidthChanged(handler: () => void): PageIndicatorBuilder;
  onInteractiveChanged(handler: () => void): PageIndicatorBuilder;
  onLeftInsetChanged(handler: () => void): PageIndicatorBuilder;
  onLeftPaddingChanged(handler: () => void): PageIndicatorBuilder;
  onLocaleChanged(handler: () => void): PageIndicatorBuilder;
  onMirroredChanged(handler: () => void): PageIndicatorBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PageIndicatorBuilder;
  onOpacityChanged(handler: () => void): PageIndicatorBuilder;
  onPaddingChanged(handler: () => void): PageIndicatorBuilder;
  onPaletteChanged(handler: () => void): PageIndicatorBuilder;
  onPaletteCreated(handler: () => void): PageIndicatorBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): PageIndicatorBuilder;
  onRightInsetChanged(handler: () => void): PageIndicatorBuilder;
  onRightPaddingChanged(handler: () => void): PageIndicatorBuilder;
  onRotationChanged(handler: () => void): PageIndicatorBuilder;
  onScaleChanged(handler: () => void): PageIndicatorBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): PageIndicatorBuilder;
  onSpacingChanged(handler: () => void): PageIndicatorBuilder;
  onStateChanged(handler: (arg0: string) => void): PageIndicatorBuilder;
  onTopInsetChanged(handler: () => void): PageIndicatorBuilder;
  onTopPaddingChanged(handler: () => void): PageIndicatorBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): PageIndicatorBuilder;
  onVerticalPaddingChanged(handler: () => void): PageIndicatorBuilder;
  onVisibleChanged(handler: () => void): PageIndicatorBuilder;
  onVisibleChildrenChanged(handler: () => void): PageIndicatorBuilder;
  onVisualFocusChanged(handler: () => void): PageIndicatorBuilder;
  onWheelEnabledChanged(handler: () => void): PageIndicatorBuilder;
  onWidthChanged(handler: () => void): PageIndicatorBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): PageIndicatorBuilder;
  onXChanged(handler: () => void): PageIndicatorBuilder;
  onYChanged(handler: () => void): PageIndicatorBuilder;
  onZChanged(handler: () => void): PageIndicatorBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PageIndicatorBuilder;
  layer(setup: (b: LayerBuilder) => void): PageIndicatorBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): PageIndicatorBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): PageIndicatorBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): PageIndicatorBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): PageIndicatorBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): PageIndicatorBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): PageIndicatorBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): PageIndicatorBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): PageIndicatorBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): PageIndicatorBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): PageIndicatorBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): PageIndicatorBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): PageIndicatorBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): PageIndicatorBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): PageIndicatorBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): PageIndicatorBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): PageIndicatorBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): PageIndicatorBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): PageIndicatorBuilder;
}

export function PageIndicator(): PageIndicatorBuilder {
  return new DslBuilderImpl('PageIndicator') as unknown as PageIndicatorBuilder;
}

export namespace PageIndicator {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'PageIndicator',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'PageIndicator',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('PageIndicator', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PageIndicator', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PageIndicator', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PageIndicator', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'PageIndicator',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'PageIndicator',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PageIndicator', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PageIndicator', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PageIndicator', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PageIndicator', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PageIndicator', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PageIndicator', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PageIndicator', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PageIndicator', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PageIndicator', 'TransformOrigin', 'BottomRight');
  }
}
