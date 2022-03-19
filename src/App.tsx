import "./index.css";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import { SkillsLayout } from "./Components/Skills";
import { AboutLayout } from "./Components/About";
import { ProjectsLayout } from "./Components/Projects";
import { ContactLayout } from "./Components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="invisible md:visible">
        <SideBar />
      </section>

      <Dashboard />
      <SkillsLayout id="skills" />
      <AboutLayout id="about" />
      <ProjectsLayout id="projects" />
      <ContactLayout id="contact" />
      <section className="md:hidden">
        <SideBar />
      </section>
    </div>
  );
}

export default App;
