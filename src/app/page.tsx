import Hero from "@/components/Hero";
import Overview from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import SectionStripe from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />

      <SectionStripe label="Overview" />
      <Overview />

      <SectionStripe label="Projects" />
      <Projects />

      <SectionStripe label="Experience" />
      <Experience />

      <SectionStripe label="Education" />
      <Education />

      <SectionStripe label="Tech Stack" />
      <Skills />

      <SectionStripe label="Certifications" />
      <Certifications />

      <SectionStripe label="Contact" />
      <Contact />
    </>
  );
}
