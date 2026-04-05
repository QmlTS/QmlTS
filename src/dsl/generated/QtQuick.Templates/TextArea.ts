// AUTO-GENERATED — DO NOT EDIT
// Type: TextArea
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlComponent,
  QmlFont,
  QmlObjectBuilder,
  QmlRect,
  QmlUrl,
  QmlValue,
} from '../../runtime/index.js';
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
  focusPolicy(value: QmlValue): TextAreaBuilder;
  focusPolicyBind(expr: string): TextAreaBuilder;
  focusReason(value: QmlValue): TextAreaBuilder;
  focusReasonBind(expr: string): TextAreaBuilder;
  font(value: QmlFont): TextAreaBuilder;
  fontBind(expr: string): TextAreaBuilder;
  height(value: number): TextAreaBuilder;
  heightBind(expr: string): TextAreaBuilder;
  horizontalAlignment(value: QmlValue): TextAreaBuilder;
  horizontalAlignmentBind(expr: string): TextAreaBuilder;
  hoverEnabled(value: boolean): TextAreaBuilder;
  hoverEnabledBind(expr: string): TextAreaBuilder;
  implicitHeight(value: number): TextAreaBuilder;
  implicitHeightBind(expr: string): TextAreaBuilder;
  implicitWidth(value: number): TextAreaBuilder;
  implicitWidthBind(expr: string): TextAreaBuilder;
  inputMethodHints(value: QmlValue): TextAreaBuilder;
  inputMethodHintsBind(expr: string): TextAreaBuilder;
  leftInset(value: number): TextAreaBuilder;
  leftInsetBind(expr: string): TextAreaBuilder;
  leftPadding(value: number): TextAreaBuilder;
  leftPaddingBind(expr: string): TextAreaBuilder;
  mouseSelectionMode(value: QmlValue): TextAreaBuilder;
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
  renderType(value: QmlValue): TextAreaBuilder;
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
  textFormat(value: QmlValue): TextAreaBuilder;
  textFormatBind(expr: string): TextAreaBuilder;
  textMargin(value: number): TextAreaBuilder;
  textMarginBind(expr: string): TextAreaBuilder;
  topInset(value: number): TextAreaBuilder;
  topInsetBind(expr: string): TextAreaBuilder;
  topPadding(value: number): TextAreaBuilder;
  topPaddingBind(expr: string): TextAreaBuilder;
  transformOrigin(value: QmlValue): TextAreaBuilder;
  transformOriginBind(expr: string): TextAreaBuilder;
  verticalAlignment(value: QmlValue): TextAreaBuilder;
  verticalAlignmentBind(expr: string): TextAreaBuilder;
  visible(value: boolean): TextAreaBuilder;
  visibleBind(expr: string): TextAreaBuilder;
  width(value: number): TextAreaBuilder;
  widthBind(expr: string): TextAreaBuilder;
  wrapMode(value: QmlValue): TextAreaBuilder;
  wrapModeBind(expr: string): TextAreaBuilder;
  x(value: number): TextAreaBuilder;
  xBind(expr: string): TextAreaBuilder;
  y(value: number): TextAreaBuilder;
  yBind(expr: string): TextAreaBuilder;
  z(value: number): TextAreaBuilder;
  zBind(expr: string): TextAreaBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TextAreaBuilder;
  onActiveFocusOnPressChanged(handler: (activeFocusOnPressed: boolean) => void): TextAreaBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TextAreaBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TextAreaBuilder;
  onBackgroundChanged(handler: () => void): TextAreaBuilder;
  onBaseUrlChanged(handler: () => void): TextAreaBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): TextAreaBuilder;
  onBottomInsetChanged(handler: () => void): TextAreaBuilder;
  onBottomPaddingChanged(handler: () => void): TextAreaBuilder;
  onCanPasteChanged(handler: () => void): TextAreaBuilder;
  onCanRedoChanged(handler: () => void): TextAreaBuilder;
  onCanUndoChanged(handler: () => void): TextAreaBuilder;
  onChildrenChanged(handler: () => void): TextAreaBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TextAreaBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TextAreaBuilder;
  onColorChanged(handler: (color: QmlColor) => void): TextAreaBuilder;
  onContainmentMaskChanged(handler: () => void): TextAreaBuilder;
  onContentSizeChanged(handler: () => void): TextAreaBuilder;
  onCursorDelegateChanged(handler: () => void): TextAreaBuilder;
  onCursorPositionChanged(handler: () => void): TextAreaBuilder;
  onCursorRectangleChanged(handler: () => void): TextAreaBuilder;
  onCursorVisibleChanged(handler: (isCursorVisible: boolean) => void): TextAreaBuilder;
  onEditingFinished(handler: () => void): TextAreaBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: () => void): TextAreaBuilder;
  onEnabledChanged(handler: () => void): TextAreaBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TextAreaBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TextAreaBuilder;
  onFocusReasonChanged(handler: () => void): TextAreaBuilder;
  onFontChanged(handler: () => void): TextAreaBuilder;
  onHeightChanged(handler: () => void): TextAreaBuilder;
  onHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): TextAreaBuilder;
  onHoverEnabledChanged(handler: () => void): TextAreaBuilder;
  onHoveredChanged(handler: () => void): TextAreaBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): TextAreaBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): TextAreaBuilder;
  onImplicitHeightChanged(handler: () => void): TextAreaBuilder;
  onImplicitHeightChanged3(handler: () => void): TextAreaBuilder;
  onImplicitWidthChanged(handler: () => void): TextAreaBuilder;
  onImplicitWidthChanged3(handler: () => void): TextAreaBuilder;
  onInputMethodComposingChanged(handler: () => void): TextAreaBuilder;
  onInputMethodHintsChanged(handler: () => void): TextAreaBuilder;
  onLeftInsetChanged(handler: () => void): TextAreaBuilder;
  onLeftPaddingChanged(handler: () => void): TextAreaBuilder;
  onLineCountChanged(handler: () => void): TextAreaBuilder;
  onLinkActivated(handler: (link: string) => void): TextAreaBuilder;
  onLinkHovered(handler: (link: string) => void): TextAreaBuilder;
  onMouseSelectionModeChanged(handler: (mode: QmlValue) => void): TextAreaBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TextAreaBuilder;
  onOpacityChanged(handler: () => void): TextAreaBuilder;
  onOverwriteModeChanged(handler: (overwriteMode: boolean) => void): TextAreaBuilder;
  onPaddingChanged(handler: () => void): TextAreaBuilder;
  onPaletteChanged(handler: () => void): TextAreaBuilder;
  onPaletteCreated(handler: () => void): TextAreaBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TextAreaBuilder;
  onPersistentSelectionChanged(handler: (isPersistentSelection: boolean) => void): TextAreaBuilder;
  onPlaceholderTextChanged(handler: () => void): TextAreaBuilder;
  onPlaceholderTextColorChanged(handler: () => void): TextAreaBuilder;
  onPreeditTextChanged(handler: () => void): TextAreaBuilder;
  onPressAndHold(handler: (event: QmlValue) => void): TextAreaBuilder;
  onPressed(handler: (event: QmlValue) => void): TextAreaBuilder;
  onReadOnlyChanged(handler: (isReadOnly: boolean) => void): TextAreaBuilder;
  onReleased(handler: (event: QmlValue) => void): TextAreaBuilder;
  onRenderTypeChanged(handler: () => void): TextAreaBuilder;
  onRightInsetChanged(handler: () => void): TextAreaBuilder;
  onRightPaddingChanged(handler: () => void): TextAreaBuilder;
  onRotationChanged(handler: () => void): TextAreaBuilder;
  onScaleChanged(handler: () => void): TextAreaBuilder;
  onSelectByKeyboardChanged(handler: (selectByKeyboard: boolean) => void): TextAreaBuilder;
  onSelectByMouseChanged(handler: (selectByMouse: boolean) => void): TextAreaBuilder;
  onSelectedTextChanged(handler: () => void): TextAreaBuilder;
  onSelectedTextColorChanged(handler: (color: QmlColor) => void): TextAreaBuilder;
  onSelectionColorChanged(handler: (color: QmlColor) => void): TextAreaBuilder;
  onSelectionEndChanged(handler: () => void): TextAreaBuilder;
  onSelectionStartChanged(handler: () => void): TextAreaBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TextAreaBuilder;
  onStateChanged(handler: (arg0: string) => void): TextAreaBuilder;
  onTabStopDistanceChanged(handler: (distance: number) => void): TextAreaBuilder;
  onTextChanged(handler: () => void): TextAreaBuilder;
  onTextEdited(handler: () => void): TextAreaBuilder;
  onTextFormatChanged(handler: (textFormat: QmlValue) => void): TextAreaBuilder;
  onTextMarginChanged(handler: (textMargin: number) => void): TextAreaBuilder;
  onTopInsetChanged(handler: () => void): TextAreaBuilder;
  onTopPaddingChanged(handler: () => void): TextAreaBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TextAreaBuilder;
  onVerticalAlignmentChanged(handler: (alignment: QmlValue) => void): TextAreaBuilder;
  onVisibleChanged(handler: () => void): TextAreaBuilder;
  onVisibleChildrenChanged(handler: () => void): TextAreaBuilder;
  onWidthChanged(handler: () => void): TextAreaBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TextAreaBuilder;
  onWrapModeChanged(handler: () => void): TextAreaBuilder;
  onXChanged(handler: () => void): TextAreaBuilder;
  onYChanged(handler: () => void): TextAreaBuilder;
  onZChanged(handler: () => void): TextAreaBuilder;
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

export function TextArea(): TextAreaBuilder {
  return new DslBuilderImpl('TextArea') as unknown as TextAreaBuilder;
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
