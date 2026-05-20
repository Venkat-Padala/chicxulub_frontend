import { useQuery } from '@tanstack/react-query';
import { fetchPlans } from '../../services/api';
import type { Plan } from '../../types';

function PlanSkeleton() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="plans-grid">
      {[1, 2, 3].map((i) => (
        <div key={i} className="skeleton" style={{ borderRadius: 20, height: 480 }} />
      ))}
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isPopular = plan.badgeType === 'most-popular';
  const badgeBg = isPopular ? '#EEF4EF' : plan.badgeType === 'advanced' ? '#F5EFE6' : '#F2EDE5';
  const badgeColor = isPopular ? '#3B5240' : plan.badgeType === 'advanced' ? '#B8935A' : '#9B958E';
  const ctaPrimary = isPopular;

  return (
    <div
      style={{
        borderRadius: 20, overflow: 'hidden',
        border: isPopular ? '1.5px solid #3B5240' : '1px solid rgba(15,20,16,0.08)',
        background: '#fff',
        transition: 'box-shadow 0.25s, transform 0.25s',
        display: 'flex', flexDirection: 'column',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 48px rgba(15,20,16,0.12)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ height: 4, background: plan.accentColor }} />
      <div style={{ padding: '1.8rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span style={{ display: 'inline-block', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '50px', marginBottom: '1rem', background: badgeBg, color: badgeColor }}>
          {plan.badge}
        </span>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 400, color: '#0F1410', marginBottom: 4 }}>{plan.name}</div>
        <div style={{ fontSize: '0.8rem', color: '#9B958E', marginBottom: '1.2rem' }}>{plan.calories.toLocaleString()} kcal/day · {plan.description}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: '0.25rem' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 300, color: '#0F1410' }}>₹{plan.pricePerDay}</span>
          <span style={{ fontSize: '0.78rem', color: '#9B958E' }}>/day</span>
        </div>
        <div style={{ fontSize: '0.78rem', color: '#9B958E', marginBottom: '1.5rem' }}>
          ₹{(plan.pricePerDay * 6).toLocaleString()}/week · ₹{Math.round(plan.pricePerDay * 6 * 4 * 0.9).toLocaleString()}/month (save 10%)
        </div>
        <div style={{ height: 1, background: 'rgba(15,20,16,0.08)', margin: '1.2rem 0' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
          {plan.meals.map((meal) => (
            <div key={meal.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.82rem', color: '#9B958E' }}>{meal.name}</span>
              <span style={{ fontSize: '0.82rem', color: '#0F1410', fontWeight: 400, textAlign: 'right' }}>{meal.item}</span>
            </div>
          ))}
        </div>
        <a
          href="#menu"
          onClick={(e) => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            display: 'block', textAlign: 'center', marginTop: '1.5rem',
            padding: '12px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 500,
            transition: 'all 0.2s', cursor: 'pointer',
            background: ctaPrimary ? '#3B5240' : '#EEF4EF',
            color: ctaPrimary ? '#fff' : '#3B5240',
            border: ctaPrimary ? 'none' : '1px solid rgba(59,82,64,0.15)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#0F1410'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = 'none'; }}
          onMouseLeave={e => { e.currentTarget.style.background = ctaPrimary ? '#3B5240' : '#EEF4EF'; e.currentTarget.style.color = ctaPrimary ? '#fff' : '#3B5240'; }}
        >
          Choose {plan.name}
        </a>
      </div>
    </div>
  );
}

export default function PlansSection() {
  const { data: plans, isLoading } = useQuery<Plan[]>({
    queryKey: ['plans'],
    queryFn: fetchPlans,
  });

  return (
    <section id="plans">
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: 'var(--section-py) var(--section-px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--grid-gap-sm)', alignItems: 'end', marginBottom: '3.5rem' }} className="reveal plans-header">
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B5240', marginBottom: '0.75rem' }}>Meal Plans</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F1410', marginBottom: '1rem', fontWeight: 300 }}>Choose your<br />perfect plan.</h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#9B958E', lineHeight: 1.75 }}>
            All plans include 5 meals/day — breakfast, mid-morning, lunch, snack, and dinner. Delivered 6 days a week to KPHB, Kukatpally, HiTech City &amp; Madhapur.
          </p>
        </div>

        <div className="reveal">
          {isLoading ? (
            <PlanSkeleton />
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="plans-grid">
              {plans?.map((plan) => (
                <PlanCard key={plan._id} plan={plan} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .plans-grid { grid-template-columns: 1fr !important; }
          .plans-header { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
