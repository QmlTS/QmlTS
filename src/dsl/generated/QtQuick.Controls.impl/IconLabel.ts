// AUTO-GENERATED — DO NOT EDIT
// Type: IconLabel
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QtObjectBuilder } from '../QML/QtObject.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
import type { PaletteBuilder } from '../QtQuick/Palette.js';
import type { AnchorsBuilder } from '../QtQuick/QQuickAnchors.js';
import type { LayerBuilder } from '../QtQuick/QQuickItemLayer.js';
export interface IconLabelBuilder {
  id(id: string): IconLabelBuilder;
  child(obj: QmlObjectBuilder): IconLabelBuilder;

  activeFocusOnTab(value: boolean): IconLabelBuilder;
  activeFocusOnTabBind(expr: string): IconLabelBuilder;
  alignment(value: QmlEnumToken): IconLabelBuilder;
  alignmentBind(expr: string): IconLabelBuilder;
  antialiasing(value: boolean): IconLabelBuilder;
  antialiasingBind(expr: string): IconLabelBuilder;
  baselineOffset(value: number): IconLabelBuilder;
  baselineOffsetBind(expr: string): IconLabelBuilder;
  bottomPadding(value: number): IconLabelBuilder;
  bottomPaddingBind(expr: string): IconLabelBuilder;
  clip(value: boolean): IconLabelBuilder;
  clipBind(expr: string): IconLabelBuilder;
  color(value: QmlColor): IconLabelBuilder;
  colorBind(expr: string): IconLabelBuilder;
  containmentMask(value: QtObjectBuilder): IconLabelBuilder;
  containmentMaskBind(expr: string): IconLabelBuilder;
  defaultIconColor(value: QmlColor): IconLabelBuilder;
  defaultIconColorBind(expr: string): IconLabelBuilder;
  display(value: QmlEnumToken): IconLabelBuilder;
  displayBind(expr: string): IconLabelBuilder;
  enabled(value: boolean): IconLabelBuilder;
  enabledBind(expr: string): IconLabelBuilder;
  focus(value: boolean): IconLabelBuilder;
  focusBind(expr: string): IconLabelBuilder;
  focusPolicy(value: QmlEnumToken): IconLabelBuilder;
  focusPolicyBind(expr: string): IconLabelBuilder;
  font(value: QmlFont): IconLabelBuilder;
  fontBind(expr: string): IconLabelBuilder;
  height(value: number): IconLabelBuilder;
  heightBind(expr: string): IconLabelBuilder;
  icon(value: QmlValue): IconLabelBuilder;
  iconBind(expr: string): IconLabelBuilder;
  implicitHeight(value: number): IconLabelBuilder;
  implicitHeightBind(expr: string): IconLabelBuilder;
  implicitWidth(value: number): IconLabelBuilder;
  implicitWidthBind(expr: string): IconLabelBuilder;
  leftPadding(value: number): IconLabelBuilder;
  leftPaddingBind(expr: string): IconLabelBuilder;
  mirrored(value: boolean): IconLabelBuilder;
  mirroredBind(expr: string): IconLabelBuilder;
  objectName(value: string): IconLabelBuilder;
  objectNameBind(expr: string): IconLabelBuilder;
  opacity(value: number): IconLabelBuilder;
  opacityBind(expr: string): IconLabelBuilder;
  palette(value: PaletteBuilder): IconLabelBuilder;
  paletteBind(expr: string): IconLabelBuilder;
  parent(value: ItemBuilder): IconLabelBuilder;
  parentBind(expr: string): IconLabelBuilder;
  rightPadding(value: number): IconLabelBuilder;
  rightPaddingBind(expr: string): IconLabelBuilder;
  rotation(value: number): IconLabelBuilder;
  rotationBind(expr: string): IconLabelBuilder;
  scale(value: number): IconLabelBuilder;
  scaleBind(expr: string): IconLabelBuilder;
  smooth(value: boolean): IconLabelBuilder;
  smoothBind(expr: string): IconLabelBuilder;
  spacing(value: number): IconLabelBuilder;
  spacingBind(expr: string): IconLabelBuilder;
  state(value: string): IconLabelBuilder;
  stateBind(expr: string): IconLabelBuilder;
  text(value: string): IconLabelBuilder;
  textBind(expr: string): IconLabelBuilder;
  topPadding(value: number): IconLabelBuilder;
  topPaddingBind(expr: string): IconLabelBuilder;
  transformOrigin(value: QmlEnumToken): IconLabelBuilder;
  transformOriginBind(expr: string): IconLabelBuilder;
  visible(value: boolean): IconLabelBuilder;
  visibleBind(expr: string): IconLabelBuilder;
  width(value: number): IconLabelBuilder;
  widthBind(expr: string): IconLabelBuilder;
  x(value: number): IconLabelBuilder;
  xBind(expr: string): IconLabelBuilder;
  y(value: number): IconLabelBuilder;
  yBind(expr: string): IconLabelBuilder;
  z(value: number): IconLabelBuilder;
  zBind(expr: string): IconLabelBuilder;
  onActiveFocusChanged(body: string): IconLabelBuilder;
  onActiveFocusOnTabChanged(body: string): IconLabelBuilder;
  onAntialiasingChanged(body: string): IconLabelBuilder;
  onBaselineOffsetChanged(body: string): IconLabelBuilder;
  onChildrenChanged(body: string): IconLabelBuilder;
  onChildrenRectChanged(body: string): IconLabelBuilder;
  onClipChanged(body: string): IconLabelBuilder;
  onContainmentMaskChanged(body: string): IconLabelBuilder;
  onDefaultIconColorChanged(body: string): IconLabelBuilder;
  onEnabledChanged(body: string): IconLabelBuilder;
  onFocusChanged(body: string): IconLabelBuilder;
  onFocusPolicyChanged(body: string): IconLabelBuilder;
  onHeightChanged(body: string): IconLabelBuilder;
  onImplicitHeightChanged(body: string): IconLabelBuilder;
  onImplicitWidthChanged(body: string): IconLabelBuilder;
  onObjectNameChanged(body: string): IconLabelBuilder;
  onOpacityChanged(body: string): IconLabelBuilder;
  onPaletteChanged(body: string): IconLabelBuilder;
  onPaletteCreated(body: string): IconLabelBuilder;
  onParentChanged(body: string): IconLabelBuilder;
  onRotationChanged(body: string): IconLabelBuilder;
  onScaleChanged(body: string): IconLabelBuilder;
  onSmoothChanged(body: string): IconLabelBuilder;
  onStateChanged(body: string): IconLabelBuilder;
  onTransformOriginChanged(body: string): IconLabelBuilder;
  onVisibleChanged(body: string): IconLabelBuilder;
  onVisibleChildrenChanged(body: string): IconLabelBuilder;
  onWidthChanged(body: string): IconLabelBuilder;
  onWindowChanged(body: string): IconLabelBuilder;
  onXChanged(body: string): IconLabelBuilder;
  onYChanged(body: string): IconLabelBuilder;
  onZChanged(body: string): IconLabelBuilder;
  anchors(setup: (b: AnchorsBuilder) => void): IconLabelBuilder;
  layer(setup: (b: LayerBuilder) => void): IconLabelBuilder;
}

const ICONLABEL_META: TypeMetadata = {
  typeName: 'IconLabel',
  properties: [
    { name: 'activeFocusOnTab', hasValue: true, hasBinding: true },
    { name: 'alignment', hasValue: true, hasBinding: true },
    { name: 'antialiasing', hasValue: true, hasBinding: true },
    { name: 'baselineOffset', hasValue: true, hasBinding: true },
    { name: 'bottomPadding', hasValue: true, hasBinding: true },
    { name: 'clip', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'containmentMask', hasValue: true, hasBinding: true },
    { name: 'defaultIconColor', hasValue: true, hasBinding: true },
    { name: 'display', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'focus', hasValue: true, hasBinding: true },
    { name: 'focusPolicy', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'implicitHeight', hasValue: true, hasBinding: true },
    { name: 'implicitWidth', hasValue: true, hasBinding: true },
    { name: 'leftPadding', hasValue: true, hasBinding: true },
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'palette', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rightPadding', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'smooth', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'topPadding', hasValue: true, hasBinding: true },
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
    { handlerName: 'onDefaultIconColorChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFocusChanged', paramCount: 1 },
    { handlerName: 'onFocusPolicyChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOpacityChanged', paramCount: 0 },
    { handlerName: 'onPaletteChanged', paramCount: 0 },
    { handlerName: 'onPaletteCreated', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onSmoothChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 1 },
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

export function IconLabel(): IconLabelBuilder {
  return createFluentBuilder('IconLabel', ICONLABEL_META) as unknown as IconLabelBuilder;
}

export namespace IconLabel {
  export namespace Display {
    export const IconOnly = createEnumToken('IconLabel', 'Display', 'IconOnly');
    export const TextOnly = createEnumToken('IconLabel', 'Display', 'TextOnly');
    export const TextBesideIcon = createEnumToken('IconLabel', 'Display', 'TextBesideIcon');
    export const TextUnderIcon = createEnumToken('IconLabel', 'Display', 'TextUnderIcon');
  }
  export namespace Flags {
    export const ItemClipsChildrenToShape = createEnumToken(
      'IconLabel',
      'Flags',
      'ItemClipsChildrenToShape',
    );
    export const ItemAcceptsInputMethod = createEnumToken(
      'IconLabel',
      'Flags',
      'ItemAcceptsInputMethod',
    );
    export const ItemIsFocusScope = createEnumToken('IconLabel', 'Flags', 'ItemIsFocusScope');
    export const ItemHasContents = createEnumToken('IconLabel', 'Flags', 'ItemHasContents');
    export const ItemAcceptsDrops = createEnumToken('IconLabel', 'Flags', 'ItemAcceptsDrops');
    export const ItemIsViewport = createEnumToken('IconLabel', 'Flags', 'ItemIsViewport');
    export const ItemObservesViewport = createEnumToken(
      'IconLabel',
      'Flags',
      'ItemObservesViewport',
    );
  }
  export namespace ItemChange {
    export const ItemChildAddedChange = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemChildAddedChange',
    );
    export const ItemChildRemovedChange = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemChildRemovedChange',
    );
    export const ItemSceneChange = createEnumToken('IconLabel', 'ItemChange', 'ItemSceneChange');
    export const ItemVisibleHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemVisibleHasChanged',
    );
    export const ItemParentHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemParentHasChanged',
    );
    export const ItemOpacityHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemOpacityHasChanged',
    );
    export const ItemActiveFocusHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemActiveFocusHasChanged',
    );
    export const ItemRotationHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemRotationHasChanged',
    );
    export const ItemAntialiasingHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemAntialiasingHasChanged',
    );
    export const ItemDevicePixelRatioHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemDevicePixelRatioHasChanged',
    );
    export const ItemEnabledHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemEnabledHasChanged',
    );
    export const ItemScaleHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemScaleHasChanged',
    );
    export const ItemTransformHasChanged = createEnumToken(
      'IconLabel',
      'ItemChange',
      'ItemTransformHasChanged',
    );
  }
  export namespace TransformOrigin {
    export const TopLeft = createEnumToken('IconLabel', 'TransformOrigin', 'TopLeft');
    export const Top = createEnumToken('IconLabel', 'TransformOrigin', 'Top');
    export const TopRight = createEnumToken('IconLabel', 'TransformOrigin', 'TopRight');
    export const Left = createEnumToken('IconLabel', 'TransformOrigin', 'Left');
    export const Center = createEnumToken('IconLabel', 'TransformOrigin', 'Center');
    export const Right = createEnumToken('IconLabel', 'TransformOrigin', 'Right');
    export const BottomLeft = createEnumToken('IconLabel', 'TransformOrigin', 'BottomLeft');
    export const Bottom = createEnumToken('IconLabel', 'TransformOrigin', 'Bottom');
    export const BottomRight = createEnumToken('IconLabel', 'TransformOrigin', 'BottomRight');
  }
}
