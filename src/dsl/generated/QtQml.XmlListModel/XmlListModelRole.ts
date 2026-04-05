// AUTO-GENERATED — DO NOT EDIT
// Type: XmlListModelRole
// Generated from Qt 6.11.0

import type { QmlObjectBuilder, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface XmlListModelRoleBuilder {
  id(id: string): XmlListModelRoleBuilder;
  child(obj: QmlObjectBuilder): XmlListModelRoleBuilder;

  attributeName(value: string): XmlListModelRoleBuilder;
  attributeNameBind(expr: string): XmlListModelRoleBuilder;
  elementName(value: string): XmlListModelRoleBuilder;
  elementNameBind(expr: string): XmlListModelRoleBuilder;
  name(value: string): XmlListModelRoleBuilder;
  nameBind(expr: string): XmlListModelRoleBuilder;
  objectName(value: string): XmlListModelRoleBuilder;
  objectNameBind(expr: string): XmlListModelRoleBuilder;
  onAttributeNameChanged(body: string): XmlListModelRoleBuilder;
  onElementNameChanged(body: string): XmlListModelRoleBuilder;
  onNameChanged(body: string): XmlListModelRoleBuilder;
  onObjectNameChanged(body: string): XmlListModelRoleBuilder;
}

const XMLLISTMODELROLE_META: TypeMetadata = {
  typeName: 'XmlListModelRole',
  properties: [
    { name: 'attributeName', hasValue: true, hasBinding: true },
    { name: 'elementName', hasValue: true, hasBinding: true },
    { name: 'name', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAttributeNameChanged', paramCount: 0 },
    { handlerName: 'onElementNameChanged', paramCount: 0 },
    { handlerName: 'onNameChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function XmlListModelRole(): XmlListModelRoleBuilder {
  return createFluentBuilder(
    'XmlListModelRole',
    XMLLISTMODELROLE_META,
  ) as unknown as XmlListModelRoleBuilder;
}
