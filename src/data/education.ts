export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  highlights?: string[];
}

export interface CertificationGroup {
  issuer: string;
  items: string[];
}

export const education: EducationItem[] = [
  {
    school: "University of Wollongong",
    degree: "Bachelor of Computer Engineering",
    field: "Computer Engineering",
    highlights: ["Software engineering fundamentals", "Statistical data analysis"],
  },
];

export const licenses: { name: string; issuer: string; year: string }[] = [
  {
    name: "PLC Technician II",
    issuer: "George Brown Polytechnic",
    year: "Oct 2025",
  },
];

export const certificationHighlights: CertificationGroup[] = [
  {
    issuer: "Google",
    items: ["Google Data Analytics Specialization (2026)"],
  },
  {
    issuer: "LinkedIn Learning",
    items: [
      "Full-Stack Deep Learning with Python",
      "PostgreSQL: Advanced Queries",
      "MLOps Tools: MLflow and Hugging Face",
      "Building Full-Stack Apps with React and Spring",
      "Applied Machine Learning: Supervised Learning",
      "End-to-End SQL Database Design and Optimization",
      "Microsoft Copilot: The Art of Prompt Writing",
      "Applied AI: Building Claude Code Skills",
      "30+ additional courses in SQL, Python, statistics, and data engineering",
    ],
  },
];