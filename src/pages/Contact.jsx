import { useState } from 'react'
import Footer from '../components/Footer'

// Replace YOUR_FORM_ID with your Formspree form ID after creating an account at formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

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
        setForm({ name: '', business: '', email: '', phone: '', message: '' })
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
    paddingBottom: 0,
    background: 'radial-gradient(ellipse 70% 50% at 50% -5%, rgba(58,123,213,0.14) 0%, transparent 65%)',
  }

  const inner = {
    maxWidth: 640,
    margin: '0 auto',
    padding: '60px 24px 100px',
  }

  const eyebrow = {
    fontSize: 13,
    fontWeight: 600,
    color: '#3a7bd5',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: 14,
    textAlign: 'center',
  }

  const h1 = {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 700,
    letterSpacing: '-0.8px',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  }

  const sub = {
    fontSize: 16,
    color: '#8a9bc4',
    textAlign: 'center',
    marginBottom: 52,
    lineHeight: 1.6,
  }

  const card = {
    padding: '44px 40px',
    background: 'rgba(13, 21, 53, 0.7)',
    border: '1px solid rgba(58, 123, 213, 0.2)',
    borderRadius: 20,
    backdropFilter: 'blur(16px)',
  }

  const row = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
  }

  const group = {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 20,
  }

  const label = {
    fontSize: 13,
    fontWeight: 500,
    color: '#8a9bc4',
    letterSpacing: '0.3px',
  }

  const input = {
    padding: '12px 16px',
    background: 'rgba(9, 15, 38, 0.8)',
    border: '1px solid rgba(58, 123, 213, 0.2)',
    borderRadius: 8,
    color: '#e8edf8',
    fontSize: 15,
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
  }

  const textarea = { ...input, minHeight: 120, resize: 'vertical' }

  const btn = {
    width: '100%',
    padding: '16px',
    background: status === 'sending' ? 'rgba(58,123,213,0.5)' : '#3a7bd5',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 600,
    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s',
    marginTop: 8,
    fontFamily: 'inherit',
  }

  const successBox = {
    textAlign: 'center',
    padding: '48px 24px',
  }

  const successIcon = { fontSize: 48, marginBottom: 20 }

  const successTitle = {
    fontSize: 24,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 12,
  }

  const successSub = {
    fontSize: 15,
    color: '#8a9bc4',
    lineHeight: 1.6,
  }

  const errorMsg = {
    marginTop: 12,
    fontSize: 14,
    color: '#f87171',
    textAlign: 'center',
  }

  const focusStyle = e => (e.target.style.borderColor = 'rgba(58,123,213,0.6)')
  const blurStyle = e => (e.target.style.borderColor = 'rgba(58,123,213,0.2)')

  return (
    <div style={page}>
      <div style={inner}>
        <p style={eyebrow}>Free Strategy Call</p>
        <h1 style={h1}>Let's Talk About Your Growth</h1>
        <p style={sub}>Tell us about your gym and we'll put together a custom client acquisition strategy — no cost, no obligation.</p>

        <div style={card}>
          {status === 'success' ? (
            <div style={successBox}>
              <div style={successIcon}>✅</div>
              <div style={successTitle}>We'll be in touch!</div>
              <div style={successSub}>Thanks for reaching out. We'll review your info and get back to you within 24 hours to schedule your strategy call.</div>
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
                  <input style={input} name="business" value={form.business} onChange={handleChange} onFocus={focusStyle} onBlur={blurStyle} placeholder="FitLife Gym" required />
                </div>
              </div>
              <div style={row}>
                <div style={group}>
                  <label style={label}>Email Address</label>
                  <input style={input} type="email" name="email" value={form.email} onChange={handleChange} onFocus={focusStyle} onBlur={blurStyle} placeholder="john@fitlifegym.com" required />
                </div>
                <div style={group}>
                  <label style={label}>Phone Number</label>
                  <input style={input} type="tel" name="phone" value={form.phone} onChange={handleChange} onFocus={focusStyle} onBlur={blurStyle} placeholder="(555) 000-0000" />
                </div>
              </div>
              <div style={group}>
                <label style={label}>Tell us about your gym</label>
                <textarea style={textarea} name="message" value={form.message} onChange={handleChange} onFocus={focusStyle} onBlur={blurStyle} placeholder="How many members do you currently have? What's your biggest challenge with getting new clients?" />
              </div>
              <button
                type="submit"
                style={btn}
                disabled={status === 'sending'}
                onMouseEnter={e => { if (status !== 'sending') { e.currentTarget.style.background = '#2d66b8'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
                onMouseLeave={e => { e.currentTarget.style.background = '#3a7bd5'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {status === 'sending' ? 'Sending...' : 'Book My Free Strategy Call →'}
              </button>
              {status === 'error' && <div style={errorMsg}>Something went wrong. Please email us directly at dylanrg@digigrowthllc.com</div>}
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
