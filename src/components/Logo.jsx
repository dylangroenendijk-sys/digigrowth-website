export default function Logo({ size = 30 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

      {/* Icon mark */}
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <defs>
          <linearGradient id="dg-g" x1="10" y1="70" x2="70" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#5a96f0" />
            <stop offset="60%"  stopColor="#3a7bd5" />
            <stop offset="100%" stopColor="#14c882" />
          </linearGradient>
          <linearGradient id="dg-d" x1="10" y1="70" x2="70" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#3a7bd5" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#14c882" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="72" height="72" rx="18"
          stroke="url(#dg-g)" strokeWidth="1.8" fill="url(#dg-d)" />
        <polyline points="14,60 31.7,32.5 43.6,50.8 66,16"
          fill="none" stroke="url(#dg-g)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="51.8,16 66,16 66,38"
          fill="none" stroke="url(#dg-g)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
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
