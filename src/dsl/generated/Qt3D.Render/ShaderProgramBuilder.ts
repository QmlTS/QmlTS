// AUTO-GENERATED — DO NOT EDIT
// Type: ShaderProgramBuilder
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ShaderProgramBuilder as ShaderProgramBuilder_Ref } from './ShaderProgram.js';
export interface ShaderProgramBuilderBuilder {
  id(id: string): ShaderProgramBuilderBuilder;
  child(obj: QmlObjectBuilder): ShaderProgramBuilderBuilder;
  children(...objs: QmlObjectBuilder[]): ShaderProgramBuilderBuilder;

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
  shaderProgram(value: ShaderProgramBuilder_Ref): ShaderProgramBuilderBuilder;
  shaderProgramBind(expr: string): ShaderProgramBuilderBuilder;
  tessellationControlShaderGraph(value: QmlUrl): ShaderProgramBuilderBuilder;
  tessellationControlShaderGraphBind(expr: string): ShaderProgramBuilderBuilder;
  tessellationEvaluationShaderGraph(value: QmlUrl): ShaderProgramBuilderBuilder;
  tessellationEvaluationShaderGraphBind(expr: string): ShaderProgramBuilderBuilder;
  vertexShaderGraph(value: QmlUrl): ShaderProgramBuilderBuilder;
  vertexShaderGraphBind(expr: string): ShaderProgramBuilderBuilder;
  onComputeShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onComputeShaderGraphChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onEnabledLayersChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onFragmentShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onFragmentShaderGraphChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onGeometryShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onGeometryShaderGraphChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onShaderProgramChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onTessellationControlShaderCodeChanged(
    handler: DslSignalHandlerValue,
  ): ShaderProgramBuilderBuilder;
  onTessellationControlShaderGraphChanged(
    handler: DslSignalHandlerValue,
  ): ShaderProgramBuilderBuilder;
  onTessellationEvaluationShaderCodeChanged(
    handler: DslSignalHandlerValue,
  ): ShaderProgramBuilderBuilder;
  onTessellationEvaluationShaderGraphChanged(
    handler: DslSignalHandlerValue,
  ): ShaderProgramBuilderBuilder;
  onVertexShaderCodeChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
  onVertexShaderGraphChanged(handler: DslSignalHandlerValue): ShaderProgramBuilderBuilder;
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
  grouped: [],
  attached: [],
};

export function ShaderProgramBuilder(): ShaderProgramBuilderBuilder {
  return createFluentBuilder(
    'ShaderProgramBuilder',
    SHADERPROGRAMBUILDER_META,
  ) as unknown as ShaderProgramBuilderBuilder;
}
