# QmlTS Native Host

This directory contains the Rust native host for QmlTS, providing the bridge between TypeScript and Qt QML via napi-rs and cxx-qt.

## Architecture

```
┌─────────────────────────────────────────┐
│  TypeScript Runtime                      │
│  @qmlts/host (napi-rs bindings)          │
├─────────────────────────────────────────┤
│  napi-rs boundary                        │
│  .node native plugin                     │
├─────────────────────────────────────────┤
│  Rust Host (qmlts-host crate)            │
│  QmltsEngine + PropertySync + Commands   │
├─────────────────────────────────────────┤
│  cxx-qt generated QObject types          │
├─────────────────────────────────────────┤
│  Qt 6.11.0 (QtQml, QtQuick)              │
└─────────────────────────────────────────┘
```

## Directory Structure

```
native/
├── Cargo.toml              # Workspace root
├── crates/
│   └── qmlts-host/         # Main crate
│       ├── Cargo.toml
│       ├── build.rs        # napi-rs + cxx-qt build integration
│       └── src/
│           ├── lib.rs      # Crate root
│           ├── engine.rs   # QmltsEngine (Qt lifecycle)
│           ├── error.rs    # QmltsError types
│           └── exports.rs  # #[napi] exported functions
└── npm/
    └── qmlts-host/         # npm package
        ├── package.json
        └── src/
            ├── index.ts    # Entry point
            └── types.ts    # TypeScript types
```

## Building

### Prerequisites

- Rust 1.85+ (stable)
- Qt 6.11.0 SDK
- Node.js 18+ or Bun

### Build Commands

```bash
# Build debug
cargo build

# Build release
cargo build --release

# Run tests
cargo test

# Check formatting
cargo fmt --check

# Run clippy
cargo clippy --all-targets
```

## Exported API (Step 1)

The following functions are exported via napi-rs in this step:

### Engine Lifecycle
- `createEngine(config?)` - Create a new QmlTS engine
- `destroyEngine(engine)` - Explicitly destroy an engine
- `version()` - Get QmlTS version
- `qtVersion()` - Get Qt version

### QML Loading
- `loadFile(engine, path)` - Load QML from file
- `loadString(engine, source, baseUrl?)` - Load QML from string
- `addImportPath(engine, path)` - Add QML import path
- `addPluginPath(engine, path)` - Add Qt plugin path

### Event Loop
- `exec(engine)` - Start blocking event loop
- `quit(engine, exitCode?)` - Request event loop quit
- `processEvents(engine)` - Process pending events
- `processEventsFor(engine, timeoutMs)` - Process events with timeout

## Future Steps

Steps 2-6 will add:
- Property synchronization (TS State → Qt QProperty)
- Command dispatch (QML → TS handlers)
- Effect emission (TS → QML signals)
- List model support
- Hot reload capabilities

## License

MIT
