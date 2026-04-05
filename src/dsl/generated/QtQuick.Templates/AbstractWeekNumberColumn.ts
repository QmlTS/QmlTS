// AUTO-GENERATED — DO NOT EDIT
// Type: AbstractWeekNumberColumn
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
export interface AbstractWeekNumberColumnBuilder {
  id(id: string): AbstractWeekNumberColumnBuilder;
  child(obj: QmlObjectBuilder): AbstractWeekNumberColumnBuilder;

  activeFocusOnTab(value: boolean): AbstractWeekNumberColumnBuilder;
  activeFocusOnTabBind(expr: string): AbstractWeekNumberColumnBuilder;
  antialiasing(value: boolean): AbstractWeekNumberColumnBuilder;
  antialiasingBind(expr: string): AbstractWeekNumberColumnBuilder;
  background(value: ItemBuilder): AbstractWeekNumberColumnBuilder;
  backgroundBind(expr: string): AbstractWeekNumberColumnBuilder;
  baselineOffset(value: number): AbstractWeekNumberColumnBuilder;
  baselineOffsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  bottomInset(value: number): AbstractWeekNumberColumnBuilder;
  bottomInsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  bottomPadding(value: number): AbstractWeekNumberColumnBuilder;
  bottomPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  clip(value: boolean): AbstractWeekNumberColumnBuilder;
  clipBind(expr: string): AbstractWeekNumberColumnBuilder;
  containmentMask(value: QtObjectBuilder): AbstractWeekNumberColumnBuilder;
  containmentMaskBind(expr: string): AbstractWeekNumberColumnBuilder;
  contentItem(value: ItemBuilder): AbstractWeekNumberColumnBuilder;
  contentItemBind(expr: string): AbstractWeekNumberColumnBuilder;
  delegate(value: QmlComponent): AbstractWeekNumberColumnBuilder;
  delegateBind(expr: string): AbstractWeekNumberColumnBuilder;
  enabled(value: boolean): AbstractWeekNumberColumnBuilder;
  enabledBind(expr: string): AbstractWeekNumberColumnBuilder;
  focus(value: boolean): AbstractWeekNumberColumnBuilder;
  focusBind(expr: string): AbstractWeekNumberColumnBuilder;
  focusPolicy(value: QmlValue): AbstractWeekNumberColumnBuilder;
  focusPolicyBind(expr: string): AbstractWeekNumberColumnBuilder;
  focusReason(value: QmlValue): AbstractWeekNumberColumnBuilder;
  focusReasonBind(expr: string): AbstractWeekNumberColumnBuilder;
  font(value: QmlFont): AbstractWeekNumberColumnBuilder;
  fontBind(expr: string): AbstractWeekNumberColumnBuilder;
  height(value: number): AbstractWeekNumberColumnBuilder;
  heightBind(expr: string): AbstractWeekNumberColumnBuilder;
  horizontalPadding(value: number): AbstractWeekNumberColumnBuilder;
  horizontalPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  hoverEnabled(value: boolean): AbstractWeekNumberColumnBuilder;
  hoverEnabledBind(expr: string): AbstractWeekNumberColumnBuilder;
  implicitHeight(value: number): AbstractWeekNumberColumnBuilder;
  implicitHeightBind(expr: string): AbstractWeekNumberColumnBuilder;
  implicitWidth(value: number): AbstractWeekNumberColumnBuilder;
  implicitWidthBind(expr: string): AbstractWeekNumberColumnBuilder;
  leftInset(value: number): AbstractWeekNumberColumnBuilder;
  leftInsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  leftPadding(value: number): AbstractWeekNumberColumnBuilder;
  leftPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  locale(value: QmlValue): AbstractWeekNumberColumnBuilder;
  localeBind(expr: string): AbstractWeekNumberColumnBuilder;
  month(value: number): AbstractWeekNumberColumnBuilder;
  monthBind(expr: string): AbstractWeekNumberColumnBuilder;
  objectName(value: string): AbstractWeekNumberColumnBuilder;
  objectNameBind(expr: string): AbstractWeekNumberColumnBuilder;
  opacity(value: number): AbstractWeekNumberColumnBuilder;
  opacityBind(expr: string): AbstractWeekNumberColumnBuilder;
  padding(value: number): AbstractWeekNumberColumnBuilder;
  paddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  palette(value: PaletteBuilder): AbstractWeekNumberColumnBuilder;
  paletteBind(expr: string): AbstractWeekNumberColumnBuilder;
  parent(value: ItemBuilder): AbstractWeekNumberColumnBuilder;
  parentBind(expr: string): AbstractWeekNumberColumnBuilder;
  rightInset(value: number): AbstractWeekNumberColumnBuilder;
  rightInsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  rightPadding(value: number): AbstractWeekNumberColumnBuilder;
  rightPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  rotation(value: number): AbstractWeekNumberColumnBuilder;
  rotationBind(expr: string): AbstractWeekNumberColumnBuilder;
  scale(value: number): AbstractWeekNumberColumnBuilder;
  scaleBind(expr: string): AbstractWeekNumberColumnBuilder;
  smooth(value: boolean): AbstractWeekNumberColumnBuilder;
  smoothBind(expr: string): AbstractWeekNumberColumnBuilder;
  source(value: QmlValue): AbstractWeekNumberColumnBuilder;
  sourceBind(expr: string): AbstractWeekNumberColumnBuilder;
  spacing(value: number): AbstractWeekNumberColumnBuilder;
  spacingBind(expr: string): AbstractWeekNumberColumnBuilder;
  state(value: string): AbstractWeekNumberColumnBuilder;
  stateBind(expr: string): AbstractWeekNumberColumnBuilder;
  topInset(value: number): AbstractWeekNumberColumnBuilder;
  topInsetBind(expr: string): AbstractWeekNumberColumnBuilder;
  topPadding(value: number): AbstractWeekNumberColumnBuilder;
  topPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  transformOrigin(value: QmlValue): AbstractWeekNumberColumnBuilder;
  transformOriginBind(expr: string): AbstractWeekNumberColumnBuilder;
  verticalPadding(value: number): AbstractWeekNumberColumnBuilder;
  verticalPaddingBind(expr: string): AbstractWeekNumberColumnBuilder;
  visible(value: boolean): AbstractWeekNumberColumnBuilder;
  visibleBind(expr: string): AbstractWeekNumberColumnBuilder;
  wheelEnabled(value: boolean): AbstractWeekNumberColumnBuilder;
  wheelEnabledBind(expr: string): AbstractWeekNumberColumnBuilder;
  width(value: number): AbstractWeekNumberColumnBuilder;
  widthBind(expr: string): AbstractWeekNumberColumnBuilder;
  x(value: number): AbstractWeekNumberColumnBuilder;
  xBind(expr: string): AbstractWeekNumberColumnBuilder;
  y(value: number): AbstractWeekNumberColumnBuilder;
  yBind(expr: string): AbstractWeekNumberColumnBuilder;
  year(value: number): AbstractWeekNumberColumnBuilder;
  yearBind(expr: string): AbstractWeekNumberColumnBuilder;
  z(value: number): AbstractWeekNumberColumnBuilder;
  zBind(expr: string): AbstractWeekNumberColumnBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): AbstractWeekNumberColumnBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): AbstractWeekNumberColumnBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): AbstractWeekNumberColumnBuilder;
  onAvailableHeightChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onAvailableWidthChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onBackgroundChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onBaselineOffsetChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onBottomInsetChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onBottomPaddingChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onChildrenChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): AbstractWeekNumberColumnBuilder;
  onClipChanged(handler: (arg0: boolean) => void): AbstractWeekNumberColumnBuilder;
  onContainmentMaskChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onContentItemChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onDelegateChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onEnabledChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): AbstractWeekNumberColumnBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): AbstractWeekNumberColumnBuilder;
  onFocusReasonChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onFontChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onHeightChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onHorizontalPaddingChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onHoverEnabledChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onHoveredChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onImplicitContentHeightChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onImplicitContentWidthChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onImplicitHeightChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onImplicitWidthChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onLeftInsetChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onLeftPaddingChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onLocaleChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onMirroredChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onMonthChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): AbstractWeekNumberColumnBuilder;
  onOpacityChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onPaddingChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onPaletteChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onPaletteCreated(handler: () => void): AbstractWeekNumberColumnBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): AbstractWeekNumberColumnBuilder;
  onRightInsetChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onRightPaddingChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onRotationChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onScaleChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): AbstractWeekNumberColumnBuilder;
  onSourceChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onSpacingChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onStateChanged(handler: (arg0: string) => void): AbstractWeekNumberColumnBuilder;
  onTopInsetChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onTopPaddingChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): AbstractWeekNumberColumnBuilder;
  onVerticalPaddingChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onVisibleChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onVisibleChildrenChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onVisualFocusChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onWheelEnabledChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onWidthChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): AbstractWeekNumberColumnBuilder;
  onXChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onYChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onYearChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  onZChanged(handler: () => void): AbstractWeekNumberColumnBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AbstractWeekNumberColumnBuilder;
  layer(setup: (b: LayerBuilder) => void): AbstractWeekNumberColumnBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  applicationWindow(
    setup: (b: ApplicationWindowAttachedBuilder) => void,
  ): AbstractWeekNumberColumnBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  dialogButtonBox(
    setup: (b: DialogButtonBoxAttachedBuilder) => void,
  ): AbstractWeekNumberColumnBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  scrollIndicator(
    setup: (b: ScrollIndicatorAttachedBuilder) => void,
  ): AbstractWeekNumberColumnBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): AbstractWeekNumberColumnBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): AbstractWeekNumberColumnBuilder;
}

export function AbstractWeekNumberColumn(): AbstractWeekNumberColumnBuilder {
  return new DslBuilderImpl(
    'AbstractWeekNumberColumn',
  ) as unknown as AbstractWeekNumberColumnBuilder;
}

export namespace AbstractWeekNumberColumn {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemIsViewport',
    );
    export const ItemObservesViewport = createEnumToken(
      'AbstractWeekNumberColumn',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'AbstractWeekNumberColumn',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken(
      'AbstractWeekNumberColumn',
      'TransformOrigin',
      'TopLeft',
    );
    export const Top = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken(
      'AbstractWeekNumberColumn',
      'TransformOrigin',
      'TopRight',
    );
    export const Left = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'AbstractWeekNumberColumn',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('AbstractWeekNumberColumn', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'AbstractWeekNumberColumn',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
