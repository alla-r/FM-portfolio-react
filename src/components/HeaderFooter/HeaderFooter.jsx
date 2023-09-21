import PropTypes from 'prop-types';
import { HEADER_LOGO_TEXT, HEADER_NAV_LINK_CONFIG } from '../../constants';
import './HeaderFooter.scss';

const HeaderFooter = ({ isHeader = true }) => {
  const links = HEADER_NAV_LINK_CONFIG.map(({ id, url, title, width, height, fillRule, d }) => {
    return (
      <a key={`key-${id}`} href={url} target="_blank" className="header__social-link" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          role="img"
          aria-labelledby={id}
        >
          <title id={id}>{title}</title>
          <path fill="#FFF" fillRule={fillRule} d={d} />
        </svg>
      </a>
    );
  });

  const content = (
    <div className="container">
      <nav aria-label={isHeader ? "Header" : "Footer"} className="header__nav">
        <a href="#" className="header__logo">
          {HEADER_LOGO_TEXT}
          <span className="visually-hidden">(to home page)</span>
        </a>
        {links}
      </nav>
    </div>
  );

  return (
    <>{isHeader ? <header>{content}</header> : <footer className="footer">{content}</footer>}</>
  );
};

HeaderFooter.propTypes = {
  isHeader: PropTypes.bool,
};

export default HeaderFooter;
