// AUTO-GENERATED — DO NOT EDIT
// Type: StyleKitLayout
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
export interface StyleKitLayoutBuilder {
  id(id: string): StyleKitLayoutBuilder;
  child(obj: QmlObjectBuilder): StyleKitLayoutBuilder;

  container(value: ItemBuilder): StyleKitLayoutBuilder;
  containerBind(expr: string): StyleKitLayoutBuilder;
  contentMargins(value: QmlValue): StyleKitLayoutBuilder;
  contentMarginsBind(expr: string): StyleKitLayoutBuilder;
  enabled(value: boolean): StyleKitLayoutBuilder;
  enabledBind(expr: string): StyleKitLayoutBuilder;
  mirrored(value: boolean): StyleKitLayoutBuilder;
  mirroredBind(expr: string): StyleKitLayoutBuilder;
  objectName(value: string): StyleKitLayoutBuilder;
  objectNameBind(expr: string): StyleKitLayoutBuilder;
  spacing(value: number): StyleKitLayoutBuilder;
  spacingBind(expr: string): StyleKitLayoutBuilder;
  onContainerChanged(body: string): StyleKitLayoutBuilder;
  onContentMarginsChanged(body: string): StyleKitLayoutBuilder;
  onEnabledChanged(body: string): StyleKitLayoutBuilder;
  onImplicitHeightChanged(body: string): StyleKitLayoutBuilder;
  onImplicitWidthChanged(body: string): StyleKitLayoutBuilder;
  onLayoutChanged(body: string): StyleKitLayoutBuilder;
  onLayoutItemsChanged(body: string): StyleKitLayoutBuilder;
  onMirroredChanged(body: string): StyleKitLayoutBuilder;
  onObjectNameChanged(body: string): StyleKitLayoutBuilder;
  onPaddingChanged(body: string): StyleKitLayoutBuilder;
  onSpacingChanged(body: string): StyleKitLayoutBuilder;
}

const STYLEKITLAYOUT_META: TypeMetadata = {
  typeName: 'StyleKitLayout',
  properties: [
    { name: 'container', hasValue: true, hasBinding: true },
    { name: 'contentMargins', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'mirrored', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'spacing', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onContainerChanged', paramCount: 0 },
    { handlerName: 'onContentMarginsChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onImplicitHeightChanged', paramCount: 0 },
    { handlerName: 'onImplicitWidthChanged', paramCount: 0 },
    { handlerName: 'onLayoutChanged', paramCount: 0 },
    { handlerName: 'onLayoutItemsChanged', paramCount: 0 },
    { handlerName: 'onMirroredChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPaddingChanged', paramCount: 0 },
    { handlerName: 'onSpacingChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'layoutItems',
};

export function StyleKitLayout(): StyleKitLayoutBuilder {
  return createFluentBuilder(
    'StyleKitLayout',
    STYLEKITLAYOUT_META,
  ) as unknown as StyleKitLayoutBuilder;
}
