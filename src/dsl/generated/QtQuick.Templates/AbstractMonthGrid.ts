// AUTO-GENERATED — DO NOT EDIT
// Type: AbstractMonthGrid
// Generated from Qt 6.11.0

import type {
  QmlComponent,
  QmlDate,
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
export interface AbstractMonthGridBuilder {
  id(id: string): AbstractMonthGridBuilder;
  child(obj: QmlObjectBuilder): AbstractMonthGridBuilder;

  activeFocusOnTab(value: boolean): AbstractMonthGridBuilder;
  activeFocusOnTabBind(expr: string): AbstractMonthGridBuilder;
  antialiasing(value: boolean): AbstractMonthGridBuilder;
  antialiasingBind(expr: string): AbstractMonthGridBuilder;
  background(value: ItemBuilder): AbstractMonthGridBuilder;
  backgroundBind(expr: string): AbstractMonthGridBuilder;
  baselineOffset(value: number): AbstractMonthGridBuilder;
  baselineOffsetBind(expr: string): AbstractMonthGridBuilder;
  bottomInset(value: number): AbstractMonthGridBuilder;
  bottomInsetBind(expr: string): AbstractMonthGridBuilder;
  bottomPadding(value: number): AbstractMonthGridBuilder;
  bottomPaddingBind(expr: string): AbstractMonthGridBuilder;
  clip(value: boolean): AbstractMonthGridBuilder;
  clipBind(expr: string): AbstractMonthGridBuilder;
  containmentMask(value: QtObjectBuilder): AbstractMonthGridBuilder;
  containmentMaskBind(expr: string): AbstractMonthGridBuilder;
  contentItem(value: ItemBuilder): AbstractMonthGridBuilder;
  contentItemBind(expr: string): AbstractMonthGridBuilder;
  delegate(value: QmlComponent): AbstractMonthGridBuilder;
  delegateBind(expr: string): AbstractMonthGridBuilder;
  enabled(value: boolean): AbstractMonthGridBuilder;
  enabledBind(expr: string): AbstractMonthGridBuilder;
  focus(value: boolean): AbstractMonthGridBuilder;
  focusBind(expr: string): AbstractMonthGridBuilder;
  focusPolicy(value: QmlValue): AbstractMonthGridBuilder;
  focusPolicyBind(expr: string): AbstractMonthGridBuilder;
  focusReason(value: QmlValue): AbstractMonthGridBuilder;
  focusReasonBind(expr: string): AbstractMonthGridBuilder;
  font(value: QmlFont): AbstractMonthGridBuilder;
  fontBind(expr: string): AbstractMonthGridBuilder;
  height(value: number): AbstractMonthGridBuilder;
  heightBind(expr: string): AbstractMonthGridBuilder;
  horizontalPadding(value: number): AbstractMonthGridBuilder;
  horizontalPaddingBind(expr: string): AbstractMonthGridBuilder;
  hoverEnabled(value: boolean): AbstractMonthGridBuilder;
  hoverEnabledBind(expr: string): AbstractMonthGridBuilder;
  implicitHeight(value: number): AbstractMonthGridBuilder;
  implicitHeightBind(expr: string): AbstractMonthGridBuilder;
  implicitWidth(value: number): AbstractMonthGridBuilder;
  implicitWidthBind(expr: string): AbstractMonthGridBuilder;
  leftInset(value: number): AbstractMonthGridBuilder;
  leftInsetBind(expr: string): AbstractMonthGridBuilder;
  leftPadding(value: number): AbstractMonthGridBuilder;
  leftPaddingBind(expr: string): AbstractMonthGridBuilder;
  locale(value: QmlValue): AbstractMonthGridBuilder;
  localeBind(expr: string): AbstractMonthGridBuilder;
  month(value: number): AbstractMonthGridBuilder;
  monthBind(expr: string): AbstractMonthGridBuilder;
  objectName(value: string): AbstractMonthGridBuilder;
  objectNameBind(expr: string): AbstractMonthGridBuilder;
  opacity(value: number): AbstractMonthGridBuilder;
  opacityBind(expr: string): AbstractMonthGridBuilder;
  padding(value: number): AbstractMonthGridBuilder;
  paddingBind(expr: string): AbstractMonthGridBuilder;
  palette(value: PaletteBuilder): AbstractMonthGridBuilder;
  paletteBind(expr: string): AbstractMonthGridBuilder;
  parent(value: ItemBuilder): AbstractMonthGridBuilder;
  parentBind(expr: string): AbstractMonthGridBuilder;
  rightInset(value: number): AbstractMonthGridBuilder;
  rightInsetBind(expr: string): AbstractMonthGridBuilder;
  rightPadding(value: number): AbstractMonthGridBuilder;
  rightPaddingBind(expr: string): AbstractMonthGridBuilder;
  rotation(value: number): AbstractMonthGridBuilder;
  rotationBind(expr: string): AbstractMonthGridBuilder;
  scale(value: number): AbstractMonthGridBuilder;
  scaleBind(expr: string): AbstractMonthGridBuilder;
  smooth(value: boolean): AbstractMonthGridBuilder;
  smoothBind(expr: string): AbstractMonthGridBuilder;
  source(value: QmlValue): AbstractMonthGridBuilder;
  sourceBind(expr: string): AbstractMonthGridBuilder;
  spacing(value: number): AbstractMonthGridBuilder;
  spacingBind(expr: string): AbstractMonthGridBuilder;
  state(value: string): AbstractMonthGridBuilder;
  stateBind(expr: string): AbstractMonthGridBuilder;
  title(value: string): AbstractMonthGridBuilder;
  titleBind(expr: string): AbstractMonthGridBuilder;
  topInset(value: number): AbstractMonthGridBuilder;
  topInsetBind(expr: string): AbstractMonthGridBuilder;
  topPadding(value: number): AbstractMonthGridBuilder;
  topPaddingBind(expr: string): AbstractMonthGridBuilder;
  transformOrigin(value: QmlValue): AbstractMonthGridBuilder;
  transformOriginBind(expr: string): AbstractMonthGridBuilder;
  verticalPadding(value: number): AbstractMonthGridBuilder;
  verticalPaddingBind(expr: string): AbstractMonthGridBuilder;
  visible(value: boolean): AbstractMonthGridBuilder;
  visibleBind(expr: string): AbstractMonthGridBuilder;
  wheelEnabled(value: boolean): AbstractMonthGridBuilder;
  wheelEnabledBind(expr: string): AbstractMonthGridBuilder;
  width(value: number): AbstractMonthGridBuilder;
  widthBind(expr: string): AbstractMonthGridBuilder;
  x(value: number): AbstractMonthGridBuilder;
  xBind(expr: string): AbstractMonthGridBuilder;
  y(value: number): AbstractMonthGridBuilder;
  yBind(expr: string): AbstractMonthGridBuilder;
  year(value: number): AbstractMonthGridBuilder;
  yearBind(expr: string): AbstractMonthGridBuilder;
  z(value: number): AbstractMonthGridBuilder;
  zBind(expr: string): AbstractMonthGridBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): AbstractMonthGridBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): AbstractMonthGridBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): AbstractMonthGridBuilder;
  onAvailableHeightChanged(handler: () => void): AbstractMonthGridBuilder;
  onAvailableWidthChanged(handler: () => void): AbstractMonthGridBuilder;
  onBackgroundChanged(handler: () => void): AbstractMonthGridBuilder;
  onBaselineOffsetChanged(handler: () => void): AbstractMonthGridBuilder;
  onBottomInsetChanged(handler: () => void): AbstractMonthGridBuilder;
  onBottomPaddingChanged(handler: () => void): AbstractMonthGridBuilder;
  onChildrenChanged(handler: () => void): AbstractMonthGridBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): AbstractMonthGridBuilder;
  onClicked(handler: (date: QmlDate) => void): AbstractMonthGridBuilder;
  onClipChanged(handler: (arg0: boolean) => void): AbstractMonthGridBuilder;
  onContainmentMaskChanged(handler: () => void): AbstractMonthGridBuilder;
  onContentItemChanged(handler: () => void): AbstractMonthGridBuilder;
  onDelegateChanged(handler: () => void): AbstractMonthGridBuilder;
  onEnabledChanged(handler: () => void): AbstractMonthGridBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): AbstractMonthGridBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): AbstractMonthGridBuilder;
  onFocusReasonChanged(handler: () => void): AbstractMonthGridBuilder;
  onFontChanged(handler: () => void): AbstractMonthGridBuilder;
  onHeightChanged(handler: () => void): AbstractMonthGridBuilder;
  onHorizontalPaddingChanged(handler: () => void): AbstractMonthGridBuilder;
  onHoverEnabledChanged(handler: () => void): AbstractMonthGridBuilder;
  onHoveredChanged(handler: () => void): AbstractMonthGridBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): AbstractMonthGridBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): AbstractMonthGridBuilder;
  onImplicitContentHeightChanged(handler: () => void): AbstractMonthGridBuilder;
  onImplicitContentWidthChanged(handler: () => void): AbstractMonthGridBuilder;
  onImplicitHeightChanged(handler: () => void): AbstractMonthGridBuilder;
  onImplicitWidthChanged(handler: () => void): AbstractMonthGridBuilder;
  onLeftInsetChanged(handler: () => void): AbstractMonthGridBuilder;
  onLeftPaddingChanged(handler: () => void): AbstractMonthGridBuilder;
  onLocaleChanged(handler: () => void): AbstractMonthGridBuilder;
  onMirroredChanged(handler: () => void): AbstractMonthGridBuilder;
  onMonthChanged(handler: () => void): AbstractMonthGridBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): AbstractMonthGridBuilder;
  onOpacityChanged(handler: () => void): AbstractMonthGridBuilder;
  onPaddingChanged(handler: () => void): AbstractMonthGridBuilder;
  onPaletteChanged(handler: () => void): AbstractMonthGridBuilder;
  onPaletteCreated(handler: () => void): AbstractMonthGridBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): AbstractMonthGridBuilder;
  onPressAndHold(handler: (date: QmlDate) => void): AbstractMonthGridBuilder;
  onPressed(handler: (date: QmlDate) => void): AbstractMonthGridBuilder;
  onReleased(handler: (date: QmlDate) => void): AbstractMonthGridBuilder;
  onRightInsetChanged(handler: () => void): AbstractMonthGridBuilder;
  onRightPaddingChanged(handler: () => void): AbstractMonthGridBuilder;
  onRotationChanged(handler: () => void): AbstractMonthGridBuilder;
  onScaleChanged(handler: () => void): AbstractMonthGridBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): AbstractMonthGridBuilder;
  onSourceChanged(handler: () => void): AbstractMonthGridBuilder;
  onSpacingChanged(handler: () => void): AbstractMonthGridBuilder;
  onStateChanged(handler: (arg0: string) => void): AbstractMonthGridBuilder;
  onTitleChanged(handler: () => void): AbstractMonthGridBuilder;
  onTopInsetChanged(handler: () => void): AbstractMonthGridBuilder;
  onTopPaddingChanged(handler: () => void): AbstractMonthGridBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): AbstractMonthGridBuilder;
  onVerticalPaddingChanged(handler: () => void): AbstractMonthGridBuilder;
  onVisibleChanged(handler: () => void): AbstractMonthGridBuilder;
  onVisibleChildrenChanged(handler: () => void): AbstractMonthGridBuilder;
  onVisualFocusChanged(handler: () => void): AbstractMonthGridBuilder;
  onWheelEnabledChanged(handler: () => void): AbstractMonthGridBuilder;
  onWidthChanged(handler: () => void): AbstractMonthGridBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): AbstractMonthGridBuilder;
  onXChanged(handler: () => void): AbstractMonthGridBuilder;
  onYChanged(handler: () => void): AbstractMonthGridBuilder;
  onYearChanged(handler: () => void): AbstractMonthGridBuilder;
  onZChanged(handler: () => void): AbstractMonthGridBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): AbstractMonthGridBuilder;
  layer(setup: (b: LayerBuilder) => void): AbstractMonthGridBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): AbstractMonthGridBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): AbstractMonthGridBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): AbstractMonthGridBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): AbstractMonthGridBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): AbstractMonthGridBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): AbstractMonthGridBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): AbstractMonthGridBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): AbstractMonthGridBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): AbstractMonthGridBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): AbstractMonthGridBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): AbstractMonthGridBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): AbstractMonthGridBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): AbstractMonthGridBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): AbstractMonthGridBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): AbstractMonthGridBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): AbstractMonthGridBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): AbstractMonthGridBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): AbstractMonthGridBuilder;
}

export function AbstractMonthGrid(): AbstractMonthGridBuilder {
  return new DslBuilderImpl('AbstractMonthGrid') as unknown as AbstractMonthGridBuilder;
}

export namespace AbstractMonthGrid {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'AbstractMonthGrid',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'AbstractMonthGrid',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'AbstractMonthGrid',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken('AbstractMonthGrid', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken(
      'AbstractMonthGrid',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('AbstractMonthGrid', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'AbstractMonthGrid',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'AbstractMonthGrid',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('AbstractMonthGrid', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'AbstractMonthGrid',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
