// AUTO-GENERATED — DO NOT EDIT
// Type: PdfSelection
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlPoint,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
import type { PdfDocumentBuilder } from './PdfDocument.js';
export interface PdfSelectionBuilder {
  id(id: string): PdfSelectionBuilder;
  child(obj: QmlObjectBuilder): PdfSelectionBuilder;

  activeFocusOnTab(value: boolean): PdfSelectionBuilder;
  activeFocusOnTabBind(expr: string): PdfSelectionBuilder;
  antialiasing(value: boolean): PdfSelectionBuilder;
  antialiasingBind(expr: string): PdfSelectionBuilder;
  baselineOffset(value: number): PdfSelectionBuilder;
  baselineOffsetBind(expr: string): PdfSelectionBuilder;
  clip(value: boolean): PdfSelectionBuilder;
  clipBind(expr: string): PdfSelectionBuilder;
  containmentMask(value: QtObjectBuilder): PdfSelectionBuilder;
  containmentMaskBind(expr: string): PdfSelectionBuilder;
  document(value: PdfDocumentBuilder): PdfSelectionBuilder;
  documentBind(expr: string): PdfSelectionBuilder;
  enabled(value: boolean): PdfSelectionBuilder;
  enabledBind(expr: string): PdfSelectionBuilder;
  focus(value: boolean): PdfSelectionBuilder;
  focusBind(expr: string): PdfSelectionBuilder;
  focusPolicy(value: QmlEnumToken): PdfSelectionBuilder;
  focusPolicyBind(expr: string): PdfSelectionBuilder;
  from(value: QmlPoint): PdfSelectionBuilder;
  fromBind(expr: string): PdfSelectionBuilder;
  height(value: number): PdfSelectionBuilder;
  heightBind(expr: string): PdfSelectionBuilder;
  hold(value: boolean): PdfSelectionBuilder;
  holdBind(expr: string): PdfSelectionBuilder;
  implicitHeight(value: number): PdfSelectionBuilder;
  implicitHeightBind(expr: string): PdfSelectionBuilder;
  implicitWidth(value: number): PdfSelectionBuilder;
  implicitWidthBind(expr: string): PdfSelectionBuilder;
  objectName(value: string): PdfSelectionBuilder;
  objectNameBind(expr: string): PdfSelectionBuilder;
  opacity(value: number): PdfSelectionBuilder;
  opacityBind(expr: string): PdfSelectionBuilder;
  page(value: number): PdfSelectionBuilder;
  pageBind(expr: string): PdfSelectionBuilder;
  palette(value: PaletteBuilder): PdfSelectionBuilder;
  paletteBind(expr: string): PdfSelectionBuilder;
  parent(value: ItemBuilder): PdfSelectionBuilder;
  parentBind(expr: string): PdfSelectionBuilder;
  renderScale(value: number): PdfSelectionBuilder;
  renderScaleBind(expr: string): PdfSelectionBuilder;
  rotation(value: number): PdfSelectionBuilder;
  rotationBind(expr: string): PdfSelectionBuilder;
  scale(value: number): PdfSelectionBuilder;
  scaleBind(expr: string): PdfSelectionBuilder;
  smooth(value: boolean): PdfSelectionBuilder;
  smoothBind(expr: string): PdfSelectionBuilder;
  state(value: string): PdfSelectionBuilder;
  stateBind(expr: string): PdfSelectionBuilder;
  to(value: QmlPoint): PdfSelectionBuilder;
  toBind(expr: string): PdfSelectionBuilder;
  transformOrigin(value: QmlEnumToken): PdfSelectionBuilder;
  transformOriginBind(expr: string): PdfSelectionBuilder;
  visible(value: boolean): PdfSelectionBuilder;
  visibleBind(expr: string): PdfSelectionBuilder;
  width(value: number): PdfSelectionBuilder;
  widthBind(expr: string): PdfSelectionBuilder;
  x(value: number): PdfSelectionBuilder;
  xBind(expr: string): PdfSelectionBuilder;
  y(value: number): PdfSelectionBuilder;
  yBind(expr: string): PdfSelectionBuilder;
  z(value: number): PdfSelectionBuilder;
  zBind(expr: string): PdfSelectionBuilder;
  onActiveFocusChanged(body: string): PdfSelectionBuilder;
  onActiveFocusOnTabChanged(body: string): PdfSelectionBuilder;
  onAntialiasingChanged(body: string): PdfSelectionBuilder;
  onBaselineOffsetChanged(body: string): PdfSelectionBuilder;
  onChildrenChanged(body: string): PdfSelectionBuilder;
  onChildrenRectChanged(body: string): PdfSelectionBuilder;
  onClipChanged(body: string): PdfSelectionBuilder;
  onContainmentMaskChanged(body: string): PdfSelectionBuilder;
  onDocumentChanged(body: string): PdfSelectionBuilder;
  onEnabledChanged(body: string): PdfSelectionBuilder;
  onFocusChanged(body: string): PdfSelectionBuilder;
  onFocusPolicyChanged(body: string): PdfSelectionBuilder;
  onFromChanged(body: string): PdfSelectionBuilder;
  onHeightChanged(body: string): PdfSelectionBuilder;
  onHoldChanged(body: string): PdfSelectionBuilder;
  onImplicitHeightChanged(body: string): PdfSelectionBuilder;
  onImplicitWidthChanged(body: string): PdfSelectionBuilder;
  onObjectNameChanged(body: string): PdfSelectionBuilder;
  onOpacityChanged(body: string): PdfSelectionBuilder;
  onPageChanged(body: string): PdfSelectionBuilder;
  onPaletteChanged(body: string): PdfSelectionBuilder;
  onPaletteCreated(body: string): PdfSelectionBuilder;
  onParentChanged(body: string): PdfSelectionBuilder;
  onRenderScaleChanged(body: string): PdfSelectionBuilder;
  onRotationChanged(body: string): PdfSelectionBuilder;
  onScaleChanged(body: string): PdfSelectionBuilder;
  onSelectedAreaChanged(body: string): PdfSelectionBuilder;
  onSmoothChanged(body: string): PdfSelectionBuilder;
  onStateChanged(body: string): PdfSelectionBuilder;
  onTextChanged(body: string): PdfSelectionBuilder;
  onToChanged(body: string): PdfSelectionBuilder;
  onTransformOriginChanged(body: string): PdfSelectionBuilder;
  onVisibleChanged(body: string): PdfSelectionBuilder;
  onVisibleChildrenChanged(body: string): PdfSelectionBuilder;
  onWidthChanged(body: string): PdfSelectionBuilder;
  onWindowChanged(body: string): PdfSelectionBuilder;
  onXChanged(body: string): PdfSelectionBuilder;
  onYChanged(body: string): PdfSelectionBuilder;
  onZChanged(body: string): PdfSelectionBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): PdfSelectionBuilder;
  layer(setup: (b: LayerBuilder) => void): PdfSelectionBuilder;
}

const PDFSELECTION_META: TypeMetadata = {
  typeName: 'PdfSelection',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'document', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'from', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'hold', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'page', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderScale', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'to', hasValue: true, hasBinding: true },
    { name: 'transformOrigin', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActiveFocusChanged', paramCount: 1 },
    { handlerName: 'onActiveFocusOnTabChanged', paramCount: 1 },
    { handlerName: 'onAntialiasingChanged', paramCount: 1 },
    { handlerName: 'onBaselineOffsetChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onChildrenRectChanged', paramCount: 1 },
    { handlerName: 'onClipChanged', paramCount: 1 },
    { handlerName: 'onContainmentMaskChanged', paramCount: 0 },
    { handlerName: 'onDocumentChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onFromChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onHoldChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPageChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRenderScaleChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSelectedAreaChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onToChanged', paramCount: 0 },
    { handlerName: 'onTransformOriginChanged', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onVisibleChildrenChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onWindowChanged', paramCount: 1 },
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
  attached: [],
  defaultProperty: 'data',
};

export function PdfSelection(): PdfSelectionBuilder {
  return createFluentBuilder('PdfSelection', PDFSELECTION_META) as unknown as PdfSelectionBuilder;
}

export namespace PdfSelection {
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'PdfSelection',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'PdfSelection',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('PdfSelection', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('PdfSelection', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('PdfSelection', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('PdfSelection', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'PdfSelection',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('PdfSelection', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'PdfSelection',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('PdfSelection', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('PdfSelection', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('PdfSelection', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('PdfSelection', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('PdfSelection', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('PdfSelection', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('PdfSelection', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('PdfSelection', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('PdfSelection', 'TransformOrigin', 'BottomRight');
  }
}
