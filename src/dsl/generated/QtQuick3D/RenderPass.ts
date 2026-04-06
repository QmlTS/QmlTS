// AUTO-GENERATED — DO NOT EDIT
// Type: RenderPass
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlUrl,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RenderPassBuilder {
  id(id: string): RenderPassBuilder;
  child(obj: QmlObjectBuilder): RenderPassBuilder;
  children(...objs: QmlObjectBuilder[]): RenderPassBuilder;

  augmentShader(value: QmlUrl): RenderPassBuilder;
  augmentShaderBind(expr: string): RenderPassBuilder;
  clearColor(value: QmlColor): RenderPassBuilder;
  clearColorBind(expr: string): RenderPassBuilder;
  depthClearValue(value: number): RenderPassBuilder;
  depthClearValueBind(expr: string): RenderPassBuilder;
  materialMode(value: QmlEnumToken): RenderPassBuilder;
  materialModeBind(expr: string): RenderPassBuilder;
  objectName(value: string): RenderPassBuilder;
  objectNameBind(expr: string): RenderPassBuilder;
  overrideMaterial(value: QmlValue): RenderPassBuilder;
  overrideMaterialBind(expr: string): RenderPassBuilder;
  parent(value: QmlValue): RenderPassBuilder;
  parentBind(expr: string): RenderPassBuilder;
  passMode(value: QmlEnumToken): RenderPassBuilder;
  passModeBind(expr: string): RenderPassBuilder;
  renderTargetFlags(value: QmlEnumToken): RenderPassBuilder;
  renderTargetFlagsBind(expr: string): RenderPassBuilder;
  state(value: string): RenderPassBuilder;
  stateBind(expr: string): RenderPassBuilder;
  stencilClearValue(value: number): RenderPassBuilder;
  stencilClearValueBind(expr: string): RenderPassBuilder;
  onAugmentShaderChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onClearColorChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onDepthClearValueChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onMaterialModeChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onOutputChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onOverrideMaterialChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onParentChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onPassModeChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onRenderTargetFlagsChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onStateChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
  onStencilClearValueChanged(handler: DslSignalHandlerValue): RenderPassBuilder;
}

const RENDERPASS_META: TypeMetadata = {
  typeName: 'RenderPass',
  properties: [
    { name: 'augmentShader', hasValue: true, hasBinding: true },
    { name: 'clearColor', hasValue: true, hasBinding: true },
    { name: 'depthClearValue', hasValue: true, hasBinding: true },
    { name: 'materialMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'overrideMaterial', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'passMode', hasValue: true, hasBinding: true },
    { name: 'renderTargetFlags', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'stencilClearValue', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAugmentShaderChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onClearColorChanged', paramCount: 0 },
    { handlerName: 'onDepthClearValueChanged', paramCount: 0 },
    { handlerName: 'onMaterialModeChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOutputChanged', paramCount: 0 },
    { handlerName: 'onOverrideMaterialChanged', paramCount: 0 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onPassModeChanged', paramCount: 0 },
    { handlerName: 'onRenderTargetFlagsChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStencilClearValueChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function RenderPass(): RenderPassBuilder {
  return createFluentBuilder('RenderPass', RENDERPASS_META) as unknown as RenderPassBuilder;
}

export namespace RenderPass {
  export namespace MaterialModes {
    export const OriginalMaterial = createEnumToken(
      'RenderPass',
      'MaterialModes',
      'OriginalMaterial',
    );
    export const AugmentMaterial = createEnumToken(
      'RenderPass',
      'MaterialModes',
      'AugmentMaterial',
    );
    export const OverrideMaterial = createEnumToken(
      'RenderPass',
      'MaterialModes',
      'OverrideMaterial',
    );
  }
  export namespace PassMode {
    export const UserPass = createEnumToken('RenderPass', 'PassMode', 'UserPass');
    export const SkyboxPass = createEnumToken('RenderPass', 'PassMode', 'SkyboxPass');
    export const Item2DPass = createEnumToken('RenderPass', 'PassMode', 'Item2DPass');
  }
  export namespace RenderTargetFlags {
    export const None = createEnumToken('RenderPass', 'RenderTargetFlags', 'None');
    export const PreserveColorContents = createEnumToken(
      'RenderPass',
      'RenderTargetFlags',
      'PreserveColorContents',
    );
    export const PreserveDepthStencilContents = createEnumToken(
      'RenderPass',
      'RenderTargetFlags',
      'PreserveDepthStencilContents',
    );
    export const DoNotStoreDepthStencilContents = createEnumToken(
      'RenderPass',
      'RenderTargetFlags',
      'DoNotStoreDepthStencilContents',
    );
  }
}
