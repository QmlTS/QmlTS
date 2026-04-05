// AUTO-GENERATED — DO NOT EDIT
// Type: RenderOutputProvider
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { RenderPassBuilder } from '../QtQuick3D/RenderPass.js';
export interface RenderOutputProviderBuilder {
  id(id: string): RenderOutputProviderBuilder;
  child(obj: QmlObjectBuilder): RenderOutputProviderBuilder;

  attachmentSelector(value: QmlEnumToken): RenderOutputProviderBuilder;
  attachmentSelectorBind(expr: string): RenderOutputProviderBuilder;
  objectName(value: string): RenderOutputProviderBuilder;
  objectNameBind(expr: string): RenderOutputProviderBuilder;
  parent(value: QmlValue): RenderOutputProviderBuilder;
  parentBind(expr: string): RenderOutputProviderBuilder;
  renderPass(value: RenderPassBuilder): RenderOutputProviderBuilder;
  renderPassBind(expr: string): RenderOutputProviderBuilder;
  samplerHint(value: QmlEnumToken): RenderOutputProviderBuilder;
  samplerHintBind(expr: string): RenderOutputProviderBuilder;
  state(value: string): RenderOutputProviderBuilder;
  stateBind(expr: string): RenderOutputProviderBuilder;
  textureSource(value: QmlEnumToken): RenderOutputProviderBuilder;
  textureSourceBind(expr: string): RenderOutputProviderBuilder;
  onAttachmentSelectorChanged(body: string): RenderOutputProviderBuilder;
  onChildrenChanged(body: string): RenderOutputProviderBuilder;
  onObjectNameChanged(body: string): RenderOutputProviderBuilder;
  onParentChanged(body: string): RenderOutputProviderBuilder;
  onRenderPassChanged(body: string): RenderOutputProviderBuilder;
  onSamplerHintChanged(body: string): RenderOutputProviderBuilder;
  onStateChanged(body: string): RenderOutputProviderBuilder;
  onTextureSourceChanged(body: string): RenderOutputProviderBuilder;
}

const RENDEROUTPUTPROVIDER_META: TypeMetadata = {
  typeName: 'RenderOutputProvider',
  properties: [
    { name: 'attachmentSelector', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderPass', hasValue: true, hasBinding: true },
    { name: 'samplerHint', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'textureSource', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAttachmentSelectorChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onRenderPassChanged', paramCount: 0 },
    { handlerName: 'onSamplerHintChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onTextureSourceChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function RenderOutputProvider(): RenderOutputProviderBuilder {
  return createFluentBuilder('RenderOutputProvider', RENDEROUTPUTPROVIDER_META) as unknown as RenderOutputProviderBuilder;
}

export namespace RenderOutputProvider {
  export namespace AttachmentSelector {
    export const Attachment0 = createEnumToken('RenderOutputProvider', 'AttachmentSelector', 'Attachment0');
    export const Attachment1 = createEnumToken('RenderOutputProvider', 'AttachmentSelector', 'Attachment1');
    export const Attachment2 = createEnumToken('RenderOutputProvider', 'AttachmentSelector', 'Attachment2');
    export const Attachment3 = createEnumToken('RenderOutputProvider', 'AttachmentSelector', 'Attachment3');
  }
  export namespace SamplerHint {
    export const Sampler2D = createEnumToken('RenderOutputProvider', 'SamplerHint', 'Sampler2D');
    export const Sampler2DArray = createEnumToken('RenderOutputProvider', 'SamplerHint', 'Sampler2DArray');
    export const Sampler3D = createEnumToken('RenderOutputProvider', 'SamplerHint', 'Sampler3D');
    export const SamplerCube = createEnumToken('RenderOutputProvider', 'SamplerHint', 'SamplerCube');
    export const SamplerCubeArray = createEnumToken('RenderOutputProvider', 'SamplerHint', 'SamplerCubeArray');
    export const SamplerBuffer = createEnumToken('RenderOutputProvider', 'SamplerHint', 'SamplerBuffer');
  }
  export namespace TextureSource {
    export const None = createEnumToken('RenderOutputProvider', 'TextureSource', 'None');
    export const UserPassTexture = createEnumToken('RenderOutputProvider', 'TextureSource', 'UserPassTexture');
    export const AoTexture = createEnumToken('RenderOutputProvider', 'TextureSource', 'AoTexture');
    export const DepthTexture = createEnumToken('RenderOutputProvider', 'TextureSource', 'DepthTexture');
    export const ScreenTexture = createEnumToken('RenderOutputProvider', 'TextureSource', 'ScreenTexture');
    export const NormalTexture = createEnumToken('RenderOutputProvider', 'TextureSource', 'NormalTexture');
    export const MotionVectorTexture = createEnumToken('RenderOutputProvider', 'TextureSource', 'MotionVectorTexture');
  }
}
