import HeaderFooter from "./components/HeaderFooter";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import "./App.scss";

function App() {
  return (
    <>
      <HeaderFooter isHeader={true} />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <HeaderFooter isHeader={false} />
    </>
  );
}

export default App;
