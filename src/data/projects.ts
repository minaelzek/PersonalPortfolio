export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  architecture: string;
  decisions: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  github?: string;
  live?: string;
  accent: string;
  theme: "racing" | "sakura" | "ai" | "vision" | "industrial";
}

export const projects: ProjectData[] = [
  {
    id: "polyp-detection",
    slug: "polyp-detection",
    name: "Polyp Detection AI",
    tagline: "Clinical computer vision, production-ready",
    description:
      "Real-time computer vision system for polyp detection in medical imaging—owned from data collection through deployment, with close collaboration on clinical requirements.",
    challenge:
      "Bridge the gap between research-grade models and reliable clinical behavior: annotation workflows, validation dashboards, and accuracy targets that domain experts could trust in simulated environments.",
    solution:
      "Built the full ML pipeline—data collection and annotation, preprocessing, TensorFlow training, and a web application with real-time inference and validation dashboards aligned with medical stakeholders.",
    architecture:
      "Imaging ingest → preprocessing & augmentation → TensorFlow inference service → web UI with real-time validation dashboards and audit-friendly metrics.",
    decisions: [
      "Structured annotation workflows to keep training data consistent with clinical labeling needs",
      "Validation dashboards gave stakeholders visibility into model behavior before rollout",
      "End-to-end ownership reduced handoff risk between research and production",
    ],
    metrics: [
      { label: "Detection accuracy", value: "94%" },
      { label: "Baseline", value: "50%" },
      { label: "Pipeline", value: "End-to-end" },
      { label: "Stack", value: "TensorFlow + CV" },
    ],
    techStack: [
      "TensorFlow",
      "Computer Vision",
      "OpenCV",
      "Python",
      "End-to-End ML",
      "Model Validation",
    ],
    accent: "#14B8A6",
    theme: "vision",
  },
  {
    id: "automation-fb",
    slug: "automation-fb",
    name: "PLC/HMI Automation",
    tagline: "Food & beverage process control",
    description:
      "PLC and HMI automation for high-volume food & beverage operations—mixproof valves, route control, and CIP in sanitary environments with regulatory compliance in mind.",
    challenge:
      "Translate operator and process-engineer requirements into maintainable control logic under tight engagement timelines, without sacrificing reliability or usability on the plant floor.",
    solution:
      "Delivered Allen-Bradley ControlLogix/CompactLogix ladder logic and structured text with FactoryTalk View HMI screens—focused on mixproof sequencing, route control, and Clean-in-Place automation.",
    architecture:
      "ControlLogix / CompactLogix PLCs → ladder logic & structured text → FactoryTalk View HMI → operator workflows aligned with SOPs and compliance checks.",
    decisions: [
      "Collaborated on-site with process engineers and operators to validate sequences",
      "CIP and valve logic designed for sanitary environments and auditability",
      "HMI layouts prioritized operator clarity over feature density",
    ],
    metrics: [
      { label: "Platform", value: "Allen-Bradley" },
      { label: "Scope", value: "CIP + routing" },
      { label: "HMI", value: "FactoryTalk View" },
      { label: "Focus", value: "Compliance" },
    ],
    techStack: [
      "PLC Programming",
      "HMI Design",
      "FactoryTalk View",
      "ControlLogix",
      "Industrial Automation",
      "SCADA",
    ],
    accent: "#F59E0B",
    theme: "industrial",
  },
  {
    id: "podium-picks",
    slug: "podiumpicks",
    name: "PodiumPicks",
    tagline: "F1 fantasy, engineered for scale",
    description:
      "Took a prototype to a production-oriented F1 fantasy platform—PostgreSQL, Redis caching, Celery background work, and a Dockerized stack (Gunicorn + Nginx).",
    challenge:
      "Fantasy sports need consistent standings, low external API load, and async scoring without blocking user-facing requests—while keeping deploys repeatable across environments.",
    solution:
      "Redesigned information architecture, migrated to PostgreSQL with Redis, implemented Celery for scoring and standings, and built a centralized data service with caching and request deduplication.",
    architecture:
      "Client → Nginx → Gunicorn/Django API → PostgreSQL + Redis → Celery workers for scoring/standings → external F1 data APIs with deduplicated fetch layer.",
    decisions: [
      "Redis-backed caching and deduplication cut redundant external API traffic",
      "Celery decouples heavy scoring from the request cycle",
      "Docker Compose aligns dev and production deployment topology",
    ],
    metrics: [
      { label: "Data layer", value: "PostgreSQL" },
      { label: "Cache", value: "Redis" },
      { label: "Async", value: "Celery" },
      { label: "Deploy", value: "Docker" },
    ],
    techStack: [
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Gunicorn",
      "Nginx",
      "Full-Stack Development",
    ],
    github: "https://github.com",
    accent: "#E10600",
    theme: "racing",
  },
  {
    id: "seed-journal",
    slug: "seed-journal",
    name: "Seed Journal",
    tagline: "AI-powered reflection, cross-platform",
    description:
      "Independently designed and shipped a Flutter journaling app with a living Sakura tree, voice journaling, AI-driven reflection analysis, and custom animations—73+ passing tests.",
    challenge:
      "Deliver a calming, emotionally resonant product with offline-first persistence, clean architecture, and polished custom UI—without compromising performance on iOS and Android.",
    solution:
      "Clean Architecture with Riverpod, Drift (SQLite) persistence, a TreeGrowthEngine tied to reflection streaks, full voice journaling, and layered CustomPainters for Sakura animations.",
    architecture:
      "Flutter UI + CustomPainters → domain use cases → Drift/SQLite repositories → on-device reflection analysis and growth engine.",
    decisions: [
      "TreeGrowthEngine maps reflection patterns to procedural blossom behavior",
      "Drift enables reliable local-first storage with testable data layers",
      "73+ tests anchor business logic and growth rules",
    ],
    metrics: [
      { label: "Tests", value: "73+" },
      { label: "Platforms", value: "iOS + Android" },
      { label: "Architecture", value: "Clean + Riverpod" },
      { label: "Storage", value: "Drift / SQLite" },
    ],
    techStack: [
      "Flutter",
      "Riverpod",
      "Drift",
      "Clean Architecture",
      "Custom UI",
      "Voice Journaling",
    ],
    github: "https://github.com",
    accent: "#F4A7B9",
    theme: "sakura",
  },
  {
    id: "rag-sop",
    slug: "rag-sop-assistant",
    name: "RAG SOP Assistant",
    tagline: "Citation-backed answers for process engineers",
    description:
      "Production RAG app that ingests SOPs, work instructions, and safety manuals—natural-language Q&A with citations for shift operations, compliance, and onboarding.",
    challenge:
      "Process engineers need fast, trustworthy procedural answers during live operations—without hallucination-prone black boxes or single-vendor LLM lock-in.",
    solution:
      "Three-layer design: Streamlit UI, document processing, and LangChain RAG with ChromaDB—supporting Ollama, OpenAI, and Groq for flexible deployment.",
    architecture:
      "Document ingest → chunking & embeddings → ChromaDB → retrieval → multi-provider LLM orchestration → cited responses in Streamlit.",
    decisions: [
      "Every answer carries citation metadata for compliance and traceability",
      "Multi-provider LLM layer supports on-prem Ollama and cloud APIs",
      "Chunking tuned for dense industrial procedure text",
    ],
    metrics: [
      { label: "LLM providers", value: "3" },
      { label: "Vector store", value: "ChromaDB" },
      { label: "UI", value: "Streamlit" },
      { label: "Responses", value: "Cited" },
    ],
    techStack: [
      "RAG",
      "LangChain",
      "ChromaDB",
      "Ollama",
      "OpenAI",
      "Groq",
      "Streamlit",
    ],
    github: "https://github.com",
    accent: "#6366F1",
    theme: "ai",
  },
];