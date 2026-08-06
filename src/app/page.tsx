import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MouseGlow } from "@/components/layout/MouseGlow";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { TechStack } from "@/components/sections/TechStack";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

/**
 * Recruiter scan path:
 * Hero (who + proof) → Work (evidence) → Experience → About/Stack/Creds → Contact
 * Viewer path is the same but with deeper case studies under Work.
 */
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <MouseGlow />
      <div className="noise-overlay" aria-hidden="true" />

      <Navigation />

      <main id="main-content" className="pt-14 md:pt-16">
        <Hero />
        <ProjectShowcase />
        <Experience />
        <About />
        <TechStack />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
