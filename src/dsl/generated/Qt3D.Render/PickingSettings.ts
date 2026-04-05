// AUTO-GENERATED — DO NOT EDIT
// Type: PickingSettings
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface PickingSettingsBuilder {
  id(id: string): PickingSettingsBuilder;
  child(obj: QmlObjectBuilder): PickingSettingsBuilder;

  enabled(value: boolean): PickingSettingsBuilder;
  enabledBind(expr: string): PickingSettingsBuilder;
  faceOrientationPickingMode(value: QmlEnumToken): PickingSettingsBuilder;
  faceOrientationPickingModeBind(expr: string): PickingSettingsBuilder;
  objectName(value: string): PickingSettingsBuilder;
  objectNameBind(expr: string): PickingSettingsBuilder;
  parent(value: QmlValue): PickingSettingsBuilder;
  parentBind(expr: string): PickingSettingsBuilder;
  pickMethod(value: QmlEnumToken): PickingSettingsBuilder;
  pickMethodBind(expr: string): PickingSettingsBuilder;
  pickResultMode(value: QmlEnumToken): PickingSettingsBuilder;
  pickResultModeBind(expr: string): PickingSettingsBuilder;
  worldSpaceTolerance(value: number): PickingSettingsBuilder;
  worldSpaceToleranceBind(expr: string): PickingSettingsBuilder;
  onEnabledChanged(body: string): PickingSettingsBuilder;
  onFaceOrientationPickingModeChanged(body: string): PickingSettingsBuilder;
  onNodeDestroyed(body: string): PickingSettingsBuilder;
  onObjectNameChanged(body: string): PickingSettingsBuilder;
  onParentChanged(body: string): PickingSettingsBuilder;
  onPickMethodChanged(body: string): PickingSettingsBuilder;
  onPickResultModeChanged(body: string): PickingSettingsBuilder;
  onWorldSpaceToleranceChanged(body: string): PickingSettingsBuilder;
}

const PICKINGSETTINGS_META: TypeMetadata = {
  typeName: 'PickingSettings',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'faceOrientationPickingMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'pickMethod', hasValue: true, hasBinding: true },
    { name: 'pickResultMode', hasValue: true, hasBinding: true },
    { name: 'worldSpaceTolerance', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFaceOrientationPickingModeChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onPickMethodChanged', paramCount: 1 },
    { handlerName: 'onPickResultModeChanged', paramCount: 1 },
    { handlerName: 'onWorldSpaceToleranceChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function PickingSettings(): PickingSettingsBuilder {
  return createFluentBuilder('PickingSettings', PICKINGSETTINGS_META) as unknown as PickingSettingsBuilder;
}

export namespace PickingSettings {
  export namespace FaceOrientationPickingMode {
    export const FrontFace = createEnumToken('PickingSettings', 'FaceOrientationPickingMode', 'FrontFace');
    export const BackFace = createEnumToken('PickingSettings', 'FaceOrientationPickingMode', 'BackFace');
    export const FrontAndBackFace = createEnumToken('PickingSettings', 'FaceOrientationPickingMode', 'FrontAndBackFace');
  }
  export namespace PickMethod {
    export const BoundingVolumePicking = createEnumToken('PickingSettings', 'PickMethod', 'BoundingVolumePicking');
    export const TrianglePicking = createEnumToken('PickingSettings', 'PickMethod', 'TrianglePicking');
    export const LinePicking = createEnumToken('PickingSettings', 'PickMethod', 'LinePicking');
    export const PointPicking = createEnumToken('PickingSettings', 'PickMethod', 'PointPicking');
    export const PrimitivePicking = createEnumToken('PickingSettings', 'PickMethod', 'PrimitivePicking');
  }
  export namespace PickResultMode {
    export const NearestPick = createEnumToken('PickingSettings', 'PickResultMode', 'NearestPick');
    export const AllPicks = createEnumToken('PickingSettings', 'PickResultMode', 'AllPicks');
    export const NearestPriorityPick = createEnumToken('PickingSettings', 'PickResultMode', 'NearestPriorityPick');
  }
}
