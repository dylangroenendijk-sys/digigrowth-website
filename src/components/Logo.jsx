export default function Logo({ size = 30 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

      {/* Diamond icon */}
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <defs>
          <linearGradient id="dg-g" x1="10" y1="70" x2="70" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#5a96f0" />
            <stop offset="60%"  stopColor="#3a7bd5" />
            <stop offset="100%" stopColor="#14c882" />
          </linearGradient>
          <linearGradient id="dg-d" x1="10" y1="70" x2="70" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#3a7bd5" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#14c882" stopOpacity="0.10" />
          </linearGradient>
          <filter id="dg-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2.2" result="blur" />
            <feColorMatrix in="blur" type="matrix"
              values="0 0 0 0 0.3  0 0 0 0 0.65  0 0 0 0 0.65  0 0 0 0.55 0" result="glow" />
            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path d="M40,5 L75,40 L40,75 L5,40 Z"
          stroke="url(#dg-g)" strokeWidth="1.8" strokeLinejoin="round" fill="url(#dg-d)" />
        <circle cx="24" cy="52" r="3.5" fill="url(#dg-g)" />
        <path d="M24,52 L54,28"
          stroke="url(#dg-g)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
          fill="none" filter="url(#dg-glow)" />
        <path d="M54,28 L54,36 M54,28 L46,28"
          stroke="url(#dg-g)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {/* Wordmark */}
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: size * 0.62,
        fontWeight: 700,
        letterSpacing: '-0.3px',
        lineHeight: 1,
      }}>
        <span style={{ fontWeight: 500, color: '#bcd4ff' }}>Digi</span>
        <span style={{
          background: 'linear-gradient(90deg, #5a96f0, #3a7bd5 55%, #14c882)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Growth</span>
      </span>
    </div>
  )
}
