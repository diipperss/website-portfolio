import { Link } from 'react-router-dom';
import { featuredExperience } from '../data/profile';
import { getProjectPath } from '../data/projects';
import './styles.css';

const Experience = () => {
  return (
    <div className="retro-page">
      <section className="retro-card retro-card--hero">
        <p className="retro-label">Work experience</p>
        <h1 className="retro-page__title">Internship Experiences</h1>
      </section>

      <section className="retro-columns retro-columns--single">
        <div className="retro-stack">
          {featuredExperience.map((item) => (
            <article className="retro-card" key={`${item.company}-${item.period}`}>
              <div className="retro-line-item__top">
                <strong>
                  {item.company} | {item.role}
                </strong>
                <span>{item.period}</span>
              </div>
              <ul className="retro-bullet-list">
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="retro-chip-grid">
                {item.tools.map((tool) => (
                  <span className="retro-chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
              {item.projectSlug ? (
                <div className="retro-actions">
                  <Link className="retro-button retro-button--compact" to={getProjectPath(item.projectSlug)}>
                    Open project
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
