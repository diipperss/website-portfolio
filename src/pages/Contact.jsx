import { contactChannels, skillGroups } from '../data/profile';
import './styles.css';

const Contact = () => {
  return (
    <div className="retro-page">
      <section className="retro-card retro-card--hero">
        <p className="retro-label">Contact</p>
        <h1 className="retro-page__title">Let&apos;s build together.</h1>
        <p className="retro-copy">
          Reach out if you&apos;d like to chat, collaborate, or build something meaningful together :)
        </p>
      </section>

      <section className="retro-columns retro-columns--single">
        <article className="retro-card">
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
      </section>

    </div>
  );
};

export default Contact;
