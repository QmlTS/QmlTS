// AUTO-GENERATED — DO NOT EDIT
// Type: SelectionRectangle
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
export interface SelectionRectangleBuilder {
  id(id: string): SelectionRectangleBuilder;
  child(obj: QmlObjectBuilder): SelectionRectangleBuilder;

  activeFocusOnTab(value: boolean): SelectionRectangleBuilder;
  activeFocusOnTabBind(expr: string): SelectionRectangleBuilder;
  antialiasing(value: boolean): SelectionRectangleBuilder;
  antialiasingBind(expr: string): SelectionRectangleBuilder;
  background(value: ItemBuilder): SelectionRectangleBuilder;
  backgroundBind(expr: string): SelectionRectangleBuilder;
  baselineOffset(value: number): SelectionRectangleBuilder;
  baselineOffsetBind(expr: string): SelectionRectangleBuilder;
  bottomInset(value: number): SelectionRectangleBuilder;
  bottomInsetBind(expr: string): SelectionRectangleBuilder;
  bottomPadding(value: number): SelectionRectangleBuilder;
  bottomPaddingBind(expr: string): SelectionRectangleBuilder;
  bottomRightHandle(value: QmlComponent): SelectionRectangleBuilder;
  bottomRightHandleBind(expr: string): SelectionRectangleBuilder;
  clip(value: boolean): SelectionRectangleBuilder;
  clipBind(expr: string): SelectionRectangleBuilder;
  containmentMask(value: QtObjectBuilder): SelectionRectangleBuilder;
  containmentMaskBind(expr: string): SelectionRectangleBuilder;
  contentItem(value: ItemBuilder): SelectionRectangleBuilder;
  contentItemBind(expr: string): SelectionRectangleBuilder;
  enabled(value: boolean): SelectionRectangleBuilder;
  enabledBind(expr: string): SelectionRectangleBuilder;
  focus(value: boolean): SelectionRectangleBuilder;
  focusBind(expr: string): SelectionRectangleBuilder;
  focusPolicy(value: QmlValue): SelectionRectangleBuilder;
  focusPolicyBind(expr: string): SelectionRectangleBuilder;
  focusReason(value: QmlValue): SelectionRectangleBuilder;
  focusReasonBind(expr: string): SelectionRectangleBuilder;
  font(value: QmlFont): SelectionRectangleBuilder;
  fontBind(expr: string): SelectionRectangleBuilder;
  height(value: number): SelectionRectangleBuilder;
  heightBind(expr: string): SelectionRectangleBuilder;
  horizontalPadding(value: number): SelectionRectangleBuilder;
  horizontalPaddingBind(expr: string): SelectionRectangleBuilder;
  hoverEnabled(value: boolean): SelectionRectangleBuilder;
  hoverEnabledBind(expr: string): SelectionRectangleBuilder;
  implicitHeight(value: number): SelectionRectangleBuilder;
  implicitHeightBind(expr: string): SelectionRectangleBuilder;
  implicitWidth(value: number): SelectionRectangleBuilder;
  implicitWidthBind(expr: string): SelectionRectangleBuilder;
  leftInset(value: number): SelectionRectangleBuilder;
  leftInsetBind(expr: string): SelectionRectangleBuilder;
  leftPadding(value: number): SelectionRectangleBuilder;
  leftPaddingBind(expr: string): SelectionRectangleBuilder;
  locale(value: QmlValue): SelectionRectangleBuilder;
  localeBind(expr: string): SelectionRectangleBuilder;
  objectName(value: string): SelectionRectangleBuilder;
  objectNameBind(expr: string): SelectionRectangleBuilder;
  opacity(value: number): SelectionRectangleBuilder;
  opacityBind(expr: string): SelectionRectangleBuilder;
  padding(value: number): SelectionRectangleBuilder;
  paddingBind(expr: string): SelectionRectangleBuilder;
  palette(value: PaletteBuilder): SelectionRectangleBuilder;
  paletteBind(expr: string): SelectionRectangleBuilder;
  parent(value: ItemBuilder): SelectionRectangleBuilder;
  parentBind(expr: string): SelectionRectangleBuilder;
  rightInset(value: number): SelectionRectangleBuilder;
  rightInsetBind(expr: string): SelectionRectangleBuilder;
  rightPadding(value: number): SelectionRectangleBuilder;
  rightPaddingBind(expr: string): SelectionRectangleBuilder;
  rotation(value: number): SelectionRectangleBuilder;
  rotationBind(expr: string): SelectionRectangleBuilder;
  scale(value: number): SelectionRectangleBuilder;
  scaleBind(expr: string): SelectionRectangleBuilder;
  selectionMode(value: QmlValue): SelectionRectangleBuilder;
  selectionModeBind(expr: string): SelectionRectangleBuilder;
  smooth(value: boolean): SelectionRectangleBuilder;
  smoothBind(expr: string): SelectionRectangleBuilder;
  spacing(value: number): SelectionRectangleBuilder;
  spacingBind(expr: string): SelectionRectangleBuilder;
  state(value: string): SelectionRectangleBuilder;
  stateBind(expr: string): SelectionRectangleBuilder;
  target(value: ItemBuilder): SelectionRectangleBuilder;
  targetBind(expr: string): SelectionRectangleBuilder;
  topInset(value: number): SelectionRectangleBuilder;
  topInsetBind(expr: string): SelectionRectangleBuilder;
  topLeftHandle(value: QmlComponent): SelectionRectangleBuilder;
  topLeftHandleBind(expr: string): SelectionRectangleBuilder;
  topPadding(value: number): SelectionRectangleBuilder;
  topPaddingBind(expr: string): SelectionRectangleBuilder;
  transformOrigin(value: QmlValue): SelectionRectangleBuilder;
  transformOriginBind(expr: string): SelectionRectangleBuilder;
  verticalPadding(value: number): SelectionRectangleBuilder;
  verticalPaddingBind(expr: string): SelectionRectangleBuilder;
  visible(value: boolean): SelectionRectangleBuilder;
  visibleBind(expr: string): SelectionRectangleBuilder;
  wheelEnabled(value: boolean): SelectionRectangleBuilder;
  wheelEnabledBind(expr: string): SelectionRectangleBuilder;
  width(value: number): SelectionRectangleBuilder;
  widthBind(expr: string): SelectionRectangleBuilder;
  x(value: number): SelectionRectangleBuilder;
  xBind(expr: string): SelectionRectangleBuilder;
  y(value: number): SelectionRectangleBuilder;
  yBind(expr: string): SelectionRectangleBuilder;
  z(value: number): SelectionRectangleBuilder;
  zBind(expr: string): SelectionRectangleBuilder;
  onActiveChanged(handler: () => void): SelectionRectangleBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SelectionRectangleBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SelectionRectangleBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SelectionRectangleBuilder;
  onAvailableHeightChanged(handler: () => void): SelectionRectangleBuilder;
  onAvailableWidthChanged(handler: () => void): SelectionRectangleBuilder;
  onBackgroundChanged(handler: () => void): SelectionRectangleBuilder;
  onBaselineOffsetChanged(handler: () => void): SelectionRectangleBuilder;
  onBottomInsetChanged(handler: () => void): SelectionRectangleBuilder;
  onBottomPaddingChanged(handler: () => void): SelectionRectangleBuilder;
  onBottomRightHandleChanged(handler: () => void): SelectionRectangleBuilder;
  onChildrenChanged(handler: () => void): SelectionRectangleBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SelectionRectangleBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SelectionRectangleBuilder;
  onContainmentMaskChanged(handler: () => void): SelectionRectangleBuilder;
  onContentItemChanged(handler: () => void): SelectionRectangleBuilder;
  onDraggingChanged(handler: () => void): SelectionRectangleBuilder;
  onEnabledChanged(handler: () => void): SelectionRectangleBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SelectionRectangleBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SelectionRectangleBuilder;
  onFocusReasonChanged(handler: () => void): SelectionRectangleBuilder;
  onFontChanged(handler: () => void): SelectionRectangleBuilder;
  onHeightChanged(handler: () => void): SelectionRectangleBuilder;
  onHorizontalPaddingChanged(handler: () => void): SelectionRectangleBuilder;
  onHoverEnabledChanged(handler: () => void): SelectionRectangleBuilder;
  onHoveredChanged(handler: () => void): SelectionRectangleBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): SelectionRectangleBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): SelectionRectangleBuilder;
  onImplicitContentHeightChanged(handler: () => void): SelectionRectangleBuilder;
  onImplicitContentWidthChanged(handler: () => void): SelectionRectangleBuilder;
  onImplicitHeightChanged(handler: () => void): SelectionRectangleBuilder;
  onImplicitWidthChanged(handler: () => void): SelectionRectangleBuilder;
  onLeftInsetChanged(handler: () => void): SelectionRectangleBuilder;
  onLeftPaddingChanged(handler: () => void): SelectionRectangleBuilder;
  onLocaleChanged(handler: () => void): SelectionRectangleBuilder;
  onMirroredChanged(handler: () => void): SelectionRectangleBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SelectionRectangleBuilder;
  onOpacityChanged(handler: () => void): SelectionRectangleBuilder;
  onPaddingChanged(handler: () => void): SelectionRectangleBuilder;
  onPaletteChanged(handler: () => void): SelectionRectangleBuilder;
  onPaletteCreated(handler: () => void): SelectionRectangleBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SelectionRectangleBuilder;
  onRightInsetChanged(handler: () => void): SelectionRectangleBuilder;
  onRightPaddingChanged(handler: () => void): SelectionRectangleBuilder;
  onRotationChanged(handler: () => void): SelectionRectangleBuilder;
  onScaleChanged(handler: () => void): SelectionRectangleBuilder;
  onSelectionModeChanged(handler: () => void): SelectionRectangleBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SelectionRectangleBuilder;
  onSpacingChanged(handler: () => void): SelectionRectangleBuilder;
  onStateChanged(handler: (arg0: string) => void): SelectionRectangleBuilder;
  onTargetChanged(handler: () => void): SelectionRectangleBuilder;
  onTopInsetChanged(handler: () => void): SelectionRectangleBuilder;
  onTopLeftHandleChanged(handler: () => void): SelectionRectangleBuilder;
  onTopPaddingChanged(handler: () => void): SelectionRectangleBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SelectionRectangleBuilder;
  onVerticalPaddingChanged(handler: () => void): SelectionRectangleBuilder;
  onVisibleChanged(handler: () => void): SelectionRectangleBuilder;
  onVisibleChildrenChanged(handler: () => void): SelectionRectangleBuilder;
  onVisualFocusChanged(handler: () => void): SelectionRectangleBuilder;
  onWheelEnabledChanged(handler: () => void): SelectionRectangleBuilder;
  onWidthChanged(handler: () => void): SelectionRectangleBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SelectionRectangleBuilder;
  onXChanged(handler: () => void): SelectionRectangleBuilder;
  onYChanged(handler: () => void): SelectionRectangleBuilder;
  onZChanged(handler: () => void): SelectionRectangleBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SelectionRectangleBuilder;
  layer(setup: (b: LayerBuilder) => void): SelectionRectangleBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SelectionRectangleBuilder;
  applicationWindow(
    setup: (b: ApplicationWindowAttachedBuilder) => void,
  ): SelectionRectangleBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SelectionRectangleBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SelectionRectangleBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SelectionRectangleBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SelectionRectangleBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SelectionRectangleBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SelectionRectangleBuilder;
  selectionRectangle(
    setup: (b: SelectionRectangleAttachedBuilder) => void,
  ): SelectionRectangleBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SelectionRectangleBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SelectionRectangleBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SelectionRectangleBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SelectionRectangleBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SelectionRectangleBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SelectionRectangleBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SelectionRectangleBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SelectionRectangleBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SelectionRectangleBuilder;
}

export function SelectionRectangle(): SelectionRectangleBuilder {
  return new DslBuilderImpl('SelectionRectangle') as unknown as SelectionRectangleBuilder;
}

export namespace SelectionRectangle {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemIsFocusScope',
    );
    export const ItemHasContents = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemHasContents',
    );
    export const ItemAcceptsDrops = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemAcceptsDrops',
    );
    export const ItemIsViewport = createEnumToken('SelectionRectangle', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'SelectionRectangle',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SelectionRectangle',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SelectionMode {
    export const Drag = createEnumToken('SelectionRectangle', 'SelectionMode', 'Drag');
    export const PressAndHold = createEnumToken(
      'SelectionRectangle',
      'SelectionMode',
      'PressAndHold',
    );
    export const Auto = createEnumToken('SelectionRectangle', 'SelectionMode', 'Auto');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SelectionRectangle', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SelectionRectangle', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken(
      'SelectionRectangle',
      'TransformOrigin',
      'BottomLeft',
    );
    export const Bottom = createEnumToken('SelectionRectangle', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken(
      'SelectionRectangle',
      'TransformOrigin',
      'BottomRight',
    );
  }
}
