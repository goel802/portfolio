import { useState, useCallback, useEffect } from "react";

import "./styles/index.css";

import { ThreeBackground } from "./components/layout/ThreeBackgorund.jsx";
import { Nav }             from "./components/layout/Nav.jsx";
import { Footer }          from "./components/layout/Footer.jsx";
import { Divider }         from "./components/ui/index.jsx";
import {
  Hero, About, Skills, Services,
  Achievements, Experience, Projects,
  Education, FunFacts, Contact,
} from "./components/sections/index.jsx";

export default function App() {
  const [dark, setDark] = useState(false);
  const toggleTheme = useCallback(() => setDark((d) => !d), []);

  // Flip data-theme on <html> — CSS custom properties switch automatically
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <ThreeBackground dark={dark} />
      <Nav dark={dark} onToggle={toggleTheme} />

      <main className="page-content">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Services />
        <Divider />
        <Achievements />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Education />
        <Divider />
        <FunFacts />
        <Divider />
        <Contact />
        <Footer />
      </main>
    </>
  );
}