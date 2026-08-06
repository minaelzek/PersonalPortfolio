export const siteConfig = {
  name: "Mina",
  fullName: "Mina A.",
  title: "Forward Deployed Engineer",
  tagline: "From prototype to production—with the people who use it.",
  description:
    "Forward Deployed Engineer building production-grade AI, full-stack, and industrial automation systems. ProcessMind multi-agent maintenance, clinical computer vision (50%→94%), PLC/HMI deployments, and live products like Undercut—Greater Toronto Area.",
  url: "https://minaelzek.vercel.app",
  email: "minaaelzik@gmail.com",
  github: "https://github.com/minaelzek",
  linkedin: "https://www.linkedin.com/in/minaelzek",
  resume: "/resume.pdf",
  ogImage: "/og-image.png",
  location: "Greater Toronto Area",
  openTo:
    "Open to Forward Deployed Engineer, Solutions Engineer, and Technical Consultant roles · Hybrid / on-site · GTA",
};

/** Primary nav — short list for fast scanning (recruiter + casual viewer) */
export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/** Hero proof strip — what a recruiter should see in 5 seconds */
export const heroProof = [
  {
    value: "Live",
    label: "Undercut in production",
    detail: "playundercut.com",
    href: "https://playundercut.com",
  },
  { value: "94%", label: "Clinical CV accuracy", detail: "from 50% baseline" },
  { value: "FDE", label: "Plant + clinic + software", detail: "stakeholder-facing" },
  { value: "GTA", label: "Based in Canada", detail: "hybrid / on-site" },
];
