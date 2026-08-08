import { useEffect, useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const y = window.scrollY + 96
      let current = 'home'
      for (const { id } of links) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => (e) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav ${scrolled || open ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#home" className="nav-logo" onClick={go('home')}>
          <span className="nav-logo-mark">Z</span>
          <span className="nav-logo-text">
            Zerov<span className="nav-logo-accent"> Portfolio</span>
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={go(id)}
              className={`nav-link ${active === id ? 'active' : ''}`}
            >
              {label}
            </a>
          ))}
          <a className="nav-resume" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </nav>

        <button
          type="button"
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
