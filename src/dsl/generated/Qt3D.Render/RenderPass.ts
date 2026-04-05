// AUTO-GENERATED — DO NOT EDIT
// Type: RenderPass
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ShaderProgramBuilder } from './ShaderProgram.js';
export interface RenderPassBuilder {
  id(id: string): RenderPassBuilder;
  child(obj: QmlObjectBuilder): RenderPassBuilder;

  enabled(value: boolean): RenderPassBuilder;
  enabledBind(expr: string): RenderPassBuilder;
  objectName(value: string): RenderPassBuilder;
  objectNameBind(expr: string): RenderPassBuilder;
  parent(value: QmlValue): RenderPassBuilder;
  parentBind(expr: string): RenderPassBuilder;
  shaderProgram(value: ShaderProgramBuilder): RenderPassBuilder;
  shaderProgramBind(expr: string): RenderPassBuilder;
  onEnabledChanged(body: string): RenderPassBuilder;
  onNodeDestroyed(body: string): RenderPassBuilder;
  onObjectNameChanged(body: string): RenderPassBuilder;
  onParentChanged(body: string): RenderPassBuilder;
  onShaderProgramChanged(body: string): RenderPassBuilder;
}

const RENDERPASS_META: TypeMetadata = {
  typeName: 'RenderPass',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'shaderProgram', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onShaderProgramChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function RenderPass(): RenderPassBuilder {
  return createFluentBuilder('RenderPass', RENDERPASS_META) as unknown as RenderPassBuilder;
}
