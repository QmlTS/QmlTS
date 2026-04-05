// AUTO-GENERATED — DO NOT EDIT
// Type: Scatter3DNode
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlQuaternion, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { GraphsThemeBuilder } from './GraphsTheme.js';
import type { Value3DAxisBuilder } from './Value3DAxis.js';
export interface Scatter3DNodeBuilder {
  id(id: string): Scatter3DNodeBuilder;
  child(obj: QmlObjectBuilder): Scatter3DNodeBuilder;

  aspectRatio(value: number): Scatter3DNodeBuilder;
  aspectRatioBind(expr: string): Scatter3DNodeBuilder;
  axisX(value: Value3DAxisBuilder): Scatter3DNodeBuilder;
  axisXBind(expr: string): Scatter3DNodeBuilder;
  axisY(value: Value3DAxisBuilder): Scatter3DNodeBuilder;
  axisYBind(expr: string): Scatter3DNodeBuilder;
  axisZ(value: Value3DAxisBuilder): Scatter3DNodeBuilder;
  axisZBind(expr: string): Scatter3DNodeBuilder;
  eulerRotation(value: QmlVector3d): Scatter3DNodeBuilder;
  eulerRotationBind(expr: string): Scatter3DNodeBuilder;
  gridLineType(value: QmlEnumToken): Scatter3DNodeBuilder;
  gridLineTypeBind(expr: string): Scatter3DNodeBuilder;
  horizontalAspectRatio(value: number): Scatter3DNodeBuilder;
  horizontalAspectRatioBind(expr: string): Scatter3DNodeBuilder;
  labelMargin(value: number): Scatter3DNodeBuilder;
  labelMarginBind(expr: string): Scatter3DNodeBuilder;
  layers(value: number): Scatter3DNodeBuilder;
  layersBind(expr: string): Scatter3DNodeBuilder;
  locale(value: string): Scatter3DNodeBuilder;
  localeBind(expr: string): Scatter3DNodeBuilder;
  margin(value: number): Scatter3DNodeBuilder;
  marginBind(expr: string): Scatter3DNodeBuilder;
  objectName(value: string): Scatter3DNodeBuilder;
  objectNameBind(expr: string): Scatter3DNodeBuilder;
  opacity(value: number): Scatter3DNodeBuilder;
  opacityBind(expr: string): Scatter3DNodeBuilder;
  optimizationHint(value: QmlEnumToken): Scatter3DNodeBuilder;
  optimizationHintBind(expr: string): Scatter3DNodeBuilder;
  parent(value: QmlValue): Scatter3DNodeBuilder;
  parentBind(expr: string): Scatter3DNodeBuilder;
  pivot(value: QmlVector3d): Scatter3DNodeBuilder;
  pivotBind(expr: string): Scatter3DNodeBuilder;
  polar(value: boolean): Scatter3DNodeBuilder;
  polarBind(expr: string): Scatter3DNodeBuilder;
  position(value: QmlVector3d): Scatter3DNodeBuilder;
  positionBind(expr: string): Scatter3DNodeBuilder;
  radialLabelOffset(value: number): Scatter3DNodeBuilder;
  radialLabelOffsetBind(expr: string): Scatter3DNodeBuilder;
  rotation(value: QmlQuaternion): Scatter3DNodeBuilder;
  rotationBind(expr: string): Scatter3DNodeBuilder;
  scale(value: QmlVector3d): Scatter3DNodeBuilder;
  scaleBind(expr: string): Scatter3DNodeBuilder;
  selectionMode(value: QmlEnumToken): Scatter3DNodeBuilder;
  selectionModeBind(expr: string): Scatter3DNodeBuilder;
  state(value: string): Scatter3DNodeBuilder;
  stateBind(expr: string): Scatter3DNodeBuilder;
  staticFlags(value: number): Scatter3DNodeBuilder;
  staticFlagsBind(expr: string): Scatter3DNodeBuilder;
  theme(value: GraphsThemeBuilder): Scatter3DNodeBuilder;
  themeBind(expr: string): Scatter3DNodeBuilder;
  visible(value: boolean): Scatter3DNodeBuilder;
  visibleBind(expr: string): Scatter3DNodeBuilder;
  x(value: number): Scatter3DNodeBuilder;
  xBind(expr: string): Scatter3DNodeBuilder;
  y(value: number): Scatter3DNodeBuilder;
  yBind(expr: string): Scatter3DNodeBuilder;
  z(value: number): Scatter3DNodeBuilder;
  zBind(expr: string): Scatter3DNodeBuilder;
  onAspectRatioChanged(body: string): Scatter3DNodeBuilder;
  onAxisXChanged(body: string): Scatter3DNodeBuilder;
  onAxisYChanged(body: string): Scatter3DNodeBuilder;
  onAxisZChanged(body: string): Scatter3DNodeBuilder;
  onChildrenChanged(body: string): Scatter3DNodeBuilder;
  onEulerRotationChanged(body: string): Scatter3DNodeBuilder;
  onForwardChanged(body: string): Scatter3DNodeBuilder;
  onGridLineTypeChanged(body: string): Scatter3DNodeBuilder;
  onHorizontalAspectRatioChanged(body: string): Scatter3DNodeBuilder;
  onLabelMarginChanged(body: string): Scatter3DNodeBuilder;
  onLayersChanged(body: string): Scatter3DNodeBuilder;
  onLocalOpacityChanged(body: string): Scatter3DNodeBuilder;
  onLocaleChanged(body: string): Scatter3DNodeBuilder;
  onMarginChanged(body: string): Scatter3DNodeBuilder;
  onObjectNameChanged(body: string): Scatter3DNodeBuilder;
  onOptimizationHintChanged(body: string): Scatter3DNodeBuilder;
  onParentChanged(body: string): Scatter3DNodeBuilder;
  onPivotChanged(body: string): Scatter3DNodeBuilder;
  onPolarChanged(body: string): Scatter3DNodeBuilder;
  onPositionChanged(body: string): Scatter3DNodeBuilder;
  onQueriedGraphPositionChanged(body: string): Scatter3DNodeBuilder;
  onRadialLabelOffsetChanged(body: string): Scatter3DNodeBuilder;
  onRightChanged(body: string): Scatter3DNodeBuilder;
  onRotationChanged(body: string): Scatter3DNodeBuilder;
  onScaleChanged(body: string): Scatter3DNodeBuilder;
  onScenePositionChanged(body: string): Scatter3DNodeBuilder;
  onSceneRotationChanged(body: string): Scatter3DNodeBuilder;
  onSceneScaleChanged(body: string): Scatter3DNodeBuilder;
  onSceneTransformChanged(body: string): Scatter3DNodeBuilder;
  onSelectedElementChanged(body: string): Scatter3DNodeBuilder;
  onSelectedSeriesChanged(body: string): Scatter3DNodeBuilder;
  onSelectionModeChanged(body: string): Scatter3DNodeBuilder;
  onStateChanged(body: string): Scatter3DNodeBuilder;
  onStaticFlagsChanged(body: string): Scatter3DNodeBuilder;
  onThemeChanged(body: string): Scatter3DNodeBuilder;
  onUpChanged(body: string): Scatter3DNodeBuilder;
  onVisibleChanged(body: string): Scatter3DNodeBuilder;
  onXChanged(body: string): Scatter3DNodeBuilder;
  onYChanged(body: string): Scatter3DNodeBuilder;
  onZChanged(body: string): Scatter3DNodeBuilder;
}

const SCATTER3DNODE_META: TypeMetadata = {
  typeName: 'Scatter3DNode',
  properties: [
    { name: 'aspectRatio', hasValue: true, hasBinding: true },
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisZ', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'gridLineType', hasValue: true, hasBinding: true },
    { name: 'horizontalAspectRatio', hasValue: true, hasBinding: true },
    { name: 'labelMargin', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'margin', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'optimizationHint', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'polar', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'radialLabelOffset', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectionMode', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'theme', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAspectRatioChanged', paramCount: 0 },
    { handlerName: 'onAxisXChanged', paramCount: 1 },
    { handlerName: 'onAxisYChanged', paramCount: 1 },
    { handlerName: 'onAxisZChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onGridLineTypeChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAspectRatioChanged', paramCount: 0 },
    { handlerName: 'onLabelMarginChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMarginChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOptimizationHintChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPolarChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onQueriedGraphPositionChanged', paramCount: 0 },
    { handlerName: 'onRadialLabelOffsetChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onSelectedElementChanged', paramCount: 0 },
    { handlerName: 'onSelectedSeriesChanged', paramCount: 1 },
    { handlerName: 'onSelectionModeChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onThemeChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'seriesList',
};

export function Scatter3DNode(): Scatter3DNodeBuilder {
  return createFluentBuilder('Scatter3DNode', SCATTER3DNODE_META) as unknown as Scatter3DNodeBuilder;
}

export namespace Scatter3DNode {
  export namespace StaticFlags {
    export const None = createEnumToken('Scatter3DNode', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Scatter3DNode', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Scatter3DNode', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Scatter3DNode', 'TransformSpace', 'SceneSpace');
  }
}
