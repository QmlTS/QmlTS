// AUTO-GENERATED — DO NOT EDIT
// Type: LevelOfDetail
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { CameraBuilder } from './Camera.js';
export interface LevelOfDetailBuilder {
  id(id: string): LevelOfDetailBuilder;
  child(obj: QmlObjectBuilder): LevelOfDetailBuilder;
  children(...objs: QmlObjectBuilder[]): LevelOfDetailBuilder;

  camera(value: CameraBuilder): LevelOfDetailBuilder;
  cameraBind(expr: string): LevelOfDetailBuilder;
  currentIndex(value: number): LevelOfDetailBuilder;
  currentIndexBind(expr: string): LevelOfDetailBuilder;
  enabled(value: boolean): LevelOfDetailBuilder;
  enabledBind(expr: string): LevelOfDetailBuilder;
  isShareable(value: boolean): LevelOfDetailBuilder;
  isShareableBind(expr: string): LevelOfDetailBuilder;
  objectName(value: string): LevelOfDetailBuilder;
  objectNameBind(expr: string): LevelOfDetailBuilder;
  parent(value: QmlValue): LevelOfDetailBuilder;
  parentBind(expr: string): LevelOfDetailBuilder;
  thresholdType(value: QmlEnumToken): LevelOfDetailBuilder;
  thresholdTypeBind(expr: string): LevelOfDetailBuilder;
  thresholds(value: number): LevelOfDetailBuilder;
  thresholdsBind(expr: string): LevelOfDetailBuilder;
  volumeOverride(value: QmlValue): LevelOfDetailBuilder;
  volumeOverrideBind(expr: string): LevelOfDetailBuilder;
  onAddedToEntity(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onCameraChanged(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onCurrentIndexChanged(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onParentChanged(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onRemovedFromEntity(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onShareableChanged(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onThresholdTypeChanged(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onThresholdsChanged(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
  onVolumeOverrideChanged(handler: DslSignalHandlerValue): LevelOfDetailBuilder;
}

const LEVELOFDETAIL_META: TypeMetadata = {
  typeName: 'LevelOfDetail',
  properties: [
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'isShareable', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'thresholdType', hasValue: true, hasBinding: true },
    { name: 'thresholds', hasValue: true, hasBinding: true },
    { name: 'volumeOverride', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAddedToEntity', paramCount: 1 },
    { handlerName: 'onCameraChanged', paramCount: 1 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRemovedFromEntity', paramCount: 1 },
    { handlerName: 'onShareableChanged', paramCount: 1 },
    { handlerName: 'onThresholdTypeChanged', paramCount: 1 },
    { handlerName: 'onThresholdsChanged', paramCount: 1 },
    { handlerName: 'onVolumeOverrideChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function LevelOfDetail(): LevelOfDetailBuilder {
  return createFluentBuilder(
    'LevelOfDetail',
    LEVELOFDETAIL_META,
  ) as unknown as LevelOfDetailBuilder;
}

export namespace LevelOfDetail {
  export namespace ThresholdType {
    export const DistanceToCameraThreshold = createEnumToken(
      'LevelOfDetail',
      'ThresholdType',
      'DistanceToCameraThreshold',
    );
    export const ProjectedScreenPixelSizeThreshold = createEnumToken(
      'LevelOfDetail',
      'ThresholdType',
      'ProjectedScreenPixelSizeThreshold',
    );
  }
}
