// AUTO-GENERATED — DO NOT EDIT
// Type: TreeViewDelegate
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { TreeViewBuilder } from '../QtQuick/TreeView.js';
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
export interface TreeViewDelegateBuilder {
  id(id: string): TreeViewDelegateBuilder;
  child(obj: QmlObjectBuilder): TreeViewDelegateBuilder;

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
  display(value: QmlValue): TreeViewDelegateBuilder;
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
  focusPolicy(value: QmlValue): TreeViewDelegateBuilder;
  focusPolicyBind(expr: string): TreeViewDelegateBuilder;
  focusReason(value: QmlValue): TreeViewDelegateBuilder;
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
  locale(value: QmlValue): TreeViewDelegateBuilder;
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
  transformOrigin(value: QmlValue): TreeViewDelegateBuilder;
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
  onActionChanged(handler: () => void): TreeViewDelegateBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TreeViewDelegateBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TreeViewDelegateBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TreeViewDelegateBuilder;
  onAutoExclusiveChanged(handler: () => void): TreeViewDelegateBuilder;
  onAutoRepeatChanged(handler: () => void): TreeViewDelegateBuilder;
  onAutoRepeatDelayChanged(handler: () => void): TreeViewDelegateBuilder;
  onAutoRepeatIntervalChanged(handler: () => void): TreeViewDelegateBuilder;
  onAvailableHeightChanged(handler: () => void): TreeViewDelegateBuilder;
  onAvailableWidthChanged(handler: () => void): TreeViewDelegateBuilder;
  onBackgroundChanged(handler: () => void): TreeViewDelegateBuilder;
  onBaselineOffsetChanged(handler: () => void): TreeViewDelegateBuilder;
  onBottomInsetChanged(handler: () => void): TreeViewDelegateBuilder;
  onBottomPaddingChanged(handler: () => void): TreeViewDelegateBuilder;
  onCanceled(handler: () => void): TreeViewDelegateBuilder;
  onCheckableChanged(handler: () => void): TreeViewDelegateBuilder;
  onCheckedChanged(handler: () => void): TreeViewDelegateBuilder;
  onChildrenChanged(handler: () => void): TreeViewDelegateBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TreeViewDelegateBuilder;
  onClicked(handler: () => void): TreeViewDelegateBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TreeViewDelegateBuilder;
  onContainmentMaskChanged(handler: () => void): TreeViewDelegateBuilder;
  onContentItemChanged(handler: () => void): TreeViewDelegateBuilder;
  onCurrentChanged(handler: () => void): TreeViewDelegateBuilder;
  onDepthChanged(handler: () => void): TreeViewDelegateBuilder;
  onDisplayChanged(handler: () => void): TreeViewDelegateBuilder;
  onDoubleClicked(handler: () => void): TreeViewDelegateBuilder;
  onDownChanged(handler: () => void): TreeViewDelegateBuilder;
  onEditingChanged(handler: () => void): TreeViewDelegateBuilder;
  onEnabledChanged(handler: () => void): TreeViewDelegateBuilder;
  onExpandedChanged(handler: () => void): TreeViewDelegateBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TreeViewDelegateBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TreeViewDelegateBuilder;
  onFocusReasonChanged(handler: () => void): TreeViewDelegateBuilder;
  onFontChanged(handler: () => void): TreeViewDelegateBuilder;
  onHasChildrenChanged(handler: () => void): TreeViewDelegateBuilder;
  onHeightChanged(handler: () => void): TreeViewDelegateBuilder;
  onHighlightedChanged(handler: () => void): TreeViewDelegateBuilder;
  onHorizontalPaddingChanged(handler: () => void): TreeViewDelegateBuilder;
  onHoverEnabledChanged(handler: () => void): TreeViewDelegateBuilder;
  onHoveredChanged(handler: () => void): TreeViewDelegateBuilder;
  onIconChanged(handler: () => void): TreeViewDelegateBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): TreeViewDelegateBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): TreeViewDelegateBuilder;
  onImplicitContentHeightChanged(handler: () => void): TreeViewDelegateBuilder;
  onImplicitContentWidthChanged(handler: () => void): TreeViewDelegateBuilder;
  onImplicitHeightChanged(handler: () => void): TreeViewDelegateBuilder;
  onImplicitIndicatorHeightChanged(handler: () => void): TreeViewDelegateBuilder;
  onImplicitIndicatorWidthChanged(handler: () => void): TreeViewDelegateBuilder;
  onImplicitWidthChanged(handler: () => void): TreeViewDelegateBuilder;
  onIndentationChanged(handler: () => void): TreeViewDelegateBuilder;
  onIndicatorChanged(handler: () => void): TreeViewDelegateBuilder;
  onIsTreeNodeChanged(handler: () => void): TreeViewDelegateBuilder;
  onLeftInsetChanged(handler: () => void): TreeViewDelegateBuilder;
  onLeftMarginChanged(handler: () => void): TreeViewDelegateBuilder;
  onLeftPaddingChanged(handler: () => void): TreeViewDelegateBuilder;
  onLocaleChanged(handler: () => void): TreeViewDelegateBuilder;
  onMirroredChanged(handler: () => void): TreeViewDelegateBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TreeViewDelegateBuilder;
  onOpacityChanged(handler: () => void): TreeViewDelegateBuilder;
  onPaddingChanged(handler: () => void): TreeViewDelegateBuilder;
  onPaletteChanged(handler: () => void): TreeViewDelegateBuilder;
  onPaletteCreated(handler: () => void): TreeViewDelegateBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TreeViewDelegateBuilder;
  onPressAndHold(handler: () => void): TreeViewDelegateBuilder;
  onPressXChanged(handler: () => void): TreeViewDelegateBuilder;
  onPressYChanged(handler: () => void): TreeViewDelegateBuilder;
  onPressed(handler: () => void): TreeViewDelegateBuilder;
  onPressedChanged(handler: () => void): TreeViewDelegateBuilder;
  onReleased(handler: () => void): TreeViewDelegateBuilder;
  onRightInsetChanged(handler: () => void): TreeViewDelegateBuilder;
  onRightMarginChanged(handler: () => void): TreeViewDelegateBuilder;
  onRightPaddingChanged(handler: () => void): TreeViewDelegateBuilder;
  onRotationChanged(handler: () => void): TreeViewDelegateBuilder;
  onScaleChanged(handler: () => void): TreeViewDelegateBuilder;
  onSelectedChanged(handler: () => void): TreeViewDelegateBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TreeViewDelegateBuilder;
  onSpacingChanged(handler: () => void): TreeViewDelegateBuilder;
  onStateChanged(handler: (arg0: string) => void): TreeViewDelegateBuilder;
  onTextChanged(handler: () => void): TreeViewDelegateBuilder;
  onToggled(handler: () => void): TreeViewDelegateBuilder;
  onTopInsetChanged(handler: () => void): TreeViewDelegateBuilder;
  onTopPaddingChanged(handler: () => void): TreeViewDelegateBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TreeViewDelegateBuilder;
  onTreeviewChanged(handler: () => void): TreeViewDelegateBuilder;
  onVerticalPaddingChanged(handler: () => void): TreeViewDelegateBuilder;
  onVisibleChanged(handler: () => void): TreeViewDelegateBuilder;
  onVisibleChildrenChanged(handler: () => void): TreeViewDelegateBuilder;
  onVisualFocusChanged(handler: () => void): TreeViewDelegateBuilder;
  onWheelEnabledChanged(handler: () => void): TreeViewDelegateBuilder;
  onWidthChanged(handler: () => void): TreeViewDelegateBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TreeViewDelegateBuilder;
  onXChanged(handler: () => void): TreeViewDelegateBuilder;
  onYChanged(handler: () => void): TreeViewDelegateBuilder;
  onZChanged(handler: () => void): TreeViewDelegateBuilder;
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

export function TreeViewDelegate(): TreeViewDelegateBuilder {
  return new DslBuilderImpl('TreeViewDelegate') as unknown as TreeViewDelegateBuilder;
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
