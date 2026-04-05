// AUTO-GENERATED — DO NOT EDIT
// Type: HeaderViewDelegate
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
export interface HeaderViewDelegateBuilder {
  id(id: string): HeaderViewDelegateBuilder;
  child(obj: QmlObjectBuilder): HeaderViewDelegateBuilder;

  action(value: ActionBuilder): HeaderViewDelegateBuilder;
  actionBind(expr: string): HeaderViewDelegateBuilder;
  activeFocusOnTab(value: boolean): HeaderViewDelegateBuilder;
  activeFocusOnTabBind(expr: string): HeaderViewDelegateBuilder;
  antialiasing(value: boolean): HeaderViewDelegateBuilder;
  antialiasingBind(expr: string): HeaderViewDelegateBuilder;
  autoExclusive(value: boolean): HeaderViewDelegateBuilder;
  autoExclusiveBind(expr: string): HeaderViewDelegateBuilder;
  autoRepeat(value: boolean): HeaderViewDelegateBuilder;
  autoRepeatBind(expr: string): HeaderViewDelegateBuilder;
  autoRepeatDelay(value: number): HeaderViewDelegateBuilder;
  autoRepeatDelayBind(expr: string): HeaderViewDelegateBuilder;
  autoRepeatInterval(value: number): HeaderViewDelegateBuilder;
  autoRepeatIntervalBind(expr: string): HeaderViewDelegateBuilder;
  background(value: ItemBuilder): HeaderViewDelegateBuilder;
  backgroundBind(expr: string): HeaderViewDelegateBuilder;
  baselineOffset(value: number): HeaderViewDelegateBuilder;
  baselineOffsetBind(expr: string): HeaderViewDelegateBuilder;
  bottomInset(value: number): HeaderViewDelegateBuilder;
  bottomInsetBind(expr: string): HeaderViewDelegateBuilder;
  bottomPadding(value: number): HeaderViewDelegateBuilder;
  bottomPaddingBind(expr: string): HeaderViewDelegateBuilder;
  checkable(value: boolean): HeaderViewDelegateBuilder;
  checkableBind(expr: string): HeaderViewDelegateBuilder;
  checked(value: boolean): HeaderViewDelegateBuilder;
  checkedBind(expr: string): HeaderViewDelegateBuilder;
  clip(value: boolean): HeaderViewDelegateBuilder;
  clipBind(expr: string): HeaderViewDelegateBuilder;
  containmentMask(value: QtObjectBuilder): HeaderViewDelegateBuilder;
  containmentMaskBind(expr: string): HeaderViewDelegateBuilder;
  contentItem(value: ItemBuilder): HeaderViewDelegateBuilder;
  contentItemBind(expr: string): HeaderViewDelegateBuilder;
  current(value: boolean): HeaderViewDelegateBuilder;
  currentBind(expr: string): HeaderViewDelegateBuilder;
  display(value: QmlValue): HeaderViewDelegateBuilder;
  displayBind(expr: string): HeaderViewDelegateBuilder;
  down(value: boolean): HeaderViewDelegateBuilder;
  downBind(expr: string): HeaderViewDelegateBuilder;
  editing(value: boolean): HeaderViewDelegateBuilder;
  editingBind(expr: string): HeaderViewDelegateBuilder;
  enabled(value: boolean): HeaderViewDelegateBuilder;
  enabledBind(expr: string): HeaderViewDelegateBuilder;
  focus(value: boolean): HeaderViewDelegateBuilder;
  focusBind(expr: string): HeaderViewDelegateBuilder;
  focusPolicy(value: QmlValue): HeaderViewDelegateBuilder;
  focusPolicyBind(expr: string): HeaderViewDelegateBuilder;
  focusReason(value: QmlValue): HeaderViewDelegateBuilder;
  focusReasonBind(expr: string): HeaderViewDelegateBuilder;
  font(value: QmlFont): HeaderViewDelegateBuilder;
  fontBind(expr: string): HeaderViewDelegateBuilder;
  headerView(value: QmlValue): HeaderViewDelegateBuilder;
  headerViewBind(expr: string): HeaderViewDelegateBuilder;
  height(value: number): HeaderViewDelegateBuilder;
  heightBind(expr: string): HeaderViewDelegateBuilder;
  highlighted(value: boolean): HeaderViewDelegateBuilder;
  highlightedBind(expr: string): HeaderViewDelegateBuilder;
  horizontalPadding(value: number): HeaderViewDelegateBuilder;
  horizontalPaddingBind(expr: string): HeaderViewDelegateBuilder;
  hoverEnabled(value: boolean): HeaderViewDelegateBuilder;
  hoverEnabledBind(expr: string): HeaderViewDelegateBuilder;
  icon(value: QmlValue): HeaderViewDelegateBuilder;
  iconBind(expr: string): HeaderViewDelegateBuilder;
  implicitHeight(value: number): HeaderViewDelegateBuilder;
  implicitHeightBind(expr: string): HeaderViewDelegateBuilder;
  implicitWidth(value: number): HeaderViewDelegateBuilder;
  implicitWidthBind(expr: string): HeaderViewDelegateBuilder;
  indicator(value: ItemBuilder): HeaderViewDelegateBuilder;
  indicatorBind(expr: string): HeaderViewDelegateBuilder;
  leftInset(value: number): HeaderViewDelegateBuilder;
  leftInsetBind(expr: string): HeaderViewDelegateBuilder;
  leftPadding(value: number): HeaderViewDelegateBuilder;
  leftPaddingBind(expr: string): HeaderViewDelegateBuilder;
  locale(value: QmlValue): HeaderViewDelegateBuilder;
  localeBind(expr: string): HeaderViewDelegateBuilder;
  model(value: QmlValue): HeaderViewDelegateBuilder;
  modelBind(expr: string): HeaderViewDelegateBuilder;
  objectName(value: string): HeaderViewDelegateBuilder;
  objectNameBind(expr: string): HeaderViewDelegateBuilder;
  opacity(value: number): HeaderViewDelegateBuilder;
  opacityBind(expr: string): HeaderViewDelegateBuilder;
  padding(value: number): HeaderViewDelegateBuilder;
  paddingBind(expr: string): HeaderViewDelegateBuilder;
  palette(value: PaletteBuilder): HeaderViewDelegateBuilder;
  paletteBind(expr: string): HeaderViewDelegateBuilder;
  parent(value: ItemBuilder): HeaderViewDelegateBuilder;
  parentBind(expr: string): HeaderViewDelegateBuilder;
  rightInset(value: number): HeaderViewDelegateBuilder;
  rightInsetBind(expr: string): HeaderViewDelegateBuilder;
  rightPadding(value: number): HeaderViewDelegateBuilder;
  rightPaddingBind(expr: string): HeaderViewDelegateBuilder;
  rotation(value: number): HeaderViewDelegateBuilder;
  rotationBind(expr: string): HeaderViewDelegateBuilder;
  scale(value: number): HeaderViewDelegateBuilder;
  scaleBind(expr: string): HeaderViewDelegateBuilder;
  selected(value: boolean): HeaderViewDelegateBuilder;
  selectedBind(expr: string): HeaderViewDelegateBuilder;
  smooth(value: boolean): HeaderViewDelegateBuilder;
  smoothBind(expr: string): HeaderViewDelegateBuilder;
  spacing(value: number): HeaderViewDelegateBuilder;
  spacingBind(expr: string): HeaderViewDelegateBuilder;
  state(value: string): HeaderViewDelegateBuilder;
  stateBind(expr: string): HeaderViewDelegateBuilder;
  tableView(value: TableViewBuilder): HeaderViewDelegateBuilder;
  tableViewBind(expr: string): HeaderViewDelegateBuilder;
  text(value: string): HeaderViewDelegateBuilder;
  textBind(expr: string): HeaderViewDelegateBuilder;
  topInset(value: number): HeaderViewDelegateBuilder;
  topInsetBind(expr: string): HeaderViewDelegateBuilder;
  topPadding(value: number): HeaderViewDelegateBuilder;
  topPaddingBind(expr: string): HeaderViewDelegateBuilder;
  transformOrigin(value: QmlValue): HeaderViewDelegateBuilder;
  transformOriginBind(expr: string): HeaderViewDelegateBuilder;
  verticalPadding(value: number): HeaderViewDelegateBuilder;
  verticalPaddingBind(expr: string): HeaderViewDelegateBuilder;
  visible(value: boolean): HeaderViewDelegateBuilder;
  visibleBind(expr: string): HeaderViewDelegateBuilder;
  wheelEnabled(value: boolean): HeaderViewDelegateBuilder;
  wheelEnabledBind(expr: string): HeaderViewDelegateBuilder;
  width(value: number): HeaderViewDelegateBuilder;
  widthBind(expr: string): HeaderViewDelegateBuilder;
  x(value: number): HeaderViewDelegateBuilder;
  xBind(expr: string): HeaderViewDelegateBuilder;
  y(value: number): HeaderViewDelegateBuilder;
  yBind(expr: string): HeaderViewDelegateBuilder;
  z(value: number): HeaderViewDelegateBuilder;
  zBind(expr: string): HeaderViewDelegateBuilder;
  onActionChanged(handler: () => void): HeaderViewDelegateBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): HeaderViewDelegateBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): HeaderViewDelegateBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): HeaderViewDelegateBuilder;
  onAutoExclusiveChanged(handler: () => void): HeaderViewDelegateBuilder;
  onAutoRepeatChanged(handler: () => void): HeaderViewDelegateBuilder;
  onAutoRepeatDelayChanged(handler: () => void): HeaderViewDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): HeaderViewDelegateBuilder;
  onAvailableHeightChanged(handler: () => void): HeaderViewDelegateBuilder;
  onAvailableWidthChanged(handler: () => void): HeaderViewDelegateBuilder;
  onBackgroundChanged(handler: () => void): HeaderViewDelegateBuilder;
  onBaselineOffsetChanged(handler: () => void): HeaderViewDelegateBuilder;
  onBottomInsetChanged(handler: () => void): HeaderViewDelegateBuilder;
  onBottomPaddingChanged(handler: () => void): HeaderViewDelegateBuilder;
  onCanceled(handler: () => void): HeaderViewDelegateBuilder;
  onCheckableChanged(handler: () => void): HeaderViewDelegateBuilder;
  onCheckedChanged(handler: () => void): HeaderViewDelegateBuilder;
  onChildrenChanged(handler: () => void): HeaderViewDelegateBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): HeaderViewDelegateBuilder;
  onClicked(handler: () => void): HeaderViewDelegateBuilder;
  onClipChanged(handler: (arg0: boolean) => void): HeaderViewDelegateBuilder;
  onContainmentMaskChanged(handler: () => void): HeaderViewDelegateBuilder;
  onContentItemChanged(handler: () => void): HeaderViewDelegateBuilder;
  onCurrentChanged(handler: () => void): HeaderViewDelegateBuilder;
  onDisplayChanged(handler: () => void): HeaderViewDelegateBuilder;
  onDoubleClicked(handler: () => void): HeaderViewDelegateBuilder;
  onDownChanged(handler: () => void): HeaderViewDelegateBuilder;
  onEditingChanged(handler: () => void): HeaderViewDelegateBuilder;
  onEnabledChanged(handler: () => void): HeaderViewDelegateBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): HeaderViewDelegateBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): HeaderViewDelegateBuilder;
  onFocusReasonChanged(handler: () => void): HeaderViewDelegateBuilder;
  onFontChanged(handler: () => void): HeaderViewDelegateBuilder;
  onHeaderViewChanged(handler: () => void): HeaderViewDelegateBuilder;
  onHeightChanged(handler: () => void): HeaderViewDelegateBuilder;
  onHighlightedChanged(handler: () => void): HeaderViewDelegateBuilder;
  onHorizontalPaddingChanged(handler: () => void): HeaderViewDelegateBuilder;
  onHoverEnabledChanged(handler: () => void): HeaderViewDelegateBuilder;
  onHoveredChanged(handler: () => void): HeaderViewDelegateBuilder;
  onIconChanged(handler: () => void): HeaderViewDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): HeaderViewDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): HeaderViewDelegateBuilder;
  onImplicitContentHeightChanged(handler: () => void): HeaderViewDelegateBuilder;
  onImplicitContentWidthChanged(handler: () => void): HeaderViewDelegateBuilder;
  onImplicitHeightChanged(handler: () => void): HeaderViewDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): HeaderViewDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): HeaderViewDelegateBuilder;
  onImplicitWidthChanged(handler: () => void): HeaderViewDelegateBuilder;
  onIndicatorChanged(handler: () => void): HeaderViewDelegateBuilder;
  onLeftInsetChanged(handler: () => void): HeaderViewDelegateBuilder;
  onLeftPaddingChanged(handler: () => void): HeaderViewDelegateBuilder;
  onLocaleChanged(handler: () => void): HeaderViewDelegateBuilder;
  onMirroredChanged(handler: () => void): HeaderViewDelegateBuilder;
  onModelChanged(handler: () => void): HeaderViewDelegateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): HeaderViewDelegateBuilder;
  onOpacityChanged(handler: () => void): HeaderViewDelegateBuilder;
  onOrientationChanged(handler: () => void): HeaderViewDelegateBuilder;
  onPaddingChanged(handler: () => void): HeaderViewDelegateBuilder;
  onPaletteChanged(handler: () => void): HeaderViewDelegateBuilder;
  onPaletteCreated(handler: () => void): HeaderViewDelegateBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): HeaderViewDelegateBuilder;
  onPressAndHold(handler: () => void): HeaderViewDelegateBuilder;
  onPressXChanged(handler: () => void): HeaderViewDelegateBuilder;
  onPressYChanged(handler: () => void): HeaderViewDelegateBuilder;
  onPressed(handler: () => void): HeaderViewDelegateBuilder;
  onPressedChanged(handler: () => void): HeaderViewDelegateBuilder;
  onReleased(handler: () => void): HeaderViewDelegateBuilder;
  onRightInsetChanged(handler: () => void): HeaderViewDelegateBuilder;
  onRightPaddingChanged(handler: () => void): HeaderViewDelegateBuilder;
  onRotationChanged(handler: () => void): HeaderViewDelegateBuilder;
  onScaleChanged(handler: () => void): HeaderViewDelegateBuilder;
  onSelectedChanged(handler: () => void): HeaderViewDelegateBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): HeaderViewDelegateBuilder;
  onSpacingChanged(handler: () => void): HeaderViewDelegateBuilder;
  onStateChanged(handler: (arg0: string) => void): HeaderViewDelegateBuilder;
  onTableViewChanged(handler: () => void): HeaderViewDelegateBuilder;
  onTextChanged(handler: () => void): HeaderViewDelegateBuilder;
  onToggled(handler: () => void): HeaderViewDelegateBuilder;
  onTopInsetChanged(handler: () => void): HeaderViewDelegateBuilder;
  onTopPaddingChanged(handler: () => void): HeaderViewDelegateBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): HeaderViewDelegateBuilder;
  onVerticalPaddingChanged(handler: () => void): HeaderViewDelegateBuilder;
  onVisibleChanged(handler: () => void): HeaderViewDelegateBuilder;
  onVisibleChildrenChanged(handler: () => void): HeaderViewDelegateBuilder;
  onVisualFocusChanged(handler: () => void): HeaderViewDelegateBuilder;
  onWheelEnabledChanged(handler: () => void): HeaderViewDelegateBuilder;
  onWidthChanged(handler: () => void): HeaderViewDelegateBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): HeaderViewDelegateBuilder;
  onXChanged(handler: () => void): HeaderViewDelegateBuilder;
  onYChanged(handler: () => void): HeaderViewDelegateBuilder;
  onZChanged(handler: () => void): HeaderViewDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): HeaderViewDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): HeaderViewDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): HeaderViewDelegateBuilder;
  applicationWindow(
    setup: (b: ApplicationWindowAttachedBuilder) => void,
  ): HeaderViewDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): HeaderViewDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): HeaderViewDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): HeaderViewDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): HeaderViewDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): HeaderViewDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): HeaderViewDelegateBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): HeaderViewDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): HeaderViewDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): HeaderViewDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): HeaderViewDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): HeaderViewDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): HeaderViewDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): HeaderViewDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): HeaderViewDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): HeaderViewDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): HeaderViewDelegateBuilder;
}

export function HeaderViewDelegate(): HeaderViewDelegateBuilder {
  return new DslBuilderImpl('HeaderViewDelegate') as unknown as HeaderViewDelegateBuilder;
}

export namespace HeaderViewDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('HeaderViewDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('HeaderViewDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken(
      'HeaderViewDelegate',
      'Display',
      'TextBesideIcon',
    );
    export const TextUnderIcon = createEnumToken('HeaderViewDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'HeaderViewDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'HeaderViewDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'HeaderViewDelegate',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'HeaderViewDelegate',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'HeaderViewDelegate',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('HeaderViewDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'HeaderViewDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'HeaderViewDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('HeaderViewDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('HeaderViewDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('HeaderViewDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('HeaderViewDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('HeaderViewDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('HeaderViewDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'HeaderViewDelegate',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('HeaderViewDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'HeaderViewDelegate',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
