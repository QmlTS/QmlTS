// AUTO-GENERATED — DO NOT EDIT
// Type: Text
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlColor, QmlEnumToken, QmlFont, QmlObjectBuilder, QmlUrl, TypeMetadata } from '../../runtime/index.js';
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
  elide(value: QmlEnumToken): TextBuilder;
  elideBind(expr: string): TextBuilder;
  enabled(value: boolean): TextBuilder;
  enabledBind(expr: string): TextBuilder;
  focus(value: boolean): TextBuilder;
  focusBind(expr: string): TextBuilder;
  focusPolicy(value: QmlEnumToken): TextBuilder;
  focusPolicyBind(expr: string): TextBuilder;
  font(value: QmlFont): TextBuilder;
  fontBind(expr: string): TextBuilder;
  fontSizeMode(value: QmlEnumToken): TextBuilder;
  fontSizeModeBind(expr: string): TextBuilder;
  height(value: number): TextBuilder;
  heightBind(expr: string): TextBuilder;
  horizontalAlignment(value: QmlEnumToken): TextBuilder;
  horizontalAlignmentBind(expr: string): TextBuilder;
  leftPadding(value: number): TextBuilder;
  leftPaddingBind(expr: string): TextBuilder;
  lineHeight(value: number): TextBuilder;
  lineHeightBind(expr: string): TextBuilder;
  lineHeightMode(value: QmlEnumToken): TextBuilder;
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
  renderType(value: QmlEnumToken): TextBuilder;
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
  style(value: QmlEnumToken): TextBuilder;
  styleBind(expr: string): TextBuilder;
  styleColor(value: QmlColor): TextBuilder;
  styleColorBind(expr: string): TextBuilder;
  text(value: string): TextBuilder;
  textBind(expr: string): TextBuilder;
  textFormat(value: QmlEnumToken): TextBuilder;
  textFormatBind(expr: string): TextBuilder;
  topPadding(value: number): TextBuilder;
  topPaddingBind(expr: string): TextBuilder;
  transformOrigin(value: QmlEnumToken): TextBuilder;
  transformOriginBind(expr: string): TextBuilder;
  verticalAlignment(value: QmlEnumToken): TextBuilder;
  verticalAlignmentBind(expr: string): TextBuilder;
  visible(value: boolean): TextBuilder;
  visibleBind(expr: string): TextBuilder;
  width(value: number): TextBuilder;
  widthBind(expr: string): TextBuilder;
  wrapMode(value: QmlEnumToken): TextBuilder;
  wrapModeBind(expr: string): TextBuilder;
  x(value: number): TextBuilder;
  xBind(expr: string): TextBuilder;
  y(value: number): TextBuilder;
  yBind(expr: string): TextBuilder;
  z(value: number): TextBuilder;
  zBind(expr: string): TextBuilder;
  onActiveFocusChanged(body: string): TextBuilder;
  onActiveFocusOnTabChanged(body: string): TextBuilder;
  onAntialiasingChanged(body: string): TextBuilder;
  onBaseUrlChanged(body: string): TextBuilder;
  onBaselineOffsetChanged(body: string): TextBuilder;
  onBottomPaddingChanged(body: string): TextBuilder;
  onChildrenChanged(body: string): TextBuilder;
  onChildrenRectChanged(body: string): TextBuilder;
  onClipChanged(body: string): TextBuilder;
  onColorChanged(body: string): TextBuilder;
  onContainmentMaskChanged(body: string): TextBuilder;
  onContentHeightChanged(body: string): TextBuilder;
  onContentSizeChanged(body: string): TextBuilder;
  onContentWidthChanged(body: string): TextBuilder;
  onEffectiveHorizontalAlignmentChanged(body: string): TextBuilder;
  onElideModeChanged(body: string): TextBuilder;
  onEnabledChanged(body: string): TextBuilder;
  onFocusChanged(body: string): TextBuilder;
  onFocusPolicyChanged(body: string): TextBuilder;
  onFontChanged(body: string): TextBuilder;
  onFontInfoChanged(body: string): TextBuilder;
  onFontSizeModeChanged(body: string): TextBuilder;
  onHeightChanged(body: string): TextBuilder;
  onHorizontalAlignmentChanged(body: string): TextBuilder;
  onImplicitHeightChanged(body: string): TextBuilder;
  onImplicitWidthChanged(body: string): TextBuilder;
  onLeftPaddingChanged(body: string): TextBuilder;
  onLineCountChanged(body: string): TextBuilder;
  onLineHeightChanged(body: string): TextBuilder;
  onLineHeightModeChanged(body: string): TextBuilder;
  onLineLaidOut(body: string): TextBuilder;
  onLinkActivated(body: string): TextBuilder;
  onLinkColorChanged(body: string): TextBuilder;
  onLinkHovered(body: string): TextBuilder;
  onMaximumLineCountChanged(body: string): TextBuilder;
  onMinimumPixelSizeChanged(body: string): TextBuilder;
  onMinimumPointSizeChanged(body: string): TextBuilder;
  onObjectNameChanged(body: string): TextBuilder;
  onOpacityChanged(body: string): TextBuilder;
  onPaddingChanged(body: string): TextBuilder;
  onPaletteChanged(body: string): TextBuilder;
  onPaletteCreated(body: string): TextBuilder;
  onParentChanged(body: string): TextBuilder;
  onRenderTypeChanged(body: string): TextBuilder;
  onRenderTypeQualityChanged(body: string): TextBuilder;
  onRightPaddingChanged(body: string): TextBuilder;
  onRotationChanged(body: string): TextBuilder;
  onScaleChanged(body: string): TextBuilder;
  onSmoothChanged(body: string): TextBuilder;
  onStateChanged(body: string): TextBuilder;
  onStyleChanged(body: string): TextBuilder;
  onStyleColorChanged(body: string): TextBuilder;
  onTextChanged(body: string): TextBuilder;
  onTextFormatChanged(body: string): TextBuilder;
  onTopPaddingChanged(body: string): TextBuilder;
  onTransformOriginChanged(body: string): TextBuilder;
  onTruncatedChanged(body: string): TextBuilder;
  onVerticalAlignmentChanged(body: string): TextBuilder;
  onVisibleChanged(body: string): TextBuilder;
  onVisibleChildrenChanged(body: string): TextBuilder;
  onWidthChanged(body: string): TextBuilder;
  onWindowChanged(body: string): TextBuilder;
  onWrapModeChanged(body: string): TextBuilder;
  onXChanged(body: string): TextBuilder;
  onYChanged(body: string): TextBuilder;
  onZChanged(body: string): TextBuilder;
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

const TEXT_META: TypeMetadata = {
  typeName: 'Text',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baseUrl', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'elide', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'fontSizeMode', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'horizontalAlignment', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'lineHeight', hasValue: true, hasBinding: true },
    { name: 'lineHeightMode', hasValue: true, hasBinding: true },
    { name: 'linkColor', hasValue: true, hasBinding: true },
    { name: 'maximumLineCount', hasValue: true, hasBinding: true },
    { name: 'minimumPixelSize', hasValue: true, hasBinding: true },
    { name: 'minimumPointSize', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'padding', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderType', hasValue: true, hasBinding: true },
    { name: 'renderTypeQuality', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'style', hasValue: true, hasBinding: true },
    { name: 'styleColor', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'textFormat', hasValue: true, hasBinding: true },
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
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaseUrlChanged', paramCount: 0 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onBottomPaddingChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onContentHeightChanged', paramCount: 1 },
    { handlerName: 'onContentSizeChanged', paramCount: 0 },
    { handlerName: 'onContentWidthChanged', paramCount: 1 },
    { handlerName: 'onEffectiveHorizontalAlignmentChanged', paramCount: 0 },
    { handlerName: 'onElideModeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 1 },
    { handlerName: 'onFontInfoChanged', paramCount: 0 },
    { handlerName: 'onFontSizeModeChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAlignmentChanged', paramCount: 1 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLeftPaddingChanged', paramCount: 0 },
    { handlerName: 'onLineCountChanged', paramCount: 0 },
    { handlerName: 'onLineHeightChanged', paramCount: 1 },
    { handlerName: 'onLineHeightModeChanged', paramCount: 1 },
    { handlerName: 'onLineLaidOut', paramCount: 1 },
    { handlerName: 'onLinkActivated', paramCount: 1 },
    { handlerName: 'onLinkColorChanged', paramCount: 0 },
    { handlerName: 'onLinkHovered', paramCount: 1 },
    { handlerName: 'onMaximumLineCountChanged', paramCount: 0 },
    { handlerName: 'onMinimumPixelSizeChanged', paramCount: 0 },
    { handlerName: 'onMinimumPointSizeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRenderTypeChanged', paramCount: 0 },
    { handlerName: 'onRenderTypeQualityChanged', paramCount: 0 },
    { handlerName: 'onRightPaddingChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onStyleChanged', paramCount: 1 },
    { handlerName: 'onStyleColorChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 1 },
    { handlerName: 'onTextFormatChanged', paramCount: 1 },
    { handlerName: 'onTopPaddingChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onTruncatedChanged', paramCount: 0 },
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

export function Text(): TextBuilder {
  return createFluentBuilder('Text', TEXT_META) as unknown as TextBuilder;
}

export namespace Text {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken('Text', 'Flags', 'ItemClipsChildrenToShape');
    export const ItemAcceptsInputMethod = createEnumToken('Text', 'Flags', 'ItemAcceptsInputMethod');
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
    export const ItemChildAddedChange = createEnumToken('Text', 'ItemChange', 'ItemChildAddedChange');
    export const ItemChildRemovedChange = createEnumToken('Text', 'ItemChange', 'ItemChildRemovedChange');
    export const ItemSceneChange = createEnumToken('Text', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken('Text', 'ItemChange', 'ItemVisibleHasChanged');
    export const ItemParentHasChanged = createEnumToken('Text', 'ItemChange', 'ItemParentHasChanged');
    export const ItemOpacityHasChanged = createEnumToken('Text', 'ItemChange', 'ItemOpacityHasChanged');
    export const ItemActiveFocusHasChanged = createEnumToken('Text', 'ItemChange', 'ItemActiveFocusHasChanged');
    export const ItemRotationHasChanged = createEnumToken('Text', 'ItemChange', 'ItemRotationHasChanged');
    export const ItemAntialiasingHasChanged = createEnumToken('Text', 'ItemChange', 'ItemAntialiasingHasChanged');
    export const ItemDevicePixelRatioHasChanged = createEnumToken('Text', 'ItemChange', 'ItemDevicePixelRatioHasChanged');
    export const ItemEnabledHasChanged = createEnumToken('Text', 'ItemChange', 'ItemEnabledHasChanged');
    export const ItemScaleHasChanged = createEnumToken('Text', 'ItemChange', 'ItemScaleHasChanged');
    export const ItemTransformHasChanged = createEnumToken('Text', 'ItemChange', 'ItemTransformHasChanged');
  }
  export namespace LineHeightMode {
    export const ProportionalHeight = createEnumToken('Text', 'LineHeightMode', 'ProportionalHeight');
    export const FixedHeight = createEnumToken('Text', 'LineHeightMode', 'FixedHeight');
  }
  export namespace RenderType {
    export const QtRendering = createEnumToken('Text', 'RenderType', 'QtRendering');
    export const NativeRendering = createEnumToken('Text', 'RenderType', 'NativeRendering');
    export const CurveRendering = createEnumToken('Text', 'RenderType', 'CurveRendering');
  }
  export namespace RenderTypeQuality {
    export const DefaultRenderTypeQuality = createEnumToken('Text', 'RenderTypeQuality', 'DefaultRenderTypeQuality');
    export const LowRenderTypeQuality = createEnumToken('Text', 'RenderTypeQuality', 'LowRenderTypeQuality');
    export const NormalRenderTypeQuality = createEnumToken('Text', 'RenderTypeQuality', 'NormalRenderTypeQuality');
    export const HighRenderTypeQuality = createEnumToken('Text', 'RenderTypeQuality', 'HighRenderTypeQuality');
    export const VeryHighRenderTypeQuality = createEnumToken('Text', 'RenderTypeQuality', 'VeryHighRenderTypeQuality');
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
    export const WrapAtWordBoundaryOrAnywhere = createEnumToken('Text', 'WrapMode', 'WrapAtWordBoundaryOrAnywhere');
    export const Wrap = createEnumToken('Text', 'WrapMode', 'Wrap');
  }
}
