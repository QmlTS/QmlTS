// AUTO-GENERATED — DO NOT EDIT
// Type: HeaderViewDelegate
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
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
  display(value: QmlEnumToken): HeaderViewDelegateBuilder;
  displayBind(expr: string): HeaderViewDelegateBuilder;
  down(value: boolean): HeaderViewDelegateBuilder;
  downBind(expr: string): HeaderViewDelegateBuilder;
  editing(value: boolean): HeaderViewDelegateBuilder;
  editingBind(expr: string): HeaderViewDelegateBuilder;
  enabled(value: boolean): HeaderViewDelegateBuilder;
  enabledBind(expr: string): HeaderViewDelegateBuilder;
  focus(value: boolean): HeaderViewDelegateBuilder;
  focusBind(expr: string): HeaderViewDelegateBuilder;
  focusPolicy(value: QmlEnumToken): HeaderViewDelegateBuilder;
  focusPolicyBind(expr: string): HeaderViewDelegateBuilder;
  focusReason(value: QmlEnumToken): HeaderViewDelegateBuilder;
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
  locale(value: string): HeaderViewDelegateBuilder;
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
  transformOrigin(value: QmlEnumToken): HeaderViewDelegateBuilder;
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
  onActionChanged(body: string): HeaderViewDelegateBuilder;
  onActiveFocusChanged(body: string): HeaderViewDelegateBuilder;
  onActiveFocusOnTabChanged(body: string): HeaderViewDelegateBuilder;
  onAntialiasingChanged(body: string): HeaderViewDelegateBuilder;
  onAutoExclusiveChanged(body: string): HeaderViewDelegateBuilder;
  onAutoRepeatChanged(body: string): HeaderViewDelegateBuilder;
  onAutoRepeatDelayChanged(body: string): HeaderViewDelegateBuilder;
  onAutoRepeatIntervalChanged(body: string): HeaderViewDelegateBuilder;
  onAvailableHeightChanged(body: string): HeaderViewDelegateBuilder;
  onAvailableWidthChanged(body: string): HeaderViewDelegateBuilder;
  onBackgroundChanged(body: string): HeaderViewDelegateBuilder;
  onBaselineOffsetChanged(body: string): HeaderViewDelegateBuilder;
  onBottomInsetChanged(body: string): HeaderViewDelegateBuilder;
  onBottomPaddingChanged(body: string): HeaderViewDelegateBuilder;
  onCanceled(body: string): HeaderViewDelegateBuilder;
  onCheckableChanged(body: string): HeaderViewDelegateBuilder;
  onCheckedChanged(body: string): HeaderViewDelegateBuilder;
  onChildrenChanged(body: string): HeaderViewDelegateBuilder;
  onChildrenRectChanged(body: string): HeaderViewDelegateBuilder;
  onClicked(body: string): HeaderViewDelegateBuilder;
  onClipChanged(body: string): HeaderViewDelegateBuilder;
  onContainmentMaskChanged(body: string): HeaderViewDelegateBuilder;
  onContentItemChanged(body: string): HeaderViewDelegateBuilder;
  onCurrentChanged(body: string): HeaderViewDelegateBuilder;
  onDisplayChanged(body: string): HeaderViewDelegateBuilder;
  onDoubleClicked(body: string): HeaderViewDelegateBuilder;
  onDownChanged(body: string): HeaderViewDelegateBuilder;
  onEditingChanged(body: string): HeaderViewDelegateBuilder;
  onEnabledChanged(body: string): HeaderViewDelegateBuilder;
  onFocusChanged(body: string): HeaderViewDelegateBuilder;
  onFocusPolicyChanged(body: string): HeaderViewDelegateBuilder;
  onFocusReasonChanged(body: string): HeaderViewDelegateBuilder;
  onFontChanged(body: string): HeaderViewDelegateBuilder;
  onHeaderViewChanged(body: string): HeaderViewDelegateBuilder;
  onHeightChanged(body: string): HeaderViewDelegateBuilder;
  onHighlightedChanged(body: string): HeaderViewDelegateBuilder;
  onHorizontalPaddingChanged(body: string): HeaderViewDelegateBuilder;
  onHoverEnabledChanged(body: string): HeaderViewDelegateBuilder;
  onHoveredChanged(body: string): HeaderViewDelegateBuilder;
  onIconChanged(body: string): HeaderViewDelegateBuilder;
  onImplicitBackgroundHeightChanged(body: string): HeaderViewDelegateBuilder;
  onImplicitBackgroundWidthChanged(body: string): HeaderViewDelegateBuilder;
  onImplicitContentHeightChanged(body: string): HeaderViewDelegateBuilder;
  onImplicitContentWidthChanged(body: string): HeaderViewDelegateBuilder;
  onImplicitHeightChanged(body: string): HeaderViewDelegateBuilder;
  onImplicitIndicatorHeightChanged(body: string): HeaderViewDelegateBuilder;
  onImplicitIndicatorWidthChanged(body: string): HeaderViewDelegateBuilder;
  onImplicitWidthChanged(body: string): HeaderViewDelegateBuilder;
  onIndicatorChanged(body: string): HeaderViewDelegateBuilder;
  onLeftInsetChanged(body: string): HeaderViewDelegateBuilder;
  onLeftPaddingChanged(body: string): HeaderViewDelegateBuilder;
  onLocaleChanged(body: string): HeaderViewDelegateBuilder;
  onMirroredChanged(body: string): HeaderViewDelegateBuilder;
  onModelChanged(body: string): HeaderViewDelegateBuilder;
  onObjectNameChanged(body: string): HeaderViewDelegateBuilder;
  onOpacityChanged(body: string): HeaderViewDelegateBuilder;
  onOrientationChanged(body: string): HeaderViewDelegateBuilder;
  onPaddingChanged(body: string): HeaderViewDelegateBuilder;
  onPaletteChanged(body: string): HeaderViewDelegateBuilder;
  onPaletteCreated(body: string): HeaderViewDelegateBuilder;
  onParentChanged(body: string): HeaderViewDelegateBuilder;
  onPressAndHold(body: string): HeaderViewDelegateBuilder;
  onPressXChanged(body: string): HeaderViewDelegateBuilder;
  onPressYChanged(body: string): HeaderViewDelegateBuilder;
  onPressed(body: string): HeaderViewDelegateBuilder;
  onPressedChanged(body: string): HeaderViewDelegateBuilder;
  onReleased(body: string): HeaderViewDelegateBuilder;
  onRightInsetChanged(body: string): HeaderViewDelegateBuilder;
  onRightPaddingChanged(body: string): HeaderViewDelegateBuilder;
  onRotationChanged(body: string): HeaderViewDelegateBuilder;
  onScaleChanged(body: string): HeaderViewDelegateBuilder;
  onSelectedChanged(body: string): HeaderViewDelegateBuilder;
  onSmoothChanged(body: string): HeaderViewDelegateBuilder;
  onSpacingChanged(body: string): HeaderViewDelegateBuilder;
  onStateChanged(body: string): HeaderViewDelegateBuilder;
  onTableViewChanged(body: string): HeaderViewDelegateBuilder;
  onTextChanged(body: string): HeaderViewDelegateBuilder;
  onToggled(body: string): HeaderViewDelegateBuilder;
  onTopInsetChanged(body: string): HeaderViewDelegateBuilder;
  onTopPaddingChanged(body: string): HeaderViewDelegateBuilder;
  onTransformOriginChanged(body: string): HeaderViewDelegateBuilder;
  onVerticalPaddingChanged(body: string): HeaderViewDelegateBuilder;
  onVisibleChanged(body: string): HeaderViewDelegateBuilder;
  onVisibleChildrenChanged(body: string): HeaderViewDelegateBuilder;
  onVisualFocusChanged(body: string): HeaderViewDelegateBuilder;
  onWheelEnabledChanged(body: string): HeaderViewDelegateBuilder;
  onWidthChanged(body: string): HeaderViewDelegateBuilder;
  onWindowChanged(body: string): HeaderViewDelegateBuilder;
  onXChanged(body: string): HeaderViewDelegateBuilder;
  onYChanged(body: string): HeaderViewDelegateBuilder;
  onZChanged(body: string): HeaderViewDelegateBuilder;
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

const HEADERVIEWDELEGATE_META: TypeMetadata = {
  typeName: 'HeaderViewDelegate',
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
    { name: 'headerView', hasValue: true, hasBinding: true },
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
    { name: 'model', hasValue: true, hasBinding: true },
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
    { handlerName: 'onHeaderViewChanged', paramCount: 0 },
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
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOrientationChanged', paramCount: 0 },
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onControlChanged', paramCount: 0 },
        { handlerName: 'onDraggingChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitHandle',
      attachedTypeName: 'SplitHandle',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onClicked', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeView',
      attachedTypeName: 'SwipeView',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onDisplacementChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function HeaderViewDelegate(): HeaderViewDelegateBuilder {
  return createFluentBuilder(
    'HeaderViewDelegate',
    HEADERVIEWDELEGATE_META,
  ) as unknown as HeaderViewDelegateBuilder;
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
