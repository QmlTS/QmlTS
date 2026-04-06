// AUTO-GENERATED — DO NOT EDIT
// Type: LevelOfDetailLoader
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { CameraBuilder } from '../Qt3D.Render/Camera.js';
export interface LevelOfDetailLoaderBuilder {
  id(id: string): LevelOfDetailLoaderBuilder;
  child(obj: QmlObjectBuilder): LevelOfDetailLoaderBuilder;
  children(...objs: QmlObjectBuilder[]): LevelOfDetailLoaderBuilder;

  camera(value: CameraBuilder): LevelOfDetailLoaderBuilder;
  cameraBind(expr: string): LevelOfDetailLoaderBuilder;
  currentIndex(value: number): LevelOfDetailLoaderBuilder;
  currentIndexBind(expr: string): LevelOfDetailLoaderBuilder;
  enabled(value: boolean): LevelOfDetailLoaderBuilder;
  enabledBind(expr: string): LevelOfDetailLoaderBuilder;
  objectName(value: string): LevelOfDetailLoaderBuilder;
  objectNameBind(expr: string): LevelOfDetailLoaderBuilder;
  parent(value: QmlValue): LevelOfDetailLoaderBuilder;
  parentBind(expr: string): LevelOfDetailLoaderBuilder;
  sources(value: QmlValue[]): LevelOfDetailLoaderBuilder;
  sourcesBind(expr: string): LevelOfDetailLoaderBuilder;
  thresholdType(value: QmlEnumToken): LevelOfDetailLoaderBuilder;
  thresholdTypeBind(expr: string): LevelOfDetailLoaderBuilder;
  thresholds(value: number): LevelOfDetailLoaderBuilder;
  thresholdsBind(expr: string): LevelOfDetailLoaderBuilder;
  volumeOverride(value: QmlValue): LevelOfDetailLoaderBuilder;
  volumeOverrideBind(expr: string): LevelOfDetailLoaderBuilder;
  onCameraChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onCurrentIndexChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onEntityChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onParentChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onSourceChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onSourcesChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onThresholdTypeChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onThresholdsChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
  onVolumeOverrideChanged(handler: DslSignalHandlerValue): LevelOfDetailLoaderBuilder;
}

const LEVELOFDETAILLOADER_META: TypeMetadata = {
  typeName: 'LevelOfDetailLoader',
  properties: [
    { name: 'camera', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sources', hasValue: true, hasBinding: true },
    { name: 'thresholdType', hasValue: true, hasBinding: true },
    { name: 'thresholds', hasValue: true, hasBinding: true },
    { name: 'volumeOverride', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCameraChanged', paramCount: 0 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEntityChanged', paramCount: 0 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSourceChanged', paramCount: 0 },
    { handlerName: 'onSourcesChanged', paramCount: 0 },
    { handlerName: 'onThresholdTypeChanged', paramCount: 0 },
    { handlerName: 'onThresholdsChanged', paramCount: 0 },
    { handlerName: 'onVolumeOverrideChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function LevelOfDetailLoader(): LevelOfDetailLoaderBuilder {
  return createFluentBuilder(
    'LevelOfDetailLoader',
    LEVELOFDETAILLOADER_META,
  ) as unknown as LevelOfDetailLoaderBuilder;
}
