const PERKS = [
  { icon: '📋', title: 'Free initial consultation', desc: 'Every new subscriber gets a 20-minute onboarding call to tailor the plan to your health goals.' },
  { icon: '📊', title: 'Monthly progress check-in', desc: 'Monthly subscribers get a dedicated check-in to review results and adjust macros if needed.' },
  { icon: '💬', title: 'WhatsApp support', desc: 'Questions about your meals? Our team is on WhatsApp Mon–Sat, 8 AM–6 PM.' },
];

const NUTR_TAGS = ['Diabetic diets', 'PCOS management', 'Weight management', 'Sports nutrition', 'Thyroid care'];

export default function NutritionistSection() {
  return (
    <section style={{ background: '#F5EFE6', borderTop: '1px solid rgba(184,147,90,0.15)', borderBottom: '1px solid rgba(184,147,90,0.15)', padding: 'var(--section-py) var(--section-px)' }} id="dietitian">
      <div style={{ maxWidth: '1260px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--grid-gap-md)', alignItems: 'center' }} className="nutr-inner">
        {/* Left */}
        <div className="reveal">
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8935A', marginBottom: '0.75rem' }}>Expert Backing</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F1410', marginBottom: '1rem', fontWeight: 300 }}>Every meal designed<br />by a real expert.</h2>
          <p style={{ fontSize: '0.95rem', color: '#9B958E', lineHeight: 1.75, marginBottom: '2rem' }}>
            Your food isn't designed by an algorithm. It's crafted by a registered nutritionist with over 8 years of clinical experience in therapeutic diets.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PERKS.map((p) => (
              <div key={p.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(184,147,90,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 500, color: '#0F1410', marginBottom: 3 }}>{p.title}</div>
                  <div style={{ fontSize: '0.8rem', color: '#9B958E', lineHeight: 1.55 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Expert card */}
        <div className="reveal reveal-delay-2">
          <div style={{ background: '#fff', border: '1px solid rgba(184,147,90,0.2)', borderRadius: 20, padding: '2rem', boxShadow: '0 2px 24px rgba(15,20,16,0.07)' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#EEF4EF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: '1rem' }}>👩‍⚕️</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: '#0F1410', marginBottom: 2 }}>Dr. Priya Sharma</div>
            <div style={{ fontSize: '0.78rem', color: '#9B958E', marginBottom: '1rem' }}>M.Sc. Clinical Nutrition · 8 yrs experience · Hyderabad</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', color: '#0F1410', fontStyle: 'italic', lineHeight: 1.6, padding: '1rem 0', borderTop: '1px solid rgba(15,20,16,0.08)', borderBottom: '1px solid rgba(15,20,16,0.08)', marginBottom: '1rem' }}>
              "Every body is different. That's why I personally review each plan to make sure the macros actually match your lifestyle — not just the numbers on paper."
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {NUTR_TAGS.map((tag) => (
                <span key={tag} style={{ background: '#F5EFE6', color: '#B8935A', fontSize: '0.72rem', fontWeight: 500, padding: '4px 12px', borderRadius: '50px', border: '1px solid rgba(184,147,90,0.2)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nutr-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
