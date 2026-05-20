import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section style={{ background: '#3B5240', padding: 'var(--section-py) var(--section-px)', textAlign: 'center' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }} className="reveal">
        <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8CAF90', marginBottom: '0.75rem' }}>Start Today</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#fff', fontWeight: 300, marginBottom: '1rem' }}>
          Your first step to eating<br />well starts here.
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem' }}>
          Enter your email and our nutritionist will reach out to build your personal plan — no commitment required.
        </p>

        {submitted ? (
          <div style={{ background: 'rgba(91,201,127,0.12)', border: '1px solid rgba(91,201,127,0.3)', borderRadius: '50px', padding: '1rem 2rem', color: '#5BC97F', fontWeight: 500, display: 'inline-block' }}>
            ✓ Thank you! We'll reach out within 24 hours.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.75rem', maxWidth: 480, margin: '0 auto 1.5rem', flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{ flex: 1, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50px', padding: '13px 20px', fontSize: '0.9rem', background: 'rgba(255,255,255,0.1)', color: '#fff', fontFamily: 'inherit', outline: 'none', minWidth: 200 }}
            />
            <button
              type="submit"
              style={{ background: '#fff', color: '#3B5240', border: 'none', borderRadius: '50px', padding: '13px 24px', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0F1410'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#3B5240'; }}
            >
              Get My Plan
            </button>
          </form>
        )}

        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)' }}>
          Or WhatsApp us directly: +91 82603 33968 &nbsp;·&nbsp; Mon–Sat, 8 AM–6 PM
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.12)', flexWrap: 'wrap' }}>
          {[
            { num: '10%', label: 'off weekly plans' },
            { num: 'Free', label: 'dietitian consultation' },
            { num: '3', label: 'meal swaps/week' },
            { num: '0', label: 'lock-in contracts' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', color: '#fff', fontWeight: 300 }}>{item.num}</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
