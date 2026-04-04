# QmlTS

> Write QML interfaces with TypeScript Fluent DSL, compile to `.qml`, and run natively on Qt 6.

[![CI](https://github.com/QmlTS/QmlTS/actions/workflows/ci.yml/badge.svg)](https://github.com/QmlTS/QmlTS/actions/workflows/ci.yml)

## Overview

QmlTS is a TypeScript-to-QML development framework that lets you build Qt Quick interfaces using a type-safe Fluent DSL. It compiles TypeScript source code into standard `.qml` files, which run natively on the Qt 6 engine — no Node.js runtime required in production.

### Key Features

- **Type-safe DSL**: Write `Rectangle().width(100).color("red")` with full IntelliSense
- **Compile to QML**: Generate standard `.qml` files from TypeScript
- **Qt 6.11+ support**: Built for the latest Qt, targeting QtQuick and QtQml
- **Native performance**: Production output is pure `.qml` + C++ executable
- **Pre-built registry**: Ships with a pre-generated Qt 6.11 type registry — no Qt installation needed at runtime

## Quick Start

```typescript
import { getQuery } from '@qmlts/registry';

const query = getQuery();
const rect = query.findByQmlName('Rectangle');
console.log(rect?.properties.map(p => p.name));
// ['color', 'radius', 'border', ...]
```

## Architecture

### Two-Layer Design

The registry module has two layers:

| Layer | Purpose | Qt Required? |
|-------|---------|:------------:|
| **Public API** (`getRegistry()`, `getQuery()`) | Pre-built snapshot for downstream DSL/compiler | No |
| **Internal tools** (`scanner`, `parsers`, `normalizer`, `builder`) | Build pipeline for regenerating the snapshot | Yes |

```
┌──────────────────────────────────────────────────┐
│  Downstream modules (DSL, compiler, etc.)        │
│  import { getQuery } from '@qmlts/registry'      │
└──────────────────┬───────────────────────────────┘
                   │ lazy-loads
┌──────────────────▼───────────────────────────────┐
│  data/qt-6.11.0-registry.snapshot.json           │
│  (pre-built, committed, shipped with npm)        │
└──────────────────▲───────────────────────────────┘
                   │ generates (maintainer only)
┌──────────────────┴───────────────────────────────┐
│  src/registry/*  (scanner → parsers → normalizer)│
│  scripts/generate-registry.ts                    │
│  QT_DIR=/path/to/qt bun run generate             │
└──────────────────────────────────────────────────┘
```

### Module Roadmap

```
@qmlts/registry   Qt type scanner       ✓ done
@qmlts/ast        QML AST               ✓ done
@qmlts/emitter    AST → QML text        ✓ done
@qmlts/qt-tools   Qt CLI tool wrappers  ✓ done
@qmlts/dsl        Fluent DSL generator
@qmlts/compiler   TS DSL → QML
@qmlts/cli        Command-line tool
```

### Emitter Module

The emitter converts QML AST documents into deterministic `.qml` text strings. It is **pure TypeScript** with zero runtime dependencies.

```typescript
import { createDocument, createObject, v, emit, emitWithSourceMap } from 'qmlts';

const doc = createDocument()
  .importModule('QtQuick')
  .root(
    createObject('Rectangle')
      .id('root')
      .bind('width', 400)
      .bind('color', v.str('red'))
  );

// Generate QML text
const qml = emit(doc);
// → "import QtQuick\n\nRectangle {\n    id: root\n\n    width: 400\n    color: \"red\"\n}\n"

// With options
const formatted = emit(doc, { indentSize: 2, normalize: true, semicolonRule: 'always' });

// With source map
const { text, sourceMap } = emitWithSourceMap(doc);
const span = sourceMap.getOutputSpan(doc.rootObject);
```

#### Emitter APIs

| API | Description |
|-----|-------------|
| `emit(doc, options?)` | Generate QML text from AST document |
| `emitFragment(node, options?)` | Generate text for a single AST node |
| `emitWithSourceMap(doc, options?)` | Emit with AST→output position tracking |
| `normalizeMembers(members)` | Reorder members by QML convention |

#### EmitOptions

| Option | Default | Description |
|--------|---------|-------------|
| `indentStyle` | `'spaces'` | `'spaces'` or `'tabs'` |
| `indentSize` | `4` | Spaces per indent level |
| `newline` | `'\n'` | `'\n'` or `'\r\n'` |
| `quoteStyle` | `'double'` | `'double'`, `'single'`, or `'preserve'` |
| `normalize` | `false` | Reorder members by category |
| `sortImports` | `false` | Sort imports alphabetically |
| `semicolonRule` | `'omit'` | `'omit'`, `'always'`, or `'essential'` |
| `emitComments` | `true` | Include comments in output |
| `singleLineEmptyObjects` | `true` | `Item { }` vs multi-line |
| `trailingNewline` | `true` | Newline at end of file |

### AST Module

The AST module provides an in-memory representation of QML documents as a typed tree structure. It is **pure TypeScript** with zero runtime dependencies — no Qt installation needed.

```typescript
import {
  createDocument, createObject, v,
  validateStructure, validateSemantics,
  walkAst, transformAst, astSerializer, astUtils,
  getQuery,
} from 'qmlts';

// Build a QML document
const doc = createDocument()
  .importModule('QtQuick')
  .root(
    createObject('Rectangle')
      .id('root')
      .bind('width', 400)
      .bind('height', 300)
      .bind('color', v.str('red'))
      .child(
        createObject('Text')
          .bind('text', v.str('Hello from QmlTS'))
      )
  );

// Validate structure (no Qt needed)
const result = validateStructure(doc);
console.log(result.valid); // true

// Semantic validation with Qt registry
const semantic = validateSemantics(doc, getQuery());
console.log(semantic.diagnostics); // []

// Traverse, transform, serialize
const ids = astUtils.collectIds(doc);
const json = astSerializer.serialize(doc);
const clone = astSerializer.clone(doc);
```

#### AST APIs

| API | Description |
|-----|-------------|
| `v.*` | Value factory — `v.num()`, `v.str()`, `v.bool()`, `v.nil()`, `v.expr()`, `v.block()`, `v.enumRef()` |
| `createDocument()` | Fluent document builder — pragmas, imports, root object |
| `createObject(type)` | Fluent object builder — bindings, properties, signals, children, etc. |
| `walkAst(doc, visitor)` | Type-safe visitor pattern traversal |
| `walkAstGeneric(doc, callbacks)` | Generic walker with enter/leave, path, parent tracking |
| `transformAst(doc, transformer)` | Immutable tree transformation |
| `validateStructure(doc)` | Structural validation (E001–E010) — no registry needed |
| `validateSemantics(doc, query)` | Semantic validation (E100–E106, W001) — uses registry |
| `astSerializer` | Serialize/deserialize/clone AST to/from JSON |
| `astUtils` | 12 utility functions — collectIds, findObjectsByType, countNodes, etc. |

### Qt Tools Module

The qt-tools module provides type-safe TypeScript wrappers around Qt CLI tools. All operations require a Qt 6.11+ installation with `QT_DIR` set.

```typescript
import {
  discover, checkTools,
  formatFile, formatString,
  lintFile, lintString, listPlugins,
  cachegenCompile, cachegenCompileString,
  check, checkFiles,
} from 'qmlts';

// Discover Qt installation
const qt = await discover(); // uses QT_DIR env var
const tools = await checkTools(qt);
console.log(tools.qmlformat.available); // true

// Format QML
const fmt = await formatString(qt, 'import QtQuick\nItem{width:100}\n');
console.log(fmt.formattedText);

// Lint QML
const lint = await lintFile(qt, 'path/to/file.qml');
console.log(lint.valid, lint.diagnostics);

// Compile QML (qmlcachegen)
const cg = await cachegenCompile(qt, 'path/to/file.qml', { dumpAotStats: true });
console.log(cg.success, cg.aotStats);

// Quality gate (syntax → lint → compile)
const gate = await check(qt, 'path/to/file.qml', { level: 'compile' });
console.log(gate.passed, gate.diagnostics);
```

#### Qt Tools APIs

| API | Description |
|-----|-------------|
| `discover(config?)` | Find Qt installation (config > `QMLTS_QT_DIR` > `QT_DIR`) |
| `checkTools(installation)` | Probe available Qt CLI tools |
| `formatFile/String/Files` | Format QML via `qmlformat` |
| `lintFile/String/Files` | Lint QML via `qmllint` (JSON output) |
| `cachegenCompile/String/Files` | Compile QML via `qmlcachegen` |
| `check/checkString/checkFiles` | Quality gate: multi-stage validation |
| `listPlugins(installation)` | List available `qmllint` plugins |
| `buildFormatArgs/buildLintArgs/buildCachegenArgs` | Pure arg-building functions |

## Development

### Prerequisites

- [Bun](https://bun.sh/) (latest)
- TypeScript 5.8+
- Qt 6.11 installation (only for regenerating the snapshot)

### Getting Started

```bash
# Install dependencies
bun install

# Run tests (no Qt needed — uses pre-built snapshot)
bun test

# Type check
bun run typecheck

# Build
bun run build
```

### Regenerating the Snapshot

When Qt is upgraded, maintainers regenerate the snapshot:

```bash
QT_DIR=/path/to/qt/6.11.0/gcc_64 bun run generate
# Then commit the updated data/qt-6.11.0-registry.snapshot.json
```

### Running Maintainer Tests

Scanner and builder integration tests require a Qt installation:

```bash
QT_DIR=/path/to/qt/6.11.0/gcc_64 bun test
```

Without `QT_DIR`, these tests are automatically skipped. CI runs the full test suite with Qt 6.11 installed via `install-qt-action`.

### Project Structure

```
QmlTS/
├── .github/workflows/ci.yml   # CI (self-hosted Linux runner + Qt 6.11)
├── data/
│   └── qt-6.11.0-registry.snapshot.json  # Pre-built registry (committed)
├── scripts/
│   ├── generate-registry.ts   # Maintainer: regenerate snapshot
│   └── generate-golden.ts     # Regenerate emitter golden test files
├── src/
│   ├── index.ts                # Public API: getRegistry(), getQuery(), AST & emitter exports
│   ├── registry/               # Module 01: Qt type registry
│   │   ├── types.ts            # Type definitions
│   │   ├── scanner.ts          # File discovery
│   │   ├── *-parser.ts         # Three format parsers
│   │   ├── normalizer.ts       # Three-source merge
│   │   ├── registry-query.ts   # Query engine
│   │   ├── snapshot.ts         # Serialization
│   │   └── builder.ts          # Build orchestrator
│   ├── ast/                    # Module 02: QML AST
│   │   ├── types.ts            # AST node type definitions
│   │   ├── values.ts           # Value factory (v.*)
│   │   ├── builder.ts          # Document & object builders
│   │   ├── visitor.ts          # Type-safe visitor traversal
│   │   ├── walker.ts           # Generic enter/leave walker
│   │   ├── transform.ts        # Immutable tree transform
│   │   ├── validator.ts        # Structural + semantic validation
│   │   ├── serializer.ts       # AST ↔ JSON serialization
│   │   ├── utils.ts            # 12 utility functions
│   │   └── index.ts            # Barrel exports
│   └── emitter/                # Module 03: QML code emitter
│       ├── types.ts            # EmitOptions, SourceMap interfaces
│       ├── writer.ts           # QmlWriter — indent/position tracking
│       ├── emitter.ts          # emit(), emitFragment(), emitWithSourceMap()
│       ├── normalize.ts        # Member reordering for normalize option
│       ├── source-map.ts       # SourceMap implementation
│       └── index.ts            # Barrel exports
│   └── qt-tools/               # Module 04: Qt CLI tool wrappers
│       ├── types.ts            # All tool interfaces
│       ├── errors.ts           # QtToolError, QtToolNotFoundError, etc.
│       ├── toolchain.ts        # Qt installation discovery
│       ├── tool-runner.ts      # Bun.spawn process runner
│       ├── temp-file.ts        # Temp QML file management
│       ├── diagnostic.ts       # Stderr/JSON diagnostic parser
│       ├── qmlformat.ts        # qmlformat wrapper
│       ├── qmllint.ts          # qmllint wrapper
│       ├── qmlcachegen.ts      # qmlcachegen wrapper
│       ├── quality-gate.ts     # Multi-stage quality gate
│       └── index.ts            # Barrel exports
├── tests/
│   ├── registry/
│   │   ├── public-api.test.ts  # Tests using built-in snapshot
│   │   ├── *-parser.test.ts    # Parser unit tests (fixtures)
│   │   ├── scanner.test.ts     # Integration (needs QT_DIR)
│   │   ├── builder.test.ts     # Integration (needs QT_DIR)
│   │   └── fixtures/           # Test data files
│   ├── ast/
│   │   ├── value-factory.test.ts
│   │   ├── builder.test.ts
│   │   ├── visitor.test.ts
│   │   ├── walker.test.ts
│   │   ├── transform.test.ts
│   │   ├── serializer.test.ts
│   │   ├── validator-structure.test.ts
│   │   ├── validator-semantic.test.ts
│   │   ├── utils.test.ts
│   │   └── e2e.test.ts         # Full pipeline integration
│   └── emitter/
│       ├── emit-basic.test.ts   # EB-01..EB-25
│       ├── emit-bindings.test.ts # BV-01..BV-27
│       ├── emit-members.test.ts  # MM-01..MM-34
│       ├── emit-options.test.ts  # OPT-01..OPT-13
│       ├── emit-fragment.test.ts # FE-01..FE-07
│       ├── source-map.test.ts    # SM-01..SM-08
│       ├── determinism.test.ts   # DT-01..DT-04
│       ├── golden.test.ts        # Golden file comparisons
│       └── fixtures/             # AST JSON + golden QML files
│   └── qt-tools/
│       ├── diagnostic.test.ts    # DP-01..DP-06 (pure TS)
│       ├── toolchain.test.ts     # TC-01..TC-09 (needs Qt)
│       ├── tool-runner.test.ts   # TR-01..TR-06 (needs Qt)
│       ├── qmlformat.test.ts     # FMT-01..FMT-16 (needs Qt)
│       ├── qmllint.test.ts       # LNT-01..LNT-16 (needs Qt)
│       ├── qmlcachegen.test.ts   # CG-01..CG-10 (needs Qt)
│       ├── quality-gate.test.ts  # QG-01..QG-11 (needs Qt)
│       └── fixtures/             # QML test files
├── package.json
├── tsconfig.json
└── README.md
```

## License

[MIT](LICENSE)
