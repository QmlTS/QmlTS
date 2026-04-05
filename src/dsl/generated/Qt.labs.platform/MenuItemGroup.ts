// AUTO-GENERATED — DO NOT EDIT
// Type: MenuItemGroup
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { MenuItemBuilder } from './MenuItem.js';
export interface MenuItemGroupBuilder {
  id(id: string): MenuItemGroupBuilder;
  child(obj: QmlObjectBuilder): MenuItemGroupBuilder;

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
  onCheckedItemChanged(body: string): MenuItemGroupBuilder;
  onEnabledChanged(body: string): MenuItemGroupBuilder;
  onExclusiveChanged(body: string): MenuItemGroupBuilder;
  onHovered(body: string): MenuItemGroupBuilder;
  onItemsChanged(body: string): MenuItemGroupBuilder;
  onObjectNameChanged(body: string): MenuItemGroupBuilder;
  onTriggered(body: string): MenuItemGroupBuilder;
  onVisibleChanged(body: string): MenuItemGroupBuilder;
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
