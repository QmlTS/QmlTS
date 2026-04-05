// AUTO-GENERATED — DO NOT EDIT
// Type: MaterialAdapter
// Generated from Qt 6.11.0

import type { QmlEnumToken, QmlObjectBuilder, QmlUrl, TypeMetadata } from '../../runtime/index.js';
import { createFluentBuilder } from '../../runtime/index.js';
import type { NodeBuilder } from '../QtQuick3D/Node.js';
import type { UniformModelBuilder } from './UniformModel.js';
export interface MaterialAdapterBuilder {
  id(id: string): MaterialAdapterBuilder;
  child(obj: QmlObjectBuilder): MaterialAdapterBuilder;

  cullMode(value: QmlEnumToken): MaterialAdapterBuilder;
  cullModeBind(expr: string): MaterialAdapterBuilder;
  depthDrawMode(value: QmlEnumToken): MaterialAdapterBuilder;
  depthDrawModeBind(expr: string): MaterialAdapterBuilder;
  destinationBlend(value: QmlEnumToken): MaterialAdapterBuilder;
  destinationBlendBind(expr: string): MaterialAdapterBuilder;
  fragmentShader(value: string): MaterialAdapterBuilder;
  fragmentShaderBind(expr: string): MaterialAdapterBuilder;
  materialSaveFile(value: QmlUrl): MaterialAdapterBuilder;
  materialSaveFileBind(expr: string): MaterialAdapterBuilder;
  objectName(value: string): MaterialAdapterBuilder;
  objectNameBind(expr: string): MaterialAdapterBuilder;
  rootNode(value: NodeBuilder): MaterialAdapterBuilder;
  rootNodeBind(expr: string): MaterialAdapterBuilder;
  shadingMode(value: QmlEnumToken): MaterialAdapterBuilder;
  shadingModeBind(expr: string): MaterialAdapterBuilder;
  sourceBlend(value: QmlEnumToken): MaterialAdapterBuilder;
  sourceBlendBind(expr: string): MaterialAdapterBuilder;
  uniformModel(value: UniformModelBuilder): MaterialAdapterBuilder;
  uniformModelBind(expr: string): MaterialAdapterBuilder;
  unsavedChanges(value: boolean): MaterialAdapterBuilder;
  unsavedChangesBind(expr: string): MaterialAdapterBuilder;
  vertexShader(value: string): MaterialAdapterBuilder;
  vertexShaderBind(expr: string): MaterialAdapterBuilder;
  onCullModeChanged(body: string): MaterialAdapterBuilder;
  onDepthDrawModeChanged(body: string): MaterialAdapterBuilder;
  onDstBlendChanged(body: string): MaterialAdapterBuilder;
  onErrorOccurred(body: string): MaterialAdapterBuilder;
  onFragmentShaderChanged(body: string): MaterialAdapterBuilder;
  onFragmentStatusChanged(body: string): MaterialAdapterBuilder;
  onMaterialChanged(body: string): MaterialAdapterBuilder;
  onMaterialSaveFileChanged(body: string): MaterialAdapterBuilder;
  onObjectNameChanged(body: string): MaterialAdapterBuilder;
  onPostMaterialSaved(body: string): MaterialAdapterBuilder;
  onRootNodeChanged(body: string): MaterialAdapterBuilder;
  onShadingModeChanged(body: string): MaterialAdapterBuilder;
  onSrcBlendChanged(body: string): MaterialAdapterBuilder;
  onUniformModelChanged(body: string): MaterialAdapterBuilder;
  onUnsavedChangesChanged(body: string): MaterialAdapterBuilder;
  onVertexShaderChanged(body: string): MaterialAdapterBuilder;
  onVertexStatusChanged(body: string): MaterialAdapterBuilder;
}

const MATERIALADAPTER_META: TypeMetadata = {
  typeName: 'MaterialAdapter',
  properties: [
    { name: 'cullMode', hasValue: true, hasBinding: true },
    { name: 'depthDrawMode', hasValue: true, hasBinding: true },
    { name: 'destinationBlend', hasValue: true, hasBinding: true },
    { name: 'fragmentShader', hasValue: true, hasBinding: true },
    { name: 'materialSaveFile', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rootNode', hasValue: true, hasBinding: true },
    { name: 'shadingMode', hasValue: true, hasBinding: true },
    { name: 'sourceBlend', hasValue: true, hasBinding: true },
    { name: 'uniformModel', hasValue: true, hasBinding: true },
    { name: 'unsavedChanges', hasValue: true, hasBinding: true },
    { name: 'vertexShader', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onCullModeChanged', paramCount: 0 },
    { handlerName: 'onDepthDrawModeChanged', paramCount: 0 },
    { handlerName: 'onDstBlendChanged', paramCount: 0 },
    { handlerName: 'onErrorOccurred', paramCount: 0 },
    { handlerName: 'onFragmentShaderChanged', paramCount: 0 },
    { handlerName: 'onFragmentStatusChanged', paramCount: 0 },
    { handlerName: 'onMaterialChanged', paramCount: 0 },
    { handlerName: 'onMaterialSaveFileChanged', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPostMaterialSaved', paramCount: 0 },
    { handlerName: 'onRootNodeChanged', paramCount: 0 },
    { handlerName: 'onShadingModeChanged', paramCount: 0 },
    { handlerName: 'onSrcBlendChanged', paramCount: 0 },
    { handlerName: 'onUniformModelChanged', paramCount: 0 },
    { handlerName: 'onUnsavedChangesChanged', paramCount: 0 },
    { handlerName: 'onVertexShaderChanged', paramCount: 0 },
    { handlerName: 'onVertexStatusChanged', paramCount: 0 },
  ],
  grouped: [],
  attached: [],
};

export function MaterialAdapter(): MaterialAdapterBuilder {
  return createFluentBuilder(
    'MaterialAdapter',
    MATERIALADAPTER_META,
  ) as unknown as MaterialAdapterBuilder;
}
