// AUTO-GENERATED — DO NOT EDIT
// Type: TextField
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlComponent,
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
export interface TextFieldBuilder {
  id(id: string): TextFieldBuilder;
  child(obj: QmlObjectBuilder): TextFieldBuilder;

  activeFocusOnPress(value: boolean): TextFieldBuilder;
  activeFocusOnPressBind(expr: string): TextFieldBuilder;
  activeFocusOnTab(value: boolean): TextFieldBuilder;
  activeFocusOnTabBind(expr: string): TextFieldBuilder;
  antialiasing(value: boolean): TextFieldBuilder;
  antialiasingBind(expr: string): TextFieldBuilder;
  autoScroll(value: boolean): TextFieldBuilder;
  autoScrollBind(expr: string): TextFieldBuilder;
  background(value: ItemBuilder): TextFieldBuilder;
  backgroundBind(expr: string): TextFieldBuilder;
  baselineOffset(value: number): TextFieldBuilder;
  baselineOffsetBind(expr: string): TextFieldBuilder;
  bottomInset(value: number): TextFieldBuilder;
  bottomInsetBind(expr: string): TextFieldBuilder;
  bottomPadding(value: number): TextFieldBuilder;
  bottomPaddingBind(expr: string): TextFieldBuilder;
  clip(value: boolean): TextFieldBuilder;
  clipBind(expr: string): TextFieldBuilder;
  color(value: QmlColor): TextFieldBuilder;
  colorBind(expr: string): TextFieldBuilder;
  containmentMask(value: QtObjectBuilder): TextFieldBuilder;
  containmentMaskBind(expr: string): TextFieldBuilder;
  cursorDelegate(value: QmlComponent): TextFieldBuilder;
  cursorDelegateBind(expr: string): TextFieldBuilder;
  cursorPosition(value: number): TextFieldBuilder;
  cursorPositionBind(expr: string): TextFieldBuilder;
  cursorVisible(value: boolean): TextFieldBuilder;
  cursorVisibleBind(expr: string): TextFieldBuilder;
  echoMode(value: QmlEnumToken): TextFieldBuilder;
  echoModeBind(expr: string): TextFieldBuilder;
  enabled(value: boolean): TextFieldBuilder;
  enabledBind(expr: string): TextFieldBuilder;
  focus(value: boolean): TextFieldBuilder;
  focusBind(expr: string): TextFieldBuilder;
  focusPolicy(value: QmlEnumToken): TextFieldBuilder;
  focusPolicyBind(expr: string): TextFieldBuilder;
  focusReason(value: QmlEnumToken): TextFieldBuilder;
  focusReasonBind(expr: string): TextFieldBuilder;
  font(value: QmlFont): TextFieldBuilder;
  fontBind(expr: string): TextFieldBuilder;
  height(value: number): TextFieldBuilder;
  heightBind(expr: string): TextFieldBuilder;
  horizontalAlignment(value: QmlEnumToken): TextFieldBuilder;
  horizontalAlignmentBind(expr: string): TextFieldBuilder;
  hoverEnabled(value: boolean): TextFieldBuilder;
  hoverEnabledBind(expr: string): TextFieldBuilder;
  implicitHeight(value: number): TextFieldBuilder;
  implicitHeightBind(expr: string): TextFieldBuilder;
  implicitWidth(value: number): TextFieldBuilder;
  implicitWidthBind(expr: string): TextFieldBuilder;
  inputMask(value: string): TextFieldBuilder;
  inputMaskBind(expr: string): TextFieldBuilder;
  inputMethodHints(value: QmlEnumToken): TextFieldBuilder;
  inputMethodHintsBind(expr: string): TextFieldBuilder;
  leftInset(value: number): TextFieldBuilder;
  leftInsetBind(expr: string): TextFieldBuilder;
  leftPadding(value: number): TextFieldBuilder;
  leftPaddingBind(expr: string): TextFieldBuilder;
  maximumLength(value: number): TextFieldBuilder;
  maximumLengthBind(expr: string): TextFieldBuilder;
  mouseSelectionMode(value: QmlEnumToken): TextFieldBuilder;
  mouseSelectionModeBind(expr: string): TextFieldBuilder;
  objectName(value: string): TextFieldBuilder;
  objectNameBind(expr: string): TextFieldBuilder;
  opacity(value: number): TextFieldBuilder;
  opacityBind(expr: string): TextFieldBuilder;
  overwriteMode(value: boolean): TextFieldBuilder;
  overwriteModeBind(expr: string): TextFieldBuilder;
  padding(value: number): TextFieldBuilder;
  paddingBind(expr: string): TextFieldBuilder;
  palette(value: PaletteBuilder): TextFieldBuilder;
  paletteBind(expr: string): TextFieldBuilder;
  parent(value: ItemBuilder): TextFieldBuilder;
  parentBind(expr: string): TextFieldBuilder;
  passwordCharacter(value: string): TextFieldBuilder;
  passwordCharacterBind(expr: string): TextFieldBuilder;
  passwordMaskDelay(value: number): TextFieldBuilder;
  passwordMaskDelayBind(expr: string): TextFieldBuilder;
  persistentSelection(value: boolean): TextFieldBuilder;
  persistentSelectionBind(expr: string): TextFieldBuilder;
  placeholderText(value: string): TextFieldBuilder;
  placeholderTextBind(expr: string): TextFieldBuilder;
  placeholderTextColor(value: QmlColor): TextFieldBuilder;
  placeholderTextColorBind(expr: string): TextFieldBuilder;
  readOnly(value: boolean): TextFieldBuilder;
  readOnlyBind(expr: string): TextFieldBuilder;
  renderType(value: QmlEnumToken): TextFieldBuilder;
  renderTypeBind(expr: string): TextFieldBuilder;
  rightInset(value: number): TextFieldBuilder;
  rightInsetBind(expr: string): TextFieldBuilder;
  rightPadding(value: number): TextFieldBuilder;
  rightPaddingBind(expr: string): TextFieldBuilder;
  rotation(value: number): TextFieldBuilder;
  rotationBind(expr: string): TextFieldBuilder;
  scale(value: number): TextFieldBuilder;
  scaleBind(expr: string): TextFieldBuilder;
  selectByMouse(value: boolean): TextFieldBuilder;
  selectByMouseBind(expr: string): TextFieldBuilder;
  selectedTextColor(value: QmlColor): TextFieldBuilder;
  selectedTextColorBind(expr: string): TextFieldBuilder;
  selectionColor(value: QmlColor): TextFieldBuilder;
  selectionColorBind(expr: string): TextFieldBuilder;
  smooth(value: boolean): TextFieldBuilder;
  smoothBind(expr: string): TextFieldBuilder;
  state(value: string): TextFieldBuilder;
  stateBind(expr: string): TextFieldBuilder;
  text(value: string): TextFieldBuilder;
  textBind(expr: string): TextFieldBuilder;
  topInset(value: number): TextFieldBuilder;
  topInsetBind(expr: string): TextFieldBuilder;
  topPadding(value: number): TextFieldBuilder;
  topPaddingBind(expr: string): TextFieldBuilder;
  transformOrigin(value: QmlEnumToken): TextFieldBuilder;
  transformOriginBind(expr: string): TextFieldBuilder;
  validator(value: QmlValue): TextFieldBuilder;
  validatorBind(expr: string): TextFieldBuilder;
  verticalAlignment(value: QmlEnumToken): TextFieldBuilder;
  verticalAlignmentBind(expr: string): TextFieldBuilder;
  visible(value: boolean): TextFieldBuilder;
  visibleBind(expr: string): TextFieldBuilder;
  width(value: number): TextFieldBuilder;
  widthBind(expr: string): TextFieldBuilder;
  wrapMode(value: QmlEnumToken): TextFieldBuilder;
  wrapModeBind(expr: string): TextFieldBuilder;
  x(value: number): TextFieldBuilder;
  xBind(expr: string): TextFieldBuilder;
  y(value: number): TextFieldBuilder;
  yBind(expr: string): TextFieldBuilder;
  z(value: number): TextFieldBuilder;
  zBind(expr: string): TextFieldBuilder;
  onAcceptableInputChanged(body: string): TextFieldBuilder;
  onAccepted(body: string): TextFieldBuilder;
  onActiveFocusChanged(body: string): TextFieldBuilder;
  onActiveFocusOnPressChanged(body: string): TextFieldBuilder;
  onActiveFocusOnTabChanged(body: string): TextFieldBuilder;
  onAntialiasingChanged(body: string): TextFieldBuilder;
  onAutoScrollChanged(body: string): TextFieldBuilder;
  onBackgroundChanged(body: string): TextFieldBuilder;
  onBaselineOffsetChanged(body: string): TextFieldBuilder;
  onBottomInsetChanged(body: string): TextFieldBuilder;
  onBottomPaddingChanged(body: string): TextFieldBuilder;
  onCanPasteChanged(body: string): TextFieldBuilder;
  onCanRedoChanged(body: string): TextFieldBuilder;
  onCanUndoChanged(body: string): TextFieldBuilder;
  onChildrenChanged(body: string): TextFieldBuilder;
  onChildrenRectChanged(body: string): TextFieldBuilder;
  onClipChanged(body: string): TextFieldBuilder;
  onColorChanged(body: string): TextFieldBuilder;
  onContainmentMaskChanged(body: string): TextFieldBuilder;
  onContentSizeChanged(body: string): TextFieldBuilder;
  onCursorDelegateChanged(body: string): TextFieldBuilder;
  onCursorPositionChanged(body: string): TextFieldBuilder;
  onCursorRectangleChanged(body: string): TextFieldBuilder;
  onCursorVisibleChanged(body: string): TextFieldBuilder;
  onDisplayTextChanged(body: string): TextFieldBuilder;
  onEchoModeChanged(body: string): TextFieldBuilder;
  onEditingFinished(body: string): TextFieldBuilder;
  onEffectiveHorizontalAlignmentChanged(body: string): TextFieldBuilder;
  onEnabledChanged(body: string): TextFieldBuilder;
  onFocusChanged(body: string): TextFieldBuilder;
  onFocusPolicyChanged(body: string): TextFieldBuilder;
  onFocusReasonChanged(body: string): TextFieldBuilder;
  onFontChanged(body: string): TextFieldBuilder;
  onHeightChanged(body: string): TextFieldBuilder;
  onHorizontalAlignmentChanged(body: string): TextFieldBuilder;
  onHoverEnabledChanged(body: string): TextFieldBuilder;
  onHoveredChanged(body: string): TextFieldBuilder;
  onImplicitBackgroundHeightChanged(body: string): TextFieldBuilder;
  onImplicitBackgroundWidthChanged(body: string): TextFieldBuilder;
  onImplicitHeightChanged(body: string): TextFieldBuilder;
  onImplicitHeightChanged3(body: string): TextFieldBuilder;
  onImplicitWidthChanged(body: string): TextFieldBuilder;
  onImplicitWidthChanged3(body: string): TextFieldBuilder;
  onInputMaskChanged(body: string): TextFieldBuilder;
  onInputMethodComposingChanged(body: string): TextFieldBuilder;
  onInputMethodHintsChanged(body: string): TextFieldBuilder;
  onLeftInsetChanged(body: string): TextFieldBuilder;
  onLeftPaddingChanged(body: string): TextFieldBuilder;
  onMaximumLengthChanged(body: string): TextFieldBuilder;
  onMouseSelectionModeChanged(body: string): TextFieldBuilder;
  onObjectNameChanged(body: string): TextFieldBuilder;
  onOpacityChanged(body: string): TextFieldBuilder;
  onOverwriteModeChanged(body: string): TextFieldBuilder;
  onPaddingChanged(body: string): TextFieldBuilder;
  onPaletteChanged(body: string): TextFieldBuilder;
  onPaletteCreated(body: string): TextFieldBuilder;
  onParentChanged(body: string): TextFieldBuilder;
  onPasswordCharacterChanged(body: string): TextFieldBuilder;
  onPasswordMaskDelayChanged(body: string): TextFieldBuilder;
  onPersistentSelectionChanged(body: string): TextFieldBuilder;
  onPlaceholderTextChanged(body: string): TextFieldBuilder;
  onPlaceholderTextColorChanged(body: string): TextFieldBuilder;
  onPreeditTextChanged(body: string): TextFieldBuilder;
  onPressAndHold(body: string): TextFieldBuilder;
  onPressed(body: string): TextFieldBuilder;
  onReadOnlyChanged(body: string): TextFieldBuilder;
  onReleased(body: string): TextFieldBuilder;
  onRenderTypeChanged(body: string): TextFieldBuilder;
  onRightInsetChanged(body: string): TextFieldBuilder;
  onRightPaddingChanged(body: string): TextFieldBuilder;
  onRotationChanged(body: string): TextFieldBuilder;
  onScaleChanged(body: string): TextFieldBuilder;
  onSelectByMouseChanged(body: string): TextFieldBuilder;
  onSelectedTextChanged(body: string): TextFieldBuilder;
  onSelectedTextColorChanged(body: string): TextFieldBuilder;
  onSelectionColorChanged(body: string): TextFieldBuilder;
  onSelectionEndChanged(body: string): TextFieldBuilder;
  onSelectionStartChanged(body: string): TextFieldBuilder;
  onSmoothChanged(body: string): TextFieldBuilder;
  onStateChanged(body: string): TextFieldBuilder;
  onTextChanged(body: string): TextFieldBuilder;
  onTextEdited(body: string): TextFieldBuilder;
  onTopInsetChanged(body: string): TextFieldBuilder;
  onTopPaddingChanged(body: string): TextFieldBuilder;
  onTransformOriginChanged(body: string): TextFieldBuilder;
  onValidatorChanged(body: string): TextFieldBuilder;
  onVerticalAlignmentChanged(body: string): TextFieldBuilder;
  onVisibleChanged(body: string): TextFieldBuilder;
  onVisibleChildrenChanged(body: string): TextFieldBuilder;
  onWidthChanged(body: string): TextFieldBuilder;
  onWindowChanged(body: string): TextFieldBuilder;
  onWrapModeChanged(body: string): TextFieldBuilder;
  onXChanged(body: string): TextFieldBuilder;
  onYChanged(body: string): TextFieldBuilder;
  onZChanged(body: string): TextFieldBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TextFieldBuilder;
  layer(setup: (b: LayerBuilder) => void): TextFieldBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TextFieldBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TextFieldBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TextFieldBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TextFieldBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TextFieldBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TextFieldBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TextFieldBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TextFieldBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): TextFieldBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TextFieldBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TextFieldBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TextFieldBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TextFieldBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TextFieldBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TextFieldBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TextFieldBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TextFieldBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TextFieldBuilder;
}

const TEXTFIELD_META: TypeMetadata = {
  typeName: 'TextField',
  properties: [
    { name: 'activeFocusOnPress', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoScroll', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'cursorDelegate', hasValue: true, hasBinding: true },
    { name: 'cursorPosition', hasValue: true, hasBinding: true },
    { name: 'cursorVisible', hasValue: true, hasBinding: true },
    { name: 'echoMode', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'inputMask', hasValue: true, hasBinding: true },
    { name: 'inputMethodHints', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'maximumLength', hasValue: true, hasBinding: true },
    { name: 'mouseSelectionMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'overwriteMode', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'passwordCharacter', hasValue: true, hasBinding: true },
    { name: 'passwordMaskDelay', hasValue: true, hasBinding: true },
    { name: 'persistentSelection', hasValue: true, hasBinding: true },
    { name: 'placeholderText', hasValue: true, hasBinding: true },
    { name: 'placeholderTextColor', hasValue: true, hasBinding: true },
    { name: 'readOnly', hasValue: true, hasBinding: true },
    { name: 'renderType', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectByMouse', hasValue: true, hasBinding: true },
    { name: 'selectedTextColor', hasValue: true, hasBinding: true },
    { name: 'selectionColor', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'topInset', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'validator', hasValue: true, hasBinding: true },
    { name: 'verticalAlignment', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'wrapMode', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAcceptableInputChanged', paramCount: 0 },
    { handlerName: 'onAccepted', paramCount: 0 },
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnPressChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onAutoScrollChanged', paramCount: 1 },
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onCanPasteChanged', paramCount: 0 },
    { handlerName: 'onCanRedoChanged', paramCount: 0 },
    { handlerName: 'onCanUndoChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentSizeChanged', paramCount: 0 },
    { handlerName: 'onCursorDelegateChanged', paramCount: 0 },
    { handlerName: 'onCursorPositionChanged', paramCount: 0 },
    { handlerName: 'onCursorRectangleChanged', paramCount: 0 },
    { handlerName: 'onCursorVisibleChanged', paramCount: 1 },
    { handlerName: 'onDisplayTextChanged', paramCount: 0 },
    { handlerName: 'onEchoModeChanged', paramCount: 1 },
    { handlerName: 'onEditingFinished', paramCount: 0 },
    { handlerName: 'onEffectiveHorizontalAlignmentChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFocusReasonChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onHoverEnabledChanged', paramCount: 0 },
    { handlerName: 'onHoveredChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitBackgroundWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged3', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged3', paramCount: 0 },
    { handlerName: 'onInputMaskChanged', paramCount: 1 },
    { handlerName: 'onInputMethodComposingChanged', paramCount: 0 },
    { handlerName: 'onInputMethodHintsChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onMaximumLengthChanged', paramCount: 1 },
    { handlerName: 'onMouseSelectionModeChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOverwriteModeChanged', paramCount: 1 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPasswordCharacterChanged', paramCount: 0 },
    { handlerName: 'onPasswordMaskDelayChanged', paramCount: 1 },
    { handlerName: 'onPersistentSelectionChanged', paramCount: 0 },
    { handlerName: 'onPlaceholderTextChanged', paramCount: 0 },
    { handlerName: 'onPlaceholderTextColorChanged', paramCount: 0 },
    { handlerName: 'onPreeditTextChanged', paramCount: 0 },
    { handlerName: 'onPressAndHold', paramCount: 1 },
    { handlerName: 'onPressed', paramCount: 1 },
    { handlerName: 'onReadOnlyChanged', paramCount: 1 },
    { handlerName: 'onReleased', paramCount: 1 },
    { handlerName: 'onRenderTypeChanged', paramCount: 0 },
    { handlerName: 'onRightInsetChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSelectByMouseChanged', paramCount: 1 },
    { handlerName: 'onSelectedTextChanged', paramCount: 0 },
    { handlerName: 'onSelectedTextColorChanged', paramCount: 0 },
    { handlerName: 'onSelectionColorChanged', paramCount: 0 },
    { handlerName: 'onSelectionEndChanged', paramCount: 0 },
    { handlerName: 'onSelectionStartChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTextEdited', paramCount: 0 },
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onValidatorChanged', paramCount: 0 },
    { handlerName: 'onVerticalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
    { handlerName: 'onWrapModeChanged', paramCount: 0 },
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

export function TextField(): TextFieldBuilder {
  return createFluentBuilder('TextField', TEXTFIELD_META) as unknown as TextFieldBuilder;
}

export namespace TextField {
  export namespace CursorPosition {
    export const CursorBetweenCharacters = createEnumToken(
      'TextField',
      'CursorPosition',
      'CursorBetweenCharacters',
    );
    export const CursorOnCharacter = createEnumToken(
      'TextField',
      'CursorPosition',
      'CursorOnCharacter',
    );
  }
  export namespace EchoMode {
    export const Normal = createEnumToken('TextField', 'EchoMode', 'Normal');
    export const NoEcho = createEnumToken('TextField', 'EchoMode', 'NoEcho');
    export const Password = createEnumToken('TextField', 'EchoMode', 'Password');
    export const PasswordEchoOnEdit = createEnumToken(
      'TextField',
      'EchoMode',
      'PasswordEchoOnEdit',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TextField',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TextField',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TextField', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TextField', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TextField', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TextField', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TextField',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('TextField', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('TextField', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('TextField', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TextField', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TextField',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('TextField', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('TextField', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('TextField', 'RenderType', 'CurveRendering');
  }
  export namespace SelectionMode {
    export const SelectCharacters = createEnumToken(
      'TextField',
      'SelectionMode',
      'SelectCharacters',
    );
    export const SelectWords = createEnumToken('TextField', 'SelectionMode', 'SelectWords');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TextField', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TextField', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TextField', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TextField', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TextField', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TextField', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TextField', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TextField', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TextField', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('TextField', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('TextField', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('TextField', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('TextField', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('TextField', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('TextField', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'TextField',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('TextField', 'WrapMode', 'Wrap');
  }
}
