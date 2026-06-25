import { Link } from 'react-router-dom'

const included = [
  'Meta ad campaign management',
  'Ad creative & copywriting',
  'Automated SMS + email follow-up',
  'Lead qualification system',
  'Calendar booking automation',
  'Monthly strategy call',
  'Performance reporting',
  'Cancel anytime',
]

export default function Pricing() {
  const section = {
    padding: '100px 24px',
    background: 'rgba(13, 21, 53, 0.4)',
  }

  const inner = {
    maxWidth: 600,
    margin: '0 auto',
    textAlign: 'center',
  }

  const eyebrow = {
    fontSize: 13,
    fontWeight: 600,
    color: '#14c882',
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
    marginBottom: 48,
  }

  const card = {
    padding: '48px 44px',
    background: 'rgba(9, 15, 38, 0.8)',
    border: '1px solid rgba(58, 123, 213, 0.3)',
    borderRadius: 20,
    backdropFilter: 'blur(16px)',
    position: 'relative',
    overflow: 'hidden',
  }

  const glow = {
    position: 'absolute',
    top: -60,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 300,
    height: 300,
    background: 'radial-gradient(circle, rgba(58,123,213,0.12) 0%, transparent 70%)',
    pointerEvents: 'none',
  }

  const planName = {
    fontSize: 14,
    fontWeight: 600,
    color: '#3a7bd5',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    marginBottom: 20,
  }

  const price = {
    fontSize: 64,
    fontWeight: 800,
    color: '#fff',
    letterSpacing: '-2px',
    lineHeight: 1,
  }

  const priceSub = {
    fontSize: 16,
    color: '#8a9bc4',
    marginTop: 8,
    marginBottom: 36,
  }

  const divider = {
    height: 1,
    background: 'rgba(58, 123, 213, 0.15)',
    margin: '36px 0',
  }

  const list = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    textAlign: 'left',
    marginBottom: 40,
  }

  const listItem = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    fontSize: 15,
    color: '#b0bfd8',
  }

  const check = {
    width: 20,
    height: 20,
    background: 'rgba(20, 200, 130, 0.15)',
    border: '1px solid rgba(20, 200, 130, 0.3)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    color: '#14c882',
    flexShrink: 0,
    fontWeight: 700,
  }

  const btn = {
    width: '100%',
    padding: '18px',
    background: '#3a7bd5',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
    letterSpacing: '0.2px',
  }

  const note = {
    fontSize: 13,
    color: '#8a9bc4',
    marginTop: 16,
  }

  return (
    <section id="pricing" style={section}>
      <div style={inner}>
        <p style={eyebrow}>Pricing</p>
        <h2 style={h2}>Simple, Transparent Pricing</h2>
        <div style={card}>
          <div style={glow} />
          <div style={planName}>Done-For-You Growth</div>
          <div style={price}>$1,500</div>
          <div style={priceSub}>per month + your ad spend</div>
          <div style={divider} />
          <ul style={list}>
            {included.map(item => (
              <li key={item} style={listItem}>
                <span style={check}>✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <button
              style={btn}
              onMouseEnter={e => { e.currentTarget.style.background = '#2d66b8'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(58,123,213,0.3)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#3a7bd5'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Book Your Free Strategy Call
            </button>
          </Link>
          <div style={note}>No commitment. Cancel anytime. Ad spend billed separately.</div>
        </div>
      </div>
    </section>
  )
}
