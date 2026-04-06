// AUTO-GENERATED — DO NOT EDIT
// Type: ReflectionProbe
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlQuaternion,
  QmlValue,
  QmlVector3d,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { CubeMapTextureBuilder } from './CubeMapTexture.js';
export interface ReflectionProbeBuilder {
  id(id: string): ReflectionProbeBuilder;
  child(obj: QmlObjectBuilder): ReflectionProbeBuilder;
  children(...objs: QmlObjectBuilder[]): ReflectionProbeBuilder;

  boxOffset(value: QmlVector3d): ReflectionProbeBuilder;
  boxOffsetBind(expr: string): ReflectionProbeBuilder;
  boxSize(value: QmlVector3d): ReflectionProbeBuilder;
  boxSizeBind(expr: string): ReflectionProbeBuilder;
  clearColor(value: QmlColor): ReflectionProbeBuilder;
  clearColorBind(expr: string): ReflectionProbeBuilder;
  debugView(value: boolean): ReflectionProbeBuilder;
  debugViewBind(expr: string): ReflectionProbeBuilder;
  eulerRotation(value: QmlVector3d): ReflectionProbeBuilder;
  eulerRotationBind(expr: string): ReflectionProbeBuilder;
  layers(value: number): ReflectionProbeBuilder;
  layersBind(expr: string): ReflectionProbeBuilder;
  objectName(value: string): ReflectionProbeBuilder;
  objectNameBind(expr: string): ReflectionProbeBuilder;
  opacity(value: number): ReflectionProbeBuilder;
  opacityBind(expr: string): ReflectionProbeBuilder;
  parallaxCorrection(value: boolean): ReflectionProbeBuilder;
  parallaxCorrectionBind(expr: string): ReflectionProbeBuilder;
  parent(value: QmlValue): ReflectionProbeBuilder;
  parentBind(expr: string): ReflectionProbeBuilder;
  pivot(value: QmlVector3d): ReflectionProbeBuilder;
  pivotBind(expr: string): ReflectionProbeBuilder;
  position(value: QmlVector3d): ReflectionProbeBuilder;
  positionBind(expr: string): ReflectionProbeBuilder;
  quality(value: QmlEnumToken): ReflectionProbeBuilder;
  qualityBind(expr: string): ReflectionProbeBuilder;
  refreshMode(value: QmlEnumToken): ReflectionProbeBuilder;
  refreshModeBind(expr: string): ReflectionProbeBuilder;
  rotation(value: QmlQuaternion): ReflectionProbeBuilder;
  rotationBind(expr: string): ReflectionProbeBuilder;
  scale(value: QmlVector3d): ReflectionProbeBuilder;
  scaleBind(expr: string): ReflectionProbeBuilder;
  state(value: string): ReflectionProbeBuilder;
  stateBind(expr: string): ReflectionProbeBuilder;
  staticFlags(value: number): ReflectionProbeBuilder;
  staticFlagsBind(expr: string): ReflectionProbeBuilder;
  texture(value: CubeMapTextureBuilder): ReflectionProbeBuilder;
  textureBind(expr: string): ReflectionProbeBuilder;
  timeSlicing(value: QmlEnumToken): ReflectionProbeBuilder;
  timeSlicingBind(expr: string): ReflectionProbeBuilder;
  visible(value: boolean): ReflectionProbeBuilder;
  visibleBind(expr: string): ReflectionProbeBuilder;
  x(value: number): ReflectionProbeBuilder;
  xBind(expr: string): ReflectionProbeBuilder;
  y(value: number): ReflectionProbeBuilder;
  yBind(expr: string): ReflectionProbeBuilder;
  z(value: number): ReflectionProbeBuilder;
  zBind(expr: string): ReflectionProbeBuilder;
  onBoxOffsetChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onBoxSizeChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onClearColorChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onDebugViewChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onEulerRotationChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onForwardChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onLayersChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onLocalOpacityChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onParallaxCorrectionChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onPivotChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onPositionChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onQualityChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onRefreshModeChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onRightChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onRotationChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onScenePositionChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onSceneRotationChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onSceneScaleChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onSceneTransformChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onStaticFlagsChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onTextureChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onTimeSlicingChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onUpChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onXChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onYChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
  onZChanged(handler: DslSignalHandlerValue): ReflectionProbeBuilder;
}

const REFLECTIONPROBE_META: TypeMetadata = {
  typeName: 'ReflectionProbe',
  properties: [
    { name: 'boxOffset', hasValue: true, hasBinding: true },
    { name: 'boxSize', hasValue: true, hasBinding: true },
    { name: 'clearColor', hasValue: true, hasBinding: true },
    { name: 'debugView', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parallaxCorrection', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'quality', hasValue: true, hasBinding: true },
    { name: 'refreshMode', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'texture', hasValue: true, hasBinding: true },
    { name: 'timeSlicing', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBoxOffsetChanged', paramCount: 0 },
    { handlerName: 'onBoxSizeChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onClearColorChanged', paramCount: 0 },
    { handlerName: 'onDebugViewChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParallaxCorrectionChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onQualityChanged', paramCount: 0 },
    { handlerName: 'onRefreshModeChanged', paramCount: 0 },
    { handlerName: 'onRightChanged', paramCount: 0 },
    { handlerName: 'onRotationChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onScenePositionChanged', paramCount: 0 },
    { handlerName: 'onSceneRotationChanged', paramCount: 0 },
    { handlerName: 'onSceneScaleChanged', paramCount: 0 },
    { handlerName: 'onSceneTransformChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStaticFlagsChanged', paramCount: 0 },
    { handlerName: 'onTextureChanged', paramCount: 0 },
    { handlerName: 'onTimeSlicingChanged', paramCount: 0 },
    { handlerName: 'onUpChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ReflectionProbe(): ReflectionProbeBuilder {
  return createFluentBuilder(
    'ReflectionProbe',
    REFLECTIONPROBE_META,
  ) as unknown as ReflectionProbeBuilder;
}

export namespace ReflectionProbe {
  export namespace ReflectionQuality {
    export const VeryLow = createEnumToken('ReflectionProbe', 'ReflectionQuality', 'VeryLow');
    export const Low = createEnumToken('ReflectionProbe', 'ReflectionQuality', 'Low');
    export const Medium = createEnumToken('ReflectionProbe', 'ReflectionQuality', 'Medium');
    export const High = createEnumToken('ReflectionProbe', 'ReflectionQuality', 'High');
    export const VeryHigh = createEnumToken('ReflectionProbe', 'ReflectionQuality', 'VeryHigh');
  }
  export namespace ReflectionRefreshMode {
    export const FirstFrame = createEnumToken(
      'ReflectionProbe',
      'ReflectionRefreshMode',
      'FirstFrame',
    );
    export const EveryFrame = createEnumToken(
      'ReflectionProbe',
      'ReflectionRefreshMode',
      'EveryFrame',
    );
  }
  export namespace ReflectionTimeSlicing {
    export const None = createEnumToken('ReflectionProbe', 'ReflectionTimeSlicing', 'None');
    export const AllFacesAtOnce = createEnumToken(
      'ReflectionProbe',
      'ReflectionTimeSlicing',
      'AllFacesAtOnce',
    );
    export const IndividualFaces = createEnumToken(
      'ReflectionProbe',
      'ReflectionTimeSlicing',
      'IndividualFaces',
    );
  }
  export namespace StaticFlags {
    export const None = createEnumToken('ReflectionProbe', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('ReflectionProbe', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('ReflectionProbe', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('ReflectionProbe', 'TransformSpace', 'SceneSpace');
  }
}
