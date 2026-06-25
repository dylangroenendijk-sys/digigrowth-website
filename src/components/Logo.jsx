export default function Logo({ size = 30 }) {
  // Everything lives in one SVG so text and trendline share the same coordinate space.
  // ViewBox is fixed at 144×38; size prop scales the rendered pixel dimensions.
  const W = size * 4.8
  const H = size * 1.27

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

      {/* Diamond icon */}
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
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
              values="0 0 0 0 0.25  0 0 0 0 0.55  0 0 0 0 1  0 0 0 0.5 0" result="glow" />
            <feMerge><feMergeNode in="glow" /><feMergeNode in="SourceGraphic" /></feMerge>
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

      {/* Wordmark + trendline — single SVG, one coordinate system */}
      <svg
        width={W}
        height={H}
        viewBox="0 0 144 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Text gradient for "Growth" */}
          <linearGradient id="wm-g" x1="32" y1="0" x2="132" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3a7bd5" />
          </linearGradient>
          {/* Trendline gradient */}
          <linearGradient id="tl-g" x1="0" y1="0" x2="144" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#3a7bd5" stopOpacity="0.15" />
            <stop offset="50%"  stopColor="#3a7bd5" />
            <stop offset="100%" stopColor="#3bf0ff" />
          </linearGradient>
          {/* Glow for trendline */}
          <filter id="tl-glow" x="-5%" y="-120%" width="110%" height="340%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.8" result="b" />
            <feColorMatrix in="b" type="matrix"
              values="0 0 0 0 0.23  0 0 0 0 0.94  0 0 0 0 1  0 0 0 0.5 0" result="g" />
            <feMerge><feMergeNode in="g" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Wordmark: "Digi" light + "Growth" gradient */}
        <text
          x="0" y="23"
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="19"
          letterSpacing="-0.8"
        >
          <tspan fontWeight="500" fill="#bcd4ff">Digi</tspan>
          <tspan fontWeight="700" fill="url(#wm-g)">Growth</tspan>
        </text>

        {/* Trendline: flat → rising, bracket corner exactly at (128, 15) */}
        <path
          d="M0,31 L70,31 L93,27 L128,15"
          stroke="url(#tl-g)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#tl-glow)"
        />

        {/* Bracket: corner at (128,15), arms 13 units each — perfectly equal */}
        <path
          d="M128,15 L141,15 L141,28"
          stroke="url(#tl-g)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#tl-glow)"
        />
      </svg>
    </div>
  )
}
