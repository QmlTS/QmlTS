// AUTO-GENERATED — DO NOT EDIT
// Type: ImageCapture
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface ImageCaptureBuilder {
  id(id: string): ImageCaptureBuilder;
  child(obj: QmlObjectBuilder): ImageCaptureBuilder;

  fileFormat(value: QmlEnumToken): ImageCaptureBuilder;
  fileFormatBind(expr: string): ImageCaptureBuilder;
  metaData(value: QmlValue): ImageCaptureBuilder;
  metaDataBind(expr: string): ImageCaptureBuilder;
  objectName(value: string): ImageCaptureBuilder;
  objectNameBind(expr: string): ImageCaptureBuilder;
  quality(value: QmlEnumToken): ImageCaptureBuilder;
  qualityBind(expr: string): ImageCaptureBuilder;
  onErrorChanged(body: string): ImageCaptureBuilder;
  onErrorOccurred(body: string): ImageCaptureBuilder;
  onFileFormatChanged(body: string): ImageCaptureBuilder;
  onImageAvailable(body: string): ImageCaptureBuilder;
  onImageCaptured(body: string): ImageCaptureBuilder;
  onImageExposed(body: string): ImageCaptureBuilder;
  onImageMetadataAvailable(body: string): ImageCaptureBuilder;
  onImageSaved(body: string): ImageCaptureBuilder;
  onMetaDataChanged(body: string): ImageCaptureBuilder;
  onObjectNameChanged(body: string): ImageCaptureBuilder;
  onPreviewChanged(body: string): ImageCaptureBuilder;
  onQualityChanged(body: string): ImageCaptureBuilder;
  onReadyForCaptureChanged(body: string): ImageCaptureBuilder;
  onResolutionChanged(body: string): ImageCaptureBuilder;
}

const IMAGECAPTURE_META: TypeMetadata = {
  typeName: 'ImageCapture',
  properties: [
    { name: 'fileFormat', hasValue: true, hasBinding: true },
    { name: 'metaData', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'quality', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onErrorChanged', paramCount: 0 },
    { handlerName: 'onErrorOccurred', paramCount: 3 },
    { handlerName: 'onFileFormatChanged', paramCount: 0 },
    { handlerName: 'onImageAvailable', paramCount: 2 },
    { handlerName: 'onImageCaptured', paramCount: 2 },
    { handlerName: 'onImageExposed', paramCount: 1 },
    { handlerName: 'onImageMetadataAvailable', paramCount: 2 },
    { handlerName: 'onImageSaved', paramCount: 2 },
    { handlerName: 'onMetaDataChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPreviewChanged', paramCount: 0 },
    { handlerName: 'onQualityChanged', paramCount: 0 },
    { handlerName: 'onReadyForCaptureChanged', paramCount: 1 },
    { handlerName: 'onResolutionChanged', paramCount: 0 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function ImageCapture(): ImageCaptureBuilder {
  return createFluentBuilder('ImageCapture', IMAGECAPTURE_META) as unknown as ImageCaptureBuilder;
}

export namespace ImageCapture {
  export namespace Error {
    export const NoError = createEnumToken('ImageCapture', 'Error', 'NoError');
    export const NotReadyError = createEnumToken('ImageCapture', 'Error', 'NotReadyError');
    export const ResourceError = createEnumToken('ImageCapture', 'Error', 'ResourceError');
    export const OutOfSpaceError = createEnumToken('ImageCapture', 'Error', 'OutOfSpaceError');
    export const NotSupportedFeatureError = createEnumToken('ImageCapture', 'Error', 'NotSupportedFeatureError');
    export const FormatError = createEnumToken('ImageCapture', 'Error', 'FormatError');
  }
  export namespace FileFormat {
    export const UnspecifiedFormat = createEnumToken('ImageCapture', 'FileFormat', 'UnspecifiedFormat');
    export const JPEG = createEnumToken('ImageCapture', 'FileFormat', 'JPEG');
    export const PNG = createEnumToken('ImageCapture', 'FileFormat', 'PNG');
    export const WebP = createEnumToken('ImageCapture', 'FileFormat', 'WebP');
    export const Tiff = createEnumToken('ImageCapture', 'FileFormat', 'Tiff');
    export const LastFileFormat = createEnumToken('ImageCapture', 'FileFormat', 'LastFileFormat');
  }
  export namespace Quality {
    export const VeryLowQuality = createEnumToken('ImageCapture', 'Quality', 'VeryLowQuality');
    export const LowQuality = createEnumToken('ImageCapture', 'Quality', 'LowQuality');
    export const NormalQuality = createEnumToken('ImageCapture', 'Quality', 'NormalQuality');
    export const HighQuality = createEnumToken('ImageCapture', 'Quality', 'HighQuality');
    export const VeryHighQuality = createEnumToken('ImageCapture', 'Quality', 'VeryHighQuality');
  }
}
