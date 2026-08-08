import Reveal from './Reveal'
import { projects } from '../data/portfolio'

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 120} className="project-card-wrap">
      <article className="project-card">
        <a href={project.demo} target="_blank" rel="noreferrer" className="project-thumb">
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
          <span className="project-thumb-overlay">
            <span className="project-thumb-action">View Live</span>
          </span>
        </a>

        <div className="project-body">
          <div className="project-head">
            <div>
              <h3 className="project-title">{project.title}</h3>
              <span className="project-tagline">{project.tagline}</span>
            </div>
            <a
              className="project-gh"
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
                />
              </svg>
            </a>
          </div>

          <p className="project-desc">{project.description}</p>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="project-actions">
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              View Live
            </a>
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
              GitHub
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="grad-text">Projects</span>
          </h2>
          <p className="section-sub">
            A selection of crypto applications I've designed and built with React.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
