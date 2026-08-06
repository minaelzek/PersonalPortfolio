export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "SQL", "Structured Text", "Bash"],
  },
  {
    name: "AI & ML",
    items: [
      "TensorFlow",
      "Computer Vision",
      "LangGraph",
      "LangChain",
      "RAG",
      "XGBoost",
      "LLMs",
      "RLHF",
      "ChromaDB",
      "Ollama",
    ],
  },
  {
    name: "Full Stack",
    items: ["React", "Next.js", "Django", "FastAPI", "REST APIs", "WebSockets"],
  },
  {
    name: "Data",
    items: [
      "PostgreSQL",
      "TimescaleDB",
      "Redis",
      "Cloudflare D1",
      "Pandas",
      "ETL",
    ],
  },
  {
    name: "Industrial",
    items: [
      "PLC Programming",
      "Allen-Bradley",
      "HMI / FactoryTalk",
      "SCADA",
      "MQTT / OPC-UA",
      "CIP Automation",
    ],
  },
  {
    name: "Platform",
    items: [
      "Docker",
      "Railway",
      "Cloudflare Workers",
      "Stripe",
      "Git",
      "CI / Playwright",
    ],
  },
  {
    name: "Practices",
    items: [
      "Clean Architecture",
      "Model Evaluation",
      "Prompt Engineering",
      "Human-in-the-loop AI",
      "Stakeholder Collaboration",
    ],
  },
];