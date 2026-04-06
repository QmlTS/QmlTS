// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: StyleVariation
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue, QmlValue } from '../../runtime/index.js';
export interface StyleVariationAttachedBuilder {
  controlType(value: QmlValue): StyleVariationAttachedBuilder;
  controlTypeBind(expr: string): StyleVariationAttachedBuilder;
  variations(value: string[]): StyleVariationAttachedBuilder;
  variationsBind(expr: string): StyleVariationAttachedBuilder;
  objectName(value: string): StyleVariationAttachedBuilder;
  objectNameBind(expr: string): StyleVariationAttachedBuilder;
  onControlTypeChanged(handler: DslSignalHandlerValue): StyleVariationAttachedBuilder;
  onVariationsChanged(handler: DslSignalHandlerValue): StyleVariationAttachedBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): StyleVariationAttachedBuilder;
}
