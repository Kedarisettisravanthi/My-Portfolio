# CodeGraph

An intelligent code analysis and knowledge graph engine that extracts dependencies, call graphs, class hierarchies, and imports across codebases, producing interactive visual graphs and structured JSON/graph representations.

## Features

- **Static AST Analysis**: Extracts modules, functions, classes, methods, imports, and calls.
- **Dependency & Call Graph**: Maps relationships between code entities (`IMPORTS`, `CONTAINS`, `CALLS`, `INHERITS`).
- **Interactive Visualization**: Generates self-contained interactive D3.js / HTML visualizations of your codebase.
- **CLI & Programmatic API**: Run from the command line or import directly in your Python pipelines.
- **Export Formats**: Outputs JSON, Graphviz DOT, and interactive HTML.

---

## Architecture

```
CodeGraph/
├── codegraph/
│   ├── __init__.py          # Core package entry
│   ├── parser.py            # AST parsing and node extraction
│   ├── graph.py             # In-memory graph builder & queries
│   ├── exporter.py          # Exporters (JSON, DOT, Interactive HTML)
│   └── cli.py               # Command-line interface
├── examples/
│   └── sample_code.py       # Sample module to test and visualize
├── templates/
│   └── viewer.html          # Interactive D3 graph visualizer template
├── requirements.txt
└── README.md
```

---

## Quickstart

### 1. Run Analysis on Any File or Directory

```bash
.\venv\Scripts\python.exe -m codegraph.cli analyze .\examples\sample_code.py --html graph.html
```

### 2. View Interactive Graph

Open `graph.html` directly in any web browser to explore interactive nodes, dependencies, and hierarchy.

### 3. Export to JSON

```bash
.\venv\Scripts\python.exe -m codegraph.cli analyze .\examples\sample_code.py --json graph.json
```

