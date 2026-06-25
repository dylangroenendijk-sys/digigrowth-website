export default function Logo({ size = 30 }) {
  const textSize = size * 0.62

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

      {/* Diamond icon */}
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dg-g" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="dg-d" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#3a7bd5" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="dg-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
            <feColorMatrix in="blur" type="matrix"
              values="0 0 0 0 0.25  0 0 0 0 0.55  0 0 0 0 1  0 0 0 0.5 0"
              result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path d="M40,6 L76,42 L40,78 L4,42 Z"
          stroke="url(#dg-g)" strokeWidth="2.2" strokeLinejoin="round" fill="url(#dg-d)" />
        <path d="M27,71 L27,38 L23,38 L30,25 L37,38 L33,38 L33,71 Z"
          fill="url(#dg-g)" opacity="0.82" />
        <path d="M37,71 L37,18 L33,18 L40,2 L47,18 L43,18 L43,71 Z"
          fill="url(#dg-g)" filter="url(#dg-glow)" />
        <path d="M47,71 L47,38 L43,38 L50,25 L57,38 L53,38 L53,71 Z"
          fill="url(#dg-g)" opacity="0.82" />
      </svg>

      {/* Text + trendline — constrained to text width */}
      <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: textSize,
          fontWeight: 700,
          letterSpacing: '-0.4px',
          color: '#fff',
          lineHeight: 1,
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}>
          Digi<span style={{
            background: 'linear-gradient(90deg, #60a5fa, #3a7bd5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Growth</span>
        </span>

        {/* Trendline — stretches to match text width exactly */}
        <svg
          style={{ width: '100%', display: 'block' }}
          height={Math.round(size * 0.36)}
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="tl-g" x1="0" y1="0" x2="100" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%"   stopColor="#3a7bd5" stopOpacity="0.25" />
              <stop offset="55%"  stopColor="#3a7bd5" />
              <stop offset="100%" stopColor="#3bf0ff" />
            </linearGradient>
            <filter id="tl-glow" x="-5%" y="-120%" width="110%" height="340%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="b" />
              <feColorMatrix in="b" type="matrix"
                values="0 0 0 0 0.23  0 0 0 0 0.94  0 0 0 0 1  0 0 0 0.45 0" result="g" />
              <feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>
          {/* Line rises to x=88 which is the bracket corner */}
          <path d="M0,8.5 L42,8.5 L62,6 L88,1"
            stroke="url(#tl-g)" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round"
            filter="url(#tl-glow)"
          />
          {/* Bracket: corner at (88,1), right arm to 97, down arm to 9 — equal 9-unit arms */}
          <path d="M88,1 L97,1 L97,9"
            stroke="url(#tl-g)" strokeWidth="1.6"
            strokeLinecap="round" strokeLinejoin="round"
            filter="url(#tl-glow)"
          />
        </svg>
      </div>
    </div>
  )
}
