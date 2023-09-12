import { HERO_DESCRIPTION, HERO_BUTTON, HERO_IMAGES } from "../../constants";
import Rings from "../../assets/images/pattern-rings.svg";
import Circle from "../../assets/images/pattern-circle.svg";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__content-wrapper container">
        <img className="hero__rings" src={Rings} alt="rings" />
        <div className="hero__content-info">
          <h1>
            Nice to
            <br /> meet you! I&apos;m <strong>Adam Keyes</strong>.
          </h1>
          <h2>{HERO_DESCRIPTION}</h2>
          <a href="#contact-form" className="hero__contact-button main-button">
            {HERO_BUTTON}
          </a>
        </div>

        <picture>
          <source media="(min-width: 63.5em)" srcSet={HERO_IMAGES.desktop} />
          <source media="(min-width: 37.5em)" srcSet={HERO_IMAGES.tablet} />
          <img
            className="hero__profile-image"
            src={HERO_IMAGES.mobile}
            alt="profile image"
          />
        </picture>
        <img className="hero__circle" src={Circle} alt="circle" />
      </div>
    </section>
  );
};

export default HeroSection;
