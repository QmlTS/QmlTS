// AUTO-GENERATED — DO NOT EDIT
// Type: TableViewDelegate
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { TableViewBuilder } from '../QtQuick/TableView.js';
import type { WindowBuilder } from '../QtQuick/Window.js';
import type { ActionBuilder } from './Action.js';
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
export interface TableViewDelegateBuilder {
  id(id: string): TableViewDelegateBuilder;
  child(obj: QmlObjectBuilder): TableViewDelegateBuilder;

  action(value: ActionBuilder): TableViewDelegateBuilder;
  actionBind(expr: string): TableViewDelegateBuilder;
  activeFocusOnTab(value: boolean): TableViewDelegateBuilder;
  activeFocusOnTabBind(expr: string): TableViewDelegateBuilder;
  antialiasing(value: boolean): TableViewDelegateBuilder;
  antialiasingBind(expr: string): TableViewDelegateBuilder;
  autoExclusive(value: boolean): TableViewDelegateBuilder;
  autoExclusiveBind(expr: string): TableViewDelegateBuilder;
  autoRepeat(value: boolean): TableViewDelegateBuilder;
  autoRepeatBind(expr: string): TableViewDelegateBuilder;
  autoRepeatDelay(value: number): TableViewDelegateBuilder;
  autoRepeatDelayBind(expr: string): TableViewDelegateBuilder;
  autoRepeatInterval(value: number): TableViewDelegateBuilder;
  autoRepeatIntervalBind(expr: string): TableViewDelegateBuilder;
  background(value: ItemBuilder): TableViewDelegateBuilder;
  backgroundBind(expr: string): TableViewDelegateBuilder;
  baselineOffset(value: number): TableViewDelegateBuilder;
  baselineOffsetBind(expr: string): TableViewDelegateBuilder;
  bottomInset(value: number): TableViewDelegateBuilder;
  bottomInsetBind(expr: string): TableViewDelegateBuilder;
  bottomPadding(value: number): TableViewDelegateBuilder;
  bottomPaddingBind(expr: string): TableViewDelegateBuilder;
  checkable(value: boolean): TableViewDelegateBuilder;
  checkableBind(expr: string): TableViewDelegateBuilder;
  checked(value: boolean): TableViewDelegateBuilder;
  checkedBind(expr: string): TableViewDelegateBuilder;
  clip(value: boolean): TableViewDelegateBuilder;
  clipBind(expr: string): TableViewDelegateBuilder;
  containmentMask(value: QtObjectBuilder): TableViewDelegateBuilder;
  containmentMaskBind(expr: string): TableViewDelegateBuilder;
  contentItem(value: ItemBuilder): TableViewDelegateBuilder;
  contentItemBind(expr: string): TableViewDelegateBuilder;
  current(value: boolean): TableViewDelegateBuilder;
  currentBind(expr: string): TableViewDelegateBuilder;
  display(value: QmlValue): TableViewDelegateBuilder;
  displayBind(expr: string): TableViewDelegateBuilder;
  down(value: boolean): TableViewDelegateBuilder;
  downBind(expr: string): TableViewDelegateBuilder;
  editing(value: boolean): TableViewDelegateBuilder;
  editingBind(expr: string): TableViewDelegateBuilder;
  enabled(value: boolean): TableViewDelegateBuilder;
  enabledBind(expr: string): TableViewDelegateBuilder;
  focus(value: boolean): TableViewDelegateBuilder;
  focusBind(expr: string): TableViewDelegateBuilder;
  focusPolicy(value: QmlValue): TableViewDelegateBuilder;
  focusPolicyBind(expr: string): TableViewDelegateBuilder;
  focusReason(value: QmlValue): TableViewDelegateBuilder;
  focusReasonBind(expr: string): TableViewDelegateBuilder;
  font(value: QmlFont): TableViewDelegateBuilder;
  fontBind(expr: string): TableViewDelegateBuilder;
  height(value: number): TableViewDelegateBuilder;
  heightBind(expr: string): TableViewDelegateBuilder;
  highlighted(value: boolean): TableViewDelegateBuilder;
  highlightedBind(expr: string): TableViewDelegateBuilder;
  horizontalPadding(value: number): TableViewDelegateBuilder;
  horizontalPaddingBind(expr: string): TableViewDelegateBuilder;
  hoverEnabled(value: boolean): TableViewDelegateBuilder;
  hoverEnabledBind(expr: string): TableViewDelegateBuilder;
  icon(value: QmlValue): TableViewDelegateBuilder;
  iconBind(expr: string): TableViewDelegateBuilder;
  implicitHeight(value: number): TableViewDelegateBuilder;
  implicitHeightBind(expr: string): TableViewDelegateBuilder;
  implicitWidth(value: number): TableViewDelegateBuilder;
  implicitWidthBind(expr: string): TableViewDelegateBuilder;
  indicator(value: ItemBuilder): TableViewDelegateBuilder;
  indicatorBind(expr: string): TableViewDelegateBuilder;
  leftInset(value: number): TableViewDelegateBuilder;
  leftInsetBind(expr: string): TableViewDelegateBuilder;
  leftPadding(value: number): TableViewDelegateBuilder;
  leftPaddingBind(expr: string): TableViewDelegateBuilder;
  locale(value: QmlValue): TableViewDelegateBuilder;
  localeBind(expr: string): TableViewDelegateBuilder;
  objectName(value: string): TableViewDelegateBuilder;
  objectNameBind(expr: string): TableViewDelegateBuilder;
  opacity(value: number): TableViewDelegateBuilder;
  opacityBind(expr: string): TableViewDelegateBuilder;
  padding(value: number): TableViewDelegateBuilder;
  paddingBind(expr: string): TableViewDelegateBuilder;
  palette(value: PaletteBuilder): TableViewDelegateBuilder;
  paletteBind(expr: string): TableViewDelegateBuilder;
  parent(value: ItemBuilder): TableViewDelegateBuilder;
  parentBind(expr: string): TableViewDelegateBuilder;
  rightInset(value: number): TableViewDelegateBuilder;
  rightInsetBind(expr: string): TableViewDelegateBuilder;
  rightPadding(value: number): TableViewDelegateBuilder;
  rightPaddingBind(expr: string): TableViewDelegateBuilder;
  rotation(value: number): TableViewDelegateBuilder;
  rotationBind(expr: string): TableViewDelegateBuilder;
  scale(value: number): TableViewDelegateBuilder;
  scaleBind(expr: string): TableViewDelegateBuilder;
  selected(value: boolean): TableViewDelegateBuilder;
  selectedBind(expr: string): TableViewDelegateBuilder;
  smooth(value: boolean): TableViewDelegateBuilder;
  smoothBind(expr: string): TableViewDelegateBuilder;
  spacing(value: number): TableViewDelegateBuilder;
  spacingBind(expr: string): TableViewDelegateBuilder;
  state(value: string): TableViewDelegateBuilder;
  stateBind(expr: string): TableViewDelegateBuilder;
  tableView(value: TableViewBuilder): TableViewDelegateBuilder;
  tableViewBind(expr: string): TableViewDelegateBuilder;
  text(value: string): TableViewDelegateBuilder;
  textBind(expr: string): TableViewDelegateBuilder;
  topInset(value: number): TableViewDelegateBuilder;
  topInsetBind(expr: string): TableViewDelegateBuilder;
  topPadding(value: number): TableViewDelegateBuilder;
  topPaddingBind(expr: string): TableViewDelegateBuilder;
  transformOrigin(value: QmlValue): TableViewDelegateBuilder;
  transformOriginBind(expr: string): TableViewDelegateBuilder;
  verticalPadding(value: number): TableViewDelegateBuilder;
  verticalPaddingBind(expr: string): TableViewDelegateBuilder;
  visible(value: boolean): TableViewDelegateBuilder;
  visibleBind(expr: string): TableViewDelegateBuilder;
  wheelEnabled(value: boolean): TableViewDelegateBuilder;
  wheelEnabledBind(expr: string): TableViewDelegateBuilder;
  width(value: number): TableViewDelegateBuilder;
  widthBind(expr: string): TableViewDelegateBuilder;
  x(value: number): TableViewDelegateBuilder;
  xBind(expr: string): TableViewDelegateBuilder;
  y(value: number): TableViewDelegateBuilder;
  yBind(expr: string): TableViewDelegateBuilder;
  z(value: number): TableViewDelegateBuilder;
  zBind(expr: string): TableViewDelegateBuilder;
  onActionChanged(handler: () => void): TableViewDelegateBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TableViewDelegateBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TableViewDelegateBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TableViewDelegateBuilder;
  onAutoExclusiveChanged(handler: () => void): TableViewDelegateBuilder;
  onAutoRepeatChanged(handler: () => void): TableViewDelegateBuilder;
  onAutoRepeatDelayChanged(handler: () => void): TableViewDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): TableViewDelegateBuilder;
  onAvailableHeightChanged(handler: () => void): TableViewDelegateBuilder;
  onAvailableWidthChanged(handler: () => void): TableViewDelegateBuilder;
  onBackgroundChanged(handler: () => void): TableViewDelegateBuilder;
  onBaselineOffsetChanged(handler: () => void): TableViewDelegateBuilder;
  onBottomInsetChanged(handler: () => void): TableViewDelegateBuilder;
  onBottomPaddingChanged(handler: () => void): TableViewDelegateBuilder;
  onCanceled(handler: () => void): TableViewDelegateBuilder;
  onCheckableChanged(handler: () => void): TableViewDelegateBuilder;
  onCheckedChanged(handler: () => void): TableViewDelegateBuilder;
  onChildrenChanged(handler: () => void): TableViewDelegateBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TableViewDelegateBuilder;
  onClicked(handler: () => void): TableViewDelegateBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TableViewDelegateBuilder;
  onContainmentMaskChanged(handler: () => void): TableViewDelegateBuilder;
  onContentItemChanged(handler: () => void): TableViewDelegateBuilder;
  onCurrentChanged(handler: () => void): TableViewDelegateBuilder;
  onDisplayChanged(handler: () => void): TableViewDelegateBuilder;
  onDoubleClicked(handler: () => void): TableViewDelegateBuilder;
  onDownChanged(handler: () => void): TableViewDelegateBuilder;
  onEditingChanged(handler: () => void): TableViewDelegateBuilder;
  onEnabledChanged(handler: () => void): TableViewDelegateBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TableViewDelegateBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TableViewDelegateBuilder;
  onFocusReasonChanged(handler: () => void): TableViewDelegateBuilder;
  onFontChanged(handler: () => void): TableViewDelegateBuilder;
  onHeightChanged(handler: () => void): TableViewDelegateBuilder;
  onHighlightedChanged(handler: () => void): TableViewDelegateBuilder;
  onHorizontalPaddingChanged(handler: () => void): TableViewDelegateBuilder;
  onHoverEnabledChanged(handler: () => void): TableViewDelegateBuilder;
  onHoveredChanged(handler: () => void): TableViewDelegateBuilder;
  onIconChanged(handler: () => void): TableViewDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): TableViewDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): TableViewDelegateBuilder;
  onImplicitContentHeightChanged(handler: () => void): TableViewDelegateBuilder;
  onImplicitContentWidthChanged(handler: () => void): TableViewDelegateBuilder;
  onImplicitHeightChanged(handler: () => void): TableViewDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): TableViewDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): TableViewDelegateBuilder;
  onImplicitWidthChanged(handler: () => void): TableViewDelegateBuilder;
  onIndicatorChanged(handler: () => void): TableViewDelegateBuilder;
  onLeftInsetChanged(handler: () => void): TableViewDelegateBuilder;
  onLeftPaddingChanged(handler: () => void): TableViewDelegateBuilder;
  onLocaleChanged(handler: () => void): TableViewDelegateBuilder;
  onMirroredChanged(handler: () => void): TableViewDelegateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TableViewDelegateBuilder;
  onOpacityChanged(handler: () => void): TableViewDelegateBuilder;
  onPaddingChanged(handler: () => void): TableViewDelegateBuilder;
  onPaletteChanged(handler: () => void): TableViewDelegateBuilder;
  onPaletteCreated(handler: () => void): TableViewDelegateBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TableViewDelegateBuilder;
  onPressAndHold(handler: () => void): TableViewDelegateBuilder;
  onPressXChanged(handler: () => void): TableViewDelegateBuilder;
  onPressYChanged(handler: () => void): TableViewDelegateBuilder;
  onPressed(handler: () => void): TableViewDelegateBuilder;
  onPressedChanged(handler: () => void): TableViewDelegateBuilder;
  onReleased(handler: () => void): TableViewDelegateBuilder;
  onRightInsetChanged(handler: () => void): TableViewDelegateBuilder;
  onRightPaddingChanged(handler: () => void): TableViewDelegateBuilder;
  onRotationChanged(handler: () => void): TableViewDelegateBuilder;
  onScaleChanged(handler: () => void): TableViewDelegateBuilder;
  onSelectedChanged(handler: () => void): TableViewDelegateBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TableViewDelegateBuilder;
  onSpacingChanged(handler: () => void): TableViewDelegateBuilder;
  onStateChanged(handler: (arg0: string) => void): TableViewDelegateBuilder;
  onTableViewChanged(handler: () => void): TableViewDelegateBuilder;
  onTextChanged(handler: () => void): TableViewDelegateBuilder;
  onToggled(handler: () => void): TableViewDelegateBuilder;
  onTopInsetChanged(handler: () => void): TableViewDelegateBuilder;
  onTopPaddingChanged(handler: () => void): TableViewDelegateBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TableViewDelegateBuilder;
  onVerticalPaddingChanged(handler: () => void): TableViewDelegateBuilder;
  onVisibleChanged(handler: () => void): TableViewDelegateBuilder;
  onVisibleChildrenChanged(handler: () => void): TableViewDelegateBuilder;
  onVisualFocusChanged(handler: () => void): TableViewDelegateBuilder;
  onWheelEnabledChanged(handler: () => void): TableViewDelegateBuilder;
  onWidthChanged(handler: () => void): TableViewDelegateBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TableViewDelegateBuilder;
  onXChanged(handler: () => void): TableViewDelegateBuilder;
  onYChanged(handler: () => void): TableViewDelegateBuilder;
  onZChanged(handler: () => void): TableViewDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TableViewDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): TableViewDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TableViewDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TableViewDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TableViewDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TableViewDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TableViewDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TableViewDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TableViewDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TableViewDelegateBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): TableViewDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TableViewDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TableViewDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TableViewDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TableViewDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TableViewDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TableViewDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TableViewDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TableViewDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TableViewDelegateBuilder;
}

export function TableViewDelegate(): TableViewDelegateBuilder {
  return new DslBuilderImpl('TableViewDelegate') as unknown as TableViewDelegateBuilder;
}

export namespace TableViewDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('TableViewDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('TableViewDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('TableViewDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('TableViewDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TableViewDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TableViewDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'TableViewDelegate',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken('TableViewDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken(
      'TableViewDelegate',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('TableViewDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TableViewDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TableViewDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TableViewDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TableViewDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TableViewDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TableViewDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TableViewDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TableViewDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TableViewDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TableViewDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'TableViewDelegate',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
