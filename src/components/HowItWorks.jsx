const steps = [
  {
    num: '01',
    title: 'We Launch Your Ads',
    desc: 'We build and manage targeted Meta ad campaigns that reach your ideal client — people in your area actively looking for fitness coaching or gym memberships.',
  },
  {
    num: '02',
    title: 'Leads Get Qualified Automatically',
    desc: 'Every lead is instantly followed up via automated SMS and email sequences. We qualify them, answer objections, and warm them up — without you doing a thing.',
  },
  {
    num: '03',
    title: 'Clients Land On Your Calendar',
    desc: 'Pre-qualified, ready-to-buy prospects are booked directly into your calendar for intro sessions or consultations. You show up and close.',
  },
]

export default function HowItWorks() {
  const section = {
    padding: '100px 24px',
    background: 'rgba(13, 21, 53, 0.4)',
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
    fontSize: 13,
    fontWeight: 600,
    color: '#14c882',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: 14,
  }

  const h2 = {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 700,
    letterSpacing: '-0.8px',
    color: '#fff',
    lineHeight: 1.2,
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 32,
    position: 'relative',
  }

  const card = {
    padding: '40px 36px',
    background: 'rgba(9, 15, 38, 0.7)',
    border: '1px solid rgba(58, 123, 213, 0.2)',
    borderRadius: 16,
    position: 'relative',
    overflow: 'hidden',
  }

  const numStyle = {
    fontSize: 56,
    fontWeight: 800,
    color: 'rgba(58, 123, 213, 0.12)',
    lineHeight: 1,
    marginBottom: 20,
    letterSpacing: '-2px',
    fontVariantNumeric: 'tabular-nums',
  }

  const cardTitle = {
    fontSize: 20,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 14,
    letterSpacing: '-0.3px',
  }

  const cardDesc = {
    fontSize: 15,
    color: '#8a9bc4',
    lineHeight: 1.7,
  }

  return (
    <section id="how-it-works" style={section}>
      <div style={inner}>
        <div style={header}>
          <p style={eyebrow}>The Process</p>
          <h2 style={h2}>How DigiGrowth Works</h2>
        </div>
        <div style={grid}>
          {steps.map(s => (
            <div key={s.num} style={card}>
              <div style={numStyle}>{s.num}</div>
              <div style={cardTitle}>{s.title}</div>
              <div style={cardDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
