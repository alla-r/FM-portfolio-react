import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
    </>
  );
}

export default App;
