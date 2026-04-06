// AUTO-GENERATED — DO NOT EDIT
// Type: TextEdit
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlComponent,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
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
export interface TextEditBuilder {
  id(id: string): TextEditBuilder;
  child(obj: QmlObjectBuilder): TextEditBuilder;
  children(...objs: QmlObjectBuilder[]): TextEditBuilder;

  activeFocusOnPress(value: boolean): TextEditBuilder;
  activeFocusOnPressBind(expr: string): TextEditBuilder;
  activeFocusOnTab(value: boolean): TextEditBuilder;
  activeFocusOnTabBind(expr: string): TextEditBuilder;
  antialiasing(value: boolean): TextEditBuilder;
  antialiasingBind(expr: string): TextEditBuilder;
  baseUrl(value: QmlUrl): TextEditBuilder;
  baseUrlBind(expr: string): TextEditBuilder;
  baselineOffset(value: number): TextEditBuilder;
  baselineOffsetBind(expr: string): TextEditBuilder;
  bottomPadding(value: number): TextEditBuilder;
  bottomPaddingBind(expr: string): TextEditBuilder;
  clip(value: boolean): TextEditBuilder;
  clipBind(expr: string): TextEditBuilder;
  color(value: QmlColor): TextEditBuilder;
  colorBind(expr: string): TextEditBuilder;
  containmentMask(value: QtObjectBuilder): TextEditBuilder;
  containmentMaskBind(expr: string): TextEditBuilder;
  cursorDelegate(value: QmlComponent): TextEditBuilder;
  cursorDelegateBind(expr: string): TextEditBuilder;
  cursorPosition(value: number): TextEditBuilder;
  cursorPositionBind(expr: string): TextEditBuilder;
  cursorVisible(value: boolean): TextEditBuilder;
  cursorVisibleBind(expr: string): TextEditBuilder;
  enabled(value: boolean): TextEditBuilder;
  enabledBind(expr: string): TextEditBuilder;
  focus(value: boolean): TextEditBuilder;
  focusBind(expr: string): TextEditBuilder;
  focusPolicy(value: QmlEnumToken): TextEditBuilder;
  focusPolicyBind(expr: string): TextEditBuilder;
  font(value: QmlFont): TextEditBuilder;
  fontBind(expr: string): TextEditBuilder;
  height(value: number): TextEditBuilder;
  heightBind(expr: string): TextEditBuilder;
  horizontalAlignment(value: QmlEnumToken): TextEditBuilder;
  horizontalAlignmentBind(expr: string): TextEditBuilder;
  inputMethodHints(value: QmlEnumToken): TextEditBuilder;
  inputMethodHintsBind(expr: string): TextEditBuilder;
  leftPadding(value: number): TextEditBuilder;
  leftPaddingBind(expr: string): TextEditBuilder;
  mouseSelectionMode(value: QmlEnumToken): TextEditBuilder;
  mouseSelectionModeBind(expr: string): TextEditBuilder;
  objectName(value: string): TextEditBuilder;
  objectNameBind(expr: string): TextEditBuilder;
  opacity(value: number): TextEditBuilder;
  opacityBind(expr: string): TextEditBuilder;
  overwriteMode(value: boolean): TextEditBuilder;
  overwriteModeBind(expr: string): TextEditBuilder;
  padding(value: number): TextEditBuilder;
  paddingBind(expr: string): TextEditBuilder;
  palette(value: PaletteBuilder): TextEditBuilder;
  paletteBind(expr: string): TextEditBuilder;
  parent(value: ItemBuilder): TextEditBuilder;
  parentBind(expr: string): TextEditBuilder;
  persistentSelection(value: boolean): TextEditBuilder;
  persistentSelectionBind(expr: string): TextEditBuilder;
  readOnly(value: boolean): TextEditBuilder;
  readOnlyBind(expr: string): TextEditBuilder;
  renderType(value: QmlEnumToken): TextEditBuilder;
  renderTypeBind(expr: string): TextEditBuilder;
  rightPadding(value: number): TextEditBuilder;
  rightPaddingBind(expr: string): TextEditBuilder;
  rotation(value: number): TextEditBuilder;
  rotationBind(expr: string): TextEditBuilder;
  scale(value: number): TextEditBuilder;
  scaleBind(expr: string): TextEditBuilder;
  selectByKeyboard(value: boolean): TextEditBuilder;
  selectByKeyboardBind(expr: string): TextEditBuilder;
  selectByMouse(value: boolean): TextEditBuilder;
  selectByMouseBind(expr: string): TextEditBuilder;
  selectedTextColor(value: QmlColor): TextEditBuilder;
  selectedTextColorBind(expr: string): TextEditBuilder;
  selectionColor(value: QmlColor): TextEditBuilder;
  selectionColorBind(expr: string): TextEditBuilder;
  smooth(value: boolean): TextEditBuilder;
  smoothBind(expr: string): TextEditBuilder;
  state(value: string): TextEditBuilder;
  stateBind(expr: string): TextEditBuilder;
  tabStopDistance(value: number): TextEditBuilder;
  tabStopDistanceBind(expr: string): TextEditBuilder;
  text(value: string): TextEditBuilder;
  textBind(expr: string): TextEditBuilder;
  textFormat(value: QmlEnumToken): TextEditBuilder;
  textFormatBind(expr: string): TextEditBuilder;
  textMargin(value: number): TextEditBuilder;
  textMarginBind(expr: string): TextEditBuilder;
  topPadding(value: number): TextEditBuilder;
  topPaddingBind(expr: string): TextEditBuilder;
  transformOrigin(value: QmlEnumToken): TextEditBuilder;
  transformOriginBind(expr: string): TextEditBuilder;
  verticalAlignment(value: QmlEnumToken): TextEditBuilder;
  verticalAlignmentBind(expr: string): TextEditBuilder;
  visible(value: boolean): TextEditBuilder;
  visibleBind(expr: string): TextEditBuilder;
  width(value: number): TextEditBuilder;
  widthBind(expr: string): TextEditBuilder;
  wrapMode(value: QmlEnumToken): TextEditBuilder;
  wrapModeBind(expr: string): TextEditBuilder;
  x(value: number): TextEditBuilder;
  xBind(expr: string): TextEditBuilder;
  y(value: number): TextEditBuilder;
  yBind(expr: string): TextEditBuilder;
  z(value: number): TextEditBuilder;
  zBind(expr: string): TextEditBuilder;
  onActiveFocusChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onActiveFocusOnPressChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onActiveFocusOnTabChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onAntialiasingChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onBaseUrlChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onBaselineOffsetChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onBottomPaddingChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onCanPasteChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onCanRedoChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onCanUndoChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onChildrenRectChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onClipChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onColorChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onContainmentMaskChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onContentSizeChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onCursorDelegateChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onCursorPositionChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onCursorRectangleChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onCursorVisibleChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onEditingFinished(handler: DslSignalHandlerValue): TextEditBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onFocusChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onFocusPolicyChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onFontChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onHorizontalAlignmentChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onInputMethodComposingChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onInputMethodHintsChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onLeftPaddingChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onLineCountChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onLinkActivated(handler: DslSignalHandlerValue): TextEditBuilder;
  onLinkHovered(handler: DslSignalHandlerValue): TextEditBuilder;
  onMouseSelectionModeChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onOpacityChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onOverwriteModeChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onPaletteChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onPaletteCreated(handler: DslSignalHandlerValue): TextEditBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onPersistentSelectionChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onPreeditTextChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onReadOnlyChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onRenderTypeChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onRightPaddingChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onSelectByKeyboardChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onSelectByMouseChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onSelectedTextChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onSelectedTextColorChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onSelectionColorChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onSelectionEndChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onSelectionStartChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onSmoothChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onStateChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onTabStopDistanceChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onTextChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onTextEdited(handler: DslSignalHandlerValue): TextEditBuilder;
  onTextFormatChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onTextMarginChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onTopPaddingChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onTransformOriginChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onVerticalAlignmentChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onVisibleChildrenChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onWindowChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onWrapModeChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onXChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onYChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  onZChanged(handler: DslSignalHandlerValue): TextEditBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TextEditBuilder;
  layer(setup: (b: LayerBuilder) => void): TextEditBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TextEditBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TextEditBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TextEditBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TextEditBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TextEditBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TextEditBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TextEditBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TextEditBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TextEditBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TextEditBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TextEditBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TextEditBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TextEditBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TextEditBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TextEditBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TextEditBuilder;
}

const TEXTEDIT_META: TypeMetadata = {
  typeName: 'TextEdit',
  properties: [
    { name: 'activeFocusOnPress', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baseUrl', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'cursorDelegate', hasValue: true, hasBinding: true },
    { name: 'cursorPosition', hasValue: true, hasBinding: true },
    { name: 'cursorVisible', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'inputMethodHints', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'mouseSelectionMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'overwriteMode', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'persistentSelection', hasValue: true, hasBinding: true },
    { name: 'readOnly', hasValue: true, hasBinding: true },
    { name: 'renderType', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectByKeyboard', hasValue: true, hasBinding: true },
    { name: 'selectByMouse', hasValue: true, hasBinding: true },
    { name: 'selectedTextColor', hasValue: true, hasBinding: true },
    { name: 'selectionColor', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'tabStopDistance', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'textFormat', hasValue: true, hasBinding: true },
    { name: 'textMargin', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'verticalAlignment', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'wrapMode', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnPressChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaseUrlChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onCanPasteChanged', paramCount: 0 },
    { handlerName: 'onCanRedoChanged', paramCount: 0 },
    { handlerName: 'onCanUndoChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentSizeChanged', paramCount: 0 },
    { handlerName: 'onCursorDelegateChanged', paramCount: 0 },
    { handlerName: 'onCursorPositionChanged', paramCount: 0 },
    { handlerName: 'onCursorRectangleChanged', paramCount: 0 },
    { handlerName: 'onCursorVisibleChanged', paramCount: 1 },
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
    { handlerName: 'onInputMethodComposingChanged', paramCount: 0 },
    { handlerName: 'onInputMethodHintsChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLineCountChanged', paramCount: 0 },
    { handlerName: 'onLinkActivated', paramCount: 1 },
    { handlerName: 'onLinkHovered', paramCount: 1 },
    { handlerName: 'onMouseSelectionModeChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onOverwriteModeChanged', paramCount: 1 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPersistentSelectionChanged', paramCount: 1 },
    { handlerName: 'onPreeditTextChanged', paramCount: 0 },
    { handlerName: 'onReadOnlyChanged', paramCount: 1 },
    { handlerName: 'onRenderTypeChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSelectByKeyboardChanged', paramCount: 1 },
    { handlerName: 'onSelectByMouseChanged', paramCount: 1 },
    { handlerName: 'onSelectedTextChanged', paramCount: 0 },
    { handlerName: 'onSelectedTextColorChanged', paramCount: 1 },
    { handlerName: 'onSelectionColorChanged', paramCount: 1 },
    { handlerName: 'onSelectionEndChanged', paramCount: 0 },
    { handlerName: 'onSelectionStartChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTabStopDistanceChanged', paramCount: 1 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTextEdited', paramCount: 0 },
    { handlerName: 'onTextFormatChanged', paramCount: 1 },
    { handlerName: 'onTextMarginChanged', paramCount: 1 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
      signals: [
        { handlerName: 'onCurrentItemChanged', paramCount: 0 },
        { handlerName: 'onPathChanged', paramCount: 0 },
        { handlerName: 'onObjectNameChanged', paramCount: 1 },
      ],
    },
    {
      methodName: 'positioner',
      attachedTypeName: 'Positioner',
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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
      properties: [{ name: 'objectName', hasValue: true, hasBinding: true }],
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

export function TextEdit(): TextEditBuilder {
  return createFluentBuilder('TextEdit', TEXTEDIT_META) as unknown as TextEditBuilder;
}

export namespace TextEdit {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TextEdit',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TextEdit',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TextEdit', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TextEdit', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TextEdit', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TextEdit', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TextEdit',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('TextEdit', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('TextEdit', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('TextEdit', 'HAlignment', 'AlignHCenter');
    export const AlignJustify = createEnumToken('TextEdit', 'HAlignment', 'AlignJustify');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TextEdit', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TextEdit',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('TextEdit', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('TextEdit', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('TextEdit', 'RenderType', 'CurveRendering');
  }
  export namespace SelectionMode {
    export const SelectCharacters = createEnumToken(
      'TextEdit',
      'SelectionMode',
      'SelectCharacters',
    );
    export const SelectWords = createEnumToken('TextEdit', 'SelectionMode', 'SelectWords');
  }
  export namespace TextFormat {
    export const PlainText = createEnumToken('TextEdit', 'TextFormat', 'PlainText');
    export const RichText = createEnumToken('TextEdit', 'TextFormat', 'RichText');
    export const AutoText = createEnumToken('TextEdit', 'TextFormat', 'AutoText');
    export const MarkdownText = createEnumToken('TextEdit', 'TextFormat', 'MarkdownText');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TextEdit', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TextEdit', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TextEdit', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TextEdit', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TextEdit', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TextEdit', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TextEdit', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TextEdit', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TextEdit', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('TextEdit', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('TextEdit', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('TextEdit', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('TextEdit', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('TextEdit', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('TextEdit', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'TextEdit',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('TextEdit', 'WrapMode', 'Wrap');
  }
}
