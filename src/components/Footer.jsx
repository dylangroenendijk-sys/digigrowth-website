import Logo from './Logo'

const CALENDLY_URL = 'https://calendly.com/dylanrg-digigrowthllc/30min'
const PRIVACY_URL = 'https://digigrowth-brain-production.up.railway.app/privacy'
const TERMS_URL = 'https://digigrowth-brain-production.up.railway.app/terms'

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dylanreece16/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61560130367258',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M15 8.5h2.5V5.2h-2.7c-2.6 0-4.3 1.7-4.3 4.3v2.1H8v3.3h2.5V21H14v-6.1h2.5l.5-3.3H14V9.7c0-.8.4-1.2 1-1.2Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@DylanReece16',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
        <path d="M10.5 9.7v4.6l4-2.3Z" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

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

  const left = { display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }

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

  const socialRow = {
    display: 'flex',
    gap: 14,
  }

  const socialIcon = {
    color: '#4a5a7c',
    transition: 'color 0.2s',
    display: 'flex',
  }

  const legalRow = {
    display: 'flex',
    gap: 18,
  }

  const legalLink = {
    fontSize: 11,
    color: '#4a5a7c',
    transition: 'color 0.2s',
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '0.3px',
  }

  return (
    <footer style={footer}>
      <div style={inner} className="footer-inner">
        <div style={left} className="footer-block">
          <Logo size={24} />
          <span style={tagline}>Done-For-You Digital Growth</span>
          <span style={copy}>© {new Date().getFullYear()} DigiGrowth LLC</span>
        </div>
        <div style={rightLinks} className="footer-block">
          <div style={socialRow}>
            {socialLinks.map(s => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={socialIcon}
                onMouseEnter={e => (e.currentTarget.style.color = '#3a7bd5')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a5a7c')}
              >
                {s.icon}
              </a>
            ))}
          </div>
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
          <div style={legalRow}>
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={legalLink}
              onMouseEnter={e => (e.currentTarget.style.color = '#8a9bc4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a5a7c')}
            >
              Privacy Policy
            </a>
            <a
              href={TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={legalLink}
              onMouseEnter={e => (e.currentTarget.style.color = '#8a9bc4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a5a7c')}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
