import { useEffect } from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import HeroSection from '../components/features/HeroSection';
import TrustStrip from '../components/features/TrustStrip';
import DeliveryZones from '../components/features/DeliveryZones';
import KitchenSection from '../components/features/KitchenSection';
import MenuSection from '../components/features/MenuSection';
import PlansSection from '../components/features/PlansSection';
import OrderBuilder from '../components/features/OrderBuilder';
import NutritionistSection from '../components/features/NutritionistSection';
import TestimonialsSection from '../components/features/TestimonialsSection';
import HowItWorks from '../components/features/HowItWorks';
import FAQSection from '../components/features/FAQSection';
import CTASection from '../components/features/CTASection';

export default function Home() {
  useRevealOnScroll();

  // Re-observe after initial mount (for newly rendered elements)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 }
      );
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <HeroSection />
      <TrustStrip />
      <DeliveryZones />
      <KitchenSection />
      {/* New fitness nutrition program showcase — replaces old restaurant menu */}
      <MenuSection />
      <PlansSection />
      <OrderBuilder />
      <NutritionistSection />
      <TestimonialsSection />
      <HowItWorks />
      <FAQSection />
      <CTASection />
    </>
  );
}
