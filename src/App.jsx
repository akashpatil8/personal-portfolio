import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import "./app.scss";

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}
