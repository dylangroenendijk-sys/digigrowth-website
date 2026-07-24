import logoWordmark from '../assets/logo-wordmark.png'

export default function Logo({ size = 30 }) {
  return (
    <img
      src={logoWordmark}
      alt="DigiGrowth"
      style={{ height: size, width: 'auto', display: 'block' }}
    />
  )
}
