// AUTO-GENERATED — DO NOT EDIT
// Type: BlendEquationArguments
// Generated from Qt 6.11.0

import type {
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface BlendEquationArgumentsBuilder {
  id(id: string): BlendEquationArgumentsBuilder;
  child(obj: QmlObjectBuilder): BlendEquationArgumentsBuilder;

  bufferIndex(value: number): BlendEquationArgumentsBuilder;
  bufferIndexBind(expr: string): BlendEquationArgumentsBuilder;
  destinationAlpha(value: QmlEnumToken): BlendEquationArgumentsBuilder;
  destinationAlphaBind(expr: string): BlendEquationArgumentsBuilder;
  destinationRgb(value: QmlEnumToken): BlendEquationArgumentsBuilder;
  destinationRgbBind(expr: string): BlendEquationArgumentsBuilder;
  enabled(value: boolean): BlendEquationArgumentsBuilder;
  enabledBind(expr: string): BlendEquationArgumentsBuilder;
  objectName(value: string): BlendEquationArgumentsBuilder;
  objectNameBind(expr: string): BlendEquationArgumentsBuilder;
  parent(value: QmlValue): BlendEquationArgumentsBuilder;
  parentBind(expr: string): BlendEquationArgumentsBuilder;
  sourceAlpha(value: QmlEnumToken): BlendEquationArgumentsBuilder;
  sourceAlphaBind(expr: string): BlendEquationArgumentsBuilder;
  sourceRgb(value: QmlEnumToken): BlendEquationArgumentsBuilder;
  sourceRgbBind(expr: string): BlendEquationArgumentsBuilder;
  onBufferIndexChanged(body: string): BlendEquationArgumentsBuilder;
  onDestinationAlphaChanged(body: string): BlendEquationArgumentsBuilder;
  onDestinationRgbChanged(body: string): BlendEquationArgumentsBuilder;
  onDestinationRgbaChanged(body: string): BlendEquationArgumentsBuilder;
  onEnabledChanged(body: string): BlendEquationArgumentsBuilder;
  onNodeDestroyed(body: string): BlendEquationArgumentsBuilder;
  onObjectNameChanged(body: string): BlendEquationArgumentsBuilder;
  onParentChanged(body: string): BlendEquationArgumentsBuilder;
  onSourceAlphaChanged(body: string): BlendEquationArgumentsBuilder;
  onSourceRgbChanged(body: string): BlendEquationArgumentsBuilder;
  onSourceRgbaChanged(body: string): BlendEquationArgumentsBuilder;
}

const BLENDEQUATIONARGUMENTS_META: TypeMetadata = {
  typeName: 'BlendEquationArguments',
  properties: [
    { name: 'bufferIndex', hasValue: true, hasBinding: true },
    { name: 'destinationAlpha', hasValue: true, hasBinding: true },
    { name: 'destinationRgb', hasValue: true, hasBinding: true },
    { name: 'enabled', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'sourceAlpha', hasValue: true, hasBinding: true },
    { name: 'sourceRgb', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onBufferIndexChanged', paramCount: 1 },
    { handlerName: 'onDestinationAlphaChanged', paramCount: 1 },
    { handlerName: 'onDestinationRgbChanged', paramCount: 1 },
    { handlerName: 'onDestinationRgbaChanged', paramCount: 1 },
    { handlerName: 'onEnabledChanged', paramCount: 1 },
    { handlerName: 'onNodeDestroyed', paramCount: 0 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 1 },
    { handlerName: 'onSourceAlphaChanged', paramCount: 1 },
    { handlerName: 'onSourceRgbChanged', paramCount: 1 },
    { handlerName: 'onSourceRgbaChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function BlendEquationArguments(): BlendEquationArgumentsBuilder {
  return createFluentBuilder(
    'BlendEquationArguments',
    BLENDEQUATIONARGUMENTS_META,
  ) as unknown as BlendEquationArgumentsBuilder;
}

export namespace BlendEquationArguments {
  export namespace Blending {
    export const Zero = createEnumToken('BlendEquationArguments', 'Blending', 'Zero');
    export const One = createEnumToken('BlendEquationArguments', 'Blending', 'One');
    export const SourceColor = createEnumToken('BlendEquationArguments', 'Blending', 'SourceColor');
    export const SourceAlpha = createEnumToken('BlendEquationArguments', 'Blending', 'SourceAlpha');
    export const Source1Alpha = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'Source1Alpha',
    );
    export const Source1Color = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'Source1Color',
    );
    export const DestinationColor = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'DestinationColor',
    );
    export const DestinationAlpha = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'DestinationAlpha',
    );
    export const SourceAlphaSaturate = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'SourceAlphaSaturate',
    );
    export const ConstantColor = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'ConstantColor',
    );
    export const ConstantAlpha = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'ConstantAlpha',
    );
    export const OneMinusSourceColor = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'OneMinusSourceColor',
    );
    export const OneMinusSourceAlpha = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'OneMinusSourceAlpha',
    );
    export const OneMinusDestinationAlpha = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'OneMinusDestinationAlpha',
    );
    export const OneMinusDestinationColor = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'OneMinusDestinationColor',
    );
    export const OneMinusConstantColor = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'OneMinusConstantColor',
    );
    export const OneMinusConstantAlpha = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'OneMinusConstantAlpha',
    );
    export const OneMinusSource1Alpha = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'OneMinusSource1Alpha',
    );
    export const OneMinusSource1Color = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'OneMinusSource1Color',
    );
    export const OneMinusSource1Color0 = createEnumToken(
      'BlendEquationArguments',
      'Blending',
      'OneMinusSource1Color0',
    );
  }
}
