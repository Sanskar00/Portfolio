import "./index.css";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import { SkillsLayout } from "./Components/Skills";
import { AboutLayout } from "./Components/About";
import { ProjectsLayout } from "./Components/Projects";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <SideBar />
      <Dashboard />
      <SkillsLayout />
      <AboutLayout />
      <ProjectsLayout />
    </div>
  );
}

export default App;
