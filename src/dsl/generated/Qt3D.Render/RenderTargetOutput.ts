// AUTO-GENERATED — DO NOT EDIT
// Type: RenderTargetOutput
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface RenderTargetOutputBuilder {
  id(id: string): RenderTargetOutputBuilder;
  child(obj: QmlObjectBuilder): RenderTargetOutputBuilder;
  children(...objs: QmlObjectBuilder[]): RenderTargetOutputBuilder;

  attachmentPoint(value: QmlEnumToken): RenderTargetOutputBuilder;
  attachmentPointBind(expr: string): RenderTargetOutputBuilder;
  enabled(value: boolean): RenderTargetOutputBuilder;
  enabledBind(expr: string): RenderTargetOutputBuilder;
  face(value: QmlEnumToken): RenderTargetOutputBuilder;
  faceBind(expr: string): RenderTargetOutputBuilder;
  layer(value: number): RenderTargetOutputBuilder;
  layerBind(expr: string): RenderTargetOutputBuilder;
  mipLevel(value: number): RenderTargetOutputBuilder;
  mipLevelBind(expr: string): RenderTargetOutputBuilder;
  objectName(value: string): RenderTargetOutputBuilder;
  objectNameBind(expr: string): RenderTargetOutputBuilder;
  parent(value: QmlValue): RenderTargetOutputBuilder;
  parentBind(expr: string): RenderTargetOutputBuilder;
  texture(value: QmlValue): RenderTargetOutputBuilder;
  textureBind(expr: string): RenderTargetOutputBuilder;
  onAttachmentPointChanged(handler: DslSignalHandlerValue): RenderTargetOutputBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): RenderTargetOutputBuilder;
  onFaceChanged(handler: DslSignalHandlerValue): RenderTargetOutputBuilder;
  onLayerChanged(handler: DslSignalHandlerValue): RenderTargetOutputBuilder;
  onMipLevelChanged(handler: DslSignalHandlerValue): RenderTargetOutputBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): RenderTargetOutputBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): RenderTargetOutputBuilder;
  onParentChanged(handler: DslSignalHandlerValue): RenderTargetOutputBuilder;
  onTextureChanged(handler: DslSignalHandlerValue): RenderTargetOutputBuilder;
}

const RENDERTARGETOUTPUT_META: TypeMetadata = {
  typeName: 'RenderTargetOutput',
  properties: [
    { name: 'attachmentPoint', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'face', hasValue: true, hasBinding: true },
    { name: 'layer', hasValue: true, hasBinding: true },
    { name: 'mipLevel', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'texture', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAttachmentPointChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFaceChanged', paramCount: 1 },
    { handlerName: 'onLayerChanged', paramCount: 1 },
    { handlerName: 'onMipLevelChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onTextureChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function RenderTargetOutput(): RenderTargetOutputBuilder {
  return createFluentBuilder(
    'RenderTargetOutput',
    RENDERTARGETOUTPUT_META,
  ) as unknown as RenderTargetOutputBuilder;
}

export namespace RenderTargetOutput {
  export namespace AttachmentPoint {
    export const Color0 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color0');
    export const Color1 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color1');
    export const Color2 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color2');
    export const Color3 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color3');
    export const Color4 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color4');
    export const Color5 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color5');
    export const Color6 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color6');
    export const Color7 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color7');
    export const Color8 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color8');
    export const Color9 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color9');
    export const Color10 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color10');
    export const Color11 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color11');
    export const Color12 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color12');
    export const Color13 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color13');
    export const Color14 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color14');
    export const Color15 = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Color15');
    export const Depth = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Depth');
    export const Stencil = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Stencil');
    export const DepthStencil = createEnumToken(
      'RenderTargetOutput',
      'AttachmentPoint',
      'DepthStencil',
    );
    export const Left = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Left');
    export const Right = createEnumToken('RenderTargetOutput', 'AttachmentPoint', 'Right');
  }
}
