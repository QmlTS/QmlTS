// AUTO-GENERATED — DO NOT EDIT
// Type: SpinBox
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
export interface SpinBoxBuilder {
  id(id: string): SpinBoxBuilder;
  child(obj: QmlObjectBuilder): SpinBoxBuilder;

  activeFocusOnTab(value: boolean): SpinBoxBuilder;
  activeFocusOnTabBind(expr: string): SpinBoxBuilder;
  antialiasing(value: boolean): SpinBoxBuilder;
  antialiasingBind(expr: string): SpinBoxBuilder;
  background(value: ItemBuilder): SpinBoxBuilder;
  backgroundBind(expr: string): SpinBoxBuilder;
  baselineOffset(value: number): SpinBoxBuilder;
  baselineOffsetBind(expr: string): SpinBoxBuilder;
  bottomInset(value: number): SpinBoxBuilder;
  bottomInsetBind(expr: string): SpinBoxBuilder;
  bottomPadding(value: number): SpinBoxBuilder;
  bottomPaddingBind(expr: string): SpinBoxBuilder;
  clip(value: boolean): SpinBoxBuilder;
  clipBind(expr: string): SpinBoxBuilder;
  containmentMask(value: QtObjectBuilder): SpinBoxBuilder;
  containmentMaskBind(expr: string): SpinBoxBuilder;
  contentItem(value: ItemBuilder): SpinBoxBuilder;
  contentItemBind(expr: string): SpinBoxBuilder;
  editable(value: boolean): SpinBoxBuilder;
  editableBind(expr: string): SpinBoxBuilder;
  enabled(value: boolean): SpinBoxBuilder;
  enabledBind(expr: string): SpinBoxBuilder;
  focus(value: boolean): SpinBoxBuilder;
  focusBind(expr: string): SpinBoxBuilder;
  focusPolicy(value: QmlValue): SpinBoxBuilder;
  focusPolicyBind(expr: string): SpinBoxBuilder;
  focusReason(value: QmlValue): SpinBoxBuilder;
  focusReasonBind(expr: string): SpinBoxBuilder;
  font(value: QmlFont): SpinBoxBuilder;
  fontBind(expr: string): SpinBoxBuilder;
  from(value: number): SpinBoxBuilder;
  fromBind(expr: string): SpinBoxBuilder;
  height(value: number): SpinBoxBuilder;
  heightBind(expr: string): SpinBoxBuilder;
  horizontalPadding(value: number): SpinBoxBuilder;
  horizontalPaddingBind(expr: string): SpinBoxBuilder;
  hoverEnabled(value: boolean): SpinBoxBuilder;
  hoverEnabledBind(expr: string): SpinBoxBuilder;
  implicitHeight(value: number): SpinBoxBuilder;
  implicitHeightBind(expr: string): SpinBoxBuilder;
  implicitWidth(value: number): SpinBoxBuilder;
  implicitWidthBind(expr: string): SpinBoxBuilder;
  inputMethodHints(value: QmlValue): SpinBoxBuilder;
  inputMethodHintsBind(expr: string): SpinBoxBuilder;
  leftInset(value: number): SpinBoxBuilder;
  leftInsetBind(expr: string): SpinBoxBuilder;
  leftPadding(value: number): SpinBoxBuilder;
  leftPaddingBind(expr: string): SpinBoxBuilder;
  live(value: boolean): SpinBoxBuilder;
  liveBind(expr: string): SpinBoxBuilder;
  locale(value: QmlValue): SpinBoxBuilder;
  localeBind(expr: string): SpinBoxBuilder;
  objectName(value: string): SpinBoxBuilder;
  objectNameBind(expr: string): SpinBoxBuilder;
  opacity(value: number): SpinBoxBuilder;
  opacityBind(expr: string): SpinBoxBuilder;
  padding(value: number): SpinBoxBuilder;
  paddingBind(expr: string): SpinBoxBuilder;
  palette(value: PaletteBuilder): SpinBoxBuilder;
  paletteBind(expr: string): SpinBoxBuilder;
  parent(value: ItemBuilder): SpinBoxBuilder;
  parentBind(expr: string): SpinBoxBuilder;
  rightInset(value: number): SpinBoxBuilder;
  rightInsetBind(expr: string): SpinBoxBuilder;
  rightPadding(value: number): SpinBoxBuilder;
  rightPaddingBind(expr: string): SpinBoxBuilder;
  rotation(value: number): SpinBoxBuilder;
  rotationBind(expr: string): SpinBoxBuilder;
  scale(value: number): SpinBoxBuilder;
  scaleBind(expr: string): SpinBoxBuilder;
  smooth(value: boolean): SpinBoxBuilder;
  smoothBind(expr: string): SpinBoxBuilder;
  spacing(value: number): SpinBoxBuilder;
  spacingBind(expr: string): SpinBoxBuilder;
  state(value: string): SpinBoxBuilder;
  stateBind(expr: string): SpinBoxBuilder;
  stepSize(value: number): SpinBoxBuilder;
  stepSizeBind(expr: string): SpinBoxBuilder;
  textFromValue(value: QmlValue): SpinBoxBuilder;
  textFromValueBind(expr: string): SpinBoxBuilder;
  to(value: number): SpinBoxBuilder;
  toBind(expr: string): SpinBoxBuilder;
  topInset(value: number): SpinBoxBuilder;
  topInsetBind(expr: string): SpinBoxBuilder;
  topPadding(value: number): SpinBoxBuilder;
  topPaddingBind(expr: string): SpinBoxBuilder;
  transformOrigin(value: QmlValue): SpinBoxBuilder;
  transformOriginBind(expr: string): SpinBoxBuilder;
  validator(value: QmlValue): SpinBoxBuilder;
  validatorBind(expr: string): SpinBoxBuilder;
  value(value: number): SpinBoxBuilder;
  valueBind(expr: string): SpinBoxBuilder;
  valueFromText(value: QmlValue): SpinBoxBuilder;
  valueFromTextBind(expr: string): SpinBoxBuilder;
  verticalPadding(value: number): SpinBoxBuilder;
  verticalPaddingBind(expr: string): SpinBoxBuilder;
  visible(value: boolean): SpinBoxBuilder;
  visibleBind(expr: string): SpinBoxBuilder;
  wheelEnabled(value: boolean): SpinBoxBuilder;
  wheelEnabledBind(expr: string): SpinBoxBuilder;
  width(value: number): SpinBoxBuilder;
  widthBind(expr: string): SpinBoxBuilder;
  wrap(value: boolean): SpinBoxBuilder;
  wrapBind(expr: string): SpinBoxBuilder;
  x(value: number): SpinBoxBuilder;
  xBind(expr: string): SpinBoxBuilder;
  y(value: number): SpinBoxBuilder;
  yBind(expr: string): SpinBoxBuilder;
  z(value: number): SpinBoxBuilder;
  zBind(expr: string): SpinBoxBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): SpinBoxBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): SpinBoxBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): SpinBoxBuilder;
  onAvailableHeightChanged(handler: () => void): SpinBoxBuilder;
  onAvailableWidthChanged(handler: () => void): SpinBoxBuilder;
  onBackgroundChanged(handler: () => void): SpinBoxBuilder;
  onBaselineOffsetChanged(handler: () => void): SpinBoxBuilder;
  onBottomInsetChanged(handler: () => void): SpinBoxBuilder;
  onBottomPaddingChanged(handler: () => void): SpinBoxBuilder;
  onChildrenChanged(handler: () => void): SpinBoxBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): SpinBoxBuilder;
  onClipChanged(handler: (arg0: boolean) => void): SpinBoxBuilder;
  onContainmentMaskChanged(handler: () => void): SpinBoxBuilder;
  onContentItemChanged(handler: () => void): SpinBoxBuilder;
  onDisplayTextChanged(handler: () => void): SpinBoxBuilder;
  onEditableChanged(handler: () => void): SpinBoxBuilder;
  onEnabledChanged(handler: () => void): SpinBoxBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): SpinBoxBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): SpinBoxBuilder;
  onFocusReasonChanged(handler: () => void): SpinBoxBuilder;
  onFontChanged(handler: () => void): SpinBoxBuilder;
  onFromChanged(handler: () => void): SpinBoxBuilder;
  onHeightChanged(handler: () => void): SpinBoxBuilder;
  onHorizontalPaddingChanged(handler: () => void): SpinBoxBuilder;
  onHoverEnabledChanged(handler: () => void): SpinBoxBuilder;
  onHoveredChanged(handler: () => void): SpinBoxBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): SpinBoxBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): SpinBoxBuilder;
  onImplicitContentHeightChanged(handler: () => void): SpinBoxBuilder;
  onImplicitContentWidthChanged(handler: () => void): SpinBoxBuilder;
  onImplicitHeightChanged(handler: () => void): SpinBoxBuilder;
  onImplicitWidthChanged(handler: () => void): SpinBoxBuilder;
  onInputMethodComposingChanged(handler: () => void): SpinBoxBuilder;
  onInputMethodHintsChanged(handler: () => void): SpinBoxBuilder;
  onLeftInsetChanged(handler: () => void): SpinBoxBuilder;
  onLeftPaddingChanged(handler: () => void): SpinBoxBuilder;
  onLiveChanged(handler: () => void): SpinBoxBuilder;
  onLocaleChanged(handler: () => void): SpinBoxBuilder;
  onMirroredChanged(handler: () => void): SpinBoxBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): SpinBoxBuilder;
  onOpacityChanged(handler: () => void): SpinBoxBuilder;
  onPaddingChanged(handler: () => void): SpinBoxBuilder;
  onPaletteChanged(handler: () => void): SpinBoxBuilder;
  onPaletteCreated(handler: () => void): SpinBoxBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): SpinBoxBuilder;
  onRightInsetChanged(handler: () => void): SpinBoxBuilder;
  onRightPaddingChanged(handler: () => void): SpinBoxBuilder;
  onRotationChanged(handler: () => void): SpinBoxBuilder;
  onScaleChanged(handler: () => void): SpinBoxBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): SpinBoxBuilder;
  onSpacingChanged(handler: () => void): SpinBoxBuilder;
  onStateChanged(handler: (arg0: string) => void): SpinBoxBuilder;
  onStepSizeChanged(handler: () => void): SpinBoxBuilder;
  onTextFromValueChanged(handler: () => void): SpinBoxBuilder;
  onToChanged(handler: () => void): SpinBoxBuilder;
  onTopInsetChanged(handler: () => void): SpinBoxBuilder;
  onTopPaddingChanged(handler: () => void): SpinBoxBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): SpinBoxBuilder;
  onValidatorChanged(handler: () => void): SpinBoxBuilder;
  onValueChanged(handler: () => void): SpinBoxBuilder;
  onValueFromTextChanged(handler: () => void): SpinBoxBuilder;
  onValueModified(handler: () => void): SpinBoxBuilder;
  onVerticalPaddingChanged(handler: () => void): SpinBoxBuilder;
  onVisibleChanged(handler: () => void): SpinBoxBuilder;
  onVisibleChildrenChanged(handler: () => void): SpinBoxBuilder;
  onVisualFocusChanged(handler: () => void): SpinBoxBuilder;
  onWheelEnabledChanged(handler: () => void): SpinBoxBuilder;
  onWidthChanged(handler: () => void): SpinBoxBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): SpinBoxBuilder;
  onWrapChanged(handler: () => void): SpinBoxBuilder;
  onXChanged(handler: () => void): SpinBoxBuilder;
  onYChanged(handler: () => void): SpinBoxBuilder;
  onZChanged(handler: () => void): SpinBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): SpinBoxBuilder;
  down(setup: (b: UpBuilder) => void): SpinBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): SpinBoxBuilder;
  up(setup: (b: UpBuilder) => void): SpinBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): SpinBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): SpinBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): SpinBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): SpinBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): SpinBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): SpinBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): SpinBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): SpinBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): SpinBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): SpinBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): SpinBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): SpinBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): SpinBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): SpinBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): SpinBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): SpinBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): SpinBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): SpinBoxBuilder;
}

export function SpinBox(): SpinBoxBuilder {
  return new DslBuilderImpl('SpinBox') as unknown as SpinBoxBuilder;
}

export namespace SpinBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'SpinBox',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'SpinBox',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('SpinBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('SpinBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('SpinBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('SpinBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('SpinBox', 'Flags', 'ItemObservesViewport');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('SpinBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'SpinBox',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('SpinBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('SpinBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('SpinBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('SpinBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('SpinBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('SpinBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('SpinBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('SpinBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('SpinBox', 'TransformOrigin', 'BottomRight');
  }
}
