// AUTO-GENERATED — DO NOT EDIT
// Type: ComboBox
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlComponent, QmlEnumToken, QmlFont, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { ContextMenuAttachedBuilder } from './ContextMenu.js';
import type { PopupBuilder } from './Popup.js';
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
export interface ComboBoxBuilder {
  id(id: string): ComboBoxBuilder;
  child(obj: QmlObjectBuilder): ComboBoxBuilder;

  activeFocusOnTab(value: boolean): ComboBoxBuilder;
  activeFocusOnTabBind(expr: string): ComboBoxBuilder;
  antialiasing(value: boolean): ComboBoxBuilder;
  antialiasingBind(expr: string): ComboBoxBuilder;
  background(value: ItemBuilder): ComboBoxBuilder;
  backgroundBind(expr: string): ComboBoxBuilder;
  baselineOffset(value: number): ComboBoxBuilder;
  baselineOffsetBind(expr: string): ComboBoxBuilder;
  bottomInset(value: number): ComboBoxBuilder;
  bottomInsetBind(expr: string): ComboBoxBuilder;
  bottomPadding(value: number): ComboBoxBuilder;
  bottomPaddingBind(expr: string): ComboBoxBuilder;
  clip(value: boolean): ComboBoxBuilder;
  clipBind(expr: string): ComboBoxBuilder;
  containmentMask(value: QtObjectBuilder): ComboBoxBuilder;
  containmentMaskBind(expr: string): ComboBoxBuilder;
  contentItem(value: ItemBuilder): ComboBoxBuilder;
  contentItemBind(expr: string): ComboBoxBuilder;
  currentIndex(value: number): ComboBoxBuilder;
  currentIndexBind(expr: string): ComboBoxBuilder;
  currentValue(value: QmlValue): ComboBoxBuilder;
  currentValueBind(expr: string): ComboBoxBuilder;
  delegate(value: QmlComponent): ComboBoxBuilder;
  delegateBind(expr: string): ComboBoxBuilder;
  displayText(value: string): ComboBoxBuilder;
  displayTextBind(expr: string): ComboBoxBuilder;
  down(value: boolean): ComboBoxBuilder;
  downBind(expr: string): ComboBoxBuilder;
  editText(value: string): ComboBoxBuilder;
  editTextBind(expr: string): ComboBoxBuilder;
  editable(value: boolean): ComboBoxBuilder;
  editableBind(expr: string): ComboBoxBuilder;
  enabled(value: boolean): ComboBoxBuilder;
  enabledBind(expr: string): ComboBoxBuilder;
  flat(value: boolean): ComboBoxBuilder;
  flatBind(expr: string): ComboBoxBuilder;
  focus(value: boolean): ComboBoxBuilder;
  focusBind(expr: string): ComboBoxBuilder;
  focusPolicy(value: QmlEnumToken): ComboBoxBuilder;
  focusPolicyBind(expr: string): ComboBoxBuilder;
  focusReason(value: QmlEnumToken): ComboBoxBuilder;
  focusReasonBind(expr: string): ComboBoxBuilder;
  font(value: QmlFont): ComboBoxBuilder;
  fontBind(expr: string): ComboBoxBuilder;
  height(value: number): ComboBoxBuilder;
  heightBind(expr: string): ComboBoxBuilder;
  horizontalPadding(value: number): ComboBoxBuilder;
  horizontalPaddingBind(expr: string): ComboBoxBuilder;
  hoverEnabled(value: boolean): ComboBoxBuilder;
  hoverEnabledBind(expr: string): ComboBoxBuilder;
  implicitContentWidthPolicy(value: QmlEnumToken): ComboBoxBuilder;
  implicitContentWidthPolicyBind(expr: string): ComboBoxBuilder;
  implicitHeight(value: number): ComboBoxBuilder;
  implicitHeightBind(expr: string): ComboBoxBuilder;
  implicitWidth(value: number): ComboBoxBuilder;
  implicitWidthBind(expr: string): ComboBoxBuilder;
  indicator(value: ItemBuilder): ComboBoxBuilder;
  indicatorBind(expr: string): ComboBoxBuilder;
  inputMethodHints(value: QmlEnumToken): ComboBoxBuilder;
  inputMethodHintsBind(expr: string): ComboBoxBuilder;
  leftInset(value: number): ComboBoxBuilder;
  leftInsetBind(expr: string): ComboBoxBuilder;
  leftPadding(value: number): ComboBoxBuilder;
  leftPaddingBind(expr: string): ComboBoxBuilder;
  locale(value: string): ComboBoxBuilder;
  localeBind(expr: string): ComboBoxBuilder;
  model(value: QmlValue): ComboBoxBuilder;
  modelBind(expr: string): ComboBoxBuilder;
  objectName(value: string): ComboBoxBuilder;
  objectNameBind(expr: string): ComboBoxBuilder;
  opacity(value: number): ComboBoxBuilder;
  opacityBind(expr: string): ComboBoxBuilder;
  padding(value: number): ComboBoxBuilder;
  paddingBind(expr: string): ComboBoxBuilder;
  palette(value: PaletteBuilder): ComboBoxBuilder;
  paletteBind(expr: string): ComboBoxBuilder;
  parent(value: ItemBuilder): ComboBoxBuilder;
  parentBind(expr: string): ComboBoxBuilder;
  popup(value: PopupBuilder): ComboBoxBuilder;
  popupBind(expr: string): ComboBoxBuilder;
  rightInset(value: number): ComboBoxBuilder;
  rightInsetBind(expr: string): ComboBoxBuilder;
  rightPadding(value: number): ComboBoxBuilder;
  rightPaddingBind(expr: string): ComboBoxBuilder;
  rotation(value: number): ComboBoxBuilder;
  rotationBind(expr: string): ComboBoxBuilder;
  scale(value: number): ComboBoxBuilder;
  scaleBind(expr: string): ComboBoxBuilder;
  selectTextByMouse(value: boolean): ComboBoxBuilder;
  selectTextByMouseBind(expr: string): ComboBoxBuilder;
  smooth(value: boolean): ComboBoxBuilder;
  smoothBind(expr: string): ComboBoxBuilder;
  spacing(value: number): ComboBoxBuilder;
  spacingBind(expr: string): ComboBoxBuilder;
  state(value: string): ComboBoxBuilder;
  stateBind(expr: string): ComboBoxBuilder;
  textRole(value: string): ComboBoxBuilder;
  textRoleBind(expr: string): ComboBoxBuilder;
  topInset(value: number): ComboBoxBuilder;
  topInsetBind(expr: string): ComboBoxBuilder;
  topPadding(value: number): ComboBoxBuilder;
  topPaddingBind(expr: string): ComboBoxBuilder;
  transformOrigin(value: QmlEnumToken): ComboBoxBuilder;
  transformOriginBind(expr: string): ComboBoxBuilder;
  validator(value: QmlValue): ComboBoxBuilder;
  validatorBind(expr: string): ComboBoxBuilder;
  valueRole(value: string): ComboBoxBuilder;
  valueRoleBind(expr: string): ComboBoxBuilder;
  verticalPadding(value: number): ComboBoxBuilder;
  verticalPaddingBind(expr: string): ComboBoxBuilder;
  visible(value: boolean): ComboBoxBuilder;
  visibleBind(expr: string): ComboBoxBuilder;
  wheelEnabled(value: boolean): ComboBoxBuilder;
  wheelEnabledBind(expr: string): ComboBoxBuilder;
  width(value: number): ComboBoxBuilder;
  widthBind(expr: string): ComboBoxBuilder;
  x(value: number): ComboBoxBuilder;
  xBind(expr: string): ComboBoxBuilder;
  y(value: number): ComboBoxBuilder;
  yBind(expr: string): ComboBoxBuilder;
  z(value: number): ComboBoxBuilder;
  zBind(expr: string): ComboBoxBuilder;
  onAcceptableInputChanged(body: string): ComboBoxBuilder;
  onAccepted(body: string): ComboBoxBuilder;
  onActivated(body: string): ComboBoxBuilder;
  onActiveFocusChanged(body: string): ComboBoxBuilder;
  onActiveFocusOnTabChanged(body: string): ComboBoxBuilder;
  onAntialiasingChanged(body: string): ComboBoxBuilder;
  onAvailableHeightChanged(body: string): ComboBoxBuilder;
  onAvailableWidthChanged(body: string): ComboBoxBuilder;
  onBackgroundChanged(body: string): ComboBoxBuilder;
  onBaselineOffsetChanged(body: string): ComboBoxBuilder;
  onBottomInsetChanged(body: string): ComboBoxBuilder;
  onBottomPaddingChanged(body: string): ComboBoxBuilder;
  onChildrenChanged(body: string): ComboBoxBuilder;
  onChildrenRectChanged(body: string): ComboBoxBuilder;
  onClipChanged(body: string): ComboBoxBuilder;
  onContainmentMaskChanged(body: string): ComboBoxBuilder;
  onContentItemChanged(body: string): ComboBoxBuilder;
  onCountChanged(body: string): ComboBoxBuilder;
  onCurrentIndexChanged(body: string): ComboBoxBuilder;
  onCurrentTextChanged(body: string): ComboBoxBuilder;
  onCurrentValueChanged(body: string): ComboBoxBuilder;
  onDelegateChanged(body: string): ComboBoxBuilder;
  onDelegateModelChanged(body: string): ComboBoxBuilder;
  onDisplayTextChanged(body: string): ComboBoxBuilder;
  onDownChanged(body: string): ComboBoxBuilder;
  onEditTextChanged(body: string): ComboBoxBuilder;
  onEditableChanged(body: string): ComboBoxBuilder;
  onEnabledChanged(body: string): ComboBoxBuilder;
  onFlatChanged(body: string): ComboBoxBuilder;
  onFocusChanged(body: string): ComboBoxBuilder;
  onFocusPolicyChanged(body: string): ComboBoxBuilder;
  onFocusReasonChanged(body: string): ComboBoxBuilder;
  onFontChanged(body: string): ComboBoxBuilder;
  onHeightChanged(body: string): ComboBoxBuilder;
  onHighlighted(body: string): ComboBoxBuilder;
  onHighlightedIndexChanged(body: string): ComboBoxBuilder;
  onHorizontalPaddingChanged(body: string): ComboBoxBuilder;
  onHoverEnabledChanged(body: string): ComboBoxBuilder;
  onHoveredChanged(body: string): ComboBoxBuilder;
  onImplicitBackgroundHeightChanged(body: string): ComboBoxBuilder;
  onImplicitBackgroundWidthChanged(body: string): ComboBoxBuilder;
  onImplicitContentHeightChanged(body: string): ComboBoxBuilder;
  onImplicitContentWidthChanged(body: string): ComboBoxBuilder;
  onImplicitContentWidthPolicyChanged(body: string): ComboBoxBuilder;
  onImplicitHeightChanged(body: string): ComboBoxBuilder;
  onImplicitIndicatorHeightChanged(body: string): ComboBoxBuilder;
  onImplicitIndicatorWidthChanged(body: string): ComboBoxBuilder;
  onImplicitWidthChanged(body: string): ComboBoxBuilder;
  onIndicatorChanged(body: string): ComboBoxBuilder;
  onInputMethodComposingChanged(body: string): ComboBoxBuilder;
  onInputMethodHintsChanged(body: string): ComboBoxBuilder;
  onLeftInsetChanged(body: string): ComboBoxBuilder;
  onLeftPaddingChanged(body: string): ComboBoxBuilder;
  onLocaleChanged(body: string): ComboBoxBuilder;
  onMirroredChanged(body: string): ComboBoxBuilder;
  onModelChanged(body: string): ComboBoxBuilder;
  onObjectNameChanged(body: string): ComboBoxBuilder;
  onOpacityChanged(body: string): ComboBoxBuilder;
  onPaddingChanged(body: string): ComboBoxBuilder;
  onPaletteChanged(body: string): ComboBoxBuilder;
  onPaletteCreated(body: string): ComboBoxBuilder;
  onParentChanged(body: string): ComboBoxBuilder;
  onPopupChanged(body: string): ComboBoxBuilder;
  onPressedChanged(body: string): ComboBoxBuilder;
  onRightInsetChanged(body: string): ComboBoxBuilder;
  onRightPaddingChanged(body: string): ComboBoxBuilder;
  onRotationChanged(body: string): ComboBoxBuilder;
  onScaleChanged(body: string): ComboBoxBuilder;
  onSelectTextByMouseChanged(body: string): ComboBoxBuilder;
  onSmoothChanged(body: string): ComboBoxBuilder;
  onSpacingChanged(body: string): ComboBoxBuilder;
  onStateChanged(body: string): ComboBoxBuilder;
  onTextRoleChanged(body: string): ComboBoxBuilder;
  onTopInsetChanged(body: string): ComboBoxBuilder;
  onTopPaddingChanged(body: string): ComboBoxBuilder;
  onTransformOriginChanged(body: string): ComboBoxBuilder;
  onValidatorChanged(body: string): ComboBoxBuilder;
  onValueRoleChanged(body: string): ComboBoxBuilder;
  onVerticalPaddingChanged(body: string): ComboBoxBuilder;
  onVisibleChanged(body: string): ComboBoxBuilder;
  onVisibleChildrenChanged(body: string): ComboBoxBuilder;
  onVisualFocusChanged(body: string): ComboBoxBuilder;
  onWheelEnabledChanged(body: string): ComboBoxBuilder;
  onWidthChanged(body: string): ComboBoxBuilder;
  onWindowChanged(body: string): ComboBoxBuilder;
  onXChanged(body: string): ComboBoxBuilder;
  onYChanged(body: string): ComboBoxBuilder;
  onZChanged(body: string): ComboBoxBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): ComboBoxBuilder;
  layer(setup: (b: LayerBuilder) => void): ComboBoxBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): ComboBoxBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): ComboBoxBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): ComboBoxBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): ComboBoxBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): ComboBoxBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): ComboBoxBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): ComboBoxBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): ComboBoxBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): ComboBoxBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): ComboBoxBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): ComboBoxBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): ComboBoxBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): ComboBoxBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): ComboBoxBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): ComboBoxBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): ComboBoxBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): ComboBoxBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): ComboBoxBuilder;
}

const COMBOBOX_META: TypeMetadata = {
  typeName: 'ComboBox',
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
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'currentValue', hasValue: true, hasBinding: true },
    { name: 'delegate', hasValue: true, hasBinding: true },
    { name: 'displayText', hasValue: true, hasBinding: true },
    { name: 'down', hasValue: true, hasBinding: true },
    { name: 'editText', hasValue: true, hasBinding: true },
    { name: 'editable', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'flat', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalPadding', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitContentWidthPolicy', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'indicator', hasValue: true, hasBinding: true },
    { name: 'inputMethodHints', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'model', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'popup', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectTextByMouse', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'textRole', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'validator', hasValue: true, hasBinding: true },
    { name: 'valueRole', hasValue: true, hasBinding: true },
    { name: 'verticalPadding', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'wheelEnabled', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAcceptableInputChanged', paramCount: 0 },
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onActivated', paramCount: 1 },
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
    { handlerName: 'onCountChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onCurrentTextChanged', paramCount: 0 },
    { handlerName: 'onCurrentValueChanged', paramCount: 0 },
    { handlerName: 'onDelegateChanged', paramCount: 0 },
    { handlerName: 'onDelegateModelChanged', paramCount: 0 },
    { handlerName: 'onDisplayTextChanged', paramCount: 0 },
    { handlerName: 'onDownChanged', paramCount: 0 },
    { handlerName: 'onEditTextChanged', paramCount: 0 },
    { handlerName: 'onEditableChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFlatChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHighlighted', paramCount: 1 },
    { handlerName: 'onHighlightedIndexChanged', paramCount: 0 },
    { handlerName: 'onHorizontalPaddingChanged', paramCount: 0 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitContentWidthPolicyChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitIndicatorHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitIndicatorWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onIndicatorChanged', paramCount: 0 },
    { handlerName: 'onInputMethodComposingChanged', paramCount: 0 },
    { handlerName: 'onInputMethodHintsChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onModelChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPopupChanged', paramCount: 0 },
    { handlerName: 'onPressedChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSelectTextByMouseChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextRoleChanged', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onValidatorChanged', paramCount: 0 },
    { handlerName: 'onValueRoleChanged', paramCount: 0 },
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onControlChanged', paramCount: 0 },
        { handlerName: 'onDraggingChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'splitHandle',
      attachedTypeName: 'SplitHandle',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onClicked', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'swipeView',
      attachedTypeName: 'SwipeView',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
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
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDisplacementChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function ComboBox(): ComboBoxBuilder {
  return createFluentBuilder('ComboBox', COMBOBOX_META) as unknown as ComboBoxBuilder;
}

export namespace ComboBox {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('ComboBox', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('ComboBox', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('ComboBox', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('ComboBox', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('ComboBox', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('ComboBox', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('ComboBox', 'Flags', 'ItemObservesViewport');
  }
  export namespace ImplicitContentWidthPolicy {
    export const ContentItemImplicitWidth = createEnumToken('ComboBox', 'ImplicitContentWidthPolicy', 'ContentItemImplicitWidth');
    export const WidestText = createEnumToken('ComboBox', 'ImplicitContentWidthPolicy', 'WidestText');
    export const WidestTextWhenCompleted = createEnumToken('ComboBox', 'ImplicitContentWidthPolicy', 'WidestTextWhenCompleted');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('ComboBox', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('ComboBox', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('ComboBox', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('ComboBox', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('ComboBox', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('ComboBox', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('ComboBox', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('ComboBox', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('ComboBox', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('ComboBox', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('ComboBox', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('ComboBox', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('ComboBox', 'TransformOrigin', 'BottomRight');
  }
}
