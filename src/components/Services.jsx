const services = [
  {
    icon: '🎯',
    title: 'Meta Ads Management',
    desc: 'Full-service Facebook and Instagram ad campaigns — creative, copy, targeting, and optimization. We handle everything so you never have to touch Ads Manager.',
    highlights: ['Campaign strategy & setup', 'Ad creative & copy', 'Audience targeting', 'Ongoing optimization'],
  },
  {
    icon: '⚡',
    title: 'Lead Qualification',
    desc: 'Every lead is instantly followed up with automated SMS and email sequences that filter out tire-kickers and nurture serious prospects into booked calls.',
    highlights: ['Instant SMS follow-up', 'Email nurture sequences', 'Lead scoring & filtering', 'Objection handling'],
  },
  {
    icon: '📅',
    title: 'Calendar Automation',
    desc: 'Qualified leads book themselves directly onto your calendar. No back-and-forth, no manual scheduling — just a steady flow of ready-to-close appointments.',
    highlights: ['Automated booking flows', 'Appointment reminders', 'No-show reduction', 'CRM integration'],
  },
]

export default function Services() {
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
    marginBottom: 16,
  }

  const sub = {
    fontSize: 17,
    color: '#8a9bc4',
    maxWidth: 520,
    margin: '0 auto',
    lineHeight: 1.6,
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24,
  }

  const card = {
    padding: '40px 36px',
    background: 'rgba(13, 21, 53, 0.6)',
    border: '1px solid rgba(58, 123, 213, 0.18)',
    borderRadius: 16,
    backdropFilter: 'blur(12px)',
    transition: 'border-color 0.25s, transform 0.25s',
  }

  const iconBox = {
    width: 52,
    height: 52,
    background: 'rgba(58, 123, 213, 0.12)',
    border: '1px solid rgba(58, 123, 213, 0.25)',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    marginBottom: 24,
  }

  const cardTitle = {
    fontSize: 20,
    fontWeight: 600,
    color: '#fff',
    marginBottom: 12,
    letterSpacing: '-0.3px',
  }

  const cardDesc = {
    fontSize: 15,
    color: '#8a9bc4',
    lineHeight: 1.7,
    marginBottom: 24,
  }

  const list = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  }

  const listItem = {
    fontSize: 14,
    color: '#b0bfd8',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  }

  const check = {
    color: '#14c882',
    fontWeight: 700,
    flexShrink: 0,
  }

  return (
    <section id="services" style={section}>
      <div style={header}>
        <p style={eyebrow}>What We Do</p>
        <h2 style={h2}>Everything You Need To Grow</h2>
        <p style={sub}>One system. One team. One monthly fee. We handle the entire client acquisition pipeline so you can focus on coaching.</p>
      </div>
      <div style={grid}>
        {services.map(s => (
          <div
            key={s.title}
            style={card}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(58,123,213,0.45)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(58,123,213,0.18)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={iconBox}>{s.icon}</div>
            <div style={cardTitle}>{s.title}</div>
            <div style={cardDesc}>{s.desc}</div>
            <ul style={list}>
              {s.highlights.map(h => (
                <li key={h} style={listItem}>
                  <span style={check}>✓</span> {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
