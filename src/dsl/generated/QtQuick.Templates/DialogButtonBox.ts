// AUTO-GENERATED — DO NOT EDIT
// Type: DialogButtonBox
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
import type { AbstractButtonBuilder } from './AbstractButton.js';
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
export interface DialogButtonBoxBuilder {
  id(id: string): DialogButtonBoxBuilder;
  child(obj: QmlObjectBuilder): DialogButtonBoxBuilder;

  activeFocusOnTab(value: boolean): DialogButtonBoxBuilder;
  activeFocusOnTabBind(expr: string): DialogButtonBoxBuilder;
  alignment(value: QmlValue): DialogButtonBoxBuilder;
  alignmentBind(expr: string): DialogButtonBoxBuilder;
  antialiasing(value: boolean): DialogButtonBoxBuilder;
  antialiasingBind(expr: string): DialogButtonBoxBuilder;
  background(value: ItemBuilder): DialogButtonBoxBuilder;
  backgroundBind(expr: string): DialogButtonBoxBuilder;
  baselineOffset(value: number): DialogButtonBoxBuilder;
  baselineOffsetBind(expr: string): DialogButtonBoxBuilder;
  bottomInset(value: number): DialogButtonBoxBuilder;
  bottomInsetBind(expr: string): DialogButtonBoxBuilder;
  bottomPadding(value: number): DialogButtonBoxBuilder;
  bottomPaddingBind(expr: string): DialogButtonBoxBuilder;
  buttonLayout(value: QmlValue): DialogButtonBoxBuilder;
  buttonLayoutBind(expr: string): DialogButtonBoxBuilder;
  clip(value: boolean): DialogButtonBoxBuilder;
  clipBind(expr: string): DialogButtonBoxBuilder;
  containmentMask(value: QtObjectBuilder): DialogButtonBoxBuilder;
  containmentMaskBind(expr: string): DialogButtonBoxBuilder;
  contentHeight(value: number): DialogButtonBoxBuilder;
  contentHeightBind(expr: string): DialogButtonBoxBuilder;
  contentItem(value: ItemBuilder): DialogButtonBoxBuilder;
  contentItemBind(expr: string): DialogButtonBoxBuilder;
  contentWidth(value: number): DialogButtonBoxBuilder;
  contentWidthBind(expr: string): DialogButtonBoxBuilder;
  currentIndex(value: number): DialogButtonBoxBuilder;
  currentIndexBind(expr: string): DialogButtonBoxBuilder;
  defaultButton(value: AbstractButtonBuilder): DialogButtonBoxBuilder;
  defaultButtonBind(expr: string): DialogButtonBoxBuilder;
  defaultStandardButton(value: QmlValue): DialogButtonBoxBuilder;
  defaultStandardButtonBind(expr: string): DialogButtonBoxBuilder;
  delegate(value: QmlComponent): DialogButtonBoxBuilder;
  delegateBind(expr: string): DialogButtonBoxBuilder;
  enabled(value: boolean): DialogButtonBoxBuilder;
  enabledBind(expr: string): DialogButtonBoxBuilder;
  focus(value: boolean): DialogButtonBoxBuilder;
  focusBind(expr: string): DialogButtonBoxBuilder;
  focusPolicy(value: QmlValue): DialogButtonBoxBuilder;
  focusPolicyBind(expr: string): DialogButtonBoxBuilder;
  focusReason(value: QmlValue): DialogButtonBoxBuilder;
  focusReasonBind(expr: string): DialogButtonBoxBuilder;
  font(value: QmlFont): DialogButtonBoxBuilder;
  fontBind(expr: string): DialogButtonBoxBuilder;
  height(value: number): DialogButtonBoxBuilder;
  heightBind(expr: string): DialogButtonBoxBuilder;
  horizontalPadding(value: number): DialogButtonBoxBuilder;
  horizontalPaddingBind(expr: string): DialogButtonBoxBuilder;
  hoverEnabled(value: boolean): DialogButtonBoxBuilder;
  hoverEnabledBind(expr: string): DialogButtonBoxBuilder;
  implicitHeight(value: number): DialogButtonBoxBuilder;
  implicitHeightBind(expr: string): DialogButtonBoxBuilder;
  implicitWidth(value: number): DialogButtonBoxBuilder;
  implicitWidthBind(expr: string): DialogButtonBoxBuilder;
  leftInset(value: number): DialogButtonBoxBuilder;
  leftInsetBind(expr: string): DialogButtonBoxBuilder;
  leftPadding(value: number): DialogButtonBoxBuilder;
  leftPaddingBind(expr: string): DialogButtonBoxBuilder;
  locale(value: QmlValue): DialogButtonBoxBuilder;
  localeBind(expr: string): DialogButtonBoxBuilder;
  objectName(value: string): DialogButtonBoxBuilder;
  objectNameBind(expr: string): DialogButtonBoxBuilder;
  opacity(value: number): DialogButtonBoxBuilder;
  opacityBind(expr: string): DialogButtonBoxBuilder;
  padding(value: number): DialogButtonBoxBuilder;
  paddingBind(expr: string): DialogButtonBoxBuilder;
  palette(value: PaletteBuilder): DialogButtonBoxBuilder;
  paletteBind(expr: string): DialogButtonBoxBuilder;
  parent(value: ItemBuilder): DialogButtonBoxBuilder;
  parentBind(expr: string): DialogButtonBoxBuilder;
  position(value: QmlValue): DialogButtonBoxBuilder;
  positionBind(expr: string): DialogButtonBoxBuilder;
  rightInset(value: number): DialogButtonBoxBuilder;
  rightInsetBind(expr: string): DialogButtonBoxBuilder;
  rightPadding(value: number): DialogButtonBoxBuilder;
  rightPaddingBind(expr: string): DialogButtonBoxBuilder;
  rotation(value: number): DialogButtonBoxBuilder;
  rotationBind(expr: string): DialogButtonBoxBuilder;
  scale(value: number): DialogButtonBoxBuilder;
  scaleBind(expr: string): DialogButtonBoxBuilder;
  smooth(value: boolean): DialogButtonBoxBuilder;
  smoothBind(expr: string): DialogButtonBoxBuilder;
  spacing(value: number): DialogButtonBoxBuilder;
  spacingBind(expr: string): DialogButtonBoxBuilder;
  standardButtons(value: QmlValue): DialogButtonBoxBuilder;
  standardButtonsBind(expr: string): DialogButtonBoxBuilder;
  state(value: string): DialogButtonBoxBuilder;
  stateBind(expr: string): DialogButtonBoxBuilder;
  topInset(value: number): DialogButtonBoxBuilder;
  topInsetBind(expr: string): DialogButtonBoxBuilder;
  topPadding(value: number): DialogButtonBoxBuilder;
  topPaddingBind(expr: string): DialogButtonBoxBuilder;
  transformOrigin(value: QmlValue): DialogButtonBoxBuilder;
  transformOriginBind(expr: string): DialogButtonBoxBuilder;
  verticalPadding(value: number): DialogButtonBoxBuilder;
  verticalPaddingBind(expr: string): DialogButtonBoxBuilder;
  visible(value: boolean): DialogButtonBoxBuilder;
  visibleBind(expr: string): DialogButtonBoxBuilder;
  wheelEnabled(value: boolean): DialogButtonBoxBuilder;
  wheelEnabledBind(expr: string): DialogButtonBoxBuilder;
  width(value: number): DialogButtonBoxBuilder;
  widthBind(expr: string): DialogButtonBoxBuilder;
  x(value: number): DialogButtonBoxBuilder;
  xBind(expr: string): DialogButtonBoxBuilder;
  y(value: number): DialogButtonBoxBuilder;
  yBind(expr: string): DialogButtonBoxBuilder;
  z(value: number): DialogButtonBoxBuilder;
  zBind(expr: string): DialogButtonBoxBuilder;
  onAccepted(handler: () => void): DialogButtonBoxBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): DialogButtonBoxBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): DialogButtonBoxBuilder;
  onAlignmentChanged(handler: () => void): DialogButtonBoxBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): DialogButtonBoxBuilder;
  onApplied(handler: () => void): DialogButtonBoxBuilder;
  onAvailableHeightChanged(handler: () => void): DialogButtonBoxBuilder;
  onAvailableWidthChanged(handler: () => void): DialogButtonBoxBuilder;
  onBackgroundChanged(handler: () => void): DialogButtonBoxBuilder;
  onBaselineOffsetChanged(handler: () => void): DialogButtonBoxBuilder;
  onBottomInsetChanged(handler: () => void): DialogButtonBoxBuilder;
  onBottomPaddingChanged(handler: () => void): DialogButtonBoxBuilder;
  onButtonLayoutChanged(handler: () => void): DialogButtonBoxBuilder;
  onChildrenChanged(handler: () => void): DialogButtonBoxBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): DialogButtonBoxBuilder;
  onClicked(handler: (button: AbstractButtonBuilder) => void): DialogButtonBoxBuilder;
  onClipChanged(handler: (arg0: boolean) => void): DialogButtonBoxBuilder;
  onContainmentMaskChanged(handler: () => void): DialogButtonBoxBuilder;
  onContentChildrenChanged(handler: () => void): DialogButtonBoxBuilder;
  onContentHeightChanged(handler: () => void): DialogButtonBoxBuilder;
  onContentItemChanged(handler: () => void): DialogButtonBoxBuilder;
  onContentWidthChanged(handler: () => void): DialogButtonBoxBuilder;
  onCountChanged(handler: () => void): DialogButtonBoxBuilder;
  onCurrentIndexChanged(handler: () => void): DialogButtonBoxBuilder;
  onCurrentItemChanged(handler: () => void): DialogButtonBoxBuilder;
  onDefaultButtonChanged(handler: () => void): DialogButtonBoxBuilder;
  onDefaultStandardButtonChanged(handler: () => void): DialogButtonBoxBuilder;
  onDelegateChanged(handler: () => void): DialogButtonBoxBuilder;
  onDiscarded(handler: () => void): DialogButtonBoxBuilder;
  onEnabledChanged(handler: () => void): DialogButtonBoxBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): DialogButtonBoxBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): DialogButtonBoxBuilder;
  onFocusReasonChanged(handler: () => void): DialogButtonBoxBuilder;
  onFontChanged(handler: () => void): DialogButtonBoxBuilder;
  onHeightChanged(handler: () => void): DialogButtonBoxBuilder;
  onHelpRequested(handler: () => void): DialogButtonBoxBuilder;
  onHorizontalPaddingChanged(handler: () => void): DialogButtonBoxBuilder;
  onHoverEnabledChanged(handler: () => void): DialogButtonBoxBuilder;
  onHoveredChanged(handler: () => void): DialogButtonBoxBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): DialogButtonBoxBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): DialogButtonBoxBuilder;
  onImplicitContentHeightChanged(handler: () => void): DialogButtonBoxBuilder;
  onImplicitContentWidthChanged(handler: () => void): DialogButtonBoxBuilder;
  onImplicitHeightChanged(handler: () => void): DialogButtonBoxBuilder;
  onImplicitWidthChanged(handler: () => void): DialogButtonBoxBuilder;
  onLeftInsetChanged(handler: () => void): DialogButtonBoxBuilder;
  onLeftPaddingChanged(handler: () => void): DialogButtonBoxBuilder;
  onLocaleChanged(handler: () => void): DialogButtonBoxBuilder;
  onMirroredChanged(handler: () => void): DialogButtonBoxBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DialogButtonBoxBuilder;
  onOpacityChanged(handler: () => void): DialogButtonBoxBuilder;
  onPaddingChanged(handler: () => void): DialogButtonBoxBuilder;
  onPaletteChanged(handler: () => void): DialogButtonBoxBuilder;
  onPaletteCreated(handler: () => void): DialogButtonBoxBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): DialogButtonBoxBuilder;
  onPositionChanged(handler: () => void): DialogButtonBoxBuilder;
  onRejected(handler: () => void): DialogButtonBoxBuilder;
  onReset(handler: () => void): DialogButtonBoxBuilder;
  onRightInsetChanged(handler: () => void): DialogButtonBoxBuilder;
  onRightPaddingChanged(handler: () => void): DialogButtonBoxBuilder;
  onRotationChanged(handler: () => void): DialogButtonBoxBuilder;
  onScaleChanged(handler: () => void): DialogButtonBoxBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): DialogButtonBoxBuilder;
  onSpacingChanged(handler: () => void): DialogButtonBoxBuilder;
  onStandardButtonsChanged(handler: () => void): DialogButtonBoxBuilder;
  onStateChanged(handler: (arg0: string) => void): DialogButtonBoxBuilder;
  onTopInsetChanged(handler: () => void): DialogButtonBoxBuilder;
  onTopPaddingChanged(handler: () => void): DialogButtonBoxBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): DialogButtonBoxBuilder;
  onVerticalPaddingChanged(handler: () => void): DialogButtonBoxBuilder;
  onVisibleChanged(handler: () => void): DialogButtonBoxBuilder;
  onVisibleChildrenChanged(handler: () => void): DialogButtonBoxBuilder;
  onVisualFocusChanged(handler: () => void): DialogButtonBoxBuilder;
  onWheelEnabledChanged(handler: () => void): DialogButtonBoxBuilder;
  onWidthChanged(handler: () => void): DialogButtonBoxBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): DialogButtonBoxBuilder;
  onXChanged(handler: () => void): DialogButtonBoxBuilder;
  onYChanged(handler: () => void): DialogButtonBoxBuilder;
  onZChanged(handler: () => void): DialogButtonBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DialogButtonBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): DialogButtonBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): DialogButtonBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): DialogButtonBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): DialogButtonBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): DialogButtonBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): DialogButtonBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): DialogButtonBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): DialogButtonBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): DialogButtonBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): DialogButtonBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): DialogButtonBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): DialogButtonBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): DialogButtonBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): DialogButtonBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): DialogButtonBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): DialogButtonBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): DialogButtonBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): DialogButtonBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): DialogButtonBoxBuilder;
}

export function DialogButtonBox(): DialogButtonBoxBuilder {
  return new DslBuilderImpl('DialogButtonBox') as unknown as DialogButtonBoxBuilder;
}

export namespace DialogButtonBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'DialogButtonBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'DialogButtonBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('DialogButtonBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('DialogButtonBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('DialogButtonBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('DialogButtonBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'DialogButtonBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'DialogButtonBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace Position {
    export const Header = createEnumToken('DialogButtonBox', 'Position', 'Header');
    export const Footer = createEnumToken('DialogButtonBox', 'Position', 'Footer');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DialogButtonBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DialogButtonBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DialogButtonBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DialogButtonBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('DialogButtonBox', 'TransformOrigin', 'BottomRight');
  }
}
