// AUTO-GENERATED — DO NOT EDIT
// Type: TreeViewDelegate
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
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
import type { TreeViewBuilder } from '../QtQuick/TreeView.js';
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
export interface TreeViewDelegateBuilder {
  id(id: string): TreeViewDelegateBuilder;
  child(obj: QmlObjectBuilder): TreeViewDelegateBuilder;
  children(...objs: QmlObjectBuilder[]): TreeViewDelegateBuilder;

  action(value: ActionBuilder): TreeViewDelegateBuilder;
  actionBind(expr: string): TreeViewDelegateBuilder;
  activeFocusOnTab(value: boolean): TreeViewDelegateBuilder;
  activeFocusOnTabBind(expr: string): TreeViewDelegateBuilder;
  antialiasing(value: boolean): TreeViewDelegateBuilder;
  antialiasingBind(expr: string): TreeViewDelegateBuilder;
  autoExclusive(value: boolean): TreeViewDelegateBuilder;
  autoExclusiveBind(expr: string): TreeViewDelegateBuilder;
  autoRepeat(value: boolean): TreeViewDelegateBuilder;
  autoRepeatBind(expr: string): TreeViewDelegateBuilder;
  autoRepeatDelay(value: number): TreeViewDelegateBuilder;
  autoRepeatDelayBind(expr: string): TreeViewDelegateBuilder;
  autoRepeatInterval(value: number): TreeViewDelegateBuilder;
  autoRepeatIntervalBind(expr: string): TreeViewDelegateBuilder;
  background(value: ItemBuilder): TreeViewDelegateBuilder;
  backgroundBind(expr: string): TreeViewDelegateBuilder;
  baselineOffset(value: number): TreeViewDelegateBuilder;
  baselineOffsetBind(expr: string): TreeViewDelegateBuilder;
  bottomInset(value: number): TreeViewDelegateBuilder;
  bottomInsetBind(expr: string): TreeViewDelegateBuilder;
  bottomPadding(value: number): TreeViewDelegateBuilder;
  bottomPaddingBind(expr: string): TreeViewDelegateBuilder;
  checkable(value: boolean): TreeViewDelegateBuilder;
  checkableBind(expr: string): TreeViewDelegateBuilder;
  checked(value: boolean): TreeViewDelegateBuilder;
  checkedBind(expr: string): TreeViewDelegateBuilder;
  clip(value: boolean): TreeViewDelegateBuilder;
  clipBind(expr: string): TreeViewDelegateBuilder;
  containmentMask(value: QtObjectBuilder): TreeViewDelegateBuilder;
  containmentMaskBind(expr: string): TreeViewDelegateBuilder;
  contentItem(value: ItemBuilder): TreeViewDelegateBuilder;
  contentItemBind(expr: string): TreeViewDelegateBuilder;
  current(value: boolean): TreeViewDelegateBuilder;
  currentBind(expr: string): TreeViewDelegateBuilder;
  depth(value: number): TreeViewDelegateBuilder;
  depthBind(expr: string): TreeViewDelegateBuilder;
  display(value: QmlEnumToken): TreeViewDelegateBuilder;
  displayBind(expr: string): TreeViewDelegateBuilder;
  down(value: boolean): TreeViewDelegateBuilder;
  downBind(expr: string): TreeViewDelegateBuilder;
  editing(value: boolean): TreeViewDelegateBuilder;
  editingBind(expr: string): TreeViewDelegateBuilder;
  enabled(value: boolean): TreeViewDelegateBuilder;
  enabledBind(expr: string): TreeViewDelegateBuilder;
  expanded(value: boolean): TreeViewDelegateBuilder;
  expandedBind(expr: string): TreeViewDelegateBuilder;
  focus(value: boolean): TreeViewDelegateBuilder;
  focusBind(expr: string): TreeViewDelegateBuilder;
  focusPolicy(value: QmlEnumToken): TreeViewDelegateBuilder;
  focusPolicyBind(expr: string): TreeViewDelegateBuilder;
  focusReason(value: QmlEnumToken): TreeViewDelegateBuilder;
  focusReasonBind(expr: string): TreeViewDelegateBuilder;
  font(value: QmlFont): TreeViewDelegateBuilder;
  fontBind(expr: string): TreeViewDelegateBuilder;
  hasChildren(value: boolean): TreeViewDelegateBuilder;
  hasChildrenBind(expr: string): TreeViewDelegateBuilder;
  height(value: number): TreeViewDelegateBuilder;
  heightBind(expr: string): TreeViewDelegateBuilder;
  highlighted(value: boolean): TreeViewDelegateBuilder;
  highlightedBind(expr: string): TreeViewDelegateBuilder;
  horizontalPadding(value: number): TreeViewDelegateBuilder;
  horizontalPaddingBind(expr: string): TreeViewDelegateBuilder;
  hoverEnabled(value: boolean): TreeViewDelegateBuilder;
  hoverEnabledBind(expr: string): TreeViewDelegateBuilder;
  icon(value: QmlValue): TreeViewDelegateBuilder;
  iconBind(expr: string): TreeViewDelegateBuilder;
  implicitHeight(value: number): TreeViewDelegateBuilder;
  implicitHeightBind(expr: string): TreeViewDelegateBuilder;
  implicitWidth(value: number): TreeViewDelegateBuilder;
  implicitWidthBind(expr: string): TreeViewDelegateBuilder;
  indentation(value: number): TreeViewDelegateBuilder;
  indentationBind(expr: string): TreeViewDelegateBuilder;
  indicator(value: ItemBuilder): TreeViewDelegateBuilder;
  indicatorBind(expr: string): TreeViewDelegateBuilder;
  isTreeNode(value: boolean): TreeViewDelegateBuilder;
  isTreeNodeBind(expr: string): TreeViewDelegateBuilder;
  leftInset(value: number): TreeViewDelegateBuilder;
  leftInsetBind(expr: string): TreeViewDelegateBuilder;
  leftMargin(value: number): TreeViewDelegateBuilder;
  leftMarginBind(expr: string): TreeViewDelegateBuilder;
  leftPadding(value: number): TreeViewDelegateBuilder;
  leftPaddingBind(expr: string): TreeViewDelegateBuilder;
  locale(value: string): TreeViewDelegateBuilder;
  localeBind(expr: string): TreeViewDelegateBuilder;
  objectName(value: string): TreeViewDelegateBuilder;
  objectNameBind(expr: string): TreeViewDelegateBuilder;
  opacity(value: number): TreeViewDelegateBuilder;
  opacityBind(expr: string): TreeViewDelegateBuilder;
  padding(value: number): TreeViewDelegateBuilder;
  paddingBind(expr: string): TreeViewDelegateBuilder;
  palette(value: PaletteBuilder): TreeViewDelegateBuilder;
  paletteBind(expr: string): TreeViewDelegateBuilder;
  parent(value: ItemBuilder): TreeViewDelegateBuilder;
  parentBind(expr: string): TreeViewDelegateBuilder;
  rightInset(value: number): TreeViewDelegateBuilder;
  rightInsetBind(expr: string): TreeViewDelegateBuilder;
  rightMargin(value: number): TreeViewDelegateBuilder;
  rightMarginBind(expr: string): TreeViewDelegateBuilder;
  rightPadding(value: number): TreeViewDelegateBuilder;
  rightPaddingBind(expr: string): TreeViewDelegateBuilder;
  rotation(value: number): TreeViewDelegateBuilder;
  rotationBind(expr: string): TreeViewDelegateBuilder;
  scale(value: number): TreeViewDelegateBuilder;
  scaleBind(expr: string): TreeViewDelegateBuilder;
  selected(value: boolean): TreeViewDelegateBuilder;
  selectedBind(expr: string): TreeViewDelegateBuilder;
  smooth(value: boolean): TreeViewDelegateBuilder;
  smoothBind(expr: string): TreeViewDelegateBuilder;
  spacing(value: number): TreeViewDelegateBuilder;
  spacingBind(expr: string): TreeViewDelegateBuilder;
  state(value: string): TreeViewDelegateBuilder;
  stateBind(expr: string): TreeViewDelegateBuilder;
  text(value: string): TreeViewDelegateBuilder;
  textBind(expr: string): TreeViewDelegateBuilder;
  topInset(value: number): TreeViewDelegateBuilder;
  topInsetBind(expr: string): TreeViewDelegateBuilder;
  topPadding(value: number): TreeViewDelegateBuilder;
  topPaddingBind(expr: string): TreeViewDelegateBuilder;
  transformOrigin(value: QmlEnumToken): TreeViewDelegateBuilder;
  transformOriginBind(expr: string): TreeViewDelegateBuilder;
  treeView(value: TreeViewBuilder): TreeViewDelegateBuilder;
  treeViewBind(expr: string): TreeViewDelegateBuilder;
  verticalPadding(value: number): TreeViewDelegateBuilder;
  verticalPaddingBind(expr: string): TreeViewDelegateBuilder;
  visible(value: boolean): TreeViewDelegateBuilder;
  visibleBind(expr: string): TreeViewDelegateBuilder;
  wheelEnabled(value: boolean): TreeViewDelegateBuilder;
  wheelEnabledBind(expr: string): TreeViewDelegateBuilder;
  width(value: number): TreeViewDelegateBuilder;
  widthBind(expr: string): TreeViewDelegateBuilder;
  x(value: number): TreeViewDelegateBuilder;
  xBind(expr: string): TreeViewDelegateBuilder;
  y(value: number): TreeViewDelegateBuilder;
  yBind(expr: string): TreeViewDelegateBuilder;
  z(value: number): TreeViewDelegateBuilder;
  zBind(expr: string): TreeViewDelegateBuilder;
  onActionChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onAutoExclusiveChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onAutoRepeatChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onAutoRepeatDelayChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onCanceled(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onCheckableChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onCheckedChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onClicked(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onClipChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onCurrentChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onDepthChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onDisplayChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onDoubleClicked(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onDownChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onEditingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onExpandedChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onFontChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onHasChildrenChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onHighlightedChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onIconChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onIndentationChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onIndicatorChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onIsTreeNodeChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onLeftMarginChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onPressAndHold(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onPressXChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onPressYChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onPressed(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onPressedChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onReleased(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onRightMarginChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onSelectedChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onStateChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onTextChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onToggled(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onTreeviewChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onXChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onYChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  onZChanged(handler: DslSignalHandlerValue): TreeViewDelegateBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TreeViewDelegateBuilder;
  layer(setup: (b: LayerBuilder) => void): TreeViewDelegateBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TreeViewDelegateBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TreeViewDelegateBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TreeViewDelegateBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TreeViewDelegateBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TreeViewDelegateBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TreeViewDelegateBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TreeViewDelegateBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TreeViewDelegateBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): TreeViewDelegateBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TreeViewDelegateBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TreeViewDelegateBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TreeViewDelegateBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TreeViewDelegateBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TreeViewDelegateBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TreeViewDelegateBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TreeViewDelegateBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TreeViewDelegateBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TreeViewDelegateBuilder;
}

const TREEVIEWDELEGATE_META: TypeMetadata = {
  typeName: 'TreeViewDelegate',
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
    { name: 'depth', hasValue: true, hasBinding: true },
    { name: 'display', hasValue: true, hasBinding: true },
    { name: 'down', hasValue: true, hasBinding: true },
    { name: 'editing', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'expanded', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'hasChildren', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'highlighted', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'indentation', hasValue: true, hasBinding: true },
    { name: 'indicator', hasValue: true, hasBinding: true },
    { name: 'isTreeNode', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftMargin', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightMargin', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selected', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'treeView', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDepthChanged', paramCount: 0 },
    { handlerName: 'onDisplayChanged', paramCount: 0 },
    { handlerName: 'onDoubleClicked', paramCount: 0 },
    { handlerName: 'onDownChanged', paramCount: 0 },
    { handlerName: 'onEditingChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onExpandedChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHasChildrenChanged', paramCount: 0 },
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
    { handlerName: 'onIndentationChanged', paramCount: 0 },
    { handlerName: 'onIndicatorChanged', paramCount: 0 },
    { handlerName: 'onIsTreeNodeChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftMarginChanged', paramCount: 0 },
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
    { handlerName: 'onRightMarginChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSelectedChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onToggled', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onTreeviewChanged', paramCount: 0 },
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

export function TreeViewDelegate(): TreeViewDelegateBuilder {
  return createFluentBuilder(
    'TreeViewDelegate',
    TREEVIEWDELEGATE_META,
  ) as unknown as TreeViewDelegateBuilder;
}

export namespace TreeViewDelegate {
  export namespace Display {
    export const IconOnly = createEnumToken('TreeViewDelegate', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('TreeViewDelegate', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('TreeViewDelegate', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('TreeViewDelegate', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TreeViewDelegate',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TreeViewDelegate',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'TreeViewDelegate',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken('TreeViewDelegate', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken(
      'TreeViewDelegate',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('TreeViewDelegate', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TreeViewDelegate',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TreeViewDelegate',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TreeViewDelegate', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TreeViewDelegate', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TreeViewDelegate', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TreeViewDelegate', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TreeViewDelegate', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TreeViewDelegate', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TreeViewDelegate', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TreeViewDelegate', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'TreeViewDelegate',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
