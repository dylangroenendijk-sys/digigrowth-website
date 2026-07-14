const CALENDLY_URL = 'https://calendly.com/dylanrg-digigrowthllc/30min'

export default function CTA() {
  const section = {
    padding: 'clamp(72px, 16vw, 140px) 24px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  }

  const orb = {
    position: 'absolute',
    width: 700,
    height: 700,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(58,123,213,0.12) 0%, transparent 65%)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    filter: 'blur(40px)',
    pointerEvents: 'none',
  }

  const inner = {
    position: 'relative',
    zIndex: 1,
    maxWidth: 700,
    margin: '0 auto',
  }

  const label = {
    fontSize: 11,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#14c882',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: 24,
    display: 'block',
    opacity: 0.85,
  }

  const h2 = {
    fontSize: 'clamp(32px, 5vw, 60px)',
    fontWeight: 800,
    letterSpacing: '-1.5px',
    color: '#fff',
    lineHeight: 1.1,
    marginBottom: 22,
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const gradientText = {
    background: 'linear-gradient(135deg, #5a96f0 0%, #14c882 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  const sub = {
    fontSize: 17,
    color: '#8a9bc4',
    lineHeight: 1.7,
    marginBottom: 48,
  }

  const highlight = {
    color: '#fff',
    fontWeight: 600,
  }

  const btn = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 'clamp(15px, 4vw, 18px) clamp(22px, 6vw, 48px)',
    background: 'linear-gradient(135deg, #4d8fe8, #2563eb)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: 8,
    fontSize: 'clamp(14px, 3.6vw, 16px)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.25s',
    boxShadow: '0 0 32px rgba(58,123,213,0.6), 0 0 90px rgba(58,123,213,0.22), inset 0 1px 0 rgba(255,255,255,0.15)',
    letterSpacing: '0.3px',
  }

  const note = {
    marginTop: 20,
    fontSize: 12,
    color: '#4a5a7c',
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '1px',
  }

  return (
    <section style={section}>
      <div style={orb} />
      <div style={inner}>
        <span style={label}>Ready to Scale?</span>
        <h2 style={h2}>
          Start Filling Your Pipeline<br />
          <span style={gradientText}>On Autopilot.</span>
        </h2>
        <p style={sub}>
          Book a free 30-minute strategy call. We'll map out exactly how DigiGrowth delivers{' '}
          <span style={highlight}>$5,000–$10,000 in new monthly business</span> for you —
          guaranteed, no pitch, no pressure.
        </p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          <button
            style={btn}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
              e.currentTarget.style.boxShadow = '0 0 40px rgba(58,123,213,0.55), 0 0 100px rgba(58,123,213,0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)'
              e.currentTarget.style.boxShadow = '0 0 30px rgba(58,123,213,0.4), 0 0 80px rgba(58,123,213,0.15)'
            }}
          >
            Book Your Free Strategy Call
            <span style={{ fontSize: 18, lineHeight: 1 }}>→</span>
          </button>
        </a>
        <div style={note}>FREE · NO COMMITMENT · 30 MINUTES</div>
      </div>
    </section>
  )
}
