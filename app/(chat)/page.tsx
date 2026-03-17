import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturedMenu } from "@/components/landing/featured-menu";
import { FeaturesSection } from "@/components/landing/features-section";
import { DealsSection } from "@/components/landing/deals-section";
import { ReviewsSection } from "@/components/landing/reviews-section";
import { AboutSection } from "@/components/landing/about-section";
import { ContactSection } from "@/components/landing/contact-section";
import { Footer } from "@/components/landing/footer";

export default function Page() {
  return (
    <main className="w-full bg-black">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <FeaturedMenu />
        <FeaturesSection />
        <DealsSection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
