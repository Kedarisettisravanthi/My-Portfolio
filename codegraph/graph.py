from dataclasses import dataclass, field
from typing import Dict, List, Set, Any, Optional

@dataclass
class CodeNode:
    id: str
    name: str
    kind: str  # 'module', 'class', 'function', 'method', 'import'
    file_path: str
    line: int = 1
    docstring: Optional[str] = None
    attributes: Dict[str, Any] = field(default_factory=dict)

    def to_dict(self) -> Dict[str, Any]:
        return {
            "id": self.id,
            "name": self.name,
            "kind": self.kind,
            "file_path": self.file_path,
            "line": self.line,
            "docstring": self.docstring,
            "attributes": self.attributes,
        }

@dataclass
class CodeEdge:
    source: str
    target: str
    relation: str  # 'CONTAINS', 'CALLS', 'INHERITS', 'IMPORTS'
    weight: int = 1

    def to_dict(self) -> Dict[str, Any]:
        return {
            "source": self.source,
            "target": self.target,
            "relation": self.relation,
            "weight": self.weight,
        }

class CodeGraph:
    """In-memory directed code knowledge graph."""

    def __init__(self):
        self.nodes: Dict[str, CodeNode] = {}
        self.edges: List[CodeEdge] = []
        self._adj: Dict[str, Set[str]] = {}

    def add_node(self, node: CodeNode) -> None:
        if node.id not in self.nodes:
            self.nodes[node.id] = node
            if node.id not in self._adj:
                self._adj[node.id] = set()

    def add_edge(self, source: str, target: str, relation: str, weight: int = 1) -> None:
        if source not in self.nodes or target not in self.nodes:
            return
        edge = CodeEdge(source=source, target=target, relation=relation, weight=weight)
        self.edges.append(edge)
        self._adj.setdefault(source, set()).add(target)

    def get_neighbors(self, node_id: str) -> List[CodeNode]:
        targets = self._adj.get(node_id, set())
        return [self.nodes[tid] for tid in targets if tid in self.nodes]

    def summary(self) -> Dict[str, int]:
        kind_counts: Dict[str, int] = {}
        for n in self.nodes.values():
            kind_counts[n.kind] = kind_counts.get(n.kind, 0) + 1
        return {
            "total_nodes": len(self.nodes),
            "total_edges": len(self.edges),
            **kind_counts
        }

    def to_dict(self) -> Dict[str, Any]:
        return {
            "nodes": [n.to_dict() for n in self.nodes.values()],
            "edges": [e.to_dict() for e in self.edges],
            "summary": self.summary()
        }

