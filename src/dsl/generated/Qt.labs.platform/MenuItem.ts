// AUTO-GENERATED — DO NOT EDIT
// Type: MenuItem
// Generated from Qt 6.11.0

import { createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlFont, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
import type { MenuItemGroupBuilder } from './MenuItemGroup.js';
export interface MenuItemBuilder {
  id(id: string): MenuItemBuilder;
  child(obj: QmlObjectBuilder): MenuItemBuilder;

  checkable(value: boolean): MenuItemBuilder;
  checkableBind(expr: string): MenuItemBuilder;
  checked(value: boolean): MenuItemBuilder;
  checkedBind(expr: string): MenuItemBuilder;
  enabled(value: boolean): MenuItemBuilder;
  enabledBind(expr: string): MenuItemBuilder;
  font(value: QmlFont): MenuItemBuilder;
  fontBind(expr: string): MenuItemBuilder;
  group(value: MenuItemGroupBuilder): MenuItemBuilder;
  groupBind(expr: string): MenuItemBuilder;
  icon(value: QmlValue): MenuItemBuilder;
  iconBind(expr: string): MenuItemBuilder;
  objectName(value: string): MenuItemBuilder;
  objectNameBind(expr: string): MenuItemBuilder;
  role(value: QmlEnumToken): MenuItemBuilder;
  roleBind(expr: string): MenuItemBuilder;
  separator(value: boolean): MenuItemBuilder;
  separatorBind(expr: string): MenuItemBuilder;
  shortcut(value: QmlValue): MenuItemBuilder;
  shortcutBind(expr: string): MenuItemBuilder;
  text(value: string): MenuItemBuilder;
  textBind(expr: string): MenuItemBuilder;
  visible(value: boolean): MenuItemBuilder;
  visibleBind(expr: string): MenuItemBuilder;
  onCheckableChanged(body: string): MenuItemBuilder;
  onCheckedChanged(body: string): MenuItemBuilder;
  onEnabledChanged(body: string): MenuItemBuilder;
  onFontChanged(body: string): MenuItemBuilder;
  onGroupChanged(body: string): MenuItemBuilder;
  onHovered(body: string): MenuItemBuilder;
  onIconChanged(body: string): MenuItemBuilder;
  onMenuChanged(body: string): MenuItemBuilder;
  onObjectNameChanged(body: string): MenuItemBuilder;
  onRoleChanged(body: string): MenuItemBuilder;
  onSeparatorChanged(body: string): MenuItemBuilder;
  onShortcutChanged(body: string): MenuItemBuilder;
  onSubMenuChanged(body: string): MenuItemBuilder;
  onTextChanged(body: string): MenuItemBuilder;
  onTriggered(body: string): MenuItemBuilder;
  onVisibleChanged(body: string): MenuItemBuilder;
}

const MENUITEM_META: TypeMetadata = {
  typeName: 'MenuItem',
  properties: [
    { name: 'checkable', hasValue: true, hasBinding: true },
    { name: 'checked', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'group', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'role', hasValue: true, hasBinding: true },
    { name: 'separator', hasValue: true, hasBinding: true },
    { name: 'shortcut', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCheckableChanged', paramCount: 0 },
    { handlerName: 'onCheckedChanged', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onGroupChanged', paramCount: 0 },
    { handlerName: 'onHovered', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 0 },
    { handlerName: 'onMenuChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onRoleChanged', paramCount: 0 },
    { handlerName: 'onSeparatorChanged', paramCount: 0 },
    { handlerName: 'onShortcutChanged', paramCount: 0 },
    { handlerName: 'onSubMenuChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
    { handlerName: 'onTriggered', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function MenuItem(): MenuItemBuilder {
  return createFluentBuilder('MenuItem', MENUITEM_META) as unknown as MenuItemBuilder;
}
