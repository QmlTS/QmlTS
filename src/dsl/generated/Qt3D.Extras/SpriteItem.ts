// AUTO-GENERATED — DO NOT EDIT
// Type: SpriteItem
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface SpriteItemBuilder {
  id(id: string): SpriteItemBuilder;
  child(obj: QmlObjectBuilder): SpriteItemBuilder;
  children(...objs: QmlObjectBuilder[]): SpriteItemBuilder;

  enabled(value: boolean): SpriteItemBuilder;
  enabledBind(expr: string): SpriteItemBuilder;
  height(value: number): SpriteItemBuilder;
  heightBind(expr: string): SpriteItemBuilder;
  objectName(value: string): SpriteItemBuilder;
  objectNameBind(expr: string): SpriteItemBuilder;
  parent(value: QmlValue): SpriteItemBuilder;
  parentBind(expr: string): SpriteItemBuilder;
  width(value: number): SpriteItemBuilder;
  widthBind(expr: string): SpriteItemBuilder;
  x(value: number): SpriteItemBuilder;
  xBind(expr: string): SpriteItemBuilder;
  y(value: number): SpriteItemBuilder;
  yBind(expr: string): SpriteItemBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SpriteItemBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): SpriteItemBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): SpriteItemBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SpriteItemBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SpriteItemBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): SpriteItemBuilder;
  onXChanged(handler: DslSignalHandlerValue): SpriteItemBuilder;
  onYChanged(handler: DslSignalHandlerValue): SpriteItemBuilder;
}

const SPRITEITEM_META: TypeMetadata = {
  typeName: 'SpriteItem',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
    { name: 'x', hasValue: true, hasBinding: true },
    { name: 'y', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
    { handlerName: 'onXChanged', paramCount: 1 },
    { handlerName: 'onYChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SpriteItem(): SpriteItemBuilder {
  return createFluentBuilder('SpriteItem', SPRITEITEM_META) as unknown as SpriteItemBuilder;
}
