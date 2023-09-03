import * as constants from '../../constants';
import profileImage from '../../assets/images/image-profile-desktop.webp';
import './HeroSection.scss';

const HeroSection = () => {

  console.log(constants);
  return (
    <div className="hero__content-wrapper">
      <div className="hero__content">
        <h1>{constants.HERO_TITLE}</h1>
        <h2>{constants.HERO_DESCRIPTION}</h2>
        <button className="hero__contact-button">{constants.HERO_BUTTON}</button>
      </div>

      <img
        className="hero__profile-image"
        //TODO change image depends on the device
        src={profileImage}
        alt="profile-image"
      />
    </div>
  );
};

export default HeroSection;
