// AUTO-GENERATED — DO NOT EDIT
// Type: InputHandler3D
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlPoint,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface InputHandler3DBuilder {
  id(id: string): InputHandler3DBuilder;
  child(obj: QmlObjectBuilder): InputHandler3DBuilder;

  inputPosition(value: QmlPoint): InputHandler3DBuilder;
  inputPositionBind(expr: string): InputHandler3DBuilder;
  inputView(value: QmlEnumToken): InputHandler3DBuilder;
  inputViewBind(expr: string): InputHandler3DBuilder;
  objectName(value: string): InputHandler3DBuilder;
  objectNameBind(expr: string): InputHandler3DBuilder;
  rotationEnabled(value: boolean): InputHandler3DBuilder;
  rotationEnabledBind(expr: string): InputHandler3DBuilder;
  scene(value: QmlValue): InputHandler3DBuilder;
  sceneBind(expr: string): InputHandler3DBuilder;
  selectionEnabled(value: boolean): InputHandler3DBuilder;
  selectionEnabledBind(expr: string): InputHandler3DBuilder;
  zoomAtTargetEnabled(value: boolean): InputHandler3DBuilder;
  zoomAtTargetEnabledBind(expr: string): InputHandler3DBuilder;
  zoomEnabled(value: boolean): InputHandler3DBuilder;
  zoomEnabledBind(expr: string): InputHandler3DBuilder;
  onInputViewChanged(body: string): InputHandler3DBuilder;
  onObjectNameChanged(body: string): InputHandler3DBuilder;
  onPositionChanged(body: string): InputHandler3DBuilder;
  onRotationEnabledChanged(body: string): InputHandler3DBuilder;
  onSceneChanged(body: string): InputHandler3DBuilder;
  onSelectionEnabledChanged(body: string): InputHandler3DBuilder;
  onZoomAtTargetEnabledChanged(body: string): InputHandler3DBuilder;
  onZoomEnabledChanged(body: string): InputHandler3DBuilder;
}

const INPUTHANDLER3D_META: TypeMetadata = {
  typeName: 'InputHandler3D',
  properties: [
    { name: 'inputPosition', hasValue: true, hasBinding: true },
    { name: 'inputView', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'rotationEnabled', hasValue: true, hasBinding: true },
    { name: 'scene', hasValue: true, hasBinding: true },
    { name: 'selectionEnabled', hasValue: true, hasBinding: true },
    { name: 'zoomAtTargetEnabled', hasValue: true, hasBinding: true },
    { name: 'zoomEnabled', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onInputViewChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onPositionChanged', paramCount: 1 },
    { handlerName: 'onRotationEnabledChanged', paramCount: 1 },
    { handlerName: 'onSceneChanged', paramCount: 1 },
    { handlerName: 'onSelectionEnabledChanged', paramCount: 1 },
    { handlerName: 'onZoomAtTargetEnabledChanged', paramCount: 1 },
    { handlerName: 'onZoomEnabledChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function InputHandler3D(): InputHandler3DBuilder {
  return createFluentBuilder(
    'InputHandler3D',
    INPUTHANDLER3D_META,
  ) as unknown as InputHandler3DBuilder;
}

export namespace InputHandler3D {
  export namespace InputView {
    export const InputViewNone = createEnumToken('InputHandler3D', 'InputView', 'InputViewNone');
    export const InputViewOnPrimary = createEnumToken(
      'InputHandler3D',
      'InputView',
      'InputViewOnPrimary',
    );
    export const InputViewOnSecondary = createEnumToken(
      'InputHandler3D',
      'InputView',
      'InputViewOnSecondary',
    );
  }
}
