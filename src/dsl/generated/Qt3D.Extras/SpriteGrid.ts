// AUTO-GENERATED — DO NOT EDIT
// Type: SpriteGrid
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface SpriteGridBuilder {
  id(id: string): SpriteGridBuilder;
  child(obj: QmlObjectBuilder): SpriteGridBuilder;
  children(...objs: QmlObjectBuilder[]): SpriteGridBuilder;

  columns(value: number): SpriteGridBuilder;
  columnsBind(expr: string): SpriteGridBuilder;
  currentIndex(value: number): SpriteGridBuilder;
  currentIndexBind(expr: string): SpriteGridBuilder;
  enabled(value: boolean): SpriteGridBuilder;
  enabledBind(expr: string): SpriteGridBuilder;
  objectName(value: string): SpriteGridBuilder;
  objectNameBind(expr: string): SpriteGridBuilder;
  parent(value: QmlValue): SpriteGridBuilder;
  parentBind(expr: string): SpriteGridBuilder;
  rows(value: number): SpriteGridBuilder;
  rowsBind(expr: string): SpriteGridBuilder;
  texture(value: QmlValue): SpriteGridBuilder;
  textureBind(expr: string): SpriteGridBuilder;
  onColumnsChanged(handler: DslSignalHandlerValue): SpriteGridBuilder;
  onCurrentIndexChanged(handler: DslSignalHandlerValue): SpriteGridBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): SpriteGridBuilder;
  onNodeDestroyed(handler: DslSignalHandlerValue): SpriteGridBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SpriteGridBuilder;
  onParentChanged(handler: DslSignalHandlerValue): SpriteGridBuilder;
  onRowsChanged(handler: DslSignalHandlerValue): SpriteGridBuilder;
  onTextureChanged(handler: DslSignalHandlerValue): SpriteGridBuilder;
  onTextureTransformChanged(handler: DslSignalHandlerValue): SpriteGridBuilder;
}

const SPRITEGRID_META: TypeMetadata = {
  typeName: 'SpriteGrid',
  properties: [
    { name: 'columns', hasValue: true, hasBinding: true },
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rows', hasValue: true, hasBinding: true },
    { name: 'texture', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColumnsChanged', paramCount: 1 },
    { handlerName: 'onCurrentIndexChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRowsChanged', paramCount: 1 },
    { handlerName: 'onTextureChanged', paramCount: 1 },
    { handlerName: 'onTextureTransformChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function SpriteGrid(): SpriteGridBuilder {
  return createFluentBuilder('SpriteGrid', SPRITEGRID_META) as unknown as SpriteGridBuilder;
}
