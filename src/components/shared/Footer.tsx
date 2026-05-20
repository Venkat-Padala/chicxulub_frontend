const LogoIcon = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="32" cy="32" r="30" fill="#3B5240" />
    <circle cx="45" cy="16" r="6" fill="#F5EFE6" />
    <circle cx="43.3" cy="14.8" r="1.1" fill="#3B5240" />
    <circle cx="46.8" cy="17.3" r="0.9" fill="#3B5240" />
    <path d="M14 28C19 18.5 30 12.5 41.5 13.5" fill="none" stroke="#F5EFE6" strokeWidth="2.2" strokeLinecap="round" opacity="0.8" />
    <path d="M18 38.5C21.4 32.4 27 29 32.1 29C39.5 29 45.4 33.9 47.4 40.4V42.5H16.8V41C16.8 40.1 17.1 39.3 18 38.5Z" fill="#F5EFE6" />
    <path d="M21.5 41.2H42.7" stroke="#3B5240" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M24 27.8C27.2 24.3 31.3 22.7 36.4 23.2" fill="none" stroke="#B8935A" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M26.2 24.3C27.7 20.4 31.5 17.2 35.8 16.3" fill="none" stroke="#B8935A" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" />
    <circle cx="20.8" cy="22.5" r="2.2" fill="#B8935A" />
    <ellipse cx="54" cy="48" rx="7" ry="5" fill="#8CAF90" opacity="0.9" transform="rotate(-20 54 48)" />
    <circle cx="52" cy="47" r="1" fill="#3B5240" opacity="0.5" />
    <circle cx="55" cy="49.5" r="0.7" fill="#3B5240" opacity="0.4" />
    <ellipse cx="11" cy="50" rx="2" ry="3" fill="#B8935A" opacity="0.6" transform="rotate(15 11 50)" />
    <ellipse cx="15" cy="53" rx="1.5" ry="2.5" fill="#B8935A" opacity="0.5" transform="rotate(-10 15 53)" />
    <ellipse cx="8" cy="54" rx="1.5" ry="2.5" fill="#B8935A" opacity="0.45" transform="rotate(25 8 54)" />
  </svg>
);

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
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '0.9rem' }}>
              <div style={{ width: 44, height: 44, borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 24px rgba(59,82,64,0.22)', flexShrink: 0 }}>
                <LogoIcon />
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#fff', lineHeight: 0.95 }}>
                Chicxulub<span style={{ color: '#8CAF90' }}>Nutrition</span>
              </div>
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
