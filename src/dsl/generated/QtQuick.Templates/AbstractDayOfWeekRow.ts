// AUTO-GENERATED — DO NOT EDIT
// Type: AbstractDayOfWeekRow
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
export interface AbstractDayOfWeekRowBuilder {
  id(id: string): AbstractDayOfWeekRowBuilder;
  child(obj: QmlObjectBuilder): AbstractDayOfWeekRowBuilder;

  activeFocusOnTab(value: boolean): AbstractDayOfWeekRowBuilder;
  activeFocusOnTabBind(expr: string): AbstractDayOfWeekRowBuilder;
  antialiasing(value: boolean): AbstractDayOfWeekRowBuilder;
  antialiasingBind(expr: string): AbstractDayOfWeekRowBuilder;
  background(value: ItemBuilder): AbstractDayOfWeekRowBuilder;
  backgroundBind(expr: string): AbstractDayOfWeekRowBuilder;
  baselineOffset(value: number): AbstractDayOfWeekRowBuilder;
  baselineOffsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  bottomInset(value: number): AbstractDayOfWeekRowBuilder;
  bottomInsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  bottomPadding(value: number): AbstractDayOfWeekRowBuilder;
  bottomPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  clip(value: boolean): AbstractDayOfWeekRowBuilder;
  clipBind(expr: string): AbstractDayOfWeekRowBuilder;
  containmentMask(value: QtObjectBuilder): AbstractDayOfWeekRowBuilder;
  containmentMaskBind(expr: string): AbstractDayOfWeekRowBuilder;
  contentItem(value: ItemBuilder): AbstractDayOfWeekRowBuilder;
  contentItemBind(expr: string): AbstractDayOfWeekRowBuilder;
  delegate(value: QmlComponent): AbstractDayOfWeekRowBuilder;
  delegateBind(expr: string): AbstractDayOfWeekRowBuilder;
  enabled(value: boolean): AbstractDayOfWeekRowBuilder;
  enabledBind(expr: string): AbstractDayOfWeekRowBuilder;
  focus(value: boolean): AbstractDayOfWeekRowBuilder;
  focusBind(expr: string): AbstractDayOfWeekRowBuilder;
  focusPolicy(value: QmlValue): AbstractDayOfWeekRowBuilder;
  focusPolicyBind(expr: string): AbstractDayOfWeekRowBuilder;
  focusReason(value: QmlValue): AbstractDayOfWeekRowBuilder;
  focusReasonBind(expr: string): AbstractDayOfWeekRowBuilder;
  font(value: QmlFont): AbstractDayOfWeekRowBuilder;
  fontBind(expr: string): AbstractDayOfWeekRowBuilder;
  height(value: number): AbstractDayOfWeekRowBuilder;
  heightBind(expr: string): AbstractDayOfWeekRowBuilder;
  horizontalPadding(value: number): AbstractDayOfWeekRowBuilder;
  horizontalPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  hoverEnabled(value: boolean): AbstractDayOfWeekRowBuilder;
  hoverEnabledBind(expr: string): AbstractDayOfWeekRowBuilder;
  implicitHeight(value: number): AbstractDayOfWeekRowBuilder;
  implicitHeightBind(expr: string): AbstractDayOfWeekRowBuilder;
  implicitWidth(value: number): AbstractDayOfWeekRowBuilder;
  implicitWidthBind(expr: string): AbstractDayOfWeekRowBuilder;
  leftInset(value: number): AbstractDayOfWeekRowBuilder;
  leftInsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  leftPadding(value: number): AbstractDayOfWeekRowBuilder;
  leftPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  locale(value: QmlValue): AbstractDayOfWeekRowBuilder;
  localeBind(expr: string): AbstractDayOfWeekRowBuilder;
  objectName(value: string): AbstractDayOfWeekRowBuilder;
  objectNameBind(expr: string): AbstractDayOfWeekRowBuilder;
  opacity(value: number): AbstractDayOfWeekRowBuilder;
  opacityBind(expr: string): AbstractDayOfWeekRowBuilder;
  padding(value: number): AbstractDayOfWeekRowBuilder;
  paddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  palette(value: PaletteBuilder): AbstractDayOfWeekRowBuilder;
  paletteBind(expr: string): AbstractDayOfWeekRowBuilder;
  parent(value: ItemBuilder): AbstractDayOfWeekRowBuilder;
  parentBind(expr: string): AbstractDayOfWeekRowBuilder;
  rightInset(value: number): AbstractDayOfWeekRowBuilder;
  rightInsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  rightPadding(value: number): AbstractDayOfWeekRowBuilder;
  rightPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  rotation(value: number): AbstractDayOfWeekRowBuilder;
  rotationBind(expr: string): AbstractDayOfWeekRowBuilder;
  scale(value: number): AbstractDayOfWeekRowBuilder;
  scaleBind(expr: string): AbstractDayOfWeekRowBuilder;
  smooth(value: boolean): AbstractDayOfWeekRowBuilder;
  smoothBind(expr: string): AbstractDayOfWeekRowBuilder;
  source(value: QmlValue): AbstractDayOfWeekRowBuilder;
  sourceBind(expr: string): AbstractDayOfWeekRowBuilder;
  spacing(value: number): AbstractDayOfWeekRowBuilder;
  spacingBind(expr: string): AbstractDayOfWeekRowBuilder;
  state(value: string): AbstractDayOfWeekRowBuilder;
  stateBind(expr: string): AbstractDayOfWeekRowBuilder;
  topInset(value: number): AbstractDayOfWeekRowBuilder;
  topInsetBind(expr: string): AbstractDayOfWeekRowBuilder;
  topPadding(value: number): AbstractDayOfWeekRowBuilder;
  topPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  transformOrigin(value: QmlValue): AbstractDayOfWeekRowBuilder;
  transformOriginBind(expr: string): AbstractDayOfWeekRowBuilder;
  verticalPadding(value: number): AbstractDayOfWeekRowBuilder;
  verticalPaddingBind(expr: string): AbstractDayOfWeekRowBuilder;
  visible(value: boolean): AbstractDayOfWeekRowBuilder;
  visibleBind(expr: string): AbstractDayOfWeekRowBuilder;
  wheelEnabled(value: boolean): AbstractDayOfWeekRowBuilder;
  wheelEnabledBind(expr: string): AbstractDayOfWeekRowBuilder;
  width(value: number): AbstractDayOfWeekRowBuilder;
  widthBind(expr: string): AbstractDayOfWeekRowBuilder;
  x(value: number): AbstractDayOfWeekRowBuilder;
  xBind(expr: string): AbstractDayOfWeekRowBuilder;
  y(value: number): AbstractDayOfWeekRowBuilder;
  yBind(expr: string): AbstractDayOfWeekRowBuilder;
  z(value: number): AbstractDayOfWeekRowBuilder;
  zBind(expr: string): AbstractDayOfWeekRowBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): AbstractDayOfWeekRowBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): AbstractDayOfWeekRowBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): AbstractDayOfWeekRowBuilder;
  onAvailableHeightChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onAvailableWidthChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onBackgroundChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onBaselineOffsetChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onBottomInsetChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onBottomPaddingChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onChildrenChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): AbstractDayOfWeekRowBuilder;
  onClipChanged(handler: (arg0: boolean) => void): AbstractDayOfWeekRowBuilder;
  onContainmentMaskChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onContentItemChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onDelegateChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onEnabledChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): AbstractDayOfWeekRowBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): AbstractDayOfWeekRowBuilder;
  onFocusReasonChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onFontChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onHeightChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onHorizontalPaddingChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onHoverEnabledChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onHoveredChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onImplicitContentHeightChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onImplicitContentWidthChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onImplicitHeightChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onImplicitWidthChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onLeftInsetChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onLeftPaddingChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onLocaleChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onMirroredChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): AbstractDayOfWeekRowBuilder;
  onOpacityChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onPaddingChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onPaletteChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onPaletteCreated(handler: () => void): AbstractDayOfWeekRowBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): AbstractDayOfWeekRowBuilder;
  onRightInsetChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onRightPaddingChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onRotationChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onScaleChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): AbstractDayOfWeekRowBuilder;
  onSourceChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onSpacingChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onStateChanged(handler: (arg0: string) => void): AbstractDayOfWeekRowBuilder;
  onTopInsetChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onTopPaddingChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): AbstractDayOfWeekRowBuilder;
  onVerticalPaddingChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onVisibleChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onVisibleChildrenChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onVisualFocusChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onWheelEnabledChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onWidthChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): AbstractDayOfWeekRowBuilder;
  onXChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onYChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  onZChanged(handler: () => void): AbstractDayOfWeekRowBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AbstractDayOfWeekRowBuilder;
  layer(setup: (b: LayerBuilder) => void): AbstractDayOfWeekRowBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  applicationWindow(
    setup: (b: ApplicationWindowAttachedBuilder) => void,
  ): AbstractDayOfWeekRowBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): AbstractDayOfWeekRowBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): AbstractDayOfWeekRowBuilder;
}

export function AbstractDayOfWeekRow(): AbstractDayOfWeekRowBuilder {
  return new DslBuilderImpl('AbstractDayOfWeekRow') as unknown as AbstractDayOfWeekRowBuilder;
}

export namespace AbstractDayOfWeekRow {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'AbstractDayOfWeekRow',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'AbstractDayOfWeekRow',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'AbstractDayOfWeekRow',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'AbstractDayOfWeekRow',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'AbstractDayOfWeekRow',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken(
      'AbstractDayOfWeekRow',
      'Flags',
      'ItemIsViewport',
    );
    export const ItemObservesViewport = createEnumToken(
      'AbstractDayOfWeekRow',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'AbstractDayOfWeekRow',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'AbstractDayOfWeekRow',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('AbstractDayOfWeekRow', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'AbstractDayOfWeekRow',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
