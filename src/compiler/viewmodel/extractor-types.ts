import type { ClassDeclaration } from 'ts-morph';
import type { AnalyzedLifecycle } from '../../viewmodel/lifecycle.js';
import type { ViewModelSchema } from '../../viewmodel/schema.js';
import type { Diagnostic } from '../diagnostics.js';
import type { IdAllocator } from '../ids/id-allocator.js';

export type { AnalyzedLifecycle };

export interface AnalyzedViewModel {
  readonly className: string;
  readonly filePath: string;
  readonly line: number;
  readonly isExported: boolean;
  readonly states: readonly AnalyzedState[];
  readonly commands: readonly AnalyzedCommand[];
  readonly effects: readonly AnalyzedEffect[];
  readonly lifecycle: AnalyzedLifecycle;
  readonly constructorParams: readonly AnalyzedConstructorParam[];
}

export interface AnalyzedState {
  readonly fieldName: string;
  readonly tsType: string;
  readonly qmlType: string;
  readonly qmlName: string;
  readonly defaultValue?: string;
  readonly options: AnalyzedStateOptions;
  readonly line: number;
}

export interface AnalyzedStateOptions {
  readonly alias?: string;
  readonly qmlType?: string;
  readonly readonly?: boolean;
  readonly deferred?: boolean;
}

export interface AnalyzedCommand {
  readonly methodName: string;
  readonly qmlName: string;
  readonly parameters: readonly AnalyzedCommandParameter[];
  readonly returnType: string;
  readonly options: AnalyzedCommandOptions;
  readonly bodyText?: string;
  readonly line: number;
}

export interface AnalyzedCommandOptions {
  readonly id?: number;
  readonly alias?: string;
  readonly async?: boolean;
  readonly throttle?: 'none' | 'debounce' | 'throttle' | 'drop';
  readonly throttleMs?: number;
}

export interface AnalyzedEffect {
  readonly fieldName: string;
  readonly qmlName: string;
  readonly parameters: readonly AnalyzedEffectParameter[];
  readonly isFunctionTyped: boolean;
  readonly options: AnalyzedEffectOptions;
  readonly line: number;
}

export interface AnalyzedEffectParameter {
  readonly name: string;
  readonly tsType: string;
}

export interface AnalyzedEffectOptions {
  readonly id?: number;
  readonly alias?: string;
}

export interface AnalyzedCommandParameter {
  readonly name: string;
  readonly tsType: string;
  readonly qmlType: string;
  readonly optional: boolean;
  readonly defaultValue?: string;
}

export interface AnalyzedConstructorParam {
  readonly name: string;
  readonly type: string;
  readonly isService: boolean;
}

/** V2 context passed to schema generation for module metadata. */
export interface SchemaGenerationContext {
  readonly runtime: 'v1' | 'v2';
  readonly moduleConfig?: {
    readonly prefix: string;
    readonly version: { readonly major: number; readonly minor: number };
  };
}

export interface ViewModelExtractor {
  extract(classDeclaration: ClassDeclaration): AnalyzedViewModel;
  generateSchema(
    vm: AnalyzedViewModel,
    idAllocator: IdAllocator,
    context?: SchemaGenerationContext,
  ): ViewModelSchema;
  validate(vm: AnalyzedViewModel): readonly Diagnostic[];
}
