import { mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { resolveQtDir } from '../qt-tools/toolchain.js';
import type {
  InitCommandOptions,
  InitResult,
  InitTemplate,
  PackageManager,
} from './build-types.js';
import {
  getPackageManagerScriptCommand,
  normalizePackageManager,
  runPackageManagerInstall,
} from './package-manager.js';

// ─── Template generators ────────────────────────────────────

function generateTsconfig(): string {
  return JSON.stringify(
    {
      compilerOptions: {
        target: 'ES2022',
        module: 'ES2022',
        moduleResolution: 'bundler',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        outDir: './dist',
        rootDir: './src',
        declaration: true,
        experimentalDecorators: true,
      },
      include: ['src/**/*.ts'],
    },
    null,
    2,
  );
}

function generatePackageJson(name: string): string {
  return JSON.stringify(
    {
      name,
      version: '0.1.0',
      private: true,
      type: 'module',
      scripts: {
        build: 'qmlts build',
        dev: 'qmlts dev',
        doctor: 'qmlts doctor',
        clean: 'qmlts clean',
      },
      dependencies: {
        '@qmlts/build': '*',
        '@qmlts/core': '*',
        '@qmlts/cli': '*',
      },
      devDependencies: {
        typescript: '^6.0.0',
      },
    },
    null,
    2,
  );
}

function generateConfig(qtDir: string | undefined): string {
  const qtDirLine = qtDir
    ? `    dir: '${qtDir.replace(/\\/g, '/')}',`
    : "    // dir: '/path/to/Qt/6.x.x/gcc_64', // Set QT_DIR env or configure here";

  return `import { defineConfig } from '@qmlts/build';

export default defineConfig({
  entry: './src/main.ts',
  outDir: './dist',
  qt: {
${qtDirLine}
    modules: ['QtQuick'],
    targetVersion: '6.11.0',
  },
  build: {
    sourceMaps: true,
    incremental: true,
  },
  dev: {
    hotReload: true,
    debounceMs: 200,
  },
});
`;
}

function generateMinimalMain(): string {
  return `// QmlTS Application Entry Point
console.log('QmlTS application starting...');
`;
}

function generateCounterViewModel(): string {
  return `function State(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}
function Command(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}

export class CounterViewModel {
  @State() count = 0;

  @Command()
  increment() {
    this.count++;
  }

  @Command()
  decrement() {
    this.count--;
  }

  @Command()
  reset() {
    this.count = 0;
  }
}
`;
}

function generateCounterView(): string {
  return `import type { CounterViewModel } from './CounterViewModel.js';

export default function CounterView(vm: CounterViewModel) {
  return {
    type: 'Rectangle',
    width: 300,
    height: 200,
    children: [{ type: 'Text', text: vm.count }],
  };
}
`;
}

function generateMvvmViewModel(): string {
  return `function State(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}
function Command(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}
function Effect(_opts?: Record<string, unknown>) {
  return (_target: any, _context: any) => {};
}

export class AppViewModel {
  @State() title = 'QmlTS App';
  @State() isLoading = false;
  @State() items: string[] = [];

  @Command()
  loadItems() {
    this.isLoading = true;
  }

  @Effect()
  onItemsLoaded(items: string[]) {
    this.items = items;
    this.isLoading = false;
  }
}
`;
}

function generateFullReadme(name: string, packageManager: PackageManager): string {
  const buildCommand = getPackageManagerScriptCommand(packageManager, 'build');
  const devCommand = getPackageManagerScriptCommand(packageManager, 'dev');
  const doctorCommand = getPackageManagerScriptCommand(packageManager, 'doctor');
  const cleanCommand = getPackageManagerScriptCommand(packageManager, 'clean');

  return `# ${name}

A QmlTS application.

## Getting Started

\`\`\`bash
# Build the application
${buildCommand}

# Start development mode
${devCommand}

# Check environment
${doctorCommand}

# Clean build artifacts
${cleanCommand}
\`\`\`
`;
}

interface TemplateFile {
  path: string;
  content: string;
}

function getTemplateFiles(
  template: InitTemplate,
  projectName: string,
  packageManager: PackageManager,
): TemplateFile[] {
  const qtDir = resolveQtDir();
  const common: TemplateFile[] = [
    { path: 'package.json', content: generatePackageJson(projectName) },
    { path: 'tsconfig.json', content: generateTsconfig() },
    { path: 'qmlts.config.ts', content: generateConfig(qtDir) },
  ];

  switch (template) {
    case 'minimal':
      return [...common, { path: join('src', 'main.ts'), content: generateMinimalMain() }];

    case 'counter':
      return [
        ...common,
        { path: join('src', 'main.ts'), content: generateMinimalMain() },
        {
          path: join('src', 'CounterViewModel.ts'),
          content: generateCounterViewModel(),
        },
        { path: join('src', 'CounterView.ts'), content: generateCounterView() },
      ];

    case 'mvvm':
      return [
        ...common,
        { path: join('src', 'main.ts'), content: generateMinimalMain() },
        {
          path: join('src', 'viewmodels', 'AppViewModel.ts'),
          content: generateMvvmViewModel(),
        },
      ];

    case 'full':
      return [
        ...common,
        { path: join('src', 'main.ts'), content: generateMinimalMain() },
        {
          path: join('src', 'CounterViewModel.ts'),
          content: generateCounterViewModel(),
        },
        { path: join('src', 'CounterView.ts'), content: generateCounterView() },
        {
          path: join('src', 'viewmodels', 'AppViewModel.ts'),
          content: generateMvvmViewModel(),
        },
        { path: 'README.md', content: generateFullReadme(projectName, packageManager) },
      ];
  }
}

// ─── Public API ─────────────────────────────────────────────

export async function executeInit(options: InitCommandOptions = {}): Promise<InitResult> {
  const dir = resolve(options.dir ?? '.');
  const template: InitTemplate = options.template ?? 'minimal';
  const packageManager = normalizePackageManager(options.packageManager);
  const skipInstall = options.skipInstall ?? false;
  const projectName = basename(dir) || 'qmlts-app';

  mkdirSync(dir, { recursive: true });
  if (readdirSync(dir).length > 0) {
    console.warn(`[qmlts init] Target directory is not empty: ${dir}`);
  }

  const templateFiles = getTemplateFiles(template, projectName, packageManager);
  const filesCreated: string[] = [];

  mkdirSync(join(dir, 'assets'), { recursive: true });

  for (const file of templateFiles) {
    const fullPath = join(dir, file.path);
    mkdirSync(dirname(fullPath), { recursive: true });
    writeFileSync(fullPath, file.content, 'utf-8');
    filesCreated.push(file.path);
  }

  let installed = false;
  if (!skipInstall) {
    installed = runPackageManagerInstall(packageManager, dir);
  }

  return {
    dir,
    template,
    filesCreated,
    packageManager,
    installed,
  };
}
