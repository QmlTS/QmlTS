// AUTO-GENERATED — DO NOT EDIT
// Type: StyleKitLayoutItem
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
export interface StyleKitLayoutItemBuilder {
  id(id: string): StyleKitLayoutItemBuilder;
  child(obj: QmlObjectBuilder): StyleKitLayoutItemBuilder;
  children(...objs: QmlObjectBuilder[]): StyleKitLayoutItemBuilder;

  alignment(value: QmlEnumToken): StyleKitLayoutItemBuilder;
  alignmentBind(expr: string): StyleKitLayoutItemBuilder;
  fillHeight(value: boolean): StyleKitLayoutItemBuilder;
  fillHeightBind(expr: string): StyleKitLayoutItemBuilder;
  fillWidth(value: boolean): StyleKitLayoutItemBuilder;
  fillWidthBind(expr: string): StyleKitLayoutItemBuilder;
  item(value: ItemBuilder): StyleKitLayoutItemBuilder;
  itemBind(expr: string): StyleKitLayoutItemBuilder;
  margins(value: QmlValue): StyleKitLayoutItemBuilder;
  marginsBind(expr: string): StyleKitLayoutItemBuilder;
  objectName(value: string): StyleKitLayoutItemBuilder;
  objectNameBind(expr: string): StyleKitLayoutItemBuilder;
  onAlignmentChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
  onFillHeightChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
  onFillWidthChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
  onHeightChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
  onItemChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
  onMarginsChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
  onWidthChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
  onXChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
  onYChanged(handler: DslSignalHandlerValue): StyleKitLayoutItemBuilder;
}

const STYLEKITLAYOUTITEM_META: TypeMetadata = {
  typeName: 'StyleKitLayoutItem',
  properties: [
    { name: 'alignment', hasValue: true, hasBinding: true },
    { name: 'fillHeight', hasValue: true, hasBinding: true },
    { name: 'fillWidth', hasValue: true, hasBinding: true },
    { name: 'item', hasValue: true, hasBinding: true },
    { name: 'margins', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAlignmentChanged', paramCount: 0 },
    { handlerName: 'onFillHeightChanged', paramCount: 0 },
    { handlerName: 'onFillWidthChanged', paramCount: 0 },
    { handlerName: 'onHeightChanged', paramCount: 0 },
    { handlerName: 'onItemChanged', paramCount: 0 },
    { handlerName: 'onMarginsChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onWidthChanged', paramCount: 0 },
    { handlerName: 'onXChanged', paramCount: 0 },
    { handlerName: 'onYChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function StyleKitLayoutItem(): StyleKitLayoutItemBuilder {
  return createFluentBuilder(
    'StyleKitLayoutItem',
    STYLEKITLAYOUTITEM_META,
  ) as unknown as StyleKitLayoutItemBuilder;
}
