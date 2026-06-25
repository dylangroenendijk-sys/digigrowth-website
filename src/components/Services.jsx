const services = [
  {
    tag: 'PAID MEDIA',
    title: 'Meta Ads Management',
    desc: 'Full-service Facebook and Instagram campaigns — strategy, creative, copy, targeting, and optimization. We build and manage everything so you never have to open Ads Manager.',
    highlights: ['Campaign strategy & build', 'Ad creative & copywriting', 'Audience & retargeting setup', 'Ongoing A/B optimization'],
    accent: '#3a7bd5',
  },
  {
    tag: 'AI AUTOMATION',
    title: 'AI Lead Qualification',
    desc: 'Our AI contacts every inbound lead within 60 seconds via SMS and email — 24 hours a day, 7 days a week. It qualifies prospects, handles objections, and books calls without any human involvement.',
    highlights: ['Sub-60s lead response', 'Multi-touch SMS + email sequences', 'AI objection handling', 'Lead scoring & filtering'],
    accent: '#14c882',
  },
  {
    tag: 'AUTOMATION',
    title: 'Calendar & Pipeline',
    desc: 'Qualified leads self-book onto your calendar. Reminders go out automatically. Your CRM updates itself. The entire backend of your sales process runs on autopilot.',
    highlights: ['Automated booking flows', 'Appointment reminders', 'CRM pipeline management', 'No-show reduction sequences'],
    accent: '#7c6df0',
  },
]

export default function Services() {
  const section = {
    padding: '120px 24px',
    maxWidth: 1100,
    margin: '0 auto',
  }

  const header = {
    textAlign: 'center',
    marginBottom: 72,
  }

  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    color: '#3a7bd5',
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
    marginBottom: 16,
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const sub = {
    fontSize: 17,
    color: '#8a9bc4',
    maxWidth: 500,
    margin: '0 auto',
    lineHeight: 1.65,
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 20,
  }

  const getCard = (accent) => ({
    padding: '44px 40px',
    background: 'rgba(10, 18, 40, 0.7)',
    border: '1px solid rgba(58,123,213,0.1)',
    borderRadius: 12,
    backdropFilter: 'blur(16px)',
    transition: 'all 0.3s ease',
    cursor: 'default',
    position: 'relative',
    overflow: 'hidden',
  })

  const tagStyle = (accent) => ({
    fontSize: 10,
    fontFamily: "'Share Tech Mono', monospace",
    color: accent,
    letterSpacing: '2.5px',
    marginBottom: 20,
    display: 'block',
    opacity: 0.85,
  })

  const cardTitle = {
    fontSize: 22,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 14,
    letterSpacing: '-0.4px',
  }

  const cardDesc = {
    fontSize: 15,
    color: '#8a9bc4',
    lineHeight: 1.75,
    marginBottom: 32,
  }

  const divider = (accent) => ({
    height: 1,
    background: `linear-gradient(90deg, ${accent}30, transparent)`,
    marginBottom: 24,
  })

  const list = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 11,
  }

  const listItem = {
    fontSize: 13,
    color: '#b0bfd8',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '0.2px',
  }

  return (
    <section id="services" style={section}>
      <div style={header}>
        <p style={eyebrow}>What We Do</p>
        <h2 style={h2}>One System. End to End.</h2>
        <p style={sub}>Every piece of your client acquisition pipeline — built, integrated, and managed for you.</p>
      </div>
      <div style={grid}>
        {services.map(s => (
          <div
            key={s.title}
            style={getCard(s.accent)}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.borderColor = `${s.accent}40`
              el.style.background = 'rgba(15, 25, 60, 0.95)'
              el.style.transform = 'translateY(-6px)'
              el.style.boxShadow = `0 24px 60px rgba(0,0,0,0.3), 0 0 0 1px ${s.accent}20`
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(58,123,213,0.1)'
              el.style.background = 'rgba(10, 18, 40, 0.7)'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            <span style={tagStyle(s.accent)}>{s.tag}</span>
            <div style={cardTitle}>{s.title}</div>
            <div style={cardDesc}>{s.desc}</div>
            <div style={divider(s.accent)} />
            <ul style={list}>
              {s.highlights.map(h => (
                <li key={h} style={listItem}>
                  <span style={{ color: s.accent, fontWeight: 700 }}>—</span> {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
