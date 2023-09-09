import * as constants from "../../constants";
import profileImageDesktop from "../../assets/images/image-profile-desktop.webp";
import profileImageTablet from "../../assets/images/image-profile-tablet.webp";
import profileImageMobile from "../../assets/images/image-profile-mobile.webp";
import "./HeroSection.scss";

const HeroSection = () => {
  //TODO add circles
  return (
    <section className="hero">
      <div className="hero__content-wrapper container">
        <div className="hero__content-info">
          <h1>
            Nice to
            <br /> meet you! I&apos;m <strong>Adam Keyes</strong>.
          </h1>
          <h2>{constants.HERO_DESCRIPTION}</h2>
          <button className="hero__contact-button">
            {constants.HERO_BUTTON}
          </button>
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
      </div>
    </section>
  );
};

export default HeroSection;