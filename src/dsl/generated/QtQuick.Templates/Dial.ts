// AUTO-GENERATED — DO NOT EDIT
// Type: Dial
// Generated from Qt 6.11.0

import type { QmlFont, QmlObjectBuilder, QmlRect, QmlValue } from '../../runtime/index.js';
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
export interface DialBuilder {
  id(id: string): DialBuilder;
  child(obj: QmlObjectBuilder): DialBuilder;

  activeFocusOnTab(value: boolean): DialBuilder;
  activeFocusOnTabBind(expr: string): DialBuilder;
  antialiasing(value: boolean): DialBuilder;
  antialiasingBind(expr: string): DialBuilder;
  background(value: ItemBuilder): DialBuilder;
  backgroundBind(expr: string): DialBuilder;
  baselineOffset(value: number): DialBuilder;
  baselineOffsetBind(expr: string): DialBuilder;
  bottomInset(value: number): DialBuilder;
  bottomInsetBind(expr: string): DialBuilder;
  bottomPadding(value: number): DialBuilder;
  bottomPaddingBind(expr: string): DialBuilder;
  clip(value: boolean): DialBuilder;
  clipBind(expr: string): DialBuilder;
  containmentMask(value: QtObjectBuilder): DialBuilder;
  containmentMaskBind(expr: string): DialBuilder;
  contentItem(value: ItemBuilder): DialBuilder;
  contentItemBind(expr: string): DialBuilder;
  enabled(value: boolean): DialBuilder;
  enabledBind(expr: string): DialBuilder;
  endAngle(value: number): DialBuilder;
  endAngleBind(expr: string): DialBuilder;
  focus(value: boolean): DialBuilder;
  focusBind(expr: string): DialBuilder;
  focusPolicy(value: QmlValue): DialBuilder;
  focusPolicyBind(expr: string): DialBuilder;
  focusReason(value: QmlValue): DialBuilder;
  focusReasonBind(expr: string): DialBuilder;
  font(value: QmlFont): DialBuilder;
  fontBind(expr: string): DialBuilder;
  from(value: number): DialBuilder;
  fromBind(expr: string): DialBuilder;
  handle(value: ItemBuilder): DialBuilder;
  handleBind(expr: string): DialBuilder;
  height(value: number): DialBuilder;
  heightBind(expr: string): DialBuilder;
  horizontalPadding(value: number): DialBuilder;
  horizontalPaddingBind(expr: string): DialBuilder;
  hoverEnabled(value: boolean): DialBuilder;
  hoverEnabledBind(expr: string): DialBuilder;
  implicitHeight(value: number): DialBuilder;
  implicitHeightBind(expr: string): DialBuilder;
  implicitWidth(value: number): DialBuilder;
  implicitWidthBind(expr: string): DialBuilder;
  inputMode(value: QmlValue): DialBuilder;
  inputModeBind(expr: string): DialBuilder;
  leftInset(value: number): DialBuilder;
  leftInsetBind(expr: string): DialBuilder;
  leftPadding(value: number): DialBuilder;
  leftPaddingBind(expr: string): DialBuilder;
  live(value: boolean): DialBuilder;
  liveBind(expr: string): DialBuilder;
  locale(value: QmlValue): DialBuilder;
  localeBind(expr: string): DialBuilder;
  objectName(value: string): DialBuilder;
  objectNameBind(expr: string): DialBuilder;
  opacity(value: number): DialBuilder;
  opacityBind(expr: string): DialBuilder;
  padding(value: number): DialBuilder;
  paddingBind(expr: string): DialBuilder;
  palette(value: PaletteBuilder): DialBuilder;
  paletteBind(expr: string): DialBuilder;
  parent(value: ItemBuilder): DialBuilder;
  parentBind(expr: string): DialBuilder;
  rightInset(value: number): DialBuilder;
  rightInsetBind(expr: string): DialBuilder;
  rightPadding(value: number): DialBuilder;
  rightPaddingBind(expr: string): DialBuilder;
  rotation(value: number): DialBuilder;
  rotationBind(expr: string): DialBuilder;
  scale(value: number): DialBuilder;
  scaleBind(expr: string): DialBuilder;
  smooth(value: boolean): DialBuilder;
  smoothBind(expr: string): DialBuilder;
  snapMode(value: QmlValue): DialBuilder;
  snapModeBind(expr: string): DialBuilder;
  spacing(value: number): DialBuilder;
  spacingBind(expr: string): DialBuilder;
  startAngle(value: number): DialBuilder;
  startAngleBind(expr: string): DialBuilder;
  state(value: string): DialBuilder;
  stateBind(expr: string): DialBuilder;
  stepSize(value: number): DialBuilder;
  stepSizeBind(expr: string): DialBuilder;
  to(value: number): DialBuilder;
  toBind(expr: string): DialBuilder;
  topInset(value: number): DialBuilder;
  topInsetBind(expr: string): DialBuilder;
  topPadding(value: number): DialBuilder;
  topPaddingBind(expr: string): DialBuilder;
  transformOrigin(value: QmlValue): DialBuilder;
  transformOriginBind(expr: string): DialBuilder;
  value(value: number): DialBuilder;
  valueBind(expr: string): DialBuilder;
  verticalPadding(value: number): DialBuilder;
  verticalPaddingBind(expr: string): DialBuilder;
  visible(value: boolean): DialBuilder;
  visibleBind(expr: string): DialBuilder;
  wheelEnabled(value: boolean): DialBuilder;
  wheelEnabledBind(expr: string): DialBuilder;
  width(value: number): DialBuilder;
  widthBind(expr: string): DialBuilder;
  wrap(value: boolean): DialBuilder;
  wrapBind(expr: string): DialBuilder;
  x(value: number): DialBuilder;
  xBind(expr: string): DialBuilder;
  y(value: number): DialBuilder;
  yBind(expr: string): DialBuilder;
  z(value: number): DialBuilder;
  zBind(expr: string): DialBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): DialBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): DialBuilder;
  onAngleChanged(handler: () => void): DialBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): DialBuilder;
  onAvailableHeightChanged(handler: () => void): DialBuilder;
  onAvailableWidthChanged(handler: () => void): DialBuilder;
  onBackgroundChanged(handler: () => void): DialBuilder;
  onBaselineOffsetChanged(handler: () => void): DialBuilder;
  onBottomInsetChanged(handler: () => void): DialBuilder;
  onBottomPaddingChanged(handler: () => void): DialBuilder;
  onChildrenChanged(handler: () => void): DialBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): DialBuilder;
  onClipChanged(handler: (arg0: boolean) => void): DialBuilder;
  onContainmentMaskChanged(handler: () => void): DialBuilder;
  onContentItemChanged(handler: () => void): DialBuilder;
  onEnabledChanged(handler: () => void): DialBuilder;
  onEndAngleChanged(handler: () => void): DialBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): DialBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): DialBuilder;
  onFocusReasonChanged(handler: () => void): DialBuilder;
  onFontChanged(handler: () => void): DialBuilder;
  onFromChanged(handler: () => void): DialBuilder;
  onHandleChanged(handler: () => void): DialBuilder;
  onHeightChanged(handler: () => void): DialBuilder;
  onHorizontalPaddingChanged(handler: () => void): DialBuilder;
  onHoverEnabledChanged(handler: () => void): DialBuilder;
  onHoveredChanged(handler: () => void): DialBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): DialBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): DialBuilder;
  onImplicitContentHeightChanged(handler: () => void): DialBuilder;
  onImplicitContentWidthChanged(handler: () => void): DialBuilder;
  onImplicitHeightChanged(handler: () => void): DialBuilder;
  onImplicitWidthChanged(handler: () => void): DialBuilder;
  onInputModeChanged(handler: () => void): DialBuilder;
  onLeftInsetChanged(handler: () => void): DialBuilder;
  onLeftPaddingChanged(handler: () => void): DialBuilder;
  onLiveChanged(handler: () => void): DialBuilder;
  onLocaleChanged(handler: () => void): DialBuilder;
  onMirroredChanged(handler: () => void): DialBuilder;
  onMoved(handler: () => void): DialBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DialBuilder;
  onOpacityChanged(handler: () => void): DialBuilder;
  onPaddingChanged(handler: () => void): DialBuilder;
  onPaletteChanged(handler: () => void): DialBuilder;
  onPaletteCreated(handler: () => void): DialBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): DialBuilder;
  onPositionChanged(handler: () => void): DialBuilder;
  onPressedChanged(handler: () => void): DialBuilder;
  onRightInsetChanged(handler: () => void): DialBuilder;
  onRightPaddingChanged(handler: () => void): DialBuilder;
  onRotationChanged(handler: () => void): DialBuilder;
  onScaleChanged(handler: () => void): DialBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): DialBuilder;
  onSnapModeChanged(handler: () => void): DialBuilder;
  onSpacingChanged(handler: () => void): DialBuilder;
  onStartAngleChanged(handler: () => void): DialBuilder;
  onStateChanged(handler: (arg0: string) => void): DialBuilder;
  onStepSizeChanged(handler: () => void): DialBuilder;
  onToChanged(handler: () => void): DialBuilder;
  onTopInsetChanged(handler: () => void): DialBuilder;
  onTopPaddingChanged(handler: () => void): DialBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): DialBuilder;
  onValueChanged(handler: () => void): DialBuilder;
  onVerticalPaddingChanged(handler: () => void): DialBuilder;
  onVisibleChanged(handler: () => void): DialBuilder;
  onVisibleChildrenChanged(handler: () => void): DialBuilder;
  onVisualFocusChanged(handler: () => void): DialBuilder;
  onWheelEnabledChanged(handler: () => void): DialBuilder;
  onWidthChanged(handler: () => void): DialBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): DialBuilder;
  onWrapChanged(handler: () => void): DialBuilder;
  onWrapped(handler: (arg0: QmlValue) => void): DialBuilder;
  onXChanged(handler: () => void): DialBuilder;
  onYChanged(handler: () => void): DialBuilder;
  onZChanged(handler: () => void): DialBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DialBuilder;
  layer(setup: (b: LayerBuilder) => void): DialBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): DialBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): DialBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): DialBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): DialBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): DialBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): DialBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): DialBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): DialBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): DialBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): DialBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): DialBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): DialBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): DialBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): DialBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): DialBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): DialBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): DialBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): DialBuilder;
}

export function Dial(): DialBuilder {
  return new DslBuilderImpl('Dial') as unknown as DialBuilder;
}

export namespace Dial {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Dial',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Dial',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Dial', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Dial', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Dial', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Dial', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Dial', 'Flags', 'ItemObservesViewport');
  }
  export namespace InputMode {
    export const Circular = createEnumToken('Dial', 'InputMode', 'Circular');
    export const Horizontal = createEnumToken('Dial', 'InputMode', 'Horizontal');
    export const Vertical = createEnumToken('Dial', 'InputMode', 'Vertical');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Dial', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Dial', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Dial',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace SnapMode {
    export const NoSnap = createEnumToken('Dial', 'SnapMode', 'NoSnap');
    export const SnapAlways = createEnumToken('Dial', 'SnapMode', 'SnapAlways');
    export const SnapOnRelease = createEnumToken('Dial', 'SnapMode', 'SnapOnRelease');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Dial', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Dial', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Dial', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Dial', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Dial', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Dial', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Dial', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Dial', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Dial', 'TransformOrigin', 'BottomRight');
  }
  export namespace WrapDirection {
    export const Clockwise = createEnumToken('Dial', 'WrapDirection', 'Clockwise');
    export const CounterClockwise = createEnumToken('Dial', 'WrapDirection', 'CounterClockwise');
  }
}
