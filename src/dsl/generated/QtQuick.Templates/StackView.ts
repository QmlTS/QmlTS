// AUTO-GENERATED — DO NOT EDIT
// Type: StackView
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
import { createEnumToken, DslBuilderImpl } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { TransitionBuilder } from '../QtQuick/Transition.js';
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
export interface StackViewBuilder {
  id(id: string): StackViewBuilder;
  child(obj: QmlObjectBuilder): StackViewBuilder;

  activeFocusOnTab(value: boolean): StackViewBuilder;
  activeFocusOnTabBind(expr: string): StackViewBuilder;
  antialiasing(value: boolean): StackViewBuilder;
  antialiasingBind(expr: string): StackViewBuilder;
  background(value: ItemBuilder): StackViewBuilder;
  backgroundBind(expr: string): StackViewBuilder;
  baselineOffset(value: number): StackViewBuilder;
  baselineOffsetBind(expr: string): StackViewBuilder;
  bottomInset(value: number): StackViewBuilder;
  bottomInsetBind(expr: string): StackViewBuilder;
  bottomPadding(value: number): StackViewBuilder;
  bottomPaddingBind(expr: string): StackViewBuilder;
  clip(value: boolean): StackViewBuilder;
  clipBind(expr: string): StackViewBuilder;
  containmentMask(value: QtObjectBuilder): StackViewBuilder;
  containmentMaskBind(expr: string): StackViewBuilder;
  contentItem(value: ItemBuilder): StackViewBuilder;
  contentItemBind(expr: string): StackViewBuilder;
  enabled(value: boolean): StackViewBuilder;
  enabledBind(expr: string): StackViewBuilder;
  focus(value: boolean): StackViewBuilder;
  focusBind(expr: string): StackViewBuilder;
  focusPolicy(value: QmlValue): StackViewBuilder;
  focusPolicyBind(expr: string): StackViewBuilder;
  focusReason(value: QmlValue): StackViewBuilder;
  focusReasonBind(expr: string): StackViewBuilder;
  font(value: QmlFont): StackViewBuilder;
  fontBind(expr: string): StackViewBuilder;
  height(value: number): StackViewBuilder;
  heightBind(expr: string): StackViewBuilder;
  horizontalPadding(value: number): StackViewBuilder;
  horizontalPaddingBind(expr: string): StackViewBuilder;
  hoverEnabled(value: boolean): StackViewBuilder;
  hoverEnabledBind(expr: string): StackViewBuilder;
  implicitHeight(value: number): StackViewBuilder;
  implicitHeightBind(expr: string): StackViewBuilder;
  implicitWidth(value: number): StackViewBuilder;
  implicitWidthBind(expr: string): StackViewBuilder;
  initialItem(value: QmlValue): StackViewBuilder;
  initialItemBind(expr: string): StackViewBuilder;
  leftInset(value: number): StackViewBuilder;
  leftInsetBind(expr: string): StackViewBuilder;
  leftPadding(value: number): StackViewBuilder;
  leftPaddingBind(expr: string): StackViewBuilder;
  locale(value: QmlValue): StackViewBuilder;
  localeBind(expr: string): StackViewBuilder;
  objectName(value: string): StackViewBuilder;
  objectNameBind(expr: string): StackViewBuilder;
  opacity(value: number): StackViewBuilder;
  opacityBind(expr: string): StackViewBuilder;
  padding(value: number): StackViewBuilder;
  paddingBind(expr: string): StackViewBuilder;
  palette(value: PaletteBuilder): StackViewBuilder;
  paletteBind(expr: string): StackViewBuilder;
  parent(value: ItemBuilder): StackViewBuilder;
  parentBind(expr: string): StackViewBuilder;
  popEnter(value: TransitionBuilder): StackViewBuilder;
  popEnterBind(expr: string): StackViewBuilder;
  popExit(value: TransitionBuilder): StackViewBuilder;
  popExitBind(expr: string): StackViewBuilder;
  pushEnter(value: TransitionBuilder): StackViewBuilder;
  pushEnterBind(expr: string): StackViewBuilder;
  pushExit(value: TransitionBuilder): StackViewBuilder;
  pushExitBind(expr: string): StackViewBuilder;
  replaceEnter(value: TransitionBuilder): StackViewBuilder;
  replaceEnterBind(expr: string): StackViewBuilder;
  replaceExit(value: TransitionBuilder): StackViewBuilder;
  replaceExitBind(expr: string): StackViewBuilder;
  rightInset(value: number): StackViewBuilder;
  rightInsetBind(expr: string): StackViewBuilder;
  rightPadding(value: number): StackViewBuilder;
  rightPaddingBind(expr: string): StackViewBuilder;
  rotation(value: number): StackViewBuilder;
  rotationBind(expr: string): StackViewBuilder;
  scale(value: number): StackViewBuilder;
  scaleBind(expr: string): StackViewBuilder;
  smooth(value: boolean): StackViewBuilder;
  smoothBind(expr: string): StackViewBuilder;
  spacing(value: number): StackViewBuilder;
  spacingBind(expr: string): StackViewBuilder;
  state(value: string): StackViewBuilder;
  stateBind(expr: string): StackViewBuilder;
  topInset(value: number): StackViewBuilder;
  topInsetBind(expr: string): StackViewBuilder;
  topPadding(value: number): StackViewBuilder;
  topPaddingBind(expr: string): StackViewBuilder;
  transformOrigin(value: QmlValue): StackViewBuilder;
  transformOriginBind(expr: string): StackViewBuilder;
  verticalPadding(value: number): StackViewBuilder;
  verticalPaddingBind(expr: string): StackViewBuilder;
  visible(value: boolean): StackViewBuilder;
  visibleBind(expr: string): StackViewBuilder;
  wheelEnabled(value: boolean): StackViewBuilder;
  wheelEnabledBind(expr: string): StackViewBuilder;
  width(value: number): StackViewBuilder;
  widthBind(expr: string): StackViewBuilder;
  x(value: number): StackViewBuilder;
  xBind(expr: string): StackViewBuilder;
  y(value: number): StackViewBuilder;
  yBind(expr: string): StackViewBuilder;
  z(value: number): StackViewBuilder;
  zBind(expr: string): StackViewBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): StackViewBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): StackViewBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): StackViewBuilder;
  onAvailableHeightChanged(handler: () => void): StackViewBuilder;
  onAvailableWidthChanged(handler: () => void): StackViewBuilder;
  onBackgroundChanged(handler: () => void): StackViewBuilder;
  onBaselineOffsetChanged(handler: () => void): StackViewBuilder;
  onBottomInsetChanged(handler: () => void): StackViewBuilder;
  onBottomPaddingChanged(handler: () => void): StackViewBuilder;
  onBusyChanged(handler: () => void): StackViewBuilder;
  onChildrenChanged(handler: () => void): StackViewBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): StackViewBuilder;
  onClipChanged(handler: (arg0: boolean) => void): StackViewBuilder;
  onContainmentMaskChanged(handler: () => void): StackViewBuilder;
  onContentItemChanged(handler: () => void): StackViewBuilder;
  onCurrentItemChanged(handler: () => void): StackViewBuilder;
  onDepthChanged(handler: () => void): StackViewBuilder;
  onEmptyChanged(handler: () => void): StackViewBuilder;
  onEnabledChanged(handler: () => void): StackViewBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): StackViewBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): StackViewBuilder;
  onFocusReasonChanged(handler: () => void): StackViewBuilder;
  onFontChanged(handler: () => void): StackViewBuilder;
  onHeightChanged(handler: () => void): StackViewBuilder;
  onHorizontalPaddingChanged(handler: () => void): StackViewBuilder;
  onHoverEnabledChanged(handler: () => void): StackViewBuilder;
  onHoveredChanged(handler: () => void): StackViewBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): StackViewBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): StackViewBuilder;
  onImplicitContentHeightChanged(handler: () => void): StackViewBuilder;
  onImplicitContentWidthChanged(handler: () => void): StackViewBuilder;
  onImplicitHeightChanged(handler: () => void): StackViewBuilder;
  onImplicitWidthChanged(handler: () => void): StackViewBuilder;
  onLeftInsetChanged(handler: () => void): StackViewBuilder;
  onLeftPaddingChanged(handler: () => void): StackViewBuilder;
  onLocaleChanged(handler: () => void): StackViewBuilder;
  onMirroredChanged(handler: () => void): StackViewBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): StackViewBuilder;
  onOpacityChanged(handler: () => void): StackViewBuilder;
  onPaddingChanged(handler: () => void): StackViewBuilder;
  onPaletteChanged(handler: () => void): StackViewBuilder;
  onPaletteCreated(handler: () => void): StackViewBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): StackViewBuilder;
  onPopEnterChanged(handler: () => void): StackViewBuilder;
  onPopExitChanged(handler: () => void): StackViewBuilder;
  onPushEnterChanged(handler: () => void): StackViewBuilder;
  onPushExitChanged(handler: () => void): StackViewBuilder;
  onReplaceEnterChanged(handler: () => void): StackViewBuilder;
  onReplaceExitChanged(handler: () => void): StackViewBuilder;
  onRightInsetChanged(handler: () => void): StackViewBuilder;
  onRightPaddingChanged(handler: () => void): StackViewBuilder;
  onRotationChanged(handler: () => void): StackViewBuilder;
  onScaleChanged(handler: () => void): StackViewBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): StackViewBuilder;
  onSpacingChanged(handler: () => void): StackViewBuilder;
  onStateChanged(handler: (arg0: string) => void): StackViewBuilder;
  onTopInsetChanged(handler: () => void): StackViewBuilder;
  onTopPaddingChanged(handler: () => void): StackViewBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): StackViewBuilder;
  onVerticalPaddingChanged(handler: () => void): StackViewBuilder;
  onVisibleChanged(handler: () => void): StackViewBuilder;
  onVisibleChildrenChanged(handler: () => void): StackViewBuilder;
  onVisualFocusChanged(handler: () => void): StackViewBuilder;
  onWheelEnabledChanged(handler: () => void): StackViewBuilder;
  onWidthChanged(handler: () => void): StackViewBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): StackViewBuilder;
  onXChanged(handler: () => void): StackViewBuilder;
  onYChanged(handler: () => void): StackViewBuilder;
  onZChanged(handler: () => void): StackViewBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): StackViewBuilder;
  layer(setup: (b: LayerBuilder) => void): StackViewBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): StackViewBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): StackViewBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): StackViewBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): StackViewBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): StackViewBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): StackViewBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): StackViewBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): StackViewBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): StackViewBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): StackViewBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): StackViewBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): StackViewBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): StackViewBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): StackViewBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): StackViewBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): StackViewBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): StackViewBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): StackViewBuilder;
}

export function StackView(): StackViewBuilder {
  return new DslBuilderImpl('StackView') as unknown as StackViewBuilder;
}

export namespace StackView {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'StackView',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'StackView',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('StackView', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('StackView', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('StackView', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('StackView', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'StackView',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('StackView', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'StackView',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LoadBehavior {
    export const DontLoad = createEnumToken('StackView', 'LoadBehavior', 'DontLoad');
    export const ForceLoad = createEnumToken('StackView', 'LoadBehavior', 'ForceLoad');
  }
  export namespace Operation {
    export const Transition = createEnumToken('StackView', 'Operation', 'Transition');
    export const Immediate = createEnumToken('StackView', 'Operation', 'Immediate');
    export const PushTransition = createEnumToken('StackView', 'Operation', 'PushTransition');
    export const ReplaceTransition = createEnumToken('StackView', 'Operation', 'ReplaceTransition');
    export const PopTransition = createEnumToken('StackView', 'Operation', 'PopTransition');
  }
  export namespace Status {
    export const Inactive = createEnumToken('StackView', 'Status', 'Inactive');
    export const Deactivating = createEnumToken('StackView', 'Status', 'Deactivating');
    export const Activating = createEnumToken('StackView', 'Status', 'Activating');
    export const Active = createEnumToken('StackView', 'Status', 'Active');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('StackView', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('StackView', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('StackView', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('StackView', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('StackView', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('StackView', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('StackView', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('StackView', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('StackView', 'TransformOrigin', 'BottomRight');
  }
}
