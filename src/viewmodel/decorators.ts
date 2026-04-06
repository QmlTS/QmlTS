import { ensureMetadata } from './metadata.js';
import type {
  CommandDecoratorOptions,
  EffectDecoratorOptions,
  StateDecoratorOptions,
} from './types.js';

type ConstructorLike = abstract new (...args: never[]) => object;
type ConstructorRef = { constructor: ConstructorLike };

function cloneOptions<T extends object>(options?: T): T {
  return Object.freeze({ ...(options ?? ({} as T)) }) as T;
}

export function State(options?: StateDecoratorOptions) {
  return (_value: undefined, context: ClassFieldDecoratorContext) => {
    const name = String(context.name);
    const resolvedOptions = cloneOptions(options);
    const processedConstructors = new WeakSet<ConstructorLike>();
    context.addInitializer(function () {
      const ctor = (this as ConstructorRef).constructor;
      if (processedConstructors.has(ctor)) return;
      processedConstructors.add(ctor);
      const meta = ensureMetadata(ctor);
      meta.states.push({ name, options: resolvedOptions });
    });
  };
}

export function Command(options?: CommandDecoratorOptions) {
  // biome-ignore lint/complexity/noBannedTypes: TC39 method decorator value parameter is typed as Function
  return (_value: Function, context: ClassMethodDecoratorContext) => {
    const name = String(context.name);
    const resolvedOptions = cloneOptions(options);
    const processedConstructors = new WeakSet<ConstructorLike>();
    context.addInitializer(function () {
      const ctor = (this as ConstructorRef).constructor;
      if (processedConstructors.has(ctor)) return;
      processedConstructors.add(ctor);
      const meta = ensureMetadata(ctor);
      meta.commands.push({ name, options: resolvedOptions });
    });
  };
}

export function Effect(options?: EffectDecoratorOptions) {
  return (_value: undefined, context: ClassFieldDecoratorContext) => {
    const name = String(context.name);
    const resolvedOptions = cloneOptions(options);
    const processedConstructors = new WeakSet<ConstructorLike>();
    context.addInitializer(function () {
      const ctor = (this as ConstructorRef).constructor;
      if (processedConstructors.has(ctor)) return;
      processedConstructors.add(ctor);
      const meta = ensureMetadata(ctor);
      meta.effects.push({ name, options: resolvedOptions });
    });
  };
}
