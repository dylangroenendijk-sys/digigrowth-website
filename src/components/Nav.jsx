import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const CALENDLY_URL = 'https://calendly.com/dylanrg-digigrowthllc/30min'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '0 32px',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
    background: scrolled ? 'rgba(9, 15, 38, 0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(58, 123, 213, 0.12)' : '1px solid transparent',
  }

  const logo = {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: '-0.5px',
    color: '#fff',
  }

  const logoAccent = { color: '#3a7bd5' }

  const links = {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
  }

  const linkStyle = {
    fontSize: 14,
    fontWeight: 500,
    color: '#8a9bc4',
    transition: 'color 0.2s',
    cursor: 'pointer',
    letterSpacing: '0.2px',
  }

  const ctaBtn = {
    padding: '9px 20px',
    background: '#3a7bd5',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background 0.2s, transform 0.15s',
    letterSpacing: '0.3px',
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

      <div style={links}>
        <span style={linkStyle} onClick={() => scrollTo('services')} onMouseEnter={e => (e.target.style.color = '#e8edf8')} onMouseLeave={e => (e.target.style.color = '#8a9bc4')}>Services</span>
        <span style={linkStyle} onClick={() => scrollTo('how-it-works')} onMouseEnter={e => (e.target.style.color = '#e8edf8')} onMouseLeave={e => (e.target.style.color = '#8a9bc4')}>How It Works</span>
        <span style={linkStyle} onClick={() => scrollTo('ai')} onMouseEnter={e => (e.target.style.color = '#e8edf8')} onMouseLeave={e => (e.target.style.color = '#8a9bc4')}>AI System</span>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          <button
            style={ctaBtn}
            onMouseEnter={e => { e.target.style.background = '#2d66b8' }}
            onMouseLeave={e => { e.target.style.background = '#3a7bd5' }}
          >
            Book a Call
          </button>
        </a>
      </div>
    </nav>
  )
}
