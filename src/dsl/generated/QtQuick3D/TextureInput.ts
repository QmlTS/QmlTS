// AUTO-GENERATED — DO NOT EDIT
// Type: TextureInput
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { TextureBuilder } from './Texture.js';
export interface TextureInputBuilder {
  id(id: string): TextureInputBuilder;
  child(obj: QmlObjectBuilder): TextureInputBuilder;
  children(...objs: QmlObjectBuilder[]): TextureInputBuilder;

  enabled(value: boolean): TextureInputBuilder;
  enabledBind(expr: string): TextureInputBuilder;
  objectName(value: string): TextureInputBuilder;
  objectNameBind(expr: string): TextureInputBuilder;
  parent(value: QmlValue): TextureInputBuilder;
  parentBind(expr: string): TextureInputBuilder;
  state(value: string): TextureInputBuilder;
  stateBind(expr: string): TextureInputBuilder;
  texture(value: TextureBuilder): TextureInputBuilder;
  textureBind(expr: string): TextureInputBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): TextureInputBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): TextureInputBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): TextureInputBuilder;
  onParentChanged(handler: DslSignalHandlerValue): TextureInputBuilder;
  onStateChanged(handler: DslSignalHandlerValue): TextureInputBuilder;
  onTextureChanged(handler: DslSignalHandlerValue): TextureInputBuilder;
}

const TEXTUREINPUT_META: TypeMetadata = {
  typeName: 'TextureInput',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'texture', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onTextureChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function TextureInput(): TextureInputBuilder {
  return createFluentBuilder('TextureInput', TEXTUREINPUT_META) as unknown as TextureInputBuilder;
}
