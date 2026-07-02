import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12" role="contentinfo">
      <div className="container-width flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-sm font-semibold">
            {siteConfig.fullName}
            <span className="text-accent">.</span>
          </span>
          <p className="text-sm text-muted">
            Built with intention. Designed for clarity.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {year} {siteConfig.fullName}
        </p>
      </div>
    </footer>
  );
}