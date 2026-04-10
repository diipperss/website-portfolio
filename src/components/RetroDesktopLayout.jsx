import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { desktopNavigation, personalInfo } from '../data/profile';
import { projects } from '../data/projects';

const getActiveSection = (pathname) => {
  if (pathname.startsWith('/experience')) {
    return 'experience';
  }

  if (pathname.startsWith('/projects/swe')) {
    return 'swe';
  }

  if (pathname.startsWith('/projects/ai')) {
    return 'ai';
  }

  if (pathname.startsWith('/projects/')) {
    const activeProject = projects.find((project) => project.path === pathname);
    return activeProject?.group ?? '';
  }

  if (pathname.startsWith('/contact')) {
    return 'contact';
  }

  return 'intro';
};

const RetroDesktopLayout = () => {
  const location = useLocation();
  const activeSection = getActiveSection(location.pathname);

  return (
    <div className="retro-home retro-home--desktop">
      <div className="retro-window retro-window--desktop">
        <header className="retro-window__top">
          <div className="retro-window__title">Divya Portfolio OS</div>
          <div className="retro-window__buttons" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </header>

        <div className="retro-window__desktop">
          <aside className="retro-sidebar">
            <div className="retro-sidebar__section">
              <p className="retro-label">System user</p>
              <strong>{personalInfo.name}</strong>
              <span>{personalInfo.location}</span>
            </div>

            <nav className="retro-sidebar__nav" aria-label="Desktop sections">
              {desktopNavigation.map((item) => (
                <NavLink
                  key={item.id}
                  className={`retro-sidebar__link ${activeSection === item.id ? 'is-active' : ''}`}
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="retro-sidebar__section">
              <p className="retro-label">Shortcut</p>
              <NavLink className="retro-button retro-button--compact" to="/">
                Back to setup
              </NavLink>
            </div>
          </aside>

          <section className="retro-window__content retro-window__content--desktop">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
};

export default RetroDesktopLayout;
