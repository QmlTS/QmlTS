// AUTO-GENERATED — DO NOT EDIT
// Type: WebEngineProfile
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface WebEngineProfileBuilder {
  id(id: string): WebEngineProfileBuilder;
  child(obj: QmlObjectBuilder): WebEngineProfileBuilder;
  children(...objs: QmlObjectBuilder[]): WebEngineProfileBuilder;

  cachePath(value: string): WebEngineProfileBuilder;
  cachePathBind(expr: string): WebEngineProfileBuilder;
  downloadPath(value: string): WebEngineProfileBuilder;
  downloadPathBind(expr: string): WebEngineProfileBuilder;
  httpAcceptLanguage(value: string): WebEngineProfileBuilder;
  httpAcceptLanguageBind(expr: string): WebEngineProfileBuilder;
  httpCacheMaximumSize(value: number): WebEngineProfileBuilder;
  httpCacheMaximumSizeBind(expr: string): WebEngineProfileBuilder;
  httpCacheType(value: QmlEnumToken): WebEngineProfileBuilder;
  httpCacheTypeBind(expr: string): WebEngineProfileBuilder;
  httpUserAgent(value: string): WebEngineProfileBuilder;
  httpUserAgentBind(expr: string): WebEngineProfileBuilder;
  isPushServiceEnabled(value: boolean): WebEngineProfileBuilder;
  isPushServiceEnabledBind(expr: string): WebEngineProfileBuilder;
  objectName(value: string): WebEngineProfileBuilder;
  objectNameBind(expr: string): WebEngineProfileBuilder;
  offTheRecord(value: boolean): WebEngineProfileBuilder;
  offTheRecordBind(expr: string): WebEngineProfileBuilder;
  persistentCookiesPolicy(value: QmlEnumToken): WebEngineProfileBuilder;
  persistentCookiesPolicyBind(expr: string): WebEngineProfileBuilder;
  persistentPermissionsPolicy(value: QmlEnumToken): WebEngineProfileBuilder;
  persistentPermissionsPolicyBind(expr: string): WebEngineProfileBuilder;
  persistentStoragePath(value: string): WebEngineProfileBuilder;
  persistentStoragePathBind(expr: string): WebEngineProfileBuilder;
  spellCheckEnabled(value: boolean): WebEngineProfileBuilder;
  spellCheckEnabledBind(expr: string): WebEngineProfileBuilder;
  spellCheckLanguages(value: string[]): WebEngineProfileBuilder;
  spellCheckLanguagesBind(expr: string): WebEngineProfileBuilder;
  storageName(value: string): WebEngineProfileBuilder;
  storageNameBind(expr: string): WebEngineProfileBuilder;
  onCachePathChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onClearHttpCacheCompleted(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onDownloadFinished(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onDownloadPathChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onDownloadRequested(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onHttpAcceptLanguageChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onHttpCacheMaximumSizeChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onHttpCacheTypeChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onHttpUserAgentChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onOffTheRecordChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onPersistentCookiesPolicyChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onPersistentPermissionsPolicyChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onPersistentStoragePathChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onPresentNotification(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onPushServiceEnabledChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onSpellCheckEnabledChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onSpellCheckLanguagesChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
  onStorageNameChanged(handler: DslSignalHandlerValue): WebEngineProfileBuilder;
}

const WEBENGINEPROFILE_META: TypeMetadata = {
  typeName: 'WebEngineProfile',
  properties: [
    { name: 'cachePath', hasValue: true, hasBinding: true },
    { name: 'downloadPath', hasValue: true, hasBinding: true },
    { name: 'httpAcceptLanguage', hasValue: true, hasBinding: true },
    { name: 'httpCacheMaximumSize', hasValue: true, hasBinding: true },
    { name: 'httpCacheType', hasValue: true, hasBinding: true },
    { name: 'httpUserAgent', hasValue: true, hasBinding: true },
    { name: 'isPushServiceEnabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'offTheRecord', hasValue: true, hasBinding: true },
    { name: 'persistentCookiesPolicy', hasValue: true, hasBinding: true },
    { name: 'persistentPermissionsPolicy', hasValue: true, hasBinding: true },
    { name: 'persistentStoragePath', hasValue: true, hasBinding: true },
    { name: 'spellCheckEnabled', hasValue: true, hasBinding: true },
    { name: 'spellCheckLanguages', hasValue: true, hasBinding: true },
    { name: 'storageName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCachePathChanged', paramCount: 0 },
    { handlerName: 'onClearHttpCacheCompleted', paramCount: 0 },
    { handlerName: 'onDownloadFinished', paramCount: 1 },
    { handlerName: 'onDownloadPathChanged', paramCount: 0 },
    { handlerName: 'onDownloadRequested', paramCount: 1 },
    { handlerName: 'onHttpAcceptLanguageChanged', paramCount: 0 },
    { handlerName: 'onHttpCacheMaximumSizeChanged', paramCount: 0 },
    { handlerName: 'onHttpCacheTypeChanged', paramCount: 0 },
    { handlerName: 'onHttpUserAgentChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOffTheRecordChanged', paramCount: 0 },
    { handlerName: 'onPersistentCookiesPolicyChanged', paramCount: 0 },
    { handlerName: 'onPersistentPermissionsPolicyChanged', paramCount: 0 },
    { handlerName: 'onPersistentStoragePathChanged', paramCount: 0 },
    { handlerName: 'onPresentNotification', paramCount: 1 },
    { handlerName: 'onPushServiceEnabledChanged', paramCount: 0 },
    { handlerName: 'onSpellCheckEnabledChanged', paramCount: 0 },
    { handlerName: 'onSpellCheckLanguagesChanged', paramCount: 0 },
    { handlerName: 'onStorageNameChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function WebEngineProfile(): WebEngineProfileBuilder {
  return createFluentBuilder(
    'WebEngineProfile',
    WEBENGINEPROFILE_META,
  ) as unknown as WebEngineProfileBuilder;
}

export namespace WebEngineProfile {
  export namespace HttpCacheType {
    export const MemoryHttpCache = createEnumToken(
      'WebEngineProfile',
      'HttpCacheType',
      'MemoryHttpCache',
    );
    export const DiskHttpCache = createEnumToken(
      'WebEngineProfile',
      'HttpCacheType',
      'DiskHttpCache',
    );
    export const NoCache = createEnumToken('WebEngineProfile', 'HttpCacheType', 'NoCache');
  }
  export namespace PersistentCookiesPolicy {
    export const NoPersistentCookies = createEnumToken(
      'WebEngineProfile',
      'PersistentCookiesPolicy',
      'NoPersistentCookies',
    );
    export const AllowPersistentCookies = createEnumToken(
      'WebEngineProfile',
      'PersistentCookiesPolicy',
      'AllowPersistentCookies',
    );
    export const ForcePersistentCookies = createEnumToken(
      'WebEngineProfile',
      'PersistentCookiesPolicy',
      'ForcePersistentCookies',
    );
    export const OnlyPersistentCookies = createEnumToken(
      'WebEngineProfile',
      'PersistentCookiesPolicy',
      'OnlyPersistentCookies',
    );
  }
  export namespace PersistentPermissionsPolicy {
    export const AskEveryTime = createEnumToken(
      'WebEngineProfile',
      'PersistentPermissionsPolicy',
      'AskEveryTime',
    );
    export const StoreInMemory = createEnumToken(
      'WebEngineProfile',
      'PersistentPermissionsPolicy',
      'StoreInMemory',
    );
    export const StoreOnDisk = createEnumToken(
      'WebEngineProfile',
      'PersistentPermissionsPolicy',
      'StoreOnDisk',
    );
  }
}
