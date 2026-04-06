// AUTO-GENERATED — DO NOT EDIT
// Type: GraphicsApiFilter
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlEnumToken,
  QmlObjectBuilder,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface GraphicsApiFilterBuilder {
  id(id: string): GraphicsApiFilterBuilder;
  child(obj: QmlObjectBuilder): GraphicsApiFilterBuilder;
  children(...objs: QmlObjectBuilder[]): GraphicsApiFilterBuilder;

  api(value: QmlEnumToken): GraphicsApiFilterBuilder;
  apiBind(expr: string): GraphicsApiFilterBuilder;
  extensions(value: string[]): GraphicsApiFilterBuilder;
  extensionsBind(expr: string): GraphicsApiFilterBuilder;
  majorVersion(value: number): GraphicsApiFilterBuilder;
  majorVersionBind(expr: string): GraphicsApiFilterBuilder;
  minorVersion(value: number): GraphicsApiFilterBuilder;
  minorVersionBind(expr: string): GraphicsApiFilterBuilder;
  objectName(value: string): GraphicsApiFilterBuilder;
  objectNameBind(expr: string): GraphicsApiFilterBuilder;
  profile(value: QmlEnumToken): GraphicsApiFilterBuilder;
  profileBind(expr: string): GraphicsApiFilterBuilder;
  vendor(value: string): GraphicsApiFilterBuilder;
  vendorBind(expr: string): GraphicsApiFilterBuilder;
  onApiChanged(handler: DslSignalHandlerValue): GraphicsApiFilterBuilder;
  onExtensionsChanged(handler: DslSignalHandlerValue): GraphicsApiFilterBuilder;
  onGraphicsApiFilterChanged(handler: DslSignalHandlerValue): GraphicsApiFilterBuilder;
  onMajorVersionChanged(handler: DslSignalHandlerValue): GraphicsApiFilterBuilder;
  onMinorVersionChanged(handler: DslSignalHandlerValue): GraphicsApiFilterBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): GraphicsApiFilterBuilder;
  onProfileChanged(handler: DslSignalHandlerValue): GraphicsApiFilterBuilder;
  onVendorChanged(handler: DslSignalHandlerValue): GraphicsApiFilterBuilder;
}

const GRAPHICSAPIFILTER_META: TypeMetadata = {
  typeName: 'GraphicsApiFilter',
  properties: [
    { name: 'api', hasValue: true, hasBinding: true },
    { name: 'extensions', hasValue: true, hasBinding: true },
    { name: 'majorVersion', hasValue: true, hasBinding: true },
    { name: 'minorVersion', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'profile', hasValue: true, hasBinding: true },
    { name: 'vendor', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onApiChanged', paramCount: 1 },
    { handlerName: 'onExtensionsChanged', paramCount: 1 },
    { handlerName: 'onGraphicsApiFilterChanged', paramCount: 0 },
    { handlerName: 'onMajorVersionChanged', paramCount: 1 },
    { handlerName: 'onMinorVersionChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onProfileChanged', paramCount: 1 },
    { handlerName: 'onVendorChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function GraphicsApiFilter(): GraphicsApiFilterBuilder {
  return createFluentBuilder(
    'GraphicsApiFilter',
    GRAPHICSAPIFILTER_META,
  ) as unknown as GraphicsApiFilterBuilder;
}

export namespace GraphicsApiFilter {
  export namespace Api {
    export const OpenGLES = createEnumToken('GraphicsApiFilter', 'Api', 'OpenGLES');
    export const OpenGL = createEnumToken('GraphicsApiFilter', 'Api', 'OpenGL');
    export const Vulkan = createEnumToken('GraphicsApiFilter', 'Api', 'Vulkan');
    export const DirectX = createEnumToken('GraphicsApiFilter', 'Api', 'DirectX');
    export const RHI = createEnumToken('GraphicsApiFilter', 'Api', 'RHI');
  }
  export namespace OpenGLProfile {
    export const NoProfile = createEnumToken('GraphicsApiFilter', 'OpenGLProfile', 'NoProfile');
    export const CoreProfile = createEnumToken('GraphicsApiFilter', 'OpenGLProfile', 'CoreProfile');
    export const CompatibilityProfile = createEnumToken(
      'GraphicsApiFilter',
      'OpenGLProfile',
      'CompatibilityProfile',
    );
  }
}
