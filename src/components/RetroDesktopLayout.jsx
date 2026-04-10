import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { desktopNavigation } from '../data/profile';
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

  if (pathname.startsWith('/beyond-code')) {
    return 'beyond-code';
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
          <NavLink aria-label="Back to setup" className="retro-window__close" to="/">
            X
          </NavLink>
        </header>

        <div className="retro-window__desktop">
          <aside className="retro-sidebar">
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
