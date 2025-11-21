"use client";

import {
  Navigation,
  HeroSection,
  WhoAreWeSection,
  ExploreKeyFeaturesSection,
  OurPlatformsSection,
  WhyBusinessesTrustSection,
  PartnerSection,
  FooterSection,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navigation />

      {/* Unified max-width container for all sections */}
      <div className="w-full flex flex-col">
        {/* Hero section */}
        <HeroSection />

        {/* Shared container for Who Are We and Explore Key Features */}
        <div
          className="w-full bg-gray-100 px-4 md:px-6 lg:px-12"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="w-full max-w-7xl mx-auto">
            {/* Who Are We section */}
            <WhoAreWeSection />

            {/* Explore Key Features section */}
            <ExploreKeyFeaturesSection />
          </div>
        </div>

        {/* Our Platforms section */}
        <OurPlatformsSection />

        {/* Why Businesses Trust section */}
        <WhyBusinessesTrustSection />

        {/* Partner Section */}
        <PartnerSection />

        {/* Footer Section */}
        <FooterSection />
      </div>
    </main>
  );
}
