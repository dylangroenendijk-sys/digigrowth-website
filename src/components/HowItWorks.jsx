const steps = [
  {
    num: '01',
    title: 'We Build Your Ad System',
    desc: 'We design and launch targeted Meta ad campaigns built around your ideal client profile — the right message, the right audience, the right offer. You don\'t touch a thing.',
  },
  {
    num: '02',
    title: 'AI Qualifies Every Lead Instantly',
    desc: 'The moment a lead comes in, our AI engages them via SMS and email — within 60 seconds, around the clock. It qualifies, handles objections, and moves them toward a booking automatically.',
  },
  {
    num: '03',
    title: 'Clients Book Directly On Your Calendar',
    desc: 'Pre-qualified prospects schedule themselves onto your calendar. You get notified, you show up, you close. No chasing, no back-and-forth, no wasted time.',
  },
]

export default function HowItWorks() {
  const section = {
    padding: '100px 24px',
    borderTop: '1px solid rgba(58, 123, 213, 0.1)',
    borderBottom: '1px solid rgba(58, 123, 213, 0.1)',
    background: 'rgba(13, 21, 53, 0.35)',
  }

  const inner = {
    maxWidth: 1100,
    margin: '0 auto',
  }

  const header = {
    textAlign: 'center',
    marginBottom: 72,
  }

  const eyebrow = {
    fontSize: 11,
    fontWeight: 500,
    color: '#14c882',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    marginBottom: 16,
    fontFamily: "'Share Tech Mono', monospace",
  }

  const h2 = {
    fontSize: 'clamp(26px, 3.5vw, 42px)',
    fontWeight: 700,
    letterSpacing: '-0.8px',
    color: '#fff',
    lineHeight: 1.2,
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24,
  }

  const card = {
    padding: '36px 32px',
    background: 'rgba(9, 15, 38, 0.7)',
    border: '1px solid rgba(58, 123, 213, 0.15)',
    borderRadius: 8,
    position: 'relative',
  }

  const numStyle = {
    fontSize: 11,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#3a7bd5',
    letterSpacing: '2px',
    marginBottom: 20,
  }

  const bar = {
    width: 32,
    height: 2,
    background: '#3a7bd5',
    marginBottom: 20,
    borderRadius: 1,
  }

  const cardTitle = {
    fontSize: 19,
    fontWeight: 600,
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
      <div style={inner}>
        <div style={header}>
          <p style={eyebrow}>The Process</p>
          <h2 style={h2}>From Zero to Full Pipeline in Three Steps</h2>
        </div>
        <div style={grid}>
          {steps.map(s => (
            <div key={s.num} style={card}>
              <div style={numStyle}>STEP {s.num}</div>
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
