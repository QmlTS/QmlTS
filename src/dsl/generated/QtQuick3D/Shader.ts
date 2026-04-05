// AUTO-GENERATED — DO NOT EDIT
// Type: Shader
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ShaderBuilder {
  id(id: string): ShaderBuilder;
  child(obj: QmlObjectBuilder): ShaderBuilder;

  objectName(value: string): ShaderBuilder;
  objectNameBind(expr: string): ShaderBuilder;
  parent(value: QmlValue): ShaderBuilder;
  parentBind(expr: string): ShaderBuilder;
  shader(value: QmlUrl): ShaderBuilder;
  shaderBind(expr: string): ShaderBuilder;
  stage(value: QmlEnumToken): ShaderBuilder;
  stageBind(expr: string): ShaderBuilder;
  state(value: string): ShaderBuilder;
  stateBind(expr: string): ShaderBuilder;
  onChildrenChanged(body: string): ShaderBuilder;
  onObjectNameChanged(body: string): ShaderBuilder;
  onParentChanged(body: string): ShaderBuilder;
  onShaderChanged(body: string): ShaderBuilder;
  onStageChanged(body: string): ShaderBuilder;
  onStateChanged(body: string): ShaderBuilder;
}

const SHADER_META: TypeMetadata = {
  typeName: 'Shader',
  properties: [
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shader', hasValue: true, hasBinding: true },
    { name: 'stage', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onShaderChanged', paramCount: 0 },
    { handlerName: 'onStageChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
  defaultProperty: 'data',
};

export function Shader(): ShaderBuilder {
  return createFluentBuilder('Shader', SHADER_META) as unknown as ShaderBuilder;
}

export namespace Shader {
  export namespace Stage {
    export const Vertex = createEnumToken('Shader', 'Stage', 'Vertex');
    export const Fragment = createEnumToken('Shader', 'Stage', 'Fragment');
  }
}
