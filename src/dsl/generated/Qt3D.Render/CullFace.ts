// AUTO-GENERATED — DO NOT EDIT
// Type: CullFace
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface CullFaceBuilder {
  id(id: string): CullFaceBuilder;
  child(obj: QmlObjectBuilder): CullFaceBuilder;

  enabled(value: boolean): CullFaceBuilder;
  enabledBind(expr: string): CullFaceBuilder;
  mode(value: QmlEnumToken): CullFaceBuilder;
  modeBind(expr: string): CullFaceBuilder;
  objectName(value: string): CullFaceBuilder;
  objectNameBind(expr: string): CullFaceBuilder;
  parent(value: QmlValue): CullFaceBuilder;
  parentBind(expr: string): CullFaceBuilder;
  onEnabledChanged(body: string): CullFaceBuilder;
  onModeChanged(body: string): CullFaceBuilder;
  onNodeDestroyed(body: string): CullFaceBuilder;
  onObjectNameChanged(body: string): CullFaceBuilder;
  onParentChanged(body: string): CullFaceBuilder;
}

const CULLFACE_META: TypeMetadata = {
  typeName: 'CullFace',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'mode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onModeChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function CullFace(): CullFaceBuilder {
  return createFluentBuilder('CullFace', CULLFACE_META) as unknown as CullFaceBuilder;
}

export namespace CullFace {
  export namespace CullingMode {
    export const NoCulling = createEnumToken('CullFace', 'CullingMode', 'NoCulling');
    export const Front = createEnumToken('CullFace', 'CullingMode', 'Front');
    export const Back = createEnumToken('CullFace', 'CullingMode', 'Back');
    export const FrontAndBack = createEnumToken('CullFace', 'CullingMode', 'FrontAndBack');
  }
}
