import logoUrl from '../../assets/logo.jpg';

const FOOTER_PLANS = [
  'Lean Start — 1200 kcal',
  'Power Balance — 1500 kcal',
  'Muscle Builder — 1800 kcal',
  'Custom Plan',
];
const FOOTER_AREAS = [
  'KPHB Colony ✓',
  'Kukatpally ✓',
  'HiTech City ✓',
  'Madhapur ✓',
  'Gachibowli — Soon',
  'Kondapur — Soon',
];
const FOOTER_COMPANY = [
  'About Us', 'Our Kitchen', 'Our Nutritionist',
  'Blog & Recipes', 'Privacy Policy', 'Refund Policy',
];

const s = {
  linkColor: 'rgba(255,255,255,0.5)',
  headColor: 'rgba(255,255,255,0.35)',
};

export default function Footer() {
  return (
    <footer style={{ background: '#0F1410', padding: 'var(--section-py) var(--section-px) 1.5rem' }}>
      <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 'var(--grid-gap-sm)', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }} className="footer-top-grid">
          {/* Brand */}
          <div>
              <div style={{ height: 60, overflow: 'hidden', flexShrink: 0, marginBottom: '0.9rem' }}>
                <img src={logoUrl} alt="Chicxulub Nutrition" style={{ height: '100%', width: 'auto', objectFit: 'contain', background: '#fff', padding: '4px', borderRadius: '8px' }} />
              </div>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 280, marginBottom: '1.5rem' }}>
              Chicxulub Nutrition is Hyderabad&apos;s premium asteroid-inspired diet cloud kitchen. Dietitian-designed meals, cooked fresh daily and delivered to your door.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 14px', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>
              🏛️ FSSAI Lic. No. 10020042014248 · Telangana
            </div>
          </div>

          {/* Plans */}
          <div>
            <h5 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: s.headColor, marginBottom: '1.2rem', fontFamily: "'Outfit', sans-serif" }}>Plans</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {FOOTER_PLANS.map((item) => (
                <li key={item}><a href="#plans" style={{ fontSize: '0.85rem', color: s.linkColor, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#8CAF90'} onMouseLeave={e => e.currentTarget.style.color = s.linkColor}>{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Delivery */}
          <div>
            <h5 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: s.headColor, marginBottom: '1.2rem', fontFamily: "'Outfit', sans-serif" }}>Delivery Areas</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {FOOTER_AREAS.map((item) => (
                <li key={item}><a href="#delivery" style={{ fontSize: '0.85rem', color: s.linkColor, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#8CAF90'} onMouseLeave={e => e.currentTarget.style.color = s.linkColor}>{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: s.headColor, marginBottom: '1.2rem', fontFamily: "'Outfit', sans-serif" }}>Company</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {FOOTER_COMPANY.map((item) => (
                <li key={item}><a href="#" style={{ fontSize: '0.85rem', color: s.linkColor, transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#8CAF90'} onMouseLeave={e => e.currentTarget.style.color = s.linkColor}>{item}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            © 2025 Chicxulub Nutrition. All rights reserved. Hyderabad, Telangana.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {[
              { label: 'in', href: '#' },
              { label: 'ig', href: '#' },
              { label: 'yt', href: '#' },
              { label: 'wa', href: 'https://wa.me/918260333968' },
            ].map((s2) => (
              <a key={s2.label} href={s2.href} target="_blank" rel="noopener noreferrer"
                style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', transition: 'all 0.2s', textTransform: 'lowercase' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#3B5240'; e.currentTarget.style.borderColor = '#3B5240'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
              >
                {s2.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-top-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-top-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
