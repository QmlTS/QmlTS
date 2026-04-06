// AUTO-GENERATED — DO NOT EDIT
// Type: Attached type: ScrollBar
// Generated from Qt 6.11.0

import type { DslSignalHandlerValue } from '../../runtime/index.js';
import type { ScrollBarBuilder } from './ScrollBar.js';
export interface ScrollBarAttachedBuilder {
  horizontal(value: ScrollBarBuilder): ScrollBarAttachedBuilder;
  horizontalBind(expr: string): ScrollBarAttachedBuilder;
  vertical(value: ScrollBarBuilder): ScrollBarAttachedBuilder;
  verticalBind(expr: string): ScrollBarAttachedBuilder;
  objectName(value: string): ScrollBarAttachedBuilder;
  objectNameBind(expr: string): ScrollBarAttachedBuilder;
  onHorizontalChanged(handler: DslSignalHandlerValue): ScrollBarAttachedBuilder;
  onVerticalChanged(handler: DslSignalHandlerValue): ScrollBarAttachedBuilder;
  onObjectNameChanged(handler: DslSignalHandlerValue): ScrollBarAttachedBuilder;
}
