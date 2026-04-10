import { Link } from 'react-router-dom';
import { getProjectsByGroup, projectGroups } from '../data/projects';
import './styles.css';

const Projects = ({ group = 'swe' }) => {
  const groupConfig = projectGroups[group] ?? projectGroups.swe;
  const filteredProjects = getProjectsByGroup(group);

  return (
    <div className="retro-page">
      <section className="retro-card retro-card--hero">
        <p className="retro-label">{groupConfig.title}</p>
        <h1 className="retro-page__title">{groupConfig.title}</h1>
        <p className="retro-copy">{groupConfig.description}</p>
      </section>

      <section className="retro-stack">
        {filteredProjects.map((project) => (
          <article className="retro-card retro-project-panel" key={project.slug}>
            <div className="retro-line-item__top">
              <strong>{project.title}</strong>
              <span>
                {project.category} | {project.year}
              </span>
            </div>

            <p className="retro-copy">{project.summary}</p>

            <div className="retro-chip-grid">
              {project.stack.map((item) => (
                <span className="retro-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="retro-actions">
              <Link className="retro-button retro-button--compact" to={project.path}>
                Open project
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Projects;
