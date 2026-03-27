import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="bento-container" id="top">
      {/* ROW 1: Hero Profile */}
      <div className="bento-row">
        <div className="bento-cell" id="hero">
          <Hero />
        </div>
      </div>

      {/* ROW 2: About / Experience abstract */}
      <div className="bento-row">
        <div className="bento-cell" id="about">
          <About />
        </div>
      </div>

      {/* ROW 3: Projects */}
      <div className="bento-row">
        <div className="bento-cell" id="projects" style={{ padding: 0 }}>
          <Projects />
        </div>
      </div>

      {/* ROW 4: Skills Matrix */}
      <div className="bento-row">
        <div className="bento-cell" id="skills" style={{ padding: 0 }}>
          <Skills />
        </div>
      </div>
    </div>
  );
}
