import { SKILLS_DATA } from "../../constants";
import "./SkillsSection.scss";

const SkillsSection = () => {
  const skills = SKILLS_DATA.map(({ id, title, experience }) => {
    return (
      <div key={id} className="skills--item">
        <h4 className="skills--title">{title}</h4>
        <p className="skills--experience">{experience}</p>
      </div>
    );
  });

  return (
    <>
      <section className="skills container">
        <h2 className="visually-hidden">Skills & Experience</h2>
        <div className="skills-wrapper">{skills}</div>
      </section>
    </>
  );
};

export default SkillsSection;
