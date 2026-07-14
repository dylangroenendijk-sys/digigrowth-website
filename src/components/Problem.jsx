const problems = [
  {
    id: '01',
    title: 'No Consistent Lead Flow',
    desc: 'Most businesses rely on referrals or word of mouth. It works until it doesn\'t — and when the pipeline dries up, there\'s no system to turn back on.',
  },
  {
    id: '02',
    title: 'Leads Go Cold Before You Respond',
    desc: 'Speed to lead is everything. If you\'re not following up within minutes, you\'re losing deals to whoever is. Manual follow-up can\'t compete.',
  },
  {
    id: '03',
    title: 'Too Busy Running the Business to Grow It',
    desc: 'You shouldn\'t have to choose between serving your clients and finding new ones. That tradeoff disappears when the system runs itself.',
  },
]

export default function Problem() {
  const section = {
    padding: 'clamp(64px, 14vw, 120px) 24px',
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
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 20,
  }

  const card = (hovered) => ({
    padding: '44px 40px',
    background: hovered ? 'rgba(15, 25, 60, 0.9)' : 'rgba(10, 18, 40, 0.7)',
    border: hovered ? '1px solid rgba(58,123,213,0.4)' : '1px solid rgba(58,123,213,0.12)',
    borderRadius: 12,
    backdropFilter: 'blur(16px)',
    transition: 'all 0.3s ease',
    boxShadow: hovered ? '0 0 40px rgba(58,123,213,0.08), inset 0 1px 0 rgba(255,255,255,0.05)' : 'inset 0 1px 0 rgba(255,255,255,0.03)',
    cursor: 'default',
    borderLeftWidth: 2,
    borderLeftStyle: 'solid',
    borderLeftColor: hovered ? '#3a7bd5' : 'rgba(58,123,213,0.2)',
  })

  const numStyle = {
    fontSize: 11,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#3a7bd5',
    letterSpacing: '2px',
    marginBottom: 16,
    opacity: 0.7,
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
    <section style={section}>
      <div style={header}>
        <p style={eyebrow}>The Problem</p>
        <h2 style={h2}>Growth Stalls When There's<br />No System Behind It</h2>
      </div>
      <div style={grid}>
        {problems.map(p => {
          let hovered = false
          return (
            <div
              key={p.id}
              style={card(false)}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(15,25,60,0.9)'
                el.style.borderColor = 'rgba(58,123,213,0.4)'
                el.style.borderLeftColor = '#3a7bd5'
                el.style.boxShadow = '0 0 40px rgba(58,123,213,0.08), inset 0 1px 0 rgba(255,255,255,0.05)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(10,18,40,0.7)'
                el.style.borderColor = 'rgba(58,123,213,0.12)'
                el.style.borderLeftColor = 'rgba(58,123,213,0.2)'
                el.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.03)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div style={numStyle}>// {p.id}</div>
              <div style={cardTitle}>{p.title}</div>
              <div style={cardDesc}>{p.desc}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
