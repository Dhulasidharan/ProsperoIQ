"use client";

import { Navigation, HeroSection } from "@/components";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-white flex flex-col overflow-hidden">
      <Navigation />
      {/* Hero section fills remaining space */}
      <div className="flex-1 overflow-hidden">
        <HeroSection />
      </div>
    </main>
  );
}
