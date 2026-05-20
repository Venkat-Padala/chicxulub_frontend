import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

const api = axios.create({ baseURL: '/api', timeout: 10000 });

// Attach JWT to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('chx_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export interface AuthUser {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  fitnessGoal?: string;
  role: 'user' | 'admin';
}

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthModalOpen: boolean;
  authModalTab: 'login' | 'register';
  register: (data: RegisterData) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  openAuthModal: (tab?: 'login' | 'register') => void;
  closeAuthModal: () => void;
  verifySession: () => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  fitnessGoal?: string;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,
      isAuthModalOpen: false,
      authModalTab: 'login',

      register: async (data) => {
        set({ isLoading: true, error: null });
        try {
          const res = await api.post('/auth/register', data);
          const { token, user } = res.data;
          localStorage.setItem('chx_token', token);
          set({ user, token, isLoading: false, isAuthModalOpen: false, error: null });
        } catch (err: unknown) {
          const message =
            (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
            'Registration failed. Please try again.';
          set({ isLoading: false, error: message });
          throw new Error(message);
        }
      },

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const res = await api.post('/auth/login', { email, password });
          const { token, user } = res.data;
          localStorage.setItem('chx_token', token);
          set({ user, token, isLoading: false, isAuthModalOpen: false, error: null });
        } catch (err: unknown) {
          const message =
            (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
            'Login failed. Please check your credentials.';
          set({ isLoading: false, error: message });
          throw new Error(message);
        }
      },

      logout: () => {
        localStorage.removeItem('chx_token');
        set({ user: null, token: null, error: null });
      },

      clearError: () => set({ error: null }),

      openAuthModal: (tab = 'login') =>
        set({ isAuthModalOpen: true, authModalTab: tab, error: null }),

      closeAuthModal: () => set({ isAuthModalOpen: false, error: null }),

      verifySession: async () => {
        const { token } = get();
        if (!token) return;
        try {
          const res = await api.get('/auth/verify');
          set({ user: res.data.user });
        } catch {
          localStorage.removeItem('chx_token');
          set({ user: null, token: null });
        }
      },
    }),
    {
      name: 'chx-auth',
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);
