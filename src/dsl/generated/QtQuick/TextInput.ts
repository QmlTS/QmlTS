// AUTO-GENERATED — DO NOT EDIT
// Type: TextInput
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
import type { WindowBuilder } from './Window.js';
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
  echoMode(value: QmlValue): TextInputBuilder;
  echoModeBind(expr: string): TextInputBuilder;
  enabled(value: boolean): TextInputBuilder;
  enabledBind(expr: string): TextInputBuilder;
  focus(value: boolean): TextInputBuilder;
  focusBind(expr: string): TextInputBuilder;
  focusPolicy(value: QmlValue): TextInputBuilder;
  focusPolicyBind(expr: string): TextInputBuilder;
  font(value: QmlFont): TextInputBuilder;
  fontBind(expr: string): TextInputBuilder;
  height(value: number): TextInputBuilder;
  heightBind(expr: string): TextInputBuilder;
  horizontalAlignment(value: QmlValue): TextInputBuilder;
  horizontalAlignmentBind(expr: string): TextInputBuilder;
  inputMask(value: string): TextInputBuilder;
  inputMaskBind(expr: string): TextInputBuilder;
  inputMethodHints(value: QmlValue): TextInputBuilder;
  inputMethodHintsBind(expr: string): TextInputBuilder;
  leftPadding(value: number): TextInputBuilder;
  leftPaddingBind(expr: string): TextInputBuilder;
  maximumLength(value: number): TextInputBuilder;
  maximumLengthBind(expr: string): TextInputBuilder;
  mouseSelectionMode(value: QmlValue): TextInputBuilder;
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
  renderType(value: QmlValue): TextInputBuilder;
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
  transformOrigin(value: QmlValue): TextInputBuilder;
  transformOriginBind(expr: string): TextInputBuilder;
  validator(value: QmlValue): TextInputBuilder;
  validatorBind(expr: string): TextInputBuilder;
  verticalAlignment(value: QmlValue): TextInputBuilder;
  verticalAlignmentBind(expr: string): TextInputBuilder;
  visible(value: boolean): TextInputBuilder;
  visibleBind(expr: string): TextInputBuilder;
  width(value: number): TextInputBuilder;
  widthBind(expr: string): TextInputBuilder;
  wrapMode(value: QmlValue): TextInputBuilder;
  wrapModeBind(expr: string): TextInputBuilder;
  x(value: number): TextInputBuilder;
  xBind(expr: string): TextInputBuilder;
  y(value: number): TextInputBuilder;
  yBind(expr: string): TextInputBuilder;
  z(value: number): TextInputBuilder;
  zBind(expr: string): TextInputBuilder;
  onAcceptableInputChanged(handler: () => void): TextInputBuilder;
  onAccepted(handler: () => void): TextInputBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TextInputBuilder;
  onActiveFocusOnPressChanged(handler: (activeFocusOnPress: boolean) => void): TextInputBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TextInputBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TextInputBuilder;
  onAutoScrollChanged(handler: (autoScroll: boolean) => void): TextInputBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): TextInputBuilder;
  onBottomPaddingChanged(handler: () => void): TextInputBuilder;
  onCanPasteChanged(handler: () => void): TextInputBuilder;
  onCanRedoChanged(handler: () => void): TextInputBuilder;
  onCanUndoChanged(handler: () => void): TextInputBuilder;
  onChildrenChanged(handler: () => void): TextInputBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TextInputBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TextInputBuilder;
  onColorChanged(handler: () => void): TextInputBuilder;
  onContainmentMaskChanged(handler: () => void): TextInputBuilder;
  onContentSizeChanged(handler: () => void): TextInputBuilder;
  onCursorDelegateChanged(handler: () => void): TextInputBuilder;
  onCursorPositionChanged(handler: () => void): TextInputBuilder;
  onCursorRectangleChanged(handler: () => void): TextInputBuilder;
  onCursorVisibleChanged(handler: (isCursorVisible: boolean) => void): TextInputBuilder;
  onDisplayTextChanged(handler: () => void): TextInputBuilder;
  onEchoModeChanged(handler: (echoMode: QmlValue) => void): TextInputBuilder;
  onEditingFinished(handler: () => void): TextInputBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: () => void): TextInputBuilder;
  onEnabledChanged(handler: () => void): TextInputBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TextInputBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TextInputBuilder;
  onFontChanged(handler: (font: QmlFont) => void): TextInputBuilder;
  onHeightChanged(handler: () => void): TextInputBuilder;
  onHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): TextInputBuilder;
  onImplicitHeightChanged(handler: () => void): TextInputBuilder;
  onImplicitWidthChanged(handler: () => void): TextInputBuilder;
  onInputMaskChanged(handler: (inputMask: string) => void): TextInputBuilder;
  onInputMethodComposingChanged(handler: () => void): TextInputBuilder;
  onInputMethodHintsChanged(handler: () => void): TextInputBuilder;
  onLeftPaddingChanged(handler: () => void): TextInputBuilder;
  onMaximumLengthChanged(handler: (maximumLength: number) => void): TextInputBuilder;
  onMouseSelectionModeChanged(handler: (mode: QmlValue) => void): TextInputBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TextInputBuilder;
  onOpacityChanged(handler: () => void): TextInputBuilder;
  onOverwriteModeChanged(handler: (overwriteMode: boolean) => void): TextInputBuilder;
  onPaddingChanged(handler: () => void): TextInputBuilder;
  onPaletteChanged(handler: () => void): TextInputBuilder;
  onPaletteCreated(handler: () => void): TextInputBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TextInputBuilder;
  onPasswordCharacterChanged(handler: () => void): TextInputBuilder;
  onPasswordMaskDelayChanged(handler: (delay: number) => void): TextInputBuilder;
  onPersistentSelectionChanged(handler: () => void): TextInputBuilder;
  onPreeditTextChanged(handler: () => void): TextInputBuilder;
  onReadOnlyChanged(handler: (isReadOnly: boolean) => void): TextInputBuilder;
  onRenderTypeChanged(handler: () => void): TextInputBuilder;
  onRightPaddingChanged(handler: () => void): TextInputBuilder;
  onRotationChanged(handler: () => void): TextInputBuilder;
  onScaleChanged(handler: () => void): TextInputBuilder;
  onSelectByMouseChanged(handler: (selectByMouse: boolean) => void): TextInputBuilder;
  onSelectedTextChanged(handler: () => void): TextInputBuilder;
  onSelectedTextColorChanged(handler: () => void): TextInputBuilder;
  onSelectionColorChanged(handler: () => void): TextInputBuilder;
  onSelectionEndChanged(handler: () => void): TextInputBuilder;
  onSelectionStartChanged(handler: () => void): TextInputBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TextInputBuilder;
  onStateChanged(handler: (arg0: string) => void): TextInputBuilder;
  onTextChanged(handler: () => void): TextInputBuilder;
  onTextEdited(handler: () => void): TextInputBuilder;
  onTopPaddingChanged(handler: () => void): TextInputBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TextInputBuilder;
  onValidatorChanged(handler: () => void): TextInputBuilder;
  onVerticalAlignmentChanged(handler: (alignment: QmlValue) => void): TextInputBuilder;
  onVisibleChanged(handler: () => void): TextInputBuilder;
  onVisibleChildrenChanged(handler: () => void): TextInputBuilder;
  onWidthChanged(handler: () => void): TextInputBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TextInputBuilder;
  onWrapModeChanged(handler: () => void): TextInputBuilder;
  onXChanged(handler: () => void): TextInputBuilder;
  onYChanged(handler: () => void): TextInputBuilder;
  onZChanged(handler: () => void): TextInputBuilder;
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

export function TextInput(): TextInputBuilder {
  return new DslBuilderImpl('TextInput') as unknown as TextInputBuilder;
}

export namespace TextInput {
  export namespace CursorPosition {
    export const CursorBetweenCharacters = createEnumToken(
      'TextInput',
      'CursorPosition',
      'CursorBetweenCharacters',
    );
    export const CursorOnCharacter = createEnumToken(
      'TextInput',
      'CursorPosition',
      'CursorOnCharacter',
    );
  }
  export namespace EchoMode {
    export const Normal = createEnumToken('TextInput', 'EchoMode', 'Normal');
    export const NoEcho = createEnumToken('TextInput', 'EchoMode', 'NoEcho');
    export const Password = createEnumToken('TextInput', 'EchoMode', 'Password');
    export const PasswordEchoOnEdit = createEnumToken(
      'TextInput',
      'EchoMode',
      'PasswordEchoOnEdit',
    );
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'TextInput',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'TextInput',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('TextInput', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('TextInput', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('TextInput', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('TextInput', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'TextInput',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('TextInput', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('TextInput', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('TextInput', 'HAlignment', 'AlignHCenter');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('TextInput', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'TextInput',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('TextInput', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('TextInput', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('TextInput', 'RenderType', 'CurveRendering');
  }
  export namespace SelectionMode {
    export const SelectCharacters = createEnumToken(
      'TextInput',
      'SelectionMode',
      'SelectCharacters',
    );
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
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'TextInput',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('TextInput', 'WrapMode', 'Wrap');
  }
}
