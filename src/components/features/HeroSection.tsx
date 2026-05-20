export default function HeroSection() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{ maxWidth: '1260px', margin: '0 auto', padding: 'var(--section-py) var(--section-px) 2.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 520px', alignItems: 'center', gap: 'var(--grid-gap-lg)' }} className="hero-grid">
        {/* Left: Text */}
        <div className="reveal">
          {/* Kicker */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(15,20,16,0.13)', background: '#fff', padding: '6px 14px 6px 8px', borderRadius: '50px', marginBottom: '1.8rem' }}>
            <span style={{ background: '#EEF4EF', color: '#3B5240', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '3px 8px', borderRadius: '50px' }}>Cloud Kitchen</span>
            <span style={{ fontSize: '0.8rem', color: '#9B958E' }}>Hyderabad · Est. 2025</span>
          </div>

          {/* Heading */}
          <h1 style={{ fontSize: 'clamp(3.2rem, 5.5vw, 5rem)', color: '#0F1410', marginBottom: '1.5rem', fontWeight: 300, lineHeight: 1.08 }}>
            Precision<br />
            <em style={{ fontStyle: 'italic', color: '#3B5240' }}>Nutrition,</em><br />
            Asteroid-Inspired<br />
            <em style={{ fontStyle: 'italic', color: '#3B5240' }}>Daily.</em>
          </h1>

          <p style={{ fontSize: '1rem', color: '#9B958E', lineHeight: 1.75, maxWidth: 480, marginBottom: '2.5rem', fontWeight: 300 }}>
            Macro-balanced, dietitian-approved meals prepared fresh every morning and delivered to your door by 9 AM. No guesswork. No compromise.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <button onClick={() => scrollTo('#plans')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#3B5240', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.02em', transition: 'all 0.22s', boxShadow: '0 4px 24px rgba(59,82,64,0.28)', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#0F1410'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#3B5240'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              Start Your Plan
            </button>
            <button onClick={() => scrollTo('#kitchen')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(15,20,16,0.13)', background: 'transparent', color: '#0F1410', padding: '13px 24px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 400, transition: 'all 0.2s', cursor: 'pointer', fontFamily: 'inherit' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#8CAF90'; e.currentTarget.style.color = '#3B5240'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(15,20,16,0.13)'; e.currentTarget.style.color = '#0F1410'; }}
            >
              See Our Kitchen
            </button>
          </div>

          {/* Trust numbers */}
          <div style={{ display: 'flex', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(15,20,16,0.08)' }}>
            {[
              { num: '500+', label: 'Meals delivered' },
              { num: '4.9★', label: 'Average rating' },
              { num: '100%', label: 'FSSAI certified' },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 400, color: '#0F1410' }}>{item.num}</div>
                <div style={{ fontSize: '0.75rem', color: '#9B958E', fontWeight: 300 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual card */}
        <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
          {/* Float cards */}
          <div className="float-1 hidden-mobile" style={{ position: 'absolute', top: 40, left: -30, background: '#fff', border: '1px solid rgba(15,20,16,0.08)', borderRadius: 14, padding: '10px 14px', boxShadow: '0 2px 24px rgba(15,20,16,0.07)', display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', fontWeight: 400, color: '#0F1410', zIndex: 2 }}>
            <span style={{ fontSize: '1rem' }}>🕗</span>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 500, color: '#0F1410' }}>Delivered by 9 AM</div>
              <div style={{ fontSize: '0.68rem', color: '#9B958E' }}>Fresh, never reheated</div>
            </div>
          </div>

          {/* Main card */}
          <div style={{ background: '#fff', borderRadius: 24, border: '1px solid rgba(15,20,16,0.08)', boxShadow: '0 12px 48px rgba(15,20,16,0.12)', overflow: 'hidden' }}>
            {/* Image area */}
            <div style={{ height: 260, background: '#EEF4EF', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #3B5240 0%, #5A7A61 50%, #8CAF90 100%)', opacity: 0.15 }} />
              <div style={{ width: 160, height: 160, borderRadius: '50%', border: '2px solid rgba(59,82,64,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(59,82,64,0.15)', fontSize: '3.5rem' }}>🥗</div>
              </div>
              <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(15,20,16,0.08)', borderRadius: 12, padding: '8px 12px', textAlign: 'center', zIndex: 2 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 500, color: '#3B5240', lineHeight: 1 }}>420</div>
                <div style={{ fontSize: '0.65rem', color: '#9B958E', letterSpacing: '0.05em', textTransform: 'uppercase' }}>kcal</div>
              </div>
            </div>

            {/* Card body */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, color: '#3B5240', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 4 }}>Today's Feature · Lunch</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 400, color: '#0F1410', marginBottom: 4 }}>Grilled Millet Power Bowl</h3>
              <p style={{ fontSize: '0.82rem', color: '#9B958E', marginBottom: '1.2rem' }}>Pearl millet, grilled chicken, roasted bell peppers, tahini dressing</p>
              <div style={{ display: 'flex', gap: 8, marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                {['38g Protein', '42g Carbs', '12g Fat'].map((tag) => (
                  <span key={tag} style={{ background: '#EEF4EF', color: '#3B5240', fontSize: '0.72rem', fontWeight: 500, padding: '4px 10px', borderRadius: '50px' }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: '1.2rem', borderTop: '1px solid rgba(15,20,16,0.08)' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#EEF4EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>👨‍🍳</div>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#0F1410' }}>Chef Ramesh Kumar</div>
                  <div style={{ fontSize: '0.72rem', color: '#9B958E' }}>Head Chef · 12 yrs experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Float bottom-right */}
          <div className="float-2 hidden-mobile" style={{ position: 'absolute', bottom: 80, right: -24, background: '#fff', border: '1px solid rgba(15,20,16,0.08)', borderRadius: 14, padding: '10px 14px', boxShadow: '0 2px 24px rgba(15,20,16,0.07)', display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
            <span style={{ fontSize: '1rem' }}>📉</span>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 500, color: '#0F1410' }}>Avg −4.2 kg</div>
              <div style={{ fontSize: '0.68rem', color: '#9B958E' }}>in first 30 days</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
