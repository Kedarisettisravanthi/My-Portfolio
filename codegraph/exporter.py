import json
from pathlib import Path
from typing import Any, Dict
from .graph import CodeGraph

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeGraph - Interactive Codebase Knowledge Graph</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <style>
        :root {
            --bg-color: #0f172a;
            --panel-bg: #1e293b;
            --text-main: #f8fafc;
            --text-sub: #94a3b8;
            --border-color: #334155;
            --accent: #38bdf8;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            overflow: hidden;
            display: flex;
            height: 100vh;
        }
        #sidebar {
            width: 320px;
            background: var(--panel-bg);
            border-right: 1px solid var(--border-color);
            display: flex;
            flex-direction: column;
            z-index: 10;
        }
        .header {
            padding: 20px;
            border-bottom: 1px solid var(--border-color);
        }
        .header h1 {
            font-size: 1.25rem;
            color: var(--accent);
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .header p {
            font-size: 0.85rem;
            color: var(--text-sub);
            margin-top: 4px;
        }
        .stats {
            padding: 16px 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            border-bottom: 1px solid var(--border-color);
        }
        .stat-card {
            background: rgba(255, 255, 255, 0.03);
            padding: 10px;
            border-radius: 8px;
            border: 1px solid var(--border-color);
        }
        .stat-label { font-size: 0.75rem; color: var(--text-sub); text-transform: uppercase; }
        .stat-val { font-size: 1.25rem; font-weight: bold; color: var(--text-main); }
        .legend {
            padding: 16px 20px;
            border-bottom: 1px solid var(--border-color);
        }
        .legend h3 { font-size: 0.85rem; margin-bottom: 10px; text-transform: uppercase; color: var(--text-sub); }
        .legend-item { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 0.85rem; }
        .badge { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
        #details {
            padding: 20px;
            flex: 1;
            overflow-y: auto;
            font-size: 0.85rem;
        }
        #details h3 { color: var(--accent); margin-bottom: 8px; }
        #details pre {
            background: rgba(0,0,0,0.3);
            padding: 10px;
            border-radius: 6px;
            margin-top: 8px;
            white-space: pre-wrap;
            word-break: break-all;
        }
        #viewport {
            flex: 1;
            position: relative;
        }
        svg {
            width: 100%;
            height: 100%;
        }
        .link {
            stroke: #475569;
            stroke-opacity: 0.6;
            stroke-width: 1.5px;
        }
        .link-text {
            fill: #64748b;
            font-size: 10px;
        }
        .node circle {
            stroke: #fff;
            stroke-width: 1.5px;
            cursor: pointer;
            transition: r 0.2s;
        }
        .node:hover circle {
            stroke: var(--accent);
            stroke-width: 3px;
        }
        .node text {
            fill: var(--text-main);
            font-size: 11px;
            pointer-events: none;
            text-shadow: 0 1px 3px rgba(0,0,0,0.8);
        }
    </style>
</head>
<body>
    <div id="sidebar">
        <div class="header">
            <h1>🕸️ CodeGraph</h1>
            <p>Interactive Code Knowledge Graph</p>
        </div>
        <div class="stats" id="stats-panel">
            <div class="stat-card">
                <div class="stat-label">Nodes</div>
                <div class="stat-val" id="stat-nodes">0</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Edges</div>
                <div class="stat-val" id="stat-edges">0</div>
            </div>
        </div>
        <div class="legend">
            <h3>Node Types</h3>
            <div class="legend-item"><span class="badge" style="background: #3b82f6;"></span> Module</div>
            <div class="legend-item"><span class="badge" style="background: #8b5cf6;"></span> Class</div>
            <div class="legend-item"><span class="badge" style="background: #10b981;"></span> Function</div>
            <div class="legend-item"><span class="badge" style="background: #f59e0b;"></span> Method</div>
            <div class="legend-item"><span class="badge" style="background: #ec4899;"></span> Import / Ref</div>
        </div>
        <div id="details">
            <h3>Details</h3>
            <p style="color: var(--text-sub);">Click on any node in the graph to inspect its details, imports, or callers.</p>
        </div>
    </div>
    <div id="viewport">
        <svg id="graph-svg"></svg>
    </div>

    <script>
        const graphData = GRAPH_DATA_PLACEHOLDER;

        document.getElementById("stat-nodes").innerText = graphData.nodes.length;
        document.getElementById("stat-edges").innerText = graphData.edges.length;

        const colorMap = {
            "module": "#3b82f6",
            "class": "#8b5cf6",
            "function": "#10b981",
            "method": "#f59e0b",
            "import": "#ec4899"
        };

        const width = document.getElementById("viewport").clientWidth;
        const height = document.getElementById("viewport").clientHeight;

        const svg = d3.select("#graph-svg")
            .attr("viewBox", [0, 0, width, height]);

        const g = svg.append("g");

        svg.call(d3.zoom()
            .scaleExtent([0.1, 4])
            .on("zoom", (event) => g.attr("transform", event.transform)));

        // Arrow marker
        svg.append("defs").selectAll("marker")
            .data(["CONTAINS", "CALLS", "IMPORTS", "INHERITS"])
            .enter().append("marker")
            .attr("id", d => `arrow-${d}`)
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 22)
            .attr("refY", 0)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("path")
            .attr("fill", "#64748b")
            .attr("d", "M0,-5L10,0L0,5");

        const simulation = d3.forceSimulation(graphData.nodes)
            .force("link", d3.forceLink(graphData.edges).id(d => d.id).distance(90))
            .force("charge", d3.forceManyBody().strength(-240))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collision", d3.forceCollide().radius(30));

        const link = g.append("g")
            .selectAll("line")
            .data(graphData.edges)
            .enter().append("line")
            .attr("class", "link")
            .attr("marker-end", d => `url(#arrow-${d.relation})`);

        const node = g.append("g")
            .selectAll(".node")
            .data(graphData.nodes)
            .enter().append("g")
            .attr("class", "node")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        node.append("circle")
            .attr("r", d => d.kind === "module" ? 14 : (d.kind === "class" ? 11 : 8))
            .attr("fill", d => colorMap[d.kind] || "#94a3b8");

        node.append("text")
            .attr("dx", 12)
            .attr("dy", ".35em")
            .text(d => d.name);

        node.on("click", (event, d) => {
            const detailsDiv = document.getElementById("details");
            detailsDiv.innerHTML = `
                <h3>${d.name}</h3>
                <p><strong>Kind:</strong> ${d.kind}</p>
                <p><strong>File:</strong> ${d.file_path}</p>
                <p><strong>Line:</strong> ${d.line}</p>
                ${d.docstring ? `<p><strong>Docstring:</strong><br><pre>${d.docstring}</pre></p>` : ''}
                <pre>${JSON.stringify(d, null, 2)}</pre>
            `;
        });

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("transform", d => `translate(${d.x},${d.y})`);
        });

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    </script>
</body>
</html>
"""

class GraphExporter:
    """Exports a CodeGraph instance into multiple formats."""

    def __init__(self, graph: CodeGraph):
        self.graph = graph

    def to_json(self, file_path: str, indent: int = 2) -> None:
        path = Path(file_path).resolve()
        with open(path, "w", encoding="utf-8") as f:
            json.dump(self.graph.to_dict(), f, indent=indent)

    def to_dot(self, file_path: str) -> None:
        path = Path(file_path).resolve()
        lines = ["digraph CodeGraph {", '  rankdir="LR";', '  node [shape=box, style=rounded, fontname="Helvetica"];']
        for n in self.graph.nodes.values():
            safe_name = n.name.replace('"', '\\"')
            lines.append(f'  "{n.id}" [label="{safe_name} ({n.kind})"];')
        for e in self.graph.edges:
            lines.append(f'  "{e.source}" -> "{e.target}" [label="{e.relation}"];')
        lines.append("}")
        with open(path, "w", encoding="utf-8") as f:
            f.write("\n".join(lines))

    def to_html(self, file_path: str) -> None:
        path = Path(file_path).resolve()
        data_json = json.dumps(self.graph.to_dict())
        html_content = HTML_TEMPLATE.replace("GRAPH_DATA_PLACEHOLDER", data_json)
        with open(path, "w", encoding="utf-8") as f:
            f.write(html_content)

