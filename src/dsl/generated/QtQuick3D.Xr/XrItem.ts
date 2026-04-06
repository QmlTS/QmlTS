// AUTO-GENERATED — DO NOT EDIT
// Type: XrItem
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
export interface XrItemBuilder {
  id(id: string): XrItemBuilder;
  child(obj: QmlObjectBuilder): XrItemBuilder;
  children(...objs: QmlObjectBuilder[]): XrItemBuilder;

  automaticHeight(value: boolean): XrItemBuilder;
  automaticHeightBind(expr: string): XrItemBuilder;
  automaticWidth(value: boolean): XrItemBuilder;
  automaticWidthBind(expr: string): XrItemBuilder;
  color(value: QmlColor): XrItemBuilder;
  colorBind(expr: string): XrItemBuilder;
  contentItem(value: ItemBuilder): XrItemBuilder;
  contentItemBind(expr: string): XrItemBuilder;
  eulerRotation(value: QmlVector3d): XrItemBuilder;
  eulerRotationBind(expr: string): XrItemBuilder;
  height(value: number): XrItemBuilder;
  heightBind(expr: string): XrItemBuilder;
  layers(value: number): XrItemBuilder;
  layersBind(expr: string): XrItemBuilder;
  manualPixelsPerUnit(value: boolean): XrItemBuilder;
  manualPixelsPerUnitBind(expr: string): XrItemBuilder;
  objectName(value: string): XrItemBuilder;
  objectNameBind(expr: string): XrItemBuilder;
  opacity(value: number): XrItemBuilder;
  opacityBind(expr: string): XrItemBuilder;
  parent(value: QmlValue): XrItemBuilder;
  parentBind(expr: string): XrItemBuilder;
  pivot(value: QmlVector3d): XrItemBuilder;
  pivotBind(expr: string): XrItemBuilder;
  pixelsPerUnit(value: number): XrItemBuilder;
  pixelsPerUnitBind(expr: string): XrItemBuilder;
  position(value: QmlVector3d): XrItemBuilder;
  positionBind(expr: string): XrItemBuilder;
  rotation(value: QmlQuaternion): XrItemBuilder;
  rotationBind(expr: string): XrItemBuilder;
  scale(value: QmlVector3d): XrItemBuilder;
  scaleBind(expr: string): XrItemBuilder;
  state(value: string): XrItemBuilder;
  stateBind(expr: string): XrItemBuilder;
  staticFlags(value: number): XrItemBuilder;
  staticFlagsBind(expr: string): XrItemBuilder;
  visible(value: boolean): XrItemBuilder;
  visibleBind(expr: string): XrItemBuilder;
  width(value: number): XrItemBuilder;
  widthBind(expr: string): XrItemBuilder;
  x(value: number): XrItemBuilder;
  xBind(expr: string): XrItemBuilder;
  y(value: number): XrItemBuilder;
  yBind(expr: string): XrItemBuilder;
  z(value: number): XrItemBuilder;
  zBind(expr: string): XrItemBuilder;
  onAutomaticHeightChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onAutomaticWidthChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onColorChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onContentItemChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onFlagsChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onManualPixelsPerUnitChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onParentChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onPixelsPerUnitChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onRightChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onStateChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onUpChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onXChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onYChanged(handler: DslSignalHandlerValue): XrItemBuilder;
  onZChanged(handler: DslSignalHandlerValue): XrItemBuilder;
}

const XRITEM_META: TypeMetadata = {
  typeName: 'XrItem',
  properties: [
    { name: 'automaticHeight', hasValue: true, hasBinding: true },
    { name: 'automaticWidth', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'contentItem', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'manualPixelsPerUnit', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'pixelsPerUnit', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAutomaticHeightChanged', paramCount: 0 },
    { handlerName: 'onAutomaticWidthChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColorChanged', paramCount: 0 },
    { handlerName: 'onContentItemChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onFlagsChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onManualPixelsPerUnitChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPixelsPerUnitChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function XrItem(): XrItemBuilder {
  return createFluentBuilder('XrItem', XRITEM_META) as unknown as XrItemBuilder;
}

export namespace XrItem {
  export namespace StaticFlags {
    export const None = createEnumToken('XrItem', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('XrItem', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('XrItem', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('XrItem', 'TransformSpace', 'SceneSpace');
  }
}
