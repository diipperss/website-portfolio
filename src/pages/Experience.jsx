import { achievements, featuredExperience } from '../data/profile';
import './styles.css';

const Experience = () => {
  return (
    <div className="retro-page">
      <section className="retro-card retro-card--hero">
        <p className="retro-label">Work experience</p>
        <h1 className="retro-page__title">Recent roles and longer-running builds.</h1>
        <p className="retro-copy">
          These are the projects and roles that best show how I work across product framing, implementation detail, and shipping AI-assisted features.
        </p>
      </section>

      <section className="retro-columns">
        <div className="retro-stack">
          {featuredExperience.map((item) => (
            <article className="retro-card" key={`${item.company}-${item.period}`}>
              <div className="retro-line-item__top">
                <strong>
                  {item.company} | {item.role}
                </strong>
                <span>{item.period}</span>
              </div>
              <p className="retro-copy">{item.description}</p>
              <div className="retro-chip-grid">
                {item.tools.map((tool) => (
                  <span className="retro-chip" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="retro-card">
          <p className="retro-label">Highlights</p>
          <div className="retro-list">
            {achievements.map((item) => (
              <div className="retro-copy-block" key={item}>
                <strong>{item}</strong>
                <p>Recognition and programs that shaped how I approach team-based product delivery.</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Experience;
