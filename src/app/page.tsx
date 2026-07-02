import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { MouseGlow } from "@/components/layout/MouseGlow";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { TechStack } from "@/components/sections/TechStack";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <MouseGlow />
      <div className="noise-overlay" aria-hidden="true" />

      <Navigation />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <ProjectShowcase />
        <TechStack />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}