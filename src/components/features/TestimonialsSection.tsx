import { useQuery } from '@tanstack/react-query';
import { fetchTestimonials } from '../../services/api';
import type { Testimonial } from '../../types';

function ReviewSkeleton() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="reviews-grid">
      {[1, 2, 3].map((i) => (
        <div key={i} className="skeleton" style={{ borderRadius: 18, height: 280 }} />
      ))}
    </div>
  );
}

function ReviewCard({ t }: { t: Testimonial }) {
  return (
    <div
      style={{
        background: t.featured ? '#F5F9F5' : '#fff',
        border: t.featured ? '1px solid #8CAF90' : '1px solid rgba(15,20,16,0.08)',
        borderRadius: 18, padding: '1.6rem',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        transition: 'box-shadow 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 2px 24px rgba(15,20,16,0.07)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <div style={{ color: '#B8935A', fontSize: '0.85rem', letterSpacing: 2 }}>{'★'.repeat(t.rating)}</div>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: '#0F1410', lineHeight: 1.65, fontStyle: 'italic', flex: 1 }}>
        "{t.text}"
      </p>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#EEF4EF', color: '#3B5240', fontSize: '0.72rem', fontWeight: 500, padding: '4px 10px', borderRadius: '50px', width: 'fit-content' }}>
        {t.resultEmoji} {t.result}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', background: t.avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 600, color: '#fff', flexShrink: 0 }}>
          {t.initials}
        </div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#0F1410' }}>{t.name}</div>
          <div style={{ fontSize: '0.72rem', color: '#9B958E' }}>{t.location} · {t.plan}</div>
          {t.verified && (
            <div style={{ fontSize: '0.68rem', color: '#2E7D4F', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>✓ Verified purchase</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: fetchTestimonials,
  });

  return (
    <section id="reviews">
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: 'var(--section-py) var(--section-px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }} className="reveal">
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B5240', marginBottom: '0.75rem' }}>Customer Stories</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F1410', fontWeight: 300 }}>Real people.<br />Real results.</h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '4rem', fontWeight: 300, color: '#0F1410', lineHeight: 1 }}>4.9</div>
            <div style={{ color: '#B8935A', fontSize: '1rem', letterSpacing: 3 }}>★★★★★</div>
            <div style={{ fontSize: '0.78rem', color: '#9B958E', marginTop: 4 }}>Based on 120+ reviews</div>
          </div>
        </div>

        <div className="reveal">
          {isLoading ? (
            <ReviewSkeleton />
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="reviews-grid">
              {testimonials?.map((t) => (
                <ReviewCard key={t._id} t={t} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
