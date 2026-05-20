import { useState, useEffect } from 'react';
import { submitOrder } from '../../services/api';
import type { OrderFormData } from '../../types';
import { useAuthStore } from '../../store/authStore';
import { Loader2 } from 'lucide-react';

const COMBOS = [
  { value: 'Power Balance combo', label: 'Power Balance combo', desc: 'Balanced macro meal set' },
  { value: 'Muscle Builder combo', label: 'Muscle Builder combo', desc: 'Higher protein meal set' },
  { value: 'Lean Start combo', label: 'Lean Start combo', desc: 'Light calorie-control set' },
  { value: 'Custom combo', label: 'Custom combo', desc: 'Mix meals by your preference' },
];

const DRINKS = [
  { value: 'Detox water', label: 'Detox water', desc: 'Fresh mint and cucumber' },
  { value: 'Protein shake', label: 'Protein shake', desc: 'Post-workout support' },
  { value: 'Cold brew coffee', label: 'Cold brew coffee', desc: 'Sugar-light energy boost' },
  { value: 'Buttermilk', label: 'Buttermilk', desc: 'Cooling and light' },
];

const SNACKS = [
  { value: 'Fruit bowl', label: 'Fruit bowl', desc: 'Seasonal fruits' },
  { value: 'Nuts mix', label: 'Nuts mix', desc: 'Protein + healthy fats' },
  { value: 'Roasted makhana', label: 'Roasted makhana', desc: 'Crunchy low-calorie snack' },
  { value: 'Greek yogurt', label: 'Greek yogurt', desc: 'High protein, creamy' },
];

const ADDONS = [
  { value: 'Extra salad greens', label: 'Extra greens', desc: 'Leafy crunch booster' },
  { value: 'Chia seeds', label: 'Chia seeds', desc: 'Fiber and omega support' },
  { value: 'Paneer cubes', label: 'Paneer cubes', desc: 'Extra vegetarian protein' },
  { value: 'Grilled chicken', label: 'Grilled chicken', desc: 'Extra lean protein' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', border: '1px solid rgba(15,20,16,0.13)', borderRadius: 12,
  padding: '12px 14px', fontFamily: 'inherit', background: '#fff', color: '#0F1410',
  outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', fontSize: '0.88rem',
};

export default function OrderBuilder() {
  const { user } = useAuthStore();
  
  const [form, setForm] = useState<OrderFormData>({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    deliveryAddress: '',
    pincode: '',
    planCategory: 'weight-loss',
    subscriptionMode: 'Weekly',
    primaryGoal: 'Weight loss',
    combos: [],
    drinks: [],
    snacks: [],
    addons: [],
    paymentMethod: 'UPI',
    upiId: '',
    specialNotes: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Prefill user data if logged in
  useEffect(() => {
    if (user) {
      setForm(prev => ({
        ...prev,
        customerName: prev.customerName || user.name,
        customerEmail: prev.customerEmail || user.email,
        customerPhone: prev.customerPhone || user.phone || '',
        planCategory: prev.planCategory || user.fitnessGoal || 'weight-loss'
      }));
    }
  }, [user]);

  const toggleCheck = (field: 'combos' | 'drinks' | 'snacks' | 'addons', value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((v) => v !== value) : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg('');
    setErrorMsg('');
    
    // Basic Validation
    if (!form.customerName || !form.customerEmail || !form.customerPhone || !form.deliveryAddress || !form.pincode) {
      setErrorMsg('Please fill in all customer and delivery details.');
      setSubmitting(false);
      return;
    }

    try {
      await submitOrder(form);
      setSuccessMsg('Order placed successfully! We have received your details and will contact you via WhatsApp to confirm delivery.');
      
      // Reset form on success
      setTimeout(() => {
        setSuccessMsg('');
      }, 5000);
      
    } catch (err) {
      setErrorMsg('Failed to place order. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const CheckGrid = ({ title, items, field }: { title: string; items: typeof COMBOS; field: 'combos' | 'drinks' | 'snacks' | 'addons' }) => (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#3B5240', marginBottom: '0.8rem' }}>{title}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '0.75rem' }} className="choice-inner-grid">
        {items.map((item) => (
          <label key={item.value}
            style={{ border: '1px solid rgba(15,20,16,0.08)', borderRadius: 14, padding: '0.9rem 1rem', display: 'flex', gap: '0.6rem', alignItems: 'flex-start', background: '#F5F9F5', cursor: 'pointer', transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#8CAF90'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(15,20,16,0.08)'}
          >
            <input
              type="checkbox"
              checked={form[field].includes(item.value)}
              onChange={() => toggleCheck(field, item.value)}
              style={{ marginTop: 2, accentColor: '#3B5240' }}
            />
            <span>
              <strong style={{ fontSize: '0.86rem', color: '#0F1410', display: 'block' }}>{item.label}</strong>
              <small style={{ fontSize: '0.74rem', color: '#9B958E', lineHeight: 1.45, display: 'block' }}>{item.desc}</small>
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu">
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: 'var(--section-py) var(--section-px)' }}>
        <div className="reveal" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B5240', marginBottom: '0.75rem' }}>Custom Menu</div>
        <h2 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F1410', marginBottom: '1rem', fontWeight: 300 }}>Build your own<br />subscription order.</h2>
        <p className="reveal reveal-delay-2" style={{ fontSize: '0.95rem', color: '#9B958E', lineHeight: 1.75, maxWidth: 600 }}>
          Choose a subscription mode, optional combo, drinks, mid-morning snacks, toppings, and add-ons. After submission, the final order will open directly in WhatsApp.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.18fr 0.82fr', gap: '1.5rem', marginTop: '3rem' }} className="order-grid">
          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal" style={{ background: '#fff', border: '1px solid rgba(15,20,16,0.08)', borderRadius: 22, boxShadow: '0 2px 24px rgba(15,20,16,0.07)', padding: '1.6rem' }}>
            
            {errorMsg && (
              <div style={{ background: '#FEF2F2', color: '#DC2626', padding: '1rem', borderRadius: 12, marginBottom: '1.5rem', fontSize: '0.88rem', border: '1px solid #FECACA' }}>
                {errorMsg}
              </div>
            )}
            
            {successMsg && (
              <div style={{ background: '#F0FDF4', color: '#16A34A', padding: '1rem', borderRadius: 12, marginBottom: '1.5rem', fontSize: '0.88rem', border: '1px solid #bbf7d0' }}>
                {successMsg}
              </div>
            )}

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontFamily: "'Cormorant Garamond', serif", color: '#0F1410', marginBottom: '1rem' }}>Customer Details</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem' }} className="order-fields-inner">
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>Full Name *</label>
                  <input type="text" value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>Email Address *</label>
                  <input type="email" value={form.customerEmail} onChange={(e) => setForm({ ...form, customerEmail: e.target.value })} style={inputStyle} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>Phone Number *</label>
                  <input type="tel" value={form.customerPhone} onChange={(e) => setForm({ ...form, customerPhone: e.target.value })} style={inputStyle} required />
                </div>
                 <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>Pincode *</label>
                  <input type="text" value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} style={inputStyle} required />
                </div>
              </div>
              <div style={{ marginTop: '1rem' }}>
                 <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>Delivery Address *</label>
                 <textarea value={form.deliveryAddress} onChange={(e) => setForm({ ...form, deliveryAddress: e.target.value })} style={{ ...inputStyle, minHeight: 60, resize: 'vertical' }} required />
              </div>
            </div>

            <div style={{ height: 1, background: 'rgba(15,20,16,0.08)', margin: '1.5rem 0' }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '1rem' }} className="order-fields-inner">
               <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>Plan Category</label>
                <select value={form.planCategory} onChange={(e) => setForm({ ...form, planCategory: e.target.value })} style={inputStyle}>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="weight-gain">Weight Gain</option>
                  <option value="muscle-building">Muscle Building</option>
                  <option value="high-protein">High Protein</option>
                  <option value="balanced-lifestyle">Balanced Lifestyle</option>
                  <option value="keto-lowcarb">Keto & Low Carb</option>
                  <option value="custom">Custom</option>
                  <option value="corporate">Corporate</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>Subscription mode</label>
                <select value={form.subscriptionMode} onChange={(e) => setForm({ ...form, subscriptionMode: e.target.value })} style={inputStyle}>
                  <option value="Weekly">Weekly subscription</option>
                  <option value="Bi-weekly">Bi-weekly subscription</option>
                  <option value="Monthly">Monthly subscription</option>
                  <option value="One-time trial">One-time trial order</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>Primary goal</label>
                <select value={form.primaryGoal} onChange={(e) => setForm({ ...form, primaryGoal: e.target.value })} style={inputStyle}>
                  <option value="Weight loss">Weight loss</option>
                  <option value="Balanced nutrition">Balanced nutrition</option>
                  <option value="Muscle gain">Muscle gain</option>
                  <option value="High protein">High protein</option>
                </select>
              </div>
            </div>

            <CheckGrid title="Optional combos" items={COMBOS} field="combos" />
            <CheckGrid title="Drinks" items={DRINKS} field="drinks" />
            <CheckGrid title="Mid-morning snacks" items={SNACKS} field="snacks" />
            <CheckGrid title="Toppings & add-ons" items={ADDONS} field="addons" />

            <div style={{ marginTop: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>Special instructions</label>
              <textarea
                value={form.specialNotes}
                onChange={(e) => setForm({ ...form, specialNotes: e.target.value })}
                placeholder="Add spice level, delivery note, allergies, or any preference here."
                style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: submitting ? '#8CAF90' : '#3B5240', color: '#fff', padding: '14px 28px', borderRadius: '50px', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.02em', transition: 'all 0.22s', boxShadow: '0 4px 24px rgba(59,82,64,0.28)', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', fontFamily: 'inherit', marginTop: '1rem' }}
              onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = '#0F1410'; }}
              onMouseLeave={e => { if (!submitting) e.currentTarget.style.background = '#3B5240'; }}
            >
              {submitting ? <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> : null}
              {submitting ? 'Placing Order...' : 'Place Order & Send to WhatsApp'}
            </button>
          </form>

          {/* Order summary card */}
          <div className="reveal reveal-delay-2" style={{ background: '#fff', border: '1px solid rgba(15,20,16,0.08)', borderRadius: 22, boxShadow: '0 2px 24px rgba(15,20,16,0.07)', padding: '1.6rem', alignSelf: 'start', position: 'sticky', top: 100 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: '#0F1410', fontSize: '1.6rem', marginBottom: '0.3rem' }}>Payment gateway</h3>
            <p style={{ fontSize: '0.9rem', color: '#9B958E', marginTop: '0.25rem' }}>Add your gateway details below. After order, payment handled via WhatsApp or UPI.</p>

            <div style={{ marginTop: '1rem', borderRadius: 18, background: 'linear-gradient(180deg, rgba(59,82,64,0.06), rgba(140,175,144,0.08))', border: '1px solid rgba(59,82,64,0.12)', padding: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.9rem' }}>
                {['UPI', 'Card', 'COD'].map((method) => (
                  <label key={method} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#fff', border: '1px solid rgba(15,20,16,0.08)', borderRadius: '999px', padding: '0.55rem 0.9rem', fontSize: '0.82rem', cursor: 'pointer' }}>
                    <input type="radio" name="payMethod" value={method} checked={form.paymentMethod === method} onChange={() => setForm({ ...form, paymentMethod: method })} style={{ accentColor: '#3B5240' }} />
                    {method} {method === 'UPI' ? '/ QR' : ''}
                  </label>
                ))}
              </div>
              <div style={{ background: 'rgba(255,255,255,0.8)', border: '1px dashed rgba(59,82,64,0.25)', borderRadius: 14, padding: '0.9rem', marginBottom: '0.9rem', fontSize: '0.82rem', color: '#9B958E' }}>
                <p><strong style={{ color: '#0F1410' }}>To connect UPI later:</strong></p>
                <p>Replace <code style={{ background: 'rgba(59,82,64,0.08)', padding: '0.15rem 0.35rem', borderRadius: 6, color: '#0F1410' }}>YOUR_UPI_ID</code> in the code with your actual UPI handle.</p>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#9B958E', marginBottom: '0.4rem' }}>UPI ID or payment handle</label>
                <input type="text" placeholder="yourname@bank" value={form.upiId} onChange={(e) => setForm({ ...form, upiId: e.target.value })} style={inputStyle} />
              </div>
            </div>

            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', marginTop: '1.2rem', fontWeight: 400, color: '#0F1410' }}>Order summary</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '0.6rem', marginTop: '1rem' }}>
              {[
                { label: 'Category', value: form.planCategory },
                { label: 'Subscription', value: form.subscriptionMode },
                { label: 'Combos', value: form.combos.length ? form.combos.join(', ') : 'None selected' },
                { label: 'Drinks', value: form.drinks.length ? form.drinks.join(', ') : 'None selected' },
                { label: 'Snacks', value: form.snacks.length ? form.snacks.join(', ') : 'None selected' },
                { label: 'Delivery', value: 'Via WhatsApp confirmation' },
              ].map((row) => (
                <li key={row.label} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', fontSize: '0.84rem', color: '#0F1410', paddingBottom: '0.6rem', borderBottom: '1px solid rgba(15,20,16,0.08)' }}>
                  <span style={{ color: '#9B958E' }}>{row.label}</span>
                  <strong style={{ textAlign: 'right', fontWeight: 500, textTransform: 'capitalize' }}>{row.value}</strong>
                </li>
              ))}
            </ul>
            <div style={{ fontSize: '0.8rem', color: '#3B5240', marginTop: '0.75rem' }}>WhatsApp: +91 82603 33968</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .order-grid { grid-template-columns: 1fr !important; }
          .order-fields-inner { grid-template-columns: 1fr !important; }
          .choice-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
