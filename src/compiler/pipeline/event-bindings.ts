import type { ViewModelSchema } from '../../viewmodel/schema.js';
import type { EventBindingIndex } from './pipeline-types.js';

/**
 * Build an EventBindingIndex from already-generated ViewModelSchema objects.
 * The schemas already contain commandId/effectId values allocated by the shared
 * IdAllocator, so this function does NOT re-allocate IDs — guaranteeing
 * consistency between event-bindings.json and .schema.json output.
 */
export function buildEventBindings(schemas: readonly ViewModelSchema[]): EventBindingIndex {
  const commands: EventBindingIndex['commands'][number][] = [];
  const effects: EventBindingIndex['effects'][number][] = [];

  for (const schema of schemas) {
    for (const cmd of schema.commands) {
      commands.push({
        viewModelClass: schema.className,
        methodName: cmd.name,
        commandId: cmd.commandId,
        paramTypes: cmd.parameters.map((p) => p.type),
        async: cmd.async,
      });
    }
    for (const eff of schema.effects) {
      effects.push({
        viewModelClass: schema.className,
        effectName: eff.name,
        effectId: eff.effectId,
        paramTypes: eff.parameters.map((p) => p.type),
      });
    }
  }

  return { commands, effects };
}
