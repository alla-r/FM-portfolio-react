import HeaderFooter from "./components/HeaderFooter";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactForm from "./components/ContactForm";
import "./App.scss";

function App() {
  return (
    <>
      <HeaderFooter isHeader={true} />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactForm />
      </main>
      <HeaderFooter isHeader={false} />
    </>
  );
}

export default App;
