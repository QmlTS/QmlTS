// AUTO-GENERATED — DO NOT EDIT
// Type: TextField
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlComponent,
  QmlFont,
  QmlObjectBuilder,
  QmlRect,
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
  echoMode(value: QmlValue): TextFieldBuilder;
  echoModeBind(expr: string): TextFieldBuilder;
  enabled(value: boolean): TextFieldBuilder;
  enabledBind(expr: string): TextFieldBuilder;
  focus(value: boolean): TextFieldBuilder;
  focusBind(expr: string): TextFieldBuilder;
  focusPolicy(value: QmlValue): TextFieldBuilder;
  focusPolicyBind(expr: string): TextFieldBuilder;
  focusReason(value: QmlValue): TextFieldBuilder;
  focusReasonBind(expr: string): TextFieldBuilder;
  font(value: QmlFont): TextFieldBuilder;
  fontBind(expr: string): TextFieldBuilder;
  height(value: number): TextFieldBuilder;
  heightBind(expr: string): TextFieldBuilder;
  horizontalAlignment(value: QmlValue): TextFieldBuilder;
  horizontalAlignmentBind(expr: string): TextFieldBuilder;
  hoverEnabled(value: boolean): TextFieldBuilder;
  hoverEnabledBind(expr: string): TextFieldBuilder;
  implicitHeight(value: number): TextFieldBuilder;
  implicitHeightBind(expr: string): TextFieldBuilder;
  implicitWidth(value: number): TextFieldBuilder;
  implicitWidthBind(expr: string): TextFieldBuilder;
  inputMask(value: string): TextFieldBuilder;
  inputMaskBind(expr: string): TextFieldBuilder;
  inputMethodHints(value: QmlValue): TextFieldBuilder;
  inputMethodHintsBind(expr: string): TextFieldBuilder;
  leftInset(value: number): TextFieldBuilder;
  leftInsetBind(expr: string): TextFieldBuilder;
  leftPadding(value: number): TextFieldBuilder;
  leftPaddingBind(expr: string): TextFieldBuilder;
  maximumLength(value: number): TextFieldBuilder;
  maximumLengthBind(expr: string): TextFieldBuilder;
  mouseSelectionMode(value: QmlValue): TextFieldBuilder;
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
  renderType(value: QmlValue): TextFieldBuilder;
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
  transformOrigin(value: QmlValue): TextFieldBuilder;
  transformOriginBind(expr: string): TextFieldBuilder;
  validator(value: QmlValue): TextFieldBuilder;
  validatorBind(expr: string): TextFieldBuilder;
  verticalAlignment(value: QmlValue): TextFieldBuilder;
  verticalAlignmentBind(expr: string): TextFieldBuilder;
  visible(value: boolean): TextFieldBuilder;
  visibleBind(expr: string): TextFieldBuilder;
  width(value: number): TextFieldBuilder;
  widthBind(expr: string): TextFieldBuilder;
  wrapMode(value: QmlValue): TextFieldBuilder;
  wrapModeBind(expr: string): TextFieldBuilder;
  x(value: number): TextFieldBuilder;
  xBind(expr: string): TextFieldBuilder;
  y(value: number): TextFieldBuilder;
  yBind(expr: string): TextFieldBuilder;
  z(value: number): TextFieldBuilder;
  zBind(expr: string): TextFieldBuilder;
  onAcceptableInputChanged(handler: () => void): TextFieldBuilder;
  onAccepted(handler: () => void): TextFieldBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TextFieldBuilder;
  onActiveFocusOnPressChanged(handler: (activeFocusOnPress: boolean) => void): TextFieldBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TextFieldBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TextFieldBuilder;
  onAutoScrollChanged(handler: (autoScroll: boolean) => void): TextFieldBuilder;
  onBackgroundChanged(handler: () => void): TextFieldBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): TextFieldBuilder;
  onBottomInsetChanged(handler: () => void): TextFieldBuilder;
  onBottomPaddingChanged(handler: () => void): TextFieldBuilder;
  onCanPasteChanged(handler: () => void): TextFieldBuilder;
  onCanRedoChanged(handler: () => void): TextFieldBuilder;
  onCanUndoChanged(handler: () => void): TextFieldBuilder;
  onChildrenChanged(handler: () => void): TextFieldBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TextFieldBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TextFieldBuilder;
  onColorChanged(handler: () => void): TextFieldBuilder;
  onContainmentMaskChanged(handler: () => void): TextFieldBuilder;
  onContentSizeChanged(handler: () => void): TextFieldBuilder;
  onCursorDelegateChanged(handler: () => void): TextFieldBuilder;
  onCursorPositionChanged(handler: () => void): TextFieldBuilder;
  onCursorRectangleChanged(handler: () => void): TextFieldBuilder;
  onCursorVisibleChanged(handler: (isCursorVisible: boolean) => void): TextFieldBuilder;
  onDisplayTextChanged(handler: () => void): TextFieldBuilder;
  onEchoModeChanged(handler: (echoMode: QmlValue) => void): TextFieldBuilder;
  onEditingFinished(handler: () => void): TextFieldBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: () => void): TextFieldBuilder;
  onEnabledChanged(handler: () => void): TextFieldBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TextFieldBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TextFieldBuilder;
  onFocusReasonChanged(handler: () => void): TextFieldBuilder;
  onFontChanged(handler: () => void): TextFieldBuilder;
  onHeightChanged(handler: () => void): TextFieldBuilder;
  onHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): TextFieldBuilder;
  onHoverEnabledChanged(handler: () => void): TextFieldBuilder;
  onHoveredChanged(handler: () => void): TextFieldBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): TextFieldBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): TextFieldBuilder;
  onImplicitHeightChanged(handler: () => void): TextFieldBuilder;
  onImplicitHeightChanged3(handler: () => void): TextFieldBuilder;
  onImplicitWidthChanged(handler: () => void): TextFieldBuilder;
  onImplicitWidthChanged3(handler: () => void): TextFieldBuilder;
  onInputMaskChanged(handler: (inputMask: string) => void): TextFieldBuilder;
  onInputMethodComposingChanged(handler: () => void): TextFieldBuilder;
  onInputMethodHintsChanged(handler: () => void): TextFieldBuilder;
  onLeftInsetChanged(handler: () => void): TextFieldBuilder;
  onLeftPaddingChanged(handler: () => void): TextFieldBuilder;
  onMaximumLengthChanged(handler: (maximumLength: number) => void): TextFieldBuilder;
  onMouseSelectionModeChanged(handler: (mode: QmlValue) => void): TextFieldBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TextFieldBuilder;
  onOpacityChanged(handler: () => void): TextFieldBuilder;
  onOverwriteModeChanged(handler: (overwriteMode: boolean) => void): TextFieldBuilder;
  onPaddingChanged(handler: () => void): TextFieldBuilder;
  onPaletteChanged(handler: () => void): TextFieldBuilder;
  onPaletteCreated(handler: () => void): TextFieldBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TextFieldBuilder;
  onPasswordCharacterChanged(handler: () => void): TextFieldBuilder;
  onPasswordMaskDelayChanged(handler: (delay: number) => void): TextFieldBuilder;
  onPersistentSelectionChanged(handler: () => void): TextFieldBuilder;
  onPlaceholderTextChanged(handler: () => void): TextFieldBuilder;
  onPlaceholderTextColorChanged(handler: () => void): TextFieldBuilder;
  onPreeditTextChanged(handler: () => void): TextFieldBuilder;
  onPressAndHold(handler: (event: QmlValue) => void): TextFieldBuilder;
  onPressed(handler: (event: QmlValue) => void): TextFieldBuilder;
  onReadOnlyChanged(handler: (isReadOnly: boolean) => void): TextFieldBuilder;
  onReleased(handler: (event: QmlValue) => void): TextFieldBuilder;
  onRenderTypeChanged(handler: () => void): TextFieldBuilder;
  onRightInsetChanged(handler: () => void): TextFieldBuilder;
  onRightPaddingChanged(handler: () => void): TextFieldBuilder;
  onRotationChanged(handler: () => void): TextFieldBuilder;
  onScaleChanged(handler: () => void): TextFieldBuilder;
  onSelectByMouseChanged(handler: (selectByMouse: boolean) => void): TextFieldBuilder;
  onSelectedTextChanged(handler: () => void): TextFieldBuilder;
  onSelectedTextColorChanged(handler: () => void): TextFieldBuilder;
  onSelectionColorChanged(handler: () => void): TextFieldBuilder;
  onSelectionEndChanged(handler: () => void): TextFieldBuilder;
  onSelectionStartChanged(handler: () => void): TextFieldBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TextFieldBuilder;
  onStateChanged(handler: (arg0: string) => void): TextFieldBuilder;
  onTextChanged(handler: () => void): TextFieldBuilder;
  onTextEdited(handler: () => void): TextFieldBuilder;
  onTopInsetChanged(handler: () => void): TextFieldBuilder;
  onTopPaddingChanged(handler: () => void): TextFieldBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TextFieldBuilder;
  onValidatorChanged(handler: () => void): TextFieldBuilder;
  onVerticalAlignmentChanged(handler: (alignment: QmlValue) => void): TextFieldBuilder;
  onVisibleChanged(handler: () => void): TextFieldBuilder;
  onVisibleChildrenChanged(handler: () => void): TextFieldBuilder;
  onWidthChanged(handler: () => void): TextFieldBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TextFieldBuilder;
  onWrapModeChanged(handler: () => void): TextFieldBuilder;
  onXChanged(handler: () => void): TextFieldBuilder;
  onYChanged(handler: () => void): TextFieldBuilder;
  onZChanged(handler: () => void): TextFieldBuilder;
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

export function TextField(): TextFieldBuilder {
  return new DslBuilderImpl('TextField') as unknown as TextFieldBuilder;
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
