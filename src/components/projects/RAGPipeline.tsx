"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Premium ProcessMind RAG architecture diagram.
 * Two lanes (index / query) with ChromaDB as a shared store so
 * the retrieval link never crosses other edges.
 */

type NodeDef = {
  id: string;
  label: string;
  sub?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  tone: "indigo" | "rose" | "emerald" | "store";
};

const W = 640;
const H = 300;

const nodes: NodeDef[] = [
  // Index lane (top)
  { id: "docs", label: "Documents", sub: "SOPs · incidents", x: 28, y: 36, w: 118, h: 52, tone: "indigo" },
  { id: "chunk", label: "Chunking", sub: "semantic split", x: 176, y: 36, w: 110, h: 52, tone: "indigo" },
  { id: "embed", label: "Embeddings", sub: "nomic / local", x: 316, y: 36, w: 118, h: 52, tone: "indigo" },
  // Shared store — mid-right, between lanes
  { id: "chroma", label: "ChromaDB", sub: "vector store", x: 474, y: 98, w: 132, h: 64, tone: "store" },
  // Query lane (bottom)
  { id: "query", label: "User Query", sub: "NL plant ask", x: 28, y: 200, w: 118, h: 52, tone: "rose" },
  { id: "retrieve", label: "Retrieval", sub: "hybrid + MMR", x: 176, y: 200, w: 110, h: 52, tone: "indigo" },
  { id: "llm", label: "LangGraph", sub: "6 agents", x: 332, y: 200, w: 118, h: 52, tone: "indigo" },
  { id: "response", label: "Cited Answer", sub: "engineer UI", x: 482, y: 200, w: 124, h: 52, tone: "emerald" },
];

const toneStyles = {
  indigo: {
    fill: "url(#nodeIndigo)",
    stroke: "rgba(129, 140, 248, 0.55)",
    glow: "rgba(99, 102, 241, 0.35)",
    label: "#eef2ff",
    sub: "rgba(199, 210, 254, 0.72)",
  },
  rose: {
    fill: "url(#nodeRose)",
    stroke: "rgba(248, 113, 113, 0.45)",
    glow: "rgba(155, 28, 49, 0.35)",
    label: "#fff1f2",
    sub: "rgba(254, 205, 211, 0.7)",
  },
  emerald: {
    fill: "url(#nodeEmerald)",
    stroke: "rgba(52, 211, 153, 0.5)",
    glow: "rgba(16, 185, 129, 0.35)",
    label: "#ecfdf5",
    sub: "rgba(167, 243, 208, 0.75)",
  },
  store: {
    fill: "url(#nodeStore)",
    stroke: "rgba(167, 139, 250, 0.7)",
    glow: "rgba(139, 92, 246, 0.45)",
    label: "#f5f3ff",
    sub: "rgba(221, 214, 254, 0.8)",
  },
};

function cx(n: NodeDef) {
  return n.x + n.w / 2;
}
function cy(n: NodeDef) {
  return n.y + n.h / 2;
}
function right(n: NodeDef) {
  return n.x + n.w;
}
function left(n: NodeDef) {
  return n.x;
}
function top(n: NodeDef) {
  return n.y;
}
function bottom(n: NodeDef) {
  return n.y + n.h;
}

type Edge = {
  id: string;
  d: string;
  label?: string;
  labelX?: number;
  labelY?: number;
  accent?: string;
  delay: number;
};

function buildEdges(map: Record<string, NodeDef>): Edge[] {
  const docs = map.docs;
  const chunk = map.chunk;
  const embed = map.embed;
  const chroma = map.chroma;
  const query = map.query;
  const retrieve = map.retrieve;
  const llm = map.llm;
  const response = map.response;

  // Horizontal index chain
  const e1 = `M ${right(docs) + 2} ${cy(docs)} L ${left(chunk) - 2} ${cy(chunk)}`;
  const e2 = `M ${right(chunk) + 2} ${cy(chunk)} L ${left(embed) - 2} ${cy(embed)}`;
  // Embed → Chroma: right then down into store (no cross)
  const e3 = [
    `M ${right(embed) + 2} ${cy(embed)}`,
    `L ${cx(chroma)} ${cy(embed)}`,
    `L ${cx(chroma)} ${top(chroma) - 2}`,
  ].join(" ");

  // Query chain
  const e4 = `M ${right(query) + 2} ${cy(query)} L ${left(retrieve) - 2} ${cy(retrieve)}`;
  // Retrieval → Chroma: straight up into store bottom (clear vertical corridor)
  const e5 = [
    `M ${cx(retrieve)} ${top(retrieve) - 2}`,
    `L ${cx(retrieve)} ${bottom(chroma) + 18}`,
    `L ${cx(chroma)} ${bottom(chroma) + 18}`,
    `L ${cx(chroma)} ${bottom(chroma) + 2}`,
  ].join(" ");
  // Retrieval → LangGraph
  const e6 = `M ${right(retrieve) + 2} ${cy(retrieve)} L ${left(llm) - 2} ${cy(llm)}`;
  // LangGraph → Answer
  const e7 = `M ${right(llm) + 2} ${cy(llm)} L ${left(response) - 2} ${cy(response)}`;

  return [
    { id: "docs-chunk", d: e1, delay: 0.05 },
    { id: "chunk-embed", d: e2, delay: 0.12 },
    { id: "embed-chroma", d: e3, delay: 0.2, label: "index", labelX: 430, labelY: 52 },
    { id: "query-retrieve", d: e4, delay: 0.28 },
    {
      id: "retrieve-chroma",
      d: e5,
      delay: 0.36,
      label: "vector search",
      labelX: 300,
      labelY: 168,
      accent: "rgba(167, 139, 250, 0.95)",
    },
    { id: "retrieve-llm", d: e6, delay: 0.44, label: "context", labelX: 268, labelY: 236 },
    { id: "llm-response", d: e7, delay: 0.52 },
  ];
}

export function RAGPipeline({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();
  const map = Object.fromEntries(nodes.map((n) => [n.id, n])) as Record<
    string,
    NodeDef
  >;
  const edges = buildEdges(map);

  return (
    <div className={`relative ${className ?? ""}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="ProcessMind RAG architecture: document indexing into ChromaDB, hybrid retrieval, LangGraph agents, cited answers"
      >
        <defs>
          <linearGradient id="laneTop" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(99,102,241,0.08)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0.02)" />
          </linearGradient>
          <linearGradient id="laneBottom" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(155,28,49,0.07)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0.03)" />
          </linearGradient>
          <linearGradient id="nodeIndigo" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(99,102,241,0.18)" />
            <stop offset="100%" stopColor="rgba(15,15,20,0.85)" />
          </linearGradient>
          <linearGradient id="nodeRose" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(155,28,49,0.22)" />
            <stop offset="100%" stopColor="rgba(15,15,20,0.85)" />
          </linearGradient>
          <linearGradient id="nodeEmerald" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(16,185,129,0.2)" />
            <stop offset="100%" stopColor="rgba(15,15,20,0.85)" />
          </linearGradient>
          <linearGradient id="nodeStore" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(139,92,246,0.32)" />
            <stop offset="100%" stopColor="rgba(30,20,50,0.95)" />
          </linearGradient>
          <linearGradient id="edgeStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(129,140,248,0.25)" />
            <stop offset="50%" stopColor="rgba(167,139,250,0.85)" />
            <stop offset="100%" stopColor="rgba(129,140,248,0.35)" />
          </linearGradient>
          <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.45" />
          </filter>
          <marker
            id="ragArrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="rgba(167,139,250,0.9)" />
          </marker>
          <marker
            id="ragArrowMuted"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 Z" fill="rgba(129,140,248,0.7)" />
          </marker>
        </defs>

        {/* Lane plates */}
        <rect
          x="12"
          y="18"
          width="450"
          height="88"
          rx="16"
          fill="url(#laneTop)"
          stroke="rgba(99,102,241,0.12)"
          strokeWidth="1"
        />
        <rect
          x="12"
          y="182"
          width="608"
          height="88"
          rx="16"
          fill="url(#laneBottom)"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />

        {/* Lane captions */}
        <text
          x="24"
          y="14"
          fill="rgba(165,180,252,0.75)"
          fontSize="9"
          fontFamily="var(--font-geist-mono), ui-monospace, monospace"
          letterSpacing="0.14em"
        >
          INDEX PIPELINE
        </text>
        <text
          x="24"
          y="178"
          fill="rgba(252,165,165,0.7)"
          fontSize="9"
          fontFamily="var(--font-geist-mono), ui-monospace, monospace"
          letterSpacing="0.14em"
        >
          QUERY · DIAGNOSTICS
        </text>
        <text
          x="474"
          y="90"
          fill="rgba(196,181,253,0.8)"
          fontSize="9"
          fontFamily="var(--font-geist-mono), ui-monospace, monospace"
          letterSpacing="0.12em"
        >
          KNOWLEDGE
        </text>

        {/* Edges under nodes */}
        {edges.map((edge) => {
          const isSearch = edge.id === "retrieve-chroma";
          return (
            <g key={edge.id}>
              {/* soft underglow */}
              <path
                d={edge.d}
                fill="none"
                stroke={isSearch ? "rgba(139,92,246,0.2)" : "rgba(99,102,241,0.12)"}
                strokeWidth={isSearch ? 6 : 4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <motion.path
                d={edge.d}
                fill="none"
                stroke={edge.accent ?? "url(#edgeStroke)"}
                strokeWidth={isSearch ? 2.25 : 1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                markerEnd={isSearch ? "url(#ragArrow)" : "url(#ragArrowMuted)"}
                initial={
                  reducedMotion
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.7,
                  delay: edge.delay,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              {/* flow dash overlay */}
              {!reducedMotion && (
                <motion.path
                  d={edge.d}
                  fill="none"
                  stroke={
                    isSearch
                      ? "rgba(221,214,254,0.55)"
                      : "rgba(199,210,254,0.4)"
                  }
                  strokeWidth={isSearch ? 1.5 : 1.25}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5 10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: edge.delay + 0.45, duration: 0.3 }}
                  className="flow-line"
                />
              )}
              {edge.label && (
                <motion.g
                  initial={reducedMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: edge.delay + 0.35 }}
                >
                  <rect
                    x={(edge.labelX ?? 0) - 36}
                    y={(edge.labelY ?? 0) - 9}
                    width="72"
                    height="16"
                    rx="8"
                    fill="rgba(10,10,14,0.88)"
                    stroke="rgba(167,139,250,0.25)"
                    strokeWidth="1"
                  />
                  <text
                    x={edge.labelX}
                    y={(edge.labelY ?? 0) + 3.5}
                    textAnchor="middle"
                    fill="rgba(221,214,254,0.9)"
                    fontSize="8.5"
                    fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                  >
                    {edge.label}
                  </text>
                </motion.g>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const tone = toneStyles[node.tone];
          const isStore = node.tone === "store";
          return (
            <motion.g
              key={node.id}
              filter={isStore ? "url(#softGlow)" : "url(#nodeShadow)"}
              initial={
                reducedMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 8 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.08 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {isStore && (
                <rect
                  x={node.x - 4}
                  y={node.y - 4}
                  width={node.w + 8}
                  height={node.h + 8}
                  rx="16"
                  fill="rgba(139,92,246,0.08)"
                  stroke="rgba(167,139,250,0.2)"
                  strokeWidth="1"
                />
              )}
              <rect
                x={node.x}
                y={node.y}
                width={node.w}
                height={node.h}
                rx={isStore ? 14 : 12}
                fill={tone.fill}
                stroke={tone.stroke}
                strokeWidth={isStore ? 1.5 : 1}
              />
              {/* top highlight */}
              <rect
                x={node.x + 1}
                y={node.y + 1}
                width={node.w - 2}
                height={Math.max(14, node.h * 0.35)}
                rx={isStore ? 13 : 11}
                fill="url(#laneTop)"
                opacity="0.35"
                style={{ pointerEvents: "none" }}
              />
              <text
                x={cx(node)}
                y={node.sub ? node.y + 22 : cy(node) + 4}
                textAnchor="middle"
                fill={tone.label}
                fontSize={isStore ? 13 : 11.5}
                fontWeight="600"
                fontFamily="var(--font-geist-sans), system-ui, sans-serif"
              >
                {node.label}
              </text>
              {node.sub && (
                <text
                  x={cx(node)}
                  y={node.y + 38}
                  textAnchor="middle"
                  fill={tone.sub}
                  fontSize="8.5"
                  fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                >
                  {node.sub}
                </text>
              )}
            </motion.g>
          );
        })}

        {/* Provider strip */}
        <motion.g
          initial={reducedMotion ? false : { opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.4 }}
        >
          <text
            x={W / 2}
            y={278}
            textAnchor="middle"
            fill="rgba(161,161,170,0.7)"
            fontSize="9"
            fontFamily="var(--font-geist-mono), ui-monospace, monospace"
            letterSpacing="0.08em"
          >
            LLM · Ollama · Qwen · OpenAI-compatible
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
