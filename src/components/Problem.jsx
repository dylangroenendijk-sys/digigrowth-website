const problems = [
  {
    icon: '📉',
    title: 'Ads That Don\'t Convert',
    desc: 'You\'ve tried running Facebook or Instagram ads but spent money with nothing to show for it. Poor targeting and weak follow-up kill results before they start.',
  },
  {
    icon: '⏳',
    title: 'Leads Go Cold Fast',
    desc: 'You get an inquiry, but by the time you follow up they\'ve already moved on. Without instant, consistent outreach, you\'re leaving money on the table every day.',
  },
  {
    icon: '🔄',
    title: 'No Time To Chase Clients',
    desc: 'You\'re a coach, not a marketer. You shouldn\'t have to spend hours every week chasing leads — your time should be on the floor, not behind a screen.',
  },
]

export default function Problem() {
  const section = {
    padding: '100px 24px',
    maxWidth: 1100,
    margin: '0 auto',
  }

  const header = {
    textAlign: 'center',
    marginBottom: 64,
  }

  const eyebrow = {
    fontSize: 13,
    fontWeight: 600,
    color: '#3a7bd5',
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
    gap: 24,
  }

  const card = {
    padding: '36px 32px',
    background: 'rgba(13, 21, 53, 0.6)',
    border: '1px solid rgba(58, 123, 213, 0.15)',
    borderRadius: 16,
    backdropFilter: 'blur(12px)',
  }

  const icon = {
    fontSize: 36,
    marginBottom: 20,
    display: 'block',
  }

  const cardTitle = {
    fontSize: 18,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 12,
    letterSpacing: '-0.3px',
  }

  const cardDesc = {
    fontSize: 15,
    color: '#8a9bc4',
    lineHeight: 1.7,
  }

  return (
    <section style={section}>
      <div style={header}>
        <p style={eyebrow}>Sound Familiar?</p>
        <h2 style={h2}>Most Gym Owners Are Stuck<br />In The Same Cycle</h2>
      </div>
      <div style={grid}>
        {problems.map(p => (
          <div key={p.title} style={card}>
            <span style={icon}>{p.icon}</span>
            <div style={cardTitle}>{p.title}</div>
            <div style={cardDesc}>{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
