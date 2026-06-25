import { Link } from 'react-router-dom'

export default function Hero() {
  const section = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '120px 24px 80px',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
  }

  const bg = {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(58,123,213,0.16) 0%, transparent 70%)',
    zIndex: 0,
  }

  const grid = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(58,123,213,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(58,123,213,0.05) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    zIndex: 0,
  }

  const content = {
    position: 'relative',
    zIndex: 1,
    maxWidth: 780,
    margin: '0 auto',
  }

  const badge = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 16px',
    background: 'rgba(20, 200, 130, 0.08)',
    border: '1px solid rgba(20, 200, 130, 0.2)',
    borderRadius: 4,
    fontSize: 11,
    fontWeight: 500,
    color: '#14c882',
    marginBottom: 32,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const dot = {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#14c882',
    boxShadow: '0 0 8px #14c882',
    animation: 'pulse 2s infinite',
  }

  const h1 = {
    fontSize: 'clamp(36px, 5.5vw, 68px)',
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: '-1.5px',
    marginBottom: 24,
    color: '#fff',
  }

  const accent = { color: '#3a7bd5' }

  const sub = {
    fontSize: 'clamp(16px, 2vw, 19px)',
    color: '#8a9bc4',
    lineHeight: 1.7,
    marginBottom: 48,
    maxWidth: 600,
    margin: '0 auto 48px',
  }

  const ctaRow = {
    display: 'flex',
    gap: 14,
    justifyContent: 'center',
    flexWrap: 'wrap',
  }

  const primaryBtn = {
    padding: '15px 34px',
    background: '#3a7bd5',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    letterSpacing: '0.3px',
  }

  const secondaryBtn = {
    padding: '15px 34px',
    background: 'transparent',
    color: '#e8edf8',
    border: '1px solid rgba(58, 123, 213, 0.3)',
    borderRadius: 6,
    fontSize: 15,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s',
  }

  const statsRow = {
    display: 'flex',
    justifyContent: 'center',
    gap: 0,
    marginTop: 80,
    flexWrap: 'wrap',
    border: '1px solid rgba(58, 123, 213, 0.15)',
    borderRadius: 8,
    overflow: 'hidden',
    background: 'rgba(13, 21, 53, 0.5)',
    backdropFilter: 'blur(12px)',
    maxWidth: 620,
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  const statItem = {
    textAlign: 'center',
    padding: '24px 40px',
    flex: 1,
    borderRight: '1px solid rgba(58, 123, 213, 0.15)',
  }

  const statItemLast = { ...statItem, borderRight: 'none' }

  const statNum = {
    fontSize: 28,
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '-1px',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const statLabel = {
    fontSize: 11,
    color: '#8a9bc4',
    marginTop: 6,
    fontWeight: 500,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section style={section}>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      <div style={bg} />
      <div style={grid} />
      <div style={content}>
        <div style={badge}>
          <span style={dot} />
          AI-Powered Client Acquisition
        </div>

        <h1 style={h1}>
          Your Pipeline, Built and<br />
          Run by <span style={accent}>AI.</span>
        </h1>

        <p style={sub}>
          DigiGrowth handles your entire client acquisition system — ads, AI-driven lead qualification,
          and automated follow-up — so your calendar fills itself while you run your business.
        </p>

        <div style={ctaRow}>
          <a href="https://calendly.com/dylanrg-digigrowthllc/30min" target="_blank" rel="noopener noreferrer">
            <button
              style={primaryBtn}
              onMouseEnter={e => { e.currentTarget.style.background = '#2d66b8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(58,123,213,0.3)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#3a7bd5'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Book a Free Strategy Call
            </button>
          </a>
          <button
            style={secondaryBtn}
            onClick={() => scrollTo('how-it-works')}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(58,123,213,0.6)'; e.currentTarget.style.background = 'rgba(58,123,213,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(58,123,213,0.3)'; e.currentTarget.style.background = 'transparent' }}
          >
            See How It Works
          </button>
        </div>

        <div style={{ marginTop: 80, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={statsRow}>
            {[
              { num: '24/7', label: 'AI Follow-Up' },
              { num: '100%', label: 'Done For You' },
              { num: '<60s', label: 'Lead Response' },
            ].map((s, i, arr) => (
              <div key={s.label} style={i === arr.length - 1 ? statItemLast : statItem}>
                <div style={statNum}>{s.num}</div>
                <div style={statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
