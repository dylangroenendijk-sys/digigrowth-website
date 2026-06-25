export default function Logo({ size = 30 }) {
  const id = 'lg'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${id}g1`} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3a7bd5" />
            <stop offset="100%" stopColor="#14c882" />
          </linearGradient>
          <linearGradient id={`${id}g2`} x1="0" y1="32" x2="32" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3a7bd5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#14c882" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Background */}
        <rect width="32" height="32" rx="8" fill={`url(#${id}g1)`} />
        <rect width="32" height="32" rx="8" fill={`url(#${id}g2)`} />
        {/* Chart line */}
        <path
          d="M6 22 L11 15 L17 18.5 L23 10"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.9"
        />
        {/* Arrow head */}
        <path
          d="M20 9 L23 10 L22 13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.9"
        />
        {/* Dots on line */}
        <circle cx="11" cy="15" r="1.5" fill="white" fillOpacity="0.7" />
        <circle cx="17" cy="18.5" r="1.5" fill="white" fillOpacity="0.7" />
      </svg>

      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: size === 30 ? 19 : 16,
        fontWeight: 700,
        letterSpacing: '-0.4px',
        color: '#fff',
        lineHeight: 1,
      }}>
        Digi<span style={{
          background: 'linear-gradient(135deg, #5a96f0, #14c882)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Growth</span>
      </span>
    </div>
  )
}
