import { communityActivities, hobbies } from '../data/profile';
import './styles.css';

const BeyondCode = () => {
  return (
    <div className="retro-page">
      <section className="retro-card retro-card--hero">
        <p className="retro-label">Beyond Code</p>
        <h1 className="retro-page__title">Life outside the build.</h1>
        <p className="retro-copy">
Yes, I try to touch grass.        </p>
      </section>

      <section className="retro-stack">
        <article className="retro-card">
          <p className="retro-label">Leadership & Community</p>
          <div className="retro-stack">
            {communityActivities.map((item) => (
              <article className="retro-line-item" key={`${item.organization}-${item.period}`}>
                <div className="retro-line-item__top">
                  <strong>{item.role}</strong>
                  <span>{item.period}</span>
                </div>
                <p>{item.organization}</p>
                <ul className="retro-bullet-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>

        <section className="retro-card">
          <p className="retro-label">Hobbies</p>
          <div className="retro-chip-grid">
            {hobbies.map((item) => (
              <span className="retro-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default BeyondCode;
