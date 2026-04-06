// AUTO-GENERATED — DO NOT EDIT
// Type: AssetDownloader
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlObjectBuilder,
  QmlUrl,
  TypeMetadata,
} from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
export interface AssetDownloaderBuilder {
  id(id: string): AssetDownloaderBuilder;
  child(obj: QmlObjectBuilder): AssetDownloaderBuilder;
  children(...objs: QmlObjectBuilder[]): AssetDownloaderBuilder;

  downloadBase(value: QmlUrl): AssetDownloaderBuilder;
  downloadBaseBind(expr: string): AssetDownloaderBuilder;
  jsonFileName(value: string): AssetDownloaderBuilder;
  jsonFileNameBind(expr: string): AssetDownloaderBuilder;
  objectName(value: string): AssetDownloaderBuilder;
  objectNameBind(expr: string): AssetDownloaderBuilder;
  offlineAssetsFilePath(value: QmlUrl): AssetDownloaderBuilder;
  offlineAssetsFilePathBind(expr: string): AssetDownloaderBuilder;
  preferredLocalDownloadDir(value: QmlUrl): AssetDownloaderBuilder;
  preferredLocalDownloadDirBind(expr: string): AssetDownloaderBuilder;
  zipFileName(value: string): AssetDownloaderBuilder;
  zipFileNameBind(expr: string): AssetDownloaderBuilder;
  onDownloadBaseChanged(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
  onFinished(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
  onJsonFileNameChanged(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
  onLocalDownloadDirChanged(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
  onOfflineAssetsFilePathChanged(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
  onPreferredLocalDownloadDirChanged(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
  onProgressChanged(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
  onStarted(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
  onZipFileNameChanged(handler: DslSignalHandlerValue): AssetDownloaderBuilder;
}

const ASSETDOWNLOADER_META: TypeMetadata = {
  typeName: 'AssetDownloader',
  properties: [
    { name: 'downloadBase', hasValue: true, hasBinding: true },
    { name: 'jsonFileName', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'offlineAssetsFilePath', hasValue: true, hasBinding: true },
    { name: 'preferredLocalDownloadDir', hasValue: true, hasBinding: true },
    { name: 'zipFileName', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onDownloadBaseChanged', paramCount: 1 },
    { handlerName: 'onFinished', paramCount: 1 },
    { handlerName: 'onJsonFileNameChanged', paramCount: 1 },
    { handlerName: 'onLocalDownloadDirChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onOfflineAssetsFilePathChanged', paramCount: 1 },
    { handlerName: 'onPreferredLocalDownloadDirChanged', paramCount: 1 },
    { handlerName: 'onProgressChanged', paramCount: 3 },
    { handlerName: 'onStarted', paramCount: 0 },
    { handlerName: 'onZipFileNameChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function AssetDownloader(): AssetDownloaderBuilder {
  return createFluentBuilder(
    'AssetDownloader',
    ASSETDOWNLOADER_META,
  ) as unknown as AssetDownloaderBuilder;
}
