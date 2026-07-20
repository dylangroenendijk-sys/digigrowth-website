const stats = [
  {
    value: '68%',
    label: 'AI ADOPTION',
    desc: 'of small businesses now use AI regularly — up from 48% just a year ago.',
    source: 'Intuit QuickBooks Small Business Insights, Apr 2025',
    url: 'https://quickbooks.intuit.com/r/small-business-data/april-2025-survey/',
  },
  {
    value: '91%',
    label: 'REVENUE IMPACT',
    desc: 'of small businesses using AI for marketing report it directly boosts revenue.',
    source: 'Salesforce Small & Medium Business Trends, 2025',
    url: 'https://www.salesforce.com/news/stories/smbs-ai-trends-2025/',
  },
  {
    value: '5-15 hrs',
    label: 'TIME SAVED',
    desc: 'saved every week on marketing tasks once AI handles the follow-up.',
    source: 'Forbes, "AI Cuts Costs, Adds 13 Hours For SMB Marketers"',
    url: 'https://www.forbes.com/sites/ronschmelzer/2025/07/20/new-study-ai-cuts-costs-adds-13-hours-for-smb-marketers/',
  },
  {
    value: '21x',
    label: 'SPEED TO LEAD',
    desc: 'more likely to qualify a lead when contacted within 5 minutes vs. 30.',
    source: 'MIT / InsideSales.com Lead Response Management Study',
    url: 'https://25649.fs1.hubspotusercontent-na2.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf',
  },
]

export default function SocialProof() {
  const section = {
    padding: 'clamp(64px, 14vw, 120px) 24px',
    maxWidth: 1100,
    margin: '0 auto',
  }

  const header = {
    textAlign: 'center',
    marginBottom: 64,
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
    marginBottom: 16,
    fontFamily: "'Space Grotesk', sans-serif",
  }

  const sub = {
    fontSize: 17,
    color: '#8a9bc4',
    maxWidth: 560,
    margin: '0 auto',
    lineHeight: 1.65,
  }

  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 20,
  }

  const card = {
    padding: '32px 26px',
    background: 'rgba(10, 18, 40, 0.7)',
    border: '1px solid rgba(58,123,213,0.1)',
    borderRadius: 12,
    backdropFilter: 'blur(16px)',
    transition: 'all 0.3s ease',
    cursor: 'default',
  }

  const gradientText = {
    background: 'linear-gradient(135deg, #5a96f0 0%, #14c882 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  }

  const value = {
    fontSize: 34,
    fontWeight: 800,
    letterSpacing: '-1px',
    marginBottom: 10,
    fontFamily: "'Share Tech Mono', monospace",
    ...gradientText,
  }

  const label = {
    fontSize: 10,
    fontFamily: "'Share Tech Mono', monospace",
    color: '#3a7bd5',
    letterSpacing: '2.5px',
    marginBottom: 14,
    display: 'block',
    opacity: 0.85,
  }

  const desc = {
    fontSize: 13,
    color: '#8a9bc4',
    lineHeight: 1.65,
    marginBottom: 18,
  }

  const source = {
    fontSize: 10,
    color: '#4a5a7c',
    fontFamily: "'Share Tech Mono', monospace",
    letterSpacing: '0.5px',
    textDecoration: 'none',
    transition: 'color 0.2s',
  }

  const footnote = {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 14,
    color: '#8a9bc4',
    lineHeight: 1.7,
  }

  return (
    <section style={section}>
      <div style={header}>
        <p style={eyebrow}>By The Numbers</p>
        <h2 style={h2}>The Data Behind<br />Digital-First Growth</h2>
        <p style={sub}>
          This isn't just a pitch — it's what's already happening across small businesses
          adopting AI-driven marketing and follow-up.
        </p>
      </div>
      <div style={grid}>
        {stats.map(s => (
          <div
            key={s.label}
            style={card}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(58,123,213,0.3)'
              el.style.background = 'rgba(15, 25, 60, 0.95)'
              el.style.transform = 'translateY(-4px)'
              el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = 'rgba(58,123,213,0.1)'
              el.style.background = 'rgba(10, 18, 40, 0.7)'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            <span style={label}>{s.label}</span>
            <div style={value}>{s.value}</div>
            <div style={desc}>{s.desc}</div>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={source}
              onMouseEnter={e => (e.currentTarget.style.color = '#8a9bc4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a5a7c')}
            >
              — {s.source}
            </a>
          </div>
        ))}
      </div>
      <p style={footnote}>
        Meanwhile, only 0.1% of businesses respond to a new lead within 5 minutes.
        DigiGrowth's AI responds in under 60 seconds — every time.
      </p>
    </section>
  )
}
