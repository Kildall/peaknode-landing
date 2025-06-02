import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { SolutionsSection } from '@/components/solutions-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { CompanySection } from '@/components/company-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <SolutionsSection />
        <HowItWorksSection />
        <CompanySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
