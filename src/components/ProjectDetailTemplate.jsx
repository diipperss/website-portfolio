import { Link } from 'react-router-dom';
import { getProjectPath } from '../data/projects';

const ProjectDetailTemplate = ({ project, nextProject }) => {
  return (
    <div className="portfolio-page portfolio-page--detail">
      <section className={`detail-hero theme-${project.accent}`}>
        <div className="detail-hero__copy">
          <p className="eyebrow">
            {project.category} | {project.year}
          </p>
          <h1 className="display-title display-title--detail">{project.title}</h1>
          <p className="lead-copy">{project.summary}</p>
          <div className="chip-row">
            {project.stack.slice(0, 4).map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="detail-hero__metrics">
          {project.metrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-grid detail-grid--feature">
        <article className="panel-card panel-card--video">
          <iframe
            className="video-frame"
            src={project.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={project.title}
          />
        </article>

        <article className="panel-card">
          <p className="card-kicker">Project focus</p>
          <h2 className="section-title section-title--sm">Problem and implementation highlights</h2>
          <p className="body-copy">{project.challenge}</p>
          <ol className="detail-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className="detail-grid detail-grid--two">
        <article className="panel-card">
          <p className="card-kicker">Outcome</p>
          <h2 className="section-title section-title--sm">Result</h2>
          <p className="body-copy">{project.outcome}</p>
        </article>

        <article className="panel-card">
          <p className="card-kicker">Stack</p>
          <h2 className="section-title section-title--sm">Tools used</h2>
          <div className="stack-grid">
            {project.stack.map((item) => (
              <span className="stack-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="next-project-card">
        <div>
          <p className="card-kicker">Next case study</p>
          <h2 className="section-title section-title--sm">{nextProject.title}</h2>
          <p className="body-copy">{nextProject.teaser}</p>
        </div>

        <div className="cta-row">
          <Link className="button-secondary" to="/projects">
            Back to projects
          </Link>
          <Link className="button-primary" to={getProjectPath(nextProject.slug)}>
            Open next project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailTemplate;
