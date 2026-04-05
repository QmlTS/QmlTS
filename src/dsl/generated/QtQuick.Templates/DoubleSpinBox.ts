// AUTO-GENERATED — DO NOT EDIT
// Type: DoubleSpinBox
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
import type { UpBuilder } from './QQuickIndicatorButton.js';
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
export interface DoubleSpinBoxBuilder {
  id(id: string): DoubleSpinBoxBuilder;
  child(obj: QmlObjectBuilder): DoubleSpinBoxBuilder;

  activeFocusOnTab(value: boolean): DoubleSpinBoxBuilder;
  activeFocusOnTabBind(expr: string): DoubleSpinBoxBuilder;
  antialiasing(value: boolean): DoubleSpinBoxBuilder;
  antialiasingBind(expr: string): DoubleSpinBoxBuilder;
  background(value: ItemBuilder): DoubleSpinBoxBuilder;
  backgroundBind(expr: string): DoubleSpinBoxBuilder;
  baselineOffset(value: number): DoubleSpinBoxBuilder;
  baselineOffsetBind(expr: string): DoubleSpinBoxBuilder;
  bottomInset(value: number): DoubleSpinBoxBuilder;
  bottomInsetBind(expr: string): DoubleSpinBoxBuilder;
  bottomPadding(value: number): DoubleSpinBoxBuilder;
  bottomPaddingBind(expr: string): DoubleSpinBoxBuilder;
  clip(value: boolean): DoubleSpinBoxBuilder;
  clipBind(expr: string): DoubleSpinBoxBuilder;
  containmentMask(value: QtObjectBuilder): DoubleSpinBoxBuilder;
  containmentMaskBind(expr: string): DoubleSpinBoxBuilder;
  contentItem(value: ItemBuilder): DoubleSpinBoxBuilder;
  contentItemBind(expr: string): DoubleSpinBoxBuilder;
  decimals(value: number): DoubleSpinBoxBuilder;
  decimalsBind(expr: string): DoubleSpinBoxBuilder;
  editable(value: boolean): DoubleSpinBoxBuilder;
  editableBind(expr: string): DoubleSpinBoxBuilder;
  enabled(value: boolean): DoubleSpinBoxBuilder;
  enabledBind(expr: string): DoubleSpinBoxBuilder;
  focus(value: boolean): DoubleSpinBoxBuilder;
  focusBind(expr: string): DoubleSpinBoxBuilder;
  focusPolicy(value: QmlValue): DoubleSpinBoxBuilder;
  focusPolicyBind(expr: string): DoubleSpinBoxBuilder;
  focusReason(value: QmlValue): DoubleSpinBoxBuilder;
  focusReasonBind(expr: string): DoubleSpinBoxBuilder;
  font(value: QmlFont): DoubleSpinBoxBuilder;
  fontBind(expr: string): DoubleSpinBoxBuilder;
  from(value: number): DoubleSpinBoxBuilder;
  fromBind(expr: string): DoubleSpinBoxBuilder;
  height(value: number): DoubleSpinBoxBuilder;
  heightBind(expr: string): DoubleSpinBoxBuilder;
  horizontalPadding(value: number): DoubleSpinBoxBuilder;
  horizontalPaddingBind(expr: string): DoubleSpinBoxBuilder;
  hoverEnabled(value: boolean): DoubleSpinBoxBuilder;
  hoverEnabledBind(expr: string): DoubleSpinBoxBuilder;
  implicitHeight(value: number): DoubleSpinBoxBuilder;
  implicitHeightBind(expr: string): DoubleSpinBoxBuilder;
  implicitWidth(value: number): DoubleSpinBoxBuilder;
  implicitWidthBind(expr: string): DoubleSpinBoxBuilder;
  inputMethodHints(value: QmlValue): DoubleSpinBoxBuilder;
  inputMethodHintsBind(expr: string): DoubleSpinBoxBuilder;
  leftInset(value: number): DoubleSpinBoxBuilder;
  leftInsetBind(expr: string): DoubleSpinBoxBuilder;
  leftPadding(value: number): DoubleSpinBoxBuilder;
  leftPaddingBind(expr: string): DoubleSpinBoxBuilder;
  locale(value: QmlValue): DoubleSpinBoxBuilder;
  localeBind(expr: string): DoubleSpinBoxBuilder;
  objectName(value: string): DoubleSpinBoxBuilder;
  objectNameBind(expr: string): DoubleSpinBoxBuilder;
  opacity(value: number): DoubleSpinBoxBuilder;
  opacityBind(expr: string): DoubleSpinBoxBuilder;
  padding(value: number): DoubleSpinBoxBuilder;
  paddingBind(expr: string): DoubleSpinBoxBuilder;
  palette(value: PaletteBuilder): DoubleSpinBoxBuilder;
  paletteBind(expr: string): DoubleSpinBoxBuilder;
  parent(value: ItemBuilder): DoubleSpinBoxBuilder;
  parentBind(expr: string): DoubleSpinBoxBuilder;
  rightInset(value: number): DoubleSpinBoxBuilder;
  rightInsetBind(expr: string): DoubleSpinBoxBuilder;
  rightPadding(value: number): DoubleSpinBoxBuilder;
  rightPaddingBind(expr: string): DoubleSpinBoxBuilder;
  rotation(value: number): DoubleSpinBoxBuilder;
  rotationBind(expr: string): DoubleSpinBoxBuilder;
  scale(value: number): DoubleSpinBoxBuilder;
  scaleBind(expr: string): DoubleSpinBoxBuilder;
  smooth(value: boolean): DoubleSpinBoxBuilder;
  smoothBind(expr: string): DoubleSpinBoxBuilder;
  spacing(value: number): DoubleSpinBoxBuilder;
  spacingBind(expr: string): DoubleSpinBoxBuilder;
  state(value: string): DoubleSpinBoxBuilder;
  stateBind(expr: string): DoubleSpinBoxBuilder;
  stepSize(value: number): DoubleSpinBoxBuilder;
  stepSizeBind(expr: string): DoubleSpinBoxBuilder;
  textFromValue(value: QmlValue): DoubleSpinBoxBuilder;
  textFromValueBind(expr: string): DoubleSpinBoxBuilder;
  to(value: number): DoubleSpinBoxBuilder;
  toBind(expr: string): DoubleSpinBoxBuilder;
  topInset(value: number): DoubleSpinBoxBuilder;
  topInsetBind(expr: string): DoubleSpinBoxBuilder;
  topPadding(value: number): DoubleSpinBoxBuilder;
  topPaddingBind(expr: string): DoubleSpinBoxBuilder;
  transformOrigin(value: QmlValue): DoubleSpinBoxBuilder;
  transformOriginBind(expr: string): DoubleSpinBoxBuilder;
  validator(value: QmlValue): DoubleSpinBoxBuilder;
  validatorBind(expr: string): DoubleSpinBoxBuilder;
  value(value: number): DoubleSpinBoxBuilder;
  valueBind(expr: string): DoubleSpinBoxBuilder;
  valueFromText(value: QmlValue): DoubleSpinBoxBuilder;
  valueFromTextBind(expr: string): DoubleSpinBoxBuilder;
  verticalPadding(value: number): DoubleSpinBoxBuilder;
  verticalPaddingBind(expr: string): DoubleSpinBoxBuilder;
  visible(value: boolean): DoubleSpinBoxBuilder;
  visibleBind(expr: string): DoubleSpinBoxBuilder;
  wheelEnabled(value: boolean): DoubleSpinBoxBuilder;
  wheelEnabledBind(expr: string): DoubleSpinBoxBuilder;
  width(value: number): DoubleSpinBoxBuilder;
  widthBind(expr: string): DoubleSpinBoxBuilder;
  wrap(value: boolean): DoubleSpinBoxBuilder;
  wrapBind(expr: string): DoubleSpinBoxBuilder;
  x(value: number): DoubleSpinBoxBuilder;
  xBind(expr: string): DoubleSpinBoxBuilder;
  y(value: number): DoubleSpinBoxBuilder;
  yBind(expr: string): DoubleSpinBoxBuilder;
  z(value: number): DoubleSpinBoxBuilder;
  zBind(expr: string): DoubleSpinBoxBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): DoubleSpinBoxBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): DoubleSpinBoxBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): DoubleSpinBoxBuilder;
  onAvailableHeightChanged(handler: () => void): DoubleSpinBoxBuilder;
  onAvailableWidthChanged(handler: () => void): DoubleSpinBoxBuilder;
  onBackgroundChanged(handler: () => void): DoubleSpinBoxBuilder;
  onBaselineOffsetChanged(handler: () => void): DoubleSpinBoxBuilder;
  onBottomInsetChanged(handler: () => void): DoubleSpinBoxBuilder;
  onBottomPaddingChanged(handler: () => void): DoubleSpinBoxBuilder;
  onChildrenChanged(handler: () => void): DoubleSpinBoxBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): DoubleSpinBoxBuilder;
  onClipChanged(handler: (arg0: boolean) => void): DoubleSpinBoxBuilder;
  onContainmentMaskChanged(handler: () => void): DoubleSpinBoxBuilder;
  onContentItemChanged(handler: () => void): DoubleSpinBoxBuilder;
  onDecimalsChanged(handler: () => void): DoubleSpinBoxBuilder;
  onDisplayTextChanged(handler: () => void): DoubleSpinBoxBuilder;
  onEditableChanged(handler: () => void): DoubleSpinBoxBuilder;
  onEnabledChanged(handler: () => void): DoubleSpinBoxBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): DoubleSpinBoxBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): DoubleSpinBoxBuilder;
  onFocusReasonChanged(handler: () => void): DoubleSpinBoxBuilder;
  onFontChanged(handler: () => void): DoubleSpinBoxBuilder;
  onFromChanged(handler: () => void): DoubleSpinBoxBuilder;
  onHeightChanged(handler: () => void): DoubleSpinBoxBuilder;
  onHorizontalPaddingChanged(handler: () => void): DoubleSpinBoxBuilder;
  onHoverEnabledChanged(handler: () => void): DoubleSpinBoxBuilder;
  onHoveredChanged(handler: () => void): DoubleSpinBoxBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): DoubleSpinBoxBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): DoubleSpinBoxBuilder;
  onImplicitContentHeightChanged(handler: () => void): DoubleSpinBoxBuilder;
  onImplicitContentWidthChanged(handler: () => void): DoubleSpinBoxBuilder;
  onImplicitHeightChanged(handler: () => void): DoubleSpinBoxBuilder;
  onImplicitWidthChanged(handler: () => void): DoubleSpinBoxBuilder;
  onInputMethodComposingChanged(handler: () => void): DoubleSpinBoxBuilder;
  onInputMethodHintsChanged(handler: () => void): DoubleSpinBoxBuilder;
  onLeftInsetChanged(handler: () => void): DoubleSpinBoxBuilder;
  onLeftPaddingChanged(handler: () => void): DoubleSpinBoxBuilder;
  onLocaleChanged(handler: () => void): DoubleSpinBoxBuilder;
  onMirroredChanged(handler: () => void): DoubleSpinBoxBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): DoubleSpinBoxBuilder;
  onOpacityChanged(handler: () => void): DoubleSpinBoxBuilder;
  onPaddingChanged(handler: () => void): DoubleSpinBoxBuilder;
  onPaletteChanged(handler: () => void): DoubleSpinBoxBuilder;
  onPaletteCreated(handler: () => void): DoubleSpinBoxBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): DoubleSpinBoxBuilder;
  onRightInsetChanged(handler: () => void): DoubleSpinBoxBuilder;
  onRightPaddingChanged(handler: () => void): DoubleSpinBoxBuilder;
  onRotationChanged(handler: () => void): DoubleSpinBoxBuilder;
  onScaleChanged(handler: () => void): DoubleSpinBoxBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): DoubleSpinBoxBuilder;
  onSpacingChanged(handler: () => void): DoubleSpinBoxBuilder;
  onStateChanged(handler: (arg0: string) => void): DoubleSpinBoxBuilder;
  onStepSizeChanged(handler: () => void): DoubleSpinBoxBuilder;
  onTextFromValueChanged(handler: () => void): DoubleSpinBoxBuilder;
  onToChanged(handler: () => void): DoubleSpinBoxBuilder;
  onTopInsetChanged(handler: () => void): DoubleSpinBoxBuilder;
  onTopPaddingChanged(handler: () => void): DoubleSpinBoxBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): DoubleSpinBoxBuilder;
  onValidatorChanged(handler: () => void): DoubleSpinBoxBuilder;
  onValueChanged(handler: () => void): DoubleSpinBoxBuilder;
  onValueFromTextChanged(handler: () => void): DoubleSpinBoxBuilder;
  onValueModified(handler: () => void): DoubleSpinBoxBuilder;
  onVerticalPaddingChanged(handler: () => void): DoubleSpinBoxBuilder;
  onVisibleChanged(handler: () => void): DoubleSpinBoxBuilder;
  onVisibleChildrenChanged(handler: () => void): DoubleSpinBoxBuilder;
  onVisualFocusChanged(handler: () => void): DoubleSpinBoxBuilder;
  onWheelEnabledChanged(handler: () => void): DoubleSpinBoxBuilder;
  onWidthChanged(handler: () => void): DoubleSpinBoxBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): DoubleSpinBoxBuilder;
  onWrapChanged(handler: () => void): DoubleSpinBoxBuilder;
  onXChanged(handler: () => void): DoubleSpinBoxBuilder;
  onYChanged(handler: () => void): DoubleSpinBoxBuilder;
  onZChanged(handler: () => void): DoubleSpinBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): DoubleSpinBoxBuilder;
  down(setup: (b: UpBuilder) => void): DoubleSpinBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): DoubleSpinBoxBuilder;
  up(setup: (b: UpBuilder) => void): DoubleSpinBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): DoubleSpinBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): DoubleSpinBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): DoubleSpinBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): DoubleSpinBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): DoubleSpinBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): DoubleSpinBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): DoubleSpinBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): DoubleSpinBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): DoubleSpinBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): DoubleSpinBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): DoubleSpinBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): DoubleSpinBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): DoubleSpinBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): DoubleSpinBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): DoubleSpinBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): DoubleSpinBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): DoubleSpinBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): DoubleSpinBoxBuilder;
}

export function DoubleSpinBox(): DoubleSpinBoxBuilder {
  return new DslBuilderImpl('DoubleSpinBox') as unknown as DoubleSpinBoxBuilder;
}

export namespace DoubleSpinBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'DoubleSpinBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'DoubleSpinBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('DoubleSpinBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('DoubleSpinBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('DoubleSpinBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('DoubleSpinBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'DoubleSpinBox',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemSceneChange',
    );
    export const ItemVisibleHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'DoubleSpinBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('DoubleSpinBox', 'TransformOrigin', 'BottomRight');
  }
}
