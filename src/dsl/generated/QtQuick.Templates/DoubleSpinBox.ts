// AUTO-GENERATED — DO NOT EDIT
// Type: DoubleSpinBox
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
  focusPolicy(value: QmlEnumToken): DoubleSpinBoxBuilder;
  focusPolicyBind(expr: string): DoubleSpinBoxBuilder;
  focusReason(value: QmlEnumToken): DoubleSpinBoxBuilder;
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
  inputMethodHints(value: QmlEnumToken): DoubleSpinBoxBuilder;
  inputMethodHintsBind(expr: string): DoubleSpinBoxBuilder;
  leftInset(value: number): DoubleSpinBoxBuilder;
  leftInsetBind(expr: string): DoubleSpinBoxBuilder;
  leftPadding(value: number): DoubleSpinBoxBuilder;
  leftPaddingBind(expr: string): DoubleSpinBoxBuilder;
  locale(value: string): DoubleSpinBoxBuilder;
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
  transformOrigin(value: QmlEnumToken): DoubleSpinBoxBuilder;
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
  onActiveFocusChanged(body: string): DoubleSpinBoxBuilder;
  onActiveFocusOnTabChanged(body: string): DoubleSpinBoxBuilder;
  onAntialiasingChanged(body: string): DoubleSpinBoxBuilder;
  onAvailableHeightChanged(body: string): DoubleSpinBoxBuilder;
  onAvailableWidthChanged(body: string): DoubleSpinBoxBuilder;
  onBackgroundChanged(body: string): DoubleSpinBoxBuilder;
  onBaselineOffsetChanged(body: string): DoubleSpinBoxBuilder;
  onBottomInsetChanged(body: string): DoubleSpinBoxBuilder;
  onBottomPaddingChanged(body: string): DoubleSpinBoxBuilder;
  onChildrenChanged(body: string): DoubleSpinBoxBuilder;
  onChildrenRectChanged(body: string): DoubleSpinBoxBuilder;
  onClipChanged(body: string): DoubleSpinBoxBuilder;
  onContainmentMaskChanged(body: string): DoubleSpinBoxBuilder;
  onContentItemChanged(body: string): DoubleSpinBoxBuilder;
  onDecimalsChanged(body: string): DoubleSpinBoxBuilder;
  onDisplayTextChanged(body: string): DoubleSpinBoxBuilder;
  onEditableChanged(body: string): DoubleSpinBoxBuilder;
  onEnabledChanged(body: string): DoubleSpinBoxBuilder;
  onFocusChanged(body: string): DoubleSpinBoxBuilder;
  onFocusPolicyChanged(body: string): DoubleSpinBoxBuilder;
  onFocusReasonChanged(body: string): DoubleSpinBoxBuilder;
  onFontChanged(body: string): DoubleSpinBoxBuilder;
  onFromChanged(body: string): DoubleSpinBoxBuilder;
  onHeightChanged(body: string): DoubleSpinBoxBuilder;
  onHorizontalPaddingChanged(body: string): DoubleSpinBoxBuilder;
  onHoverEnabledChanged(body: string): DoubleSpinBoxBuilder;
  onHoveredChanged(body: string): DoubleSpinBoxBuilder;
  onImplicitBackgroundHeightChanged(body: string): DoubleSpinBoxBuilder;
  onImplicitBackgroundWidthChanged(body: string): DoubleSpinBoxBuilder;
  onImplicitContentHeightChanged(body: string): DoubleSpinBoxBuilder;
  onImplicitContentWidthChanged(body: string): DoubleSpinBoxBuilder;
  onImplicitHeightChanged(body: string): DoubleSpinBoxBuilder;
  onImplicitWidthChanged(body: string): DoubleSpinBoxBuilder;
  onInputMethodComposingChanged(body: string): DoubleSpinBoxBuilder;
  onInputMethodHintsChanged(body: string): DoubleSpinBoxBuilder;
  onLeftInsetChanged(body: string): DoubleSpinBoxBuilder;
  onLeftPaddingChanged(body: string): DoubleSpinBoxBuilder;
  onLocaleChanged(body: string): DoubleSpinBoxBuilder;
  onMirroredChanged(body: string): DoubleSpinBoxBuilder;
  onObjectNameChanged(body: string): DoubleSpinBoxBuilder;
  onOpacityChanged(body: string): DoubleSpinBoxBuilder;
  onPaddingChanged(body: string): DoubleSpinBoxBuilder;
  onPaletteChanged(body: string): DoubleSpinBoxBuilder;
  onPaletteCreated(body: string): DoubleSpinBoxBuilder;
  onParentChanged(body: string): DoubleSpinBoxBuilder;
  onRightInsetChanged(body: string): DoubleSpinBoxBuilder;
  onRightPaddingChanged(body: string): DoubleSpinBoxBuilder;
  onRotationChanged(body: string): DoubleSpinBoxBuilder;
  onScaleChanged(body: string): DoubleSpinBoxBuilder;
  onSmoothChanged(body: string): DoubleSpinBoxBuilder;
  onSpacingChanged(body: string): DoubleSpinBoxBuilder;
  onStateChanged(body: string): DoubleSpinBoxBuilder;
  onStepSizeChanged(body: string): DoubleSpinBoxBuilder;
  onTextFromValueChanged(body: string): DoubleSpinBoxBuilder;
  onToChanged(body: string): DoubleSpinBoxBuilder;
  onTopInsetChanged(body: string): DoubleSpinBoxBuilder;
  onTopPaddingChanged(body: string): DoubleSpinBoxBuilder;
  onTransformOriginChanged(body: string): DoubleSpinBoxBuilder;
  onValidatorChanged(body: string): DoubleSpinBoxBuilder;
  onValueChanged(body: string): DoubleSpinBoxBuilder;
  onValueFromTextChanged(body: string): DoubleSpinBoxBuilder;
  onValueModified(body: string): DoubleSpinBoxBuilder;
  onVerticalPaddingChanged(body: string): DoubleSpinBoxBuilder;
  onVisibleChanged(body: string): DoubleSpinBoxBuilder;
  onVisibleChildrenChanged(body: string): DoubleSpinBoxBuilder;
  onVisualFocusChanged(body: string): DoubleSpinBoxBuilder;
  onWheelEnabledChanged(body: string): DoubleSpinBoxBuilder;
  onWidthChanged(body: string): DoubleSpinBoxBuilder;
  onWindowChanged(body: string): DoubleSpinBoxBuilder;
  onWrapChanged(body: string): DoubleSpinBoxBuilder;
  onXChanged(body: string): DoubleSpinBoxBuilder;
  onYChanged(body: string): DoubleSpinBoxBuilder;
  onZChanged(body: string): DoubleSpinBoxBuilder;
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

const DOUBLESPINBOX_META: TypeMetadata = {
  typeName: 'DoubleSpinBox',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'decimals', hasValue: true, hasBinding: true },
    { name: 'editable', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'from', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'inputMethodHints', hasValue: true, hasBinding: true },
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
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'stepSize', hasValue: true, hasBinding: true },
    { name: 'textFromValue', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'validator', hasValue: true, hasBinding: true },
    { name: 'value', hasValue: true, hasBinding: true },
    { name: 'valueFromText', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'wheelEnabled', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'wrap', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAvailableHeightChanged', paramCount: 0 },
    { handlerName: 'onAvailableWidthChanged', paramCount: 0 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 0 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onDecimalsChanged', paramCount: 0 },
    { handlerName: 'onDisplayTextChanged', paramCount: 0 },
    { handlerName: 'onEditableChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onFromChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInputMethodComposingChanged', paramCount: 0 },
    { handlerName: 'onInputMethodHintsChanged', paramCount: 0 },
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
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStepSizeChanged', paramCount: 0 },
    { handlerName: 'onTextFromValueChanged', paramCount: 0 },
    { handlerName: 'onToChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onValidatorChanged', paramCount: 0 },
    { handlerName: 'onValueChanged', paramCount: 0 },
    { handlerName: 'onValueFromTextChanged', paramCount: 0 },
    { handlerName: 'onValueModified', paramCount: 0 },
    { handlerName: 'onVerticalPaddingChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onVisualFocusChanged', paramCount: 0 },
    { handlerName: 'onWheelEnabledChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onWrapChanged', paramCount: 0 },
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
      methodName: 'down',
      groupName: 'down',
      properties: [
        { name: 'hovered', hasValue: true, hasBinding: true },
        { name: 'indicator', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
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
    {
      methodName: 'up',
      groupName: 'up',
      properties: [
        { name: 'hovered', hasValue: true, hasBinding: true },
        { name: 'indicator', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
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

export function DoubleSpinBox(): DoubleSpinBoxBuilder {
  return createFluentBuilder(
    'DoubleSpinBox',
    DOUBLESPINBOX_META,
  ) as unknown as DoubleSpinBoxBuilder;
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
