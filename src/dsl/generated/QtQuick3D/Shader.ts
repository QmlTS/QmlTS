// AUTO-GENERATED — DO NOT EDIT
// Type: Shader
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ShaderBuilder {
  id(id: string): ShaderBuilder;
  child(obj: QmlObjectBuilder): ShaderBuilder;
  children(...objs: QmlObjectBuilder[]): ShaderBuilder;

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
  onChildrenChanged(handler: DslSignalHandlerValue): ShaderBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ShaderBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ShaderBuilder;
  onShaderChanged(handler: DslSignalHandlerValue): ShaderBuilder;
  onStageChanged(handler: DslSignalHandlerValue): ShaderBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ShaderBuilder;
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
  grouped: [],
  attached: [],
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
