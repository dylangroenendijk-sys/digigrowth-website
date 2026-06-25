import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const nav = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '0 24px',
    height: 68,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(9, 15, 38, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(58, 123, 213, 0.15)' : '1px solid transparent',
  }

  const logo = {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: '-0.5px',
    color: '#fff',
  }

  const logoAccent = { color: '#3a7bd5' }

  const desktopLinks = {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
  }

  const linkStyle = {
    fontSize: 15,
    fontWeight: 500,
    color: '#8a9bc4',
    transition: 'color 0.2s',
    cursor: 'pointer',
  }

  const ctaBtn = {
    padding: '10px 22px',
    background: '#3a7bd5',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.15s',
    letterSpacing: '0.2px',
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={nav}>
      <Link to="/" style={logo}>
        Digi<span style={logoAccent}>Growth</span>
      </Link>

      <div style={desktopLinks}>
        <span style={linkStyle} onClick={() => scrollTo('services')}>Services</span>
        <span style={linkStyle} onClick={() => scrollTo('how-it-works')}>How It Works</span>
        <span style={linkStyle} onClick={() => scrollTo('pricing')}>Pricing</span>
        <Link to="/contact">
          <button
            style={ctaBtn}
            onMouseEnter={e => { e.target.style.background = '#2d66b8'; e.target.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.target.style.background = '#3a7bd5'; e.target.style.transform = 'translateY(0)' }}
          >
            Book a Call
          </button>
        </Link>
      </div>
    </nav>
  )
}
