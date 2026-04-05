// AUTO-GENERATED — DO NOT EDIT
// Type: SkyboxEntity
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface SkyboxEntityBuilder {
  id(id: string): SkyboxEntityBuilder;
  child(obj: QmlObjectBuilder): SkyboxEntityBuilder;

  baseName(value: string): SkyboxEntityBuilder;
  baseNameBind(expr: string): SkyboxEntityBuilder;
  enabled(value: boolean): SkyboxEntityBuilder;
  enabledBind(expr: string): SkyboxEntityBuilder;
  extension(value: string): SkyboxEntityBuilder;
  extensionBind(expr: string): SkyboxEntityBuilder;
  gammaCorrect(value: boolean): SkyboxEntityBuilder;
  gammaCorrectBind(expr: string): SkyboxEntityBuilder;
  objectName(value: string): SkyboxEntityBuilder;
  objectNameBind(expr: string): SkyboxEntityBuilder;
  parent(value: QmlValue): SkyboxEntityBuilder;
  parentBind(expr: string): SkyboxEntityBuilder;
  onBaseNameChanged(body: string): SkyboxEntityBuilder;
  onEnabledChanged(body: string): SkyboxEntityBuilder;
  onExtensionChanged(body: string): SkyboxEntityBuilder;
  onGammaCorrectEnabledChanged(body: string): SkyboxEntityBuilder;
  onNodeDestroyed(body: string): SkyboxEntityBuilder;
  onObjectNameChanged(body: string): SkyboxEntityBuilder;
  onParentChanged(body: string): SkyboxEntityBuilder;
}

const SKYBOXENTITY_META: TypeMetadata = {
  typeName: 'SkyboxEntity',
  properties: [
    { name: 'baseName', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'extension', hasValue: true, hasBinding: true },
    { name: 'gammaCorrect', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBaseNameChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onExtensionChanged', paramCount: 1 },
    { handlerName: 'onGammaCorrectEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SkyboxEntity(): SkyboxEntityBuilder {
  return createFluentBuilder('SkyboxEntity', SKYBOXENTITY_META) as unknown as SkyboxEntityBuilder;
}
