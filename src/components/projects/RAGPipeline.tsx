"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { id: "docs", label: "Documents", x: 60, y: 80, color: "#6366F1" },
  { id: "chunk", label: "Chunking", x: 200, y: 80, color: "#818CF8" },
  { id: "embed", label: "Embeddings", x: 340, y: 80, color: "#A5B4FC" },
  { id: "chroma", label: "ChromaDB", x: 480, y: 80, color: "#6366F1" },
  { id: "query", label: "User Query", x: 60, y: 220, color: "#9B1C31" },
  { id: "retrieve", label: "Retrieval", x: 200, y: 220, color: "#818CF8" },
  { id: "llm", label: "LLM Layer", x: 340, y: 220, color: "#6366F1" },
  { id: "response", label: "Cited Answer", x: 480, y: 220, color: "#34D399" },
];

const connections = [
  { from: "docs", to: "chunk" },
  { from: "chunk", to: "embed" },
  { from: "embed", to: "chroma" },
  { from: "query", to: "retrieve" },
  { from: "retrieve", to: "chroma", curved: true },
  { from: "retrieve", to: "llm" },
  { from: "llm", to: "response" },
];

export function RAGPipeline({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div className={`relative ${className ?? ""}`}>
      <svg viewBox="0 0 540 300" className="w-full h-auto" aria-label="RAG pipeline architecture diagram">
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="rgba(99,102,241,0.6)" />
          </marker>
        </defs>

        {connections.map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          const pathD = conn.curved
            ? `M ${from.x + 40} ${from.y} Q ${from.x + 40} ${130} ${to.x} ${to.y - 20}`
            : `M ${from.x + 40} ${from.y} L ${to.x - 40} ${to.y}`;

          return (
            <g key={`${conn.from}-${conn.to}`}>
              <path
                d={pathD}
                stroke="rgba(99,102,241,0.2)"
                strokeWidth="2"
                fill="none"
              />
              <motion.path
                d={pathD}
                stroke="rgba(99,102,241,0.6)"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#arrowhead)"
                className={!reducedMotion ? "flow-line" : ""}
                initial={reducedMotion ? {} : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              />
            </g>
          );
        })}

        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <rect
              x={node.x - 40}
              y={node.y - 20}
              width="80"
              height="40"
              rx="8"
              fill="rgba(255,255,255,0.04)"
              stroke={node.color}
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <text
              x={node.x}
              y={node.y + 5}
              textAnchor="middle"
              fill="#fafafa"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Provider badges */}
        <motion.g
          initial={reducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {["OpenAI", "Groq", "Ollama"].map((provider, i) => (
            <g key={provider} transform={`translate(${280 + i * 70}, 260)`}>
              <rect x="-28" y="-10" width="56" height="20" rx="10" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
              <text x="0" y="4" textAnchor="middle" fill="#a1a1aa" fontSize="9" fontFamily="var(--font-geist-mono)">
                {provider}
              </text>
            </g>
          ))}
        </motion.g>
      </svg>
    </div>
  );
}