const STEPS = [
  { num: '01', icon: '🎯', title: 'Tell us your goal', desc: 'Weight loss, muscle gain, diabetic management, or a custom target. Our dietitian maps your plan.' },
  { num: '02', icon: '📋', title: 'Choose your plan', desc: 'Pick daily, weekly, or monthly. Customize for veg/non-veg, allergies, and taste preferences.' },
  { num: '03', icon: '👨‍🍳', title: 'We cook at dawn', desc: 'Every morning at 5 AM, our chefs prepare your meals fresh — weighed, portioned, and sealed.' },
  { num: '04', icon: '🚴', title: 'Delivered by 9 AM', desc: 'Your meals arrive in temperature-safe eco packaging at your door before you start your day.' },
];

export default function HowItWorks() {
  return (
    <div style={{ background: '#F2EDE5', padding: 'var(--section-py) var(--section-px)' }}>
      <div style={{ maxWidth: '1260px', margin: '0 auto' }}>
        <div className="reveal" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B5240', marginBottom: '0.75rem' }}>The Process</div>
        <h2 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F1410', marginBottom: '3.5rem', fontWeight: 300 }}>From our kitchen<br />to your table.</h2>

        <div className="reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, border: '1px solid rgba(15,20,16,0.08)', borderRadius: 20, overflow: 'hidden', background: '#fff' }} id="how-grid">
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              style={{ padding: '2rem 1.8rem', borderRight: i < STEPS.length - 1 ? '1px solid rgba(15,20,16,0.08)' : 'none', position: 'relative' }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3.5rem', fontWeight: 300, color: '#EEF4EF', lineHeight: 1, marginBottom: '1rem' }}>{step.num}</div>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '1rem' }}>{step.icon}</span>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: '#0F1410', marginBottom: '0.5rem' }}>{step.title}</div>
              <p style={{ fontSize: '0.82rem', color: '#9B958E', lineHeight: 1.6 }}>{step.desc}</p>
              {i < STEPS.length - 1 && (
                <div style={{ position: 'absolute', top: '2rem', right: -14, width: 28, height: 28, background: '#fff', border: '1px solid rgba(15,20,16,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: '#9B958E', zIndex: 2 }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #how-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          #how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
