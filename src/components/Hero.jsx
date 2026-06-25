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
    background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(58,123,213,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(20,200,130,0.06) 0%, transparent 60%)',
    zIndex: 0,
  }

  const grid = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(58,123,213,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(58,123,213,0.06) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    zIndex: 0,
  }

  const content = {
    position: 'relative',
    zIndex: 1,
    maxWidth: 760,
    margin: '0 auto',
  }

  const badge = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 16px',
    background: 'rgba(20, 200, 130, 0.1)',
    border: '1px solid rgba(20, 200, 130, 0.25)',
    borderRadius: 100,
    fontSize: 13,
    fontWeight: 500,
    color: '#14c882',
    marginBottom: 28,
    letterSpacing: '0.3px',
  }

  const dot = {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#14c882',
    boxShadow: '0 0 8px #14c882',
    animation: 'pulse 2s infinite',
  }

  const h1 = {
    fontSize: 'clamp(38px, 6vw, 72px)',
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: '-1.5px',
    marginBottom: 24,
    color: '#fff',
  }

  const accent = { color: '#3a7bd5' }

  const sub = {
    fontSize: 'clamp(16px, 2vw, 20px)',
    color: '#8a9bc4',
    lineHeight: 1.65,
    marginBottom: 44,
    maxWidth: 580,
    margin: '0 auto 44px',
  }

  const ctaRow = {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
  }

  const primaryBtn = {
    padding: '16px 36px',
    background: '#3a7bd5',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    letterSpacing: '0.2px',
  }

  const secondaryBtn = {
    padding: '16px 36px',
    background: 'transparent',
    color: '#e8edf8',
    border: '1px solid rgba(58, 123, 213, 0.35)',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s',
  }

  const stats = {
    display: 'flex',
    justifyContent: 'center',
    gap: 48,
    marginTop: 72,
    flexWrap: 'wrap',
  }

  const statItem = { textAlign: 'center' }

  const statNum = {
    fontSize: 32,
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '-1px',
  }

  const statLabel = {
    fontSize: 13,
    color: '#8a9bc4',
    marginTop: 4,
    fontWeight: 400,
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
          Done-For-You Client Acquisition
        </div>

        <h1 style={h1}>
          We Fill Your Gym.<br />
          <span style={accent}>You Just Show Up.</span>
        </h1>

        <p style={sub}>
          DigiGrowth runs your entire client acquisition system — Meta ads, lead qualification,
          and automated follow-up — delivering 20–40 new intro sessions to your calendar every month.
        </p>

        <div style={ctaRow}>
          <Link to="/contact">
            <button
              style={primaryBtn}
              onMouseEnter={e => { e.currentTarget.style.background = '#2d66b8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(58,123,213,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#3a7bd5'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              Get My Free Strategy Call
            </button>
          </Link>
          <button
            style={secondaryBtn}
            onClick={() => scrollTo('how-it-works')}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(58,123,213,0.7)'; e.currentTarget.style.background = 'rgba(58,123,213,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(58,123,213,0.35)'; e.currentTarget.style.background = 'transparent' }}
          >
            See How It Works
          </button>
        </div>

        <div style={stats}>
          {[
            { num: '20–40', label: 'New Clients / Month' },
            { num: '100%', label: 'Done For You' },
            { num: '$0', label: 'Extra Overhead' },
          ].map(s => (
            <div key={s.label} style={statItem}>
              <div style={statNum}>{s.num}</div>
              <div style={statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
