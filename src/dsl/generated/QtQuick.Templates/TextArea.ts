// AUTO-GENERATED — DO NOT EDIT
// Type: TextArea
// Generated from Qt 6.11.0

import type {
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
export interface TextAreaBuilder {
  id(id: string): TextAreaBuilder;
  child(obj: QmlObjectBuilder): TextAreaBuilder;

  activeFocusOnPress(value: boolean): TextAreaBuilder;
  activeFocusOnPressBind(expr: string): TextAreaBuilder;
  activeFocusOnTab(value: boolean): TextAreaBuilder;
  activeFocusOnTabBind(expr: string): TextAreaBuilder;
  antialiasing(value: boolean): TextAreaBuilder;
  antialiasingBind(expr: string): TextAreaBuilder;
  background(value: ItemBuilder): TextAreaBuilder;
  backgroundBind(expr: string): TextAreaBuilder;
  baseUrl(value: QmlUrl): TextAreaBuilder;
  baseUrlBind(expr: string): TextAreaBuilder;
  baselineOffset(value: number): TextAreaBuilder;
  baselineOffsetBind(expr: string): TextAreaBuilder;
  bottomInset(value: number): TextAreaBuilder;
  bottomInsetBind(expr: string): TextAreaBuilder;
  bottomPadding(value: number): TextAreaBuilder;
  bottomPaddingBind(expr: string): TextAreaBuilder;
  clip(value: boolean): TextAreaBuilder;
  clipBind(expr: string): TextAreaBuilder;
  color(value: QmlColor): TextAreaBuilder;
  colorBind(expr: string): TextAreaBuilder;
  containmentMask(value: QtObjectBuilder): TextAreaBuilder;
  containmentMaskBind(expr: string): TextAreaBuilder;
  cursorDelegate(value: QmlComponent): TextAreaBuilder;
  cursorDelegateBind(expr: string): TextAreaBuilder;
  cursorPosition(value: number): TextAreaBuilder;
  cursorPositionBind(expr: string): TextAreaBuilder;
  cursorVisible(value: boolean): TextAreaBuilder;
  cursorVisibleBind(expr: string): TextAreaBuilder;
  enabled(value: boolean): TextAreaBuilder;
  enabledBind(expr: string): TextAreaBuilder;
  focus(value: boolean): TextAreaBuilder;
  focusBind(expr: string): TextAreaBuilder;
  focusPolicy(value: QmlEnumToken): TextAreaBuilder;
  focusPolicyBind(expr: string): TextAreaBuilder;
  focusReason(value: QmlEnumToken): TextAreaBuilder;
  focusReasonBind(expr: string): TextAreaBuilder;
  font(value: QmlFont): TextAreaBuilder;
  fontBind(expr: string): TextAreaBuilder;
  height(value: number): TextAreaBuilder;
  heightBind(expr: string): TextAreaBuilder;
  horizontalAlignment(value: QmlEnumToken): TextAreaBuilder;
  horizontalAlignmentBind(expr: string): TextAreaBuilder;
  hoverEnabled(value: boolean): TextAreaBuilder;
  hoverEnabledBind(expr: string): TextAreaBuilder;
  implicitHeight(value: number): TextAreaBuilder;
  implicitHeightBind(expr: string): TextAreaBuilder;
  implicitWidth(value: number): TextAreaBuilder;
  implicitWidthBind(expr: string): TextAreaBuilder;
  inputMethodHints(value: QmlEnumToken): TextAreaBuilder;
  inputMethodHintsBind(expr: string): TextAreaBuilder;
  leftInset(value: number): TextAreaBuilder;
  leftInsetBind(expr: string): TextAreaBuilder;
  leftPadding(value: number): TextAreaBuilder;
  leftPaddingBind(expr: string): TextAreaBuilder;
  mouseSelectionMode(value: QmlEnumToken): TextAreaBuilder;
  mouseSelectionModeBind(expr: string): TextAreaBuilder;
  objectName(value: string): TextAreaBuilder;
  objectNameBind(expr: string): TextAreaBuilder;
  opacity(value: number): TextAreaBuilder;
  opacityBind(expr: string): TextAreaBuilder;
  overwriteMode(value: boolean): TextAreaBuilder;
  overwriteModeBind(expr: string): TextAreaBuilder;
  padding(value: number): TextAreaBuilder;
  paddingBind(expr: string): TextAreaBuilder;
  palette(value: PaletteBuilder): TextAreaBuilder;
  paletteBind(expr: string): TextAreaBuilder;
  parent(value: ItemBuilder): TextAreaBuilder;
  parentBind(expr: string): TextAreaBuilder;
  persistentSelection(value: boolean): TextAreaBuilder;
  persistentSelectionBind(expr: string): TextAreaBuilder;
  placeholderText(value: string): TextAreaBuilder;
  placeholderTextBind(expr: string): TextAreaBuilder;
  placeholderTextColor(value: QmlColor): TextAreaBuilder;
  placeholderTextColorBind(expr: string): TextAreaBuilder;
  readOnly(value: boolean): TextAreaBuilder;
  readOnlyBind(expr: string): TextAreaBuilder;
  renderType(value: QmlEnumToken): TextAreaBuilder;
  renderTypeBind(expr: string): TextAreaBuilder;
  rightInset(value: number): TextAreaBuilder;
  rightInsetBind(expr: string): TextAreaBuilder;
  rightPadding(value: number): TextAreaBuilder;
  rightPaddingBind(expr: string): TextAreaBuilder;
  rotation(value: number): TextAreaBuilder;
  rotationBind(expr: string): TextAreaBuilder;
  scale(value: number): TextAreaBuilder;
  scaleBind(expr: string): TextAreaBuilder;
  selectByKeyboard(value: boolean): TextAreaBuilder;
  selectByKeyboardBind(expr: string): TextAreaBuilder;
  selectByMouse(value: boolean): TextAreaBuilder;
  selectByMouseBind(expr: string): TextAreaBuilder;
  selectedTextColor(value: QmlColor): TextAreaBuilder;
  selectedTextColorBind(expr: string): TextAreaBuilder;
  selectionColor(value: QmlColor): TextAreaBuilder;
  selectionColorBind(expr: string): TextAreaBuilder;
  smooth(value: boolean): TextAreaBuilder;
  smoothBind(expr: string): TextAreaBuilder;
  state(value: string): TextAreaBuilder;
  stateBind(expr: string): TextAreaBuilder;
  tabStopDistance(value: number): TextAreaBuilder;
  tabStopDistanceBind(expr: string): TextAreaBuilder;
  text(value: string): TextAreaBuilder;
  textBind(expr: string): TextAreaBuilder;
  textFormat(value: QmlEnumToken): TextAreaBuilder;
  textFormatBind(expr: string): TextAreaBuilder;
  textMargin(value: number): TextAreaBuilder;
  textMarginBind(expr: string): TextAreaBuilder;
  topInset(value: number): TextAreaBuilder;
  topInsetBind(expr: string): TextAreaBuilder;
  topPadding(value: number): TextAreaBuilder;
  topPaddingBind(expr: string): TextAreaBuilder;
  transformOrigin(value: QmlEnumToken): TextAreaBuilder;
  transformOriginBind(expr: string): TextAreaBuilder;
  verticalAlignment(value: QmlEnumToken): TextAreaBuilder;
  verticalAlignmentBind(expr: string): TextAreaBuilder;
  visible(value: boolean): TextAreaBuilder;
  visibleBind(expr: string): TextAreaBuilder;
  width(value: number): TextAreaBuilder;
  widthBind(expr: string): TextAreaBuilder;
  wrapMode(value: QmlEnumToken): TextAreaBuilder;
  wrapModeBind(expr: string): TextAreaBuilder;
  x(value: number): TextAreaBuilder;
  xBind(expr: string): TextAreaBuilder;
  y(value: number): TextAreaBuilder;
  yBind(expr: string): TextAreaBuilder;
  z(value: number): TextAreaBuilder;
  zBind(expr: string): TextAreaBuilder;
  onActiveFocusChanged(body: string): TextAreaBuilder;
  onActiveFocusOnPressChanged(body: string): TextAreaBuilder;
  onActiveFocusOnTabChanged(body: string): TextAreaBuilder;
  onAntialiasingChanged(body: string): TextAreaBuilder;
  onBackgroundChanged(body: string): TextAreaBuilder;
  onBaseUrlChanged(body: string): TextAreaBuilder;
  onBaselineOffsetChanged(body: string): TextAreaBuilder;
  onBottomInsetChanged(body: string): TextAreaBuilder;
  onBottomPaddingChanged(body: string): TextAreaBuilder;
  onCanPasteChanged(body: string): TextAreaBuilder;
  onCanRedoChanged(body: string): TextAreaBuilder;
  onCanUndoChanged(body: string): TextAreaBuilder;
  onChildrenChanged(body: string): TextAreaBuilder;
  onChildrenRectChanged(body: string): TextAreaBuilder;
  onClipChanged(body: string): TextAreaBuilder;
  onColorChanged(body: string): TextAreaBuilder;
  onContainmentMaskChanged(body: string): TextAreaBuilder;
  onContentSizeChanged(body: string): TextAreaBuilder;
  onCursorDelegateChanged(body: string): TextAreaBuilder;
  onCursorPositionChanged(body: string): TextAreaBuilder;
  onCursorRectangleChanged(body: string): TextAreaBuilder;
  onCursorVisibleChanged(body: string): TextAreaBuilder;
  onEditingFinished(body: string): TextAreaBuilder;
  onEffectiveHorizontalAlignmentChanged(body: string): TextAreaBuilder;
  onEnabledChanged(body: string): TextAreaBuilder;
  onFocusChanged(body: string): TextAreaBuilder;
  onFocusPolicyChanged(body: string): TextAreaBuilder;
  onFocusReasonChanged(body: string): TextAreaBuilder;
  onFontChanged(body: string): TextAreaBuilder;
  onHeightChanged(body: string): TextAreaBuilder;
  onHorizontalAlignmentChanged(body: string): TextAreaBuilder;
  onHoverEnabledChanged(body: string): TextAreaBuilder;
  onHoveredChanged(body: string): TextAreaBuilder;
  onImplicitBackgroundHeightChanged(body: string): TextAreaBuilder;
  onImplicitBackgroundWidthChanged(body: string): TextAreaBuilder;
  onImplicitHeightChanged(body: string): TextAreaBuilder;
  onImplicitHeightChanged3(body: string): TextAreaBuilder;
  onImplicitWidthChanged(body: string): TextAreaBuilder;
  onImplicitWidthChanged3(body: string): TextAreaBuilder;
  onInputMethodComposingChanged(body: string): TextAreaBuilder;
  onInputMethodHintsChanged(body: string): TextAreaBuilder;
  onLeftInsetChanged(body: string): TextAreaBuilder;
  onLeftPaddingChanged(body: string): TextAreaBuilder;
  onLineCountChanged(body: string): TextAreaBuilder;
  onLinkActivated(body: string): TextAreaBuilder;
  onLinkHovered(body: string): TextAreaBuilder;
  onMouseSelectionModeChanged(body: string): TextAreaBuilder;
  onObjectNameChanged(body: string): TextAreaBuilder;
  onOpacityChanged(body: string): TextAreaBuilder;
  onOverwriteModeChanged(body: string): TextAreaBuilder;
  onPaddingChanged(body: string): TextAreaBuilder;
  onPaletteChanged(body: string): TextAreaBuilder;
  onPaletteCreated(body: string): TextAreaBuilder;
  onParentChanged(body: string): TextAreaBuilder;
  onPersistentSelectionChanged(body: string): TextAreaBuilder;
  onPlaceholderTextChanged(body: string): TextAreaBuilder;
  onPlaceholderTextColorChanged(body: string): TextAreaBuilder;
  onPreeditTextChanged(body: string): TextAreaBuilder;
  onPressAndHold(body: string): TextAreaBuilder;
  onPressed(body: string): TextAreaBuilder;
  onReadOnlyChanged(body: string): TextAreaBuilder;
  onReleased(body: string): TextAreaBuilder;
  onRenderTypeChanged(body: string): TextAreaBuilder;
  onRightInsetChanged(body: string): TextAreaBuilder;
  onRightPaddingChanged(body: string): TextAreaBuilder;
  onRotationChanged(body: string): TextAreaBuilder;
  onScaleChanged(body: string): TextAreaBuilder;
  onSelectByKeyboardChanged(body: string): TextAreaBuilder;
  onSelectByMouseChanged(body: string): TextAreaBuilder;
  onSelectedTextChanged(body: string): TextAreaBuilder;
  onSelectedTextColorChanged(body: string): TextAreaBuilder;
  onSelectionColorChanged(body: string): TextAreaBuilder;
  onSelectionEndChanged(body: string): TextAreaBuilder;
  onSelectionStartChanged(body: string): TextAreaBuilder;
  onSmoothChanged(body: string): TextAreaBuilder;
  onStateChanged(body: string): TextAreaBuilder;
  onTabStopDistanceChanged(body: string): TextAreaBuilder;
  onTextChanged(body: string): TextAreaBuilder;
  onTextEdited(body: string): TextAreaBuilder;
  onTextFormatChanged(body: string): TextAreaBuilder;
  onTextMarginChanged(body: string): TextAreaBuilder;
  onTopInsetChanged(body: string): TextAreaBuilder;
  onTopPaddingChanged(body: string): TextAreaBuilder;
  onTransformOriginChanged(body: string): TextAreaBuilder;
  onVerticalAlignmentChanged(body: string): TextAreaBuilder;
  onVisibleChanged(body: string): TextAreaBuilder;
  onVisibleChildrenChanged(body: string): TextAreaBuilder;
  onWidthChanged(body: string): TextAreaBuilder;
  onWindowChanged(body: string): TextAreaBuilder;
  onWrapModeChanged(body: string): TextAreaBuilder;
  onXChanged(body: string): TextAreaBuilder;
  onYChanged(body: string): TextAreaBuilder;
  onZChanged(body: string): TextAreaBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TextAreaBuilder;
  layer(setup: (b: LayerBuilder) => void): TextAreaBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): TextAreaBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): TextAreaBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): TextAreaBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): TextAreaBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): TextAreaBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): TextAreaBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): TextAreaBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): TextAreaBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): TextAreaBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): TextAreaBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): TextAreaBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): TextAreaBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): TextAreaBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): TextAreaBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): TextAreaBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): TextAreaBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): TextAreaBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): TextAreaBuilder;
}

const TEXTAREA_META: TypeMetadata = {
  typeName: 'TextArea',
  properties: [
    { name: 'activeFocusOnPress', hasValue: true, hasBinding: true },
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'background', hasValue: true, hasBinding: true },
    { name: 'baseUrl', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomInset', hasValue: true, hasBinding: true },
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
    { name: 'focusReason', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'hoverEnabled', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'inputMethodHints', hasValue: true, hasBinding: true },
    { name: 'leftInset', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'mouseSelectionMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'overwriteMode', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'persistentSelection', hasValue: true, hasBinding: true },
    { name: 'placeholderText', hasValue: true, hasBinding: true },
    { name: 'placeholderTextColor', hasValue: true, hasBinding: true },
    { name: 'readOnly', hasValue: true, hasBinding: true },
    { name: 'renderType', hasValue: true, hasBinding: true },
    { name: 'rightInset', hasValue: true, hasBinding: true },
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
    { name: 'topInset', hasValue: true, hasBinding: true },
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
    { handlerName: 'onBackgroundChanged', paramCount: 0 },
    { handlerName: 'onBaseUrlChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomInsetChanged', paramCount: 0 },
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
    { handlerName: 'onInputMethodComposingChanged', paramCount: 0 },
    { handlerName: 'onInputMethodHintsChanged', paramCount: 0 },
    { handlerName: 'onLeftInsetChanged', paramCount: 0 },
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
    { handlerName: 'onTopInsetChanged', paramCount: 0 },
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

export function TextArea(): TextAreaBuilder {
  return createFluentBuilder('TextArea', TEXTAREA_META) as unknown as TextAreaBuilder;
}

export namespace TextArea {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TextArea',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TextArea',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TextArea', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TextArea', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TextArea', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TextArea', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TextArea',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('TextArea', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('TextArea', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('TextArea', 'HAlignment', 'AlignHCenter');
    export const AlignJustify = createEnumToken('TextArea', 'HAlignment', 'AlignJustify');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TextArea', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TextArea',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('TextArea', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('TextArea', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('TextArea', 'RenderType', 'CurveRendering');
  }
  export namespace SelectionMode {
    export const SelectCharacters = createEnumToken(
      'TextArea',
      'SelectionMode',
      'SelectCharacters',
    );
    export const SelectWords = createEnumToken('TextArea', 'SelectionMode', 'SelectWords');
  }
  export namespace TextFormat {
    export const PlainText = createEnumToken('TextArea', 'TextFormat', 'PlainText');
    export const RichText = createEnumToken('TextArea', 'TextFormat', 'RichText');
    export const AutoText = createEnumToken('TextArea', 'TextFormat', 'AutoText');
    export const MarkdownText = createEnumToken('TextArea', 'TextFormat', 'MarkdownText');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('TextArea', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('TextArea', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('TextArea', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('TextArea', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('TextArea', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('TextArea', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('TextArea', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('TextArea', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('TextArea', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('TextArea', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('TextArea', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('TextArea', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('TextArea', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('TextArea', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('TextArea', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'TextArea',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('TextArea', 'WrapMode', 'Wrap');
  }
}
