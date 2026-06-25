const services = [
  {
    tag: 'PAID MEDIA',
    title: 'Meta Ads Management',
    desc: 'Full-service Facebook and Instagram campaigns — strategy, creative, copy, targeting, and optimization. We build and manage everything inside Ads Manager so you never have to.',
    highlights: ['Campaign strategy & build', 'Ad creative & copywriting', 'Audience & retargeting setup', 'Ongoing A/B optimization'],
  },
  {
    tag: 'AI AUTOMATION',
    title: 'AI Lead Qualification',
    desc: 'Our AI contacts every inbound lead within 60 seconds via SMS and email — 24 hours a day, 7 days a week. It qualifies prospects, handles objections, and nurtures them toward a booked call without any human involvement.',
    highlights: ['Sub-60s lead response', 'Multi-touch SMS + email sequences', 'AI objection handling', 'Lead scoring & filtering'],
  },
  {
    tag: 'AUTOMATION',
    title: 'Calendar & Pipeline Automation',
    desc: 'Qualified leads self-book onto your calendar. Reminders go out automatically. Your CRM updates itself. The entire backend of your sales process runs on autopilot.',
    highlights: ['Automated booking flows', 'Appointment reminders', 'CRM pipeline management', 'No-show reduction sequences'],
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
    fontSize: 11,
    fontWeight: 500,
    color: '#3a7bd5',
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
    marginBottom: 16,
  }

  const sub = {
    fontSize: 17,
    color: '#8a9bc4',
    maxWidth: 520,
    margin: '0 auto',
    lineHeight: 1.65,
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 1,
    background: 'rgba(58, 123, 213, 0.1)',
    border: '1px solid rgba(58, 123, 213, 0.12)',
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 56,
  }

  const card = {
    padding: '40px 36px',
    background: '#090f26',
    transition: 'background 0.2s',
  }

  const tagStyle = {
    fontSize: 10,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#3a7bd5',
    letterSpacing: '2.5px',
    marginBottom: 20,
    display: 'block',
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
    lineHeight: 1.75,
    marginBottom: 28,
  }

  const divider = {
    height: 1,
    background: 'rgba(58, 123, 213, 0.12)',
    marginBottom: 24,
  }

  const list = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  }

  const listItem = {
    fontSize: 13,
    color: '#b0bfd8',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '0.3px',
  }

  const dash = {
    color: '#14c882',
    fontWeight: 700,
    flexShrink: 0,
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
            style={card}
            onMouseEnter={e => (e.currentTarget.style.background = '#0d1535')}
            onMouseLeave={e => (e.currentTarget.style.background = '#090f26')}
          >
            <span style={tagStyle}>{s.tag}</span>
            <div style={cardTitle}>{s.title}</div>
            <div style={cardDesc}>{s.desc}</div>
            <div style={divider} />
            <ul style={list}>
              {s.highlights.map(h => (
                <li key={h} style={listItem}>
                  <span style={dash}>—</span> {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
