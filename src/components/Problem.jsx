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
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 1,
    background: 'rgba(58, 123, 213, 0.12)',
    border: '1px solid rgba(58, 123, 213, 0.12)',
    borderRadius: 8,
    overflow: 'hidden',
  }

  const card = {
    padding: '40px 36px',
    background: '#090f26',
  }

  const numStyle = {
    fontSize: 11,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#3a7bd5',
    letterSpacing: '2px',
    marginBottom: 20,
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
        <p style={eyebrow}>The Problem</p>
        <h2 style={h2}>Growth Stalls When There's No System Behind It</h2>
      </div>
      <div style={grid}>
        {problems.map(p => (
          <div key={p.id} style={card}>
            <div style={numStyle}>// {p.id}</div>
            <div style={cardTitle}>{p.title}</div>
            <div style={cardDesc}>{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
