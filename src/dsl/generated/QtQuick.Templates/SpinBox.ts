// AUTO-GENERATED — DO NOT EDIT
// Type: SpinBox
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
  children(...objs: QmlObjectBuilder[]): SpinBoxBuilder;

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
  focusPolicy(value: QmlEnumToken): SpinBoxBuilder;
  focusPolicyBind(expr: string): SpinBoxBuilder;
  focusReason(value: QmlEnumToken): SpinBoxBuilder;
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
  inputMethodHints(value: QmlEnumToken): SpinBoxBuilder;
  inputMethodHintsBind(expr: string): SpinBoxBuilder;
  leftInset(value: number): SpinBoxBuilder;
  leftInsetBind(expr: string): SpinBoxBuilder;
  leftPadding(value: number): SpinBoxBuilder;
  leftPaddingBind(expr: string): SpinBoxBuilder;
  live(value: boolean): SpinBoxBuilder;
  liveBind(expr: string): SpinBoxBuilder;
  locale(value: string): SpinBoxBuilder;
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
  transformOrigin(value: QmlEnumToken): SpinBoxBuilder;
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
  onActiveFocusChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onAvailableHeightChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onAvailableWidthChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onBackgroundChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onBottomInsetChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onClipChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onDisplayTextChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onEditableChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onFocusReasonChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onFontChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onFromChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onHorizontalPaddingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onHoverEnabledChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onHoveredChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onImplicitBackgroundHeightChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onImplicitBackgroundWidthChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onImplicitContentHeightChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onImplicitContentWidthChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onInputMethodComposingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onInputMethodHintsChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onLeftInsetChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onLiveChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onLocaleChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onRightInsetChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onStateChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onStepSizeChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onTextFromValueChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onToChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onTopInsetChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onValidatorChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onValueChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onValueFromTextChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onValueModified(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onVerticalPaddingChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onVisualFocusChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onWheelEnabledChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onWrapChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onXChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onYChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
  onZChanged(handler: DslSignalHandlerValue): SpinBoxBuilder;
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

const SPINBOX_META: TypeMetadata = {
  typeName: 'SpinBox',
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
    { name: 'live', hasValue: true, hasBinding: true },
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
    { handlerName: 'onLiveChanged', paramCount: 0 },
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

export function SpinBox(): SpinBoxBuilder {
  return createFluentBuilder('SpinBox', SPINBOX_META) as unknown as SpinBoxBuilder;
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
