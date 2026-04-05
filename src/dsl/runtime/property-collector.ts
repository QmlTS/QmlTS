import type { BuilderEntry } from "./builder-base.js";
import type { PropertyMeta, SignalMeta } from "./metadata.js";

/**
 * Proxy-based collector for grouped/attached sub-builder callbacks.
 * Records property values, binding expressions, and signal handlers.
 * Throws TypeError on unknown methods (fail-fast).
 */
export interface PropertyCollectorProxy {
	[key: string]: (...args: unknown[]) => unknown;
	__entries(): BuilderEntry[];
}

export function createPropertyCollector(
	properties: readonly PropertyMeta[],
	signals: readonly SignalMeta[],
): PropertyCollectorProxy {
	const entries: BuilderEntry[] = [];
	const propSet = new Map<string, PropertyMeta>();
	const signalSet = new Map<string, SignalMeta>();

	for (const p of properties) {
		propSet.set(p.name, p);
	}
	for (const s of signals) {
		signalSet.set(s.handlerName, s);
	}

	const handler: ProxyHandler<Record<string, unknown>> = {
		get(_target, prop: string): unknown {
			if (prop === "__entries") {
				return () => [...entries];
			}

			// Bind suffix → binding expression
			if (prop.endsWith("Bind")) {
				const baseName = prop.slice(0, -4);
				const meta = propSet.get(baseName);
				if (meta?.hasBinding) {
					return (expr: string) => {
						entries.push({ property: baseName, expression: expr });
						return proxy;
					};
				}
				throw new TypeError(
					`Unknown binding "${prop}" on sub-builder. Known: ${[...propSet.keys()].join(", ")}`,
				);
			}

			// Signal handler (onXxx)
			if (
				prop.length > 2 &&
				prop.startsWith("on") &&
				prop[2] === prop[2]!.toUpperCase()
			) {
				const sig = signalSet.get(prop);
				if (sig) {
					return (body: string) => {
						entries.push({ property: prop, expression: body });
						return proxy;
					};
				}
				throw new TypeError(
					`Unknown signal "${prop}" on sub-builder. Known: ${[...signalSet.keys()].join(", ")}`,
				);
			}

			// Value property
			const meta = propSet.get(prop);
			if (meta?.hasValue) {
				return (value: unknown) => {
					entries.push({
						property: prop,
						value: value as BuilderEntry["value"],
					});
					return proxy;
				};
			}

			throw new TypeError(
				`Unknown method "${prop}" on sub-builder. Known: ${[...propSet.keys()].join(", ")}`,
			);
		},
	};

	const proxy = new Proxy(
		{} as Record<string, unknown>,
		handler,
	) as unknown as PropertyCollectorProxy;
	return proxy;
}
