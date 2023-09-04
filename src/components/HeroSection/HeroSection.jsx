import * as constants from "../../constants";
import profileImageDesktop from "../../assets/images/image-profile-desktop.webp";
import profileImageTablet from "../../assets/images/image-profile-tablet.webp";
import profileImageMobile from "../../assets/images/image-profile-mobile.webp";
import "./HeroSection.scss";

const HeroSection = () => {
  console.log(constants);
  return (
    <>
      <div className="hero__content-wrapper container">
        <div className="hero__content">
          <h1>
            Nice to meet you! I&apos;m <span>Adam Keyes</span>.
          </h1>
          <h2>{constants.HERO_DESCRIPTION}</h2>
          <button className="hero__contact-button">
            {constants.HERO_BUTTON}
          </button>
        </div>

        <picture>
          <source media="(min-width: 62.5em)" srcSet={profileImageDesktop} />
          <source media="(min-width: 37.5em)" srcSet={profileImageTablet} />
          <img
            className="hero__profile-image"
            src={profileImageMobile}
            alt="profile image"
          />
        </picture>
      </div>
    </>
  );
};

export default HeroSection;
