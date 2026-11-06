import argparse
import sys
from pathlib import Path
from .parser import CodeParser
from .exporter import GraphExporter

def main():
    parser = argparse.ArgumentParser(description="CodeGraph: Codebase AST & Knowledge Graph Generator")
    parser.add_argument("target", help="File or directory path to analyze")
    parser.add_argument("--json", help="Path to export JSON graph representation")
    parser.add_argument("--dot", help="Path to export Graphviz DOT representation")
    parser.add_argument("--html", help="Path to export interactive D3.js HTML graph visualization")

    args = parser.parse_args()
    target_path = Path(args.target).resolve()

    if not target_path.exists():
        print(f"Error: Target path '{args.target}' does not exist.")
        sys.exit(1)

    print(f"[CodeGraph] Analyzing target: {target_path}")
    code_parser = CodeParser()

    if target_path.is_file():
        graph = code_parser.parse_file(str(target_path))
    else:
        graph = code_parser.parse_directory(str(target_path))

    summary = graph.summary()
    print("\n--- Analysis Summary ---")
    print(f"Total Nodes: {summary.get('total_nodes', 0)}")
    print(f"Total Edges: {summary.get('total_edges', 0)}")
    for k, v in summary.items():
        if k not in ("total_nodes", "total_edges"):
            print(f"  - {k.capitalize()}s: {v}")
    print("------------------------\n")

    exporter = GraphExporter(graph)

    if args.json:
        exporter.to_json(args.json)
        print(f"✓ Saved JSON graph to: {args.json}")

    if args.dot:
        exporter.to_dot(args.dot)
        print(f"✓ Saved DOT graph to: {args.dot}")

    if args.html:
        exporter.to_html(args.html)
        print(f"✓ Saved interactive HTML visualizer to: {args.html}")

    if not (args.json or args.dot or args.html):
        # Default behavior: generate HTML visualizer
        default_html = "codegraph_report.html"
        exporter.to_html(default_html)
        print(f"✓ Saved default interactive HTML visualizer to: {default_html}")

if __name__ == "__main__":
    main()

