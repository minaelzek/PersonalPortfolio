export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  name: string;
  /** Compact label for work index */
  shortName: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  architecture: string;
  decisions: string[];
  metrics: ProjectMetric[];
  techStack: string[];
  /** Only public, working URLs — omit private repos */
  github?: string;
  live?: string;
  accent: string;
  theme: "racing" | "sakura" | "ai" | "vision" | "industrial" | "policy" | "servicing";
  featured?: boolean;
  /** Personal practice. Not a shipped product and not professional employment. */
  practice?: boolean;
}

export const projects: ProjectData[] = [
  {
    id: "undercut",
    slug: "undercut",
    name: "Undercut",
    shortName: "Undercut",
    tagline: "Private-league F1 fantasy, live in production",
    description:
      "Full-stack Formula 1 fantasy platform for private leagues—championship and race-weekend picks, sprint sessions, bonus picks, live standings, Stripe billing, and continuous F1 data sync.",
    challenge:
      "Friend groups need consistent scoring, always-current race data, and a polished race-weekend UX without treating fantasy as a public gambling product—or blocking deploys on flaky external APIs.",
    solution:
      "Shipped React/Vite + Django REST with PostgreSQL and Redis, Cloudflare Worker SPA at playundercut.com, Railway API + f1-data-sync workers, async scoring paths, and Stripe as the entitlement source of truth.",
    architecture:
      "Cloudflare Worker SPA → Django DRF API (Railway) → PostgreSQL + Redis → f1-data-sync (Jolpica / OpenF1 / weather) → Stripe webhooks for Plus → Google/Apple/email auth.",
    decisions: [
      "Private leagues with invite codes—product scoped for friend groups, not public gambling",
      "Live F1 calendar, results, and standings via dedicated sync service so the app stays current mid-season",
      "Playwright E2E, visual regression, and axe a11y in CI; Stripe Plus keeps ads and entitlements honest",
    ],
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Data", value: "F1 sync" },
      { label: "Auth", value: "OAuth" },
      { label: "Billing", value: "Stripe" },
    ],
    techStack: [
      "React",
      "TypeScript",
      "Django REST",
      "PostgreSQL",
      "Redis",
      "Cloudflare Workers",
      "Railway",
      "Stripe",
      "Playwright",
    ],
    live: "https://playundercut.com",
    // GitHub repo is private — do not link (404 for visitors)
    accent: "#E10600",
    theme: "racing",
    featured: true,
  },
  {
    id: "processmind",
    slug: "processmind-ai",
    name: "ProcessMind AI",
    shortName: "ProcessMind",
    tagline: "Industrial process engineering copilot",
    description:
      "AI-powered predictive maintenance and multi-agent diagnostics for manufacturing—digital twin telemetry, ML risk scoring, RAG over SOPs, and human-in-the-loop engineer workflows.",
    challenge:
      "Plant teams need real-time risk signals and trustworthy procedural answers without replacing engineer judgment—or locking into a single LLM vendor.",
    solution:
      "Built a full stack where ML detects anomalies and estimates remaining useful life, LangGraph agents orchestrate diagnostics, and LLMs explain findings with RAG citations over manuals and incident history.",
    architecture:
      "Next.js control-center UI → FastAPI + WebSockets → PostgreSQL/TimescaleDB telemetry → XGBoost/Isolation Forest models → LangGraph multi-agent workflow → ChromaDB RAG + Ollama/Qwen → OPC-UA/MQTT plant simulation.",
    decisions: [
      "Strict ML/LLM separation: models detect and score; LLMs explain; engineers decide",
      "Physics-based digital twin (Lines A/B/C, 10 assets) streams 1-second multi-sensor telemetry",
      "Six specialized agents plus failure-incident RAG for explainable maintenance intelligence",
    ],
    metrics: [
      { label: "Agents", value: "6" },
      { label: "Telemetry", value: "1s" },
      { label: "Twin assets", value: "10" },
      { label: "Approach", value: "ML + RAG" },
    ],
    techStack: [
      "FastAPI",
      "Next.js",
      "LangGraph",
      "XGBoost",
      "ChromaDB",
      "Ollama",
      "TimescaleDB",
      "MQTT / OPC-UA",
      "Docker",
    ],
    accent: "#6366F1",
    theme: "ai",
    featured: true,
  },
  {
    id: "polyp-detection",
    slug: "polyp-detection",
    name: "Polyp Detection AI",
    shortName: "Polyp CV",
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
      { label: "Accuracy", value: "94%" },
      { label: "Baseline", value: "50%" },
      { label: "Pipeline", value: "E2E" },
      { label: "Domain", value: "Clinical" },
    ],
    techStack: [
      "TensorFlow",
      "Computer Vision",
      "OpenCV",
      "Python",
      "End-to-End ML",
      "Model Validation",
    ],
    github: "https://github.com/minaelzek/colonoscopy-image-classification",
    accent: "#14B8A6",
    theme: "vision",
    featured: true,
  },
  {
    id: "automation-fb",
    slug: "automation-fb",
    name: "PLC/HMI Automation",
    shortName: "PLC/HMI",
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
      { label: "Platform", value: "A-B" },
      { label: "Scope", value: "CIP" },
      { label: "HMI", value: "FT View" },
      { label: "Focus", value: "Sanitary" },
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
    id: "seed-journal",
    slug: "seed-journal",
    name: "Seed Journal",
    shortName: "Seed Journal",
    tagline: "Encrypted reflection, living sakura",
    description:
      "Private web journaling ritual with a living sakura tree—passphrase-encrypted vault in the browser, deterministic reflection prompts, and growth that reacts to completed insights.",
    challenge:
      "Build a calming, privacy-first product where journal content never sits readable on the server—while still delivering beautiful, accessible UX and durable cloud persistence.",
    solution:
      "Client-side PBKDF2 + AES-GCM encryption before Cloudflare D1 storage, account-scoped auth, illustrated 2.5D sakura hero tied to reflection streaks, and full export/search/delete flows with reduced-motion and screen-reader support.",
    architecture:
      "React/vinext UI → browser crypto vault (PBKDF2/AES-GCM) → Cloudflare D1 via Drizzle → growth engine + sakura illustration theater (R3F-capable stack).",
    decisions: [
      "Zero-knowledge vault: entries encrypted with a user-held passphrase before they leave the browser",
      "Deterministic local reflection prompts—no paid AI dependency for core ritual",
      "Tree growth and hanami leaps map reflection depth to procedural blossom behavior",
    ],
    metrics: [
      { label: "Privacy", value: "E2E" },
      { label: "Storage", value: "D1" },
      { label: "Prompts", value: "Local" },
      { label: "Hero", value: "Sakura" },
    ],
    techStack: [
      "TypeScript",
      "React",
      "Cloudflare D1",
      "Drizzle",
      "Web Crypto",
      "Three.js / R3F",
      "Vitest",
      "Playwright",
    ],
    github: "https://github.com/minaelzek/SeedJournal1.0",
    accent: "#F4A7B9",
    theme: "sakura",
  },
  {
    id: "policy-servicing",
    slug: "policy-servicing-desk",
    name: "Policy Servicing Desk",
    shortName: "Servicing Desk",
    tagline: "Personal ASP.NET practice: REST, SOAP, and SQL Server",
    description:
      "A practice Web API for policy servicing. It stores coverages, status history, premiums, and reversals, and answers a narrow SOAP status read. Seventeen tests run against SQL Server. Personal practice from October 2026, kept local.",
    challenge:
      "A status change, a premium, and a reversal each have to be safe to retry. If the history insert fails, the policy status has to stay where it was. A SOAP caller should receive only the status fields.",
    solution:
      "Writes require a clerk API key. Status and history commit in one transaction. The same idempotency key and body replay the original response. The same key with a different body returns 409. A reversal adds a negative premium row and leaves the original payment in place, once per payment.",
    architecture:
      "ASP.NET Core 8 REST → EF Core → SQL Server tables for policies, coverages, status history, premiums, and idempotency keys. CoreWCF SOAP returns policy number, status, and holder name. A later migration backfills ProductCode to LIFE.",
    decisions: [
      "Replay is checked before the domain rules, so retrying a reversal does not subtract the amount twice",
      "Balance is the sum of premium amounts, so the negative reversal brings it back to zero",
      "The SOAP contract stayed three fields after ProductCode was added",
      "Clerk key and database password stay in local development settings",
    ],
    metrics: [
      { label: "Tests", value: "17" },
      { label: "Tables", value: "5" },
      { label: "APIs", value: "REST + SOAP" },
      { label: "Scope", value: "Practice" },
    ],
    techStack: [
      "C#",
      "ASP.NET Core",
      "EF Core",
      "SQL Server",
      "CoreWCF",
      "xUnit",
      "Docker",
    ],
    accent: "#C084FC",
    theme: "servicing",
    practice: true,
  },
  {
    id: "policy-status",
    slug: "policy-status-api",
    name: "Policy Status API",
    shortName: "Policy Status",
    tagline: "Personal ASP.NET Core practice against SQL Server",
    description:
      "A small Web API that creates a policy and moves it through a fixed status machine. Built to learn ASP.NET Core 8, Entity Framework Core, and SQL Server, with tests against a real database. Personal practice from October 2026, kept local.",
    challenge:
      "Learn the request path, the table, and a failing case that can be reproduced before the code changes. A pending policy must not jump straight to closed.",
    solution:
      "Controllers call a status-rules type and persist through EF Core. Pending can become Active. Active or Suspended can close or move between those two. Closed is terminal. An illegal move returns 409 and leaves the row unchanged.",
    architecture:
      "ASP.NET Core 8 controllers → policy service → EF Core → one SQL Server Policies table. xUnit and WebApplicationFactory run against SQL Server in Docker.",
    decisions: [
      "Status values are names. A numeric label such as \"0\" is rejected",
      "An illegal transition does not change the stored timestamp",
      "Tests use a SQL Server container rather than an in-memory stand-in",
    ],
    metrics: [
      { label: "Tests", value: "11" },
      { label: "Tables", value: "1" },
      { label: "Runtime", value: ".NET 8" },
      { label: "Scope", value: "Practice" },
    ],
    techStack: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "xUnit", "Docker"],
    accent: "#38BDF8",
    theme: "policy",
    practice: true,
  },
];
