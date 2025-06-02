import { CompanySection } from '@/components/company-section';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { Navigation } from '@/components/navigation';
import { SolutionsSection } from '@/components/solutions-section';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <Navigation />
      <main className="w-screen">
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
