import { useState } from 'react';

const CATEGORIES = [
  {
    id: 'weight-loss',
    icon: '🔥',
    title: 'Weight Loss Plans',
    description:
      'Calorie-balanced meal programs designed to support healthy fat loss, improve metabolism, and maintain daily energy levels.',
    tags: ['Calorie Deficit', 'Metabolism Boost', 'Sustainable'],
    cta: 'Start Your Plan',
    accentColor: '#3B5240',
    badge: 'Most Popular',
    badgeColor: '#EEF4EF',
    badgeTextColor: '#3B5240',
    featured: true,
  },
  {
    id: 'weight-gain',
    icon: '💪',
    title: 'Weight Gain Plans',
    description:
      'Nutrition-focused meal plans crafted to support healthy weight gain, muscle recovery, and strength development.',
    tags: ['Calorie Surplus', 'Muscle Recovery', 'Strength'],
    cta: 'Order Now',
    accentColor: '#B8935A',
    badge: 'Bulking',
    badgeColor: '#F5EFE6',
    badgeTextColor: '#B8935A',
    featured: false,
  },
  {
    id: 'muscle-building',
    icon: '🏋️',
    title: 'Muscle Building Meals',
    description:
      'High-performance nutrition programs optimized for lean muscle growth, gym recovery, and active lifestyles.',
    tags: ['Lean Gains', 'Gym Recovery', 'High Performance'],
    cta: 'Start Your Plan',
    accentColor: '#5A7A61',
    badge: 'Performance',
    badgeColor: '#EEF4EF',
    badgeTextColor: '#3B5240',
    featured: false,
  },
  {
    id: 'high-protein',
    icon: '⚡',
    title: 'High Protein Plans',
    description:
      'Protein-rich meal programs ideal for fitness enthusiasts, athletes, and individuals focused on strength and endurance.',
    tags: ['40g+ Protein/meal', 'Athletic', 'Endurance'],
    cta: 'Order Now',
    accentColor: '#3B5240',
    badge: 'Athletes',
    badgeColor: '#EEF4EF',
    badgeTextColor: '#3B5240',
    featured: false,
  },
  {
    id: 'balanced-lifestyle',
    icon: '🥗',
    title: 'Balanced Lifestyle Meals',
    description:
      'Everyday healthy meal plans designed to maintain wellness, improve energy, and support a healthier routine.',
    tags: ['Balanced Macros', 'Energy Boost', 'Daily Wellness'],
    cta: 'Consult Nutritionist',
    accentColor: '#8CAF90',
    badge: 'Everyday',
    badgeColor: '#EEF4EF',
    badgeTextColor: '#5A7A61',
    featured: false,
  },
  {
    id: 'keto-lowcarb',
    icon: '🥑',
    title: 'Keto & Low Carb Programs',
    description:
      'Low-carb nutrition plans created to support fat-burning, metabolic balance, and sustained performance.',
    tags: ['Ketogenic', 'Fat Burning', 'Low Carb'],
    cta: 'Start Your Plan',
    accentColor: '#B8935A',
    badge: 'Fat Burn',
    badgeColor: '#F5EFE6',
    badgeTextColor: '#B8935A',
    featured: false,
  },
  {
    id: 'custom-nutrition',
    icon: '🎯',
    title: 'Custom Nutrition Plans',
    description:
      'Personalized meal programs tailored to individual fitness goals, dietary preferences, and lifestyle needs.',
    tags: ['Personalized', 'Flexible', 'Dietitian Guided'],
    cta: 'Consult Nutritionist',
    accentColor: '#3B5240',
    badge: 'Personalized',
    badgeColor: '#EEF4EF',
    badgeTextColor: '#3B5240',
    featured: false,
  },
  {
    id: 'corporate-meals',
    icon: '🏢',
    title: 'Corporate Meal Programs',
    description:
      'Healthy and convenient meal solutions designed for working professionals, office teams, and corporate wellness initiatives.',
    tags: ['Office Delivery', 'Team Plans', 'Corporate Wellness'],
    cta: 'Order Now',
    accentColor: '#2C3429',
    badge: 'Corporate',
    badgeColor: '#F2EDE5',
    badgeTextColor: '#2C3429',
    featured: false,
  },
];

const TRUST_PILLARS = [
  { icon: '🌿', title: 'Freshly Prepared', detail: 'Cooked fresh every morning' },
  { icon: '👩‍⚕️', title: 'Nutritionist Guided', detail: 'Every meal macro-verified' },
  { icon: '🚀', title: 'Daily Delivery', detail: 'Delivered by 9 AM, 6 days/week' },
  { icon: '🎯', title: 'Customized Plans', detail: 'Tailored to your fitness goals' },
];

function CategoryCard({ cat, index }: { cat: typeof CATEGORIES[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  const handleCTA = (e: React.MouseEvent) => {
    e.preventDefault();
    const msg = `Hi Chicxulub Nutrition, I'm interested in your *${cat.title}*. Please guide me.`;
    window.open(
      `https://wa.me/918260333968?text=${encodeURIComponent(msg)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      className={`reveal reveal-delay-${(index % 4) + 1}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#fff' : '#fff',
        border: cat.featured ? `1.5px solid ${cat.accentColor}` : '1px solid rgba(15,20,16,0.08)',
        borderRadius: 20,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.28s cubic-bezier(0.4,0,0.2,1), box-shadow 0.28s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 20px 60px rgba(15,20,16,0.14), 0 4px 16px rgba(15,20,16,0.06)`
          : cat.featured
          ? '0 4px 24px rgba(59,82,64,0.15)'
          : '0 2px 12px rgba(15,20,16,0.06)',
        cursor: 'default',
      }}
    >
      {/* Accent top bar */}
      <div style={{ height: 4, background: cat.accentColor, flexShrink: 0 }} />

      <div style={{ padding: '1.6rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Badge + Icon row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.66rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '3px 10px',
              borderRadius: '50px',
              background: cat.badgeColor,
              color: cat.badgeTextColor,
            }}
          >
            {cat.badge}
          </span>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: 14,
              background: hovered ? cat.accentColor : '#F5F9F5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              transition: 'background 0.25s',
              flexShrink: 0,
            }}
          >
            {cat.icon}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.45rem',
            fontWeight: 400,
            color: '#0F1410',
            marginBottom: '0.6rem',
            lineHeight: 1.2,
          }}
        >
          {cat.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.82rem',
            color: '#9B958E',
            lineHeight: 1.75,
            flex: 1,
            marginBottom: '1.2rem',
          }}
        >
          {cat.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: '1.4rem' }}>
          {cat.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: '0.7rem',
                fontWeight: 500,
                padding: '3px 9px',
                borderRadius: '50px',
                background: '#EEF4EF',
                color: '#3B5240',
                letterSpacing: '0.02em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={handleCTA}
          style={{
            display: 'block',
            width: '100%',
            padding: '11px 16px',
            borderRadius: '50px',
            fontSize: '0.84rem',
            fontWeight: 500,
            border: cat.featured ? 'none' : `1.5px solid ${cat.accentColor}`,
            background: cat.featured ? cat.accentColor : 'transparent',
            color: cat.featured ? '#fff' : cat.accentColor,
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'all 0.22s',
            letterSpacing: '0.02em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#0F1410';
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.border = 'none';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = cat.featured ? cat.accentColor : 'transparent';
            e.currentTarget.style.color = cat.featured ? '#fff' : cat.accentColor;
            e.currentTarget.style.border = cat.featured ? 'none' : `1.5px solid ${cat.accentColor}`;
          }}
        >
          {cat.cta} →
        </button>
      </div>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" style={{ background: 'var(--color-cream)' }}>
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: 'var(--section-py) var(--section-px)' }}>

        {/* Section Header */}
        <div
          className="reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--grid-gap-sm)',
            alignItems: 'end',
            marginBottom: '4rem',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#3B5240',
                marginBottom: '0.75rem',
              }}
            >
              Nutrition Programs
            </div>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                color: '#0F1410',
                fontWeight: 300,
                lineHeight: 1.1,
              }}
            >
              Choose your<br />
              <em style={{ fontStyle: 'italic', color: '#3B5240' }}>fitness goal.</em>
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#9B958E', lineHeight: 1.8 }}>
            Every program is crafted by certified nutritionists and prepared fresh daily — tailored to your body's unique needs and performance goals.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
            marginBottom: '5rem',
          }}
          className="menu-cards-grid"
        >
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Trust Pillars */}
        <div
          className="reveal"
          style={{
            background: '#0F1410',
            borderRadius: 20,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            overflow: 'hidden',
          }}
        >
          {TRUST_PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '1.8rem 2rem',
                borderRight: i < TRUST_PILLARS.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
              className="trust-pillar-item"
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(59,82,64,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}
              >
                {pillar.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#fff', marginBottom: 2 }}>
                  {pillar.title}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                  {pillar.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="reveal"
          style={{
            marginTop: '3.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            padding: '2rem 2.5rem',
            background: '#fff',
            borderRadius: 20,
            border: '1px solid rgba(15,20,16,0.08)',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#3B5240',
                marginBottom: '0.4rem',
              }}
            >
              Not sure which plan is right for you?
            </div>
            <p style={{ fontSize: '0.9rem', color: '#9B958E' }}>
              Book a free 1-on-1 nutrition consultation with our certified dietitians.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/918260333968?text=Hi%20Chicxulub%20Nutrition%2C%20I%20need%20a%20free%20nutrition%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#3B5240',
                color: '#fff',
                padding: '12px 24px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 500,
                transition: 'all 0.22s',
                boxShadow: '0 4px 20px rgba(59,82,64,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0F1410';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#3B5240';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              🥗 Consult Nutritionist
            </a>
            <a
              href="https://wa.me/918260333968?text=Hi%20Chicxulub%20Nutrition%2C%20I%20would%20like%20to%20order%20now."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                border: '1.5px solid rgba(59,82,64,0.3)',
                background: 'transparent',
                color: '#3B5240',
                padding: '11px 24px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 500,
                transition: 'all 0.22s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#EEF4EF';
                e.currentTarget.style.borderColor = '#3B5240';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(59,82,64,0.3)';
              }}
            >
              Order Now →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .menu-cards-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 820px) {
          .menu-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .menu-section-header { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 500px) {
          .menu-cards-grid { grid-template-columns: 1fr !important; }
          .trust-pillar-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07) !important; }
        }
        @media (max-width: 768px) {
          .menu-section-header { grid-template-columns: 1fr !important; }
        }
        /* Trust pillars responsive */
        @media (max-width: 900px) {
          .reveal[style*="repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-pillar-item:nth-child(2) { border-right: none !important; }
          .trust-pillar-item:nth-child(1),
          .trust-pillar-item:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.07) !important; }
        }
      `}</style>
    </section>
  );
}
