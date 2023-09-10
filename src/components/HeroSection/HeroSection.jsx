import * as constants from "../../constants";
import profileImageDesktop from "../../assets/images/image-profile-desktop.webp";
import profileImageTablet from "../../assets/images/image-profile-tablet.webp";
import profileImageMobile from "../../assets/images/image-profile-mobile.webp";
import Rings from "../../assets/images/pattern-rings.svg";
import Circle from "../../assets/images/pattern-circle.svg";
import "./HeroSection.scss";

const HeroSection = () => {
  //TODO refactoring imgsrc as constants
  return (
    <section className="hero">
      <div className="hero__content-wrapper container">
        <img className="hero__rings" src={Rings} alt="rings" />
        <div className="hero__content-info">
          <h1>
            Nice to
            <br /> meet you! I&apos;m <strong>Adam Keyes</strong>.
          </h1>
          <h2>{constants.HERO_DESCRIPTION}</h2>
          <a href="#contact-form" className="hero__contact-button main-button">
            {constants.HERO_BUTTON}
          </a>
        </div>

        <picture>
          <source media="(min-width: 63.5em)" srcSet={profileImageDesktop} />
          <source media="(min-width: 37.5em)" srcSet={profileImageTablet} />
          <img
            className="hero__profile-image"
            src={profileImageMobile}
            alt="profile image"
          />
        </picture>
        <img className="hero__circle" src={Circle} alt="circle" />
      </div>
    </section>
  );
};

export default HeroSection;
