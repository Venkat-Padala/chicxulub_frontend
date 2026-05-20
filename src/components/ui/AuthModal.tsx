import { useState, useEffect } from 'react';
import { X, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

const FITNESS_GOALS = [
  { value: '', label: 'Select your fitness goal (optional)' },
  { value: 'weight-loss', label: '🔥 Weight Loss' },
  { value: 'weight-gain', label: '💪 Weight Gain' },
  { value: 'muscle-building', label: '🏋️ Muscle Building' },
  { value: 'high-protein', label: '⚡ High Protein' },
  { value: 'balanced-lifestyle', label: '🥗 Balanced Lifestyle' },
  { value: 'keto-lowcarb', label: '🥑 Keto & Low Carb' },
  { value: 'custom', label: '🎯 Custom Nutrition' },
  { value: 'corporate', label: '🏢 Corporate Meals' },
];

export default function AuthModal() {
  const { isAuthModalOpen, authModalTab, closeAuthModal, login, register, isLoading, error, clearError } =
    useAuthStore();

  const [tab, setTab] = useState<'login' | 'register'>(authModalTab);
  const [showPass, setShowPass] = useState(false);

  // Login fields
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register fields
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regGoal, setRegGoal] = useState('');
  const [localError, setLocalError] = useState('');

  useEffect(() => {
    setTab(authModalTab);
    clearError();
    setLocalError('');
  }, [authModalTab, clearError]);

  useEffect(() => {
    if (!isAuthModalOpen) {
      setLoginEmail(''); setLoginPassword('');
      setRegName(''); setRegEmail(''); setRegPhone(''); setRegPassword(''); setRegGoal('');
      setLocalError('');
    }
  }, [isAuthModalOpen]);

  if (!isAuthModalOpen) return null;

  const switchTab = (t: 'login' | 'register') => {
    setTab(t);
    clearError();
    setLocalError('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    if (!loginEmail || !loginPassword) { setLocalError('Please fill all fields.'); return; }
    try { await login(loginEmail, loginPassword); }
    catch { /* error shown from store */ }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    if (!regName || !regEmail || !regPassword) { setLocalError('Name, email, and password are required.'); return; }
    if (regPassword.length < 6) { setLocalError('Password must be at least 6 characters.'); return; }
    try { await register({ name: regName, email: regEmail, password: regPassword, phone: regPhone, fitnessGoal: regGoal }); }
    catch { /* error shown from store */ }
  };

  const displayError = localError || error;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeAuthModal}
        style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(15,20,16,0.55)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          animation: 'fadeIn 0.2s ease',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 1001,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
          pointerEvents: 'none',
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: '#fff',
            borderRadius: 24,
            width: '100%',
            maxWidth: 440,
            boxShadow: '0 32px 80px rgba(15,20,16,0.22)',
            overflow: 'hidden',
            pointerEvents: 'auto',
            animation: 'fadeInUp 0.25s ease',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #3B5240 0%, #5A7A61 100%)',
              padding: '1.8rem 2rem 1.4rem',
              position: 'relative',
            }}
          >
            <button
              onClick={closeAuthModal}
              style={{
                position: 'absolute', top: 16, right: 16,
                background: 'rgba(255,255,255,0.15)', border: 'none',
                borderRadius: '50%', width: 32, height: 32,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff', transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            >
              <X size={16} />
            </button>
            <div style={{ fontSize: '1.5rem', marginBottom: 4 }}>🥗</div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.6rem', fontWeight: 400, color: '#fff', marginBottom: 4,
              }}
            >
              {tab === 'login' ? 'Welcome back' : 'Start your journey'}
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)' }}>
              {tab === 'login'
                ? 'Sign in to manage your nutrition plans'
                : 'Create your free Chicxulub account'}
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(15,20,16,0.08)' }}>
            {(['login', 'register'] as const).map((t) => (
              <button
                key={t}
                onClick={() => switchTab(t)}
                style={{
                  flex: 1,
                  padding: '0.9rem',
                  fontSize: '0.85rem',
                  fontWeight: tab === t ? 600 : 400,
                  color: tab === t ? '#3B5240' : '#9B958E',
                  background: 'none',
                  border: 'none',
                  borderBottom: tab === t ? '2px solid #3B5240' : '2px solid transparent',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                  textTransform: 'capitalize',
                }}
              >
                {t === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* Form */}
          <div style={{ padding: '1.5rem 2rem 2rem' }}>
            {displayError && (
              <div
                style={{
                  background: '#FEF2F2',
                  border: '1px solid #FECACA',
                  borderRadius: 10,
                  padding: '0.7rem 1rem',
                  fontSize: '0.82rem',
                  color: '#DC2626',
                  marginBottom: '1rem',
                }}
              >
                ⚠️ {displayError}
              </div>
            )}

            {tab === 'login' ? (
              <form onSubmit={handleLogin} noValidate>
                <InputField
                  label="Email address"
                  type="email"
                  value={loginEmail}
                  onChange={setLoginEmail}
                  placeholder="you@example.com"
                  id="auth-login-email"
                />
                <InputField
                  label="Password"
                  type={showPass ? 'text' : 'password'}
                  value={loginPassword}
                  onChange={setLoginPassword}
                  placeholder="Your password"
                  id="auth-login-password"
                  suffix={
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9B958E', display: 'flex' }}
                    >
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />
                <SubmitButton isLoading={isLoading} label="Sign In" />
              </form>
            ) : (
              <form onSubmit={handleRegister} noValidate>
                <InputField label="Full Name" type="text" value={regName} onChange={setRegName} placeholder="John Doe" id="auth-reg-name" />
                <InputField label="Email address" type="email" value={regEmail} onChange={setRegEmail} placeholder="you@example.com" id="auth-reg-email" />
                <InputField label="Phone (optional)" type="tel" value={regPhone} onChange={setRegPhone} placeholder="+91 98765 43210" id="auth-reg-phone" />
                <InputField
                  label="Password"
                  type={showPass ? 'text' : 'password'}
                  value={regPassword}
                  onChange={setRegPassword}
                  placeholder="Min. 6 characters"
                  id="auth-reg-password"
                  suffix={
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9B958E', display: 'flex' }}
                    >
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  }
                />
                {/* Fitness Goal Select */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 500, color: '#2C3429', marginBottom: 5 }}>
                    Fitness Goal
                  </label>
                  <select
                    value={regGoal}
                    onChange={(e) => setRegGoal(e.target.value)}
                    id="auth-reg-goal"
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      border: '1px solid rgba(15,20,16,0.15)',
                      borderRadius: 10,
                      fontSize: '0.87rem',
                      color: regGoal ? '#0F1410' : '#9B958E',
                      background: '#fff',
                      fontFamily: 'inherit',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {FITNESS_GOALS.map((g) => (
                      <option key={g.value} value={g.value}>{g.label}</option>
                    ))}
                  </select>
                </div>
                <SubmitButton isLoading={isLoading} label="Create Account" />
              </form>
            )}

            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#9B958E', marginTop: '1.2rem' }}>
              {tab === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => switchTab(tab === 'login' ? 'register' : 'login')}
                style={{ color: '#3B5240', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.78rem' }}
              >
                {tab === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function InputField({
  label, type, value, onChange, placeholder, id, suffix,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  id: string;
  suffix?: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={id} style={{ display: 'block', fontSize: '0.78rem', fontWeight: 500, color: '#2C3429', marginBottom: 5 }}>
        {label}
      </label>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={type === 'password' ? 'current-password' : 'on'}
          style={{
            width: '100%',
            padding: suffix ? '10px 40px 10px 14px' : '10px 14px',
            border: '1px solid rgba(15,20,16,0.15)',
            borderRadius: 10,
            fontSize: '0.87rem',
            color: '#0F1410',
            background: '#fff',
            fontFamily: 'inherit',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#3B5240')}
          onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(15,20,16,0.15)')}
        />
        {suffix && (
          <div style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }}>
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
}

function SubmitButton({ isLoading, label }: { isLoading: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      style={{
        width: '100%',
        padding: '12px',
        background: isLoading ? '#8CAF90' : '#3B5240',
        color: '#fff',
        border: 'none',
        borderRadius: '50px',
        fontSize: '0.9rem',
        fontWeight: 600,
        cursor: isLoading ? 'not-allowed' : 'pointer',
        fontFamily: 'inherit',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        transition: 'background 0.2s',
        marginTop: '0.5rem',
      }}
      onMouseEnter={(e) => { if (!isLoading) e.currentTarget.style.background = '#0F1410'; }}
      onMouseLeave={(e) => { if (!isLoading) e.currentTarget.style.background = '#3B5240'; }}
    >
      {isLoading && <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />}
      {label}
    </button>
  );
}
