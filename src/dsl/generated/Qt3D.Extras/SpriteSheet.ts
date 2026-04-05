// AUTO-GENERATED — DO NOT EDIT
// Type: SpriteSheet
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { SpriteItemBuilder } from './SpriteItem.js';
export interface SpriteSheetBuilder {
  id(id: string): SpriteSheetBuilder;
  child(obj: QmlObjectBuilder): SpriteSheetBuilder;

  currentIndex(value: number): SpriteSheetBuilder;
  currentIndexBind(expr: string): SpriteSheetBuilder;
  enabled(value: boolean): SpriteSheetBuilder;
  enabledBind(expr: string): SpriteSheetBuilder;
  objectName(value: string): SpriteSheetBuilder;
  objectNameBind(expr: string): SpriteSheetBuilder;
  parent(value: QmlValue): SpriteSheetBuilder;
  parentBind(expr: string): SpriteSheetBuilder;
  sprites(value: SpriteItemBuilder[]): SpriteSheetBuilder;
  spritesBind(expr: string): SpriteSheetBuilder;
  texture(value: QmlValue): SpriteSheetBuilder;
  textureBind(expr: string): SpriteSheetBuilder;
  onCurrentIndexChanged(body: string): SpriteSheetBuilder;
  onEnabledChanged(body: string): SpriteSheetBuilder;
  onNodeDestroyed(body: string): SpriteSheetBuilder;
  onObjectNameChanged(body: string): SpriteSheetBuilder;
  onParentChanged(body: string): SpriteSheetBuilder;
  onSpritesChanged(body: string): SpriteSheetBuilder;
  onTextureChanged(body: string): SpriteSheetBuilder;
  onTextureTransformChanged(body: string): SpriteSheetBuilder;
}

const SPRITESHEET_META: TypeMetadata = {
  typeName: 'SpriteSheet',
  properties: [
    { name: 'currentIndex', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sprites', hasValue: true, hasBinding: true },
    { name: 'texture', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCurrentIndexChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSpritesChanged', paramCount: 1 },
    { handlerName: 'onTextureChanged', paramCount: 1 },
    { handlerName: 'onTextureTransformChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function SpriteSheet(): SpriteSheetBuilder {
  return createFluentBuilder('SpriteSheet', SPRITESHEET_META) as unknown as SpriteSheetBuilder;
}
