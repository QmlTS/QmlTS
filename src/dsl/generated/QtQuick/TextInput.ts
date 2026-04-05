// AUTO-GENERATED — DO NOT EDIT
// Type: TextInput
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlComponent, QmlEnumToken, QmlFont, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { AccessibleAttachedBuilder } from './Accessible.js';
import type { EnterKeyAttachedBuilder } from './EnterKey.js';
import type { GraphicsInfoAttachedBuilder } from './GraphicsInfo.js';
import type { ItemBuilder } from './Item.js';
import type { KeyNavigationAttachedBuilder } from './KeyNavigation.js';
import type { KeysAttachedBuilder } from './Keys.js';
import type { LayoutMirroringAttachedBuilder } from './LayoutMirroring.js';
import type { PaletteBuilder } from './Palette.js';
import type { AnchorsBuilder } from './QQuickAnchors.js';
import type { DragAttachedBuilder } from './QQuickDragAttached.js';
import type { GridViewAttachedBuilder } from './QQuickGridViewAttached.js';
import type { LayerBuilder } from './QQuickItemLayer.js';
import type { ListViewAttachedBuilder } from './QQuickListViewAttached.js';
import type { PathViewAttachedBuilder } from './QQuickPathViewAttached.js';
import type { PositionerAttachedBuilder } from './QQuickPositionerAttached.js';
import type { ScreenAttachedBuilder } from './QQuickScreenAttached.js';
import type { TableViewAttachedBuilder } from './QQuickTableViewAttached.js';
import type { WindowAttachedBuilder } from './QQuickWindowAttached.js';
import type { SafeAreaAttachedBuilder } from './SafeArea.js';
import type { ViewTransitionAttachedBuilder } from './ViewTransition.js';
export interface TextInputBuilder {
  id(id: string): TextInputBuilder;
  child(obj: QmlObjectBuilder): TextInputBuilder;

  activeFocusOnPress(value: boolean): TextInputBuilder;
  activeFocusOnPressBind(expr: string): TextInputBuilder;
  activeFocusOnTab(value: boolean): TextInputBuilder;
  activeFocusOnTabBind(expr: string): TextInputBuilder;
  antialiasing(value: boolean): TextInputBuilder;
  antialiasingBind(expr: string): TextInputBuilder;
  autoScroll(value: boolean): TextInputBuilder;
  autoScrollBind(expr: string): TextInputBuilder;
  baselineOffset(value: number): TextInputBuilder;
  baselineOffsetBind(expr: string): TextInputBuilder;
  bottomPadding(value: number): TextInputBuilder;
  bottomPaddingBind(expr: string): TextInputBuilder;
  clip(value: boolean): TextInputBuilder;
  clipBind(expr: string): TextInputBuilder;
  color(value: QmlColor): TextInputBuilder;
  colorBind(expr: string): TextInputBuilder;
  containmentMask(value: QtObjectBuilder): TextInputBuilder;
  containmentMaskBind(expr: string): TextInputBuilder;
  cursorDelegate(value: QmlComponent): TextInputBuilder;
  cursorDelegateBind(expr: string): TextInputBuilder;
  cursorPosition(value: number): TextInputBuilder;
  cursorPositionBind(expr: string): TextInputBuilder;
  cursorVisible(value: boolean): TextInputBuilder;
  cursorVisibleBind(expr: string): TextInputBuilder;
  echoMode(value: QmlEnumToken): TextInputBuilder;
  echoModeBind(expr: string): TextInputBuilder;
  enabled(value: boolean): TextInputBuilder;
  enabledBind(expr: string): TextInputBuilder;
  focus(value: boolean): TextInputBuilder;
  focusBind(expr: string): TextInputBuilder;
  focusPolicy(value: QmlEnumToken): TextInputBuilder;
  focusPolicyBind(expr: string): TextInputBuilder;
  font(value: QmlFont): TextInputBuilder;
  fontBind(expr: string): TextInputBuilder;
  height(value: number): TextInputBuilder;
  heightBind(expr: string): TextInputBuilder;
  horizontalAlignment(value: QmlEnumToken): TextInputBuilder;
  horizontalAlignmentBind(expr: string): TextInputBuilder;
  inputMask(value: string): TextInputBuilder;
  inputMaskBind(expr: string): TextInputBuilder;
  inputMethodHints(value: QmlEnumToken): TextInputBuilder;
  inputMethodHintsBind(expr: string): TextInputBuilder;
  leftPadding(value: number): TextInputBuilder;
  leftPaddingBind(expr: string): TextInputBuilder;
  maximumLength(value: number): TextInputBuilder;
  maximumLengthBind(expr: string): TextInputBuilder;
  mouseSelectionMode(value: QmlEnumToken): TextInputBuilder;
  mouseSelectionModeBind(expr: string): TextInputBuilder;
  objectName(value: string): TextInputBuilder;
  objectNameBind(expr: string): TextInputBuilder;
  opacity(value: number): TextInputBuilder;
  opacityBind(expr: string): TextInputBuilder;
  overwriteMode(value: boolean): TextInputBuilder;
  overwriteModeBind(expr: string): TextInputBuilder;
  padding(value: number): TextInputBuilder;
  paddingBind(expr: string): TextInputBuilder;
  palette(value: PaletteBuilder): TextInputBuilder;
  paletteBind(expr: string): TextInputBuilder;
  parent(value: ItemBuilder): TextInputBuilder;
  parentBind(expr: string): TextInputBuilder;
  passwordCharacter(value: string): TextInputBuilder;
  passwordCharacterBind(expr: string): TextInputBuilder;
  passwordMaskDelay(value: number): TextInputBuilder;
  passwordMaskDelayBind(expr: string): TextInputBuilder;
  persistentSelection(value: boolean): TextInputBuilder;
  persistentSelectionBind(expr: string): TextInputBuilder;
  readOnly(value: boolean): TextInputBuilder;
  readOnlyBind(expr: string): TextInputBuilder;
  renderType(value: QmlEnumToken): TextInputBuilder;
  renderTypeBind(expr: string): TextInputBuilder;
  rightPadding(value: number): TextInputBuilder;
  rightPaddingBind(expr: string): TextInputBuilder;
  rotation(value: number): TextInputBuilder;
  rotationBind(expr: string): TextInputBuilder;
  scale(value: number): TextInputBuilder;
  scaleBind(expr: string): TextInputBuilder;
  selectByMouse(value: boolean): TextInputBuilder;
  selectByMouseBind(expr: string): TextInputBuilder;
  selectedTextColor(value: QmlColor): TextInputBuilder;
  selectedTextColorBind(expr: string): TextInputBuilder;
  selectionColor(value: QmlColor): TextInputBuilder;
  selectionColorBind(expr: string): TextInputBuilder;
  smooth(value: boolean): TextInputBuilder;
  smoothBind(expr: string): TextInputBuilder;
  state(value: string): TextInputBuilder;
  stateBind(expr: string): TextInputBuilder;
  text(value: string): TextInputBuilder;
  textBind(expr: string): TextInputBuilder;
  topPadding(value: number): TextInputBuilder;
  topPaddingBind(expr: string): TextInputBuilder;
  transformOrigin(value: QmlEnumToken): TextInputBuilder;
  transformOriginBind(expr: string): TextInputBuilder;
  validator(value: QmlValue): TextInputBuilder;
  validatorBind(expr: string): TextInputBuilder;
  verticalAlignment(value: QmlEnumToken): TextInputBuilder;
  verticalAlignmentBind(expr: string): TextInputBuilder;
  visible(value: boolean): TextInputBuilder;
  visibleBind(expr: string): TextInputBuilder;
  width(value: number): TextInputBuilder;
  widthBind(expr: string): TextInputBuilder;
  wrapMode(value: QmlEnumToken): TextInputBuilder;
  wrapModeBind(expr: string): TextInputBuilder;
  x(value: number): TextInputBuilder;
  xBind(expr: string): TextInputBuilder;
  y(value: number): TextInputBuilder;
  yBind(expr: string): TextInputBuilder;
  z(value: number): TextInputBuilder;
  zBind(expr: string): TextInputBuilder;
  onAcceptableInputChanged(body: string): TextInputBuilder;
  onAccepted(body: string): TextInputBuilder;
  onActiveFocusChanged(body: string): TextInputBuilder;
  onActiveFocusOnPressChanged(body: string): TextInputBuilder;
  onActiveFocusOnTabChanged(body: string): TextInputBuilder;
  onAntialiasingChanged(body: string): TextInputBuilder;
  onAutoScrollChanged(body: string): TextInputBuilder;
  onBaselineOffsetChanged(body: string): TextInputBuilder;
  onBottomPaddingChanged(body: string): TextInputBuilder;
  onCanPasteChanged(body: string): TextInputBuilder;
  onCanRedoChanged(body: string): TextInputBuilder;
  onCanUndoChanged(body: string): TextInputBuilder;
  onChildrenChanged(body: string): TextInputBuilder;
  onChildrenRectChanged(body: string): TextInputBuilder;
  onClipChanged(body: string): TextInputBuilder;
  onColorChanged(body: string): TextInputBuilder;
  onContainmentMaskChanged(body: string): TextInputBuilder;
  onContentSizeChanged(body: string): TextInputBuilder;
  onCursorDelegateChanged(body: string): TextInputBuilder;
  onCursorPositionChanged(body: string): TextInputBuilder;
  onCursorRectangleChanged(body: string): TextInputBuilder;
  onCursorVisibleChanged(body: string): TextInputBuilder;
  onDisplayTextChanged(body: string): TextInputBuilder;
  onEchoModeChanged(body: string): TextInputBuilder;
  onEditingFinished(body: string): TextInputBuilder;
  onEffectiveHorizontalAlignmentChanged(body: string): TextInputBuilder;
  onEnabledChanged(body: string): TextInputBuilder;
  onFocusChanged(body: string): TextInputBuilder;
  onFocusPolicyChanged(body: string): TextInputBuilder;
  onFontChanged(body: string): TextInputBuilder;
  onHeightChanged(body: string): TextInputBuilder;
  onHorizontalAlignmentChanged(body: string): TextInputBuilder;
  onImplicitHeightChanged(body: string): TextInputBuilder;
  onImplicitWidthChanged(body: string): TextInputBuilder;
  onInputMaskChanged(body: string): TextInputBuilder;
  onInputMethodComposingChanged(body: string): TextInputBuilder;
  onInputMethodHintsChanged(body: string): TextInputBuilder;
  onLeftPaddingChanged(body: string): TextInputBuilder;
  onMaximumLengthChanged(body: string): TextInputBuilder;
  onMouseSelectionModeChanged(body: string): TextInputBuilder;
  onObjectNameChanged(body: string): TextInputBuilder;
  onOpacityChanged(body: string): TextInputBuilder;
  onOverwriteModeChanged(body: string): TextInputBuilder;
  onPaddingChanged(body: string): TextInputBuilder;
  onPaletteChanged(body: string): TextInputBuilder;
  onPaletteCreated(body: string): TextInputBuilder;
  onParentChanged(body: string): TextInputBuilder;
  onPasswordCharacterChanged(body: string): TextInputBuilder;
  onPasswordMaskDelayChanged(body: string): TextInputBuilder;
  onPersistentSelectionChanged(body: string): TextInputBuilder;
  onPreeditTextChanged(body: string): TextInputBuilder;
  onReadOnlyChanged(body: string): TextInputBuilder;
  onRenderTypeChanged(body: string): TextInputBuilder;
  onRightPaddingChanged(body: string): TextInputBuilder;
  onRotationChanged(body: string): TextInputBuilder;
  onScaleChanged(body: string): TextInputBuilder;
  onSelectByMouseChanged(body: string): TextInputBuilder;
  onSelectedTextChanged(body: string): TextInputBuilder;
  onSelectedTextColorChanged(body: string): TextInputBuilder;
  onSelectionColorChanged(body: string): TextInputBuilder;
  onSelectionEndChanged(body: string): TextInputBuilder;
  onSelectionStartChanged(body: string): TextInputBuilder;
  onSmoothChanged(body: string): TextInputBuilder;
  onStateChanged(body: string): TextInputBuilder;
  onTextChanged(body: string): TextInputBuilder;
  onTextEdited(body: string): TextInputBuilder;
  onTopPaddingChanged(body: string): TextInputBuilder;
  onTransformOriginChanged(body: string): TextInputBuilder;
  onValidatorChanged(body: string): TextInputBuilder;
  onVerticalAlignmentChanged(body: string): TextInputBuilder;
  onVisibleChanged(body: string): TextInputBuilder;
  onVisibleChildrenChanged(body: string): TextInputBuilder;
  onWidthChanged(body: string): TextInputBuilder;
  onWindowChanged(body: string): TextInputBuilder;
  onWrapModeChanged(body: string): TextInputBuilder;
  onXChanged(body: string): TextInputBuilder;
  onYChanged(body: string): TextInputBuilder;
  onZChanged(body: string): TextInputBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TextInputBuilder;
  layer(setup: (b: LayerBuilder) => void): TextInputBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TextInputBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TextInputBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TextInputBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TextInputBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TextInputBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TextInputBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TextInputBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TextInputBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TextInputBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TextInputBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TextInputBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TextInputBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TextInputBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TextInputBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TextInputBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TextInputBuilder;
}

const TEXTINPUT_META: TypeMetadata = {
  typeName: 'TextInput',
  properties: [
    { name: 'activeFocusOnPress', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'autoScroll', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
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
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'inputMask', hasValue: true, hasBinding: true },
    { name: 'inputMethodHints', hasValue: true, hasBinding: true },
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
    { name: 'readOnly', hasValue: true, hasBinding: true },
    { name: 'renderType', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectByMouse', hasValue: true, hasBinding: true },
    { name: 'selectedTextColor', hasValue: true, hasBinding: true },
    { name: 'selectionColor', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
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
    { handlerName: 'onFontChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onInputMaskChanged', paramCount: 1 },
    { handlerName: 'onInputMethodComposingChanged', paramCount: 0 },
    { handlerName: 'onInputMethodHintsChanged', paramCount: 0 },
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
    { handlerName: 'onPreeditTextChanged', paramCount: 0 },
    { handlerName: 'onReadOnlyChanged', paramCount: 1 },
    { handlerName: 'onRenderTypeChanged', paramCount: 0 },
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
      methodName: 'accessible',
      attachedTypeName: 'Accessible',
      properties: [
        { name: 'checkStateMixed', hasValue: true, hasBinding: true },
        { name: 'checkable', hasValue: true, hasBinding: true },
        { name: 'checked', hasValue: true, hasBinding: true },
        { name: 'defaultButton', hasValue: true, hasBinding: true },
        { name: 'description', hasValue: true, hasBinding: true },
        { name: 'editable', hasValue: true, hasBinding: true },
        { name: 'focusable', hasValue: true, hasBinding: true },
        { name: 'focused', hasValue: true, hasBinding: true },
        { name: 'id', hasValue: true, hasBinding: true },
        { name: 'ignored', hasValue: true, hasBinding: true },
        { name: 'labelFor', hasValue: true, hasBinding: true },
        { name: 'labelledBy', hasValue: true, hasBinding: true },
        { name: 'multiLine', hasValue: true, hasBinding: true },
        { name: 'name', hasValue: true, hasBinding: true },
        { name: 'passwordEdit', hasValue: true, hasBinding: true },
        { name: 'pressed', hasValue: true, hasBinding: true },
        { name: 'readOnly', hasValue: true, hasBinding: true },
        { name: 'role', hasValue: true, hasBinding: true },
        { name: 'searchEdit', hasValue: true, hasBinding: true },
        { name: 'selectable', hasValue: true, hasBinding: true },
        { name: 'selectableText', hasValue: true, hasBinding: true },
        { name: 'selected', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCheckStateMixedChanged', paramCount: 1 },
        { handlerName: 'onCheckableChanged', paramCount: 1 },
        { handlerName: 'onCheckedChanged', paramCount: 1 },
        { handlerName: 'onDecreaseAction', paramCount: 0 },
        { handlerName: 'onDefaultButtonChanged', paramCount: 1 },
        { handlerName: 'onDescriptionChanged', paramCount: 0 },
        { handlerName: 'onEditableChanged', paramCount: 1 },
        { handlerName: 'onFocusableChanged', paramCount: 1 },
        { handlerName: 'onFocusedChanged', paramCount: 1 },
        { handlerName: 'onIdChanged', paramCount: 0 },
        { handlerName: 'onIgnoredChanged', paramCount: 0 },
        { handlerName: 'onIncreaseAction', paramCount: 0 },
        { handlerName: 'onLabelForChanged', paramCount: 0 },
        { handlerName: 'onLabelledByChanged', paramCount: 0 },
        { handlerName: 'onMultiLineChanged', paramCount: 1 },
        { handlerName: 'onNameChanged', paramCount: 0 },
        { handlerName: 'onNextPageAction', paramCount: 0 },
        { handlerName: 'onPasswordEditChanged', paramCount: 1 },
        { handlerName: 'onPressAction', paramCount: 0 },
        { handlerName: 'onPressedChanged', paramCount: 1 },
        { handlerName: 'onPreviousPageAction', paramCount: 0 },
        { handlerName: 'onReadOnlyChanged', paramCount: 1 },
        { handlerName: 'onRoleChanged', paramCount: 0 },
        { handlerName: 'onScrollDownAction', paramCount: 0 },
        { handlerName: 'onScrollLeftAction', paramCount: 0 },
        { handlerName: 'onScrollRightAction', paramCount: 0 },
        { handlerName: 'onScrollUpAction', paramCount: 0 },
        { handlerName: 'onSearchEditChanged', paramCount: 1 },
        { handlerName: 'onSelectableChanged', paramCount: 1 },
        { handlerName: 'onSelectableTextChanged', paramCount: 1 },
        { handlerName: 'onSelectedChanged', paramCount: 1 },
        { handlerName: 'onToggleAction', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'drag',
      attachedTypeName: 'Drag',
      properties: [
        { name: 'active', hasValue: true, hasBinding: true },
        { name: 'dragType', hasValue: true, hasBinding: true },
        { name: 'hotSpot', hasValue: true, hasBinding: true },
        { name: 'imageSource', hasValue: true, hasBinding: true },
        { name: 'imageSourceSize', hasValue: true, hasBinding: true },
        { name: 'keys', hasValue: true, hasBinding: true },
        { name: 'mimeData', hasValue: true, hasBinding: true },
        { name: 'proposedAction', hasValue: true, hasBinding: true },
        { name: 'source', hasValue: true, hasBinding: true },
        { name: 'supportedActions', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActiveChanged', paramCount: 0 },
        { handlerName: 'onDragFinished', paramCount: 1 },
        { handlerName: 'onDragStarted', paramCount: 0 },
        { handlerName: 'onDragTypeChanged', paramCount: 0 },
        { handlerName: 'onHotSpotChanged', paramCount: 0 },
        { handlerName: 'onImageSourceChanged', paramCount: 0 },
        { handlerName: 'onImageSourceSizeChanged', paramCount: 0 },
        { handlerName: 'onKeysChanged', paramCount: 0 },
        { handlerName: 'onMimeDataChanged', paramCount: 0 },
        { handlerName: 'onProposedActionChanged', paramCount: 0 },
        { handlerName: 'onSourceChanged', paramCount: 0 },
        { handlerName: 'onSupportedActionsChanged', paramCount: 0 },
        { handlerName: 'onTargetChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'enterKey',
      attachedTypeName: 'EnterKey',
      properties: [
        { name: 'type', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onTypeChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'graphicsInfo',
      attachedTypeName: 'GraphicsInfo',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onApiChanged', paramCount: 0 },
        { handlerName: 'onMajorVersionChanged', paramCount: 0 },
        { handlerName: 'onMinorVersionChanged', paramCount: 0 },
        { handlerName: 'onProfileChanged', paramCount: 0 },
        { handlerName: 'onRenderableTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderCompilationTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderSourceTypeChanged', paramCount: 0 },
        { handlerName: 'onShaderTypeChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'gridView',
      attachedTypeName: 'GridView',
      properties: [
        { name: 'delayRemove', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdd', paramCount: 0 },
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onDelayRemoveChanged', paramCount: 0 },
        { handlerName: 'onNextSectionChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onPrevSectionChanged', paramCount: 0 },
        { handlerName: 'onRemove', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onSectionChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'keyNavigation',
      attachedTypeName: 'KeyNavigation',
      properties: [
        { name: 'backtab', hasValue: true, hasBinding: true },
        { name: 'down', hasValue: true, hasBinding: true },
        { name: 'left', hasValue: true, hasBinding: true },
        { name: 'priority', hasValue: true, hasBinding: true },
        { name: 'right', hasValue: true, hasBinding: true },
        { name: 'tab', hasValue: true, hasBinding: true },
        { name: 'up', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onBacktabChanged', paramCount: 0 },
        { handlerName: 'onDownChanged', paramCount: 0 },
        { handlerName: 'onLeftChanged', paramCount: 0 },
        { handlerName: 'onPriorityChanged', paramCount: 0 },
        { handlerName: 'onRightChanged', paramCount: 0 },
        { handlerName: 'onTabChanged', paramCount: 0 },
        { handlerName: 'onUpChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'keys',
      attachedTypeName: 'Keys',
      properties: [
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'priority', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAsteriskPressed', paramCount: 1 },
        { handlerName: 'onBackPressed', paramCount: 1 },
        { handlerName: 'onBacktabPressed', paramCount: 1 },
        { handlerName: 'onCallPressed', paramCount: 1 },
        { handlerName: 'onCancelPressed', paramCount: 1 },
        { handlerName: 'onContext1Pressed', paramCount: 1 },
        { handlerName: 'onContext2Pressed', paramCount: 1 },
        { handlerName: 'onContext3Pressed', paramCount: 1 },
        { handlerName: 'onContext4Pressed', paramCount: 1 },
        { handlerName: 'onDeletePressed', paramCount: 1 },
        { handlerName: 'onDigit0Pressed', paramCount: 1 },
        { handlerName: 'onDigit1Pressed', paramCount: 1 },
        { handlerName: 'onDigit2Pressed', paramCount: 1 },
        { handlerName: 'onDigit3Pressed', paramCount: 1 },
        { handlerName: 'onDigit4Pressed', paramCount: 1 },
        { handlerName: 'onDigit5Pressed', paramCount: 1 },
        { handlerName: 'onDigit6Pressed', paramCount: 1 },
        { handlerName: 'onDigit7Pressed', paramCount: 1 },
        { handlerName: 'onDigit8Pressed', paramCount: 1 },
        { handlerName: 'onDigit9Pressed', paramCount: 1 },
        { handlerName: 'onDownPressed', paramCount: 1 },
        { handlerName: 'onEnabledChanged', paramCount: 0 },
        { handlerName: 'onEnterPressed', paramCount: 1 },
        { handlerName: 'onEscapePressed', paramCount: 1 },
        { handlerName: 'onFlipPressed', paramCount: 1 },
        { handlerName: 'onHangupPressed', paramCount: 1 },
        { handlerName: 'onLeftPressed', paramCount: 1 },
        { handlerName: 'onMenuPressed', paramCount: 1 },
        { handlerName: 'onNoPressed', paramCount: 1 },
        { handlerName: 'onNumberSignPressed', paramCount: 1 },
        { handlerName: 'onPressed', paramCount: 1 },
        { handlerName: 'onPriorityChanged', paramCount: 0 },
        { handlerName: 'onReleased', paramCount: 1 },
        { handlerName: 'onReturnPressed', paramCount: 1 },
        { handlerName: 'onRightPressed', paramCount: 1 },
        { handlerName: 'onSelectPressed', paramCount: 1 },
        { handlerName: 'onShortcutOverride', paramCount: 1 },
        { handlerName: 'onSpacePressed', paramCount: 1 },
        { handlerName: 'onTabPressed', paramCount: 1 },
        { handlerName: 'onUpPressed', paramCount: 1 },
        { handlerName: 'onVolumeDownPressed', paramCount: 1 },
        { handlerName: 'onVolumeUpPressed', paramCount: 1 },
        { handlerName: 'onYesPressed', paramCount: 1 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'layoutMirroring',
      attachedTypeName: 'LayoutMirroring',
      properties: [
        { name: 'childrenInherit', hasValue: true, hasBinding: true },
        { name: 'enabled', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onChildrenInheritChanged', paramCount: 0 },
        { handlerName: 'onEnabledChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'listView',
      attachedTypeName: 'ListView',
      properties: [
        { name: 'delayRemove', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdd', paramCount: 0 },
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onDelayRemoveChanged', paramCount: 0 },
        { handlerName: 'onNextSectionChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onPrevSectionChanged', paramCount: 0 },
        { handlerName: 'onRemove', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onSectionChanged', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'pathView',
      attachedTypeName: 'PathView',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onPathChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'positioner',
      attachedTypeName: 'Positioner',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onIsFirstItemChanged', paramCount: 0 },
        { handlerName: 'onIsLastItemChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'safeArea',
      attachedTypeName: 'SafeArea',
      properties: [
        { name: 'additionalMargins', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onAdditionalMarginsChanged', paramCount: 0 },
        { handlerName: 'onMarginsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'screen',
      attachedTypeName: 'Screen',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDesktopGeometryChanged', paramCount: 0 },
        { handlerName: 'onDevicePixelRatioChanged', paramCount: 0 },
        { handlerName: 'onHeightChanged', paramCount: 0 },
        { handlerName: 'onLogicalPixelDensityChanged', paramCount: 0 },
        { handlerName: 'onManufacturerChanged', paramCount: 0 },
        { handlerName: 'onModelChanged', paramCount: 0 },
        { handlerName: 'onNameChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
        { handlerName: 'onOrientationChanged', paramCount: 0 },
        { handlerName: 'onPixelDensityChanged', paramCount: 0 },
        { handlerName: 'onPrimaryOrientationChanged', paramCount: 0 },
        { handlerName: 'onSerialNumberChanged', paramCount: 0 },
        { handlerName: 'onVirtualXChanged', paramCount: 0 },
        { handlerName: 'onVirtualYChanged', paramCount: 0 },
        { handlerName: 'onWidthChanged', paramCount: 0 },
      ],
    },
    {
      methodName: 'tableView',
      attachedTypeName: 'TableView',
      properties: [
        { name: 'editDelegate', hasValue: true, hasBinding: true },
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onCommit', paramCount: 0 },
        { handlerName: 'onEditDelegateChanged', paramCount: 0 },
        { handlerName: 'onPooled', paramCount: 0 },
        { handlerName: 'onReused', paramCount: 0 },
        { handlerName: 'onViewChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'viewTransition',
      attachedTypeName: 'ViewTransition',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onDestinationChanged', paramCount: 0 },
        { handlerName: 'onIndexChanged', paramCount: 0 },
        { handlerName: 'onItemChanged', paramCount: 0 },
        { handlerName: 'onTargetIndexesChanged', paramCount: 0 },
        { handlerName: 'onTargetItemsChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'window',
      attachedTypeName: 'Window',
      properties: [
        { name: 'objectName', hasValue: true, hasBinding: true },
      ],
      signals: [
        { handlerName: 'onActiveChanged', paramCount: 0 },
        { handlerName: 'onActiveFocusItemChanged', paramCount: 0 },
        { handlerName: 'onContentItemChanged', paramCount: 0 },
        { handlerName: 'onHeightChanged', paramCount: 0 },
        { handlerName: 'onVisibilityChanged', paramCount: 0 },
        { handlerName: 'onWidthChanged', paramCount: 0 },
        { handlerName: 'onWindowChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
  ],
};

export function TextInput(): TextInputBuilder {
  return createFluentBuilder('TextInput', TEXTINPUT_META) as unknown as TextInputBuilder;
}

export namespace TextInput {
  export namespace CursorPosition {
    export const CursorBetweenCharacters = createEnumToken('TextInput', 'CursorPosition', 'CursorBetweenCharacters');
    export const CursorOnCharacter = createEnumToken('TextInput', 'CursorPosition', 'CursorOnCharacter');
  }
  export namespace EchoMode {
    export const Normal = createEnumToken('TextInput', 'EchoMode', 'Normal');
    export const NoEcho = createEnumToken('TextInput', 'EchoMode', 'NoEcho');
    export const Password = createEnumToken('TextInput', 'EchoMode', 'Password');
    export const PasswordEchoOnEdit = createEnumToken('TextInput', 'EchoMode', 'PasswordEchoOnEdit');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('TextInput', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('TextInput', 'Flags', 'ItemAcceptsInputMethod');
    export const ItemIsFocusScope = createEnumToken('TextInput', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TextInput', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TextInput', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TextInput', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('TextInput', 'Flags', 'ItemObservesViewport');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('TextInput', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('TextInput', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('TextInput', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken('TextInput', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('TextInput', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('TextInput', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('TextInput', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('TextInput', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('TextInput', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('TextInput', 'RenderType', 'CurveRendering');
  }
  export namespace SelectionMode {
    export const SelectCharacters = createEnumToken('TextInput', 'SelectionMode', 'SelectCharacters');
    export const SelectWords = createEnumToken('TextInput', 'SelectionMode', 'SelectWords');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TextInput', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TextInput', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TextInput', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TextInput', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TextInput', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TextInput', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TextInput', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TextInput', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TextInput', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('TextInput', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('TextInput', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('TextInput', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('TextInput', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('TextInput', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('TextInput', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken('TextInput', 'WrapMode', 'WrapAtWordBoundaryOrAnywhere');
    export const Wrap = createEnumToken('TextInput', 'WrapMode', 'Wrap');
  }
}
