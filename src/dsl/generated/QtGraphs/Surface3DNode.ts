// AUTO-GENERATED — DO NOT EDIT
// Type: Surface3DNode
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { GraphsThemeBuilder } from './GraphsTheme.js';
import type { Value3DAxisBuilder } from './Value3DAxis.js';
export interface Surface3DNodeBuilder {
  id(id: string): Surface3DNodeBuilder;
  child(obj: QmlObjectBuilder): Surface3DNodeBuilder;

  aspectRatio(value: number): Surface3DNodeBuilder;
  aspectRatioBind(expr: string): Surface3DNodeBuilder;
  axisX(value: Value3DAxisBuilder): Surface3DNodeBuilder;
  axisXBind(expr: string): Surface3DNodeBuilder;
  axisY(value: Value3DAxisBuilder): Surface3DNodeBuilder;
  axisYBind(expr: string): Surface3DNodeBuilder;
  axisZ(value: Value3DAxisBuilder): Surface3DNodeBuilder;
  axisZBind(expr: string): Surface3DNodeBuilder;
  eulerRotation(value: QmlVector3d): Surface3DNodeBuilder;
  eulerRotationBind(expr: string): Surface3DNodeBuilder;
  flipHorizontalGrid(value: boolean): Surface3DNodeBuilder;
  flipHorizontalGridBind(expr: string): Surface3DNodeBuilder;
  gridLineType(value: QmlEnumToken): Surface3DNodeBuilder;
  gridLineTypeBind(expr: string): Surface3DNodeBuilder;
  horizontalAspectRatio(value: number): Surface3DNodeBuilder;
  horizontalAspectRatioBind(expr: string): Surface3DNodeBuilder;
  labelMargin(value: number): Surface3DNodeBuilder;
  labelMarginBind(expr: string): Surface3DNodeBuilder;
  layers(value: number): Surface3DNodeBuilder;
  layersBind(expr: string): Surface3DNodeBuilder;
  locale(value: string): Surface3DNodeBuilder;
  localeBind(expr: string): Surface3DNodeBuilder;
  margin(value: number): Surface3DNodeBuilder;
  marginBind(expr: string): Surface3DNodeBuilder;
  objectName(value: string): Surface3DNodeBuilder;
  objectNameBind(expr: string): Surface3DNodeBuilder;
  opacity(value: number): Surface3DNodeBuilder;
  opacityBind(expr: string): Surface3DNodeBuilder;
  optimizationHint(value: QmlEnumToken): Surface3DNodeBuilder;
  optimizationHintBind(expr: string): Surface3DNodeBuilder;
  parent(value: QmlValue): Surface3DNodeBuilder;
  parentBind(expr: string): Surface3DNodeBuilder;
  pivot(value: QmlVector3d): Surface3DNodeBuilder;
  pivotBind(expr: string): Surface3DNodeBuilder;
  polar(value: boolean): Surface3DNodeBuilder;
  polarBind(expr: string): Surface3DNodeBuilder;
  position(value: QmlVector3d): Surface3DNodeBuilder;
  positionBind(expr: string): Surface3DNodeBuilder;
  radialLabelOffset(value: number): Surface3DNodeBuilder;
  radialLabelOffsetBind(expr: string): Surface3DNodeBuilder;
  rotation(value: QmlQuaternion): Surface3DNodeBuilder;
  rotationBind(expr: string): Surface3DNodeBuilder;
  scale(value: QmlVector3d): Surface3DNodeBuilder;
  scaleBind(expr: string): Surface3DNodeBuilder;
  selectionMode(value: QmlEnumToken): Surface3DNodeBuilder;
  selectionModeBind(expr: string): Surface3DNodeBuilder;
  state(value: string): Surface3DNodeBuilder;
  stateBind(expr: string): Surface3DNodeBuilder;
  staticFlags(value: number): Surface3DNodeBuilder;
  staticFlagsBind(expr: string): Surface3DNodeBuilder;
  theme(value: GraphsThemeBuilder): Surface3DNodeBuilder;
  themeBind(expr: string): Surface3DNodeBuilder;
  visible(value: boolean): Surface3DNodeBuilder;
  visibleBind(expr: string): Surface3DNodeBuilder;
  x(value: number): Surface3DNodeBuilder;
  xBind(expr: string): Surface3DNodeBuilder;
  y(value: number): Surface3DNodeBuilder;
  yBind(expr: string): Surface3DNodeBuilder;
  z(value: number): Surface3DNodeBuilder;
  zBind(expr: string): Surface3DNodeBuilder;
  onAspectRatioChanged(body: string): Surface3DNodeBuilder;
  onAxisXChanged(body: string): Surface3DNodeBuilder;
  onAxisYChanged(body: string): Surface3DNodeBuilder;
  onAxisZChanged(body: string): Surface3DNodeBuilder;
  onChildrenChanged(body: string): Surface3DNodeBuilder;
  onEulerRotationChanged(body: string): Surface3DNodeBuilder;
  onFlipHorizontalGridChanged(body: string): Surface3DNodeBuilder;
  onForwardChanged(body: string): Surface3DNodeBuilder;
  onGridLineTypeChanged(body: string): Surface3DNodeBuilder;
  onHorizontalAspectRatioChanged(body: string): Surface3DNodeBuilder;
  onLabelMarginChanged(body: string): Surface3DNodeBuilder;
  onLayersChanged(body: string): Surface3DNodeBuilder;
  onLocalOpacityChanged(body: string): Surface3DNodeBuilder;
  onLocaleChanged(body: string): Surface3DNodeBuilder;
  onMarginChanged(body: string): Surface3DNodeBuilder;
  onObjectNameChanged(body: string): Surface3DNodeBuilder;
  onOptimizationHintChanged(body: string): Surface3DNodeBuilder;
  onParentChanged(body: string): Surface3DNodeBuilder;
  onPivotChanged(body: string): Surface3DNodeBuilder;
  onPolarChanged(body: string): Surface3DNodeBuilder;
  onPositionChanged(body: string): Surface3DNodeBuilder;
  onQueriedGraphPositionChanged(body: string): Surface3DNodeBuilder;
  onRadialLabelOffsetChanged(body: string): Surface3DNodeBuilder;
  onRightChanged(body: string): Surface3DNodeBuilder;
  onRotationChanged(body: string): Surface3DNodeBuilder;
  onScaleChanged(body: string): Surface3DNodeBuilder;
  onScenePositionChanged(body: string): Surface3DNodeBuilder;
  onSceneRotationChanged(body: string): Surface3DNodeBuilder;
  onSceneScaleChanged(body: string): Surface3DNodeBuilder;
  onSceneTransformChanged(body: string): Surface3DNodeBuilder;
  onSelectedElementChanged(body: string): Surface3DNodeBuilder;
  onSelectedSeriesChanged(body: string): Surface3DNodeBuilder;
  onSelectionModeChanged(body: string): Surface3DNodeBuilder;
  onStateChanged(body: string): Surface3DNodeBuilder;
  onStaticFlagsChanged(body: string): Surface3DNodeBuilder;
  onThemeChanged(body: string): Surface3DNodeBuilder;
  onUpChanged(body: string): Surface3DNodeBuilder;
  onVisibleChanged(body: string): Surface3DNodeBuilder;
  onXChanged(body: string): Surface3DNodeBuilder;
  onYChanged(body: string): Surface3DNodeBuilder;
  onZChanged(body: string): Surface3DNodeBuilder;
}

const SURFACE3DNODE_META: TypeMetadata = {
  typeName: 'Surface3DNode',
  properties: [
    { name: 'aspectRatio', hasValue: true, hasBinding: true },
    { name: 'axisX', hasValue: true, hasBinding: true },
    { name: 'axisY', hasValue: true, hasBinding: true },
    { name: 'axisZ', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'flipHorizontalGrid', hasValue: true, hasBinding: true },
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
    { handlerName: 'onFlipHorizontalGridChanged', paramCount: 1 },
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
  grouped: [],
  attached: [],
  defaultProperty: 'seriesList',
};

export function Surface3DNode(): Surface3DNodeBuilder {
  return createFluentBuilder(
    'Surface3DNode',
    SURFACE3DNODE_META,
  ) as unknown as Surface3DNodeBuilder;
}

export namespace Surface3DNode {
  export namespace StaticFlags {
    export const None = createEnumToken('Surface3DNode', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Surface3DNode', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Surface3DNode', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Surface3DNode', 'TransformSpace', 'SceneSpace');
  }
}
