// AUTO-GENERATED — DO NOT EDIT
// Type: Text2DEntity
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface Text2DEntityBuilder {
  id(id: string): Text2DEntityBuilder;
  child(obj: QmlObjectBuilder): Text2DEntityBuilder;

  alignment(value: QmlEnumToken): Text2DEntityBuilder;
  alignmentBind(expr: string): Text2DEntityBuilder;
  color(value: QmlColor): Text2DEntityBuilder;
  colorBind(expr: string): Text2DEntityBuilder;
  enabled(value: boolean): Text2DEntityBuilder;
  enabledBind(expr: string): Text2DEntityBuilder;
  font(value: QmlFont): Text2DEntityBuilder;
  fontBind(expr: string): Text2DEntityBuilder;
  height(value: number): Text2DEntityBuilder;
  heightBind(expr: string): Text2DEntityBuilder;
  objectName(value: string): Text2DEntityBuilder;
  objectNameBind(expr: string): Text2DEntityBuilder;
  parent(value: QmlValue): Text2DEntityBuilder;
  parentBind(expr: string): Text2DEntityBuilder;
  text(value: string): Text2DEntityBuilder;
  textBind(expr: string): Text2DEntityBuilder;
  width(value: number): Text2DEntityBuilder;
  widthBind(expr: string): Text2DEntityBuilder;
  onColorChanged(body: string): Text2DEntityBuilder;
  onEnabledChanged(body: string): Text2DEntityBuilder;
  onFontChanged(body: string): Text2DEntityBuilder;
  onHeightChanged(body: string): Text2DEntityBuilder;
  onNodeDestroyed(body: string): Text2DEntityBuilder;
  onObjectNameChanged(body: string): Text2DEntityBuilder;
  onParentChanged(body: string): Text2DEntityBuilder;
  onTextChanged(body: string): Text2DEntityBuilder;
  onWidthChanged(body: string): Text2DEntityBuilder;
}

const TEXT2DENTITY_META: TypeMetadata = {
  typeName: 'Text2DEntity',
  properties: [
    { name: 'alignment', hasValue: true, hasBinding: true },
    { name: 'color', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'height', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'width', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onColorChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFontChanged', paramCount: 1 },
    { handlerName: 'onHeightChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onTextChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function Text2DEntity(): Text2DEntityBuilder {
  return createFluentBuilder('Text2DEntity', TEXT2DENTITY_META) as unknown as Text2DEntityBuilder;
}
