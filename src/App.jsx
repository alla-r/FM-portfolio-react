import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
      </main>
    </>
  );
}

export default App;
