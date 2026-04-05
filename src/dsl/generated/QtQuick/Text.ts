// AUTO-GENERATED — DO NOT EDIT
// Type: Text
// Generated from Qt 6.11.0

import type {
  QmlColor,
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
export interface TextBuilder {
  id(id: string): TextBuilder;
  child(obj: QmlObjectBuilder): TextBuilder;

  activeFocusOnTab(value: boolean): TextBuilder;
  activeFocusOnTabBind(expr: string): TextBuilder;
  antialiasing(value: boolean): TextBuilder;
  antialiasingBind(expr: string): TextBuilder;
  baseUrl(value: QmlUrl): TextBuilder;
  baseUrlBind(expr: string): TextBuilder;
  baselineOffset(value: number): TextBuilder;
  baselineOffsetBind(expr: string): TextBuilder;
  bottomPadding(value: number): TextBuilder;
  bottomPaddingBind(expr: string): TextBuilder;
  clip(value: boolean): TextBuilder;
  clipBind(expr: string): TextBuilder;
  color(value: QmlColor): TextBuilder;
  colorBind(expr: string): TextBuilder;
  containmentMask(value: QtObjectBuilder): TextBuilder;
  containmentMaskBind(expr: string): TextBuilder;
  elide(value: QmlValue): TextBuilder;
  elideBind(expr: string): TextBuilder;
  enabled(value: boolean): TextBuilder;
  enabledBind(expr: string): TextBuilder;
  focus(value: boolean): TextBuilder;
  focusBind(expr: string): TextBuilder;
  focusPolicy(value: QmlValue): TextBuilder;
  focusPolicyBind(expr: string): TextBuilder;
  font(value: QmlFont): TextBuilder;
  fontBind(expr: string): TextBuilder;
  fontSizeMode(value: QmlValue): TextBuilder;
  fontSizeModeBind(expr: string): TextBuilder;
  height(value: number): TextBuilder;
  heightBind(expr: string): TextBuilder;
  horizontalAlignment(value: QmlValue): TextBuilder;
  horizontalAlignmentBind(expr: string): TextBuilder;
  leftPadding(value: number): TextBuilder;
  leftPaddingBind(expr: string): TextBuilder;
  lineHeight(value: number): TextBuilder;
  lineHeightBind(expr: string): TextBuilder;
  lineHeightMode(value: QmlValue): TextBuilder;
  lineHeightModeBind(expr: string): TextBuilder;
  linkColor(value: QmlColor): TextBuilder;
  linkColorBind(expr: string): TextBuilder;
  maximumLineCount(value: number): TextBuilder;
  maximumLineCountBind(expr: string): TextBuilder;
  minimumPixelSize(value: number): TextBuilder;
  minimumPixelSizeBind(expr: string): TextBuilder;
  minimumPointSize(value: number): TextBuilder;
  minimumPointSizeBind(expr: string): TextBuilder;
  objectName(value: string): TextBuilder;
  objectNameBind(expr: string): TextBuilder;
  opacity(value: number): TextBuilder;
  opacityBind(expr: string): TextBuilder;
  padding(value: number): TextBuilder;
  paddingBind(expr: string): TextBuilder;
  palette(value: PaletteBuilder): TextBuilder;
  paletteBind(expr: string): TextBuilder;
  parent(value: ItemBuilder): TextBuilder;
  parentBind(expr: string): TextBuilder;
  renderType(value: QmlValue): TextBuilder;
  renderTypeBind(expr: string): TextBuilder;
  renderTypeQuality(value: number): TextBuilder;
  renderTypeQualityBind(expr: string): TextBuilder;
  rightPadding(value: number): TextBuilder;
  rightPaddingBind(expr: string): TextBuilder;
  rotation(value: number): TextBuilder;
  rotationBind(expr: string): TextBuilder;
  scale(value: number): TextBuilder;
  scaleBind(expr: string): TextBuilder;
  smooth(value: boolean): TextBuilder;
  smoothBind(expr: string): TextBuilder;
  state(value: string): TextBuilder;
  stateBind(expr: string): TextBuilder;
  style(value: QmlValue): TextBuilder;
  styleBind(expr: string): TextBuilder;
  styleColor(value: QmlColor): TextBuilder;
  styleColorBind(expr: string): TextBuilder;
  text(value: string): TextBuilder;
  textBind(expr: string): TextBuilder;
  textFormat(value: QmlValue): TextBuilder;
  textFormatBind(expr: string): TextBuilder;
  topPadding(value: number): TextBuilder;
  topPaddingBind(expr: string): TextBuilder;
  transformOrigin(value: QmlValue): TextBuilder;
  transformOriginBind(expr: string): TextBuilder;
  verticalAlignment(value: QmlValue): TextBuilder;
  verticalAlignmentBind(expr: string): TextBuilder;
  visible(value: boolean): TextBuilder;
  visibleBind(expr: string): TextBuilder;
  width(value: number): TextBuilder;
  widthBind(expr: string): TextBuilder;
  wrapMode(value: QmlValue): TextBuilder;
  wrapModeBind(expr: string): TextBuilder;
  x(value: number): TextBuilder;
  xBind(expr: string): TextBuilder;
  y(value: number): TextBuilder;
  yBind(expr: string): TextBuilder;
  z(value: number): TextBuilder;
  zBind(expr: string): TextBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): TextBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): TextBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): TextBuilder;
  onBaseUrlChanged(handler: () => void): TextBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): TextBuilder;
  onBottomPaddingChanged(handler: () => void): TextBuilder;
  onChildrenChanged(handler: () => void): TextBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): TextBuilder;
  onClipChanged(handler: (arg0: boolean) => void): TextBuilder;
  onColorChanged(handler: () => void): TextBuilder;
  onContainmentMaskChanged(handler: () => void): TextBuilder;
  onContentHeightChanged(handler: (contentHeight: number) => void): TextBuilder;
  onContentSizeChanged(handler: () => void): TextBuilder;
  onContentWidthChanged(handler: (contentWidth: number) => void): TextBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: () => void): TextBuilder;
  onElideModeChanged(handler: (mode: QmlValue) => void): TextBuilder;
  onEnabledChanged(handler: () => void): TextBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): TextBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): TextBuilder;
  onFontChanged(handler: (font: QmlFont) => void): TextBuilder;
  onFontInfoChanged(handler: () => void): TextBuilder;
  onFontSizeModeChanged(handler: () => void): TextBuilder;
  onHeightChanged(handler: () => void): TextBuilder;
  onHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): TextBuilder;
  onImplicitHeightChanged(handler: () => void): TextBuilder;
  onImplicitWidthChanged(handler: () => void): TextBuilder;
  onLeftPaddingChanged(handler: () => void): TextBuilder;
  onLineCountChanged(handler: () => void): TextBuilder;
  onLineHeightChanged(handler: (lineHeight: number) => void): TextBuilder;
  onLineHeightModeChanged(handler: (mode: QmlValue) => void): TextBuilder;
  onLineLaidOut(handler: (line: QmlValue) => void): TextBuilder;
  onLinkActivated(handler: (link: string) => void): TextBuilder;
  onLinkColorChanged(handler: () => void): TextBuilder;
  onLinkHovered(handler: (link: string) => void): TextBuilder;
  onMaximumLineCountChanged(handler: () => void): TextBuilder;
  onMinimumPixelSizeChanged(handler: () => void): TextBuilder;
  onMinimumPointSizeChanged(handler: () => void): TextBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): TextBuilder;
  onOpacityChanged(handler: () => void): TextBuilder;
  onPaddingChanged(handler: () => void): TextBuilder;
  onPaletteChanged(handler: () => void): TextBuilder;
  onPaletteCreated(handler: () => void): TextBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): TextBuilder;
  onRenderTypeChanged(handler: () => void): TextBuilder;
  onRenderTypeQualityChanged(handler: () => void): TextBuilder;
  onRightPaddingChanged(handler: () => void): TextBuilder;
  onRotationChanged(handler: () => void): TextBuilder;
  onScaleChanged(handler: () => void): TextBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): TextBuilder;
  onStateChanged(handler: (arg0: string) => void): TextBuilder;
  onStyleChanged(handler: (style: QmlValue) => void): TextBuilder;
  onStyleColorChanged(handler: () => void): TextBuilder;
  onTextChanged(handler: (text: string) => void): TextBuilder;
  onTextFormatChanged(handler: (textFormat: QmlValue) => void): TextBuilder;
  onTopPaddingChanged(handler: () => void): TextBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): TextBuilder;
  onTruncatedChanged(handler: () => void): TextBuilder;
  onVerticalAlignmentChanged(handler: (alignment: QmlValue) => void): TextBuilder;
  onVisibleChanged(handler: () => void): TextBuilder;
  onVisibleChildrenChanged(handler: () => void): TextBuilder;
  onWidthChanged(handler: () => void): TextBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): TextBuilder;
  onWrapModeChanged(handler: () => void): TextBuilder;
  onXChanged(handler: () => void): TextBuilder;
  onYChanged(handler: () => void): TextBuilder;
  onZChanged(handler: () => void): TextBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): TextBuilder;
  layer(setup: (b: LayerBuilder) => void): TextBuilder;
  accessible(setup: (b: AccessibleAttachedBuilder) => void): TextBuilder;
  drag(setup: (b: DragAttachedBuilder) => void): TextBuilder;
  enterKey(setup: (b: EnterKeyAttachedBuilder) => void): TextBuilder;
  graphicsInfo(setup: (b: GraphicsInfoAttachedBuilder) => void): TextBuilder;
  gridView(setup: (b: GridViewAttachedBuilder) => void): TextBuilder;
  keyNavigation(setup: (b: KeyNavigationAttachedBuilder) => void): TextBuilder;
  keys(setup: (b: KeysAttachedBuilder) => void): TextBuilder;
  layoutMirroring(setup: (b: LayoutMirroringAttachedBuilder) => void): TextBuilder;
  listView(setup: (b: ListViewAttachedBuilder) => void): TextBuilder;
  pathView(setup: (b: PathViewAttachedBuilder) => void): TextBuilder;
  positioner(setup: (b: PositionerAttachedBuilder) => void): TextBuilder;
  safeArea(setup: (b: SafeAreaAttachedBuilder) => void): TextBuilder;
  screen(setup: (b: ScreenAttachedBuilder) => void): TextBuilder;
  tableView(setup: (b: TableViewAttachedBuilder) => void): TextBuilder;
  viewTransition(setup: (b: ViewTransitionAttachedBuilder) => void): TextBuilder;
  window(setup: (b: WindowAttachedBuilder) => void): TextBuilder;
}

export function Text(): TextBuilder {
  return new DslBuilderImpl('Text') as unknown as TextBuilder;
}

export namespace Text {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Text',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Text',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Text', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Text', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Text', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Text', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Text', 'Flags', 'ItemObservesViewport');
  }
  export namespace FontSizeMode {
    export const FixedSize = createEnumToken('Text', 'FontSizeMode', 'FixedSize');
    export const HorizontalFit = createEnumToken('Text', 'FontSizeMode', 'HorizontalFit');
    export const VerticalFit = createEnumToken('Text', 'FontSizeMode', 'VerticalFit');
    export const Fit = createEnumToken('Text', 'FontSizeMode', 'Fit');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('Text', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('Text', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('Text', 'HAlignment', 'AlignHCenter');
    export const AlignJustify = createEnumToken('Text', 'HAlignment', 'AlignJustify');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Text',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Text',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Text', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Text',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Text',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Text',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Text',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Text',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Text',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Text',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Text',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken('Text', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken(
      'Text',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LineHeightMode {
    export const ProportionalHeight = createEnumToken(
      'Text',
      'LineHeightMode',
      'ProportionalHeight',
    );
    export const FixedHeight = createEnumToken('Text', 'LineHeightMode', 'FixedHeight');
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('Text', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('Text', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('Text', 'RenderType', 'CurveRendering');
  }
  export namespace RenderTypeQuality {
    export const DefaultRenderTypeQuality = createEnumToken(
      'Text',
      'RenderTypeQuality',
      'DefaultRenderTypeQuality',
    );
    export const LowRenderTypeQuality = createEnumToken(
      'Text',
      'RenderTypeQuality',
      'LowRenderTypeQuality',
    );
    export const NormalRenderTypeQuality = createEnumToken(
      'Text',
      'RenderTypeQuality',
      'NormalRenderTypeQuality',
    );
    export const HighRenderTypeQuality = createEnumToken(
      'Text',
      'RenderTypeQuality',
      'HighRenderTypeQuality',
    );
    export const VeryHighRenderTypeQuality = createEnumToken(
      'Text',
      'RenderTypeQuality',
      'VeryHighRenderTypeQuality',
    );
  }
  export namespace TextElideMode {
    export const ElideLeft = createEnumToken('Text', 'TextElideMode', 'ElideLeft');
    export const ElideRight = createEnumToken('Text', 'TextElideMode', 'ElideRight');
    export const ElideMiddle = createEnumToken('Text', 'TextElideMode', 'ElideMiddle');
    export const ElideNone = createEnumToken('Text', 'TextElideMode', 'ElideNone');
  }
  export namespace TextFormat {
    export const PlainText = createEnumToken('Text', 'TextFormat', 'PlainText');
    export const RichText = createEnumToken('Text', 'TextFormat', 'RichText');
    export const MarkdownText = createEnumToken('Text', 'TextFormat', 'MarkdownText');
    export const AutoText = createEnumToken('Text', 'TextFormat', 'AutoText');
    export const StyledText = createEnumToken('Text', 'TextFormat', 'StyledText');
  }
  export namespace TextStyle {
    export const Normal = createEnumToken('Text', 'TextStyle', 'Normal');
    export const Outline = createEnumToken('Text', 'TextStyle', 'Outline');
    export const Raised = createEnumToken('Text', 'TextStyle', 'Raised');
    export const Sunken = createEnumToken('Text', 'TextStyle', 'Sunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Text', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Text', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Text', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Text', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Text', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Text', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Text', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Text', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Text', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('Text', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('Text', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('Text', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('Text', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('Text', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('Text', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'Text',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('Text', 'WrapMode', 'Wrap');
  }
}
