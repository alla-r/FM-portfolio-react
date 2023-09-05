import { HEADER_LOGO_TEXT, HEADER_NAV_LINK_CONFIG } from "../../constants";
import "./Header.scss";

const Header = () => {
  const links = HEADER_NAV_LINK_CONFIG.map(
    ({ id, url, title, width, height, fillRule, d }) => {
      return (
        <a
          key={id}
          href={url}
          target="_blank"
          className="header__social-link"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            role="img"
            aria-labelledby={id}
          >
            <title id={id}>{title}</title>
            <path
              fill="#FFF"
              fillRule={fillRule}
              d={d}
            />
          </svg>
        </a>
      );
    }
  );

  return (
    <>
      <header>
        <div className="container">
          <nav className="header__nav">
            <a href="#" className="header__logo">
              {HEADER_LOGO_TEXT}
              <span className="visually-hidden">(to home page)</span>
            </a>
            {links}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
