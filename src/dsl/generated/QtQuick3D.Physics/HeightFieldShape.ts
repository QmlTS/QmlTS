// AUTO-GENERATED — DO NOT EDIT
// Type: HeightFieldShape
// Generated from Qt 6.11.0

import type {
  QmlObjectBuilder,
  QmlQuaternion,
  QmlUrl,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { ImageBuilder } from '../QtQuick/Image.js';
export interface HeightFieldShapeBuilder {
  id(id: string): HeightFieldShapeBuilder;
  child(obj: QmlObjectBuilder): HeightFieldShapeBuilder;

  enableDebugDraw(value: boolean): HeightFieldShapeBuilder;
  enableDebugDrawBind(expr: string): HeightFieldShapeBuilder;
  eulerRotation(value: QmlVector3d): HeightFieldShapeBuilder;
  eulerRotationBind(expr: string): HeightFieldShapeBuilder;
  extents(value: QmlVector3d): HeightFieldShapeBuilder;
  extentsBind(expr: string): HeightFieldShapeBuilder;
  image(value: ImageBuilder): HeightFieldShapeBuilder;
  imageBind(expr: string): HeightFieldShapeBuilder;
  layers(value: number): HeightFieldShapeBuilder;
  layersBind(expr: string): HeightFieldShapeBuilder;
  objectName(value: string): HeightFieldShapeBuilder;
  objectNameBind(expr: string): HeightFieldShapeBuilder;
  opacity(value: number): HeightFieldShapeBuilder;
  opacityBind(expr: string): HeightFieldShapeBuilder;
  parent(value: QmlValue): HeightFieldShapeBuilder;
  parentBind(expr: string): HeightFieldShapeBuilder;
  pivot(value: QmlVector3d): HeightFieldShapeBuilder;
  pivotBind(expr: string): HeightFieldShapeBuilder;
  position(value: QmlVector3d): HeightFieldShapeBuilder;
  positionBind(expr: string): HeightFieldShapeBuilder;
  rotation(value: QmlQuaternion): HeightFieldShapeBuilder;
  rotationBind(expr: string): HeightFieldShapeBuilder;
  scale(value: QmlVector3d): HeightFieldShapeBuilder;
  scaleBind(expr: string): HeightFieldShapeBuilder;
  source(value: QmlUrl): HeightFieldShapeBuilder;
  sourceBind(expr: string): HeightFieldShapeBuilder;
  state(value: string): HeightFieldShapeBuilder;
  stateBind(expr: string): HeightFieldShapeBuilder;
  staticFlags(value: number): HeightFieldShapeBuilder;
  staticFlagsBind(expr: string): HeightFieldShapeBuilder;
  visible(value: boolean): HeightFieldShapeBuilder;
  visibleBind(expr: string): HeightFieldShapeBuilder;
  x(value: number): HeightFieldShapeBuilder;
  xBind(expr: string): HeightFieldShapeBuilder;
  y(value: number): HeightFieldShapeBuilder;
  yBind(expr: string): HeightFieldShapeBuilder;
  z(value: number): HeightFieldShapeBuilder;
  zBind(expr: string): HeightFieldShapeBuilder;
  onChildrenChanged(body: string): HeightFieldShapeBuilder;
  onEnableDebugDrawChanged(body: string): HeightFieldShapeBuilder;
  onEulerRotationChanged(body: string): HeightFieldShapeBuilder;
  onExtentsChanged(body: string): HeightFieldShapeBuilder;
  onForwardChanged(body: string): HeightFieldShapeBuilder;
  onImageChanged(body: string): HeightFieldShapeBuilder;
  onLayersChanged(body: string): HeightFieldShapeBuilder;
  onLocalOpacityChanged(body: string): HeightFieldShapeBuilder;
  onNeedsRebuild(body: string): HeightFieldShapeBuilder;
  onObjectNameChanged(body: string): HeightFieldShapeBuilder;
  onParentChanged(body: string): HeightFieldShapeBuilder;
  onPivotChanged(body: string): HeightFieldShapeBuilder;
  onPositionChanged(body: string): HeightFieldShapeBuilder;
  onRightChanged(body: string): HeightFieldShapeBuilder;
  onRotationChanged(body: string): HeightFieldShapeBuilder;
  onScaleChanged(body: string): HeightFieldShapeBuilder;
  onScenePositionChanged(body: string): HeightFieldShapeBuilder;
  onSceneRotationChanged(body: string): HeightFieldShapeBuilder;
  onSceneScaleChanged(body: string): HeightFieldShapeBuilder;
  onSceneTransformChanged(body: string): HeightFieldShapeBuilder;
  onSourceChanged(body: string): HeightFieldShapeBuilder;
  onStateChanged(body: string): HeightFieldShapeBuilder;
  onStaticFlagsChanged(body: string): HeightFieldShapeBuilder;
  onUpChanged(body: string): HeightFieldShapeBuilder;
  onVisibleChanged(body: string): HeightFieldShapeBuilder;
  onXChanged(body: string): HeightFieldShapeBuilder;
  onYChanged(body: string): HeightFieldShapeBuilder;
  onZChanged(body: string): HeightFieldShapeBuilder;
}

const HEIGHTFIELDSHAPE_META: TypeMetadata = {
  typeName: 'HeightFieldShape',
  properties: [
    { name: 'enableDebugDraw', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'extents', hasValue: true, hasBinding: true },
    { name: 'image', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'source', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEnableDebugDrawChanged', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onExtentsChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onImageChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onNeedsRebuild', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function HeightFieldShape(): HeightFieldShapeBuilder {
  return createFluentBuilder(
    'HeightFieldShape',
    HEIGHTFIELDSHAPE_META,
  ) as unknown as HeightFieldShapeBuilder;
}

export namespace HeightFieldShape {
  export namespace StaticFlags {
    export const None = createEnumToken('HeightFieldShape', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('HeightFieldShape', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('HeightFieldShape', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('HeightFieldShape', 'TransformSpace', 'SceneSpace');
  }
}
