const PILLARS = [
  { icon: '🌅', title: 'Cooked fresh every morning from 5 AM', desc: 'No batch cooking, no yesterday\'s leftovers. Each meal is prepared on the morning of delivery.' },
  { icon: '⚖️', title: 'Gram-precise portioning', desc: 'Every ingredient is weighed to the gram so your calorie count is exactly what the label says.' },
  { icon: '🧪', title: 'Weekly quality audits', desc: 'Our kitchen undergoes internal quality checks weekly with full hygiene logs maintained.' },
  { icon: '📦', title: 'Temperature-safe delivery packaging', desc: 'Food-grade insulated containers keep meals at safe temperature from kitchen to your door.' },
];

const CERTS = [
  { icon: '🏛️', name: 'FSSAI Licensed', detail: 'Central Food Safety license under the Food Safety and Standards Authority of India', badge: 'Verified' },
  { icon: '👩‍⚕️', name: 'Dietitian-Verified', detail: 'All meal plans reviewed and approved by a registered clinical nutritionist', badge: 'Certified' },
  { icon: '🌿', name: 'No Additives', detail: 'Zero artificial preservatives, zero synthetic colours, zero MSG or flavour enhancers', badge: 'Guaranteed' },
  { icon: '♻️', name: 'Eco Packaging', detail: '100% biodegradable sugarcane-pulp containers. Zero plastic policy in our kitchen', badge: 'Committed' },
];

const STATS = [
  { num: '5:00', unit: 'AM', label: 'Prep starts daily' },
  { num: '0', unit: '', label: 'Artificial additives' },
  { num: '±5g', unit: '', label: 'Portion accuracy' },
  { num: '9:00', unit: 'AM', label: 'Delivery complete by' },
];

export default function KitchenSection() {
  return (
    <section id="kitchen" style={{ background: '#0F1410', padding: 'var(--section-py) var(--section-px)' }}>
      <div style={{ maxWidth: '1260px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--grid-gap-lg)', alignItems: 'center' }} className="kitchen-inner">
        {/* Left */}
        <div className="reveal">
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8CAF90', marginBottom: '0.75rem' }}>Our Kitchen</div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#fff', marginBottom: '1rem', fontWeight: 300 }}>Built on<br />transparency<br />and trust.</h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '2rem' }}>
            We show you exactly what goes into your food — because you deserve to know. Every gram is weighed. Every ingredient is sourced locally.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {PILLARS.map((p) => (
              <div
                key={p.title}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem', borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)', transition: 'background 0.2s, border-color 0.2s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(140,175,144,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(140,175,144,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#fff', marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="reveal reveal-delay-2">
          {/* Certs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {CERTS.map((c) => (
              <div key={c.name} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: '1.5rem', textAlign: 'center' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{c.icon}</span>
                <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#fff', marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{c.detail}</div>
                <span style={{ display: 'inline-block', marginTop: 8, background: 'rgba(91,201,127,0.12)', color: '#5BC97F', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '50px' }}>{c.badge}</span>
              </div>
            ))}
          </div>

          {/* Kitchen stats card */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)' }}>
              <span>Kitchen Activity — Today</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginLeft: 'auto', background: 'rgba(91,201,127,0.12)', color: '#5BC97F', fontSize: '0.68rem', fontWeight: 600, padding: '3px 8px', borderRadius: '50px' }}>
                <div className="live-dot" style={{ width: 5, height: 5, borderRadius: '50%', background: '#5BC97F' }} />
                Live
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
              {STATS.map((s) => (
                <div key={s.label} style={{ background: '#0F1410', padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.2rem', color: '#8CAF90', fontWeight: 300 }}>
                    {s.num}<span style={{ fontSize: '1rem' }}>{s.unit}</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .kitchen-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
