// AUTO-GENERATED — DO NOT EDIT
// Type: TableViewDelegate
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlFont, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { TableViewBuilder } from '../QtQuick/TableView.js';
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
  display(value: QmlEnumToken): TableViewDelegateBuilder;
  displayBind(expr: string): TableViewDelegateBuilder;
  down(value: boolean): TableViewDelegateBuilder;
  downBind(expr: string): TableViewDelegateBuilder;
  editing(value: boolean): TableViewDelegateBuilder;
  editingBind(expr: string): TableViewDelegateBuilder;
  enabled(value: boolean): TableViewDelegateBuilder;
  enabledBind(expr: string): TableViewDelegateBuilder;
  focus(value: boolean): TableViewDelegateBuilder;
  focusBind(expr: string): TableViewDelegateBuilder;
  focusPolicy(value: QmlEnumToken): TableViewDelegateBuilder;
  focusPolicyBind(expr: string): TableViewDelegateBuilder;
  focusReason(value: QmlEnumToken): TableViewDelegateBuilder;
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
  locale(value: string): TableViewDelegateBuilder;
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
  transformOrigin(value: QmlEnumToken): TableViewDelegateBuilder;
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
  onActionChanged(body: string): TableViewDelegateBuilder;
  onActiveFocusChanged(body: string): TableViewDelegateBuilder;
  onActiveFocusOnTabChanged(body: string): TableViewDelegateBuilder;
  onAntialiasingChanged(body: string): TableViewDelegateBuilder;
  onAutoExclusiveChanged(body: string): TableViewDelegateBuilder;
  onAutoRepeatChanged(body: string): TableViewDelegateBuilder;
  onAutoRepeatDelayChanged(body: string): TableViewDelegateBuilder;
  onAutoRepeatIntervalChanged(body: string): TableViewDelegateBuilder;
  onAvailableHeightChanged(body: string): TableViewDelegateBuilder;
  onAvailableWidthChanged(body: string): TableViewDelegateBuilder;
  onBackgroundChanged(body: string): TableViewDelegateBuilder;
  onBaselineOffsetChanged(body: string): TableViewDelegateBuilder;
  onBottomInsetChanged(body: string): TableViewDelegateBuilder;
  onBottomPaddingChanged(body: string): TableViewDelegateBuilder;
  onCanceled(body: string): TableViewDelegateBuilder;
  onCheckableChanged(body: string): TableViewDelegateBuilder;
  onCheckedChanged(body: string): TableViewDelegateBuilder;
  onChildrenChanged(body: string): TableViewDelegateBuilder;
  onChildrenRectChanged(body: string): TableViewDelegateBuilder;
  onClicked(body: string): TableViewDelegateBuilder;
  onClipChanged(body: string): TableViewDelegateBuilder;
  onContainmentMaskChanged(body: string): TableViewDelegateBuilder;
  onContentItemChanged(body: string): TableViewDelegateBuilder;
  onCurrentChanged(body: string): TableViewDelegateBuilder;
  onDisplayChanged(body: string): TableViewDelegateBuilder;
  onDoubleClicked(body: string): TableViewDelegateBuilder;
  onDownChanged(body: string): TableViewDelegateBuilder;
  onEditingChanged(body: string): TableViewDelegateBuilder;
  onEnabledChanged(body: string): TableViewDelegateBuilder;
  onFocusChanged(body: string): TableViewDelegateBuilder;
  onFocusPolicyChanged(body: string): TableViewDelegateBuilder;
  onFocusReasonChanged(body: string): TableViewDelegateBuilder;
  onFontChanged(body: string): TableViewDelegateBuilder;
  onHeightChanged(body: string): TableViewDelegateBuilder;
  onHighlightedChanged(body: string): TableViewDelegateBuilder;
  onHorizontalPaddingChanged(body: string): TableViewDelegateBuilder;
  onHoverEnabledChanged(body: string): TableViewDelegateBuilder;
  onHoveredChanged(body: string): TableViewDelegateBuilder;
  onIconChanged(body: string): TableViewDelegateBuilder;
  onImplicitBackgroundHeightChanged(body: string): TableViewDelegateBuilder;
  onImplicitBackgroundWidthChanged(body: string): TableViewDelegateBuilder;
  onImplicitContentHeightChanged(body: string): TableViewDelegateBuilder;
  onImplicitContentWidthChanged(body: string): TableViewDelegateBuilder;
  onImplicitHeightChanged(body: string): TableViewDelegateBuilder;
  onImplicitIndicatorHeightChanged(body: string): TableViewDelegateBuilder;
  onImplicitIndicatorWidthChanged(body: string): TableViewDelegateBuilder;
  onImplicitWidthChanged(body: string): TableViewDelegateBuilder;
  onIndicatorChanged(body: string): TableViewDelegateBuilder;
  onLeftInsetChanged(body: string): TableViewDelegateBuilder;
  onLeftPaddingChanged(body: string): TableViewDelegateBuilder;
  onLocaleChanged(body: string): TableViewDelegateBuilder;
  onMirroredChanged(body: string): TableViewDelegateBuilder;
  onObjectNameChanged(body: string): TableViewDelegateBuilder;
  onOpacityChanged(body: string): TableViewDelegateBuilder;
  onPaddingChanged(body: string): TableViewDelegateBuilder;
  onPaletteChanged(body: string): TableViewDelegateBuilder;
  onPaletteCreated(body: string): TableViewDelegateBuilder;
  onParentChanged(body: string): TableViewDelegateBuilder;
  onPressAndHold(body: string): TableViewDelegateBuilder;
  onPressXChanged(body: string): TableViewDelegateBuilder;
  onPressYChanged(body: string): TableViewDelegateBuilder;
  onPressed(body: string): TableViewDelegateBuilder;
  onPressedChanged(body: string): TableViewDelegateBuilder;
  onReleased(body: string): TableViewDelegateBuilder;
  onRightInsetChanged(body: string): TableViewDelegateBuilder;
  onRightPaddingChanged(body: string): TableViewDelegateBuilder;
  onRotationChanged(body: string): TableViewDelegateBuilder;
  onScaleChanged(body: string): TableViewDelegateBuilder;
  onSelectedChanged(body: string): TableViewDelegateBuilder;
  onSmoothChanged(body: string): TableViewDelegateBuilder;
  onSpacingChanged(body: string): TableViewDelegateBuilder;
  onStateChanged(body: string): TableViewDelegateBuilder;
  onTableViewChanged(body: string): TableViewDelegateBuilder;
  onTextChanged(body: string): TableViewDelegateBuilder;
  onToggled(body: string): TableViewDelegateBuilder;
  onTopInsetChanged(body: string): TableViewDelegateBuilder;
  onTopPaddingChanged(body: string): TableViewDelegateBuilder;
  onTransformOriginChanged(body: string): TableViewDelegateBuilder;
  onVerticalPaddingChanged(body: string): TableViewDelegateBuilder;
  onVisibleChanged(body: string): TableViewDelegateBuilder;
  onVisibleChildrenChanged(body: string): TableViewDelegateBuilder;
  onVisualFocusChanged(body: string): TableViewDelegateBuilder;
  onWheelEnabledChanged(body: string): TableViewDelegateBuilder;
  onWidthChanged(body: string): TableViewDelegateBuilder;
  onWindowChanged(body: string): TableViewDelegateBuilder;
  onXChanged(body: string): TableViewDelegateBuilder;
  onYChanged(body: string): TableViewDelegateBuilder;
  onZChanged(body: string): TableViewDelegateBuilder;
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
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): TableViewDelegateBuilder;
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

const TABLEVIEWDELEGATE_META: TypeMetadata = {
  typeName: 'TableViewDelegate',
  properties: [
    { name: 'action', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoExclusive', hasValue: true, hasBinding: true },
    { name: 'autoRepeat', hasValue: true, hasBinding: true },
    { name: 'autoRepeatDelay', hasValue: true, hasBinding: true },
    { name: 'autoRepeatInterval', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'checkable', hasValue: true, hasBinding: true },
    { name: 'checked', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'current', hasValue: true, hasBinding: true },
    { name: 'display', hasValue: true, hasBinding: true },
    { name: 'down', hasValue: true, hasBinding: true },
    { name: 'editing', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'highlighted', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'indicator', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selected', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'tableView', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'wheelEnabled', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActionChanged', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAutoExclusiveChanged', paramCount: 0 },
    { handlerName: 'onAutoRepeatChanged', paramCount: 0 },
    { handlerName: 'onAutoRepeatDelayChanged', paramCount: 0 },
    { handlerName: 'onAutoRepeatIntervalChanged', paramCount: 0 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onCanceled', paramCount: 0 },
    { handlerName: 'onCheckableChanged', paramCount: 0 },
    { handlerName: 'onCheckedChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClicked', paramCount: 0 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onCurrentChanged', paramCount: 0 },
    { handlerName: 'onDisplayChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 0 },
    { handlerName: 'onDownChanged', paramCount: 0 },
    { handlerName: 'onEditingChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHighlightedChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitIndicatorHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitIndicatorWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onIndicatorChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPressAndHold', paramCount: 0 },
    { handlerName: 'onPressXChanged', paramCount: 0 },
    { handlerName: 'onPressYChanged', paramCount: 0 },
    { handlerName: 'onPressed', paramCount: 0 },
    { handlerName: 'onPressedChanged', paramCount: 0 },
    { handlerName: 'onReleased', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSelectedChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTableViewChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onToggled', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onVisualFocusChanged', paramCount: 0 },
    { handlerName: 'onWheelEnabledChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
    {
      methodName: 'anchors',
      groupName: 'anchors',
      properties: [
        { name: 'alignWhenCentered', hasValue: true, hasBinding: true },
        { name: 'baseline', hasValue: true, hasBinding: true },
        { name: 'baselineOffset', hasValue: true, hasBinding: true },
        { name: 'bottom', hasValue: true, hasBinding: true },
        { name: 'bottomMargin', hasValue: true, hasBinding: true },
        { name: 'centerIn', hasValue: true, hasBinding: true },
        { name: 'fill', hasValue: true, hasBinding: true },
        { name: 'horizontalCenter', hasValue: true, hasBinding: true },
        { name: 'horizontalCenterOffset', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'leftMargin', hasValue: true, hasBinding: true },
        { name: 'margins', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'rightMargin', hasValue: true, hasBinding: true },
        { name: 'top', hasValue: true, hasBinding: true },
        { name: 'topMargin', hasValue: true, hasBinding: true },
        { name: 'verticalCenter', hasValue: true, hasBinding: true },
        { name: 'verticalCenterOffset', hasValue: true, hasBinding: true },
      ],
    },
    {
      methodName: 'layer',
      groupName: 'layer',
      properties: [
        { name: 'effect', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'format', hasValue: true, hasBinding: true },
        { name: 'live', hasValue: true, hasBinding: true },
        { name: 'mipmap', hasValue: true, hasBinding: true },
        { name: 'samplerName', hasValue: true, hasBinding: true },
        { name: 'samples', hasValue: true, hasBinding: true },
        { name: 'smooth', hasValue: true, hasBinding: true },
        { name: 'sourceRect', hasValue: true, hasBinding: true },
        { name: 'textureMirroring', hasValue: true, hasBinding: true },
        { name: 'textureSize', hasValue: true, hasBinding: true },
        { name: 'wrapMode', hasValue: true, hasBinding: true },
      ],
    },
  ],
  attached: [
    {
      methodName: 'actionGroup',
      attachedTypeName: 'ActionGroup',
      properties: [
        { name: 'group', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'applicationWindow',
      attachedTypeName: 'ApplicationWindow',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActiveFocusControlChanged', paramCount: 0 },
        { handlerName: 'onContentItemChanged', paramCount: 0 },
        { handlerName: 'onFooterChanged', paramCount: 0 },
        { handlerName: 'onHeaderChanged', paramCount: 0 },
        { handlerName: 'onMenuBarChanged', paramCount: 0 },
        { handlerName: 'onWindowChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'buttonGroup',
      attachedTypeName: 'ButtonGroup',
      properties: [
        { name: 'group', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onGroupChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'contextMenu',
      attachedTypeName: 'ContextMenu',
      properties: [
        { name: 'menu', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onMenuChanged', paramCount: 0 },
        { handlerName: 'onRequested', paramCount: 1 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'dialogButtonBox',
      attachedTypeName: 'DialogButtonBox',
      properties: [
        { name: 'buttonRole', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onButtonBoxChanged', paramCount: 0 },
        { handlerName: 'onButtonRoleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'overlay',
      attachedTypeName: 'Overlay',
      properties: [
        { name: 'modal', hasValue: true, hasBinding: true },
        { name: 'modeless', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onModalChanged', paramCount: 0 },
        { handlerName: 'onModelessChanged', paramCount: 0 },
        { handlerName: 'onOverlayChanged', paramCount: 0 },
        { handlerName: 'onPressed', paramCount: 0 },
        { handlerName: 'onReleased', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'scrollBar',
      attachedTypeName: 'ScrollBar',
      properties: [
        { name: 'horizontal', hasValue: true, hasBinding: true },
        { name: 'vertical', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHorizontalChanged', paramCount: 0 },
        { handlerName: 'onVerticalChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'scrollIndicator',
      attachedTypeName: 'ScrollIndicator',
      properties: [
        { name: 'horizontal', hasValue: true, hasBinding: true },
        { name: 'vertical', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHorizontalChanged', paramCount: 0 },
        { handlerName: 'onVerticalChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'selectionRectangle',
      attachedTypeName: 'SelectionRectangle',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onControlChanged', paramCount: 0 },
        { handlerName: 'onDraggingChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitHandle',
      attachedTypeName: 'SplitHandle',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onHoveredChanged', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitView',
      attachedTypeName: 'SplitView',
      properties: [
        { name: 'fillHeight', hasValue: true, hasBinding: true },
        { name: 'fillWidth', hasValue: true, hasBinding: true },
        { name: 'maximumHeight', hasValue: true, hasBinding: true },
        { name: 'maximumWidth', hasValue: true, hasBinding: true },
        { name: 'minimumHeight', hasValue: true, hasBinding: true },
        { name: 'minimumWidth', hasValue: true, hasBinding: true },
        { name: 'preferredHeight', hasValue: true, hasBinding: true },
        { name: 'preferredWidth', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onFillHeightChanged', paramCount: 0 },
        { handlerName: 'onFillWidthChanged', paramCount: 0 },
        { handlerName: 'onMaximumHeightChanged', paramCount: 0 },
        { handlerName: 'onMaximumWidthChanged', paramCount: 0 },
        { handlerName: 'onMinimumHeightChanged', paramCount: 0 },
        { handlerName: 'onMinimumWidthChanged', paramCount: 0 },
        { handlerName: 'onPreferredHeightChanged', paramCount: 0 },
        { handlerName: 'onPreferredWidthChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'stackView',
      attachedTypeName: 'StackView',
      properties: [
        { name: 'visible', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActivated', paramCount: 0 },
        { handlerName: 'onActivating', paramCount: 0 },
        { handlerName: 'onDeactivated', paramCount: 0 },
        { handlerName: 'onDeactivating', paramCount: 0 },
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onRemoved', paramCount: 0 },
        { handlerName: 'onStatusChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onVisibleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeDelegate',
      attachedTypeName: 'SwipeDelegate',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onClicked', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeView',
      attachedTypeName: 'SwipeView',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onIsNextItemChanged', paramCount: 0 },
        { handlerName: 'onIsPreviousItemChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'tabBar',
      attachedTypeName: 'TabBar',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onPositionChanged', paramCount: 0 },
        { handlerName: 'onTabBarChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'textArea',
      attachedTypeName: 'TextArea',
      properties: [
        { name: 'flickable', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onFlickableChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'toolTip',
      attachedTypeName: 'ToolTip',
      properties: [
        { name: 'delay', hasValue: true, hasBinding: true },
        { name: 'text', hasValue: true, hasBinding: true },
        { name: 'timeout', hasValue: true, hasBinding: true },
        { name: 'visible', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDelayChanged', paramCount: 0 },
        { handlerName: 'onTextChanged', paramCount: 0 },
        { handlerName: 'onTimeoutChanged', paramCount: 0 },
        { handlerName: 'onVisibleChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'tumbler',
      attachedTypeName: 'Tumbler',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDisplacementChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function TableViewDelegate(): TableViewDelegateBuilder {
  return createFluentBuilder('TableViewDelegate', TABLEVIEWDELEGATE_META) as unknown as TableViewDelegateBuilder;
}

export namespace TableViewDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('TableViewDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('TableViewDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('TableViewDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('TableViewDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('TableViewDelegate', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('TableViewDelegate', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('TableViewDelegate', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TableViewDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TableViewDelegate', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TableViewDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('TableViewDelegate', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('TableViewDelegate', 'ItemChange', 'ItemTransformHasChanged');
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
    export const BottomRight = createEnumToken('TableViewDelegate', 'TransformOrigin', 'BottomRight');
  }
}
