const steps = [
  {
    num: '01',
    title: 'We Build Your Ad System',
    desc: 'We design and launch targeted Meta ad campaigns built around your ideal client profile — the right message, the right audience, the right offer. You don\'t touch a thing.',
    tag: 'PAID MEDIA',
  },
  {
    num: '02',
    title: 'We Reactivate Your Dead Leads',
    desc: 'Before spending more on ads, we go through your existing database. AI-driven SMS and email sequences automatically re-engage dormant contacts — recovering revenue from leads you already paid for, at no extra ad cost.',
    tag: 'DATABASE REACTIVATION',
  },
  {
    num: '03',
    title: 'AI Qualifies Every Lead Instantly',
    desc: 'The moment a lead comes in — from ads or reactivation — our AI engages them via SMS and email within 60 seconds, around the clock. It qualifies, handles objections, and moves them toward a booking automatically.',
    tag: 'AI AUTOMATION',
  },
  {
    num: '04',
    title: 'Clients Book Directly On Your Calendar',
    desc: 'Pre-qualified prospects schedule themselves onto your calendar. You get notified, you show up, you close. No chasing, no back-and-forth, no wasted time.',
    tag: 'CONVERSION',
  },
]

export default function HowItWorks() {
  const section = {
    padding: 'clamp(64px, 14vw, 120px) 24px',
    position: 'relative',
  }

  const bgStripe = {
    position: 'absolute',
    inset: 0,
    background: '#060c1f',
    borderTop: '1px solid rgba(58,123,213,0.08)',
    borderBottom: '1px solid rgba(58,123,213,0.08)',
  }

  const inner = {
    maxWidth: 1100,
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  }

  const header = {
    textAlign: 'center',
    marginBottom: 80,
  }

  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    color: '#14c882',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: 18,
    fontFamily: "'Share Tech Mono', monospace",
  }

  const h2 = {
    fontSize: 'clamp(28px, 4vw, 48px)',
    fontWeight: 800,
    letterSpacing: '-1px',
    color: '#fff',
    lineHeight: 1.15,
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 20,
    position: 'relative',
  }

  const card = {
    padding: 'clamp(28px, 6vw, 44px) clamp(24px, 5vw, 40px)',
    position: 'relative',
    background: 'rgba(6, 12, 31, 0.8)',
    border: '1px solid rgba(58,123,213,0.1)',
    borderRadius: 12,
    backdropFilter: 'blur(12px)',
    transition: 'all 0.3s',
  }

  const stepTag = {
    fontSize: 10,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#3a7bd5',
    letterSpacing: '2.5px',
    marginBottom: 8,
    display: 'block',
    opacity: 0.7,
  }

  const numStyle = {
    fontSize: 56,
    fontWeight: 800,
    color: 'rgba(58,123,213,0.08)',
    lineHeight: 1,
    marginBottom: 24,
    letterSpacing: '-3px',
    fontFamily: "'Share Tech Mono', monospace",
    userSelect: 'none',
  }

  const bar = {
    width: 36,
    height: 2,
    background: 'linear-gradient(90deg, #3a7bd5, #14c882)',
    marginBottom: 22,
    borderRadius: 1,
  }

  const cardTitle = {
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 14,
    letterSpacing: '-0.3px',
  }

  const cardDesc = {
    fontSize: 15,
    color: '#8a9bc4',
    lineHeight: 1.75,
  }

  return (
    <section id="how-it-works" style={section}>
      <div style={bgStripe} />
      <div style={inner}>
        <div style={header}>
          <p style={eyebrow}>The Process</p>
          <h2 style={h2}>From Zero to Full Pipeline<br />in Four Steps</h2>
        </div>
        <div style={grid}>
          {steps.map(s => (
            <div
              key={s.num}
              style={card}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(58,123,213,0.3)'
                e.currentTarget.style.background = 'rgba(12, 22, 50, 0.95)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(58,123,213,0.1)'
                e.currentTarget.style.background = 'rgba(6, 12, 31, 0.8)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={stepTag}>{s.tag}</span>
              <div style={numStyle}>{s.num}</div>
              <div style={bar} />
              <div style={cardTitle}>{s.title}</div>
              <div style={cardDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
