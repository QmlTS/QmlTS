// AUTO-GENERATED — DO NOT EDIT
// Type: Scene2D
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { RenderTargetOutputBuilder } from '../Qt3D.Render/RenderTargetOutput.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
export interface Scene2DBuilder {
  id(id: string): Scene2DBuilder;
  child(obj: QmlObjectBuilder): Scene2DBuilder;
  children(...objs: QmlObjectBuilder[]): Scene2DBuilder;

  enabled(value: boolean): Scene2DBuilder;
  enabledBind(expr: string): Scene2DBuilder;
  item(value: ItemBuilder): Scene2DBuilder;
  itemBind(expr: string): Scene2DBuilder;
  mouseEnabled(value: boolean): Scene2DBuilder;
  mouseEnabledBind(expr: string): Scene2DBuilder;
  objectName(value: string): Scene2DBuilder;
  objectNameBind(expr: string): Scene2DBuilder;
  output(value: RenderTargetOutputBuilder): Scene2DBuilder;
  outputBind(expr: string): Scene2DBuilder;
  parent(value: QmlValue): Scene2DBuilder;
  parentBind(expr: string): Scene2DBuilder;
  renderPolicy(value: QmlEnumToken): Scene2DBuilder;
  renderPolicyBind(expr: string): Scene2DBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): Scene2DBuilder;
  onItemChanged(handler: DslSignalHandlerValue): Scene2DBuilder;
  onMouseEnabledChanged(handler: DslSignalHandlerValue): Scene2DBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): Scene2DBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): Scene2DBuilder;
  onOutputChanged(handler: DslSignalHandlerValue): Scene2DBuilder;
  onParentChanged(handler: DslSignalHandlerValue): Scene2DBuilder;
  onRenderPolicyChanged(handler: DslSignalHandlerValue): Scene2DBuilder;
}

const SCENE2D_META: TypeMetadata = {
  typeName: 'Scene2D',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'item', hasValue: true, hasBinding: true },
    { name: 'mouseEnabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'output', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'renderPolicy', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onItemChanged', paramCount: 1 },
    { handlerName: 'onMouseEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOutputChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRenderPolicyChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'item',
};

export function Scene2D(): Scene2DBuilder {
  return createFluentBuilder('Scene2D', SCENE2D_META) as unknown as Scene2DBuilder;
}

export namespace Scene2D {
  export namespace RenderPolicy {
    export const Continuous = createEnumToken('Scene2D', 'RenderPolicy', 'Continuous');
    export const SingleShot = createEnumToken('Scene2D', 'RenderPolicy', 'SingleShot');
  }
}
