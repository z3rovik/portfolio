import Reveal from './Reveal'
import { skills } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal className="about-text">
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title">
            Turning ideas into <span className="grad-text">products</span>
          </h2>
          <p>
            I'm Zerov, a frontend developer who loves building web applications with
            React and modern JavaScript. My focus is on crafting interfaces that feel
            fast, clean and intuitive — whether it's a dashboard, a trading tool or a
            landing page.
          </p>
          <p>
            I specialize in building web apps with React and AI models like Claude and
            DeepSeek, using them to accelerate design and development without
            sacrificing quality.
          </p>
          <p>
            With a strong background in crypto, I enjoy bringing on-chain data to life
            in the browser — charts, portfolios, trackers and everything in between.
          </p>

          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
            Download Resume
          </a>
        </Reveal>

        <Reveal delay={150} className="about-skills">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                <span className="skill-dot" />
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
