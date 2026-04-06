// AUTO-GENERATED — DO NOT EDIT
// Type: SystemTrayIcon
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { MenuBuilder } from './Menu.js';
export interface SystemTrayIconBuilder {
  id(id: string): SystemTrayIconBuilder;
  child(obj: QmlObjectBuilder): SystemTrayIconBuilder;
  children(...objs: QmlObjectBuilder[]): SystemTrayIconBuilder;

  icon(value: QmlValue): SystemTrayIconBuilder;
  iconBind(expr: string): SystemTrayIconBuilder;
  menu(value: MenuBuilder): SystemTrayIconBuilder;
  menuBind(expr: string): SystemTrayIconBuilder;
  objectName(value: string): SystemTrayIconBuilder;
  objectNameBind(expr: string): SystemTrayIconBuilder;
  tooltip(value: string): SystemTrayIconBuilder;
  tooltipBind(expr: string): SystemTrayIconBuilder;
  visible(value: boolean): SystemTrayIconBuilder;
  visibleBind(expr: string): SystemTrayIconBuilder;
  onActivated(handler: DslSignalHandlerValue): SystemTrayIconBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): SystemTrayIconBuilder;
  onIconChanged(handler: DslSignalHandlerValue): SystemTrayIconBuilder;
  onMenuChanged(handler: DslSignalHandlerValue): SystemTrayIconBuilder;
  onMessageClicked(handler: DslSignalHandlerValue): SystemTrayIconBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): SystemTrayIconBuilder;
  onTooltipChanged(handler: DslSignalHandlerValue): SystemTrayIconBuilder;
  onVisibleChanged(handler: DslSignalHandlerValue): SystemTrayIconBuilder;
}

const SYSTEMTRAYICON_META: TypeMetadata = {
  typeName: 'SystemTrayIcon',
  properties: [
    { name: 'icon', hasValue: true, hasBinding: true },
    { name: 'menu', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'tooltip', hasValue: true, hasBinding: true },
    { name: 'visible', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onActivated', paramCount: 1 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onIconChanged', paramCount: 0 },
    { handlerName: 'onMenuChanged', paramCount: 0 },
    { handlerName: 'onMessageClicked', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onTooltipChanged', paramCount: 0 },
    { handlerName: 'onVisibleChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function SystemTrayIcon(): SystemTrayIconBuilder {
  return createFluentBuilder(
    'SystemTrayIcon',
    SYSTEMTRAYICON_META,
  ) as unknown as SystemTrayIconBuilder;
}
