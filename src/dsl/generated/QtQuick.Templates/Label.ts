// AUTO-GENERATED — DO NOT EDIT
// Type: Label
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
export interface LabelBuilder {
  id(id: string): LabelBuilder;
  child(obj: QmlObjectBuilder): LabelBuilder;

  activeFocusOnTab(value: boolean): LabelBuilder;
  activeFocusOnTabBind(expr: string): LabelBuilder;
  antialiasing(value: boolean): LabelBuilder;
  antialiasingBind(expr: string): LabelBuilder;
  background(value: ItemBuilder): LabelBuilder;
  backgroundBind(expr: string): LabelBuilder;
  baseUrl(value: QmlUrl): LabelBuilder;
  baseUrlBind(expr: string): LabelBuilder;
  baselineOffset(value: number): LabelBuilder;
  baselineOffsetBind(expr: string): LabelBuilder;
  bottomInset(value: number): LabelBuilder;
  bottomInsetBind(expr: string): LabelBuilder;
  bottomPadding(value: number): LabelBuilder;
  bottomPaddingBind(expr: string): LabelBuilder;
  clip(value: boolean): LabelBuilder;
  clipBind(expr: string): LabelBuilder;
  color(value: QmlColor): LabelBuilder;
  colorBind(expr: string): LabelBuilder;
  containmentMask(value: QtObjectBuilder): LabelBuilder;
  containmentMaskBind(expr: string): LabelBuilder;
  elide(value: QmlValue): LabelBuilder;
  elideBind(expr: string): LabelBuilder;
  enabled(value: boolean): LabelBuilder;
  enabledBind(expr: string): LabelBuilder;
  focus(value: boolean): LabelBuilder;
  focusBind(expr: string): LabelBuilder;
  focusPolicy(value: QmlValue): LabelBuilder;
  focusPolicyBind(expr: string): LabelBuilder;
  font(value: QmlFont): LabelBuilder;
  fontBind(expr: string): LabelBuilder;
  fontSizeMode(value: QmlValue): LabelBuilder;
  fontSizeModeBind(expr: string): LabelBuilder;
  height(value: number): LabelBuilder;
  heightBind(expr: string): LabelBuilder;
  horizontalAlignment(value: QmlValue): LabelBuilder;
  horizontalAlignmentBind(expr: string): LabelBuilder;
  leftInset(value: number): LabelBuilder;
  leftInsetBind(expr: string): LabelBuilder;
  leftPadding(value: number): LabelBuilder;
  leftPaddingBind(expr: string): LabelBuilder;
  lineHeight(value: number): LabelBuilder;
  lineHeightBind(expr: string): LabelBuilder;
  lineHeightMode(value: QmlValue): LabelBuilder;
  lineHeightModeBind(expr: string): LabelBuilder;
  linkColor(value: QmlColor): LabelBuilder;
  linkColorBind(expr: string): LabelBuilder;
  maximumLineCount(value: number): LabelBuilder;
  maximumLineCountBind(expr: string): LabelBuilder;
  minimumPixelSize(value: number): LabelBuilder;
  minimumPixelSizeBind(expr: string): LabelBuilder;
  minimumPointSize(value: number): LabelBuilder;
  minimumPointSizeBind(expr: string): LabelBuilder;
  objectName(value: string): LabelBuilder;
  objectNameBind(expr: string): LabelBuilder;
  opacity(value: number): LabelBuilder;
  opacityBind(expr: string): LabelBuilder;
  padding(value: number): LabelBuilder;
  paddingBind(expr: string): LabelBuilder;
  palette(value: PaletteBuilder): LabelBuilder;
  paletteBind(expr: string): LabelBuilder;
  parent(value: ItemBuilder): LabelBuilder;
  parentBind(expr: string): LabelBuilder;
  renderType(value: QmlValue): LabelBuilder;
  renderTypeBind(expr: string): LabelBuilder;
  renderTypeQuality(value: number): LabelBuilder;
  renderTypeQualityBind(expr: string): LabelBuilder;
  rightInset(value: number): LabelBuilder;
  rightInsetBind(expr: string): LabelBuilder;
  rightPadding(value: number): LabelBuilder;
  rightPaddingBind(expr: string): LabelBuilder;
  rotation(value: number): LabelBuilder;
  rotationBind(expr: string): LabelBuilder;
  scale(value: number): LabelBuilder;
  scaleBind(expr: string): LabelBuilder;
  smooth(value: boolean): LabelBuilder;
  smoothBind(expr: string): LabelBuilder;
  state(value: string): LabelBuilder;
  stateBind(expr: string): LabelBuilder;
  style(value: QmlValue): LabelBuilder;
  styleBind(expr: string): LabelBuilder;
  styleColor(value: QmlColor): LabelBuilder;
  styleColorBind(expr: string): LabelBuilder;
  text(value: string): LabelBuilder;
  textBind(expr: string): LabelBuilder;
  textFormat(value: QmlValue): LabelBuilder;
  textFormatBind(expr: string): LabelBuilder;
  topInset(value: number): LabelBuilder;
  topInsetBind(expr: string): LabelBuilder;
  topPadding(value: number): LabelBuilder;
  topPaddingBind(expr: string): LabelBuilder;
  transformOrigin(value: QmlValue): LabelBuilder;
  transformOriginBind(expr: string): LabelBuilder;
  verticalAlignment(value: QmlValue): LabelBuilder;
  verticalAlignmentBind(expr: string): LabelBuilder;
  visible(value: boolean): LabelBuilder;
  visibleBind(expr: string): LabelBuilder;
  width(value: number): LabelBuilder;
  widthBind(expr: string): LabelBuilder;
  wrapMode(value: QmlValue): LabelBuilder;
  wrapModeBind(expr: string): LabelBuilder;
  x(value: number): LabelBuilder;
  xBind(expr: string): LabelBuilder;
  y(value: number): LabelBuilder;
  yBind(expr: string): LabelBuilder;
  z(value: number): LabelBuilder;
  zBind(expr: string): LabelBuilder;
  onActiveFocusChanged(handler: (arg0: boolean) => void): LabelBuilder;
  onActiveFocusOnTabChanged(handler: (arg0: boolean) => void): LabelBuilder;
  onAntialiasingChanged(handler: (arg0: boolean) => void): LabelBuilder;
  onBackgroundChanged(handler: () => void): LabelBuilder;
  onBaseUrlChanged(handler: () => void): LabelBuilder;
  onBaselineOffsetChanged(handler: (arg0: number) => void): LabelBuilder;
  onBottomInsetChanged(handler: () => void): LabelBuilder;
  onBottomPaddingChanged(handler: () => void): LabelBuilder;
  onChildrenChanged(handler: () => void): LabelBuilder;
  onChildrenRectChanged(handler: (arg0: QmlRect) => void): LabelBuilder;
  onClipChanged(handler: (arg0: boolean) => void): LabelBuilder;
  onColorChanged(handler: () => void): LabelBuilder;
  onContainmentMaskChanged(handler: () => void): LabelBuilder;
  onContentHeightChanged(handler: (contentHeight: number) => void): LabelBuilder;
  onContentSizeChanged(handler: () => void): LabelBuilder;
  onContentWidthChanged(handler: (contentWidth: number) => void): LabelBuilder;
  onEffectiveHorizontalAlignmentChanged(handler: () => void): LabelBuilder;
  onElideModeChanged(handler: (mode: QmlValue) => void): LabelBuilder;
  onEnabledChanged(handler: () => void): LabelBuilder;
  onFocusChanged(handler: (arg0: boolean) => void): LabelBuilder;
  onFocusPolicyChanged(handler: (arg0: QmlValue) => void): LabelBuilder;
  onFontChanged(handler: () => void): LabelBuilder;
  onFontInfoChanged(handler: () => void): LabelBuilder;
  onFontSizeModeChanged(handler: () => void): LabelBuilder;
  onHeightChanged(handler: () => void): LabelBuilder;
  onHorizontalAlignmentChanged(handler: (alignment: QmlValue) => void): LabelBuilder;
  onImplicitBackgroundHeightChanged(handler: () => void): LabelBuilder;
  onImplicitBackgroundWidthChanged(handler: () => void): LabelBuilder;
  onImplicitHeightChanged(handler: () => void): LabelBuilder;
  onImplicitWidthChanged(handler: () => void): LabelBuilder;
  onLeftInsetChanged(handler: () => void): LabelBuilder;
  onLeftPaddingChanged(handler: () => void): LabelBuilder;
  onLineCountChanged(handler: () => void): LabelBuilder;
  onLineHeightChanged(handler: (lineHeight: number) => void): LabelBuilder;
  onLineHeightModeChanged(handler: (mode: QmlValue) => void): LabelBuilder;
  onLineLaidOut(handler: (line: QmlValue) => void): LabelBuilder;
  onLinkActivated(handler: (link: string) => void): LabelBuilder;
  onLinkColorChanged(handler: () => void): LabelBuilder;
  onLinkHovered(handler: (link: string) => void): LabelBuilder;
  onMaximumLineCountChanged(handler: () => void): LabelBuilder;
  onMinimumPixelSizeChanged(handler: () => void): LabelBuilder;
  onMinimumPointSizeChanged(handler: () => void): LabelBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): LabelBuilder;
  onOpacityChanged(handler: () => void): LabelBuilder;
  onPaddingChanged(handler: () => void): LabelBuilder;
  onPaletteChanged(handler: () => void): LabelBuilder;
  onPaletteCreated(handler: () => void): LabelBuilder;
  onParentChanged(handler: (arg0: ItemBuilder) => void): LabelBuilder;
  onRenderTypeChanged(handler: () => void): LabelBuilder;
  onRenderTypeQualityChanged(handler: () => void): LabelBuilder;
  onRightInsetChanged(handler: () => void): LabelBuilder;
  onRightPaddingChanged(handler: () => void): LabelBuilder;
  onRotationChanged(handler: () => void): LabelBuilder;
  onScaleChanged(handler: () => void): LabelBuilder;
  onSmoothChanged(handler: (arg0: boolean) => void): LabelBuilder;
  onStateChanged(handler: (arg0: string) => void): LabelBuilder;
  onStyleChanged(handler: (style: QmlValue) => void): LabelBuilder;
  onStyleColorChanged(handler: () => void): LabelBuilder;
  onTextChanged(handler: (text: string) => void): LabelBuilder;
  onTextFormatChanged(handler: (textFormat: QmlValue) => void): LabelBuilder;
  onTopInsetChanged(handler: () => void): LabelBuilder;
  onTopPaddingChanged(handler: () => void): LabelBuilder;
  onTransformOriginChanged(handler: (arg0: QmlValue) => void): LabelBuilder;
  onTruncatedChanged(handler: () => void): LabelBuilder;
  onVerticalAlignmentChanged(handler: (alignment: QmlValue) => void): LabelBuilder;
  onVisibleChanged(handler: () => void): LabelBuilder;
  onVisibleChildrenChanged(handler: () => void): LabelBuilder;
  onWidthChanged(handler: () => void): LabelBuilder;
  onWindowChanged(handler: (window: WindowBuilder) => void): LabelBuilder;
  onWrapModeChanged(handler: () => void): LabelBuilder;
  onXChanged(handler: () => void): LabelBuilder;
  onYChanged(handler: () => void): LabelBuilder;
  onZChanged(handler: () => void): LabelBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): LabelBuilder;
  layer(setup: (b: LayerBuilder) => void): LabelBuilder;
  actionGroup(setup: (b: ActionGroupAttachedBuilder) => void): LabelBuilder;
  applicationWindow(setup: (b: ApplicationWindowAttachedBuilder) => void): LabelBuilder;
  buttonGroup(setup: (b: ButtonGroupAttachedBuilder) => void): LabelBuilder;
  contextMenu(setup: (b: ContextMenuAttachedBuilder) => void): LabelBuilder;
  dialogButtonBox(setup: (b: DialogButtonBoxAttachedBuilder) => void): LabelBuilder;
  overlay(setup: (b: OverlayAttachedBuilder) => void): LabelBuilder;
  scrollBar(setup: (b: ScrollBarAttachedBuilder) => void): LabelBuilder;
  scrollIndicator(setup: (b: ScrollIndicatorAttachedBuilder) => void): LabelBuilder;
  selectionRectangle(setup: (b: SelectionRectangleAttachedBuilder) => void): LabelBuilder;
  splitHandle(setup: (b: SplitHandleAttachedBuilder) => void): LabelBuilder;
  splitView(setup: (b: SplitViewAttachedBuilder) => void): LabelBuilder;
  stackView(setup: (b: StackViewAttachedBuilder) => void): LabelBuilder;
  swipeDelegate(setup: (b: SwipeDelegateAttachedBuilder) => void): LabelBuilder;
  swipeView(setup: (b: SwipeViewAttachedBuilder) => void): LabelBuilder;
  tabBar(setup: (b: TabBarAttachedBuilder) => void): LabelBuilder;
  textArea(setup: (b: TextAreaAttachedBuilder) => void): LabelBuilder;
  toolTip(setup: (b: ToolTipAttachedBuilder) => void): LabelBuilder;
  tumbler(setup: (b: TumblerAttachedBuilder) => void): LabelBuilder;
}

export function Label(): LabelBuilder {
  return new DslBuilderImpl('Label') as unknown as LabelBuilder;
}

export namespace Label {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'Label',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'Label',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('Label', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('Label', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('Label', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('Label', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken('Label', 'Flags', 'ItemObservesViewport');
  }
  export namespace FontSizeMode {
    export const FixedSize = createEnumToken('Label', 'FontSizeMode', 'FixedSize');
    export const HorizontalFit = createEnumToken('Label', 'FontSizeMode', 'HorizontalFit');
    export const VerticalFit = createEnumToken('Label', 'FontSizeMode', 'VerticalFit');
    export const Fit = createEnumToken('Label', 'FontSizeMode', 'Fit');
  }
  export namespace HAlignment {
    export const AlignLeft = createEnumToken('Label', 'HAlignment', 'AlignLeft');
    export const AlignRight = createEnumToken('Label', 'HAlignment', 'AlignRight');
    export const AlignHCenter = createEnumToken('Label', 'HAlignment', 'AlignHCenter');
    export const AlignJustify = createEnumToken('Label', 'HAlignment', 'AlignJustify');
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'Label',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'Label',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('Label', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'Label',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace LineHeightMode {
    export const ProportionalHeight = createEnumToken(
      'Label',
      'LineHeightMode',
      'ProportionalHeight',
    );
    export const FixedHeight = createEnumToken('Label', 'LineHeightMode', 'FixedHeight');
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('Label', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('Label', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('Label', 'RenderType', 'CurveRendering');
  }
  export namespace RenderTypeQuality {
    export const DefaultRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'DefaultRenderTypeQuality',
    );
    export const LowRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'LowRenderTypeQuality',
    );
    export const NormalRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'NormalRenderTypeQuality',
    );
    export const HighRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'HighRenderTypeQuality',
    );
    export const VeryHighRenderTypeQuality = createEnumToken(
      'Label',
      'RenderTypeQuality',
      'VeryHighRenderTypeQuality',
    );
  }
  export namespace TextElideMode {
    export const ElideLeft = createEnumToken('Label', 'TextElideMode', 'ElideLeft');
    export const ElideRight = createEnumToken('Label', 'TextElideMode', 'ElideRight');
    export const ElideMiddle = createEnumToken('Label', 'TextElideMode', 'ElideMiddle');
    export const ElideNone = createEnumToken('Label', 'TextElideMode', 'ElideNone');
  }
  export namespace TextFormat {
    export const PlainText = createEnumToken('Label', 'TextFormat', 'PlainText');
    export const RichText = createEnumToken('Label', 'TextFormat', 'RichText');
    export const MarkdownText = createEnumToken('Label', 'TextFormat', 'MarkdownText');
    export const AutoText = createEnumToken('Label', 'TextFormat', 'AutoText');
    export const StyledText = createEnumToken('Label', 'TextFormat', 'StyledText');
  }
  export namespace TextStyle {
    export const Normal = createEnumToken('Label', 'TextStyle', 'Normal');
    export const Outline = createEnumToken('Label', 'TextStyle', 'Outline');
    export const Raised = createEnumToken('Label', 'TextStyle', 'Raised');
    export const Sunken = createEnumToken('Label', 'TextStyle', 'Sunken');
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('Label', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('Label', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('Label', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('Label', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('Label', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('Label', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('Label', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('Label', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('Label', 'TransformOrigin', 'BottomRight');
  }
  export namespace VAlignment {
    export const AlignTop = createEnumToken('Label', 'VAlignment', 'AlignTop');
    export const AlignBottom = createEnumToken('Label', 'VAlignment', 'AlignBottom');
    export const AlignVCenter = createEnumToken('Label', 'VAlignment', 'AlignVCenter');
  }
  export namespace WrapMode {
    export const NoWrap = createEnumToken('Label', 'WrapMode', 'NoWrap');
    export const WordWrap = createEnumToken('Label', 'WrapMode', 'WordWrap');
    export const WrapAnywhere = createEnumToken('Label', 'WrapMode', 'WrapAnywhere');
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken(
      'Label',
      'WrapMode',
      'WrapAtWordBoundaryOrAnywhere',
    );
    export const Wrap = createEnumToken('Label', 'WrapMode', 'Wrap');
  }
}
