// AUTO-GENERATED — DO NOT EDIT
// Type: MenuItemGroup
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { MenuItemBuilder } from './MenuItem.js';
export interface MenuItemGroupBuilder {
  id(id: string): MenuItemGroupBuilder;
  child(obj: QmlObjectBuilder): MenuItemGroupBuilder;
  children(...objs: QmlObjectBuilder[]): MenuItemGroupBuilder;

  checkedItem(value: MenuItemBuilder): MenuItemGroupBuilder;
  checkedItemBind(expr: string): MenuItemGroupBuilder;
  enabled(value: boolean): MenuItemGroupBuilder;
  enabledBind(expr: string): MenuItemGroupBuilder;
  exclusive(value: boolean): MenuItemGroupBuilder;
  exclusiveBind(expr: string): MenuItemGroupBuilder;
  objectName(value: string): MenuItemGroupBuilder;
  objectNameBind(expr: string): MenuItemGroupBuilder;
  visible(value: boolean): MenuItemGroupBuilder;
  visibleBind(expr: string): MenuItemGroupBuilder;
  onCheckedItemChanged(handler: DslSignalHandlerValue): MenuItemGroupBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): MenuItemGroupBuilder;
  onExclusiveChanged(handler: DslSignalHandlerValue): MenuItemGroupBuilder;
  onHovered(handler: DslSignalHandlerValue): MenuItemGroupBuilder;
  onItemsChanged(handler: DslSignalHandlerValue): MenuItemGroupBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MenuItemGroupBuilder;
  onTriggered(handler: DslSignalHandlerValue): MenuItemGroupBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): MenuItemGroupBuilder;
}

const MENUITEMGROUP_META: TypeMetadata = {
  typeName: 'MenuItemGroup',
  properties: [
    { name: 'checkedItem', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'exclusive', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCheckedItemChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onExclusiveChanged', paramCount: 0 },
    { handlerName: 'onHovered', paramCount: 1 },
    { handlerName: 'onItemsChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onTriggered', paramCount: 1 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function MenuItemGroup(): MenuItemGroupBuilder {
  return createFluentBuilder(
    'MenuItemGroup',
    MENUITEMGROUP_META,
  ) as unknown as MenuItemGroupBuilder;
}
