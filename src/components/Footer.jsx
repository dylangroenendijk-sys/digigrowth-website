export default function Footer() {
  const footer = {
    padding: '48px 24px',
    borderTop: '1px solid rgba(58, 123, 213, 0.12)',
  }

  const inner = {
    maxWidth: 1100,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 16,
  }

  const logo = {
    fontSize: 20,
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '-0.5px',
  }

  const accent = { color: '#3a7bd5' }

  const copy = {
    fontSize: 13,
    color: '#8a9bc4',
  }

  const email = {
    fontSize: 14,
    color: '#8a9bc4',
    transition: 'color 0.2s',
    cursor: 'pointer',
  }

  return (
    <footer style={footer}>
      <div style={inner}>
        <span style={logo}>Digi<span style={accent}>Growth</span></span>
        <span style={copy}>© {new Date().getFullYear()} DigiGrowth LLC. All rights reserved.</span>
        <a
          href="mailto:dylanrg@digigrowthllc.com"
          style={email}
          onMouseEnter={e => (e.currentTarget.style.color = '#3a7bd5')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8a9bc4')}
        >
          dylanrg@digigrowthllc.com
        </a>
      </div>
    </footer>
  )
}
