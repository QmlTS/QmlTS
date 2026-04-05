// AUTO-GENERATED — DO NOT EDIT
// Type: ShaderProgramBuilder
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlUrl, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { ShaderProgramBuilder } from './ShaderProgram.js';
export interface ShaderProgramBuilderBuilder {
  id(id: string): ShaderProgramBuilderBuilder;
  child(obj: QmlObjectBuilder): ShaderProgramBuilderBuilder;

  computeShaderGraph(value: QmlUrl): ShaderProgramBuilderBuilder;
  computeShaderGraphBind(expr: string): ShaderProgramBuilderBuilder;
  enabled(value: boolean): ShaderProgramBuilderBuilder;
  enabledBind(expr: string): ShaderProgramBuilderBuilder;
  enabledLayers(value: string[]): ShaderProgramBuilderBuilder;
  enabledLayersBind(expr: string): ShaderProgramBuilderBuilder;
  fragmentShaderGraph(value: QmlUrl): ShaderProgramBuilderBuilder;
  fragmentShaderGraphBind(expr: string): ShaderProgramBuilderBuilder;
  geometryShaderGraph(value: QmlUrl): ShaderProgramBuilderBuilder;
  geometryShaderGraphBind(expr: string): ShaderProgramBuilderBuilder;
  objectName(value: string): ShaderProgramBuilderBuilder;
  objectNameBind(expr: string): ShaderProgramBuilderBuilder;
  parent(value: QmlValue): ShaderProgramBuilderBuilder;
  parentBind(expr: string): ShaderProgramBuilderBuilder;
  shaderProgram(value: ShaderProgramBuilder): ShaderProgramBuilderBuilder;
  shaderProgramBind(expr: string): ShaderProgramBuilderBuilder;
  tessellationControlShaderGraph(value: QmlUrl): ShaderProgramBuilderBuilder;
  tessellationControlShaderGraphBind(expr: string): ShaderProgramBuilderBuilder;
  tessellationEvaluationShaderGraph(value: QmlUrl): ShaderProgramBuilderBuilder;
  tessellationEvaluationShaderGraphBind(expr: string): ShaderProgramBuilderBuilder;
  vertexShaderGraph(value: QmlUrl): ShaderProgramBuilderBuilder;
  vertexShaderGraphBind(expr: string): ShaderProgramBuilderBuilder;
  onComputeShaderCodeChanged(body: string): ShaderProgramBuilderBuilder;
  onComputeShaderGraphChanged(body: string): ShaderProgramBuilderBuilder;
  onEnabledChanged(body: string): ShaderProgramBuilderBuilder;
  onEnabledLayersChanged(body: string): ShaderProgramBuilderBuilder;
  onFragmentShaderCodeChanged(body: string): ShaderProgramBuilderBuilder;
  onFragmentShaderGraphChanged(body: string): ShaderProgramBuilderBuilder;
  onGeometryShaderCodeChanged(body: string): ShaderProgramBuilderBuilder;
  onGeometryShaderGraphChanged(body: string): ShaderProgramBuilderBuilder;
  onNodeDestroyed(body: string): ShaderProgramBuilderBuilder;
  onObjectNameChanged(body: string): ShaderProgramBuilderBuilder;
  onParentChanged(body: string): ShaderProgramBuilderBuilder;
  onShaderProgramChanged(body: string): ShaderProgramBuilderBuilder;
  onTessellationControlShaderCodeChanged(body: string): ShaderProgramBuilderBuilder;
  onTessellationControlShaderGraphChanged(body: string): ShaderProgramBuilderBuilder;
  onTessellationEvaluationShaderCodeChanged(body: string): ShaderProgramBuilderBuilder;
  onTessellationEvaluationShaderGraphChanged(body: string): ShaderProgramBuilderBuilder;
  onVertexShaderCodeChanged(body: string): ShaderProgramBuilderBuilder;
  onVertexShaderGraphChanged(body: string): ShaderProgramBuilderBuilder;
}

const SHADERPROGRAMBUILDER_META: TypeMetadata = {
  typeName: 'ShaderProgramBuilder',
  properties: [
    { name: 'computeShaderGraph', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'enabledLayers', hasValue: true, hasBinding: true },
    { name: 'fragmentShaderGraph', hasValue: true, hasBinding: true },
    { name: 'geometryShaderGraph', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shaderProgram', hasValue: true, hasBinding: true },
    { name: 'tessellationControlShaderGraph', hasValue: true, hasBinding: true },
    { name: 'tessellationEvaluationShaderGraph', hasValue: true, hasBinding: true },
    { name: 'vertexShaderGraph', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onComputeShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onComputeShaderGraphChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onEnabledLayersChanged', paramCount: 1 },
    { handlerName: 'onFragmentShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onFragmentShaderGraphChanged', paramCount: 1 },
    { handlerName: 'onGeometryShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onGeometryShaderGraphChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onShaderProgramChanged', paramCount: 1 },
    { handlerName: 'onTessellationControlShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onTessellationControlShaderGraphChanged', paramCount: 1 },
    { handlerName: 'onTessellationEvaluationShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onTessellationEvaluationShaderGraphChanged', paramCount: 1 },
    { handlerName: 'onVertexShaderCodeChanged', paramCount: 1 },
    { handlerName: 'onVertexShaderGraphChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function ShaderProgramBuilder(): ShaderProgramBuilderBuilder {
  return createFluentBuilder('ShaderProgramBuilder', SHADERPROGRAMBUILDER_META) as unknown as ShaderProgramBuilderBuilder;
}
