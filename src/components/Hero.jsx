import { Link } from 'react-router-dom'
import Marquee from './Marquee'

const CALENDLY_URL = 'https://calendly.com/dylanrg-digigrowthllc/30min'

export default function Hero() {
  const section = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '130px 24px 0',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
  }

  const orb1 = {
    position: 'absolute',
    width: 600,
    height: 600,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(58,123,213,0.18) 0%, transparent 70%)',
    top: '-100px',
    left: '50%',
    transform: 'translateX(-50%)',
    filter: 'blur(40px)',
    animation: 'float-a 12s ease-in-out infinite',
    pointerEvents: 'none',
  }

  const orb2 = {
    position: 'absolute',
    width: 400,
    height: 400,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(20,200,130,0.1) 0%, transparent 70%)',
    bottom: '10%',
    right: '5%',
    filter: 'blur(60px)',
    animation: 'float-b 15s ease-in-out infinite',
    pointerEvents: 'none',
  }

  const orb3 = {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(58,123,213,0.1) 0%, transparent 70%)',
    top: '30%',
    left: '5%',
    filter: 'blur(50px)',
    animation: 'float-b 18s ease-in-out infinite reverse',
    pointerEvents: 'none',
  }

  const gridOverlay = {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(58,123,213,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(58,123,213,0.04) 1px, transparent 1px)',
    backgroundSize: '64px 64px',
    pointerEvents: 'none',
  }

  const vignette = {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #060c1f 100%)',
    pointerEvents: 'none',
  }

  const content = {
    position: 'relative',
    zIndex: 2,
    maxWidth: 860,
    margin: '0 auto',
    animation: 'fade-up 0.8s ease both',
  }

  const badge = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '7px 18px',
    background: 'rgba(20, 200, 130, 0.06)',
    border: '1px solid rgba(20, 200, 130, 0.18)',
    borderRadius: 100,
    fontSize: 11,
    fontWeight: 600,
    color: '#14c882',
    marginBottom: 36,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const dot = {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#14c882',
    boxShadow: '0 0 10px #14c882',
    animation: 'pulse-dot 2s ease-in-out infinite',
    flexShrink: 0,
  }

  const h1 = {
    fontSize: 'clamp(42px, 6.5vw, 80px)',
    fontWeight: 800,
    lineHeight: 1.05,
    letterSpacing: '-2px',
    marginBottom: 28,
    color: '#fff',
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const gradientText = {
    background: 'linear-gradient(135deg, #5a96f0 0%, #3a7bd5 40%, #14c882 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  const sub = {
    fontSize: 'clamp(16px, 2vw, 19px)',
    color: '#8a9bc4',
    lineHeight: 1.75,
    maxWidth: 600,
    margin: '0 auto 52px',
    fontWeight: 300,
    letterSpacing: '0.1px',
  }

  const ctaRow = {
    display: 'flex',
    gap: 14,
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 80,
  }

  const primaryBtn = {
    padding: '16px 38px',
    background: 'linear-gradient(135deg, #3a7bd5, #2d66b8)',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.25s',
    letterSpacing: '0.3px',
    animation: 'glow-btn 3s ease-in-out infinite',
    boxShadow: '0 0 20px rgba(58,123,213,0.4), 0 0 60px rgba(58,123,213,0.15)',
  }

  const secondaryBtn = {
    padding: '16px 38px',
    background: 'rgba(255,255,255,0.04)',
    color: '#e8edf8',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.25s',
    backdropFilter: 'blur(8px)',
  }

  const statsRow = {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    maxWidth: 560,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 0,
    gap: 0,
  }

  const statWrap = {
    flex: 1,
    padding: '22px 0',
    textAlign: 'center',
    borderTop: '1px solid rgba(58,123,213,0.15)',
    borderBottom: '1px solid rgba(58,123,213,0.15)',
  }

  const statWrapMid = {
    ...statWrap,
    borderLeft: '1px solid rgba(58,123,213,0.15)',
    borderRight: '1px solid rgba(58,123,213,0.15)',
  }

  const statNum = {
    fontSize: 26,
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '-0.5px',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const statLabel = {
    fontSize: 10,
    color: '#8a9bc4',
    marginTop: 5,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section style={section}>
        <div style={orb1} />
        <div style={orb2} />
        <div style={orb3} />
        <div style={gridOverlay} />
        <div style={vignette} />

        <div style={content}>
          <div style={badge}>
            <span style={dot} />
            AI-Powered Client Acquisition
          </div>

          <h1 style={h1}>
            Your Pipeline, Built<br />
            and Run by{' '}
            <span style={gradientText}>AI.</span>
          </h1>

          <p style={sub}>
            DigiGrowth handles your entire client acquisition system — ads, AI-driven lead qualification,
            and automated follow-up — so your calendar fills itself while you run your business.
          </p>

          <div style={ctaRow}>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <button
                style={primaryBtn}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)' }}
              >
                Book a Free Strategy Call
              </button>
            </a>
            <button
              style={secondaryBtn}
              onClick={() => scrollTo('how-it-works')}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
            >
              See How It Works
            </button>
          </div>

          <div style={statsRow}>
            {[
              { num: '24/7', label: 'AI Follow-Up', mid: false },
              { num: '<60s', label: 'Lead Response', mid: true },
              { num: '100%', label: 'Done For You', mid: false },
            ].map((s) => (
              <div key={s.label} style={s.mid ? statWrapMid : statWrap}>
                <div style={statNum}>{s.num}</div>
                <div style={statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Marquee />
    </>
  )
}
