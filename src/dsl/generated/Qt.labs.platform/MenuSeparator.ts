// AUTO-GENERATED — DO NOT EDIT
// Type: MenuSeparator
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlFont,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { MenuItemGroupBuilder } from './MenuItemGroup.js';
export interface MenuSeparatorBuilder {
  id(id: string): MenuSeparatorBuilder;
  child(obj: QmlObjectBuilder): MenuSeparatorBuilder;
  children(...objs: QmlObjectBuilder[]): MenuSeparatorBuilder;

  checkable(value: boolean): MenuSeparatorBuilder;
  checkableBind(expr: string): MenuSeparatorBuilder;
  checked(value: boolean): MenuSeparatorBuilder;
  checkedBind(expr: string): MenuSeparatorBuilder;
  enabled(value: boolean): MenuSeparatorBuilder;
  enabledBind(expr: string): MenuSeparatorBuilder;
  font(value: QmlFont): MenuSeparatorBuilder;
  fontBind(expr: string): MenuSeparatorBuilder;
  group(value: MenuItemGroupBuilder): MenuSeparatorBuilder;
  groupBind(expr: string): MenuSeparatorBuilder;
  icon(value: QmlValue): MenuSeparatorBuilder;
  iconBind(expr: string): MenuSeparatorBuilder;
  objectName(value: string): MenuSeparatorBuilder;
  objectNameBind(expr: string): MenuSeparatorBuilder;
  role(value: QmlEnumToken): MenuSeparatorBuilder;
  roleBind(expr: string): MenuSeparatorBuilder;
  separator(value: boolean): MenuSeparatorBuilder;
  separatorBind(expr: string): MenuSeparatorBuilder;
  shortcut(value: QmlValue): MenuSeparatorBuilder;
  shortcutBind(expr: string): MenuSeparatorBuilder;
  text(value: string): MenuSeparatorBuilder;
  textBind(expr: string): MenuSeparatorBuilder;
  visible(value: boolean): MenuSeparatorBuilder;
  visibleBind(expr: string): MenuSeparatorBuilder;
  onCheckableChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onCheckedChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onFontChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onGroupChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onHovered(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onIconChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onMenuChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onRoleChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onSeparatorChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onShortcutChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onSubMenuChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onTextChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onTriggered(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): MenuSeparatorBuilder;
}

const MENUSEPARATOR_META: TypeMetadata = {
  typeName: 'MenuSeparator',
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
  grouped: [],
  attached: [],
};

export function MenuSeparator(): MenuSeparatorBuilder {
  return createFluentBuilder(
    'MenuSeparator',
    MENUSEPARATOR_META,
  ) as unknown as MenuSeparatorBuilder;
}
