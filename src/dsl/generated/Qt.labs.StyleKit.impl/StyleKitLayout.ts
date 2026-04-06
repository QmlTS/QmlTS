// AUTO-GENERATED — DO NOT EDIT
// Type: StyleKitLayout
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { ItemBuilder } from '../QtQuick/Item.js';
export interface StyleKitLayoutBuilder {
  id(id: string): StyleKitLayoutBuilder;
  child(obj: QmlObjectBuilder): StyleKitLayoutBuilder;
  children(...objs: QmlObjectBuilder[]): StyleKitLayoutBuilder;

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
  onContainerChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onContentMarginsChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onImplicitHeightChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onImplicitWidthChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onLayoutChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onLayoutItemsChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onMirroredChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onPaddingChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
  onSpacingChanged(handler: DslSignalHandlerValue): StyleKitLayoutBuilder;
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
