import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchZones, checkPincode } from '../../services/api';
import type { Zone } from '../../types';

function ZoneSkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="skeleton" style={{ height: 70, borderRadius: 16 }} />
      ))}
    </div>
  );
}

export default function DeliveryZones() {
  const [pinInput, setPinInput] = useState('');
  const [pinResult, setPinResult] = useState<{ ok: boolean; area: string; text: string } | null>(null);
  const [checking, setChecking] = useState(false);

  const { data: zones, isLoading } = useQuery<Zone[]>({
    queryKey: ['zones'],
    queryFn: fetchZones,
  });

  const handleCheck = async () => {
    if (pinInput.length !== 6 || isNaN(Number(pinInput))) {
      setPinResult({ ok: false, area: '', text: 'Please enter a valid 6-digit pincode.' });
      return;
    }
    setChecking(true);
    try {
      const result = await checkPincode(pinInput);
      if (result.ok) {
        setPinResult({ ok: true, area: result.area, text: `✓ Great news! We deliver to ${result.area}.` });
      } else {
        setPinResult({ ok: false, area: result.area, text: `⏳ ${result.area} — register your interest below!` });
      }
    } catch {
      setPinResult({ ok: false, area: '', text: 'Could not check. WhatsApp us at +91 82603 33968.' });
    } finally {
      setChecking(false);
    }
  };

  return (
    <section id="delivery">
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: 'var(--section-py) var(--section-px)' }}>
        <div className="reveal" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3B5240', marginBottom: '0.75rem' }}>Delivery Coverage</div>
        <h2 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#0F1410', marginBottom: '1rem', fontWeight: 300 }}>
          We deliver to your<br />neighbourhood.
        </h2>
        <p className="reveal reveal-delay-2" style={{ fontSize: '0.95rem', color: '#9B958E', lineHeight: 1.75, maxWidth: 520 }}>
          Starting with the heart of west Hyderabad — expanding area by area so every meal arrives at peak freshness.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--grid-gap-md)', alignItems: 'start', marginTop: '3.5rem' }} className="delivery-grid">
          {/* Zone cards */}
          <div className="reveal">
            {isLoading ? (
              <ZoneSkeleton />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {zones?.map((zone) => (
                  <div
                    key={zone._id}
                    style={{
                      background: zone.status === 'live' ? '#F5F9F5' : '#fff',
                      border: zone.status === 'live' ? '1px solid #3B5240' : '1px solid rgba(15,20,16,0.08)',
                      borderRadius: 16, padding: '1.25rem 1.5rem',
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      transition: 'box-shadow 0.2s, border-color 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 2px 24px rgba(15,20,16,0.07)'; if (zone.status !== 'live') e.currentTarget.style.borderColor = '#8CAF90'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = zone.status === 'live' ? '#3B5240' : 'rgba(15,20,16,0.08)'; }}
                  >
                    <div style={{
                      width: 10, height: 10, borderRadius: '50%', flexShrink: 0,
                      background: zone.status === 'live' ? '#5BC97F' : '#B8935A',
                      boxShadow: zone.status === 'live' ? '0 0 0 3px rgba(91,201,127,0.2)' : '0 0 0 3px rgba(184,147,90,0.2)',
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#0F1410' }}>{zone.name}</div>
                      <div style={{ fontSize: '0.78rem', color: '#9B958E', marginTop: 1 }}>{zone.detail}</div>
                    </div>
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.04em',
                      padding: '3px 10px', borderRadius: '50px',
                      background: zone.status === 'live' ? 'rgba(91,201,127,0.12)' : 'rgba(184,147,90,0.12)',
                      color: zone.status === 'live' ? '#2E7D4F' : '#7A5A2A',
                    }}>
                      {zone.status === 'live' ? 'Live Now' : 'Coming Soon'}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Map card */}
          <div className="reveal reveal-delay-2">
            <div style={{ background: '#fff', border: '1px solid rgba(15,20,16,0.08)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 24px rgba(15,20,16,0.07)' }}>
              <div style={{ padding: '1.2rem 1.5rem', borderBottom: '1px solid rgba(15,20,16,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 500, color: '#0F1410' }}>Hyderabad delivery map</span>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {[{ color: '#5BC97F', label: 'Live' }, { color: '#B8935A', label: 'Soon' }].map((d) => (
                    <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.72rem', color: '#9B958E' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: d.color }} />
                      {d.label}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', borderRadius: 10, overflow: 'hidden' }}>
                  <rect width="340" height="260" fill="#EEF4EF" rx="10" />
                  <line x1="0" y1="130" x2="340" y2="130" stroke="#D5E5D8" strokeWidth="3" />
                  <line x1="170" y1="0" x2="170" y2="260" stroke="#D5E5D8" strokeWidth="3" />
                  <line x1="0" y1="80" x2="340" y2="190" stroke="#D5E5D8" strokeWidth="1.5" />
                  <ellipse cx="100" cy="110" rx="58" ry="42" fill="rgba(59,82,64,0.12)" stroke="#3B5240" strokeWidth="1.5" strokeDasharray="4 2" />
                  <text x="100" y="106" textAnchor="middle" fontSize="9" fontWeight="600" fill="#2C3A2F" fontFamily="Outfit,sans-serif">KPHB Colony</text>
                  <text x="100" y="118" textAnchor="middle" fontSize="7.5" fill="#5A7A61" fontFamily="Outfit,sans-serif">+ Kukatpally</text>
                  <circle cx="100" cy="110" r="5" fill="#3B5240" />
                  <ellipse cx="215" cy="105" rx="55" ry="38" fill="rgba(59,82,64,0.12)" stroke="#3B5240" strokeWidth="1.5" strokeDasharray="4 2" />
                  <text x="215" y="101" textAnchor="middle" fontSize="9" fontWeight="600" fill="#2C3A2F" fontFamily="Outfit,sans-serif">HiTech City</text>
                  <text x="215" y="114" textAnchor="middle" fontSize="7.5" fill="#5A7A61" fontFamily="Outfit,sans-serif">+ Madhapur</text>
                  <circle cx="215" cy="105" r="5" fill="#3B5240" />
                  <ellipse cx="240" cy="185" rx="50" ry="32" fill="rgba(184,147,90,0.1)" stroke="#B8935A" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="240" y="182" textAnchor="middle" fontSize="8" fill="#7A5A2A" fontFamily="Outfit,sans-serif">Gachibowli</text>
                  <text x="240" y="193" textAnchor="middle" fontSize="7" fill="#9B7040" fontFamily="Outfit,sans-serif">Coming Soon</text>
                  <ellipse cx="80" cy="195" rx="46" ry="28" fill="rgba(184,147,90,0.1)" stroke="#B8935A" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="80" y="193" textAnchor="middle" fontSize="8" fill="#7A5A2A" fontFamily="Outfit,sans-serif">Miyapur</text>
                  <text x="80" y="204" textAnchor="middle" fontSize="7" fill="#9B7040" fontFamily="Outfit,sans-serif">Coming Soon</text>
                  <rect x="148" y="54" width="44" height="20" rx="10" fill="#3B5240" />
                  <text x="170" y="68" textAnchor="middle" fontSize="8" fill="white" fontWeight="500" fontFamily="Outfit,sans-serif">📍 Kitchen</text>
                  <line x1="170" y1="74" x2="100" y2="108" stroke="#3B5240" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
                  <line x1="170" y1="74" x2="215" y2="103" stroke="#3B5240" strokeWidth="1" strokeDasharray="3 2" opacity="0.5" />
                </svg>
              </div>
              <div style={{ padding: '1rem 1.5rem', background: '#EEF4EF', borderTop: '1px solid rgba(59,82,64,0.1)' }}>
                <p style={{ fontSize: '0.8rem', color: '#3B5240', fontWeight: 400 }}>Check if we deliver to your pincode ↓</p>
                <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.8rem' }}>
                  <input
                    type="text"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                    placeholder="Enter your pincode (e.g. 500072)"
                    maxLength={6}
                    style={{ flex: 1, border: '1px solid rgba(15,20,16,0.13)', borderRadius: 10, padding: '9px 14px', fontSize: '0.85rem', fontFamily: 'inherit', background: '#fff', color: '#0F1410', outline: 'none' }}
                  />
                  <button
                    onClick={handleCheck}
                    disabled={checking}
                    style={{ background: '#3B5240', color: '#fff', border: 'none', borderRadius: 10, padding: '9px 18px', fontSize: '0.82rem', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s', whiteSpace: 'nowrap' }}
                  >
                    {checking ? '...' : 'Check'}
                  </button>
                </div>
                {pinResult && (
                  <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: pinResult.ok ? '#2E7D4F' : '#B8935A' }}>
                    {pinResult.text}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .delivery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
