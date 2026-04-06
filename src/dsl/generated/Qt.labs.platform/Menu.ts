// AUTO-GENERATED — DO NOT EDIT
// Type: Menu
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
export interface MenuBuilder {
  id(id: string): MenuBuilder;
  child(obj: QmlObjectBuilder): MenuBuilder;
  children(...objs: QmlObjectBuilder[]): MenuBuilder;

  enabled(value: boolean): MenuBuilder;
  enabledBind(expr: string): MenuBuilder;
  font(value: QmlFont): MenuBuilder;
  fontBind(expr: string): MenuBuilder;
  icon(value: QmlValue): MenuBuilder;
  iconBind(expr: string): MenuBuilder;
  minimumWidth(value: number): MenuBuilder;
  minimumWidthBind(expr: string): MenuBuilder;
  objectName(value: string): MenuBuilder;
  objectNameBind(expr: string): MenuBuilder;
  title(value: string): MenuBuilder;
  titleBind(expr: string): MenuBuilder;
  type(value: QmlEnumToken): MenuBuilder;
  typeBind(expr: string): MenuBuilder;
  visible(value: boolean): MenuBuilder;
  visibleBind(expr: string): MenuBuilder;
  onAboutToHide(handler: DslSignalHandlerValue): MenuBuilder;
  onAboutToShow(handler: DslSignalHandlerValue): MenuBuilder;
  onEnabledChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onFontChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onIconChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onItemsChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onMenuBarChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onMinimumWidthChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onParentMenuChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onSystemTrayIconChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onTitleChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onTypeChanged(handler: DslSignalHandlerValue): MenuBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): MenuBuilder;
}

const MENU_META: TypeMetadata = {
  typeName: 'Menu',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'minimumWidth', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'title', hasValue: true, hasBinding: true },
    { name: 'type', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAboutToHide', paramCount: 0 },
    { handlerName: 'onAboutToShow', paramCount: 0 },
    { handlerName: 'onEnabledChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 0 },
    { handlerName: 'onItemsChanged', paramCount: 0 },
    { handlerName: 'onMenuBarChanged', paramCount: 0 },
    { handlerName: 'onMinimumWidthChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentMenuChanged', paramCount: 0 },
    { handlerName: 'onSystemTrayIconChanged', paramCount: 0 },
    { handlerName: 'onTitleChanged', paramCount: 0 },
    { handlerName: 'onTypeChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
  defaultProperty: 'data',
};

export function Menu(): MenuBuilder {
  return createFluentBuilder('Menu', MENU_META) as unknown as MenuBuilder;
}
