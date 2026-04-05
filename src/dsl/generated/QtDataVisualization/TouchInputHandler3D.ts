// AUTO-GENERATED — DO NOT EDIT
// Type: TouchInputHandler3D
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlPoint,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface TouchInputHandler3DBuilder {
  id(id: string): TouchInputHandler3DBuilder;
  child(obj: QmlObjectBuilder): TouchInputHandler3DBuilder;

  inputPosition(value: QmlPoint): TouchInputHandler3DBuilder;
  inputPositionBind(expr: string): TouchInputHandler3DBuilder;
  inputView(value: QmlEnumToken): TouchInputHandler3DBuilder;
  inputViewBind(expr: string): TouchInputHandler3DBuilder;
  objectName(value: string): TouchInputHandler3DBuilder;
  objectNameBind(expr: string): TouchInputHandler3DBuilder;
  rotationEnabled(value: boolean): TouchInputHandler3DBuilder;
  rotationEnabledBind(expr: string): TouchInputHandler3DBuilder;
  scene(value: QmlValue): TouchInputHandler3DBuilder;
  sceneBind(expr: string): TouchInputHandler3DBuilder;
  selectionEnabled(value: boolean): TouchInputHandler3DBuilder;
  selectionEnabledBind(expr: string): TouchInputHandler3DBuilder;
  zoomAtTargetEnabled(value: boolean): TouchInputHandler3DBuilder;
  zoomAtTargetEnabledBind(expr: string): TouchInputHandler3DBuilder;
  zoomEnabled(value: boolean): TouchInputHandler3DBuilder;
  zoomEnabledBind(expr: string): TouchInputHandler3DBuilder;
  onInputViewChanged(body: string): TouchInputHandler3DBuilder;
  onObjectNameChanged(body: string): TouchInputHandler3DBuilder;
  onPositionChanged(body: string): TouchInputHandler3DBuilder;
  onRotationEnabledChanged(body: string): TouchInputHandler3DBuilder;
  onSceneChanged(body: string): TouchInputHandler3DBuilder;
  onSelectionEnabledChanged(body: string): TouchInputHandler3DBuilder;
  onZoomAtTargetEnabledChanged(body: string): TouchInputHandler3DBuilder;
  onZoomEnabledChanged(body: string): TouchInputHandler3DBuilder;
}

const TOUCHINPUTHANDLER3D_META: TypeMetadata = {
  typeName: 'TouchInputHandler3D',
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

export function TouchInputHandler3D(): TouchInputHandler3DBuilder {
  return createFluentBuilder(
    'TouchInputHandler3D',
    TOUCHINPUTHANDLER3D_META,
  ) as unknown as TouchInputHandler3DBuilder;
}

export namespace TouchInputHandler3D {
  export namespace InputView {
    export const InputViewNone = createEnumToken(
      'TouchInputHandler3D',
      'InputView',
      'InputViewNone',
    );
    export const InputViewOnPrimary = createEnumToken(
      'TouchInputHandler3D',
      'InputView',
      'InputViewOnPrimary',
    );
    export const InputViewOnSecondary = createEnumToken(
      'TouchInputHandler3D',
      'InputView',
      'InputViewOnSecondary',
    );
  }
}
