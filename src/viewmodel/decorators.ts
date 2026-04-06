import { ensureMetadata } from './metadata.js';
import type {
  CommandDecoratorOptions,
  EffectDecoratorOptions,
  StateDecoratorOptions,
} from './types.js';

// biome-ignore lint/complexity/noBannedTypes: addInitializer provides `this` as unknown; we cast to access constructor
type ConstructorRef = { constructor: Function };

export function State(options?: StateDecoratorOptions) {
  return (_value: undefined, context: ClassFieldDecoratorContext) => {
    const name = String(context.name);
    const resolvedOptions = options ?? {};
    let processed = false;
    context.addInitializer(function () {
      if (processed) return;
      processed = true;
      const meta = ensureMetadata((this as ConstructorRef).constructor);
      meta.states.push({ name, options: resolvedOptions });
    });
  };
}

export function Command(options?: CommandDecoratorOptions) {
  // biome-ignore lint/complexity/noBannedTypes: TC39 method decorator value parameter is typed as Function
  return (_value: Function, context: ClassMethodDecoratorContext) => {
    const name = String(context.name);
    const resolvedOptions = options ?? {};
    let processed = false;
    context.addInitializer(function () {
      if (processed) return;
      processed = true;
      const meta = ensureMetadata((this as ConstructorRef).constructor);
      meta.commands.push({ name, options: resolvedOptions });
    });
  };
}

export function Effect(options?: EffectDecoratorOptions) {
  return (_value: undefined, context: ClassFieldDecoratorContext) => {
    const name = String(context.name);
    const resolvedOptions = options ?? {};
    let processed = false;
    context.addInitializer(function () {
      if (processed) return;
      processed = true;
      const meta = ensureMetadata((this as ConstructorRef).constructor);
      meta.effects.push({ name, options: resolvedOptions });
    });
  };
}
