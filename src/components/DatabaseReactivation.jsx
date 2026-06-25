const steps = [
  {
    num: '01',
    title: 'Upload Your Old Leads',
    desc: 'Hand us any past lead list — old CRM contacts, dead opportunities, past inquiries, even cold email lists. No matter how old.',
  },
  {
    num: '02',
    title: 'AI + Parallel Dialer Activates',
    desc: 'Our system simultaneously dials up to 10 contacts at once while AI-powered SMS sequences run in parallel, re-engaging your list at scale within hours.',
  },
  {
    num: '03',
    title: 'Interested Leads Get Qualified',
    desc: 'Anyone who responds gets routed into our AI qualification flow — objections handled, questions answered, and appointments booked automatically.',
  },
  {
    num: '04',
    title: 'Revenue From Leads You Already Paid For',
    desc: 'No new ad spend. No new leads. Just money left on the table that we go back and collect for you.',
  },
]

const stats = [
  { value: '10x', label: 'Simultaneous Dial Lines' },
  { value: '$0',  label: 'Additional Ad Spend' },
  { value: '< 24h', label: 'Full Database Contacted' },
]

export default function DatabaseReactivation() {
  const section = {
    padding: '120px 24px',
    position: 'relative',
    overflow: 'hidden',
  }

  const bg = {
    position: 'absolute',
    inset: 0,
    background: 'rgba(10, 18, 40, 0.45)',
    borderTop: '1px solid rgba(58,123,213,0.08)',
    borderBottom: '1px solid rgba(58,123,213,0.08)',
  }

  const orb = {
    position: 'absolute',
    width: 600,
    height: 600,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(124,109,240,0.1) 0%, transparent 65%)',
    top: '-100px',
    right: '-100px',
    filter: 'blur(60px)',
    pointerEvents: 'none',
  }

  const inner = {
    maxWidth: 1100,
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  }

  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    color: '#7c6df0',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: 18,
    fontFamily: "'Share Tech Mono', monospace",
    display: 'block',
  }

  const h2 = {
    fontSize: 'clamp(28px, 4vw, 52px)',
    fontWeight: 800,
    letterSpacing: '-1.2px',
    color: '#fff',
    lineHeight: 1.1,
    marginBottom: 20,
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const gradientText = {
    background: 'linear-gradient(135deg, #7c6df0, #60a5fa)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  const intro = {
    fontSize: 17,
    color: '#8a9bc4',
    lineHeight: 1.75,
    maxWidth: 620,
    marginBottom: 64,
  }

  const statsRow = {
    display: 'flex',
    gap: 0,
    marginBottom: 72,
    borderRadius: 10,
    overflow: 'hidden',
    border: '1px solid rgba(124,109,240,0.15)',
    maxWidth: 560,
  }

  const statCell = (mid) => ({
    flex: 1,
    padding: '24px 0',
    textAlign: 'center',
    background: 'rgba(6,12,31,0.8)',
    borderLeft: mid ? '1px solid rgba(124,109,240,0.12)' : 'none',
    borderRight: mid ? '1px solid rgba(124,109,240,0.12)' : 'none',
  })

  const statVal = {
    fontSize: 26,
    fontWeight: 700,
    color: '#fff',
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '-0.5px',
    marginBottom: 6,
  }

  const statLbl = {
    fontSize: 9,
    color: '#7c6df0',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: "'Share Tech Mono', monospace",
    opacity: 0.85,
  }

  const stepsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 2,
    borderRadius: 10,
    overflow: 'hidden',
    border: '1px solid rgba(124,109,240,0.1)',
  }

  const stepCard = {
    padding: '36px 32px',
    background: 'rgba(6, 12, 31, 0.9)',
    transition: 'background 0.2s',
    position: 'relative',
  }

  const stepNum = {
    fontSize: 11,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#7c6df0',
    letterSpacing: '2px',
    marginBottom: 16,
    opacity: 0.7,
    display: 'block',
  }

  const stepTitle = {
    fontSize: 16,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 12,
    letterSpacing: '-0.2px',
    lineHeight: 1.3,
  }

  const stepDesc = {
    fontSize: 13,
    color: '#8a9bc4',
    lineHeight: 1.7,
  }

  return (
    <section style={section}>
      <div style={bg} />
      <div style={orb} />
      <div style={inner}>
        <span style={eyebrow}>Database Reactivation</span>
        <h2 style={h2}>
          There's Revenue Hiding<br />
          <span style={gradientText}>In Your Old Lead List.</span>
        </h2>
        <p style={intro}>
          Most businesses have hundreds — sometimes thousands — of leads sitting dormant in their CRM.
          People who raised their hand at some point but never converted. Instead of writing them off,
          we go back and unlock the revenue you've already paid to acquire.
        </p>

        <div style={statsRow}>
          {stats.map((s, i) => (
            <div key={s.label} style={statCell(i === 1)}>
              <div style={statVal}>{s.value}</div>
              <div style={statLbl}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={stepsGrid}>
          {steps.map((s, i) => (
            <div
              key={s.num}
              style={{
                ...stepCard,
                borderLeft: i > 0 ? '1px solid rgba(124,109,240,0.08)' : 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(12,22,50,0.95)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(6,12,31,0.9)')}
            >
              <span style={stepNum}>{s.num}</span>
              <div style={stepTitle}>{s.title}</div>
              <div style={stepDesc}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
