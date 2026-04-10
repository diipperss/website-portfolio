import { education, heroSignals, introSections, personalInfo } from '../data/profile';
import './styles.css';

const Intro = () => {
  return (
    <div className="retro-page">
      <section className="retro-card retro-card--hero">
        <div className="retro-page__header">
          <div>
            <p className="retro-label">About Me</p>
            <h1 className="retro-page__title">Divya Gupta</h1>
          </div>
          <div className="retro-meta-list">
            <span>Learning how to code</span>
          </div>
        </div>

        <p className="retro-copy">
I build mobile apps, full-stack systems, and applied AI products with a focus on clarity, reliability, and real user impact.
My goal is simple: take complex ideas and turn them into intuitive, production-ready experiences.
        </p>
        <p className="retro-copy">
While I am not debugging something that worked perfectly 5 minutes ago, I am usually brainstorming and building
systems that are meant to work the first time.
        </p>

        <div className="retro-chip-grid">
          {heroSignals.map((item) => (
            <span className="retro-chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="retro-columns">
        <article className="retro-card">
          <p className="retro-label">Profile notes</p>
          <div className="retro-list">
            {introSections.map((section) => (
              <div className="retro-copy-block" key={section.title}>
                <strong>{section.title}</strong>
                <p>{section.body}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="retro-card">
          <p className="retro-label">Quick facts</p>
          <div className="retro-list">
            <div className="retro-copy-block">
              <strong>Location</strong>
              <p>{personalInfo.location}</p>
            </div>
            <div className="retro-copy-block">
              <strong>Nationality</strong>
              <p>{personalInfo.nationality}</p>
            </div>
            <div className="retro-copy-block">
              <strong>Email</strong>
              <p>{personalInfo.email}</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="retro-card">
        <p className="retro-label">Education</p>
        <div className="retro-stack">
          {education.map((item) => (
            <article className="retro-line-item" key={`${item.school}-${item.period}`}>
              <div className="retro-line-item__top">
                <strong>{item.school}</strong>
                <span>{item.period}</span>
              </div>
              <p>{item.degree}</p>
              <small>{item.location}</small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Intro;
