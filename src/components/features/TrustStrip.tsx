const TRUST_ITEMS = [
  { icon: '🏛️', title: 'FSSAI Licensed', detail: 'Lic. No. 10020042014248' },
  { icon: '👩‍⚕️', title: 'Dietitian-Designed', detail: 'Every meal macro-verified' },
  { icon: '🧊', title: 'Cold-Chain Delivery', detail: 'Temperature-controlled packaging' },
  { icon: '🌿', title: 'No Preservatives', detail: 'Sourced fresh, cooked daily' },
  { icon: '♻️', title: 'Eco Packaging', detail: '100% biodegradable containers' },
];

export default function TrustStrip() {
  return (
    <div className="trust-item" style={{ background: '#0F1410', color: 'rgba(255,255,255,0.85)', padding: '0 var(--section-px)' }}>
      <div style={{ maxWidth: '1260px', margin: '0 auto', display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
        {TRUST_ITEMS.map((item, i) => (
          <div
            key={item.title}
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '1.4rem 2.5rem', flex: 1, minWidth: 200,
              borderRight: i < TRUST_ITEMS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}
          >
            <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '1rem' }}>
              {item.icon}
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 400, lineHeight: 1.4 }}>
              <strong style={{ display: 'block', fontWeight: 500, fontSize: '0.88rem', color: '#fff' }}>{item.title}</strong>
              {item.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
