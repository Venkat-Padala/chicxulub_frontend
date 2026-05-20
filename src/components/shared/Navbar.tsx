import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, LogOut, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const NAV_LINKS = [
  { href: '#plans', label: 'Plans & Pricing' },
  { href: '#menu', label: 'Nutrition Programs' },
  { href: '#delivery', label: 'Delivery Zones' },
  { href: '#kitchen', label: 'Our Kitchen' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
];

const LogoIcon = () => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="w-full h-full">
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { user, logout, openAuthModal } = useAuthStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close user menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: 'rgba(250,248,244,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(15,20,16,0.08)',
        transition: 'box-shadow 0.3s',
        boxShadow: scrolled ? '0 4px 24px rgba(15,20,16,0.07)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 var(--section-px)', height: '68px', gap: '1.5rem' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, overflow: 'hidden' }}>
            <LogoIcon />
          </div>
          <span style={{ display: 'flex', alignItems: 'baseline', gap: '6px', color: '#0F1410' }}>
            <strong style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.45rem', fontWeight: 600, letterSpacing: '0.01em' }}>Chicxulub</strong>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9B958E', fontWeight: 500 }}>Nutrition</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex" style={{ gap: '2rem', listStyle: 'none', flex: 1 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                style={{ fontFamily: 'inherit', fontSize: '0.82rem', fontWeight: 400, color: '#9B958E', letterSpacing: '0.02em', transition: 'color 0.2s', background: 'none', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3B5240')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9B958E')}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden lg:flex" style={{ alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#9B958E', whiteSpace: 'nowrap' }}>
            <div className="live-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#5BC97F', flexShrink: 0 }} />
            Delivering in Hyderabad
          </div>

          {user ? (
            /* User menu dropdown */
            <div ref={userMenuRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: '#EEF4EF', border: '1px solid rgba(59,82,64,0.2)',
                  borderRadius: '50px', padding: '7px 14px',
                  fontSize: '0.82rem', fontWeight: 500, color: '#3B5240',
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#d6e8d8')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#EEF4EF')}
              >
                <User size={14} />
                {user.name.split(' ')[0]}
                <ChevronDown size={12} style={{ transition: 'transform 0.2s', transform: userMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>

              {userMenuOpen && (
                <div
                  style={{
                    position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                    background: '#fff', border: '1px solid rgba(15,20,16,0.08)',
                    borderRadius: 14, boxShadow: '0 8px 32px rgba(15,20,16,0.12)',
                    minWidth: 200, overflow: 'hidden', zIndex: 300,
                    animation: 'fadeInUp 0.15s ease',
                  }}
                >
                  <div style={{ padding: '0.8rem 1rem', borderBottom: '1px solid rgba(15,20,16,0.07)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0F1410' }}>{user.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#9B958E' }}>{user.email}</div>
                  </div>
                  <button
                    onClick={handleLogout}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 8,
                      width: '100%', padding: '0.8rem 1rem',
                      fontSize: '0.84rem', color: '#DC2626',
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'inherit', transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#FEF2F2')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Auth buttons */
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => openAuthModal('login')}
                id="nav-signin-btn"
                style={{
                  background: 'none', border: '1px solid rgba(15,20,16,0.15)',
                  borderRadius: '50px', padding: '8px 18px',
                  fontSize: '0.82rem', fontWeight: 400, color: '#2C3429',
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#3B5240'; e.currentTarget.style.color = '#3B5240'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(15,20,16,0.15)'; e.currentTarget.style.color = '#2C3429'; }}
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal('register')}
                id="nav-signup-btn"
                style={{
                  background: '#3B5240', color: '#fff',
                  border: 'none', borderRadius: '50px', padding: '8px 18px',
                  fontSize: '0.82rem', fontWeight: 500,
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#0F1410'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#3B5240'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Start Free
              </button>
            </div>
          )}

          <a
            href="https://wa.me/918260333968?text=Hi%20Chicxulub%20Nutrition%2C%20I%20would%20like%20to%20place%20an%20order."
            target="_blank" rel="noopener noreferrer"
            style={{
              background: '#25D366', color: '#fff',
              padding: '8px 16px', borderRadius: '50px',
              fontSize: '0.8rem', fontWeight: 500,
              transition: 'all 0.2s', whiteSpace: 'nowrap',
              display: 'inline-flex', alignItems: 'center', gap: 5,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#1aad52'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.136 1.542 5.868L0 24l6.314-1.524A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.034-1.387l-.361-.213-3.746.905.945-3.668-.235-.378A9.818 9.818 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/></svg>
            Order
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setOpen(!open)}
          style={{ marginLeft: 'auto', color: '#0F1410', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(250,248,244,0.99)', borderTop: '1px solid rgba(15,20,16,0.08)', padding: '1rem 2rem 1.5rem' }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.7rem 0', fontFamily: 'inherit', fontSize: '0.9rem', color: '#2C3429', background: 'none', border: 'none', borderBottom: '1px solid rgba(15,20,16,0.06)', cursor: 'pointer' }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            {user ? (
              <button
                onClick={() => { logout(); setOpen(false); }}
                style={{ flex: 1, background: '#FEF2F2', color: '#DC2626', border: 'none', borderRadius: '50px', padding: '10px 16px', fontSize: '0.86rem', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Sign Out
              </button>
            ) : (
              <>
                <button
                  onClick={() => { openAuthModal('login'); setOpen(false); }}
                  style={{ flex: 1, border: '1px solid rgba(15,20,16,0.15)', background: 'none', color: '#2C3429', borderRadius: '50px', padding: '10px 16px', fontSize: '0.86rem', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { openAuthModal('register'); setOpen(false); }}
                  style={{ flex: 1, background: '#3B5240', color: '#fff', border: 'none', borderRadius: '50px', padding: '10px 16px', fontSize: '0.86rem', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Start Free
                </button>
              </>
            )}
            <a
              href="https://wa.me/918260333968"
              target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', flex: '0 0 auto', background: '#25D366', color: '#fff', padding: '10px 18px', borderRadius: '50px', textAlign: 'center', fontSize: '0.86rem', fontWeight: 500 }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
