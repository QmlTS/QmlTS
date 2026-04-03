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
@qmlts/registry   Qt type scanner       ← you are here
@qmlts/ast        QML AST
@qmlts/emitter    AST → QML text
@qmlts/dsl        Fluent DSL generator
@qmlts/compiler   TS DSL → QML
@qmlts/cli        Command-line tool
```

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

Without `QT_DIR`, these tests are automatically skipped. CI runs the default test suite (no Qt required).

### Project Structure

```
QmlTS/
├── .github/workflows/ci.yml   # CI (self-hosted Linux runner, no Qt)
├── data/
│   └── qt-6.11.0-registry.snapshot.json  # Pre-built registry (committed)
├── scripts/
│   └── generate-registry.ts   # Maintainer: regenerate snapshot
├── src/
│   ├── index.ts                # Public API: getRegistry(), getQuery()
│   └── registry/               # Internal build tools
│       ├── types.ts            # Type definitions
│       ├── scanner.ts          # File discovery
│       ├── *-parser.ts         # Three format parsers
│       ├── normalizer.ts       # Three-source merge
│       ├── registry-query.ts   # Query engine
│       ├── snapshot.ts         # Serialization
│       └── builder.ts          # Build orchestrator
├── tests/
│   └── registry/
│       ├── public-api.test.ts  # Tests using built-in snapshot
│       ├── *-parser.test.ts    # Parser unit tests (fixtures)
│       ├── scanner.test.ts     # Integration (needs QT_DIR)
│       ├── builder.test.ts     # Integration (needs QT_DIR)
│       └── fixtures/           # Test data files
├── package.json
├── tsconfig.json
└── README.md
```

## License

[MIT](LICENSE)
