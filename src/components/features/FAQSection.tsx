import { useState } from 'react';

const FAQS = [
  { q: 'Do you deliver to my area in Hyderabad?', a: 'We currently deliver to KPHB Colony, Kukatpally, HiTech City, and Madhapur. We\'re expanding to Gachibowli, Kondapur, and Miyapur soon. Use the pincode checker above or WhatsApp us at +91 82603 33968 to confirm your area.' },
  { q: 'What time do you deliver?', a: 'All meals are delivered between 7:30 AM and 9:00 AM. We prepare from 5 AM daily so your food is always fresh, never reheated. If you need a specific delivery window, let us know and we\'ll try to accommodate.' },
  { q: 'Can I customise meals for allergies or preferences?', a: 'Yes. After subscribing, our dietitian does an onboarding call where you share allergies, intolerances, and food preferences. We can accommodate most requirements including nut-free, gluten-free, and dairy-free options.' },
  { q: 'Are the calories exactly as labelled?', a: 'Yes — within ±5% variance, which is the industry standard. Every ingredient is weighed on a gram scale before cooking. Our dietitian verifies all recipe macros using a nutrition database. We label every container with a full macro breakdown.' },
  { q: 'Can I pause or cancel my subscription?', a: 'Absolutely. You can pause delivery for up to 7 days/month or cancel entirely with 24 hours\' notice. No cancellation fees, no questions asked. We believe our food should keep you coming back, not a contract.' },
  { q: 'Is the packaging safe and eco-friendly?', a: 'All our containers are made from sugarcane-pulp (bagasse), which is 100% compostable. We use food-grade insulated liners that keep your food at safe temperatures. We have a strict no-single-use-plastic policy inside our kitchen.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div style={{ maxWidth: 860, margin: '0 auto', padding: 'var(--section-py) var(--section-px)' }}>
        <div className="reveal" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B5240', marginBottom: '0.75rem' }}>FAQ</div>
        <h2 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F1410', fontWeight: 300, marginBottom: '3rem' }}>Questions we<br />hear often.</h2>

        <div className="reveal reveal-delay-2" style={{ borderTop: '1px solid rgba(15,20,16,0.08)' }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{ borderBottom: '1px solid rgba(15,20,16,0.08)' }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.3rem 0', fontFamily: 'inherit', fontSize: '0.95rem', fontWeight: 500,
                    color: isOpen ? '#3B5240' : '#0F1410', transition: 'color 0.2s',
                  }}
                >
                  {faq.q}
                  <div style={{
                    width: 22, height: 22, borderRadius: '50%',
                    border: `1px solid ${isOpen ? '#3B5240' : 'rgba(15,20,16,0.13)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', color: isOpen ? '#fff' : '#9B958E',
                    flexShrink: 0, transition: 'all 0.25s',
                    background: isOpen ? '#3B5240' : 'transparent',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>+</div>
                </button>
                <div style={{
                  fontSize: '0.88rem', color: '#9B958E', lineHeight: 1.75,
                  maxHeight: isOpen ? 300 : 0, overflow: 'hidden',
                  transition: 'max-height 0.35s ease, padding 0.25s',
                  paddingBottom: isOpen ? '1.3rem' : 0,
                }}>
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
