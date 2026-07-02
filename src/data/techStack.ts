export interface TechCategory {
  name: string;
  items: string[];
}

export const techStack: TechCategory[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "Dart", "SQL", "Structured Text", "Bash"],
  },
  {
    name: "AI & ML",
    items: [
      "TensorFlow",
      "Computer Vision",
      "LangChain",
      "RAG",
      "LLMs",
      "RLHF",
      "MLOps",
      "ChromaDB",
    ],
  },
  {
    name: "Full Stack",
    items: ["React", "Next.js", "Django", "Flutter", "REST APIs", "Streamlit"],
  },
  {
    name: "Data",
    items: [
      "PostgreSQL",
      "Redis",
      "ETL",
      "Pandas",
      "Statistical Analysis",
      "Power BI",
    ],
  },
  {
    name: "Industrial",
    items: [
      "PLC Programming",
      "Allen-Bradley",
      "HMI / FactoryTalk",
      "SCADA",
      "CIP Automation",
    ],
  },
  {
    name: "Platform",
    items: ["Docker", "Celery", "Gunicorn", "Nginx", "Git", "DevOps"],
  },
  {
    name: "Practices",
    items: [
      "Clean Architecture",
      "Model Evaluation",
      "Prompt Engineering",
      "System Validation",
      "Stakeholder Collaboration",
    ],
  },
];