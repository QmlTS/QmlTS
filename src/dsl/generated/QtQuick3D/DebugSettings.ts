// AUTO-GENERATED — DO NOT EDIT
// Type: DebugSettings
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
export interface DebugSettingsBuilder {
  id(id: string): DebugSettingsBuilder;
  child(obj: QmlObjectBuilder): DebugSettingsBuilder;

  disableShadowCameraUpdate(value: boolean): DebugSettingsBuilder;
  disableShadowCameraUpdateBind(expr: string): DebugSettingsBuilder;
  drawCascades(value: boolean): DebugSettingsBuilder;
  drawCascadesBind(expr: string): DebugSettingsBuilder;
  drawCulledObjects(value: boolean): DebugSettingsBuilder;
  drawCulledObjectsBind(expr: string): DebugSettingsBuilder;
  drawDirectionalLightShadowBoxes(value: boolean): DebugSettingsBuilder;
  drawDirectionalLightShadowBoxesBind(expr: string): DebugSettingsBuilder;
  drawPointLightShadowBoxes(value: boolean): DebugSettingsBuilder;
  drawPointLightShadowBoxesBind(expr: string): DebugSettingsBuilder;
  drawSceneCascadeIntersection(value: boolean): DebugSettingsBuilder;
  drawSceneCascadeIntersectionBind(expr: string): DebugSettingsBuilder;
  drawShadowCastingBounds(value: boolean): DebugSettingsBuilder;
  drawShadowCastingBoundsBind(expr: string): DebugSettingsBuilder;
  drawShadowReceivingBounds(value: boolean): DebugSettingsBuilder;
  drawShadowReceivingBoundsBind(expr: string): DebugSettingsBuilder;
  materialOverride(value: QmlEnumToken): DebugSettingsBuilder;
  materialOverrideBind(expr: string): DebugSettingsBuilder;
  objectName(value: string): DebugSettingsBuilder;
  objectNameBind(expr: string): DebugSettingsBuilder;
  wireframeEnabled(value: boolean): DebugSettingsBuilder;
  wireframeEnabledBind(expr: string): DebugSettingsBuilder;
  onChanged(body: string): DebugSettingsBuilder;
  onDisableShadowCameraUpdateChanged(body: string): DebugSettingsBuilder;
  onDrawCascadesChanged(body: string): DebugSettingsBuilder;
  onDrawCulledObjectsChanged(body: string): DebugSettingsBuilder;
  onDrawDirectionalLightShadowBoxesChanged(body: string): DebugSettingsBuilder;
  onDrawPointLightShadowBoxesChanged(body: string): DebugSettingsBuilder;
  onDrawSceneCascadeIntersectionChanged(body: string): DebugSettingsBuilder;
  onDrawShadowCastingBoundsChanged(body: string): DebugSettingsBuilder;
  onDrawShadowReceivingBoundsChanged(body: string): DebugSettingsBuilder;
  onMaterialOverrideChanged(body: string): DebugSettingsBuilder;
  onObjectNameChanged(body: string): DebugSettingsBuilder;
  onWireframeEnabledChanged(body: string): DebugSettingsBuilder;
}

const DEBUGSETTINGS_META: TypeMetadata = {
  typeName: 'DebugSettings',
  properties: [
    { name: 'disableShadowCameraUpdate', hasValue: true, hasBinding: true },
    { name: 'drawCascades', hasValue: true, hasBinding: true },
    { name: 'drawCulledObjects', hasValue: true, hasBinding: true },
    { name: 'drawDirectionalLightShadowBoxes', hasValue: true, hasBinding: true },
    { name: 'drawPointLightShadowBoxes', hasValue: true, hasBinding: true },
    { name: 'drawSceneCascadeIntersection', hasValue: true, hasBinding: true },
    { name: 'drawShadowCastingBounds', hasValue: true, hasBinding: true },
    { name: 'drawShadowReceivingBounds', hasValue: true, hasBinding: true },
    { name: 'materialOverride', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'wireframeEnabled', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChanged', paramCount: 0 },
    { handlerName: 'onDisableShadowCameraUpdateChanged', paramCount: 0 },
    { handlerName: 'onDrawCascadesChanged', paramCount: 0 },
    { handlerName: 'onDrawCulledObjectsChanged', paramCount: 0 },
    { handlerName: 'onDrawDirectionalLightShadowBoxesChanged', paramCount: 0 },
    { handlerName: 'onDrawPointLightShadowBoxesChanged', paramCount: 0 },
    { handlerName: 'onDrawSceneCascadeIntersectionChanged', paramCount: 0 },
    { handlerName: 'onDrawShadowCastingBoundsChanged', paramCount: 0 },
    { handlerName: 'onDrawShadowReceivingBoundsChanged', paramCount: 0 },
    { handlerName: 'onMaterialOverrideChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onWireframeEnabledChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function DebugSettings(): DebugSettingsBuilder {
  return createFluentBuilder('DebugSettings', DEBUGSETTINGS_META) as unknown as DebugSettingsBuilder;
}

export namespace DebugSettings {
  export namespace QQuick3DMaterialOverrides {
    export const None = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'None');
    export const BaseColor = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'BaseColor');
    export const Roughness = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'Roughness');
    export const Metalness = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'Metalness');
    export const Diffuse = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'Diffuse');
    export const Specular = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'Specular');
    export const ShadowOcclusion = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'ShadowOcclusion');
    export const Emission = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'Emission');
    export const AmbientOcclusion = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'AmbientOcclusion');
    export const Normals = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'Normals');
    export const Tangents = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'Tangents');
    export const Binormals = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'Binormals');
    export const F0 = createEnumToken('DebugSettings', 'QQuick3DMaterialOverrides', 'F0');
  }
}
