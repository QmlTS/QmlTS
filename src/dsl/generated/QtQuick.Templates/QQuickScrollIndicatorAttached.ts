// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: ScrollIndicator
// Generated from Qt 6.11.0

import type { ScrollIndicatorBuilder } from './ScrollIndicator.js';
export interface ScrollIndicatorAttachedBuilder {
  horizontal(value: ScrollIndicatorBuilder): ScrollIndicatorAttachedBuilder;
  horizontalBind(expr: string): ScrollIndicatorAttachedBuilder;
  vertical(value: ScrollIndicatorBuilder): ScrollIndicatorAttachedBuilder;
  verticalBind(expr: string): ScrollIndicatorAttachedBuilder;
  objectName(value: string): ScrollIndicatorAttachedBuilder;
  objectNameBind(expr: string): ScrollIndicatorAttachedBuilder;
  onHorizontalChanged(handler: () => void): ScrollIndicatorAttachedBuilder;
  onVerticalChanged(handler: () => void): ScrollIndicatorAttachedBuilder;
  onObjectNameChanged(handler: (objectName: string) => void): ScrollIndicatorAttachedBuilder;
}
