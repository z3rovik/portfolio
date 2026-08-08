export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <span className="nav-logo-mark">Z</span>
          <span>Zerov</span>
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Zerov Portfolio. Built with React.
        </p>
        <div className="footer-links">
          <a href="https://t.me/heyz3ra" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://github.com/z3rovik" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
