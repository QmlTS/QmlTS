// AUTO-GENERATED — DO NOT EDIT
// Type: ProceduralSkyTextureData
// Generated from Qt 6.11.0

import type {
  QmlColor,
  QmlEnumToken,
  QmlObjectBuilder,
  QmlValue,
  TypeMetadata,
} from '../../runtime/index.js';
import { createEnumToken, createFluentBuilder } from '../../runtime/index.js';
export interface ProceduralSkyTextureDataBuilder {
  id(id: string): ProceduralSkyTextureDataBuilder;
  child(obj: QmlObjectBuilder): ProceduralSkyTextureDataBuilder;

  groundBottomColor(value: QmlColor): ProceduralSkyTextureDataBuilder;
  groundBottomColorBind(expr: string): ProceduralSkyTextureDataBuilder;
  groundCurve(value: number): ProceduralSkyTextureDataBuilder;
  groundCurveBind(expr: string): ProceduralSkyTextureDataBuilder;
  groundEnergy(value: number): ProceduralSkyTextureDataBuilder;
  groundEnergyBind(expr: string): ProceduralSkyTextureDataBuilder;
  groundHorizonColor(value: QmlColor): ProceduralSkyTextureDataBuilder;
  groundHorizonColorBind(expr: string): ProceduralSkyTextureDataBuilder;
  objectName(value: string): ProceduralSkyTextureDataBuilder;
  objectNameBind(expr: string): ProceduralSkyTextureDataBuilder;
  parent(value: QmlValue): ProceduralSkyTextureDataBuilder;
  parentBind(expr: string): ProceduralSkyTextureDataBuilder;
  skyCurve(value: number): ProceduralSkyTextureDataBuilder;
  skyCurveBind(expr: string): ProceduralSkyTextureDataBuilder;
  skyEnergy(value: number): ProceduralSkyTextureDataBuilder;
  skyEnergyBind(expr: string): ProceduralSkyTextureDataBuilder;
  skyHorizonColor(value: QmlColor): ProceduralSkyTextureDataBuilder;
  skyHorizonColorBind(expr: string): ProceduralSkyTextureDataBuilder;
  skyTopColor(value: QmlColor): ProceduralSkyTextureDataBuilder;
  skyTopColorBind(expr: string): ProceduralSkyTextureDataBuilder;
  state(value: string): ProceduralSkyTextureDataBuilder;
  stateBind(expr: string): ProceduralSkyTextureDataBuilder;
  sunAngleMax(value: number): ProceduralSkyTextureDataBuilder;
  sunAngleMaxBind(expr: string): ProceduralSkyTextureDataBuilder;
  sunAngleMin(value: number): ProceduralSkyTextureDataBuilder;
  sunAngleMinBind(expr: string): ProceduralSkyTextureDataBuilder;
  sunColor(value: QmlColor): ProceduralSkyTextureDataBuilder;
  sunColorBind(expr: string): ProceduralSkyTextureDataBuilder;
  sunCurve(value: number): ProceduralSkyTextureDataBuilder;
  sunCurveBind(expr: string): ProceduralSkyTextureDataBuilder;
  sunEnergy(value: number): ProceduralSkyTextureDataBuilder;
  sunEnergyBind(expr: string): ProceduralSkyTextureDataBuilder;
  sunLatitude(value: number): ProceduralSkyTextureDataBuilder;
  sunLatitudeBind(expr: string): ProceduralSkyTextureDataBuilder;
  sunLongitude(value: number): ProceduralSkyTextureDataBuilder;
  sunLongitudeBind(expr: string): ProceduralSkyTextureDataBuilder;
  textureQuality(value: QmlEnumToken): ProceduralSkyTextureDataBuilder;
  textureQualityBind(expr: string): ProceduralSkyTextureDataBuilder;
  onChildrenChanged(body: string): ProceduralSkyTextureDataBuilder;
  onGroundBottomColorChanged(body: string): ProceduralSkyTextureDataBuilder;
  onGroundCurveChanged(body: string): ProceduralSkyTextureDataBuilder;
  onGroundEnergyChanged(body: string): ProceduralSkyTextureDataBuilder;
  onGroundHorizonColorChanged(body: string): ProceduralSkyTextureDataBuilder;
  onObjectNameChanged(body: string): ProceduralSkyTextureDataBuilder;
  onParentChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSkyCurveChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSkyEnergyChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSkyHorizonColorChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSkyTopColorChanged(body: string): ProceduralSkyTextureDataBuilder;
  onStateChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSunAngleMaxChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSunAngleMinChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSunColorChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSunCurveChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSunEnergyChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSunLatitudeChanged(body: string): ProceduralSkyTextureDataBuilder;
  onSunLongitudeChanged(body: string): ProceduralSkyTextureDataBuilder;
  onTextureDataNodeDirty(body: string): ProceduralSkyTextureDataBuilder;
  onTextureQualityChanged(body: string): ProceduralSkyTextureDataBuilder;
}

const PROCEDURALSKYTEXTUREDATA_META: TypeMetadata = {
  typeName: 'ProceduralSkyTextureData',
  properties: [
    { name: 'groundBottomColor', hasValue: true, hasBinding: true },
    { name: 'groundCurve', hasValue: true, hasBinding: true },
    { name: 'groundEnergy', hasValue: true, hasBinding: true },
    { name: 'groundHorizonColor', hasValue: true, hasBinding: true },
    { name: 'objectName', hasValue: true, hasBinding: true },
    { name: 'parent', hasValue: true, hasBinding: true },
    { name: 'skyCurve', hasValue: true, hasBinding: true },
    { name: 'skyEnergy', hasValue: true, hasBinding: true },
    { name: 'skyHorizonColor', hasValue: true, hasBinding: true },
    { name: 'skyTopColor', hasValue: true, hasBinding: true },
    { name: 'state', hasValue: true, hasBinding: true },
    { name: 'sunAngleMax', hasValue: true, hasBinding: true },
    { name: 'sunAngleMin', hasValue: true, hasBinding: true },
    { name: 'sunColor', hasValue: true, hasBinding: true },
    { name: 'sunCurve', hasValue: true, hasBinding: true },
    { name: 'sunEnergy', hasValue: true, hasBinding: true },
    { name: 'sunLatitude', hasValue: true, hasBinding: true },
    { name: 'sunLongitude', hasValue: true, hasBinding: true },
    { name: 'textureQuality', hasValue: true, hasBinding: true },
  ],
  signals: [
    { handlerName: 'onChildrenChanged', paramCount: 0 },
    { handlerName: 'onGroundBottomColorChanged', paramCount: 1 },
    { handlerName: 'onGroundCurveChanged', paramCount: 1 },
    { handlerName: 'onGroundEnergyChanged', paramCount: 1 },
    { handlerName: 'onGroundHorizonColorChanged', paramCount: 1 },
    { handlerName: 'onObjectNameChanged', paramCount: 1 },
    { handlerName: 'onParentChanged', paramCount: 0 },
    { handlerName: 'onSkyCurveChanged', paramCount: 1 },
    { handlerName: 'onSkyEnergyChanged', paramCount: 1 },
    { handlerName: 'onSkyHorizonColorChanged', paramCount: 1 },
    { handlerName: 'onSkyTopColorChanged', paramCount: 1 },
    { handlerName: 'onStateChanged', paramCount: 0 },
    { handlerName: 'onSunAngleMaxChanged', paramCount: 1 },
    { handlerName: 'onSunAngleMinChanged', paramCount: 1 },
    { handlerName: 'onSunColorChanged', paramCount: 1 },
    { handlerName: 'onSunCurveChanged', paramCount: 1 },
    { handlerName: 'onSunEnergyChanged', paramCount: 1 },
    { handlerName: 'onSunLatitudeChanged', paramCount: 1 },
    { handlerName: 'onSunLongitudeChanged', paramCount: 1 },
    { handlerName: 'onTextureDataNodeDirty', paramCount: 0 },
    { handlerName: 'onTextureQualityChanged', paramCount: 1 },
  ],
  grouped: [],
  attached: [],
};

export function ProceduralSkyTextureData(): ProceduralSkyTextureDataBuilder {
  return createFluentBuilder(
    'ProceduralSkyTextureData',
    PROCEDURALSKYTEXTUREDATA_META,
  ) as unknown as ProceduralSkyTextureDataBuilder;
}

export namespace ProceduralSkyTextureData {
  export namespace Format {
    export const None = createEnumToken('ProceduralSkyTextureData', 'Format', 'None');
    export const RGBA8 = createEnumToken('ProceduralSkyTextureData', 'Format', 'RGBA8');
    export const RGBA16F = createEnumToken('ProceduralSkyTextureData', 'Format', 'RGBA16F');
    export const RGBA32F = createEnumToken('ProceduralSkyTextureData', 'Format', 'RGBA32F');
    export const RGBE8 = createEnumToken('ProceduralSkyTextureData', 'Format', 'RGBE8');
    export const R8 = createEnumToken('ProceduralSkyTextureData', 'Format', 'R8');
    export const R16 = createEnumToken('ProceduralSkyTextureData', 'Format', 'R16');
    export const R16F = createEnumToken('ProceduralSkyTextureData', 'Format', 'R16F');
    export const R32F = createEnumToken('ProceduralSkyTextureData', 'Format', 'R32F');
    export const BC1 = createEnumToken('ProceduralSkyTextureData', 'Format', 'BC1');
    export const BC2 = createEnumToken('ProceduralSkyTextureData', 'Format', 'BC2');
    export const BC3 = createEnumToken('ProceduralSkyTextureData', 'Format', 'BC3');
    export const BC4 = createEnumToken('ProceduralSkyTextureData', 'Format', 'BC4');
    export const BC5 = createEnumToken('ProceduralSkyTextureData', 'Format', 'BC5');
    export const BC6H = createEnumToken('ProceduralSkyTextureData', 'Format', 'BC6H');
    export const BC7 = createEnumToken('ProceduralSkyTextureData', 'Format', 'BC7');
    export const DXT1_RGBA = createEnumToken('ProceduralSkyTextureData', 'Format', 'DXT1_RGBA');
    export const DXT1_RGB = createEnumToken('ProceduralSkyTextureData', 'Format', 'DXT1_RGB');
    export const DXT3_RGBA = createEnumToken('ProceduralSkyTextureData', 'Format', 'DXT3_RGBA');
    export const DXT5_RGBA = createEnumToken('ProceduralSkyTextureData', 'Format', 'DXT5_RGBA');
    export const ETC2_RGB8 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ETC2_RGB8');
    export const ETC2_RGB8A1 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ETC2_RGB8A1');
    export const ETC2_RGBA8 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ETC2_RGBA8');
    export const ASTC_4x4 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_4x4');
    export const ASTC_5x4 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_5x4');
    export const ASTC_5x5 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_5x5');
    export const ASTC_6x5 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_6x5');
    export const ASTC_6x6 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_6x6');
    export const ASTC_8x5 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_8x5');
    export const ASTC_8x6 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_8x6');
    export const ASTC_8x8 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_8x8');
    export const ASTC_10x5 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_10x5');
    export const ASTC_10x6 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_10x6');
    export const ASTC_10x8 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_10x8');
    export const ASTC_10x10 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_10x10');
    export const ASTC_12x10 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_12x10');
    export const ASTC_12x12 = createEnumToken('ProceduralSkyTextureData', 'Format', 'ASTC_12x12');
  }
  export namespace SkyTextureQuality {
    export const SkyTextureQualityLow = createEnumToken(
      'ProceduralSkyTextureData',
      'SkyTextureQuality',
      'SkyTextureQualityLow',
    );
    export const SkyTextureQualityMedium = createEnumToken(
      'ProceduralSkyTextureData',
      'SkyTextureQuality',
      'SkyTextureQualityMedium',
    );
    export const SkyTextureQualityHigh = createEnumToken(
      'ProceduralSkyTextureData',
      'SkyTextureQuality',
      'SkyTextureQualityHigh',
    );
    export const SkyTextureQualityVeryHigh = createEnumToken(
      'ProceduralSkyTextureData',
      'SkyTextureQuality',
      'SkyTextureQualityVeryHigh',
    );
  }
}
