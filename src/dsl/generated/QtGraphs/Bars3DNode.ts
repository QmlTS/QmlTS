// AUTO-GENERATED — DO NOT EDIT
// Type: Bars3DNode
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlQuaternion, QmlSize, QmlValue, QmlVector3d, TypeMetadata } from '../../runtime/index.js';
import type { Category3DAxisBuilder } from './Category3DAxis.js';
import type { GraphsThemeBuilder } from './GraphsTheme.js';
import type { Value3DAxisBuilder } from './Value3DAxis.js';
export interface Bars3DNodeBuilder {
  id(id: string): Bars3DNodeBuilder;
  child(obj: QmlObjectBuilder): Bars3DNodeBuilder;

  aspectRatio(value: number): Bars3DNodeBuilder;
  aspectRatioBind(expr: string): Bars3DNodeBuilder;
  barSeriesMargin(value: QmlSize): Bars3DNodeBuilder;
  barSeriesMarginBind(expr: string): Bars3DNodeBuilder;
  barSpacing(value: QmlSize): Bars3DNodeBuilder;
  barSpacingBind(expr: string): Bars3DNodeBuilder;
  barSpacingRelative(value: boolean): Bars3DNodeBuilder;
  barSpacingRelativeBind(expr: string): Bars3DNodeBuilder;
  barThickness(value: number): Bars3DNodeBuilder;
  barThicknessBind(expr: string): Bars3DNodeBuilder;
  columnAxis(value: Category3DAxisBuilder): Bars3DNodeBuilder;
  columnAxisBind(expr: string): Bars3DNodeBuilder;
  eulerRotation(value: QmlVector3d): Bars3DNodeBuilder;
  eulerRotationBind(expr: string): Bars3DNodeBuilder;
  floorLevel(value: number): Bars3DNodeBuilder;
  floorLevelBind(expr: string): Bars3DNodeBuilder;
  gridLineType(value: QmlEnumToken): Bars3DNodeBuilder;
  gridLineTypeBind(expr: string): Bars3DNodeBuilder;
  horizontalAspectRatio(value: number): Bars3DNodeBuilder;
  horizontalAspectRatioBind(expr: string): Bars3DNodeBuilder;
  labelMargin(value: number): Bars3DNodeBuilder;
  labelMarginBind(expr: string): Bars3DNodeBuilder;
  layers(value: number): Bars3DNodeBuilder;
  layersBind(expr: string): Bars3DNodeBuilder;
  locale(value: string): Bars3DNodeBuilder;
  localeBind(expr: string): Bars3DNodeBuilder;
  margin(value: number): Bars3DNodeBuilder;
  marginBind(expr: string): Bars3DNodeBuilder;
  multiSeriesUniform(value: boolean): Bars3DNodeBuilder;
  multiSeriesUniformBind(expr: string): Bars3DNodeBuilder;
  objectName(value: string): Bars3DNodeBuilder;
  objectNameBind(expr: string): Bars3DNodeBuilder;
  opacity(value: number): Bars3DNodeBuilder;
  opacityBind(expr: string): Bars3DNodeBuilder;
  optimizationHint(value: QmlEnumToken): Bars3DNodeBuilder;
  optimizationHintBind(expr: string): Bars3DNodeBuilder;
  parent(value: QmlValue): Bars3DNodeBuilder;
  parentBind(expr: string): Bars3DNodeBuilder;
  pivot(value: QmlVector3d): Bars3DNodeBuilder;
  pivotBind(expr: string): Bars3DNodeBuilder;
  polar(value: boolean): Bars3DNodeBuilder;
  polarBind(expr: string): Bars3DNodeBuilder;
  position(value: QmlVector3d): Bars3DNodeBuilder;
  positionBind(expr: string): Bars3DNodeBuilder;
  primarySeries(value: QmlValue): Bars3DNodeBuilder;
  primarySeriesBind(expr: string): Bars3DNodeBuilder;
  radialLabelOffset(value: number): Bars3DNodeBuilder;
  radialLabelOffsetBind(expr: string): Bars3DNodeBuilder;
  rotation(value: QmlQuaternion): Bars3DNodeBuilder;
  rotationBind(expr: string): Bars3DNodeBuilder;
  rowAxis(value: Category3DAxisBuilder): Bars3DNodeBuilder;
  rowAxisBind(expr: string): Bars3DNodeBuilder;
  scale(value: QmlVector3d): Bars3DNodeBuilder;
  scaleBind(expr: string): Bars3DNodeBuilder;
  selectionMode(value: QmlEnumToken): Bars3DNodeBuilder;
  selectionModeBind(expr: string): Bars3DNodeBuilder;
  state(value: string): Bars3DNodeBuilder;
  stateBind(expr: string): Bars3DNodeBuilder;
  staticFlags(value: number): Bars3DNodeBuilder;
  staticFlagsBind(expr: string): Bars3DNodeBuilder;
  theme(value: GraphsThemeBuilder): Bars3DNodeBuilder;
  themeBind(expr: string): Bars3DNodeBuilder;
  valueAxis(value: Value3DAxisBuilder): Bars3DNodeBuilder;
  valueAxisBind(expr: string): Bars3DNodeBuilder;
  visible(value: boolean): Bars3DNodeBuilder;
  visibleBind(expr: string): Bars3DNodeBuilder;
  x(value: number): Bars3DNodeBuilder;
  xBind(expr: string): Bars3DNodeBuilder;
  y(value: number): Bars3DNodeBuilder;
  yBind(expr: string): Bars3DNodeBuilder;
  z(value: number): Bars3DNodeBuilder;
  zBind(expr: string): Bars3DNodeBuilder;
  onAspectRatioChanged(body: string): Bars3DNodeBuilder;
  onBarSeriesMarginChanged(body: string): Bars3DNodeBuilder;
  onBarSpacingChanged(body: string): Bars3DNodeBuilder;
  onBarSpacingRelativeChanged(body: string): Bars3DNodeBuilder;
  onBarThicknessChanged(body: string): Bars3DNodeBuilder;
  onChildrenChanged(body: string): Bars3DNodeBuilder;
  onColumnAxisChanged(body: string): Bars3DNodeBuilder;
  onEulerRotationChanged(body: string): Bars3DNodeBuilder;
  onFloorLevelChanged(body: string): Bars3DNodeBuilder;
  onForwardChanged(body: string): Bars3DNodeBuilder;
  onGridLineTypeChanged(body: string): Bars3DNodeBuilder;
  onHorizontalAspectRatioChanged(body: string): Bars3DNodeBuilder;
  onLabelMarginChanged(body: string): Bars3DNodeBuilder;
  onLayersChanged(body: string): Bars3DNodeBuilder;
  onLocalOpacityChanged(body: string): Bars3DNodeBuilder;
  onLocaleChanged(body: string): Bars3DNodeBuilder;
  onMarginChanged(body: string): Bars3DNodeBuilder;
  onMultiSeriesUniformChanged(body: string): Bars3DNodeBuilder;
  onObjectNameChanged(body: string): Bars3DNodeBuilder;
  onOptimizationHintChanged(body: string): Bars3DNodeBuilder;
  onParentChanged(body: string): Bars3DNodeBuilder;
  onPivotChanged(body: string): Bars3DNodeBuilder;
  onPolarChanged(body: string): Bars3DNodeBuilder;
  onPositionChanged(body: string): Bars3DNodeBuilder;
  onPrimarySeriesChanged(body: string): Bars3DNodeBuilder;
  onQueriedGraphPositionChanged(body: string): Bars3DNodeBuilder;
  onRadialLabelOffsetChanged(body: string): Bars3DNodeBuilder;
  onRightChanged(body: string): Bars3DNodeBuilder;
  onRotationChanged(body: string): Bars3DNodeBuilder;
  onRowAxisChanged(body: string): Bars3DNodeBuilder;
  onScaleChanged(body: string): Bars3DNodeBuilder;
  onScenePositionChanged(body: string): Bars3DNodeBuilder;
  onSceneRotationChanged(body: string): Bars3DNodeBuilder;
  onSceneScaleChanged(body: string): Bars3DNodeBuilder;
  onSceneTransformChanged(body: string): Bars3DNodeBuilder;
  onSelectedElementChanged(body: string): Bars3DNodeBuilder;
  onSelectedSeriesChanged(body: string): Bars3DNodeBuilder;
  onSelectionModeChanged(body: string): Bars3DNodeBuilder;
  onStateChanged(body: string): Bars3DNodeBuilder;
  onStaticFlagsChanged(body: string): Bars3DNodeBuilder;
  onThemeChanged(body: string): Bars3DNodeBuilder;
  onUpChanged(body: string): Bars3DNodeBuilder;
  onValueAxisChanged(body: string): Bars3DNodeBuilder;
  onVisibleChanged(body: string): Bars3DNodeBuilder;
  onXChanged(body: string): Bars3DNodeBuilder;
  onYChanged(body: string): Bars3DNodeBuilder;
  onZChanged(body: string): Bars3DNodeBuilder;
}

const BARS3DNODE_META: TypeMetadata = {
  typeName: 'Bars3DNode',
  properties: [
    { name: 'aspectRatio', hasValue: true, hasBinding: true },
    { name: 'barSeriesMargin', hasValue: true, hasBinding: true },
    { name: 'barSpacing', hasValue: true, hasBinding: true },
    { name: 'barSpacingRelative', hasValue: true, hasBinding: true },
    { name: 'barThickness', hasValue: true, hasBinding: true },
    { name: 'columnAxis', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'floorLevel', hasValue: true, hasBinding: true },
    { name: 'gridLineType', hasValue: true, hasBinding: true },
    { name: 'horizontalAspectRatio', hasValue: true, hasBinding: true },
    { name: 'labelMargin', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'locale', hasValue: true, hasBinding: true },
    { name: 'margin', hasValue: true, hasBinding: true },
    { name: 'multiSeriesUniform', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'optimizationHint', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'polar', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'primarySeries', hasValue: true, hasBinding: true },
    { name: 'radialLabelOffset', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'rowAxis', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'selectionMode', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'theme', hasValue: true, hasBinding: true },
    { name: 'valueAxis', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAspectRatioChanged', paramCount: 0 },
    { handlerName: 'onBarSeriesMarginChanged', paramCount: 1 },
    { handlerName: 'onBarSpacingChanged', paramCount: 1 },
    { handlerName: 'onBarSpacingRelativeChanged', paramCount: 1 },
    { handlerName: 'onBarThicknessChanged', paramCount: 1 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onColumnAxisChanged', paramCount: 1 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onFloorLevelChanged', paramCount: 1 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onGridLineTypeChanged', paramCount: 0 },
    { handlerName: 'onHorizontalAspectRatioChanged', paramCount: 0 },
    { handlerName: 'onLabelMarginChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onLocaleChanged', paramCount: 0 },
    { handlerName: 'onMarginChanged', paramCount: 1 },
    { handlerName: 'onMultiSeriesUniformChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOptimizationHintChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPolarChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onPrimarySeriesChanged', paramCount: 1 },
    { handlerName: 'onQueriedGraphPositionChanged', paramCount: 0 },
    { handlerName: 'onRadialLabelOffsetChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onRowAxisChanged', paramCount: 1 },
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
    { handlerName: 'onValueAxisChanged', paramCount: 1 },
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

export function Bars3DNode(): Bars3DNodeBuilder {
  return createFluentBuilder('Bars3DNode', BARS3DNODE_META) as unknown as Bars3DNodeBuilder;
}

export namespace Bars3DNode {
  export namespace StaticFlags {
    export const None = createEnumToken('Bars3DNode', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('Bars3DNode', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('Bars3DNode', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('Bars3DNode', 'TransformSpace', 'SceneSpace');
  }
}
