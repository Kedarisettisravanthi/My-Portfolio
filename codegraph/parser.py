import ast
import os
from pathlib import Path
from typing import Optional
from .graph import CodeGraph, CodeNode

class ASTVisitor(ast.NodeVisitor):
    def __init__(self, file_path: str, graph: CodeGraph):
        self.file_path = file_path
        self.graph = graph
        self.scope_stack = []

        # Create module root node
        mod_name = Path(file_path).stem
        self.module_id = f"module:{file_path}"
        self.graph.add_node(CodeNode(
            id=self.module_id,
            name=mod_name,
            kind="module",
            file_path=file_path,
            line=1
        ))
        self.scope_stack.append(self.module_id)

    def visit_Import(self, node: ast.Import):
        for alias in node.names:
            imp_id = f"import:{self.file_path}:{alias.name}:{node.lineno}"
            self.graph.add_node(CodeNode(
                id=imp_id,
                name=alias.name,
                kind="import",
                file_path=self.file_path,
                line=node.lineno
            ))
            parent = self.scope_stack[-1]
            self.graph.add_edge(parent, imp_id, "IMPORTS")
        self.generic_visit(node)

    def visit_ImportFrom(self, node: ast.ImportFrom):
        mod = node.module or ""
        for alias in node.names:
            full_name = f"{mod}.{alias.name}" if mod else alias.name
            imp_id = f"import:{self.file_path}:{full_name}:{node.lineno}"
            self.graph.add_node(CodeNode(
                id=imp_id,
                name=full_name,
                kind="import",
                file_path=self.file_path,
                line=node.lineno
            ))
            parent = self.scope_stack[-1]
            self.graph.add_edge(parent, imp_id, "IMPORTS")
        self.generic_visit(node)

    def visit_ClassDef(self, node: ast.ClassDef):
        class_id = f"class:{self.file_path}:{node.name}:{node.lineno}"
        doc = ast.get_docstring(node)
        self.graph.add_node(CodeNode(
            id=class_id,
            name=node.name,
            kind="class",
            file_path=self.file_path,
            line=node.lineno,
            docstring=doc
        ))
        parent = self.scope_stack[-1]
        self.graph.add_edge(parent, class_id, "CONTAINS")

        # Track base classes / inheritance
        for base in node.bases:
            if isinstance(base, ast.Name):
                base_id = f"class_ref:{base.id}"
                self.graph.add_node(CodeNode(
                    id=base_id,
                    name=base.id,
                    kind="class",
                    file_path="<external>",
                    line=node.lineno
                ))
                self.graph.add_edge(class_id, base_id, "INHERITS")

        self.scope_stack.append(class_id)
        self.generic_visit(node)
        self.scope_stack.pop()

    def visit_FunctionDef(self, node: ast.FunctionDef):
        parent = self.scope_stack[-1]
        kind = "method" if "class:" in parent else "function"
        fn_id = f"{kind}:{self.file_path}:{node.name}:{node.lineno}"
        doc = ast.get_docstring(node)

        self.graph.add_node(CodeNode(
            id=fn_id,
            name=node.name,
            kind=kind,
            file_path=self.file_path,
            line=node.lineno,
            docstring=doc
        ))
        self.graph.add_edge(parent, fn_id, "CONTAINS")

        self.scope_stack.append(fn_id)
        self.generic_visit(node)
        self.scope_stack.pop()

    def visit_AsyncFunctionDef(self, node: ast.AsyncFunctionDef):
        parent = self.scope_stack[-1]
        kind = "method" if "class:" in parent else "function"
        fn_id = f"{kind}:{self.file_path}:{node.name}:{node.lineno}"
        doc = ast.get_docstring(node)

        self.graph.add_node(CodeNode(
            id=fn_id,
            name=node.name,
            kind=kind,
            file_path=self.file_path,
            line=node.lineno,
            docstring=doc
        ))
        self.graph.add_edge(parent, fn_id, "CONTAINS")

        self.scope_stack.append(fn_id)
        self.generic_visit(node)
        self.scope_stack.pop()

    def visit_Call(self, node: ast.Call):
        caller_id = self.scope_stack[-1]
        call_name = None
        if isinstance(node.func, ast.Name):
            call_name = node.func.id
        elif isinstance(node.func, ast.Attribute):
            call_name = node.func.attr

        if call_name:
            target_id = f"call_ref:{call_name}"
            self.graph.add_node(CodeNode(
                id=target_id,
                name=call_name,
                kind="function",
                file_path="<reference>",
                line=node.lineno
            ))
            self.graph.add_edge(caller_id, target_id, "CALLS")

        self.generic_visit(node)

class CodeParser:
    """Parses code files or repositories into a CodeGraph."""

    def __init__(self, graph: Optional[CodeGraph] = None):
        self.graph = graph or CodeGraph()

    def parse_file(self, file_path: str) -> CodeGraph:
        path = Path(file_path).resolve()
        if not path.is_file() or path.suffix != ".py":
            return self.graph

        try:
            with open(path, "r", encoding="utf-8") as f:
                code_content = f.read()
            tree = ast.parse(code_content, filename=str(path))
            visitor = ASTVisitor(str(path), self.graph)
            visitor.visit(tree)
        except Exception as e:
            print(f"[CodeParser Warning] Could not parse {path}: {e}")

        return self.graph

    def parse_directory(self, dir_path: str, max_files: int = 500) -> CodeGraph:
        count = 0
        for root, dirs, files in os.walk(dir_path):
            dirs[:] = [d for d in dirs if not d.startswith(".") and d not in ("venv", "__pycache__", "node_modules")]
            for f in files:
                if f.endswith(".py"):
                    full_path = os.path.join(root, f)
                    self.parse_file(full_path)
                    count += 1
                    if count >= max_files:
                        return self.graph
        return self.graph

