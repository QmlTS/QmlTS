// AUTO-GENERATED — DO NOT EDIT
// Type: RasterMode
// Generated from Qt 6.11.0

import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
import type { QmlEnumToken, QmlObjectBuilder, QmlValue, TypeMetadata } from '../../runtime/index.js';
export interface RasterModeBuilder {
  id(id: string): RasterModeBuilder;
  child(obj: QmlObjectBuilder): RasterModeBuilder;

  enabled(value: boolean): RasterModeBuilder;
  enabledBind(expr: string): RasterModeBuilder;
  faceMode(value: QmlEnumToken): RasterModeBuilder;
  faceModeBind(expr: string): RasterModeBuilder;
  objectName(value: string): RasterModeBuilder;
  objectNameBind(expr: string): RasterModeBuilder;
  parent(value: QmlValue): RasterModeBuilder;
  parentBind(expr: string): RasterModeBuilder;
  rasterMode(value: QmlEnumToken): RasterModeBuilder;
  rasterModeBind(expr: string): RasterModeBuilder;
  onEnabledChanged(body: string): RasterModeBuilder;
  onFaceModeChanged(body: string): RasterModeBuilder;
  onNodeDestroyed(body: string): RasterModeBuilder;
  onObjectNameChanged(body: string): RasterModeBuilder;
  onParentChanged(body: string): RasterModeBuilder;
  onRasterModeChanged(body: string): RasterModeBuilder;
}

const RASTERMODE_META: TypeMetadata = {
  typeName: 'RasterMode',
  properties: [
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'faceMode', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'rasterMode', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onFaceModeChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onRasterModeChanged', paramCount: 1 },
  ],
  grouped: [
  ],
  attached: [
  ],
};

export function RasterMode(): RasterModeBuilder {
  return createFluentBuilder('RasterMode', RASTERMODE_META) as unknown as RasterModeBuilder;
}

export namespace RasterMode {
  export namespace FaceMode {
    export const Front = createEnumToken('RasterMode', 'FaceMode', 'Front');
    export const Back = createEnumToken('RasterMode', 'FaceMode', 'Back');
    export const FrontAndBack = createEnumToken('RasterMode', 'FaceMode', 'FrontAndBack');
  }
  export namespace RasterMode {
    export const Points = createEnumToken('RasterMode', 'RasterMode', 'Points');
    export const Lines = createEnumToken('RasterMode', 'RasterMode', 'Lines');
    export const Fill = createEnumToken('RasterMode', 'RasterMode', 'Fill');
  }
}
