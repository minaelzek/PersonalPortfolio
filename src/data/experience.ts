export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-outlier",
    role: "AI Prompt Engineer",
    company: "Outlier AI · Contract",
    period: "Aug 2020 — Present",
    description:
      "Evaluate and improve large language model performance across reasoning, code generation, and creative tasks using Reinforcement Learning from Human Feedback (RLHF).",
    highlights: [
      "Contributed to prompt engineering and model behavior optimization initiatives",
      "Performed model evaluation, output validation, and constraint adherence optimization",
      "Applied analytical reasoning and statistical analysis to improve LLM quality at scale",
    ],
    technologies: [
      "RLHF",
      "Prompt Engineering",
      "LLMs",
      "Python",
      "SQL",
      "Git",
      "Model Evaluation",
    ],
  },
  {
    id: "exp-fde",
    role: "Forward Deployed Engineer",
    company: "Independent · Production Engagements",
    period: "2020 — Present",
    description:
      "Take technical solutions from prototype to scalable production while working directly with domain experts and stakeholders across clinical, industrial, and consumer domains.",
    highlights: [
      "Productionized a computer vision platform improving polyp detection from 50% to 94% in clinical environments",
      "Designed and deployed PLC/HMI automation for high-volume food & beverage operations",
      "Shipped full-stack and AI-powered applications end-to-end—from architecture through deployment",
    ],
    technologies: [
      "TensorFlow",
      "Flutter",
      "PostgreSQL",
      "Docker",
      "LangChain",
      "PLC / HMI",
      "Full-Stack Development",
    ],
  },
];