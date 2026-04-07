import chokidar from 'chokidar';
import type {
	CompilationResult,
	CompilerOptions,
	CompilerWatcher,
} from './pipeline-types.js';
import { createIncrementalCompiler } from './incremental-compiler.js';

/**
 * Watch a project directory for .ts file changes and trigger incremental
 * recompilation on each change.
 *
 * The initial compile callback is deferred until chokidar is ready to
 * detect file changes, so consumers can safely modify files after
 * receiving the first callback.
 */
export function watch(
	options: CompilerOptions,
	callback: (result: CompilationResult) => void,
): CompilerWatcher {
	const ic = createIncrementalCompiler();
	const debounceMs = options.watch?.debounceMs ?? 100;
	let closed = false;
	let debounceTimer: ReturnType<typeof setTimeout> | null = null;

	// Run initial compile synchronously but defer callback until watcher ready
	let initialResult: CompilationResult | undefined;
	try {
		initialResult = ic.compile(options);
	} catch {
		// Initial compile failure — still start watching
	}

	const watcher = chokidar.watch(options.inputDir, {
		ignored: [
			'**/node_modules/**',
			'**/dist/**',
			'**/*.d.ts',
			(path: string) => {
				// Only watch .ts files and directories
				const isDir = !path.includes('.');
				return !isDir && !path.endsWith('.ts');
			},
		],
		ignoreInitial: true,
		usePolling: true,
		interval: 100,
	});

	function scheduleRecompile(): void {
		if (closed) return;

		if (debounceTimer) {
			clearTimeout(debounceTimer);
		}

		debounceTimer = setTimeout(() => {
			if (closed) return;

			try {
				const result = ic.compile(options);
				if (!closed) callback(result);
			} catch {
				// Compilation error — watcher continues
			}
		}, debounceMs);
	}

	// Attach handlers immediately so events queued during scan are handled
	watcher.on('change', scheduleRecompile);
	watcher.on('add', scheduleRecompile);
	watcher.on('unlink', () => {
		ic.clearCache();
		scheduleRecompile();
	});

	// Deliver initial result only after chokidar is ready to detect changes
	watcher.on('ready', () => {
		if (!closed && initialResult) {
			callback(initialResult);
		}
	});

	function close(): void {
		closed = true;
		if (debounceTimer) {
			clearTimeout(debounceTimer);
			debounceTimer = null;
		}
		watcher.close();
	}

	async function rebuild(): Promise<CompilationResult> {
		ic.clearCache();
		return ic.compile(options);
	}

	return { close, rebuild };
}
