import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const CALENDLY_URL = 'https://calendly.com/dylanrg-digigrowthllc/30min'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

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
    background: scrolled ? 'rgba(6, 12, 31, 0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(58, 123, 213, 0.1)' : '1px solid transparent',
  }

  const links = {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
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
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={nav}>
      <Link to="/"><Logo /></Link>

      <div style={links}>
        {['services', 'how-it-works', 'ai'].map((id, i) => (
          <span
            key={id}
            style={linkStyle}
            onClick={() => scrollTo(id)}
            onMouseEnter={e => (e.target.style.color = '#e8edf8')}
            onMouseLeave={e => (e.target.style.color = '#8a9bc4')}
          >
            {['Services', 'How It Works', 'AI System'][i]}
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
    </nav>
  )
}
