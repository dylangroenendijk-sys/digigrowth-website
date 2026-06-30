import Logo from './Logo'

const CALENDLY_URL = 'https://calendly.com/dylanrg-digigrowthllc/30min'

export default function Footer() {
  const footer = {
    padding: '52px 32px',
    borderTop: '1px solid rgba(58, 123, 213, 0.08)',
  }

  const inner = {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 24,
  }

  const left = { display: 'flex', flexDirection: 'column', gap: 12 }

  const tagline = {
    fontSize: 12,
    color: '#4a5a7c',
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '1px',
  }

  const copy = {
    fontSize: 12,
    color: '#2e3d5c',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const rightLinks = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 10,
  }

  const emailLink = {
    fontSize: 13,
    color: '#4a5a7c',
    transition: 'color 0.2s',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const bookLink = {
    fontSize: 13,
    color: '#3a7bd5',
    transition: 'color 0.2s',
    fontFamily: "'Share Tech Mono', monospace",
  }

  return (
    <footer style={footer}>
      <div style={inner}>
        <div style={left}>
          <Logo size={24} />
          <span style={tagline}>Done-For-You Digital Growth</span>
          <span style={copy}>© {new Date().getFullYear()} DigiGrowth LLC</span>
        </div>
        <div style={rightLinks}>
          <a
            href="mailto:dylanrg@digigrowthllc.com"
            style={emailLink}
            onMouseEnter={e => (e.currentTarget.style.color = '#8a9bc4')}
            onMouseLeave={e => (e.currentTarget.style.color = '#4a5a7c')}
          >
            dylanrg@digigrowthllc.com
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={bookLink}
            onMouseEnter={e => (e.currentTarget.style.color = '#5a96f0')}
            onMouseLeave={e => (e.currentTarget.style.color = '#3a7bd5')}
          >
            Book a Free Strategy Call →
          </a>
        </div>
      </div>
    </footer>
  )
}
