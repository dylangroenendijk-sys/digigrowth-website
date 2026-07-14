const proofPoints = [
  { title: 'Built, not bought', desc: 'The entire automation stack is self-built — not templated software resold at a markup.' },
  { title: 'Direct access', desc: "You're talking to the person running your account — not a rep reading from a script." },
  { title: 'Guarantee-backed', desc: '$5,000–$10,000 in new monthly business, guaranteed.' },
]

const CALENDLY_URL = 'https://calendly.com/dylanrg-digigrowthllc/30min'

export default function About() {
  const section = {
    padding: 'clamp(64px, 14vw, 120px) 24px',
    position: 'relative',
  }

  const bgStripe = {
    position: 'absolute',
    inset: 0,
    background: 'rgba(10, 18, 40, 0.5)',
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
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 800,
    letterSpacing: '-1px',
    color: '#fff',
    lineHeight: 1.15,
    marginBottom: 22,
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const desc = {
    fontSize: 16,
    color: '#8a9bc4',
    lineHeight: 1.8,
  }

  // Photo slot: once a headshot exists, swap this line for an <img> next to `name`
  // and shrink `desc`'s maxWidth to make room — no other layout changes needed.
  const name = {
    marginTop: 24,
    fontSize: 14,
    fontWeight: 700,
    color: '#fff',
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const role = {
    fontSize: 12,
    color: '#4a5a7c',
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '0.5px',
    marginTop: 2,
  }

  const card = {
    padding: 'clamp(28px, 5vw, 40px)',
    background: 'rgba(9, 15, 38, 0.8)',
    border: '1px solid rgba(58, 123, 213, 0.18)',
    borderRadius: 16,
    backdropFilter: 'blur(16px)',
  }

  const list = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 22,
  }

  const listItem = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 14,
  }

  const check = {
    width: 22,
    height: 22,
    background: 'rgba(20, 200, 130, 0.15)',
    border: '1px solid rgba(20, 200, 130, 0.3)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    color: '#14c882',
    flexShrink: 0,
    fontWeight: 700,
    marginTop: 1,
  }

  const itemTitle = {
    fontSize: 15,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 4,
  }

  const itemDesc = {
    fontSize: 13,
    color: '#8a9bc4',
    lineHeight: 1.6,
  }

  const ctaLink = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 32,
    fontSize: 14,
    fontWeight: 600,
    color: '#3a7bd5',
    fontFamily: "'Share Tech Mono', monospace",
    transition: 'color 0.2s',
  }

  return (
    <section style={section}>
      <div style={bgStripe} />
      <div style={inner}>
        <div style={topRow}>
          <div>
            <p style={eyebrow}>Who's Running This</p>
            <h2 style={h2}>One Person.<br />No Agency Overhead.</h2>
            <p style={desc}>
              I'm Dylan, founder of DigiGrowth. I didn't come from a marketing agency — I taught myself
              AI automation, ad systems, and outreach engineering from scratch because I was tired of
              watching businesses lose leads to slow follow-up and manual busywork. DigiGrowth is the
              system I built to fix that: the same AI stack running your ads, qualifying your leads, and
              following up in under 60 seconds is the one I use to run my own business. I'm not reselling
              software or managing a bench of account reps — it's me, the system, and a guarantee I stand
              behind personally.
            </p>
            <div style={name}>Dylan Groenendijk</div>
            <div style={role}>FOUNDER, DIGIGROWTH</div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={ctaLink}
              onMouseEnter={e => (e.currentTarget.style.color = '#5a96f0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#3a7bd5')}
            >
              Book a call and talk to the person actually running it →
            </a>
          </div>

          <div style={card}>
            <ul style={list}>
              {proofPoints.map(p => (
                <li key={p.title} style={listItem}>
                  <span style={check}>✓</span>
                  <div>
                    <div style={itemTitle}>{p.title}</div>
                    <div style={itemDesc}>{p.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
