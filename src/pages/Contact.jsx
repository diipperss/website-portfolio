import { contactChannels, personalInfo, skillGroups } from '../data/profile';
import './styles.css';

const Contact = () => {
  return (
    <div className="retro-page">
      <section className="retro-card retro-card--hero">
        <p className="retro-label">Contact</p>
        <h1 className="retro-page__title">Let&apos;s build something useful.</h1>
        <p className="retro-copy">
          I enjoy working on product-focused software, applied AI features, and systems that need both technical depth and a clean user experience.
        </p>
      </section>

      <section className="retro-columns">
        <article className="retro-card">
          <p className="retro-label">Links</p>
          <div className="retro-stack">
            {contactChannels.map((item) => (
              <a
                className="retro-contact-card"
                href={item.href}
                key={item.label}
                rel={item.external ? 'noreferrer' : undefined}
                target={item.external ? '_blank' : undefined}
              >
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </article>

        <aside className="retro-card">
          <p className="retro-label">Profile</p>
          <div className="retro-list">
            <div className="retro-copy-block">
              <strong>Name</strong>
              <p>{personalInfo.name}</p>
            </div>
            <div className="retro-copy-block">
              <strong>Location</strong>
              <p>{personalInfo.location}</p>
            </div>
            <div className="retro-copy-block">
              <strong>Portfolio</strong>
              <p>{personalInfo.portfolio}</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="retro-card">
        <p className="retro-label">Toolbox</p>
        <div className="retro-stack">
          {skillGroups.map((group) => (
            <div className="retro-copy-block" key={group.label}>
              <strong>{group.label}</strong>
              <div className="retro-chip-grid">
                {group.items.map((item) => (
                  <span className="retro-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
