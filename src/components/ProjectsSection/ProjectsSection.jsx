import { PROJECTS_DATA, PROJECTS_BUTTONS_TEXT } from "../../constants";
import "./ProjectsSection.scss";

const ProjectsSection = () => {
  // TODO: DESKTOP version
  const projects = PROJECTS_DATA.data.map(
    ({ id, title, imgSrcSmall, imgSrcLarge, technologies }) => {
      return (
        <div key={id} className="projects__item">
          <img
            className="projects__thumbnail"
            src={imgSrcSmall}
            alt="thumbnail 1"
          />
          <div className="projects__title">{title}</div>
          <div className="projects__technologies">
            {technologies.map((el, i) => (
              <p key={i} className="projects__tech-item">
                {el}
              </p>
            ))}
          </div>
          <div className="projects__buttons">
            <button className="main-button">
              {PROJECTS_BUTTONS_TEXT.VIEW_PROJECT}
            </button>
            <button className="main-button">
              {PROJECTS_BUTTONS_TEXT.VIEW_CODE}
            </button>
          </div>
        </div>
      );
    }
  );

  return (
    <section className="projects container">
      <div className="projects__header">
        <h2 className="main-title">{PROJECTS_DATA.title}</h2>
        <a href="#contact-form" className="main-button">
          {PROJECTS_BUTTONS_TEXT.CONTACT_ME}
        </a>
      </div>
      <div className="projects__wrapper">{projects}</div>
    </section>
  );
};

export default ProjectsSection;
