import { Link, Navigate, useParams } from 'react-router-dom';
import { getNextProject, getProjectBySlug } from '../data/projects';
import './styles.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug ?? '');

  if (!project) {
    return <Navigate replace to="/projects/swe" />;
  }

  const nextProject = getNextProject(project.slug);

  return (
    <div className="retro-page">
      <section className="retro-card retro-card--hero">
        <p className="retro-label">
          {project.groupTitle} | {project.year}
        </p>
        <h1 className="retro-page__title">{project.title}</h1>
        <p className="retro-copy">{project.summary}</p>
        <div className="retro-chip-grid">
          {project.metrics.map((metric) => (
            <span className="retro-chip" key={`${metric.label}-${metric.value}`}>
              {metric.label}: {metric.value}
            </span>
          ))}
        </div>
      </section>

      <section className="retro-columns">
        <article className="retro-card">
          <p className="retro-label">Project notes</p>
          <div className="retro-list">
            <div className="retro-copy-block">
              <strong>Challenge</strong>
              <p>{project.challenge}</p>
            </div>
            <div className="retro-copy-block">
              <strong>Outcome</strong>
              <p>{project.outcome}</p>
            </div>
          </div>
        </article>

        <aside className="retro-card">
          <p className="retro-label">Stack</p>
          <div className="retro-chip-grid">
            {project.stack.map((item) => (
              <span className="retro-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className="retro-card">
        <p className="retro-label">Highlights</p>
        <div className="retro-stack">
          {project.highlights.map((highlight) => (
            <div className="retro-copy-block" key={highlight}>
              <p>{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {project.video ? (
        <section className="retro-card">
          <p className="retro-label">Demo</p>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="retro-video"
            src={project.video}
            title={`${project.title} demo`}
          />
        </section>
      ) : null}

      <section className="retro-card retro-card--footer">
        <div className="retro-copy-block">
          <strong>Next project</strong>
          <p>{nextProject.title}</p>
        </div>
        <div className="retro-actions">
          <Link className="retro-button retro-button--compact" to={project.group === 'ai' ? '/projects/ai' : '/projects/swe'}>
            Back to list
          </Link>
          <Link className="retro-button retro-button--compact" to={nextProject.path}>
            Open next
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
