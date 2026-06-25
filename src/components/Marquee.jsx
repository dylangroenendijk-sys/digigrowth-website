const items = [
  'META ADS MANAGEMENT',
  'AI LEAD QUALIFICATION',
  'CALENDAR AUTOMATION',
  'SMS + EMAIL SEQUENCES',
  'DONE FOR YOU',
  '24/7 AI FOLLOW-UP',
  'CLIENT ACQUISITION',
  'ZERO MANUAL WORK',
]

export default function Marquee() {
  const outer = {
    overflow: 'hidden',
    borderTop: '1px solid rgba(58,123,213,0.12)',
    borderBottom: '1px solid rgba(58,123,213,0.12)',
    padding: '16px 0',
    background: 'rgba(10, 18, 40, 0.5)',
    position: 'relative',
    zIndex: 2,
  }

  const fadeLeft = {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 120,
    background: 'linear-gradient(90deg, #060c1f, transparent)',
    zIndex: 3,
    pointerEvents: 'none',
  }

  const fadeRight = {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: 120,
    background: 'linear-gradient(-90deg, #060c1f, transparent)',
    zIndex: 3,
    pointerEvents: 'none',
  }

  const track = {
    display: 'flex',
    gap: 0,
    animation: 'marquee 28s linear infinite',
    width: 'max-content',
  }

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    padding: '0 32px',
    fontSize: 11,
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '2.5px',
    color: '#8a9bc4',
    whiteSpace: 'nowrap',
  }

  const dotStyle = {
    width: 4,
    height: 4,
    borderRadius: '50%',
    background: '#3a7bd5',
    flexShrink: 0,
  }

  const allItems = [...items, ...items]

  return (
    <div style={outer}>
      <div style={fadeLeft} />
      <div style={fadeRight} />
      <div style={track}>
        {allItems.map((item, i) => (
          <div key={i} style={itemStyle}>
            <span style={dotStyle} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
