import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AnnouncementBar from './components/shared/AnnouncementBar';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import AuthModal from './components/ui/AuthModal';
import { useAuthStore } from './store/authStore';

export default function App() {
  const verifySession = useAuthStore((s) => s.verifySession);

  useEffect(() => {
    verifySession();
  }, [verifySession]);

  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      {/* Global Auth Modal */}
      <AuthModal />
    </div>
  );
}
