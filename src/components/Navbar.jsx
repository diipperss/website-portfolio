import { NavLink } from 'react-router-dom';
import { personalInfo } from '../data/profile';

const Navbar = () => {
  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <NavLink className="site-nav__brand" to="/">
          <span className="site-nav__brand-mark" />
          <div>
            <span className="site-nav__eyebrow">Portfolio</span>
            <strong>Divya Gupta</strong>
          </div>
        </NavLink>

        <nav className="site-nav__links" aria-label="Primary">
          <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} end to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to="/projects">
            Projects
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to="/contact">
            About
          </NavLink>
        </nav>

        <a className="site-nav__cta" href={`mailto:${personalInfo.email}`}>
          Say hello
        </a>
      </div>
    </header>
  );
};

export default Navbar;
