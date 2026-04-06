// AUTO-GENERATED — DO NOT EDIT
// Type: WebEngineProfilePrototype
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface WebEngineProfilePrototypeBuilder {
  id(id: string): WebEngineProfilePrototypeBuilder;
  child(obj: QmlObjectBuilder): WebEngineProfilePrototypeBuilder;
  children(...objs: QmlObjectBuilder[]): WebEngineProfilePrototypeBuilder;

  additionalTrustedCertificateFiles(value: string[]): WebEngineProfilePrototypeBuilder;
  additionalTrustedCertificateFilesBind(expr: string): WebEngineProfilePrototypeBuilder;
  cachePath(value: string): WebEngineProfilePrototypeBuilder;
  cachePathBind(expr: string): WebEngineProfilePrototypeBuilder;
  httpCacheMaximumSize(value: number): WebEngineProfilePrototypeBuilder;
  httpCacheMaximumSizeBind(expr: string): WebEngineProfilePrototypeBuilder;
  httpCacheType(value: QmlEnumToken): WebEngineProfilePrototypeBuilder;
  httpCacheTypeBind(expr: string): WebEngineProfilePrototypeBuilder;
  objectName(value: string): WebEngineProfilePrototypeBuilder;
  objectNameBind(expr: string): WebEngineProfilePrototypeBuilder;
  persistentCookiesPolicy(value: QmlEnumToken): WebEngineProfilePrototypeBuilder;
  persistentCookiesPolicyBind(expr: string): WebEngineProfilePrototypeBuilder;
  persistentPermissionsPolicy(value: QmlEnumToken): WebEngineProfilePrototypeBuilder;
  persistentPermissionsPolicyBind(expr: string): WebEngineProfilePrototypeBuilder;
  persistentStoragePath(value: string): WebEngineProfilePrototypeBuilder;
  persistentStoragePathBind(expr: string): WebEngineProfilePrototypeBuilder;
  storageName(value: string): WebEngineProfilePrototypeBuilder;
  storageNameBind(expr: string): WebEngineProfilePrototypeBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): WebEngineProfilePrototypeBuilder;
}

const WEBENGINEPROFILEPROTOTYPE_META: TypeMetadata = {
  typeName: 'WebEngineProfilePrototype',
  properties: [
    { name: 'additionalTrustedCertificateFiles', hasValue: true, hasBinding: true },
    { name: 'cachePath', hasValue: true, hasBinding: true },
    { name: 'httpCacheMaximumSize', hasValue: true, hasBinding: true },
    { name: 'httpCacheType', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'persistentCookiesPolicy', hasValue: true, hasBinding: true },
    { name: 'persistentPermissionsPolicy', hasValue: true, hasBinding: true },
    { name: 'persistentStoragePath', hasValue: true, hasBinding: true },
    { name: 'storageName', hasValue: true, hasBinding: true },
  ],
  signals: [{ handlerName: 'onObjectNameChanged', paramCount: 1 }],
  grouped: [],
  attached: [],
};

export function WebEngineProfilePrototype(): WebEngineProfilePrototypeBuilder {
  return createFluentBuilder(
    'WebEngineProfilePrototype',
    WEBENGINEPROFILEPROTOTYPE_META,
  ) as unknown as WebEngineProfilePrototypeBuilder;
}
