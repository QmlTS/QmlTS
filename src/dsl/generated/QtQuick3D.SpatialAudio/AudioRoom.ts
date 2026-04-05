// AUTO-GENERATED — DO NOT EDIT
// Type: AudioRoom
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
export interface AudioRoomBuilder {
  id(id: string): AudioRoomBuilder;
  child(obj: QmlObjectBuilder): AudioRoomBuilder;

  backMaterial(value: QmlEnumToken): AudioRoomBuilder;
  backMaterialBind(expr: string): AudioRoomBuilder;
  ceilingMaterial(value: QmlEnumToken): AudioRoomBuilder;
  ceilingMaterialBind(expr: string): AudioRoomBuilder;
  dimensions(value: QmlVector3d): AudioRoomBuilder;
  dimensionsBind(expr: string): AudioRoomBuilder;
  eulerRotation(value: QmlVector3d): AudioRoomBuilder;
  eulerRotationBind(expr: string): AudioRoomBuilder;
  floorMaterial(value: QmlEnumToken): AudioRoomBuilder;
  floorMaterialBind(expr: string): AudioRoomBuilder;
  frontMaterial(value: QmlEnumToken): AudioRoomBuilder;
  frontMaterialBind(expr: string): AudioRoomBuilder;
  layers(value: number): AudioRoomBuilder;
  layersBind(expr: string): AudioRoomBuilder;
  leftMaterial(value: QmlEnumToken): AudioRoomBuilder;
  leftMaterialBind(expr: string): AudioRoomBuilder;
  objectName(value: string): AudioRoomBuilder;
  objectNameBind(expr: string): AudioRoomBuilder;
  opacity(value: number): AudioRoomBuilder;
  opacityBind(expr: string): AudioRoomBuilder;
  parent(value: QmlValue): AudioRoomBuilder;
  parentBind(expr: string): AudioRoomBuilder;
  pivot(value: QmlVector3d): AudioRoomBuilder;
  pivotBind(expr: string): AudioRoomBuilder;
  position(value: QmlVector3d): AudioRoomBuilder;
  positionBind(expr: string): AudioRoomBuilder;
  reflectionGain(value: number): AudioRoomBuilder;
  reflectionGainBind(expr: string): AudioRoomBuilder;
  reverbBrightness(value: number): AudioRoomBuilder;
  reverbBrightnessBind(expr: string): AudioRoomBuilder;
  reverbGain(value: number): AudioRoomBuilder;
  reverbGainBind(expr: string): AudioRoomBuilder;
  reverbTime(value: number): AudioRoomBuilder;
  reverbTimeBind(expr: string): AudioRoomBuilder;
  rightMaterial(value: QmlEnumToken): AudioRoomBuilder;
  rightMaterialBind(expr: string): AudioRoomBuilder;
  rotation(value: QmlQuaternion): AudioRoomBuilder;
  rotationBind(expr: string): AudioRoomBuilder;
  scale(value: QmlVector3d): AudioRoomBuilder;
  scaleBind(expr: string): AudioRoomBuilder;
  state(value: string): AudioRoomBuilder;
  stateBind(expr: string): AudioRoomBuilder;
  staticFlags(value: number): AudioRoomBuilder;
  staticFlagsBind(expr: string): AudioRoomBuilder;
  visible(value: boolean): AudioRoomBuilder;
  visibleBind(expr: string): AudioRoomBuilder;
  x(value: number): AudioRoomBuilder;
  xBind(expr: string): AudioRoomBuilder;
  y(value: number): AudioRoomBuilder;
  yBind(expr: string): AudioRoomBuilder;
  z(value: number): AudioRoomBuilder;
  zBind(expr: string): AudioRoomBuilder;
  onChildrenChanged(body: string): AudioRoomBuilder;
  onDimensionsChanged(body: string): AudioRoomBuilder;
  onEulerRotationChanged(body: string): AudioRoomBuilder;
  onForwardChanged(body: string): AudioRoomBuilder;
  onLayersChanged(body: string): AudioRoomBuilder;
  onLocalOpacityChanged(body: string): AudioRoomBuilder;
  onObjectNameChanged(body: string): AudioRoomBuilder;
  onParentChanged(body: string): AudioRoomBuilder;
  onPivotChanged(body: string): AudioRoomBuilder;
  onPositionChanged(body: string): AudioRoomBuilder;
  onReflectionGainChanged(body: string): AudioRoomBuilder;
  onReverbBrightnessChanged(body: string): AudioRoomBuilder;
  onReverbGainChanged(body: string): AudioRoomBuilder;
  onReverbTimeChanged(body: string): AudioRoomBuilder;
  onRightChanged(body: string): AudioRoomBuilder;
  onRotationChanged(body: string): AudioRoomBuilder;
  onScaleChanged(body: string): AudioRoomBuilder;
  onScenePositionChanged(body: string): AudioRoomBuilder;
  onSceneRotationChanged(body: string): AudioRoomBuilder;
  onSceneScaleChanged(body: string): AudioRoomBuilder;
  onSceneTransformChanged(body: string): AudioRoomBuilder;
  onStateChanged(body: string): AudioRoomBuilder;
  onStaticFlagsChanged(body: string): AudioRoomBuilder;
  onUpChanged(body: string): AudioRoomBuilder;
  onVisibleChanged(body: string): AudioRoomBuilder;
  onWallsChanged(body: string): AudioRoomBuilder;
  onXChanged(body: string): AudioRoomBuilder;
  onYChanged(body: string): AudioRoomBuilder;
  onZChanged(body: string): AudioRoomBuilder;
}

const AUDIOROOM_META: TypeMetadata = {
  typeName: 'AudioRoom',
  properties: [
    { name: 'backMaterial', hasValue: true, hasBinding: true },
    { name: 'ceilingMaterial', hasValue: true, hasBinding: true },
    { name: 'dimensions', hasValue: true, hasBinding: true },
    { name: 'eulerRotation', hasValue: true, hasBinding: true },
    { name: 'floorMaterial', hasValue: true, hasBinding: true },
    { name: 'frontMaterial', hasValue: true, hasBinding: true },
    { name: 'layers', hasValue: true, hasBinding: true },
    { name: 'leftMaterial', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'opacity', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pivot', hasValue: true, hasBinding: true },
    { name: 'position', hasValue: true, hasBinding: true },
    { name: 'reflectionGain', hasValue: true, hasBinding: true },
    { name: 'reverbBrightness', hasValue: true, hasBinding: true },
    { name: 'reverbGain', hasValue: true, hasBinding: true },
    { name: 'reverbTime', hasValue: true, hasBinding: true },
    { name: 'rightMaterial', hasValue: true, hasBinding: true },
    { name: 'rotation', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'staticFlags', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
    { name: 'z', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDimensionsChanged', paramCount: 0 },
    { handlerName: 'onEulerRotationChanged', paramCount: 0 },
    { handlerName: 'onForwardChanged', paramCount: 0 },
    { handlerName: 'onLayersChanged', paramCount: 0 },
    { handlerName: 'onLocalOpacityChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPivotChanged', paramCount: 0 },
    { handlerName: 'onPositionChanged', paramCount: 0 },
    { handlerName: 'onReflectionGainChanged', paramCount: 0 },
    { handlerName: 'onReverbBrightnessChanged', paramCount: 0 },
    { handlerName: 'onReverbGainChanged', paramCount: 0 },
    { handlerName: 'onReverbTimeChanged', paramCount: 0 },
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
    { handlerName: 'onWallsChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
    { handlerName: 'onZChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function AudioRoom(): AudioRoomBuilder {
  return createFluentBuilder('AudioRoom', AUDIOROOM_META) as unknown as AudioRoomBuilder;
}

export namespace AudioRoom {
  export namespace Material {
    export const Transparent = createEnumToken('AudioRoom', 'Material', 'Transparent');
    export const AcousticCeilingTiles = createEnumToken(
      'AudioRoom',
      'Material',
      'AcousticCeilingTiles',
    );
    export const BrickBare = createEnumToken('AudioRoom', 'Material', 'BrickBare');
    export const BrickPainted = createEnumToken('AudioRoom', 'Material', 'BrickPainted');
    export const ConcreteBlockCoarse = createEnumToken(
      'AudioRoom',
      'Material',
      'ConcreteBlockCoarse',
    );
    export const ConcreteBlockPainted = createEnumToken(
      'AudioRoom',
      'Material',
      'ConcreteBlockPainted',
    );
    export const CurtainHeavy = createEnumToken('AudioRoom', 'Material', 'CurtainHeavy');
    export const FiberGlassInsulation = createEnumToken(
      'AudioRoom',
      'Material',
      'FiberGlassInsulation',
    );
    export const GlassThin = createEnumToken('AudioRoom', 'Material', 'GlassThin');
    export const GlassThick = createEnumToken('AudioRoom', 'Material', 'GlassThick');
    export const Grass = createEnumToken('AudioRoom', 'Material', 'Grass');
    export const LinoleumOnConcrete = createEnumToken(
      'AudioRoom',
      'Material',
      'LinoleumOnConcrete',
    );
    export const Marble = createEnumToken('AudioRoom', 'Material', 'Marble');
    export const Metal = createEnumToken('AudioRoom', 'Material', 'Metal');
    export const ParquetOnConcrete = createEnumToken('AudioRoom', 'Material', 'ParquetOnConcrete');
    export const PlasterRough = createEnumToken('AudioRoom', 'Material', 'PlasterRough');
    export const PlasterSmooth = createEnumToken('AudioRoom', 'Material', 'PlasterSmooth');
    export const PlywoodPanel = createEnumToken('AudioRoom', 'Material', 'PlywoodPanel');
    export const PolishedConcreteOrTile = createEnumToken(
      'AudioRoom',
      'Material',
      'PolishedConcreteOrTile',
    );
    export const Sheetrock = createEnumToken('AudioRoom', 'Material', 'Sheetrock');
    export const WaterOrIceSurface = createEnumToken('AudioRoom', 'Material', 'WaterOrIceSurface');
    export const WoodCeiling = createEnumToken('AudioRoom', 'Material', 'WoodCeiling');
    export const WoodPanel = createEnumToken('AudioRoom', 'Material', 'WoodPanel');
    export const Uniform = createEnumToken('AudioRoom', 'Material', 'Uniform');
  }
  export namespace StaticFlags {
    export const None = createEnumToken('AudioRoom', 'StaticFlags', 'None');
  }
  export namespace TransformSpace {
    export const LocalSpace = createEnumToken('AudioRoom', 'TransformSpace', 'LocalSpace');
    export const ParentSpace = createEnumToken('AudioRoom', 'TransformSpace', 'ParentSpace');
    export const SceneSpace = createEnumToken('AudioRoom', 'TransformSpace', 'SceneSpace');
  }
}
