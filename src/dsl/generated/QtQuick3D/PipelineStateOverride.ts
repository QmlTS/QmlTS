// AUTO-GENERATED — DO NOT EDIT
// Type: PipelineStateOverride
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlRect,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface PipelineStateOverrideBuilder {
  id(id: string): PipelineStateOverrideBuilder;
  child(obj: QmlObjectBuilder): PipelineStateOverrideBuilder;

  blendEnabled(value: boolean): PipelineStateOverrideBuilder;
  blendEnabledBind(expr: string): PipelineStateOverrideBuilder;
  cullMode(value: QmlEnumToken): PipelineStateOverrideBuilder;
  cullModeBind(expr: string): PipelineStateOverrideBuilder;
  depthFunction(value: QmlEnumToken): PipelineStateOverrideBuilder;
  depthFunctionBind(expr: string): PipelineStateOverrideBuilder;
  depthTestEnabled(value: boolean): PipelineStateOverrideBuilder;
  depthTestEnabledBind(expr: string): PipelineStateOverrideBuilder;
  depthWriteEnabled(value: boolean): PipelineStateOverrideBuilder;
  depthWriteEnabledBind(expr: string): PipelineStateOverrideBuilder;
  objectName(value: string): PipelineStateOverrideBuilder;
  objectNameBind(expr: string): PipelineStateOverrideBuilder;
  parent(value: QmlValue): PipelineStateOverrideBuilder;
  parentBind(expr: string): PipelineStateOverrideBuilder;
  polygonMode(value: QmlEnumToken): PipelineStateOverrideBuilder;
  polygonModeBind(expr: string): PipelineStateOverrideBuilder;
  scissor(value: QmlRect): PipelineStateOverrideBuilder;
  scissorBind(expr: string): PipelineStateOverrideBuilder;
  state(value: string): PipelineStateOverrideBuilder;
  stateBind(expr: string): PipelineStateOverrideBuilder;
  stencilReference(value: number): PipelineStateOverrideBuilder;
  stencilReferenceBind(expr: string): PipelineStateOverrideBuilder;
  stencilWriteMask(value: number): PipelineStateOverrideBuilder;
  stencilWriteMaskBind(expr: string): PipelineStateOverrideBuilder;
  targetBlend0(value: QmlValue): PipelineStateOverrideBuilder;
  targetBlend0Bind(expr: string): PipelineStateOverrideBuilder;
  targetBlend1(value: QmlValue): PipelineStateOverrideBuilder;
  targetBlend1Bind(expr: string): PipelineStateOverrideBuilder;
  targetBlend2(value: QmlValue): PipelineStateOverrideBuilder;
  targetBlend2Bind(expr: string): PipelineStateOverrideBuilder;
  targetBlend3(value: QmlValue): PipelineStateOverrideBuilder;
  targetBlend3Bind(expr: string): PipelineStateOverrideBuilder;
  targetBlend4(value: QmlValue): PipelineStateOverrideBuilder;
  targetBlend4Bind(expr: string): PipelineStateOverrideBuilder;
  targetBlend5(value: QmlValue): PipelineStateOverrideBuilder;
  targetBlend5Bind(expr: string): PipelineStateOverrideBuilder;
  targetBlend6(value: QmlValue): PipelineStateOverrideBuilder;
  targetBlend6Bind(expr: string): PipelineStateOverrideBuilder;
  targetBlend7(value: QmlValue): PipelineStateOverrideBuilder;
  targetBlend7Bind(expr: string): PipelineStateOverrideBuilder;
  usesScissor(value: boolean): PipelineStateOverrideBuilder;
  usesScissorBind(expr: string): PipelineStateOverrideBuilder;
  usesStencilReference(value: boolean): PipelineStateOverrideBuilder;
  usesStencilReferenceBind(expr: string): PipelineStateOverrideBuilder;
  viewport(value: QmlRect): PipelineStateOverrideBuilder;
  viewportBind(expr: string): PipelineStateOverrideBuilder;
  onBlendEnabledChanged(body: string): PipelineStateOverrideBuilder;
  onChildrenChanged(body: string): PipelineStateOverrideBuilder;
  onCullModeChanged(body: string): PipelineStateOverrideBuilder;
  onDepthFunctionChanged(body: string): PipelineStateOverrideBuilder;
  onDepthTestEnabledChanged(body: string): PipelineStateOverrideBuilder;
  onDepthWriteEnabledChanged(body: string): PipelineStateOverrideBuilder;
  onObjectNameChanged(body: string): PipelineStateOverrideBuilder;
  onParentChanged(body: string): PipelineStateOverrideBuilder;
  onPolygonModeChanged(body: string): PipelineStateOverrideBuilder;
  onScissorChanged(body: string): PipelineStateOverrideBuilder;
  onStateChanged(body: string): PipelineStateOverrideBuilder;
  onStencilReferenceChanged(body: string): PipelineStateOverrideBuilder;
  onStencilWriteMaskChanged(body: string): PipelineStateOverrideBuilder;
  onTargetBlend0Changed(body: string): PipelineStateOverrideBuilder;
  onTargetBlend1Changed(body: string): PipelineStateOverrideBuilder;
  onTargetBlend2Changed(body: string): PipelineStateOverrideBuilder;
  onTargetBlend3Changed(body: string): PipelineStateOverrideBuilder;
  onTargetBlend4Changed(body: string): PipelineStateOverrideBuilder;
  onTargetBlend5Changed(body: string): PipelineStateOverrideBuilder;
  onTargetBlend6Changed(body: string): PipelineStateOverrideBuilder;
  onTargetBlend7Changed(body: string): PipelineStateOverrideBuilder;
  onUsesScissorChanged(body: string): PipelineStateOverrideBuilder;
  onUsesStencilReferenceChanged(body: string): PipelineStateOverrideBuilder;
  onViewportChanged(body: string): PipelineStateOverrideBuilder;
}

const PIPELINESTATEOVERRIDE_META: TypeMetadata = {
  typeName: 'PipelineStateOverride',
  properties: [
    { name: 'blendEnabled', hasValue: true, hasBinding: true },
    { name: 'cullMode', hasValue: true, hasBinding: true },
    { name: 'depthFunction', hasValue: true, hasBinding: true },
    { name: 'depthTestEnabled', hasValue: true, hasBinding: true },
    { name: 'depthWriteEnabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'polygonMode', hasValue: true, hasBinding: true },
    { name: 'scissor', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'stencilReference', hasValue: true, hasBinding: true },
    { name: 'stencilWriteMask', hasValue: true, hasBinding: true },
    { name: 'targetBlend0', hasValue: true, hasBinding: true },
    { name: 'targetBlend1', hasValue: true, hasBinding: true },
    { name: 'targetBlend2', hasValue: true, hasBinding: true },
    { name: 'targetBlend3', hasValue: true, hasBinding: true },
    { name: 'targetBlend4', hasValue: true, hasBinding: true },
    { name: 'targetBlend5', hasValue: true, hasBinding: true },
    { name: 'targetBlend6', hasValue: true, hasBinding: true },
    { name: 'targetBlend7', hasValue: true, hasBinding: true },
    { name: 'usesScissor', hasValue: true, hasBinding: true },
    { name: 'usesStencilReference', hasValue: true, hasBinding: true },
    { name: 'viewport', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBlendEnabledChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onCullModeChanged', paramCount: 0 },
    { handlerName: 'onDepthFunctionChanged', paramCount: 0 },
    { handlerName: 'onDepthTestEnabledChanged', paramCount: 0 },
    { handlerName: 'onDepthWriteEnabledChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPolygonModeChanged', paramCount: 0 },
    { handlerName: 'onScissorChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStencilReferenceChanged', paramCount: 0 },
    { handlerName: 'onStencilWriteMaskChanged', paramCount: 0 },
    { handlerName: 'onTargetBlend0Changed', paramCount: 0 },
    { handlerName: 'onTargetBlend1Changed', paramCount: 0 },
    { handlerName: 'onTargetBlend2Changed', paramCount: 0 },
    { handlerName: 'onTargetBlend3Changed', paramCount: 0 },
    { handlerName: 'onTargetBlend4Changed', paramCount: 0 },
    { handlerName: 'onTargetBlend5Changed', paramCount: 0 },
    { handlerName: 'onTargetBlend6Changed', paramCount: 0 },
    { handlerName: 'onTargetBlend7Changed', paramCount: 0 },
    { handlerName: 'onUsesScissorChanged', paramCount: 0 },
    { handlerName: 'onUsesStencilReferenceChanged', paramCount: 0 },
    { handlerName: 'onViewportChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function PipelineStateOverride(): PipelineStateOverrideBuilder {
  return createFluentBuilder(
    'PipelineStateOverride',
    PIPELINESTATEOVERRIDE_META,
  ) as unknown as PipelineStateOverrideBuilder;
}

export namespace PipelineStateOverride {
  export namespace CompareOperation {
    export const Never = createEnumToken('PipelineStateOverride', 'CompareOperation', 'Never');
    export const Less = createEnumToken('PipelineStateOverride', 'CompareOperation', 'Less');
    export const Equal = createEnumToken('PipelineStateOverride', 'CompareOperation', 'Equal');
    export const LessOrEqual = createEnumToken(
      'PipelineStateOverride',
      'CompareOperation',
      'LessOrEqual',
    );
    export const Greater = createEnumToken('PipelineStateOverride', 'CompareOperation', 'Greater');
    export const NotEqual = createEnumToken(
      'PipelineStateOverride',
      'CompareOperation',
      'NotEqual',
    );
    export const GreaterOrEqual = createEnumToken(
      'PipelineStateOverride',
      'CompareOperation',
      'GreaterOrEqual',
    );
    export const Always = createEnumToken('PipelineStateOverride', 'CompareOperation', 'Always');
  }
  export namespace CullMode {
    export const None = createEnumToken('PipelineStateOverride', 'CullMode', 'None');
    export const Front = createEnumToken('PipelineStateOverride', 'CullMode', 'Front');
    export const Back = createEnumToken('PipelineStateOverride', 'CullMode', 'Back');
  }
  export namespace PolygonMode {
    export const Fill = createEnumToken('PipelineStateOverride', 'PolygonMode', 'Fill');
    export const Line = createEnumToken('PipelineStateOverride', 'PolygonMode', 'Line');
  }
}
