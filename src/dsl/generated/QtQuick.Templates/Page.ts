// AUTO-GENERATED — DO NOT EDIT
// Type: Page
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
export interface PageBuilder {
  id(id: string): PageBuilder;
  child(obj: QmlObjectBuilder): PageBuilder;

  activeFocusOnTab(value: boolean): PageBuilder;
  activeFocusOnTabBind(expr: string): PageBuilder;
  antialiasing(value: boolean): PageBuilder;
  antialiasingBind(expr: string): PageBuilder;
  background(value: ItemBuilder): PageBuilder;
  backgroundBind(expr: string): PageBuilder;
  baselineOffset(value: number): PageBuilder;
  baselineOffsetBind(expr: string): PageBuilder;
  bottomInset(value: number): PageBuilder;
  bottomInsetBind(expr: string): PageBuilder;
  bottomPadding(value: number): PageBuilder;
  bottomPaddingBind(expr: string): PageBuilder;
  clip(value: boolean): PageBuilder;
  clipBind(expr: string): PageBuilder;
  containmentMask(value: QtObjectBuilder): PageBuilder;
  containmentMaskBind(expr: string): PageBuilder;
  contentHeight(value: number): PageBuilder;
  contentHeightBind(expr: string): PageBuilder;
  contentItem(value: ItemBuilder): PageBuilder;
  contentItemBind(expr: string): PageBuilder;
  contentWidth(value: number): PageBuilder;
  contentWidthBind(expr: string): PageBuilder;
  enabled(value: boolean): PageBuilder;
  enabledBind(expr: string): PageBuilder;
  focus(value: boolean): PageBuilder;
  focusBind(expr: string): PageBuilder;
  focusPolicy(value: QmlValue): PageBuilder;
  focusPolicyBind(expr: string): PageBuilder;
  focusReason(value: QmlValue): PageBuilder;
  focusReasonBind(expr: string): PageBuilder;
  font(value: QmlFont): PageBuilder;
  fontBind(expr: string): PageBuilder;
  footer(value: ItemBuilder): PageBuilder;
  footerBind(expr: string): PageBuilder;
  header(value: ItemBuilder): PageBuilder;
  headerBind(expr: string): PageBuilder;
  height(value: number): PageBuilder;
  heightBind(expr: string): PageBuilder;
  horizontalPadding(value: number): PageBuilder;
  horizontalPaddingBind(expr: string): PageBuilder;
  hoverEnabled(value: boolean): PageBuilder;
  hoverEnabledBind(expr: string): PageBuilder;
  implicitHeight(value: number): PageBuilder;
  implicitHeightBind(expr: string): PageBuilder;
  implicitWidth(value: number): PageBuilder;
  implicitWidthBind(expr: string): PageBuilder;
  leftInset(value: number): PageBuilder;
  leftInsetBind(expr: string): PageBuilder;
  leftPadding(value: number): PageBuilder;
  leftPaddingBind(expr: string): PageBuilder;
  locale(value: QmlValue): PageBuilder;
  localeBind(expr: string): PageBuilder;
  objectName(value: string): PageBuilder;
  objectNameBind(expr: string): PageBuilder;
  opacity(value: number): PageBuilder;
  opacityBind(expr: string): PageBuilder;
  padding(value: number): PageBuilder;
  paddingBind(expr: string): PageBuilder;
  palette(value: PaletteBuilder): PageBuilder;
  paletteBind(expr: string): PageBuilder;
  parent(value: ItemBuilder): PageBuilder;
  parentBind(expr: string): PageBuilder;
  rightInset(value: number): PageBuilder;
  rightInsetBind(expr: string): PageBuilder;
  rightPadding(value: number): PageBuilder;
  rightPaddingBind(expr: string): PageBuilder;
  rotation(value: number): PageBuilder;
  rotationBind(expr: string): PageBuilder;
  scale(value: number): PageBuilder;
  scaleBind(expr: string): PageBuilder;
  smooth(value: boolean): PageBuilder;
  smoothBind(expr: string): PageBuilder;
  spacing(value: number): PageBuilder;
  spacingBind(expr: string): PageBuilder;
  state(value: string): PageBuilder;
  stateBind(expr: string): PageBuilder;
  title(value: string): PageBuilder;
  titleBind(expr: string): PageBuilder;
  topInset(value: number): PageBuilder;
  topInsetBind(expr: string): PageBuilder;
  topPadding(value: number): PageBuilder;
  topPaddingBind(expr: string): PageBuilder;
  transformOrigin(value: QmlValue): PageBuilder;
  transformOriginBind(expr: string): PageBuilder;
  verticalPadding(value: number): PageBuilder;
  verticalPaddingBind(expr: string): PageBuilder;
  visible(value: boolean): PageBuilder;
  visibleBind(expr: string): PageBuilder;
  wheelEnabled(value: boolean): PageBuilder;
  wheelEnabledBind(expr: string): PageBuilder;
  width(value: number): PageBuilder;
  widthBind(expr: string): PageBuilder;
  x(value: number): PageBuilder;
  xBind(expr: string): PageBuilder;
  y(value: number): PageBuilder;
  yBind(expr: string): PageBuilder;
  z(value: number): PageBuilder;
  zBind(expr: string): PageBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): PageBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): PageBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): PageBuilder;
  onAvailableHeightChanged(handler: () => void): PageBuilder;
  onAvailableWidthChanged(handler: () => void): PageBuilder;
  onBackgroundChanged(handler: () => void): PageBuilder;
  onBaselineOffsetChanged(handler: () => void): PageBuilder;
  onBottomInsetChanged(handler: () => void): PageBuilder;
  onBottomPaddingChanged(handler: () => void): PageBuilder;
  onChildrenChanged(handler: () => void): PageBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): PageBuilder;
  onClipChanged(handler: (arg0: boolean) => void): PageBuilder;
  onContainmentMaskChanged(handler: () => void): PageBuilder;
  onContentChildrenChanged(handler: () => void): PageBuilder;
  onContentHeightChanged(handler: () => void): PageBuilder;
  onContentItemChanged(handler: () => void): PageBuilder;
  onContentWidthChanged(handler: () => void): PageBuilder;
  onEnabledChanged(handler: () => void): PageBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): PageBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): PageBuilder;
  onFocusReasonChanged(handler: () => void): PageBuilder;
  onFontChanged(handler: () => void): PageBuilder;
  onFooterChanged(handler: () => void): PageBuilder;
  onHeaderChanged(handler: () => void): PageBuilder;
  onHeightChanged(handler: () => void): PageBuilder;
  onHorizontalPaddingChanged(handler: () => void): PageBuilder;
  onHoverEnabledChanged(handler: () => void): PageBuilder;
  onHoveredChanged(handler: () => void): PageBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): PageBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): PageBuilder;
  onImplicitContentHeightChanged(handler: () => void): PageBuilder;
  onImplicitContentWidthChanged(handler: () => void): PageBuilder;
  onImplicitFooterHeightChanged(handler: () => void): PageBuilder;
  onImplicitFooterWidthChanged(handler: () => void): PageBuilder;
  onImplicitHeaderHeightChanged(handler: () => void): PageBuilder;
  onImplicitHeaderWidthChanged(handler: () => void): PageBuilder;
  onImplicitHeightChanged(handler: () => void): PageBuilder;
  onImplicitWidthChanged(handler: () => void): PageBuilder;
  onLeftInsetChanged(handler: () => void): PageBuilder;
  onLeftPaddingChanged(handler: () => void): PageBuilder;
  onLocaleChanged(handler: () => void): PageBuilder;
  onMirroredChanged(handler: () => void): PageBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): PageBuilder;
  onOpacityChanged(handler: () => void): PageBuilder;
  onPaddingChanged(handler: () => void): PageBuilder;
  onPaletteChanged(handler: () => void): PageBuilder;
  onPaletteCreated(handler: () => void): PageBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): PageBuilder;
  onRightInsetChanged(handler: () => void): PageBuilder;
  onRightPaddingChanged(handler: () => void): PageBuilder;
  onRotationChanged(handler: () => void): PageBuilder;
  onScaleChanged(handler: () => void): PageBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): PageBuilder;
  onSpacingChanged(handler: () => void): PageBuilder;
  onStateChanged(handler: (arg0: string) => void): PageBuilder;
  onTitleChanged(handler: () => void): PageBuilder;
  onTopInsetChanged(handler: () => void): PageBuilder;
  onTopPaddingChanged(handler: () => void): PageBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): PageBuilder;
  onVerticalPaddingChanged(handler: () => void): PageBuilder;
  onVisibleChanged(handler: () => void): PageBuilder;
  onVisibleChildrenChanged(handler: () => void): PageBuilder;
  onVisualFocusChanged(handler: () => void): PageBuilder;
  onWheelEnabledChanged(handler: () => void): PageBuilder;
  onWidthChanged(handler: () => void): PageBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): PageBuilder;
  onXChanged(handler: () => void): PageBuilder;
  onYChanged(handler: () => void): PageBuilder;
  onZChanged(handler: () => void): PageBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PageBuilder;
  layer(setup: (b: LayerBuilder) => void): PageBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): PageBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): PageBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): PageBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): PageBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): PageBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): PageBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): PageBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): PageBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): PageBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): PageBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): PageBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): PageBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): PageBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): PageBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): PageBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): PageBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): PageBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): PageBuilder;
}

export function Page(): PageBuilder {
  return new DslBuilderImpl('Page') as unknown as PageBuilder;
}

export namespace Page {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Page',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Page',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Page', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Page', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Page', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Page', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Page', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Page',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Page',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Page', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Page',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Page',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Page',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Page',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Page',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Page',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Page',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Page',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Page', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Page',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Page', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Page', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Page', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Page', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Page', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Page', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Page', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Page', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Page', 'TransformOrigin', 'BottomRight');
  }
}
