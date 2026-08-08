import Reveal from './Reveal'
import { socials } from '../data/portfolio'

const channels = [
  {
    name: 'Telegram',
    handle: '@heyz3ra',
    href: socials.telegram,
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21.94 3.62c.26-.99-.66-1.83-1.61-1.44L2.77 9.04c-1.16.47-1.08 2.15.11 2.52l4.44 1.37 1.65 5.27c.36 1.14 1.81 1.44 2.59.55l2.27-2.58 4.41 3.27c1 .74 2.45.19 2.7-1.03l3.02-14.79ZM7.43 12.04l10.25-6.3c.36-.22.73.26.44.56l-8.03 8.18c-.31.32-.5.74-.53 1.18l-.3 3.01c-.03.33-.5.36-.57.04l-.94-3.9a1.25 1.25 0 0 1 .68-1.77Z"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: 'z3rovik',
    href: socials.github,
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 2.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">
            Let's build something <span className="grad-text">together</span>
          </h2>
          <p className="section-sub">
            Have a project in mind or just want to say hi? Reach out — I usually reply
            within a day.
          </p>
        </Reveal>

        <div className="contact-cards">
          {channels.map(({ name, handle, href, icon }, index) => (
            <Reveal key={name} delay={index * 120} className="contact-card-wrap">
              <a href={href} target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-icon">{icon}</span>
                <span className="contact-name">{name}</span>
                <span className="contact-handle">{handle}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
