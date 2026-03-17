'use client';

import { useState } from 'react';
import Navigation from "@/components/landing/navigation";
import HeroSection from "@/components/landing/hero-section";
import DegSpecials from "@/components/landing/deg-specials";
import BbqPlatters from "@/components/landing/bbq-platters";
import BranchesSection from "@/components/landing/branches-section";
import ReviewsSection from "@/components/landing/reviews-section";
import StatsSection from "@/components/landing/stats-section";
import OrderSection from "@/components/landing/order-section";
import ChatSupport from "@/components/landing/chat-support";
import Footer from "@/components/landing/footer";

export default function Page() {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  return (
    <main className="w-full bg-black text-white">
      <Navigation />
      <HeroSection setSelectedBranch={setSelectedBranch} />
      <DegSpecials />
      <BbqPlatters />
      <BranchesSection selectedBranch={selectedBranch} setSelectedBranch={setSelectedBranch} />
      <ReviewsSection />
      <StatsSection />
      <OrderSection selectedBranch={selectedBranch} />
      <ChatSupport />
      <Footer />
    </main>
  );
}
