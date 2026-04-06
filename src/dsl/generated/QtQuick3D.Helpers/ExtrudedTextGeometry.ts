// AUTO-GENERATED — DO NOT EDIT
// Type: ExtrudedTextGeometry
// Generated from Qt 6.11.0

import type {
  DslSignalHandlerValue,
  QmlFont,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ExtrudedTextGeometryBuilder {
  id(id: string): ExtrudedTextGeometryBuilder;
  child(obj: QmlObjectBuilder): ExtrudedTextGeometryBuilder;
  children(...objs: QmlObjectBuilder[]): ExtrudedTextGeometryBuilder;

  asynchronous(value: boolean): ExtrudedTextGeometryBuilder;
  asynchronousBind(expr: string): ExtrudedTextGeometryBuilder;
  depth(value: number): ExtrudedTextGeometryBuilder;
  depthBind(expr: string): ExtrudedTextGeometryBuilder;
  font(value: QmlFont): ExtrudedTextGeometryBuilder;
  fontBind(expr: string): ExtrudedTextGeometryBuilder;
  objectName(value: string): ExtrudedTextGeometryBuilder;
  objectNameBind(expr: string): ExtrudedTextGeometryBuilder;
  parent(value: QmlValue): ExtrudedTextGeometryBuilder;
  parentBind(expr: string): ExtrudedTextGeometryBuilder;
  scale(value: number): ExtrudedTextGeometryBuilder;
  scaleBind(expr: string): ExtrudedTextGeometryBuilder;
  state(value: string): ExtrudedTextGeometryBuilder;
  stateBind(expr: string): ExtrudedTextGeometryBuilder;
  text(value: string): ExtrudedTextGeometryBuilder;
  textBind(expr: string): ExtrudedTextGeometryBuilder;
  onAsynchronousChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onChildrenChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onDepthChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onFontChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onGeometryChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onGeometryNodeDirty(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onParentChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onScaleChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onStateChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onStatusChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
  onTextChanged(handler: DslSignalHandlerValue): ExtrudedTextGeometryBuilder;
}

const EXTRUDEDTEXTGEOMETRY_META: TypeMetadata = {
  typeName: 'ExtrudedTextGeometry',
  properties: [
    { name: 'asynchronous', hasValue: true, hasBinding: true },
    { name: 'depth', hasValue: true, hasBinding: true },
    { name: 'font', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'scale', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'text', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onAsynchronousChanged', paramCount: 0 },
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onDepthChanged', paramCount: 0 },
    { handlerName: 'onFontChanged', paramCount: 0 },
    { handlerName: 'onGeometryChanged', paramCount: 0 },
    { handlerName: 'onGeometryNodeDirty', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onScaleChanged', paramCount: 0 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onStatusChanged', paramCount: 0 },
    { handlerName: 'onTextChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function ExtrudedTextGeometry(): ExtrudedTextGeometryBuilder {
  return createFluentBuilder(
    'ExtrudedTextGeometry',
    EXTRUDEDTEXTGEOMETRY_META,
  ) as unknown as ExtrudedTextGeometryBuilder;
}

export namespace ExtrudedTextGeometry {
  export namespace Status {
    export const Null = createEnumToken('ExtrudedTextGeometry', 'Status', 'Null');
    export const Ready = createEnumToken('ExtrudedTextGeometry', 'Status', 'Ready');
    export const Loading = createEnumToken('ExtrudedTextGeometry', 'Status', 'Loading');
    export const Error = createEnumToken('ExtrudedTextGeometry', 'Status', 'Error');
  }
}
