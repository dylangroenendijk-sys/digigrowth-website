import { useEffect, useRef, useState } from 'react'

const terminalLines = [
  { delay: 0,    color: '#4a5a7c', text: '[00:00:00] New lead detected — James R.' },
  { delay: 600,  color: '#14c882', text: '[00:00:03] AI agent initialized' },
  { delay: 1200, color: '#3a7bd5', text: '[00:00:08] SMS sent → "Hey James, saw you..."' },
  { delay: 2000, color: '#4a5a7c', text: '[00:02:14] Lead replied — interest confirmed' },
  { delay: 2600, color: '#3a7bd5', text: '[00:02:16] Qualifying sequence triggered' },
  { delay: 3400, color: '#4a5a7c', text: '[00:04:51] Objection handled → pricing' },
  { delay: 4200, color: '#14c882', text: '[00:07:33] Appointment booked ✓' },
  { delay: 4800, color: '#4a5a7c', text: '[00:07:33] CRM updated — no human involved' },
]

const features = [
  { label: 'RESPONSE TIME', value: '< 60 sec', desc: 'AI contacts every lead within 60 seconds of opt-in, day or night.' },
  { label: 'AVAILABILITY',  value: '24 / 7',   desc: 'While you sleep, the AI is qualifying leads and booking appointments.' },
  { label: 'FOLLOW-UP',     value: 'Multi-Channel', desc: 'SMS, email, and voicemail sequences work together to convert cold leads.' },
  { label: 'HUMAN INPUT',   value: 'Zero',     desc: 'From first touch to booked call — fully automated, no manual work.' },
]

function AnimatedTerminal() {
  const [visible, setVisible] = useState([])
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisible(v => [...v, i]), line.delay)
    })
  }, [started])

  const box = {
    background: '#040810',
    border: '1px solid rgba(58,123,213,0.2)',
    borderRadius: 10,
    overflow: 'hidden',
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: 12,
    lineHeight: 1.8,
    boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(58,123,213,0.05)',
  }

  const header = {
    padding: '12px 18px',
    borderBottom: '1px solid rgba(58,123,213,0.12)',
    display: 'flex',
    alignItems: 'center',
    gap: 7,
    background: 'rgba(10,18,40,0.6)',
  }

  const dot = (c) => ({ width: 10, height: 10, borderRadius: '50%', background: c })

  const title = {
    fontSize: 11,
    color: '#4a5a7c',
    letterSpacing: '1px',
    marginLeft: 10,
  }

  const body = {
    padding: '24px 22px',
    minHeight: 220,
  }

  const cursor = {
    display: 'inline-block',
    width: 8,
    height: 14,
    background: '#3a7bd5',
    marginLeft: 4,
    verticalAlign: 'middle',
    animation: 'blink 1s step-end infinite',
  }

  return (
    <div ref={ref} style={box}>
      <div style={header}>
        <span style={dot('#ff5f57')} />
        <span style={dot('#febc2e')} />
        <span style={dot('#28c840')} />
        <span style={title}>digigrowth — lead_agent.ai</span>
      </div>
      <div style={body}>
        {terminalLines.map((line, i) => (
          visible.includes(i) ? (
            <div key={i} style={{ color: line.color, animation: 'terminal-line 0.3s ease both' }}>
              {line.text}
            </div>
          ) : null
        ))}
        {visible.length > 0 && visible.length < terminalLines.length && (
          <span style={cursor} />
        )}
      </div>
    </div>
  )
}

export default function AISection() {
  const section = {
    padding: 'clamp(64px, 14vw, 120px) 24px',
    position: 'relative',
  }

  const bgStripe = {
    position: 'absolute',
    inset: 0,
    background: '#060c1f',
    borderTop: '1px solid rgba(58,123,213,0.08)',
    borderBottom: '1px solid rgba(58,123,213,0.08)',
  }

  const inner = {
    maxWidth: 1100,
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  }

  const topRow = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'clamp(32px, 6vw, 72px)',
    alignItems: 'center',
    marginBottom: 'clamp(40px, 8vw, 72px)',
  }

  const eyebrow = {
    fontSize: 11,
    fontWeight: 600,
    color: '#14c882',
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
    marginBottom: 22,
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const gradientText = {
    background: 'linear-gradient(135deg, #5a96f0, #14c882)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  const desc = {
    fontSize: 16,
    color: '#8a9bc4',
    lineHeight: 1.8,
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 1,
    borderRadius: 10,
    overflow: 'hidden',
    border: '1px solid rgba(58,123,213,0.1)',
  }

  const card = {
    padding: '28px 24px',
    background: 'rgba(6, 12, 31, 0.9)',
    border: '1px solid rgba(58,123,213,0.1)',
    transition: 'background 0.2s',
  }

  const cardLabel = {
    fontSize: 9,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#3a7bd5',
    letterSpacing: '2.5px',
    marginBottom: 10,
    display: 'block',
    opacity: 0.8,
  }

  const cardValue = {
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '-0.3px',
    marginBottom: 10,
    fontFamily: "'Share Tech Mono', monospace",
  }

  const cardDesc = {
    fontSize: 13,
    color: '#8a9bc4',
    lineHeight: 1.6,
  }

  return (
    <section id="ai" style={section}>
      <div style={bgStripe} />
      <div style={inner}>
        <div style={topRow}>
          <div>
            <p style={eyebrow}>Always On, Always Working</p>
            <h2 style={h2}>
              The Engine Behind<br />
              <span style={gradientText}>Every Lead.</span>
            </h2>
            <p style={desc}>
              Most agencies hand you leads and walk away. DigiGrowth runs the entire process with an AI system that contacts, qualifies, and nurtures every lead — whether they just came in from an ad or have been sitting cold in your CRM for months. No manual follow-up. No leads falling through the cracks. No delays.
            </p>
          </div>
          <AnimatedTerminal />
        </div>
        <div style={grid}>
          {features.map((f) => (
            <div
              key={f.label}
              style={card}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(12,22,50,0.95)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(6,12,31,0.9)')}
            >
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
