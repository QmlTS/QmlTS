// AUTO-GENERATED — DO NOT EDIT
// Type: ShaderProgram
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ShaderProgramBuilder {
  id(id: string): ShaderProgramBuilder;
  child(obj: QmlObjectBuilder): ShaderProgramBuilder;
  children(...objs: QmlObjectBuilder[]): ShaderProgramBuilder;

  computeShaderCode(value: string): ShaderProgramBuilder;
  computeShaderCodeBind(expr: string): ShaderProgramBuilder;
  enabled(value: boolean): ShaderProgramBuilder;
  enabledBind(expr: string): ShaderProgramBuilder;
  format(value: QmlEnumToken): ShaderProgramBuilder;
  formatBind(expr: string): ShaderProgramBuilder;
  fragmentShaderCode(value: string): ShaderProgramBuilder;
  fragmentShaderCodeBind(expr: string): ShaderProgramBuilder;
  geometryShaderCode(value: string): ShaderProgramBuilder;
  geometryShaderCodeBind(expr: string): ShaderProgramBuilder;
  objectName(value: string): ShaderProgramBuilder;
  objectNameBind(expr: string): ShaderProgramBuilder;
  parent(value: QmlValue): ShaderProgramBuilder;
  parentBind(expr: string): ShaderProgramBuilder;
  tessellationControlShaderCode(value: string): ShaderProgramBuilder;
  tessellationControlShaderCodeBind(expr: string): ShaderProgramBuilder;
  tessellationEvaluationShaderCode(value: string): ShaderProgramBuilder;
  tessellationEvaluationShaderCodeBind(expr: string): ShaderProgramBuilder;
  vertexShaderCode(value: string): ShaderProgramBuilder;
  vertexShaderCodeBind(expr: string): ShaderProgramBuilder;
  onComputeShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onFormatChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onFragmentShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onGeometryShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onLogChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onTessellationControlShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onTessellationEvaluationShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
  onVertexShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilder;
}

const SHADERPROGRAM_META: TypeMetadata = {
  typeName: 'ShaderProgram',
  properties: [
    { name: 'computeShaderCode', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'format', hasValue: true, hasBinding: true },
    { name: 'fragmentShaderCode', hasValue: true, hasBinding: true },
    { name: 'geometryShaderCode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'tessellationControlShaderCode', hasValue: true, hasBinding: true },
    { name: 'tessellationEvaluationShaderCode', hasValue: true, hasBinding: true },
    { name: 'vertexShaderCode', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onComputeShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFormatChanged', paramCount: 1 },
    { handlerName: 'onFragmentShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onGeometryShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onLogChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onStatusChanged', paramCount: 1 },
    { handlerName: 'onTessellationControlShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onTessellationEvaluationShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onVertexShaderCodeChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ShaderProgram(): ShaderProgramBuilder {
  return createFluentBuilder(
    'ShaderProgram',
    SHADERPROGRAM_META,
  ) as unknown as ShaderProgramBuilder;
}

export namespace ShaderProgram {
  export namespace Format {
    export const GLSL = createEnumToken('ShaderProgram', 'Format', 'GLSL');
    export const SPIRV = createEnumToken('ShaderProgram', 'Format', 'SPIRV');
  }
  export namespace ShaderType {
    export const Vertex = createEnumToken('ShaderProgram', 'ShaderType', 'Vertex');
    export const Fragment = createEnumToken('ShaderProgram', 'ShaderType', 'Fragment');
    export const TessellationControl = createEnumToken(
      'ShaderProgram',
      'ShaderType',
      'TessellationControl',
    );
    export const TessellationEvaluation = createEnumToken(
      'ShaderProgram',
      'ShaderType',
      'TessellationEvaluation',
    );
    export const Geometry = createEnumToken('ShaderProgram', 'ShaderType', 'Geometry');
    export const Compute = createEnumToken('ShaderProgram', 'ShaderType', 'Compute');
  }
  export namespace Status {
    export const NotReady = createEnumToken('ShaderProgram', 'Status', 'NotReady');
    export const Ready = createEnumToken('ShaderProgram', 'Status', 'Ready');
    export const Error = createEnumToken('ShaderProgram', 'Status', 'Error');
  }
}
