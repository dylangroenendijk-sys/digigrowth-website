const features = [
  {
    label: 'RESPONSE TIME',
    value: '< 60 sec',
    desc: 'Every inbound lead gets an AI-powered SMS response within 60 seconds — day or night, weekends included.',
  },
  {
    label: 'AVAILABILITY',
    value: '24 / 7 / 365',
    desc: 'Our AI never clocks out. While you\'re sleeping, it\'s qualifying leads, answering questions, and booking appointments.',
  },
  {
    label: 'FOLLOW-UP TOUCHES',
    value: 'Multi-Channel',
    desc: 'SMS, email, and voicemail drops work together in automated sequences designed to convert leads who don\'t respond immediately.',
  },
  {
    label: 'HUMAN INVOLVEMENT',
    value: 'Zero',
    desc: 'From first contact to booked call, the entire qualification process is handled by AI. You only step in to close.',
  },
]

export default function AISection() {
  const section = {
    padding: '100px 24px',
    background: 'rgba(13, 21, 53, 0.35)',
    borderTop: '1px solid rgba(58, 123, 213, 0.1)',
    borderBottom: '1px solid rgba(58, 123, 213, 0.1)',
  }

  const inner = {
    maxWidth: 1100,
    margin: '0 auto',
  }

  const topRow = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    alignItems: 'center',
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
    marginBottom: 20,
  }

  const accent = { color: '#3a7bd5' }

  const desc = {
    fontSize: 16,
    color: '#8a9bc4',
    lineHeight: 1.75,
  }

  const terminalBox = {
    background: '#060b1a',
    border: '1px solid rgba(58, 123, 213, 0.2)',
    borderRadius: 8,
    overflow: 'hidden',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const terminalHeader = {
    padding: '10px 16px',
    borderBottom: '1px solid rgba(58, 123, 213, 0.15)',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  }

  const terminalDot = (color) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: color,
  })

  const terminalTitle = {
    fontSize: 11,
    color: '#8a9bc4',
    letterSpacing: '1px',
    marginLeft: 8,
  }

  const terminalBody = {
    padding: '24px',
    fontSize: 12,
    lineHeight: 2,
  }

  const tLine = (color = '#8a9bc4') => ({
    color,
    display: 'block',
  })

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 1,
    background: 'rgba(58, 123, 213, 0.1)',
    border: '1px solid rgba(58, 123, 213, 0.12)',
    borderRadius: 8,
    overflow: 'hidden',
  }

  const card = {
    padding: '32px 28px',
    background: '#090f26',
  }

  const cardLabel = {
    fontSize: 10,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#3a7bd5',
    letterSpacing: '2px',
    marginBottom: 12,
    display: 'block',
  }

  const cardValue = {
    fontSize: 22,
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '-0.5px',
    marginBottom: 12,
    fontFamily: "'Share Tech Mono', monospace",
  }

  const cardDesc = {
    fontSize: 14,
    color: '#8a9bc4',
    lineHeight: 1.65,
  }

  return (
    <section id="ai" style={section}>
      <div style={inner}>
        <div style={topRow}>
          <div>
            <p style={eyebrow}>Powered by AI</p>
            <h2 style={h2}>The Engine Behind<br /><span style={accent}>Every Lead.</span></h2>
            <p style={desc}>
              Most agencies hand you leads and walk away. DigiGrowth runs the entire process — including an AI system that contacts, qualifies, and nurtures every lead from the moment they respond to your ad. No manual follow-up. No leads falling through the cracks. No delays.
            </p>
          </div>
          <div style={terminalBox}>
            <div style={terminalHeader}>
              <span style={terminalDot('#ff5f57')} />
              <span style={terminalDot('#febc2e')} />
              <span style={terminalDot('#28c840')} />
              <span style={terminalTitle}>digigrowth — lead_agent.ai</span>
            </div>
            <div style={terminalBody}>
              <span style={tLine('#8a9bc4')}>[00:00:00] New lead detected — Sarah M.</span>
              <span style={tLine('#14c882')}>[00:00:03] AI agent initialized</span>
              <span style={tLine('#3a7bd5')}>[00:00:08] SMS sent → "Hey Sarah, saw you..."</span>
              <span style={tLine('#8a9bc4')}>[00:02:14] Lead replied — interest confirmed</span>
              <span style={tLine('#3a7bd5')}>[00:02:16] AI qualifying sequence triggered</span>
              <span style={tLine('#8a9bc4')}>[00:04:51] Objection handled → budget</span>
              <span style={tLine('#14c882')}>[00:07:33] Appointment booked ✓</span>
              <span style={tLine('#8a9bc4')}>[00:07:33] Calendar updated — no human involved</span>
            </div>
          </div>
        </div>
        <div style={grid}>
          {features.map(f => (
            <div key={f.label} style={card}>
              <span style={cardLabel}>{f.label}</span>
              <div style={cardValue}>{f.value}</div>
              <div style={cardDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
