import { Link, NavLink } from 'react-router-dom';
import { personalInfo } from '../data/profile';
import { getProjectPath } from '../data/projects';

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__label">{personalInfo.name}</p>
          <p className="site-footer__copy">Computer Science undergraduate specialising in Artificial Intelligence at NTU.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <NavLink end to="/">
            Home
          </NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">About</NavLink>
          <Link to={getProjectPath('equify')}>Featured project</Link>
        </nav>

        <a className="site-footer__email" href={`mailto:${personalInfo.email}`}>
          {personalInfo.email}
        </a>
      </div>
    </footer>
  );
};

export default SiteFooter;
