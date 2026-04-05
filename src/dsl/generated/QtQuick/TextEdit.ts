// AUTO-GENERATED — DO NOT EDIT
// Type: TextEdit
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
export interface TextEditBuilder {
  id(id: string): TextEditBuilder;
  child(obj: QmlObjectBuilder): TextEditBuilder;

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
  focusPolicy(value: QmlValue): TextEditBuilder;
  focusPolicyBind(expr: string): TextEditBuilder;
  font(value: QmlFont): TextEditBuilder;
  fontBind(expr: string): TextEditBuilder;
  height(value: number): TextEditBuilder;
  heightBind(expr: string): TextEditBuilder;
  horizontalAlignment(value: QmlValue): TextEditBuilder;
  horizontalAlignmentBind(expr: string): TextEditBuilder;
  inputMethodHints(value: QmlValue): TextEditBuilder;
  inputMethodHintsBind(expr: string): TextEditBuilder;
  leftPadding(value: number): TextEditBuilder;
  leftPaddingBind(expr: string): TextEditBuilder;
  mouseSelectionMode(value: QmlValue): TextEditBuilder;
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
  renderType(value: QmlValue): TextEditBuilder;
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
  textFormat(value: QmlValue): TextEditBuilder;
  textFormatBind(expr: string): TextEditBuilder;
  textMargin(value: number): TextEditBuilder;
  textMarginBind(expr: string): TextEditBuilder;
  topPadding(value: number): TextEditBuilder;
  topPaddingBind(expr: string): TextEditBuilder;
  transformOrigin(value: QmlValue): TextEditBuilder;
  transformOriginBind(expr: string): TextEditBuilder;
  verticalAlignment(value: QmlValue): TextEditBuilder;
  verticalAlignmentBind(expr: string): TextEditBuilder;
  visible(value: boolean): TextEditBuilder;
  visibleBind(expr: string): TextEditBuilder;
  width(value: number): TextEditBuilder;
  widthBind(expr: string): TextEditBuilder;
  wrapMode(value: QmlValue): TextEditBuilder;
  wrapModeBind(expr: string): TextEditBuilder;
  x(value: number): TextEditBuilder;
  xBind(expr: string): TextEditBuilder;
  y(value: number): TextEditBuilder;
  yBind(expr: string): TextEditBuilder;
  z(value: number): TextEditBuilder;
  zBind(expr: string): TextEditBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TextEditBuilder;
  onActiveFocusOnPressChanged(handler: (activeFocusOnPressed: boolean) => void): TextEditBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TextEditBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TextEditBuilder;
  onBaseUrlChanged(handler: () => void): TextEditBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): TextEditBuilder;
  onBottomPaddingChanged(handler: () => void): TextEditBuilder;
  onCanPasteChanged(handler: () => void): TextEditBuilder;
  onCanRedoChanged(handler: () => void): TextEditBuilder;
  onCanUndoChanged(handler: () => void): TextEditBuilder;
  onChildrenChanged(handler: () => void): TextEditBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TextEditBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TextEditBuilder;
  onColorChanged(handler: (color: QmlColor) => void): TextEditBuilder;
  onContainmentMaskChanged(handler: () => void): TextEditBuilder;
  onContentSizeChanged(handler: () => void): TextEditBuilder;
  onCursorDelegateChanged(handler: () => void): TextEditBuilder;
  onCursorPositionChanged(handler: () => void): TextEditBuilder;
  onCursorRectangleChanged(handler: () => void): TextEditBuilder;
  onCursorVisibleChanged(handler: (isCursorVisible: boolean) => void): TextEditBuilder;
  onEditingFinished(handler: () => void): TextEditBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: () => void): TextEditBuilder;
  onEnabledChanged(handler: () => void): TextEditBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TextEditBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TextEditBuilder;
  onFontChanged(handler: (font: QmlFont) => void): TextEditBuilder;
  onHeightChanged(handler: () => void): TextEditBuilder;
  onHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): TextEditBuilder;
  onImplicitHeightChanged(handler: () => void): TextEditBuilder;
  onImplicitWidthChanged(handler: () => void): TextEditBuilder;
  onInputMethodComposingChanged(handler: () => void): TextEditBuilder;
  onInputMethodHintsChanged(handler: () => void): TextEditBuilder;
  onLeftPaddingChanged(handler: () => void): TextEditBuilder;
  onLineCountChanged(handler: () => void): TextEditBuilder;
  onLinkActivated(handler: (link: string) => void): TextEditBuilder;
  onLinkHovered(handler: (link: string) => void): TextEditBuilder;
  onMouseSelectionModeChanged(handler: (mode: QmlValue) => void): TextEditBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TextEditBuilder;
  onOpacityChanged(handler: () => void): TextEditBuilder;
  onOverwriteModeChanged(handler: (overwriteMode: boolean) => void): TextEditBuilder;
  onPaddingChanged(handler: () => void): TextEditBuilder;
  onPaletteChanged(handler: () => void): TextEditBuilder;
  onPaletteCreated(handler: () => void): TextEditBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TextEditBuilder;
  onPersistentSelectionChanged(handler: (isPersistentSelection: boolean) => void): TextEditBuilder;
  onPreeditTextChanged(handler: () => void): TextEditBuilder;
  onReadOnlyChanged(handler: (isReadOnly: boolean) => void): TextEditBuilder;
  onRenderTypeChanged(handler: () => void): TextEditBuilder;
  onRightPaddingChanged(handler: () => void): TextEditBuilder;
  onRotationChanged(handler: () => void): TextEditBuilder;
  onScaleChanged(handler: () => void): TextEditBuilder;
  onSelectByKeyboardChanged(handler: (selectByKeyboard: boolean) => void): TextEditBuilder;
  onSelectByMouseChanged(handler: (selectByMouse: boolean) => void): TextEditBuilder;
  onSelectedTextChanged(handler: () => void): TextEditBuilder;
  onSelectedTextColorChanged(handler: (color: QmlColor) => void): TextEditBuilder;
  onSelectionColorChanged(handler: (color: QmlColor) => void): TextEditBuilder;
  onSelectionEndChanged(handler: () => void): TextEditBuilder;
  onSelectionStartChanged(handler: () => void): TextEditBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TextEditBuilder;
  onStateChanged(handler: (arg0: string) => void): TextEditBuilder;
  onTabStopDistanceChanged(handler: (distance: number) => void): TextEditBuilder;
  onTextChanged(handler: () => void): TextEditBuilder;
  onTextEdited(handler: () => void): TextEditBuilder;
  onTextFormatChanged(handler: (textFormat: QmlValue) => void): TextEditBuilder;
  onTextMarginChanged(handler: (textMargin: number) => void): TextEditBuilder;
  onTopPaddingChanged(handler: () => void): TextEditBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TextEditBuilder;
  onVerticalAlignmentChanged(handler: (alignment: QmlValue) => void): TextEditBuilder;
  onVisibleChanged(handler: () => void): TextEditBuilder;
  onVisibleChildrenChanged(handler: () => void): TextEditBuilder;
  onWidthChanged(handler: () => void): TextEditBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TextEditBuilder;
  onWrapModeChanged(handler: () => void): TextEditBuilder;
  onXChanged(handler: () => void): TextEditBuilder;
  onYChanged(handler: () => void): TextEditBuilder;
  onZChanged(handler: () => void): TextEditBuilder;
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

export function TextEdit(): TextEditBuilder {
  return new DslBuilderImpl('TextEdit') as unknown as TextEditBuilder;
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
