import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const CALENDLY_URL = 'https://calendly.com/dylanrg-digigrowthllc/30min'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const nav = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    padding: '0 24px',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
    background: scrolled || menuOpen ? 'rgba(6, 12, 31, 0.96)' : 'transparent',
    backdropFilter: scrolled || menuOpen ? 'blur(16px)' : 'none',
    borderBottom: scrolled || menuOpen ? '1px solid rgba(58, 123, 213, 0.1)' : '1px solid transparent',
  }

  const links = {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
  }

  const hamburgerBtn = {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 5,
    width: 32,
    height: 32,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  }

  const barStyle = (open, which) => ({
    width: 22,
    height: 2,
    borderRadius: 1,
    background: '#e8edf8',
    transition: 'transform 0.25s ease, opacity 0.2s ease',
    transform: open
      ? which === 'top' ? 'translateY(7px) rotate(45deg)' : which === 'bottom' ? 'translateY(-7px) rotate(-45deg)' : 'none'
      : 'none',
    opacity: open && which === 'mid' ? 0 : 1,
  })

  const mobilePanel = {
    position: 'fixed',
    top: 64,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99,
    background: 'rgba(6, 12, 31, 0.98)',
    backdropFilter: 'blur(16px)',
    display: menuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  }

  const mobileLinkStyle = {
    fontSize: 20,
    fontWeight: 500,
    color: '#e8edf8',
    cursor: 'pointer',
  }

  const linkStyle = {
    fontSize: 14,
    fontWeight: 400,
    color: '#8a9bc4',
    transition: 'color 0.2s',
    cursor: 'pointer',
    letterSpacing: '0.1px',
  }

  const ctaBtn = {
    padding: '10px 22px',
    background: 'linear-gradient(135deg, #4d8fe8, #2563eb)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    letterSpacing: '0.2px',
    boxShadow: '0 0 18px rgba(58,123,213,0.45), inset 0 1px 0 rgba(255,255,255,0.12)',
    fontFamily: 'inherit',
  }

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navIds = ['how-it-works', 'ai']
  const navLabels = ['How It Works', 'The Engine']

  return (
    <nav style={nav}>
      <Link to="/" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }}><Logo /></Link>

      <div style={links} className="nav-desktop-links">
        {navIds.map((id, i) => (
          <span
            key={id}
            style={linkStyle}
            onClick={() => scrollTo(id)}
            onMouseEnter={e => (e.target.style.color = '#e8edf8')}
            onMouseLeave={e => (e.target.style.color = '#8a9bc4')}
          >
            {navLabels[i]}
          </span>
        ))}
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          <button
            style={ctaBtn}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(58,123,213,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 16px rgba(58,123,213,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Book a Call
          </button>
        </a>
      </div>

      <button
        style={hamburgerBtn}
        className="nav-hamburger"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span style={barStyle(menuOpen, 'top')} />
        <span style={barStyle(menuOpen, 'mid')} />
        <span style={barStyle(menuOpen, 'bottom')} />
      </button>

      {createPortal(
        <div style={mobilePanel}>
          {navIds.map((id, i) => (
            <span key={id} style={mobileLinkStyle} onClick={() => scrollTo(id)}>
              {navLabels[i]}
            </span>
          ))}
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
            <button style={{ ...ctaBtn, padding: '14px 32px', fontSize: 15 }}>
              Book a Call
            </button>
          </a>
        </div>,
        document.body
      )}
    </nav>
  )
}
