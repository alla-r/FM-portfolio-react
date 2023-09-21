import { SKILLS_DATA } from '../../constants';
import Rings from '../../assets/images/pattern-rings.svg';
import './SkillsSection.scss';

const SkillsSection = () => {
  const skills = SKILLS_DATA.map(({ id, title, experience }) => {
    return (
      <div key={id} className="skills__item">
        <h3 className="skills__title">{title}</h3>
        <p className="skills--experience">{experience}</p>
      </div>
    );
  });

  return (
    <section className="skills container">
      <h2 className="visually-hidden">Skills & Experience</h2>
      <div className="skills__wrapper">{skills}</div>
      <img className="skills__rings" src={Rings} alt="rings" />
    </section>
  );
};

export default SkillsSection;
