import Reveal from './Reveal'

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-content">
        <Reveal className="hero-badge-wrap">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            Available for work
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="hero-title">
            Hi, I'm <span className="grad-text">Zerov</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="hero-subtitle">
            I build crypto applications using <span className="accent">AI</span> and{' '}
            <span className="accent">React</span>
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="hero-desc">
            Frontend developer crafting clean, fast and on-chain-ready interfaces for
            the decentralized web.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">3+</span>
              <span className="hero-stat-label">Projects shipped</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">5+</span>
              <span className="hero-stat-label">Technologies</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">100%</span>
              <span className="hero-stat-label">Passion</span>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#projects"
        className="hero-scroll"
        aria-label="Scroll to projects"
        onClick={scrollToProjects}
      >
        <span className="hero-scroll-mouse">
          <span className="hero-scroll-wheel" />
        </span>
      </a>
    </section>
  )
}
