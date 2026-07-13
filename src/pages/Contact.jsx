import { useState } from 'react'
import Footer from '../components/Footer'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvdlwvq'
const CALENDLY_URL = 'https://calendly.com/dylanrg-digigrowthllc/30min'
const PRIVACY_URL = 'https://digigrowth-brain-production.up.railway.app/privacy'
const TERMS_URL = 'https://digigrowth-brain-production.up.railway.app/terms'

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '', smsConsent: false })
  const [status, setStatus] = useState('idle')

  const handleChange = e => {
    const { name, type, checked, value } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', business: '', email: '', phone: '', message: '', smsConsent: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const page = {
    minHeight: '100vh',
    paddingTop: 100,
    background: 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(58,123,213,0.12) 0%, transparent 65%)',
  }

  const inner = {
    maxWidth: 660,
    margin: '0 auto',
    padding: '60px 24px 100px',
  }

  const eyebrow = {
    fontSize: 11,
    fontWeight: 500,
    color: '#3a7bd5',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const h1 = {
    fontSize: 'clamp(26px, 4vw, 40px)',
    fontWeight: 700,
    letterSpacing: '-0.8px',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  }

  const sub = {
    fontSize: 15,
    color: '#8a9bc4',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 1.65,
  }

  const calendlyLink = {
    display: 'block',
    textAlign: 'center',
    marginBottom: 48,
    fontSize: 14,
    color: '#3a7bd5',
    fontFamily: "'Share Tech Mono', monospace",
    transition: 'color 0.2s',
  }

  const card = {
    padding: 'clamp(28px, 6vw, 44px) clamp(20px, 5vw, 40px)',
    background: 'rgba(13, 21, 53, 0.7)',
    border: '1px solid rgba(58, 123, 213, 0.18)',
    borderRadius: 8,
    backdropFilter: 'blur(16px)',
  }

  const row = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 16,
  }

  const group = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 18,
  }

  const label = {
    fontSize: 10,
    fontWeight: 500,
    color: '#8a9bc4',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const input = {
    padding: '11px 14px',
    background: 'rgba(9, 15, 38, 0.8)',
    border: '1px solid rgba(58, 123, 213, 0.18)',
    borderRadius: 6,
    color: '#e8edf8',
    fontSize: 14,
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
  }

  const textarea = { ...input, minHeight: 120, resize: 'vertical' }

  const btn = {
    width: '100%',
    padding: '14px',
    background: status === 'sending' ? 'rgba(58,123,213,0.5)' : '#3a7bd5',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 600,
    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    marginTop: 8,
    fontFamily: 'inherit',
    letterSpacing: '0.3px',
  }

  const successBox = {
    textAlign: 'center',
    padding: '48px 24px',
  }

  const successTitle = {
    fontSize: 22,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 12,
  }

  const successSub = {
    fontSize: 14,
    color: '#8a9bc4',
    lineHeight: 1.65,
    marginBottom: 24,
  }

  const successBtn = {
    display: 'inline-block',
    padding: '12px 28px',
    background: '#3a7bd5',
    color: '#fff',
    borderRadius: 6,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: 'none',
  }

  const errorMsg = {
    marginTop: 12,
    fontSize: 13,
    color: '#f87171',
    textAlign: 'center',
    fontFamily: "'Share Tech Mono', monospace",
  }

  const consentRow = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 18,
  }

  const consentCheckbox = {
    marginTop: 3,
    width: 15,
    height: 15,
    flexShrink: 0,
    accentColor: '#3a7bd5',
  }

  const consentLabel = {
    fontSize: 12,
    color: '#8a9bc4',
    lineHeight: 1.6,
  }

  const consentLink = { color: '#3a7bd5' }

  const focusStyle = e => (e.target.style.borderColor = 'rgba(58,123,213,0.5)')
  const blurStyle = e => (e.target.style.borderColor = 'rgba(58,123,213,0.18)')

  return (
    <div style={page}>
      <div style={inner}>
        <p style={eyebrow}>Free Strategy Call</p>
        <h1 style={h1}>Let's Build Your Pipeline</h1>
        <p style={sub}>Tell us about your business and we'll put together a custom client acquisition strategy — no cost, no obligation.</p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={calendlyLink}
          onMouseEnter={e => (e.currentTarget.style.color = '#5a96f0')}
          onMouseLeave={e => (e.currentTarget.style.color = '#3a7bd5')}
        >
          Prefer to book directly? Schedule on Calendly →
        </a>

        <div style={card}>
          {status === 'success' ? (
            <div style={successBox}>
              <div style={successTitle}>We'll be in touch.</div>
              <div style={successSub}>We'll review your info and reach out within 24 hours to schedule your strategy call.</div>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={successBtn}>
                Or book now on Calendly →
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={row}>
                <div style={group}>
                  <label style={label}>Your Name</label>
                  <input style={input} name="name" value={form.name} onChange={handleChange} onFocus={focusStyle} onBlur={blurStyle} placeholder="John Smith" required />
                </div>
                <div style={group}>
                  <label style={label}>Business Name</label>
                  <input style={input} name="business" value={form.business} onChange={handleChange} onFocus={focusStyle} onBlur={blurStyle} placeholder="Acme Co." required />
                </div>
              </div>
              <div style={row}>
                <div style={group}>
                  <label style={label}>Email</label>
                  <input style={input} type="email" name="email" value={form.email} onChange={handleChange} onFocus={focusStyle} onBlur={blurStyle} placeholder="john@acmeco.com" required />
                </div>
                <div style={group}>
                  <label style={label}>Phone</label>
                  <input style={input} type="tel" name="phone" value={form.phone} onChange={handleChange} onFocus={focusStyle} onBlur={blurStyle} placeholder="(555) 000-0000" required />
                </div>
              </div>
              <div style={group}>
                <label style={label}>Tell us about your business</label>
                <textarea style={textarea} name="message" value={form.message} onChange={handleChange} onFocus={focusStyle} onBlur={blurStyle} placeholder="What does your business do? What's your biggest challenge with getting new clients?" />
              </div>
              <div style={consentRow}>
                <input
                  style={consentCheckbox}
                  type="checkbox"
                  id="smsConsent"
                  name="smsConsent"
                  checked={form.smsConsent}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="smsConsent" style={consentLabel}>
                  I agree to receive SMS text messages from DigiGrowth, LLC at the phone number
                  provided regarding my inquiry. Message frequency varies. Msg &amp; data rates may
                  apply. Reply STOP to opt out, HELP for help. See our{' '}
                  <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" style={consentLink}>Privacy Policy</a>
                  {' '}and{' '}
                  <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" style={consentLink}>Terms of Service</a>.
                </label>
              </div>
              <button
                type="submit"
                style={btn}
                disabled={status === 'sending'}
                onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.background = '#2d66b8' } }}
                onMouseLeave={e => { e.currentTarget.style.background = '#3a7bd5' }}
              >
                {status === 'sending' ? 'Sending...' : 'Book My Free Strategy Call'}
              </button>
              {status === 'error' && <div style={errorMsg}>Something went wrong — email us at dylanrg@digigrowthllc.com</div>}
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
